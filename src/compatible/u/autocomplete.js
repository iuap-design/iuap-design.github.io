+ function($) {
	'use strict';

	var Autocomplete = function(element, options) {
		this.$input = $(element)
		this.options = $.extend({}, Autocomplete.DEFAULTS, options)
		this.requestIndex = 0
		this.pending = 0
		// Create a link to self
		var me = this;

		// Create jQuery object for input element
		//	var $input = $(input).attr("autocomplete", "off");

		// Apply inputClass if necessary
		if (this.options.inputClass) this.$input.addClass(this.options.inputClass);

		// Create results
		this.$results = $("#autocompdiv");
		if (this.$results.length == 0){
			this.$results = $('<div id="autocompdiv"></div>')
			$('body').append(this.$results)
		}
//		var results = document.createElement("div");
		// Create jQuery object for results
		this.$results.hide().addClass(this.options.resultsClass).css("position", "absolute");
		if (this.options.width > 0) this.$results.css("width", this.options.width);

		// Add to body element
//		$("body").append(results);

		//	input.autocompleter = me;

		this.timeout = null;
		this.prev = "";
		this.active = -1;
		this.cache = {};
		this.keyb = false;
		this.hasFocus = false;
		this.lastKeyPressCode = null;

		this._initSource();


		this.$input.keydown(function(e) {
				// track last key pressed
				me.lastKeyPressCode = e.keyCode;
				switch (e.keyCode) {
					case 38: // up
						e.preventDefault();
						me.moveSelect(-1);
						break;
					case 40: // down
						e.preventDefault();
						me.moveSelect(1);
						break;
					case 9: // tab
					case 13: // return
						if (me.selectCurrent()) {
							// make sure to blur off the current field
							me.$input.get(0).blur();
							e.preventDefault();
						}
						break;
					default:
						me.active = -1;
						if (me.timeout) clearTimeout(me.timeout);
						me.timeout = setTimeout(function() {
							me.onChange();
						}, me.options.delay);
						break;
				}
			})
			.focus(function() {
				// track whether the field has focus, we shouldn't process any results if the field no longer has focus
				me.hasFocus = true;
			})
			.blur(function() {
				// track whether the field has focus
				me.hasFocus = false;
				// me.hideResults();
			});

		this.hideResultsNow();


		//  this.update(this.options)
	}

	Autocomplete.DEFAULTS = {
		inputClass: "ac_input",
		resultsClass: "ac_results",
		lineSeparator: "\n",
		cellSeparator: "|",
		minChars: 1,
		delay: 400,
		matchCase: 0,
		matchSubset: 1,
		matchContains: 0,
		cacheLength: 1,
		mustMatch: 0,
		extraParams: {},
		loadingClass: "ac_loading",
		selectFirst: false,
		selectOnly: false,
		maxItemsToShow: -1,
		autoFill: false,
		width: 0,
		source:null,
		select: null
	}

	Autocomplete.fn = Autocomplete.prototype;

	// flush cache
	Autocomplete.fn.flushCache = function() {
		this.cache = {};
		this.cache.data = {};
		this.cache.length = 0;
	};

	Autocomplete.fn._initSource = function() {
		var array, url, me = this;
		if ( $.isArray( this.options.source ) ) {
			array = this.options.source;
			this.source = function( request, response ) {
//				response( $.ui.autocomplete.filter( array, request.term ) );
				response(me.filterData(request.term, array));
			};
		} else if ( typeof this.options.source === "string" ) {
			url = this.options.source;
			this.source = function( request, response ) {
				if ( me.xhr ) {
					me.xhr.abort();
				}
				me.xhr = $.ajax({
					url: url,
					data: request,
					dataType: "json",
					success: function( data ) {
						response( data );
					},
					error: function() {
						response([]);
					}
				});
			};
		} else {
			this.source = this.options.source;
		}
	}
	
	Autocomplete.fn._response = function() {
		var index = ++this.requestIndex;

		return $.proxy(function( content ) {
			if ( index === this.requestIndex ) {
				this.__response( content );
			}

			this.pending--;
			if ( !this.pending ) {
//				this.element.removeClass( "ui-autocomplete-loading" );
			}
		}, this );
	}

	Autocomplete.fn.__response = function( content ) {
		if ( content ) 
			this.receiveData2(content);
			this.showResults();
	}

	Autocomplete.fn.onChange = function() {
		// ignore if the following keys are pressed: [del] [shift] [capslock]
		if (this.lastKeyPressCode == 46 || (this.lastKeyPressCode > 8 && this.lastKeyPressCode < 32)) return this.$results.hide();
		var v = this.$input.val();
		// 参照修改需求
//		if (v == this.prev) return;
		this.prev = v;
		if (v.length >= this.options.minChars || v.length >= 0) {
			this.$input.addClass(this.options.loadingClass);
//			this.requestData(v);
			this.pending++;
			this.source( { term: v }, this._response() );
		} else {
			this.$input.removeClass(this.options.loadingClass);
			this.$results.hide();
		}
	};

	Autocomplete.fn.moveSelect = function(step) {
		var lis = $("li", this.$results[0]);
		if (!lis) return;

		this.active += step;

		if (this.active < 0) {
			this.active = 0;
		} else if (this.active >= lis.size()) {
			this.active = lis.size() - 1;
		}

		lis.removeClass("ac_over");

		$(lis[this.active]).addClass("ac_over");
	};

	Autocomplete.fn.selectCurrent = function() {
		var li = $("li.ac_over", this.$results[0])[0];
		if (!li) {
			var $li = $("li", this.$results[0]);
			if (this.options.selectOnly) {
				if ($li.length == 1) li = $li[0];
			} else if (this.options.selectFirst) {
				li = $li[0];
			}
		}
		if (li) {
			this.selectItem(li);
			return true;
		} else {
			return false;
		}
	};

	Autocomplete.fn.selectItem = function(li) {
		var me = this;
		if (!li) {
			li = document.createElement("li");
//			li.extra = [];
			li.selectValue = "";
		}
		var v = $.trim(li.selectValue ? li.selectValue : li.innerHTML);
		this.lastSelected = v;
		this.prev = v;
		this.$results.html("");
		this.$input.val(v);
		this.hideResultsNow();
		if (this.options.select) setTimeout(function() {
			me.options.select(li._item)
		}, 1);
	};

	// selects a portion of the input string
	Autocomplete.fn.createSelection = function(start, end) {
		// get a reference to the input element
		var field = this.$input.get(0);
		if (field.createTextRange) {
			var selRange = field.createTextRange();
			selRange.collapse(true);
			selRange.moveStart("character", start);
			selRange.moveEnd("character", end);
			selRange.select();
		} else if (field.setSelectionRange) {
			field.setSelectionRange(start, end);
		} else {
			if (field.selectionStart) {
				field.selectionStart = start;
				field.selectionEnd = end;
			}
		}
		field.focus();
	};

	// fills in the input box w/the first match (assumed to be the best match)
	Autocomplete.fn.autoFill = function(sValue) {
		// if the last user key pressed was backspace, don't autofill
		if (this.lastKeyPressCode != 8) {
			// fill in the value (keep the case the user has typed)
			this.$input.val(this.$input.val() + sValue.substring(this.prev.length));
			// select the portion of the value not typed by the user (so the next character will erase)
			this.createSelection(this.prev.length, sValue.length);
		}
	};

	Autocomplete.fn.showResults = function() {
		// get the position of the input field right now (in case the DOM is shifted)
		var pos = findPos(this.$input[0]);
		// either use the specified width, or autocalculate based on form element
		var iWidth = (this.options.width > 0) ? this.options.width : this.$input.width();
		// reposition
		if('100%'===this.options.width){
			this.$results.css({
				top: (pos.y + this.$input[0].offsetHeight) + "px",
				left: pos.x + "px"
			}).show();
		}else{
			this.$results.css({
				width: parseInt(iWidth) + "px",
				top: (pos.y + this.$input[0].offsetHeight) + "px",
				left: pos.x + "px"
			}).show();
		}
	};

	Autocomplete.fn.hideResults = function() {
		var me = this;
		if (this.timeout) clearTimeout(this.timeout);
		this.timeout = setTimeout(function() {
			me.hideResultsNow();
		}, 200);
	};

	Autocomplete.fn.hideResultsNow = function() {
		if (this.timeout) clearTimeout(this.timeout);
		this.$input.removeClass(this.options.loadingClass);
		//if (this.$results.is(":visible")) {
			this.$results.hide();
		//}
		if (this.options.mustMatch) {
			var v = this.$input.val();
			if (v != this.lastSelected) {
				this.selectItem(null);
			}
		}
	};

	Autocomplete.fn.receiveData = function(q, data) {
		if (data) {
			this.$input.removeClass(this.options.loadingClass);
			this.$results.html('');

			if (!this.hasFocus || data.length == 0) return this.hideResultsNow();

			this.$results.append(this.dataToDom(data));
			// autofill in the complete box w/the first match as long as the user hasn't entered in more data
			if (this.options.autoFill && (this.$input.val().toLowerCase() == q.toLowerCase())) this.autoFill(data[0][0]);
			this.showResults();
		} else {
			this.hideResultsNow();
		}
	};
	
	Autocomplete.fn.filterData = function(v, items) {
		if (!v) return items;
		var _items = [];
		for (var i =0, count = items.length; i< count; i++){
			var label = items[i].label;
			if (label.indexOf(v) == 0)
				_items.push(items[i]);
		}
		return _items;
	};
	
	
	Autocomplete.fn.receiveData2 = function(items) {
		if (items) {
			this.$input.removeClass(this.options.loadingClass);
			this.$results.html('');

			// if the field no longer has focus or if there are no matches, do not display the drop down
			if (!this.hasFocus || items.length == 0) return this.hideResultsNow();

			this.$results.append(this.dataToDom2(items));
			this.showResults();
		} else {
			this.hideResultsNow();
		}		
	}
	Autocomplete.fn.dataToDom2 = function(items) {
		var ul = document.createElement("ul");
		var num = items.length;
		var me = this;

		// limited results to a max number
		if ((this.options.maxItemsToShow > 0) && (this.options.maxItemsToShow < num)) num = this.options.maxItemsToShow;

		for (var i = 0; i < num; i++) {
			var item = items[i];
			if (!item) continue;
			var li = document.createElement("li");
			if (this.options.formatItem) 
				li.innerHTML = this.options.formatItem(item, i, num);
			else 
				li.innerHTML = item.label;
			li.selectValue = item.label;
			li._item = item;
			ul.appendChild(li);
			$(li).hover(
				function() {
					$("li", ul).removeClass("ac_over");
					$(this).addClass("ac_over");
					me.active = indexOf($("li", ul), $(this).get(0));
				},
				function() {
					$(this).removeClass("ac_over");
				}
			).mousedown(function(e) {
				e.preventDefault();
				e.stopPropagation();
				me.selectItem(this)
			});
		}
		return ul;
	};	

	Autocomplete.fn.parseData = function(data) {
		if (!data) return null;
		var parsed = [];
		var rows = data.split(this.options.lineSeparator);
		for (var i = 0; i < rows.length; i++) {
			var row = $.trim(rows[i]);
			if (row) {
				parsed[parsed.length] = row.split(this.options.cellSeparator);
			}
		}
		return parsed;
	};

	Autocomplete.fn.dataToDom = function(data) {
		var ul = document.createElement("ul");
		var num = data.length;
		var me = this;

		// limited results to a max number
		if ((this.options.maxItemsToShow > 0) && (this.options.maxItemsToShow < num)) num = this.options.maxItemsToShow;

		for (var i = 0; i < num; i++) {
			var row = data[i];
			if (!row) continue;
			var li = document.createElement("li");
			if (this.options.formatItem) {
				li.innerHTML = this.options.formatItem(row, i, num);
				li.selectValue = row[0];
			} else {
				li.innerHTML = row[0];
				li.selectValue = row[0];
			}
			var extra = null;
			if (row.length > 1) {
				extra = [];
				for (var j = 1; j < row.length; j++) {
					extra[extra.length] = row[j];
				}
			}
			li.extra = extra;
			ul.appendChild(li);
			$(li).hover(
				function() {
					$("li", ul).removeClass("ac_over");
					$(this).addClass("ac_over");
					me.active = indexOf($("li", ul), $(this).get(0));
				},
				function() {
					$(this).removeClass("ac_over");
				}
			).click(function(e) {
				e.preventDefault();
				e.stopPropagation();
				me.selectItem(this)
			});
		}
		return ul;
	};

	Autocomplete.fn.requestData = function(q) {
		var me = this;
		if (!this.options.matchCase) q = q.toLowerCase();
		var data = this.options.cacheLength ? this.loadFromCache(q) : null;
		// recieve the cached data
		if (data) {
			this.receiveData(q, data);
			// if an AJAX url has been supplied, try loading the data now
		} else if ((typeof this.options.url == "string") && (this.options.url.length > 0)) {
			$.get(this.makeUrl(q), function(data) {
				data = me.parseData(data);
				me.addToCache(q, data);
				me.receiveData(q, data);
			});
			// if there's been no data found, remove the loading class
		} else {
			this.$input.removeClass(this.options.loadingClass);
		}
	};

	Autocomplete.fn.makeUrl = function(q) {
		var url = this.options.url + "?q=" + encodeURI(q);
		for (var i in this.options.extraParams) {
			url += "&" + i + "=" + encodeURI(this.options.extraParams[i]);
		}
		return url;
	};

	Autocomplete.fn.loadFromCache = function(q) {
		if (!q) return null;
		if (this.cache.data[q]) return this.cache.data[q];
		if (this.options.matchSubset) {
			for (var i = q.length - 1; i >= this.options.minChars; i--) {
				var qs = q.substr(0, i);
				var c = this.cache.data[qs];
				if (c) {
					var csub = [];
					for (var j = 0; j < c.length; j++) {
						var x = c[j];
						var x0 = x[0];
						if (this.matchSubset(x0, q)) {
							csub[csub.length] = x;
						}
					}
					return csub;
				}
			}
		}
		return null;
	};

	Autocomplete.fn.matchSubset = function(s, sub) {
		if (!this.options.matchCase) s = s.toLowerCase();
		var i = s.indexOf(sub);
		if (i == -1) return false;
		return i == 0 || this.options.matchContains;
	};

	Autocomplete.fn.addToCache = function(q, data) {
		if (!data || !q || !this.options.cacheLength) return;
		if (!this.cache.length || this.cache.length > this.options.cacheLength) {
			this.flushCache();
			this.cache.length++;
		} else if (!this.cache[q]) {
			this.cache.length++;
		}
		this.cache.data[q] = data;
	};

	function findPos(obj) {
		var curleft = obj.offsetLeft || 0;
		var curtop = obj.offsetTop || 0;
		while (obj = obj.offsetParent) {
			curleft += obj.offsetLeft
			curtop += obj.offsetTop
		}
		return {
			x: curleft,
			y: curtop
		};
	}

	function indexOf($element, e) {
		for (var i = 0; i < $element.length; i++) {
			if ($element[i] == e) return i;
		}
		return -1;
	};



	function Plugin(option) {
		if (this.length != 1) return;
		var $this = $(this)
		var data = $this.data('u.autocomplete')
		var options = typeof option == 'object' && option

		if (!data) $this.data('u.autocomplete', (data = new Autocomplete(this, options)))
			//	else data.update(options);
		return data;
	}

	var old = $.fn.autocomplete

	$.fn.autocomplete = Plugin
	$.fn.autocomplete.Constructor = Autocomplete



	$.fn.autocomplete.noConflict = function() {
		$.fn.autocomplete = old
		return this
	}

}($);