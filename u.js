(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.u = undefined;

	var _extend = __webpack_require__(1);

	var _neouiAutocomplete = __webpack_require__(3);

	var _neouiDatetimepicker = __webpack_require__(4);

	var _neouiLayout = __webpack_require__(5);

	var _neouiMenu = __webpack_require__(6);

	var _neouiTabs = __webpack_require__(7);

	var _neouiTooltip = __webpack_require__(8);

	var _neouiYearmonth = __webpack_require__(9);

	var ex = { "Autocomplete": _neouiAutocomplete.Autocomplete, "DateTimePicker": _neouiDatetimepicker.DateTimePicker, "NavLayout": _neouiLayout.NavLayout, "NavLayoutTab": _neouiLayout.NavLayoutTab, "Menu": _neouiMenu.Menu, "Tabs": _neouiTabs.Tabs, "Tooltip": _neouiTooltip.Tooltip, "YearMonth": _neouiYearmonth.YearMonth };
	(0, _extend.extend)(ex, window.u || {});
	window.u = ex;
	exports.u = ex;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.extend = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                   * Module : Sparrow extend
	                                                                                                                                                                                                                                                   * Author : Kvkens(yueming@yonyou.com)
	                                                                                                                                                                                                                                                   * Date	  : 2016-07-27 21:46:50
	                                                                                                                                                                                                                                                   */

	var _enumerables = __webpack_require__(2);

	/**
	 * 复制对象属性
	 *
	 * @param {Object}  目标对象
	 * @param {config} 源对象
	 */
	var extend = function extend(object, config) {
		var args = arguments,
		    options;
		if (args.length > 1) {
			for (var len = 1; len < args.length; len++) {
				options = args[len];
				if (object && options && (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
					var i, j, k;
					for (i in options) {
						object[i] = options[i];
					}
					if (_enumerables.enumerables) {
						for (j = _enumerables.enumerables.length; j--;) {
							k = _enumerables.enumerables[j];
							if (options.hasOwnProperty && options.hasOwnProperty(k)) {
								object[k] = options[k];
							}
						}
					}
				}
			}
		}
		return object;
	};

	exports.extend = extend;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	/**
	 * Module : Sparrow extend enum
	 * Author : Kvkens(yueming@yonyou.com)
	 * Date	  : 2016-07-27 21:46:50
	 */

	var U_LANGUAGES = "i_languages";
	var U_THEME = "u_theme";
	var U_LOCALE = "u_locale";
	var U_USERCODE = "usercode";

	var enumerables = true,
	    enumerablesTest = {
		toString: 1
	},
	    toString = Object.prototype.toString;
	for (var i in enumerablesTest) {
		exports.enumerables = enumerables = null;
	}
	if (enumerables) {
		exports.enumerables = enumerables = ['hasOwnProperty', 'valueOf', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'constructor'];
	}

	exports.enumerables = enumerables;
	exports.U_LANGUAGES = U_LANGUAGES;
	exports.U_THEME = U_THEME;
	exports.U_LOCALE = U_LOCALE;
	exports.U_USERCODE = U_USERCODE;

/***/ },
/* 3 */
/***/ function(module, exports) {

	/**
	 * Module : neoui-autocompete
	 * Author : Kvkens(yueming@yonyou.com)
	 * Date	  : 2016-08-02 15:14:43
	 */

	import {BaseComponent} from 'neoui-sparrow/js/BaseComponent';
	import {addClass,removeClass,hasClass,getStyle,makeDOM} from 'neoui-sparrow/js/dom';
	import {on,stopEvent,trigger} from 'neoui-sparrow/js/event';
	import {extend} from 'neoui-sparrow/js/extend';
	import {env} from 'neoui-sparrow/js/env';
	import {isArray} from 'neoui-sparrow/js/util';
	import {ajax} from 'neoui-sparrow/js/ajax';
	import {compMgr} from 'neoui-sparrow/js/compMgr';


	var Autocomplete = BaseComponent.extend({
		defaults: {
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
			source: null,
			select: null,
			multiSelect: false,
			//moreClick:function(){},
		},
		init: function() {
			var self = this;
			this.options = extend({}, this.defaults, this.options);
			this.requestIndex = 0;
			this.pending = 0;
			if(this.options.inputClass) {
				addClass(this.element, this.options.inputClass);
			}
			this._results = document.querySelector('#autocompdiv');
			if(!this._results) {
				this._results = makeDOM('<div id="autocompdiv"></div>');
				document.body.appendChild(this._results);
			}
			this._results.style.display = 'none';
			this._results.style.position = 'absolute';
			addClass(this._results, this.options.resultsClass);
			if(this.options.width) {
				this._results.style.width = this.options.width;
			}
			this.timeout = null;
			this.prev = "";
			this.active = -1;
			this.cache = {};
			this.keyb = false;
			this.hasFocus = false;
			this.lastKeyPressCode = null;
			this._initSource();
			on(this.element, 'keydown', function(e) {
				self.lastKeyPressCode = e.keyCode;
				switch(e.keyCode) {
					case 38: // up
						stopEvent(e);
						self.moveSelect(-1);
						break;
					case 40: // down
						stopEvent(e);
						self.moveSelect(1);
						break;
					case 9: // tab
					case 13: // return
						if(self.selectCurrent()) {
							// make sure to blur off the current field
							// self.element.blur();
							stopEvent(e);
						}
						break;
					default:
						self.active = -1;
						if(self.timeout) clearTimeout(self.timeout);
						self.timeout = setTimeout(function() {
							self.onChange();
						}, self.options.delay);
						break;
				}
			});
			on(this.element, 'focus', function() {
				self.hasFocus = true;
			});
			on(this.element, 'blur', function() {
				self.hasFocus = false;
				self.hideResults();
			});
			this.hideResultsNow();
		},
		flushCache: function() {
			this.cache = {};
			this.cache.data = {};
			this.cache.length = 0;
		},
		_initSource: function() {
			var array, url, self = this;
			if(isArray(this.options.source)) {
				array = this.options.source;
				this.source = function(request, response) {
					//				response( $.ui.autocomplete.filter( array, request.term ) );
					response(self.filterData(request.term, array));
				};
			} else if(typeof this.options.source === "string") {
				url = this.options.source;
				this.source = function(request, response) {
					if(self.xhr) {
						self.xhr.abort();
					}
					self.xhr = ajax({
						url: url,
						data: request,
						dataType: "json",
						success: function(data) {
							response(data);
						},
						error: function() {
							response([]);
						}
					});
				};
			} else {
				this.source = this.options.source;
			}
		},
		_response: function() {
			var self = this;
			var index = ++this.requestIndex;

			return function(content) {
				if(index === self.requestIndex) {
					self.__response(content);
				}

				self.pending--;
				if(!self.pending) {}
			};
		},
		__response: function(content) {
			if(content)
				this.receiveData2(content);
			this.showResults();
		},
		onChange: function() {
			// ignore if the following keys are pressed: [del] [shift] [capslock]
			if(this.lastKeyPressCode == 46 || (this.lastKeyPressCode > 8 && this.lastKeyPressCode < 32))
				return this._results.style.disply = 'none';
			if(!this.element.value) return;
			var vs = this.element.value.split(','),
				v = vs[vs.length - 1].trim()
			if(v == this.prev) return;
			this.prev = v;
			if(v.length >= this.options.minChars) {
				addClass(this.element, this.options.loadingClass);
				this.pending++;
				this.source({
					term: v
				}, this._response());
			} else {
				removeClass(this.element, this.options.loadingClass);
				this._results.style.display = 'none';
			}
		},
		moveSelect: function(step) {
			var lis = this._results.querySelectorAll('li');
			if(!lis) return;

			this.active += step;

			if(this.active < 0) {
				this.active = 0;
			} else if(this.active >= lis.length) {
				this.active = lis.length - 1;
			}
			lis.forEach(function(li) {
				removeClass(li, 'ac_over');
			});
			addClass(lis[this.active], 'ac_over');
		},
		selectCurrent: function() {
			var li = this._results.querySelector('li.ac_over'); //$("li.ac_over", this.$results[0])[0];
			if(!li) {
				var _li = this._results.querySelectorAll('li'); //$("li", this.$results[0]);
				if(this.options.selectOnly) {
					if(_li.length == 1) li = _li[0];
				} else if(this.options.selectFirst) {
					li = _li[0];
				}
			}
			if(li) {
				this.selectItem(li);
				return true;
			} else {
				return false;
			}
		},
		selectItem: function(li) {
			var self = this;
			if(!li) {
				li = document.createElement("li");
				li.selectValue = "";
			}
			var v = li.selectValue ? li.selectValue : li.innerHTML;
			this.lastSelected = v;
			this.prev = v;
			this._results.innerHTML = '';
			if(this.options.multiSelect) {

				if((this.element.value + ',').indexOf(v + ',') != -1)
					return;
				var vs = this.element.value.split(',');
				var lastValue = this.element.value.substring(0, this.element.value.lastIndexOf(','));

				this.element.value = (lastValue ? lastValue + ', ' : lastValue) + v + ', ';
			} else {
				this.element.value = v;
			}

			this.hideResultsNow();

			this.element.focus();

			if(this.options.select) setTimeout(function() {
				self.options.select(li._item, self)
			}, 1);
		},
		createSelection: function(start, end) {
			// get a reference to the input element
			var field = this.element;
			if(field.createTextRange) {
				var selRange = field.createTextRange();
				selRange.collapse(true);
				selRange.moveStart("character", start);
				selRange.moveEnd("character", end);
				selRange.select();
			} else if(field.setSelectionRange) {
				field.setSelectionRange(start, end);
			} else {
				if(field.selectionStart) {
					field.selectionStart = start;
					field.selectionEnd = end;
				}
			}
			field.focus();
		},
		// fills in the input box w/the first match (assumed to be the best match)
		autoFill: function(sValue) {
			// if the last user key pressed was backspace, don't autofill
			if(this.lastKeyPressCode != 8) {
				// fill in the value (keep the case the user has typed)
				this.element.value = this.element.value + sValue.substring(this.prev.length);
				// select the portion of the value not typed by the user (so the next character will erase)
				this.createSelection(this.prev.length, sValue.length);
			}
		},
		showResults: function() {
			// get the position of the input field right now (in case the DOM is shifted)
			var pos = findPos(this.element);
			// either use the specified width, or autocalculate based on form element
			var iWidth = (this.options.width > 0) ? this.options.width : this.element.offsetWidth;
			// reposition
			if('100%' === this.options.width) {
				this._results.style.top = (pos.y + this.element.offsetHeight) + "px";
				this._results.style.left = pos.x + "px";
				this._results.style.display = 'block';
			} else {
				this._results.style.width = parseInt(iWidth) + "px";
				this._results.style.top = (pos.y + this.element.offsetHeight) + "px";
				this._results.style.left = pos.x + "px";
				this._results.style.display = 'block';
			}
		},
		hideResults: function() {
			var self = this;
			if(this.timeout) clearTimeout(this.timeout);
			this.timeout = setTimeout(function() {
				self.hideResultsNow();
			}, 200);
		},
		hideResultsNow: function() {
			if(this.timeout) clearTimeout(this.timeout);
			removeClass(this.element, this.options.loadingClass);
			//if (this.$results.is(":visible")) {
			this._results.style.display = 'none';
			//}
			if(this.options.mustMatch) {
				var v = this.element.value;
				if(v != this.lastSelected) {
					this.selectItem(null);
				}
			}
		},
		receiveData: function(q, data) {
			if(data) {
				removeClass(this.element, this.options.loadingClass);
				this._results.innerHTML = '';

				if(!this.hasFocus || data.length == 0) return this.hideResultsNow();

				this._results.appendChild(this.dataToDom(data));
				// autofill in the complete box w/the first match as long as the user hasn't entered in more data
				if(this.options.autoFill && (this.element.value.toLowerCase() == q.toLowerCase())) this.autoFill(data[0][0]);
				this.showResults();
			} else {
				this.hideResultsNow();
			}
		},
		filterData: function(v, items) {
			if(!v) return items;
			var _items = [];
			for(var i = 0, count = items.length; i < count; i++) {
				var label = items[i].label;
				if(label.indexOf(v) > -1)
					_items.push(items[i]);
			}
			return _items;
		},
		receiveData2: function(items) {
			if(items) {
				removeClass(this.element, this.options.loadingClass);
				this._results.innerHTML = '';

				// if the field no longer has focus or if there are no matches, do not display the drop down
				if(!this.hasFocus || items.length == 0) return this.hideResultsNow();

				this._results.appendChild(this.dataToDom2(items));
				this.showResults();
			} else {
				this.hideResultsNow();
			}
		},
		dataToDom2: function(items) {
			var ul = document.createElement("ul");
			var num = items.length;
			var me = this;
			var showMoreMenu = false;

			// limited results to a max number
			if((this.options.maxItemsToShow > 0) && (this.options.maxItemsToShow < num)) {
				num = this.options.maxItemsToShow;
				if(this.options.moreMenuClick) {
					showMoreMenu = true;
				}
			}

			for(var i = 0; i < num; i++) {
				var item = items[i];
				if(!item) continue;
				var li = document.createElement("li");
				if(this.options.formatItem)
					li.innerHTML = this.options.formatItem(item, i, num);
				else
					li.innerHTML = item.label;
				li.selectValue = item.label;
				li._item = item;
				ul.appendChild(li);
				on(li, 'mouseenter', function() {
					var _li = ul.querySelector('li.ac_over');
					if(_li)
						removeClass(_li, 'ac_over');;
					addClass(this, "ac_over");
					me.active = indexOf(ul.querySelectorAll('li'), this);
				});
				on(li, 'mouseleave', function() {
					removeClass(this, "ac_over");
				});
				on(li, 'mousedown', function(e) {
					stopEvent(e);
					me.selectItem(this);
				});
			}
			if(showMoreMenu) {
				var li = document.createElement("li");
				li.innerHTML = '更多';
				ul.appendChild(li);
				on(li, 'mouseenter', function() {
					var _li = ul.querySelector('li.ac_over');
					if(_li)
						removeClass(_li, 'ac_over');;
					addClass(this, "ac_over");
				});
				on(li, 'mouseleave', function() {
					removeClass(this, "ac_over");
				});
				on(li, 'mousedown', function(e) {
					stopEvent(e);
					me.options.moreMenuClick.call(me);
				});
			}
			return ul;
		},
		parseData: function() {
			if(!data) return null;
			var parsed = [];
			var rows = data.split(this.options.lineSeparator);
			for(var i = 0; i < rows.length; i++) {
				var row = rows[i];
				if(row) {
					parsed[parsed.length] = row.split(this.options.cellSeparator);
				}
			}
			return parsed;
		},
		dataToDom: function(data) {
			var ul = document.createElement("ul");
			var num = data.length;
			var self = this;
			var showMoreMenu = false;

			// limited results to a max number
			if((this.options.maxItemsToShow > 0) && (this.options.maxItemsToShow < num)) {
				num = this.options.maxItemsToShow;
				if(this.options.moreMenuClick) {
					showMoreMenu = true;
				}
			}

			for(var i = 0; i < num; i++) {
				var row = data[i];
				if(!row) continue;
				var li = document.createElement("li");
				if(this.options.formatItem) {
					li.innerHTML = this.options.formatItem(row, i, num);
					li.selectValue = row[0];
				} else {
					li.innerHTML = row[0];
					li.selectValue = row[0];
				}
				var extra = null;
				if(row.length > 1) {
					extra = [];
					for(var j = 1; j < row.length; j++) {
						extra[extra.length] = row[j];
					}
				}
				li.extra = extra;
				ul.appendChild(li);
				on(li, 'mouseenter', function() {
					var _li = ul.querySelector('li.ac_over');
					if(_li)
						removeClass(_li, 'ac_over');;
					addClass(this, "ac_over");
					self.active = indexOf(ul.querySelectorAll('li'), this);
				});
				on(li, 'mouseleave', function() {
					removeClass(this, "ac_over");
				});
				on(li, 'mousedown', function() {
					stopEvent(e);
					self.selectItem(this);
				});
			}
			if(showMoreMenu) {
				var li = document.createElement("li");
				li.innerHTML = '更多';
				ul.appendChild(li);
				on(li, 'mouseenter', function() {
					var _li = ul.querySelector('li.ac_over');
					if(_li)
						removeClass(_li, 'ac_over');;
					addClass(this, "ac_over");
				});
				on(li, 'mouseleave', function() {
					removeClass(this, "ac_over");
				});
				on(li, 'mousedown', function(e) {
					stopEvent(e);
					self.options.moreMenuClick.call(self);
				});
			}
			return ul;
		},
		requestData: function() {
			var self = this;
			if(!this.options.matchCase) q = q.toLowerCase();
			var data = this.options.cacheLength ? this.loadFromCache(q) : null;
			// recieve the cached data
			if(data) {
				this.receiveData(q, data);
				// if an AJAX url has been supplied, try loading the data now
			} else if((typeof this.options.url == "string") && (this.options.url.length > 0)) {
				ajax({
						url: this.makeUrl(q),
						success: function(data) {
							data = self.parseData(data);
							self.addToCache(q, data);
							self.receiveData(q, data);
						}
					})
					// if there's been no data found, remove the loading class
			} else {
				removeClass(this.element, this.options.loadingClass);
			}
		},
		makeUrl: function(q) {
			var url = this.options.url + "?q=" + encodeURI(q);
			for(var i in this.options.extraParams) {
				url += "&" + i + "=" + encodeURI(this.options.extraParams[i]);
			}
			return url;
		},
		loadFromCache: function() {
			if(!q) return null;
			if(this.cache.data[q]) return this.cache.data[q];
			if(this.options.matchSubset) {
				for(var i = q.length - 1; i >= this.options.minChars; i--) {
					var qs = q.substr(0, i);
					var c = this.cache.data[qs];
					if(c) {
						var csub = [];
						for(var j = 0; j < c.length; j++) {
							var x = c[j];
							var x0 = x[0];
							if(this.matchSubset(x0, q)) {
								csub[csub.length] = x;
							}
						}
						return csub;
					}
				}
			}
			return null;
		},
		matchSubset: function(s, sub) {
			if(!this.options.matchCase) s = s.toLowerCase();
			var i = s.indexOf(sub);
			if(i == -1) return false;
			return i == 0 || this.options.matchContains;
		},
		addToCache: function(q, data) {
			if(!data || !q || !this.options.cacheLength) return;
			if(!this.cache.length || this.cache.length > this.options.cacheLength) {
				this.flushCache();
				this.cache.length++;
			} else if(!this.cache[q]) {
				this.cache.length++;
			}
			this.cache.data[q] = data;
		}
	});

	function findPos(obj) {
		var curleft = obj.offsetLeft || 0;
		var curtop = obj.offsetTop || 0;
		while(obj = obj.offsetParent) {
			curleft += obj.offsetLeft
			curtop += obj.offsetTop
		}
		return {
			x: curleft,
			y: curtop
		};
	}

	function indexOf(element, e) {
		for(var i = 0; i < element.length; i++) {
			if(element[i] == e) return i;
		}
		return -1;
	};

	compMgr.regComp({
		comp: Autocomplete,
		compAsString: 'u.Autocomplete',
		css: 'u-autocomplete'
	});
	if(document.readyState && document.readyState === 'complete') {
		compMgr.updateComp();
	} else {
		on(window, 'load', function() {
			//扫描并生成控件
			compMgr.updateComp();
		});
	}

	export {Autocomplete};


/***/ },
/* 4 */
/***/ function(module, exports) {

	import {extend} from 'neoui-sparrow/js/extend';
	import {BaseComponent} from 'neoui-sparrow/js/BaseComponent';
	import {env} from 'neoui-sparrow/js/env';
	import {on,off,trigger,stopEvent} from 'neoui-sparrow/js/event';
	import {addClass,removeClass,hasClass,closest,makeDOM,makeModal,showPanelByEle} from 'neoui-sparrow/js/dom';
	import {core} from 'neoui-sparrow/js/core';
	import {date as udate} from 'neoui-sparrow/js/util/dateUtils';
	import {Validate} from './neoui-validate';
	import {compMgr} from 'neoui-sparrow/js/compMgr';
	import {URipple} from 'neoui-sparrow/js/util/ripple';

	var DateTimePicker = BaseComponent.extend({
	});

	DateTimePicker.fn = DateTimePicker.prototype;


	DateTimePicker.fn.init = function(){

	    var self = this,_fmt,_defaultFmt;
	    this.enable = true;
	    this._element = this.element;
	    //this.type = 'datetime';
	    //if (hasClass(this.element,'u-datepicker')){
	    //    this.type = 'date';
	    //}
	    //addClass(this._element,'u-text')
	    //this._element.style.display = "inline-table"; // 存在右侧图标，因此修改display
	    //new UText(this._element);
	    this._input = this._element.querySelector("input");
	    
	    // if(env.isMobile){
	    //     // setTimeout(function(){
	    //     //     self._input.setAttribute('readonly','readonly');
	    //     // },1000);
	    // }

	    setTimeout(function(){
	        self._input.setAttribute('readonly','readonly');
	    },1000);
	   
	    on(this._input, 'focus', function(e){
	        // 用来关闭键盘
	        /*if(env.isMobile)
	            this.blur();*/
	        self._inputFocus = true;
	        if (self.isShow !== true){
	            self.show(e);
	        }
	        stopEvent(e);
	    });

	    on(this._input, 'blur', function(e){
	        self._inputFocus = false;
	    })
	    this._span = this._element.querySelector("span");
	    if (this._span){
	        on(this._span, 'click', function(e){
	            // if (self.isShow !== true){
	            //     self.show(e);
	            // }
	            self._input.focus();
	            stopEvent(e);
	        });
	    }



	    if (hasClass(this._element, 'time')){
	        this.type = 'datetime';
	        _defaultFmt = 'YYYY-MM-DD hh:mm:ss';
	    }else{
	        this.type = 'date';
	        _defaultFmt = 'YYYY-MM-DD';
	    }
	    _fmt = this._element.getAttribute("format");
	    this.format = _fmt || this.options['format']  ||  _defaultFmt;
	    this.isShow = false;
	};


	/**
	 * 轮播动画效果
	 * @private
	 */
	DateTimePicker.fn._carousel = function(newPage, direction){
	    if (direction == 'left'){
	        addClass(newPage, 'right-page');
	    }else{
	        addClass(newPage, 'left-page');
	    }
	    this._dateContent.appendChild(newPage);
	    if(env.isIE8 || env.isIE9 || env.isFF){
	        // this._dateContent.removeChild(this.contentPage);
	        var pages = this._dateContent.querySelectorAll('.u-date-content-page');
	        for (i = 0; i < pages.length; i++){
	            this._dateContent.removeChild(pages[i])
	        }
	        this.contentPage = newPage;
	        this._dateContent.appendChild(newPage);
	        if (direction == 'left'){
	            removeClass(newPage, 'right-page');
	        }else{
	            removeClass(newPage, 'left-page');
	        }
	    }else{

	        var cleanup = function() {
	            newPage.removeEventListener('transitionend', cleanup);
	            newPage.removeEventListener('webkitTransitionEnd', cleanup);
	            // this._dateContent.removeChild(this.contentPage);
	            var pages = this._dateContent.querySelectorAll('.u-date-content-page');
	            for (i = 0; i < pages.length; i++){
	                this._dateContent.removeChild(pages[i])
	            }
	            this.contentPage = newPage;
	            this._dateContent.appendChild(newPage);
	        }.bind(this);

	        newPage.addEventListener('transitionend', cleanup);
	        newPage.addEventListener('webkitTransitionEnd', cleanup);
	        if(window.requestAnimationFrame)
	            window.requestAnimationFrame(function() {
	                if (direction == 'left'){
	                    addClass(this.contentPage, 'left-page');
	                    removeClass(newPage, 'right-page');
	                }else{
	                    addClass(this.contentPage, 'right-page');
	                    removeClass(newPage, 'left-page');
	                }
	            }.bind(this));
	    }
	};

	/**
	 * 淡入动画效果
	 * @private
	 */
	DateTimePicker.fn._zoomIn = function(newPage){
	    if (!this.contentPage){
	        this._dateContent.appendChild(newPage);
	        this.contentPage = newPage;
	        return;
	    }
	    addClass(newPage, 'zoom-in');
	    this._dateContent.appendChild(newPage);
	    if(env.isIE8 || env.isIE9 || env.isFF){
	        var pages = this._dateContent.querySelectorAll('.u-date-content-page');
	        for (i = 0; i < pages.length; i++){
	            this._dateContent.removeChild(pages[i])
	        }
	        // this._dateContent.removeChild(this.contentPage);
	        this.contentPage = newPage;
	        this._dateContent.appendChild(newPage);
	        removeClass(newPage, 'zoom-in');
	    }else{
	        var cleanup = function() {
	            newPage.removeEventListener('transitionend', cleanup);
	            newPage.removeEventListener('webkitTransitionEnd', cleanup);
	            // this._dateContent.removeChild(this.contentPage);
	            var pages = this._dateContent.querySelectorAll('.u-date-content-page');
	            for (i = 0; i < pages.length; i++){
	                this._dateContent.removeChild(pages[i])
	            }
	            this.contentPage = newPage;
	            this._dateContent.appendChild(newPage);
	        }.bind(this);
	        if (this.contentPage){
	            newPage.addEventListener('transitionend', cleanup);
	            newPage.addEventListener('webkitTransitionEnd', cleanup);
	        }
	        if(window.requestAnimationFrame)
	            window.requestAnimationFrame(function() {
	                    addClass(this.contentPage, 'is-hidden');
	                    removeClass(newPage, 'zoom-in');
	            }.bind(this));
	    }
	    
	};


	/**
	 *填充年份选择面板
	 * @private
	 */
	DateTimePicker.fn._fillYear = function(type){
	    var year,template,yearPage,titleDiv,yearDiv,_year, i,cell,language,year,month,date,time,self = this;
	    template = ['<div class="u-date-content-page">',
	                    '<div class="u-date-content-title">',
	                        /*'<div class="u-date-content-title-year"></div>-',
	                        '<div class="u-date-content-title-month"></div>-',
	                        '<div class="u-date-content-title-date"></div>',
	                        '<div class="u-date-content-title-time"></div>',*/
	                    '</div>',
	                    '<div class="u-date-content-panel"></div>',
	                '</div>'].join("");
	    type = type || 'current';
	    _year = this.pickerDate.getFullYear()
	    if ('current' === type) {
	        this.startYear = _year - _year%10 - 1;
	    } else if (type === 'preivous') {
	        this.startYear = this.startYear - 10;
	    } else {
	        this.startYear = this.startYear + 10;
	    }
	    yearPage = makeDOM(template);
	    // titleDiv = yearPage.querySelector('.u-date-content-title');
	    // titleDiv.innerHTML = (this.startYear - 1) + '-' + (this.startYear + 11);
	    language = core.getLanguages();
	    year = udate._formats['YYYY'](this.pickerDate);
	    month = udate._formats['MM'](this.pickerDate,language);
	    date = udate._formats['DD'](this.pickerDate,language);
	    time = udate._formats['HH'](this.pickerDate,language) + ':' + udate._formats['mm'](this.pickerDate,language) + ':' + udate._formats['ss'](this.pickerDate,language);

	    this._yearTitle = yearPage.querySelector('.u-date-content-title');
	    this._yearTitle.innerHTML = year;
	    /*this._headerYear = yearPage.querySelector('.u-date-content-title-year');
	    this._headerYear.innerHTML = year;
	    this._headerMonth = yearPage.querySelector('.u-date-content-title-month');
	    this._headerMonth.innerHTML = month;
	    this._headerDate = yearPage.querySelector('.u-date-content-title-date');
	    this._headerDate.innerHTML = date;
	    this._headerTime = yearPage.querySelector('.u-date-content-title-time');
	    this._headerTime.innerHTML = time;*/
	    if(this.type == 'date'){
	        this._headerTime.style.display = 'none';
	    }

	    /*on(this._headerYear, 'click', function(e){
	        self._fillYear();
	        stopEvent(e)
	    });

	    on(this._headerMonth, 'click', function(e){
	        self._fillMonth();
	        stopEvent(e)
	    });    

	    on(this._headerTime, 'click', function(e){
	        self._fillTime();
	        stopEvent(e)
	    });*/

	    yearDiv = yearPage.querySelector('.u-date-content-panel');
	    for(i = 0; i < 12; i++){

	        cell = makeDOM('<div class="u-date-content-year-cell">'+ (this.startYear + i) +'</div>');
	        new URipple(cell);
	        if (this.startYear + i == _year){
	            addClass(cell, 'current');
	        }
	        if (this.startYear + i < this.beginYear ){
	            addClass(cell, 'u-disabled');
	        }
	        cell._value = this.startYear + i;
	        yearDiv.appendChild(cell);
	    }
	    on(yearDiv, 'click', function(e){
	        if (hasClass(e.target,'u-disabled')) return;
	        var _y = e.target._value;
	        this.pickerDate.setYear(_y);
	        this._updateDate();
	        this._fillMonth();
	    }.bind(this));

	    if (type === 'current'){
	        this._zoomIn(yearPage);
	    }else if(type === 'next'){
	        this._carousel(yearPage, 'left');
	    }else if(type === 'preivous'){
	        this._carousel(yearPage, 'right');
	    }
	    this.currentPanel = 'year';
	};

	/**
	 * 填充月份选择面板
	 * @private
	 */
	DateTimePicker.fn._fillMonth = function(){
	    var template,monthPage,_month,cells,i,language,year,month,date,time,self = this;
	    template = ['<div class="u-date-content-page">',
	        '<div class="u-date-content-title">',
	            /*'<div class="u-date-content-title-year"></div>-',
	            '<div class="u-date-content-title-month"></div>-',
	            '<div class="u-date-content-title-date"></div>',
	            '<div class="u-date-content-title-time"></div>',*/
	        '</div>',
	        '<div class="u-date-content-panel">',
	            '<div class="u-date-content-year-cell">1月</div>',
	            '<div class="u-date-content-year-cell">2月</div>',
	            '<div class="u-date-content-year-cell">3月</div>',
	            '<div class="u-date-content-year-cell">4月</div>',
	            '<div class="u-date-content-year-cell">5月</div>',
	            '<div class="u-date-content-year-cell">6月</div>',
	            '<div class="u-date-content-year-cell">7月</div>',
	            '<div class="u-date-content-year-cell">8月</div>',
	            '<div class="u-date-content-year-cell">9月</div>',
	            '<div class="u-date-content-year-cell">10月</div>',
	            '<div class="u-date-content-year-cell">11月</div>',
	            '<div class="u-date-content-year-cell">12月</div>',
	        '</div>',
	        '</div>'].join("");

	    monthPage = makeDOM(template);
	    language = core.getLanguages();
	    year = udate._formats['YYYY'](this.pickerDate);
	    month = udate._formats['MM'](this.pickerDate,language);
	    date = udate._formats['DD'](this.pickerDate,language);
	    time = udate._formats['HH'](this.pickerDate,language) + ':' + udate._formats['mm'](this.pickerDate,language) + ':' + udate._formats['ss'](this.pickerDate,language);

	    this._monthTitle =  monthPage.querySelector('.u-date-content-title');
	    this._monthTitle.innerHTML = udate._formats['MMM'](this.pickerDate,language);
	    /*this._headerYear = monthPage.querySelector('.u-date-content-title-year');
	    this._headerYear.innerHTML = year;
	    this._headerMonth = monthPage.querySelector('.u-date-content-title-month');
	    this._headerMonth.innerHTML = month;
	    this._headerDate = monthPage.querySelector('.u-date-content-title-date');
	    this._headerDate.innerHTML = date;
	    this._headerTime = monthPage.querySelector('.u-date-content-title-time');
	    this._headerTime.innerHTML = time;*/
	    if(this.type == 'date'){
	        this._headerTime.style.display = 'none';
	    }

	    /*on(this._headerYear, 'click', function(e){
	        self._fillYear();
	        stopEvent(e)
	    });

	    on(this._headerMonth, 'click', function(e){
	        self._fillMonth();
	        stopEvent(e)
	    });    

	    on(this._headerTime, 'click', function(e){
	        self._fillTime();
	        stopEvent(e)
	    });*/

	    cells = monthPage.querySelectorAll('.u-date-content-year-cell');
	    for (i = 0; i < cells.length; i++){
	        if (_month - 1 == i){
	            addClass(cells[i],'current');
	        }
	        if(this.pickerDate.getFullYear() == this.beginYear && i < this.beginMonth){
	            addClass(cells[i],'u-disabled');
	        }
	        if(this.pickerDate.getFullYear() < this.beginYear){
	            addClass(cells[i],'u-disabled');
	        }
	        cells[i]._value = i;
	        new URipple(cells[i]);
	    }
	    on(monthPage, 'click', function(e){
	        if (hasClass(e.target,'u-disabled')) return;
	        if (hasClass(e.target,'u-date-content-title')) return;
	        var _m = e.target._value;
	        this.pickerDate.setMonth(_m);
	        this._updateDate();
	        this._fillDate();
	    }.bind(this));
	    this._zoomIn(monthPage);
	    this.currentPanel = 'month';
	};

	DateTimePicker.fn._getPickerStartDate = function(date){
	    var d = new Date(date);
	    d.setDate(1);
	    var day = d.getDay();
	    d = udate.sub(d, 'd', day);
	    return d;
	}

	DateTimePicker.fn._getPickerEndDate= function(date){
	    var d = new Date(date);
	    d.setDate(1);
	    d.setMonth(d.getMonth() + 1);
	    d.setDate(0);
	    var day = d.getDay();
	    d = udate.add(d,'d',6 - day);
	    return d;
	}

	/**
	 * 渲染日历
	 * @param type : previous  current  next
	 * @private
	 */
	DateTimePicker.fn._fillDate = function(type){
	    // if (env.isMobile){
	    //     this._dateMobileScroll()
	    //     return
	    // }
	    var year,month,day,date,time,template,datePage,titleDiv,dateDiv,weekSpans,language,tempDate, i,cell,self = this;
	    type = type || 'current';
	    if ('current' === type) {
	        tempDate = this.pickerDate;
	    } else if (type === 'preivous') {
	        tempDate = udate.sub(this.startDate,'d', 1);
	    } else {
	        tempDate = udate.add(this.endDate,'d', 1);
	    }
	    this.startDate = this._getPickerStartDate(tempDate);
	    this.endDate = this._getPickerEndDate(tempDate);

	    language = core.getLanguages();
	    year = udate._formats['YYYY'](tempDate);
	    month = udate._formats['MM'](tempDate,language);
	    date = udate._formats['DD'](tempDate,language);
	    time = udate._formats['HH'](tempDate,language) + ':' + udate._formats['mm'](tempDate,language) + ':' + udate._formats['ss'](tempDate,language);
	    template = ['<div class="u-date-content-page">',
	        '<div class="u-date-content-title">',
	            '<div class="u-date-content-title-year"></div>-',
	            '<div class="u-date-content-title-month"></div>-',
	            '<div class="u-date-content-title-date"></div>',
	            '<div class="u-date-content-title-time"></div>',
	        '</div>',
	        '<div class="u-date-week"><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>',
	        '<div class="u-date-content-panel"></div>',
	        '</div>'].join("");
	    datePage = makeDOM(template);
	    this._headerYear = datePage.querySelector('.u-date-content-title-year');
	    this._headerYear.innerHTML = year;
	    this._headerMonth = datePage.querySelector('.u-date-content-title-month');
	    this._headerMonth.innerHTML = month;
	    this._headerDate = datePage.querySelector('.u-date-content-title-date');
	    this._headerDate.innerHTML = date;
	    this._headerTime = datePage.querySelector('.u-date-content-title-time');
	    this._headerTime.innerHTML = time;
	    if(this.type == 'date'){
	        this._headerTime.style.display = 'none';
	    }

	    on(this._headerYear, 'click', function(e){
	        self._fillYear();
	        stopEvent(e)
	    });

	    on(this._headerMonth, 'click', function(e){
	        self._fillMonth();
	        stopEvent(e)
	    });    

	    on(this._headerTime, 'click', function(e){
	        self._fillTime();
	        stopEvent(e)
	    });

	    weekSpans = datePage.querySelectorAll('.u-date-week span');

	    for(i=0; i< 7; i++){
	        weekSpans[i].innerHTML = udate._dateLocale[language].weekdaysMin[i];
	    }
	    dateDiv = datePage.querySelector('.u-date-content-panel');
	    tempDate = this.startDate;
	    while(tempDate <= this.endDate){
	        cell = makeDOM('<div class="u-date-cell" unselectable="on" onselectstart="return false;">'+ tempDate.getDate() +'</div>');
	        if (tempDate.getFullYear() == this.pickerDate.getFullYear() && tempDate.getMonth() == this.pickerDate.getMonth()
	            && tempDate.getDate() == this.pickerDate.getDate()){
	            addClass(cell, 'current');
	        }

	        
	        if(tempDate.getFullYear() < this.beginYear || (tempDate.getFullYear() == this.beginYear && tempDate.getMonth() < this.beginMonth)){
	            addClass(cell,'u-disabled');
	            removeClass(cell,'current');
	        }

	        if(tempDate.getFullYear() == this.beginYear && tempDate.getMonth() == this.beginMonth
	            && tempDate.getDate() < this.beginDate){
	            addClass(cell,'u-disabled');
	            removeClass(cell,'current');
	        }
	        cell._value = tempDate.getDate();
	        cell._month = (tempDate.getMonth());
	        cell._year = tempDate.getFullYear();
	        new URipple(cell);
	        dateDiv.appendChild(cell);
	        tempDate = udate.add(tempDate, 'd', 1);
	    }
	    on(dateDiv, 'click', function(e){
	        if (hasClass(e.target,'u-disabled')) return;
	        var _d = e.target._value;
	        if (!_d) return;
	        this.pickerDate.setFullYear(e.target._year);
	        this.pickerDate.setMonth(e.target._month);
	        this.pickerDate.setDate(_d);
	        var _cell = e.target.parentNode.querySelector('.u-date-cell.current');
	        if (_cell) {
	            removeClass(_cell, 'current');
	            if(env.isIE8 || env.isIE9)
	                _cell.style.backgroundColor = "#fff";
	        }
	        addClass(e.target, 'current');
	        if(env.isIE8 || env.isIE9)
	            e.target.style.backgroundColor = '#3f51b5';
	        this._updateDate();
	        if (this.type === 'date'){
	            this.onOk();
	        }
	    }.bind(this));
	    if (type === 'current'){
	        this._zoomIn(datePage);
	    }else if(type === 'next'){
	        this._carousel(datePage, 'left');
	    }else if(type === 'preivous'){
	        this._carousel(datePage, 'right');
	    }
	    this.currentPanel = 'date';
	};


	/**
	 * 填充时间选择面板
	 * @private
	 */
	DateTimePicker.fn._fillTime = function(type){
	    // if (env.isMobile) {
	    //     this._timeMobileScroll()
	    //     return;
	    // }
	    var year,month,day,date,time,template,timePage,titleDiv,dateDiv,weekSpans,language,tempDate, i,cell;
	    var self = this;
	    type = type || 'current';
	    if ('current' === type) {
	        tempDate = this.pickerDate;
	    } else if (type === 'preivous') {
	        tempDate = udate.sub(this.startDate,'d', 1);
	    } else {
	        tempDate = udate.add(this.endDate,'d', 1);
	    }
	    this.startDate = this._getPickerStartDate(tempDate);
	    this.endDate = this._getPickerEndDate(tempDate);

	    language = core.getLanguages();
	    year = udate._formats['YYYY'](tempDate);
	    month = udate._formats['MM'](tempDate,language);
	    date = udate._formats['DD'](tempDate,language);
	    time = udate._formats['HH'](tempDate,language) + ':' + udate._formats['mm'](tempDate,language) + ':' + udate._formats['ss'](tempDate,language);

	    template = ['<div class="u-date-content-page">',
	        '<div class="u-date-content-title">',
	            '<div class="u-date-content-title-year"></div>-',
	            '<div class="u-date-content-title-month"></div>-',
	            '<div class="u-date-content-title-date"></div>',
	            '<div class="u-date-content-title-time"></div>',
	        '</div>',
	        '<div class="u-date-content-panel"></div>',
	        '</div>'].join("");
	    timePage = makeDOM(template);
	//    titleDiv = timePage.querySelector('.u-date-content-title');
	//    titleDiv.innerHTML = year + ' ' + month + ' ' +day ;
	    this._headerYear = timePage.querySelector('.u-date-content-title-year');
	    this._headerYear.innerHTML = year;
	    this._headerMonth = timePage.querySelector('.u-date-content-title-month');
	    this._headerMonth.innerHTML = month;
	    this._headerDate = timePage.querySelector('.u-date-content-title-date');
	    this._headerDate.innerHTML = date;
	    this._headerTime = timePage.querySelector('.u-date-content-title-time');
	    this._headerTime.innerHTML = time;
	    if(this.type == 'date'){
	        this._headerTime.style.display = 'none';
	    }

	    on(this._headerYear, 'click', function(e){
	        self._fillYear();
	        stopEvent(e)
	    });

	    on(this._headerMonth, 'click', function(e){
	        self._fillMonth();
	        stopEvent(e)
	    });    

	    on(this._headerTime, 'click', function(e){
	        self._fillTime();
	        stopEvent(e)
	    });

	    dateDiv = timePage.querySelector('.u-date-content-panel');
	   // tempDate = this.startDate;
	    // while(tempDate <= this.endDate){
	        // cell = makeDOM('<div class="u-date-cell">'+ udate._formats['HH'](tempDate,language) +'</div>');
	        // if (tempDate.getFullYear() == this.pickerDate.getFullYear() && tempDate.getMonth() == this.pickerDate.getMonth()
	            // && tempDate.getDate() == this.pickerDate.getDate()){
	            // addClass(cell, 'current');
	        // }
	        // cell._value = tempDate.getDate();
	        // new URipple(cell);
	        // dateDiv.appendChild(cell);
	        // tempDate = udate.add(tempDate, 'd', 1);
	    // }
	    if(env.isIE8){ // IE8/IE9保持原来，非IE8/IE9使用clockpicker
	        timetemplate = ['<div class="u_time_box">',
	                            '<div class="u_time_cell">',
	                                //'<div class="add_hour_cell"><i class="add_hour_cell icon-angle-up"></i></div>',
	                                '<div class="show_hour_cell">'+ udate._formats['HH'](tempDate) +'</div>' ,
	                                //'<div class="subtract_hour_cell"><i class="subtract_hour_cell icon-angle-down"></i></div>',
	                            '</div>',
	                            '<div class="u_time_cell">',
	                                //'<div class="add_min_cell"><i class="add_min_cell icon-angle-up"></i></div>',
	                                '<div class="show_min_cell">'+ udate._formats['mm'](tempDate) +'</div>',
	                                //'<div class="subtract_min_cell"><i class="subtract_min_cell icon-angle-down"></i></div>',
	                            '</div>',
	                            '<div class="u_time_cell">',
	                                //'<div class="add_sec_cell"><i class="add_sec_cell icon-angle-up"></i></div>',
	                                '<div class="show_sec_cell">'+ udate._formats['ss'](tempDate) +'</div>',
	                                //'<div class="subtract_sec_cell"><i class="subtract_sec_cell icon-angle-down"></i></div>',
	                            '</div>',
	                        '</div>'].join("");
	        cell = makeDOM(timetemplate);
	        dateDiv.appendChild(cell);
	        on(dateDiv, 'click', function(e){
	            var _arrary = e.target.getAttribute("class").split("_");
	            if(_arrary[0] == "add"){
	                if(_arrary[1] == "hour"){
	                    var tmph = Number(udate._formats['HH'](this.pickerDate))
	                    if(tmph < 23){
	                        tmph++
	                    }else{
	                        tmph = 0
	                    }

	                    this.pickerDate.setHours(tmph)
	                    dateDiv.querySelector(".show_hour_cell").innerHTML = tmph
	                }else if(_arrary[1] == "min"){
	                    var tmpm = Number(udate._formats['mm'](this.pickerDate))
	                    if(tmpm < 59){
	                         tmpm++
	                    }else{
	                         tmpm = 0
	                    }
	                    this.pickerDate.setMinutes(tmpm)
	                }else if(_arrary[1] == "sec"){
	                    var tmps = Number(udate._formats['ss'](this.pickerDate))
	                    if(tmps < 59){
	                        tmps++
	                    }else{
	                        tmps = 0
	                    }
	                    this.pickerDate.setSeconds(tmps)
	                }
	            }else if(_arrary[0] == "subtract"){
	                if(_arrary[1] == "hour"){
	                    var tmph = Number(udate._formats['HH'](this.pickerDate))
	                    if(tmph > 0 ){
	                        tmph--
	                    }else{
	                        tmph = 23
	                    }
	                    this.pickerDate.setHours(tmph)

	                }else if(_arrary[1] == "min"){
	                    var tmpm = Number(udate._formats['mm'](this.pickerDate))
	                    if(tmpm > 0){
	                         tmpm--
	                    }else{
	                         tmpm = 59
	                    }
	                    this.pickerDate.setMinutes(tmpm)
	                }else if(_arrary[1] == "sec"){
	                    var tmps = Number(udate._formats['ss'](this.pickerDate))
	                    if(tmps > 0){
	                        tmps--
	                    }else{
	                        tmps = 59
	                    }
	                    this.pickerDate.setSeconds(tmps)
	                }
	            }else if(_arrary[0] == "show"){
	                var tmptarget = e.target
	                var tmpinput = makeDOM("<input type='text' class='u-input'>");
	                if(tmptarget.querySelector('.u-input'))return;
	                this._updateDate();
	                tmpinput.value = tmptarget.innerHTML;
	                tmptarget.innerHTML = ""
	                tmptarget.appendChild(tmpinput)
	                if(_arrary[1] == "hour"){
	                     var vali = new Validate(tmpinput,{validType:"integer",minLength:0,maxLength:2,min:0,max:23})
	                     on(tmpinput,'blur',function(){
	                        if(vali.passed){
	                            self.pickerDate.setHours(tmpinput.value)
	                            self._updateDate();
	                        }
	                     })
	                }else if(_arrary[1] == "min"){
	                     var vali = new Validate(tmpinput,{validType:"integer",minLength:0,maxLength:2,min:0,max:59})
	                       on(tmpinput,'blur',function(){
	                        if(vali.passed){
	                            self.pickerDate.setMinutes(tmpinput.value)
	                            self._updateDate();
	                        }
	                     })
	                }else if(_arrary[1] == "sec"){
	                     var vali = new Validate(tmpinput,{validType:"integer",minLength:0,maxLength:2,min:0,max:59})
	                       on(tmpinput,'blur',function(){
	                        if(vali.passed){
	                            self.pickerDate.setSeconds(tmpinput.value)
	                            self._updateDate();
	                        }
	                     })
	                }

	                tmpinput.focus()
	                return;

	            }else{
	                return false;
	            }

	            this._updateDate();
	        }.bind(this));
	    }else{
	        timetemplate = '<div class="u-combo-ul clockpicker-popover is-visible" style="width:100%;padding:0px;">';
	//        timetemplate += '<div class="popover-title"><span class="clockpicker-span-hours">02</span> : <span class="clockpicker-span-minutes text-primary">01</span><span class="clockpicker-span-am-pm"></span></div>';
	        timetemplate += '<div class="popover-content">';
	        timetemplate += '  <div class="clockpicker-plate data-clockpicker-plate">';
	        timetemplate += '      <div class="clockpicker-canvas">';
	        timetemplate += '          <svg class="clockpicker-svg">';
	        timetemplate += '              <g transform="translate(100,100)">';
	        timetemplate += '                  <circle class="clockpicker-canvas-bg clockpicker-canvas-bg-trans" r="13" cx="8.362277061412277" cy="-79.56175162946187"></circle>';
	        timetemplate += '                  <circle class="clockpicker-canvas-fg" r="3.5" cx="8.362277061412277" cy="-79.56175162946187"></circle>';
	        timetemplate += '                  <line x1="0" y1="0" x2="8.362277061412277" y2="-79.56175162946187"></line>';
	        timetemplate += '                  <circle class="clockpicker-canvas-bearing" cx="0" cy="0" r="2"></circle>';
	        timetemplate += '              </g>';
	        timetemplate += '          </svg>';
	        timetemplate += '      </div>';
	        timetemplate += '      <div class="clockpicker-dial clockpicker-hours" style="visibility: visible;">';
	        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-1" >00</div>';
	        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-2" >1</div>';
	        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-3" >2</div>';
	        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-4" >3</div>';
	        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-5" >4</div>';
	        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-6" >5</div>';
	        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-7" >6</div>';
	        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-8" >7</div>';
	        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-9" >8</div>';
	        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-10" >9</div>';
	        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-11" >10</div>';
	        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-12" >11</div>';
	        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-13" >12</div>';
	        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-14" >13</div>';
	        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-15" >14</div>';
	        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-16" >15</div>';
	        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-17" >16</div>';
	        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-18" >17</div>';
	        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-19" >18</div>';
	        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-20" >19</div>';
	        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-21" >20</div>';
	        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-22" >21</div>';
	        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-23" >22</div>';
	        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-24" >23</div>';
	        timetemplate += '      </div>';
	        timetemplate += '      <div class="clockpicker-dial clockpicker-minutes" style="visibility: hidden;">';
	        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-25" >00</div>';
	        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-26" >05</div>';
	        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-27" >10</div>';
	        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-28" >15</div>';
	        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-29" >20</div>';
	        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-30" >25</div>';
	        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-31" >30</div>';
	        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-32" >35</div>';
	        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-33" >40</div>';
	        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-34" >45</div>';
	        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-35" >50</div>';
	        timetemplate += '          <div class="clockpicker-tick clockpicker-tick-36" >55</div>';
	        timetemplate += '      </div>';
	        timetemplate += '  </div><span class="clockpicker-am-pm-block"></span></div>';
	        timetemplate += '  </div>';
	        cell = makeDOM(timetemplate);
	        this.cell = cell;
	        dateDiv.appendChild(cell);

	        this.hand = cell.querySelector('line');
	        this.bg = cell.querySelector('.clockpicker-canvas-bg');
	        this.fg = cell.querySelector('.clockpicker-canvas-fg');
	        this.titleHourSpan = cell.querySelector('.clockpicker-span-hours');
	        this.titleMinSpan = cell.querySelector('.clockpicker-span-minutes');
	        this.hourDiv = cell.querySelector('.clockpicker-hours');
	        this.minDiv = cell.querySelector('.clockpicker-minutes');
	        this.currentView = 'hours';
	        this.hours = udate._formats['HH'](tempDate);
	        this.min = udate._formats['mm'](tempDate);
	        this.sec = udate._formats['ss'](tempDate);
	        //this.titleHourSpan.innerHTML = this.hours;
	        //this.titleMinSpan.innerHTML = this.min;
	        


	        on(this.hourDiv,'click',function(e){
	            var target = e.target;
	            if(hasClass(target,'clockpicker-tick')){
	                this.hours = target.innerHTML;
	                this.hours = this.hours > 9 || this.hours  == 0? '' + this.hours:'0' + this.hours;
	                // this.titleHourSpan.innerHTML = this.hours;
	                self.pickerDate.setHours(this.hours);
	                var language = core.getLanguages();
	                var time = udate._formats['HH'](this.pickerDate,language) + ':' + udate._formats['mm'](this.pickerDate,language) + ':' + udate._formats['ss'](this.pickerDate,language);
	                this._headerTime.innerHTML = time;
	                this.hourDiv.style.visibility = 'hidden';
	                this.minDiv.style.visibility = 'visible';
	                this.currentView = 'min';
	                this.setHand();
	            }
	        }.bind(this));
	        
	        on(this.minDiv,'click',function(e){
	            var target = e.target;
	            if(hasClass(target,'clockpicker-tick')){
	                this.min = target.innerHTML;
	                // this.min = this.min > 9 || this.min  == 00? '' + this.min:'0' + this.min;
	                // this.titleMinSpan.innerHTML = this.min;
	                self.pickerDate.setMinutes(this.min);
	                var language = core.getLanguages();
	                var time = udate._formats['HH'](this.pickerDate,language) + ':' + udate._formats['mm'](this.pickerDate,language) + ':' + udate._formats['ss'](this.pickerDate,language);
	                this._headerTime.innerHTML = time;
	                this.minDiv.style.visibility = 'hidden';
	                this.hourDiv.style.visibility = 'visible';
	                this.currentView = 'hours';
	                this.setHand();
	            }
	        }.bind(this));
	        
	    }
	    
	    this._zoomIn(timePage);
	    if(!env.isIE8)
	        this.setHand();
	    this.currentPanel = 'time';
	    dateDiv.onselectstart=new Function("return false");

	};

	DateTimePicker.fn.setHand = function(){
	    var dialRadius = 100,
	    innerRadius = 54,
	    outerRadius = 80;
	    var view = this.currentView,
	        value = this[view],
	        isHours = view === 'hours',
	        unit = Math.PI / (isHours ? 6 : 30),
	        radian = value * unit,
	        radius = isHours && value > 0 && value < 13 ? innerRadius : outerRadius,
	        x = Math.sin(radian) * radius,
	        y = - Math.cos(radian) * radius;
	        this.setHandFun(x,y);
	}

	DateTimePicker.fn.setHandFun = function(x,y,roundBy5,dragging){
	    var dialRadius = 100,
	    innerRadius = 54,
	    outerRadius = 80;
	    
	    var radian = Math.atan2(x, - y),
	        isHours = this.currentView === 'hours',
	        unit = Math.PI / (isHours ? 6 : 30),
	        z = Math.sqrt(x * x + y * y),
	        options = this.options,
	        inner = isHours && z < (outerRadius + innerRadius) / 2,
	        radius = inner ? innerRadius : outerRadius,
	        value;
	        
	        if (this.twelvehour) {
	            radius = outerRadius;
	        }

	    // Radian should in range [0, 2PI]
	    if (radian < 0) {
	        radian = Math.PI * 2 + radian;
	    }

	    // Get the round value
	    value = Math.round(radian / unit);

	    // Get the round radian
	    radian = value * unit;

	    // Correct the hours or minutes
	    if (options.twelvehour) {
	        if (isHours) {
	            if (value === 0) {
	                value = 12;
	            }
	        } else {
	            if (roundBy5) {
	                value *= 5;
	            }
	            if (value === 60) {
	                value = 0;
	            }
	        }
	   } else {
	        if (isHours) {
	            if (value === 12) {
	                value = 0;
	            }
	            value = inner ? (value === 0 ? 12 : value) : value === 0 ? 0 : value + 12;
	        } else {
	            if (roundBy5) {
	                value *= 5;
	            }
	            if (value === 60) {
	                value = 0;
	            }
	        }
	    }
	    
	    // Set clock hand and others' position
	    var w = this._panel.offsetWidth;
	        var u = w / 294;
	        var cx = Math.sin(radian) * radius * u,
	            cy = - Math.cos(radian) * radius * u;
	        var iu = 100 * u;
	        this.cell.querySelector('g').setAttribute('transform','translate(' + iu + ',' + iu + ')');
	    this.hand.setAttribute('x2', cx);
	    this.hand.setAttribute('y2', cy);
	    this.bg.setAttribute('cx', cx);
	    this.bg.setAttribute('cy', cy);
	    this.fg.setAttribute('cx', cx);
	    this.fg.setAttribute('cy', cy);
	}

	/**
	 * 重新渲染面板
	 * @private
	 */
	DateTimePicker.fn._updateDate = function(){
	    var year,month,week,date,time, hour,minute,seconds,language;

	    language = core.getLanguages();
	    year = udate._formats['YYYY'](this.pickerDate);
	    // week = udate._formats['ddd'](this.pickerDate, language);
	    month = udate._formats['MM'](this.pickerDate, language);
	    time = udate._formats['HH'](this.pickerDate, language)+':'+udate._formats['mm'](this.pickerDate, language)+':'+udate._formats['ss'](this.pickerDate, language);

	    //TODO 多语
	    // date = udate._formats['D'](this.pickerDate) + '日';
	    date = udate._formats['DD'](this.pickerDate,language);
	    if(this._headerYear){
	        this._headerYear.innerHTML = '';
	        this._headerYear.innerHTML = year;
	    }
	        // this._headerWeak.innerHTML = '';
	        // this._headerWeak.innerHTML = week;
	    if(this._headerMonth){
	        this._headerMonth.innerHTML = '';
	        this._headerMonth.innerHTML = month ;
	    }
	    if(this._headerDate){
	        this._headerDate.innerHTML = '';
	        this._headerDate.innerHTML = date;
	    }
	    if(this._headerTime){
	        this._headerTime.innerHTML = '';
	        this._headerTime.innerHTML = time;
	    }
	    if(this.currentPanel == 'time'){
	        if(env.isIE8){
	            this._panel.querySelector(".show_hour_cell").innerHTML =  udate._formats['HH'](this.pickerDate, language)
	            this._panel.querySelector(".show_min_cell").innerHTML =  udate._formats['mm'](this.pickerDate, language)
	            this._panel.querySelector(".show_sec_cell").innerHTML =  udate._formats['ss'](this.pickerDate, language)
	        }
	    }

	};


	DateTimePicker.fn._response = function() {
	    return;
	    var bodyHeight = document.body.offsetHeight;  //395
	    var _height = 430;
	    if (this.type === 'date' && !(env.isMobile))
	        _height = 395;
	    if (bodyHeight > _height){
	        this._panel.style.height =  _height;
	    }
	    //if (bodyHeight > 500){
	    //    this._panel.style.height =  '500px';
	    //}
	    //this._dateContent.style.height =panelHeight - 158 + 'px';   // 106 52
	};

	var dateTimePickerTemplateArr = ['<div class="u-date-panel">',
	                            '<div class="u-date-body">',
	                                /*'<div class="u-date-header">',
	                                    '<span class="u-date-header-year"></span>',
	                                     '<div class="u-date-header-h3">',
	                                        '<span class="u-date-header-week"></span>',
	                                        '<span>,</span>',
	                                        '<span class="u-date-header-month"></span>',
	                                        '<span> </span>',
	                                        '<span class="u-date-header-date"></span>',
	                                        '<span> </span>',
	                                        '<span class="u-date-header-time"></span>',
	                                     '</div>',
	                                '</div>',*/
	                                '<div class="u-date-content"></div>',
	                            '</div>',
	                            '<div class="u-date-nav">',
	                                '<button class="u-button u-date-ok right primary">确定</button>',
	                                '<button class="u-button u-date-cancel right">取消</button>',
	                                '<button class="u-button u-date-clean">清空</button>',
	                            '</div>',
	                           '</div>'];


	/******************************
	 *  Public method
	 ******************************/

	DateTimePicker.fn.show = function(evt){
	    if(!this.enable){
	        return;
	    }
	    var inputValue = this._input.value;
	    this.setDate(inputValue);

	    var self = this;
	    if (!this._panel){
	        this._panel = makeDOM(dateTimePickerTemplateArr.join(""));
	        /*if(env.isMobile){
	            removeClass(this._panel,'u-date-panel')
	            addClass(this._panel,'u-date-panel-mobile');
	        }*/
	        this._dateNav = this._panel.querySelector('.u-date-nav');
	        if (this.type === 'date' && !env.isMobile){
	           this._dateNav.style.display = 'none';
	        }
	        this._dateContent = this._panel.querySelector('.u-date-content');
	        if(this.type == 'datetime'){
	            /*if(env.isMobile){
	                this._dateContent.style.height = '226/16*2rem';
	            }
	            else{
	                this._dateContent.style.height = '226px';
	            }*/
	        }
	        this.btnOk = this._panel.querySelector('.u-date-ok');
	        this.btnCancel = this._panel.querySelector('.u-date-cancel');
	        this.btnClean = this._panel.querySelector('.u-date-clean');
	        var rippleContainer = document.createElement('span');
	        addClass(rippleContainer,'u-ripple');
	        this.btnOk.appendChild(rippleContainer);
	        var rippleContainer = document.createElement('span');
	        addClass(rippleContainer,'u-ripple');
	        this.btnCancel.appendChild(rippleContainer);
	        var rippleContainer = document.createElement('span');
	        addClass(rippleContainer,'u-ripple');
	        this.btnClean.appendChild(rippleContainer);
	        new URipple(this.btnOk);
	        new URipple(this.btnCancel);
	        new URipple(this.btnClean);
	        on(this.btnOk, 'click', function(e){
	            this.onOk();
	            stopEvent(e);
	        }.bind(this));
	        on(this.btnCancel, 'click', function(e){
	            self.onCancel();
	            stopEvent(e)
	        });
	        on(this.btnClean, 'click', function(e){
	            self.pickerDate = null;
	            self.onOk();
	            stopEvent(e)
	        });
	            

	        // this.preBtn = makeDOM('<button class="u-date-pre-button u-button flat floating mini">&lt;</button>');
	        // this.nextBtn = makeDOM('<button class="u-date-next-button u-button flat floating mini">&gt;</button>');
	        this.preBtn = makeDOM('<button class="u-date-pre-button u-button mini">&lt;</button>');
	        this.nextBtn = makeDOM('<button class="u-date-next-button u-button mini">&gt;</button>');
	        // new u.Button(this.nextBtn);

	        on(this.preBtn, 'click', function(e){
	            if (self.currentPanel == 'date'){
	                self._fillDate('preivous');
	            }else if (self.currentPanel == 'year'){
	                self._fillYear('preivous');
	            }
	            stopEvent(e)
	        });
	        on(this.nextBtn, 'click', function(e){
	            if (self.currentPanel == 'date'){
	                self._fillDate('next');
	            }else if (self.currentPanel == 'year'){
	                self._fillYear('next');
	            }
	            stopEvent(e)
	        });
	        // if(!env.isMobile){
	            this._dateContent.appendChild(this.preBtn);
	            this._dateContent.appendChild(this.nextBtn);    
	        // }
	        

	        
	    }
	    this.pickerDate = this.date || new Date();
	    this._updateDate();
	    this._fillDate();
	    this._response();
	    on(window, 'resize', function(){
	        self._response();
	    });
	    /*if(env.isMobile){
	        this.overlayDiv = makeModal(this._panel);
	        on(this.overlayDiv, 'click', function(){
	            self.onCancel();
	        })
	    }*/
	    addClass(this._panel, 'is-visible');
	    if(!env.isMobile){
	        if(this.options.showFix){
	            document.body.appendChild(this._panel);
	            this._panel.style.position = 'fixed';
	            showPanelByEle({
	                ele:this._input,
	                panel:this._panel,
	                position:"bottomLeft"
	            });
	        }else{
	            var bodyWidth = document.body.clientWidth,bodyHeight = document.body.clientHeight,
	                panelWidth = this._panel.offsetWidth,panelHeight = this._panel.offsetHeight
	            //调整left和top
	            // this._element.parentNode.appendChild(this._panel);
	            this._element.appendChild(this._panel);
	            this._element.style.position = 'relative'; 
	            // this.left = this.element.offsetLeft;
	             this.left = this._input.offsetLeft;
	            var inputHeight = this._input.offsetHeight;
	            // this.top = this.element.offsetTop + inputHeight;
	            this.top = this._input.offsetTop + inputHeight;

	            if(this.left + panelWidth > bodyWidth){
	                this.left = bodyWidth - panelWidth;
	            }

	            if((this.top + panelHeight) > bodyHeight){
	                this.top = bodyHeight - panelHeight;
	            }
	            

	            this._panel.style.left = this.left + 'px';
	            this._panel.style.top = this.top + 'px';

	        }
	        

	        this._panel.style.marginLeft = '0px';
	        var callback = function (e) {
	            if (e !== evt && e.target !== self._input && !hasClass(e.target,'u-date-content-year-cell')  && !hasClass(e.target,'u-date-content-year-cell') &&closest(e.target,'u-date-panel') !== self._panel && self._inputFocus != true) {
	                off(document,'click', callback);
	                self.onCancel();
	            }
	        };
	        on(document,'click', callback);


	        //tab事件
	         on(self._input,'keydown',function(e){
	            var keyCode = e.keyCode;
	            if(keyCode==9) {
	                self.onCancel();
	            }
	        });
	      
	    }
	    
	    this.isShow = true;
	};


	/**
	 * 确定事件
	 */
	DateTimePicker.fn.onOk = function(){
	    this.setDate(this.pickerDate);
	    this.isShow = false;
	    removeClass(this._panel, 'is-visible');
	    try{
	        document.body.removeChild(this.overlayDiv);    
	    }catch(e){

	    }
	    this.trigger('select', {value:this.pickerDate})
	}

	/**
	 * 确定事件
	 */
	DateTimePicker.fn.onCancel = function(){
	    this.isShow = false;
	    removeClass(this._panel, 'is-visible');
	    try{
	        document.body.removeChild(this.overlayDiv);
	    }catch(e){

	    }
	}


	DateTimePicker.fn.setDate = function(value){
	    if (!value){
	        this.date = null;
	        this._input.value = '';
	        return;
	    }

	    var _date = udate.getDateObj(value);
	    if(_date){
	        if(this.beginDateObj){
	            if(_date < this.beginDateObj)
	                return;
	        }
	        this.date = _date;
	        this._input.value = udate.format(this.date,this.format);
	    }
	    
	};
	/**
	 *设置format
	 * @param format
	 */
	DateTimePicker.fn.setFormat = function(format){
	    this.format = format;
	    this._input.value = udate.format(this.date,this.format);
	};

	DateTimePicker.fn.setStartDate = function(startDate){
	    if(startDate){
	        this.beginDateObj = udate.getDateObj(startDate);
	        this.beginYear = this.beginDateObj.getFullYear();
	        this.beginMonth = this.beginDateObj.getMonth();
	        this.beginDate = this.beginDateObj.getDate();
	    }
	    
	}
	DateTimePicker.fn.setEnable = function(enable){
	    if (enable === true || enable === 'true') {
	        this.enable = true;
	    }else{
	        this.enable = false;
	    }
	}


	compMgr.regComp({
	    comp: DateTimePicker,
	    compAsString: 'u.DateTimePicker',
	    css: 'u-datepicker'
	});

	if(document.readyState && document.readyState === 'complete') {
	    compMgr.updateComp();
	} else {
	    on(window, 'load', function() {
	        //扫描并生成控件
	        compMgr.updateComp();
	    });
	}

	export {DateTimePicker};


/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * Module : neoui-layout-nav
	 * Author : Kvkens(yueming@yonyou.com)
	 * Date	  : 2016-08-02 15:56:32
	 */

	import {BaseComponent} from 'neoui-sparrow/js/BaseComponent';
	import {addClass,hasClass,removeClass,toggleClass,closest} from 'neoui-sparrow/js/dom';
	import {on} from 'neoui-sparrow/js/event';
	import {Ripple,URipple} from 'neoui-sparrow/js/util/ripple';
	import {env} from 'neoui-sparrow/js/env';
	import {compMgr} from 'neoui-sparrow/js/compMgr';

	var NavLayout = BaseComponent.extend({
	    _Constant: {
	        MAX_WIDTH: '(max-width: 1024px)',
	        TAB_SCROLL_PIXELS: 100,

	        MENU_ICON: 'menu',
	        CHEVRON_LEFT: 'chevron_left',
	        CHEVRON_RIGHT: 'chevron_right'
	    },
	    /**
	     * Modes.
	     *
	     * @enum {number}
	     * @private
	     */
	    _Mode: {
	        STANDARD: 0,
	        SEAMED: 1,
	        WATERFALL: 2,
	        SCROLL: 3
	    },
	    /**
	     * Store strings for class names defined by this component that are used in
	     * JavaScript. This allows us to simply change it in one place should we
	     * decide to modify at a later date.
	     *
	     * @enum {string}
	     * @private
	     */
	    _CssClasses: {
	        CONTAINER: 'u-navlayout-container',
	        HEADER: 'u-navlayout-header',
	        DRAWER: 'u-navlayout-drawer',
	        CONTENT: 'u-navlayout-content',
	        DRAWER_BTN: 'u-navlayout-drawer-button',

	        ICON: 'fa',

	        //JS_RIPPLE_EFFECT: 'mdl-js-ripple-effect',
	        //RIPPLE_CONTAINER: 'mdl-layout__tab-ripple-container',
	        //RIPPLE: 'mdl-ripple',
	        //RIPPLE_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events',

	        HEADER_SEAMED: 'seamed',
	        HEADER_WATERFALL: 'waterfall',
	        HEADER_SCROLL: 'scroll',

	        FIXED_HEADER: 'fixed',
	        OBFUSCATOR: 'u-navlayout-obfuscator',

	        TAB_BAR: 'u-navlayout-tab-bar',
	        TAB_CONTAINER: 'u-navlayout-tab-bar-container',
	        TAB: 'u-navlayout-tab',
	        TAB_BAR_BUTTON: 'u-navlayout-tab-bar-button',
	        TAB_BAR_LEFT_BUTTON: 'u-navlayout-tab-bar-left-button',
	        TAB_BAR_RIGHT_BUTTON: 'u-navlayout-tab-bar-right-button',
	        PANEL: 'u-navlayout-tab-panel',

	        HAS_DRAWER: 'has-drawer',
	        HAS_TABS: 'has-tabs',
	        HAS_SCROLLING_HEADER: 'has-scrolling-header',
	        CASTING_SHADOW: 'is-casting-shadow',
	        IS_COMPACT: 'is-compact',
	        IS_SMALL_SCREEN: 'is-small-screen',
	        IS_DRAWER_OPEN: 'is-visible',
	        IS_ACTIVE: 'is-active',
	        IS_UPGRADED: 'is-upgraded',
	        IS_ANIMATING: 'is-animating',

	        ON_LARGE_SCREEN: 'u-navlayout-large-screen-only',
	        ON_SMALL_SCREEN: 'u-navlayout-small-screen-only',

	        NAV: 'u-nav',
	        NAV_LINK: 'u-nav-link',
	        NAV_LINK_CURRENT: 'u-nav-link-current',
	        NAV_LINK_OPEN: 'u-nav-link-open',
	        NAV_SUB: 'u-nav-sub'
	    },
	    init: function(){
	        var container = document.createElement('div');
	        addClass(container, this._CssClasses.CONTAINER);
	        this.element.parentElement.insertBefore(container, this.element);
	        this.element.parentElement.removeChild(this.element);
	        container.appendChild(this.element);

	        var directChildren = this.element.childNodes;
	        var numChildren = directChildren.length;
	        for (var c = 0; c < numChildren; c++) {
	            var child = directChildren[c];
	            if (hasClass(child, this._CssClasses.HEADER)) {
	                this._header = child;
	            }

	            if (hasClass(child, this._CssClasses.DRAWER)) {
	                this._drawer = child;
	            }

	            if (hasClass(child, this._CssClasses.CONTENT)) {
	                this._content = child;
	                var layoutHeight = this.element.offsetHeight;
	                var headerHeight = typeof this._header === 'undefined' ? 0 : this._header.offsetHeight;
	                this._content.style.height = layoutHeight - headerHeight + 'px'
	                var self = this;
	                on(window,'resize', function () {
	                    var layoutHeight = self.element.offsetHeight;
	                    var headerHeight = typeof self._header === 'undefined' ? 0 : self._header.offsetHeight;
	                    self._content.style.height = layoutHeight - headerHeight + 'px'

	                });
	            }
	        }

	        if (this._header) {
	            this._tabBar = this._header.querySelector('.' + this._CssClasses.TAB_BAR);
	        }

	        var mode = this._Mode.STANDARD;

	        if (this._header) {
	            if (hasClass(this._header, this._CssClasses.HEADER_SEAMED)) {
	                mode = this._Mode.SEAMED;
	            //} else if (hasClass(this._header,this._CssClasses.HEADER_SEAMED)) {
	            //    mode = this._Mode.WATERFALL;
	            //    on(this._header,'transitionend', this._headerTransitionEndHandler.bind(this));
	            //    // this._header.addEventListener('transitionend', this._headerTransitionEndHandler.bind(this));
	            //    on(this._header,'click', this._headerClickHandler.bind(this));
	            //    // this._header.addEventListener('click', this._headerClickHandler.bind(this));
	            } else if (hasClass(this._header, this._CssClasses.HEADER_SCROLL)) {
	                mode = this._Mode.SCROLL;
	                addClass(container, this._CssClasses.HAS_SCROLLING_HEADER);
	            }

	            if (mode === this._Mode.STANDARD) {
	                addClass(this._header, this._CssClasses.CASTING_SHADOW);
	                if (this._tabBar) {
	                    addClass(this._tabBar, this._CssClasses.CASTING_SHADOW);
	                }
	            } else if (mode === this._Mode.SEAMED || mode === this._Mode.SCROLL) {
	                removeClass(this._header, this._CssClasses.CASTING_SHADOW);
	                if (this._tabBar) {
	                    removeClass(this._tabBar, this._CssClasses.CASTING_SHADOW);
	                }
	            } else if (mode === this._Mode.WATERFALL) {
	                // Add and remove shadows depending on scroll position.
	                // Also add/remove auxiliary class for styling of the compact version of
	                // the header.
	                on(this._content,'scroll',this._contentScrollHandler.bind(this));
	                this._contentScrollHandler();
	            }
	        }

	        // Add drawer toggling button to our layout, if we have an openable drawer.
	        if (this._drawer) {
	            var drawerButton = this.element.querySelector('.' + this._CssClasses.DRAWER_BTN);
	            if (!drawerButton) {
	                drawerButton = document.createElement('div');
	                addClass(drawerButton, this._CssClasses.DRAWER_BTN);

	                var drawerButtonIcon = document.createElement('i');
	                drawerButtonIcon.className = 'uf uf-reorderoption';
	                //drawerButtonIcon.textContent = this._Constant.MENU_ICON;
	                drawerButton.appendChild(drawerButtonIcon);
	            }

	            if (hasClass(this._drawer, this._CssClasses.ON_LARGE_SCREEN)) {
	                //If drawer has ON_LARGE_SCREEN class then add it to the drawer toggle button as well.
	                addClass(drawerButton, this._CssClasses.ON_LARGE_SCREEN);
	            } else if (hasClass(this._drawer, this._CssClasses.ON_SMALL_SCREEN)) {
	                //If drawer has ON_SMALL_SCREEN class then add it to the drawer toggle button as well.
	                addClass(drawerButton, this._CssClasses.ON_SMALL_SCREEN);
	            }
	            on(drawerButton,'click', this._drawerToggleHandler.bind(this));

	            // Add a class if the layout has a drawer, for altering the left padding.
	            // Adds the HAS_DRAWER to the elements since this._header may or may
	            // not be present.
	            addClass(this.element, this._CssClasses.HAS_DRAWER);

	            // If we have a fixed header, add the button to the header rather than
	            // the layout.
	            if (hasClass(this.element, this._CssClasses.FIXED_HEADER) && this._header) {
	                this._header.insertBefore(drawerButton, this._header.firstChild);
	            } else {
	                this.element.insertBefore(drawerButton, this._content);
	            }
	            this.drawerButton = drawerButton;

	            var obfuscator = document.createElement('div');
	            addClass(obfuscator, this._CssClasses.OBFUSCATOR);
	            this.element.appendChild(obfuscator);
	            on(obfuscator,'click', this._drawerToggleHandler.bind(this));
	            this._obfuscator = obfuscator;

	            var leftnavs = this.element.querySelectorAll('.' + this._CssClasses.NAV);
	            for(var i = 0; i < leftnavs.length; i++){
	                on(leftnavs[i],'click', this._navlinkClickHander.bind(this));
	                
	                var items = leftnavs[i].querySelectorAll('.' + this._CssClasses.NAV_LINK);
	                for(var i=0;i<items.length;i++) {
	                    new Ripple(items[i])
	                }
	            }   
	            

	            
	            
	        }

	        // Keep an eye on screen size, and add/remove auxiliary class for styling
	        // of small screens.
	        

	        if(env.isIE8 || env.isIE9){
	            on(window,'resize',this._screenSizeHandler.bind(this));
	        }else{
	            this._screenSizeMediaQuery = window.matchMedia(
	            /** @type {string} */ (this._Constant.MAX_WIDTH));
	            this._screenSizeMediaQuery.addListener(this._screenSizeHandler.bind(this));
	        }

	        this._screenSizeHandler();

	        // Initialize tabs, if any.
	        if (this._header && this._tabBar) {
	            addClass(this.element, this._CssClasses.HAS_TABS);

	            var tabContainer = document.createElement('div');
	            addClass(tabContainer, this._CssClasses.TAB_CONTAINER);
	            this._header.insertBefore(tabContainer, this._tabBar);
	            this._header.removeChild(this._tabBar);

	            var leftButton = document.createElement('div');
	            addClass(leftButton, this._CssClasses.TAB_BAR_BUTTON);
	            addClass(leftButton, this._CssClasses.TAB_BAR_LEFT_BUTTON);
	            var leftButtonIcon = document.createElement('i');
	            addClass(leftButtonIcon, this._CssClasses.ICON);
	            leftButtonIcon.textContent = this._Constant.CHEVRON_LEFT;
	            leftButton.appendChild(leftButtonIcon);
	            on(leftButton,'click', function () {
	                this._tabBar.scrollLeft -= this._Constant.TAB_SCROLL_PIXELS;
	            }.bind(this));

	            var rightButton = document.createElement('div');
	            addClass(rightButton, this._CssClasses.TAB_BAR_BUTTON);
	            addClass(rightButton, this._CssClasses.TAB_BAR_RIGHT_BUTTON);
	            var rightButtonIcon = document.createElement('i');
	            addClass(rightButtonIcon, this._CssClasses.ICON);
	            rightButtonIcon.textContent = this._Constant.CHEVRON_RIGHT;
	            rightButton.appendChild(rightButtonIcon);
	            on(rightButton,'click', function () {
	                this._tabBar.scrollLeft += this._Constant.TAB_SCROLL_PIXELS;
	            }.bind(this));

	            tabContainer.appendChild(leftButton);
	            tabContainer.appendChild(this._tabBar);
	            tabContainer.appendChild(rightButton);

	            // Add and remove buttons depending on scroll position.
	            var tabScrollHandler = function () {
	                if (this._tabBar.scrollLeft > 0) {
	                    addClass(leftButton, this._CssClasses.IS_ACTIVE);
	                } else {
	                    removeClass(leftButton, this._CssClasses.IS_ACTIVE);
	                }

	                if (this._tabBar.scrollLeft <
	                    this._tabBar.scrollWidth - this._tabBar.offsetWidth) {
	                    addClass(rightButton, this._CssClasses.IS_ACTIVE);
	                } else {
	                    removeClass(rightButton, this._CssClasses.IS_ACTIVE);
	                }
	            }.bind(this);

	            on(this._tabBar,'scroll', tabScrollHandler);
	            tabScrollHandler();

	            if (hasClass(this._tabBar, this._CssClasses.JS_RIPPLE_EFFECT)) {
	                addClass(this._tabBar, this._CssClasses.RIPPLE_IGNORE_EVENTS);
	            }

	            // Select element tabs, document panels
	            var tabs = this._tabBar.querySelectorAll('.' + this._CssClasses.TAB);
	            var panels = this._content.querySelectorAll('.' + this._CssClasses.PANEL);

	            // Create new tabs for each tab element
	            for (var i = 0; i < tabs.length; i++) {
	                new UNavLayoutTab(tabs[i], tabs, panels, this);
	            }
	        }

	        addClass(this.element, this._CssClasses.IS_UPGRADED);

	    },

	    /**
	     * Handles scrolling on the content.
	     *
	     * @private
	     */
	    _contentScrollHandler: function () {
	        if (hasClass(this._header, this._CssClasses.IS_ANIMATING)) {
	            return;
	        }

	        if (this._content.scrollTop > 0 && !hasClass(this._header, this._CssClasses.IS_COMPACT)) {
	            addClass(this._header, this._CssClasses.CASTING_SHADOW)
	                .addClass(this._header, this._CssClasses.IS_COMPACT)
	                .addClass(this._header, this._CssClasses.IS_ANIMATING);
	        } else if (this._content.scrollTop <= 0 && hasClass(this._header, this._CssClasses.IS_COMPACT)) {
	            removeClass(this._header, this._CssClasses.CASTING_SHADOW)
	                .removeClass(this._header, this._CssClasses.IS_COMPACT)
	                .addClass(this._header, this._CssClasses.IS_ANIMATING);
	        }
	    },


	    /**
	     * Handles changes in screen size.
	     *
	     * @private
	     */
	    _screenSizeHandler: function () {
	        if(env.isIE8 || env.isIE9){
	            this._screenSizeMediaQuery = {};
	            var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth; 
	            if(w > 1024)
	                this._screenSizeMediaQuery.matches = false;
	            else
	                this._screenSizeMediaQuery.matches = true;
	        }
	        if (this._screenSizeMediaQuery.matches) {
	            addClass(this.element, this._CssClasses.IS_SMALL_SCREEN);
	        } else {
	            removeClass(this.element, this._CssClasses.IS_SMALL_SCREEN);
	            // Collapse drawer (if any) when moving to a large screen size.
	            if (this._drawer) {
	                removeClass(this._drawer, this._CssClasses.IS_DRAWER_OPEN);
	                removeClass(this._obfuscator, this._CssClasses.IS_DRAWER_OPEN);
	            }
	        }
	    },
	    /**
	     * Handles toggling of the drawer.
	     *
	     * @private
	     */
	    _drawerToggleHandler: function () {
	        toggleClass(this._drawer, this._CssClasses.IS_DRAWER_OPEN);
	        toggleClass(this._obfuscator, this._CssClasses.IS_DRAWER_OPEN);
	    },
	    /**
	     * Handles (un)setting the `is-animating` class
	     *
	     * @private
	     */
	    _headerTransitionEndHandler: function () {
	        removeClass(this._header, this._CssClasses.IS_ANIMATING);
	    },
	    /**
	     * Handles expanding the header on click
	     *
	     * @private
	     */
	    _headerClickHandler: function () {
	        if (hasClass(this._header, this._CssClasses.IS_COMPACT)) {
	            removeClass(this._header, this._CssClasses.IS_COMPACT);
	            addClass(this._header, this._CssClasses.IS_ANIMATING);
	        }
	    },
	    /**
	     * Reset tab state, dropping active classes
	     *
	     * @private
	     */
	    _resetTabState: function (tabBar) {
	        for (var k = 0; k < tabBar.length; k++) {
	            removeClass(tabBar[k], this._CssClasses.IS_ACTIVE);
	        }
	    },
	    /**
	     * Reset panel state, droping active classes
	     *
	     * @private
	     */
	    _resetPanelState: function (panels) {
	        for (var j = 0; j < panels.length; j++) {
	            removeClass(panels[j], this._CssClasses.IS_ACTIVE);
	        }
	    },
	    _navlinkClickHander: function (e) {
	        //var _target = e.currentTarget || e.target || e.srcElement;
	        var curlink = this.element.querySelector('.'+this._CssClasses.NAV_LINK_CURRENT);
	        curlink && removeClass(curlink, this._CssClasses.NAV_LINK_CURRENT);
	        // if (curlink && isIE8){
	        // 	var sub = curlink.parentNode.querySelector('.'+this._CssClasses.NAV_SUB);
	        // 	if (sub){
	        // 		sub.style.maxHeight = '0';
	        // 	}
	        // }

	        var item = closest(e.target, this._CssClasses.NAV_LINK);

	        if(item){
	            addClass(item, this._CssClasses.NAV_LINK_CURRENT);
	            var sub = item.parentNode.querySelector('.'+this._CssClasses.NAV_SUB),
	                open = hasClass(item, this._CssClasses.NAV_LINK_OPEN);
	            if (sub && open){
	                removeClass(item, this._CssClasses.NAV_LINK_OPEN);
	                if (env.isIE8)
	                    sub.style.maxHeight = 0;
	            }
	            if (sub && !open){
	                addClass(item, this._CssClasses.NAV_LINK_OPEN);
	                if (env.isIE8)
	                    sub.style.maxHeight = '999px';
	            }
	            // sub && open && removeClass(item, this._CssClasses.NAV_LINK_OPEN);
	            // sub && !open && addClass(item, this._CssClasses.NAV_LINK_OPEN);
	        }
	        
	    }
	});



	/**
	 * Constructor for an individual tab.
	 *
	 * @constructor
	 * @param {HTMLElement} tab The HTML element for the tab.
	 * @param {!Array<HTMLElement>} tabs Array with HTML elements for all tabs.
	 * @param {!Array<HTMLElement>} panels Array with HTML elements for all panels.
	 * @param {UNavLayout} layout The UNavLayout object that owns the tab.
	 */
	function UNavLayoutTab(tab, tabs, panels, layout) {

	    /**
	     * Auxiliary method to programmatically select a tab in the UI.
	     */
	    function selectTab() {
	        var href = tab.href.split('#')[1];
	        var panel = layout._content.querySelector('#' + href);
	        layout._resetTabState(tabs);
	        layout._resetPanelState(panels);
	        addClass(tab, layout._CssClasses.IS_ACTIVE);
	        addClass(panel, layout._CssClasses.IS_ACTIVE);
	    }

	    //if (layout.tabBar_.classList.contains(layout._CssClasses.JS_RIPPLE_EFFECT)) {
	    var rippleContainer = document.createElement('span');
	    addClass(rippleContainer, 'u-ripple');
	    //rippleContainer.classList.add(layout._CssClasses.JS_RIPPLE_EFFECT);
	    //var ripple = document.createElement('span');
	    //ripple.classList.add(layout._CssClasses.RIPPLE);
	    //rippleContainer.appendChild(ripple);
	    tab.appendChild(rippleContainer);
	    new URipple(tab)
	    //}
	    on(tab,'click', function (e) {
	        if (tab.getAttribute('href').charAt(0) === '#') {
	            e.preventDefault();
	            selectTab();
	        }
	    });

	    tab.show = selectTab;

	    on(tab,'click', function (e) {
	        e.preventDefault();
	        var href = tab.href.split('#')[1];
	        var panel = layout._content.querySelector('#' + href);
	        layout._resetTabState(tabs);
	        layout._resetPanelState(panels);
	        addClass(tab, layout._CssClasses.IS_ACTIVE);
	        addClass(panel, layout._CssClasses.IS_ACTIVE);
	    });
	}
	var NavLayoutTab = UNavLayoutTab;

	compMgr.regComp({
	    comp: NavLayout,
	    compAsString: 'u.NavLayout',
	    css: 'u-navlayout'
	});

	if(document.readyState && document.readyState === 'complete') {
		compMgr.updateComp();
	} else {
		on(window, 'load', function() {
			//扫描并生成控件
			compMgr.updateComp();
		});
	}

	export {NavLayout,NavLayoutTab};


/***/ },
/* 6 */
/***/ function(module, exports) {

	/**
	 * Module : neoui-menu
	 * Author : Kvkens(yueming@yonyou.com)
	 * Date	  : 2016-08-02 19:22:32
	 */
	import {BaseComponent} from 'neoui-sparrow/js/BaseComponent';
	import {addClass,removeClass,makeDOM,hasClass} from 'neoui-sparrow/js/dom';
	import {on,off,stopEvent} from 'neoui-sparrow/js/event';
	import {URipple} from 'neoui-sparrow/js/util/ripple';
	import {env} from 'neoui-sparrow/js/env';
	import {compMgr} from 'neoui-sparrow/js/compMgr';

	var Menu = BaseComponent.extend({
		_Keycodes: {
			ENTER: 13,
			ESCAPE: 27,
			SPACE: 32,
			UP_ARROW: 38,
			DOWN_ARROW: 40
		},
		_CssClasses: {

			BOTTOM_LEFT: 'u-menu-bottom-left', // This is the default.
			BOTTOM_RIGHT: 'u-menu-bottom-right',
			TOP_LEFT: 'u-menu-top-left',
			TOP_RIGHT: 'u-menu-top-right',
			UNALIGNED: 'u-menu-unaligned'
		},

		init: function() {

			// Create container for the menu.
			var container = document.createElement('div');
			addClass(container, 'u-menu-container');
			this.element.parentElement.insertBefore(container, this.element);
			this.element.parentElement.removeChild(this.element);
			container.appendChild(this.element);
			this._container = container;

			// Create outline for the menu (shadow and background).
			var outline = document.createElement('div');
			addClass(outline, 'u-menu-outline');
			this._outline = outline;
			container.insertBefore(outline, this.element);

			// Find the "for" element and bind events to it.
			var forElId = this.element.getAttribute('for') || this.element.getAttribute('data-u-for');
			var forEl = null;
			if(forElId) {
				forEl = document.getElementById(forElId);
				if(forEl) {
					this.for_element = forEl;
					on(forEl, 'click', this._handleForClick.bind(this));
					on(forEl, 'keydown', this._handleForKeyboardEvent.bind(this))
				}
			}

			var items = this.element.querySelectorAll('.u-menu-item');
			this._boundItemKeydown = this._handleItemKeyboardEvent.bind(this);
			this._boundItemClick = this._handleItemClick.bind(this);
			for(var i = 0; i < items.length; i++) {
				// Add a listener to each menu item.
				on(items[i], 'click', this._boundItemClick);
				// Add a tab index to each menu item.
				items[i].tabIndex = '-1';
				// Add a keyboard listener to each menu item.
				on(items[i], 'keydown', this._boundItemKeydown);
			}

			for(i = 0; i < items.length; i++) {
				var item = items[i];

				var rippleContainer = document.createElement('span');
				addClass(rippleContainer, 'u-ripple');
				item.appendChild(rippleContainer);
				new URipple(item)
			}
			//}

			// Copy alignment classes to the container, so the outline can use them.
			if(hasClass(this.element, 'u-menu-bottom-left')) {
				addClass(this._outline, 'u-menu-bottom-left');
			}
			if(hasClass(this.element, 'u-menu-bottom-right')) {
				addClass(this._outline, 'u-menu-bottom-right');
			}
			if(hasClass(this.element, 'u-menu-top-left')) {
				addClass(this._outline, 'u-menu-top-left');
			}
			if(hasClass(this.element, 'u-menu-top-right')) {
				addClass(this._outline, 'u-menu-top-right');
			}
			if(hasClass(this.element, 'u-menu-unaligned')) {
				addClass(this._outline, 'u-menu-unaligned');
			}

			addClass(container, 'is-upgraded');

		},
		_handleForClick: function(evt) {
			if(this.element && this.for_element) {
				var rect = this.for_element.getBoundingClientRect();
				var forRect = this.for_element.parentElement.getBoundingClientRect();

				if(hasClass(this.element, 'u-menu-unaligned')) {
					// Do not position the menu automatically. Requires the developer to
					// manually specify position.
				} else if(hasClass(this.element, 'u-menu-bottom-right')) {
					// Position below the "for" element, aligned to its right.
					this._container.style.left = this.for_element.offsetLeft+this.for_element.offsetWidth-this.element.offsetWidth + 'px';
					// this._container.style.right = (forRect.right - rect.right) + 'px';
					this._container.style.top = this.for_element.offsetTop + this.for_element.offsetHeight + 'px';
				} else if(hasClass(this.element, 'u-menu-top-left')) {
					// Position above the "for" element, aligned to its left.
					this._container.style.left = this.for_element.offsetLeft + 'px';
					this._container.style.bottom = (forRect.bottom - rect.top) + 'px';
				} else if(hasClass(this.element, 'u-menu-top-right')) {
					// Position above the "for" element, aligned to its right.
					this._container.style.right = (forRect.right - rect.right) + 'px';
					this._container.style.bottom = (forRect.bottom - rect.top) + 'px';
				} else {
					// Default: position below the "for" element, aligned to its left.
					this._container.style.left = this.for_element.offsetLeft + 'px';
					this._container.style.top = this.for_element.offsetTop + this.for_element.offsetHeight + 'px';
				}
			}

			this.toggle(evt);
		},
		/**
		 * Handles a keyboard event on the "for" element.
		 *
		 * @param {Event} evt The event that fired.
		 * @private
		 */
		_handleForKeyboardEvent: function(evt) {
			if(this.element && this._container && this.for_element) {
				var items = this.element.querySelectorAll('.u-menu-item:not([disabled])');

				if(items && items.length > 0 && hasClass(this._container, 'is-visible')) {
					if(evt.keyCode === this._Keycodes.UP_ARROW) {
						stopEvent(evt);
						// evt.preventDefault();
						items[items.length - 1].focus();
					} else if(evt.keyCode === this._Keycodes.DOWN_ARROW) {
						stopEvent(evt);
						// evt.preventDefault();
						items[0].focus();
					}
				}
			}
		},
		/**
		 * Handles a keyboard event on an item.
		 *
		 * @param {Event} evt The event that fired.
		 * @private
		 */
		_handleItemKeyboardEvent: function(evt) {
			if(this.element && this._container) {
				var items = this.element.querySelectorAll('.u-menu-item:not([disabled])');

				if(items && items.length > 0 && hasClass(this._container, 'is-visible')) {
					var currentIndex = Array.prototype.slice.call(items).indexOf(evt.target);

					if(evt.keyCode === this._Keycodes.UP_ARROW) {
						stopEvent(evt);
						// evt.preventDefault();
						if(currentIndex > 0) {
							items[currentIndex - 1].focus();
						} else {
							items[items.length - 1].focus();
						}
					} else if(evt.keyCode === this._Keycodes.DOWN_ARROW) {
						stopEvent(evt);
						// evt.preventDefault();
						if(items.length > currentIndex + 1) {
							items[currentIndex + 1].focus();
						} else {
							items[0].focus();
						}
					} else if(evt.keyCode === this._Keycodes.SPACE ||
						evt.keyCode === this._Keycodes.ENTER) {
						stopEvent(evt);
						// evt.preventDefault();
						// Send mousedown and mouseup to trigger ripple.
						var e = new MouseEvent('mousedown');
						evt.target.dispatchEvent(e);
						e = new MouseEvent('mouseup');
						evt.target.dispatchEvent(e);
						// Send click.
						evt.target.click();
					} else if(evt.keyCode === this._Keycodes.ESCAPE) {
						stopEvent(evt);
						// evt.preventDefault();
						this.hide();
					}
				}
			}
		},
		/**
		 * Handles a click event on an item.
		 *
		 * @param {Event} evt The event that fired.
		 * @private
		 */
		_handleItemClick: function(evt) {
			if(evt.target.hasAttribute('disabled')) {
				stopEvent(evt);
				// evt.stopPropagation();
			} else {
				// Wait some time before closing menu, so the user can see the ripple.
				this._closing = true;
				window.setTimeout(function(evt) {
					this.hide();
					this._closing = false;
				}.bind(this), 150);
			}
		},
		/**
		 * Calculates the initial clip (for opening the menu) or final clip (for closing
		 * it), and applies it. This allows us to animate from or to the correct point,
		 * that is, the point it's aligned to in the "for" element.
		 *
		 * @param {number} height Height of the clip rectangle
		 * @param {number} width Width of the clip rectangle
		 * @private
		 */
		_applyClip: function(height, width) {
			if(hasClass(this.element, 'u-menu-unaligned')) {
				// Do not clip.
				this.element.style.clip = '';
			} else if(hasClass(this.element, 'u-menu-bottom-right')) {
				// Clip to the top right corner of the menu.
				this.element.style.clip =
					'rect(0 ' + width + 'px ' + '0 ' + width + 'px)';
			} else if(hasClass(this.element, 'u-menu-top-left')) {
				// Clip to the bottom left corner of the menu.
				this.element.style.clip =
					'rect(' + height + 'px 0 ' + height + 'px 0)';
			} else if(hasClass(this.element, 'u-menu-top-right')) {
				// Clip to the bottom right corner of the menu.
				this.element.style.clip = 'rect(' + height + 'px ' + width + 'px ' +
					height + 'px ' + width + 'px)';
			} else {
				// Default: do not clip (same as clipping to the top left corner).
				this.element.style.clip = 'rect(' + 0 + 'px ' + 0 + 'px ' +
					0 + 'px ' + 0 + 'px)';
			}
		},
		/**
		 * Adds an event listener to clean up after the animation ends.
		 *
		 * @private
		 */
		_addAnimationEndListener: function() {
			var cleanup = function() {
				off(this.element, 'transitionend', cleanup);
				// this.element.removeEventListener('transitionend', cleanup);
				off(this.element, 'webkitTransitionEnd', cleanup);
				// this.element.removeEventListener('webkitTransitionEnd', cleanup);
				removeClass(this.element, 'is-animating');
			}.bind(this);

			// Remove animation class once the transition is done.
			on(this.element, 'transitionend', cleanup);
			// this.element.addEventListener('transitionend', cleanup);
			on(this.element, 'webkitTransitionEnd', cleanup);
			// this.element.addEventListener('webkitTransitionEnd', cleanup);
		},
		/**
		 * Displays the menu.
		 *
		 * @public
		 */
		show: function(evt) {
			if(this.element && this._container && this._outline) {
				// Measure the inner element.
				var height = this.element.getBoundingClientRect().height;
				var width = this.element.getBoundingClientRect().width;

				if(!width) {
					var left = this.element.getBoundingClientRect().left;
					var right = this.element.getBoundingClientRect().right;
					width = right - left;
				}

				if(!height) {
					var top = this.element.getBoundingClientRect().top;
					var bottom = this.element.getBoundingClientRect().bottom;
					height = bottom - top;
				}

				// Apply the inner element's size to the container and outline.
				this._container.style.width = width + 'px';
				this._container.style.height = height + 'px';
				this._outline.style.width = width + 'px';
				this._outline.style.height = height + 'px';

				var transitionDuration = 0.24;

				// Calculate transition delays for individual menu items, so that they fade
				// in one at a time.
				var items = this.element.querySelectorAll('.u-menu-item');
				for(var i = 0; i < items.length; i++) {
					var itemDelay = null;
					if(hasClass(this.element, 'u-menu-top-left') || hasClass(this.element, 'u-menu-top-right')) {
						itemDelay = ((height - items[i].offsetTop - items[i].offsetHeight) /
							height * transitionDuration) + 's';
					} else {
						itemDelay = (items[i].offsetTop / height * transitionDuration) + 's';
					}
					items[i].style.transitionDelay = itemDelay;
				}

				// Apply the initial clip to the text before we start animating.
				this._applyClip(height, width);

				// Wait for the next frame, turn on animation, and apply the final clip.
				// Also make it visible. This triggers the transitions.
				if(window.requestAnimationFrame) {
					window.requestAnimationFrame(function() {
						addClass(this.element, 'is-animating');
						this.element.style.clip = 'rect(0 ' + width + 'px ' + height + 'px 0)';
						addClass(this._container, 'is-visible');
					}.bind(this));
				} else {
					addClass(this.element, 'is-animating');
					this.element.style.clip = 'rect(0 ' + width + 'px ' + height + 'px 0)';
					addClass(this._container, 'is-visible');
				}

				// Clean up after the animation is complete.
				this._addAnimationEndListener();

				// Add a click listener to the document, to close the menu.
				var firstFlag = true;
				var callback = function(e) {
					if(env.isIE8) {
						if(firstFlag) {
							firstFlag = false;
							return
						}
					}
					if(e !== evt && !this._closing && e.target.parentNode !== this.element) {
						off(document, 'click', callback);
						// document.removeEventListener('click', callback);
						this.hide();
					}
				}.bind(this);
				on(document, 'click', callback);
				// document.addEventListener('click', callback);
			}
		},

		/**
		 * Hides the menu.
		 *
		 * @public
		 */
		hide: function() {
			if(this.element && this._container && this._outline) {
				var items = this.element.querySelectorAll('.u-menu-item');

				// Remove all transition delays; menu items fade out concurrently.
				for(var i = 0; i < items.length; i++) {
					items[i].style.transitionDelay = null;
				}

				// Measure the inner element.
				var rect = this.element.getBoundingClientRect();
				var height = rect.height;
				var width = rect.width;

				if(!width) {
					var left = rect.left;
					var right = rect.right;
					width = right - left;
				}

				if(!height) {
					var top = rect.top;
					var bottom = rect.bottom;
					height = bottom - top;
				}

				// Turn on animation, and apply the final clip. Also make invisible.
				// This triggers the transitions.
				addClass(this.element, 'is-animating');
				this._applyClip(height, width);
				removeClass(this._container, 'is-visible');

				// Clean up after the animation is complete.
				this._addAnimationEndListener();
			}
		},
		/**
		 * Displays or hides the menu, depending on current state.
		 *
		 * @public
		 */
		toggle: function(evt) {
			if(hasClass(this._container, 'is-visible')) {
				this.hide();
			} else {
				this.show(evt);
			}
		}
	});

	compMgr.regComp({
		comp: Menu,
		compAsString: 'u.Menu',
		css: 'u-menu'
	});
	if(document.readyState && document.readyState === 'complete') {
		compMgr.updateComp();
	} else {
		on(window, 'load', function() {
			//扫描并生成控件
			compMgr.updateComp();
		});
	}

	export {Menu};


/***/ },
/* 7 */
/***/ function(module, exports) {

	/**
	 * Module : neoui-tabs
	 * Author : Kvkens(yueming@yonyou.com)
	 * Date	  : 2016-08-03 14:12:27
	 */

	import {BaseComponent} from 'neoui-sparrow/js/BaseComponent';
	import {addClass,removeClass} from 'neoui-sparrow/js/dom';
	import {on,stopEvent} from 'neoui-sparrow/js/event';
	import {Ripple} from 'neoui-sparrow/js/util/ripple';
	import {compMgr} from 'neoui-sparrow/js/compMgr';


	var Tabs = BaseComponent.extend({
		_Constant: {},
		_CssClasses: {
			TAB_CLASS: 'u-tabs__tab',
			PANEL_CLASS: 'u-tabs__panel',
			ACTIVE_CLASS: 'is-active',
			UPGRADED_CLASS: 'is-upgraded',

			U_JS_RIPPLE_EFFECT: 'u-js-ripple-effect',
			U_RIPPLE_CONTAINER: 'u-tabs__ripple-container',
			U_RIPPLE: 'u-ripple',
			U_JS_RIPPLE_EFFECT_IGNORE_EVENTS: 'u-js-ripple-effect--ignore-events'
		},

		/**
		 * Handle clicks to a tabs component
		 *
		 * @private
		 */
		initTabs_: function() {
			addClass(this.element, this._CssClasses.U_JS_RIPPLE_EFFECT_IGNORE_EVENTS)

			// Select element tabs, document panels
			this.tabs_ = this.element.querySelectorAll('.' + this._CssClasses.TAB_CLASS);
			this.panels_ =
				this.element.querySelectorAll('.' + this._CssClasses.PANEL_CLASS);

			// Create new tabs for each tab element
			for(var i = 0; i < this.tabs_.length; i++) {
				new Tab(this.tabs_[i], this);
			}
			addClass(this.element, this._CssClasses.UPGRADED_CLASS)
		},

		/**
		 * Reset tab state, dropping active classes
		 *
		 * @private
		 */
		resetTabState_: function() {
			for(var k = 0; k < this.tabs_.length; k++) {
				removeClass(this.tabs_[k], this._CssClasses.ACTIVE_CLASS)
			}
		},

		/**
		 * Reset panel state, droping active classes
		 *
		 * @private
		 */
		resetPanelState_: function() {
			for(var j = 0; j < this.panels_.length; j++) {
				removeClass(this.panels_[j], this._CssClasses.ACTIVE_CLASS)
			}
		},
		show: function(itemId) {
			var panel = this.element.querySelector('#' + itemId);
			var tab = this.element.querySelector("[href='#" + itemId + "']");
			this.resetTabState_();
			this.resetPanelState_();
			addClass(tab, this._CssClasses.ACTIVE_CLASS);
			addClass(panel, this._CssClasses.ACTIVE_CLASS);

		},

		/**
		 * Initialize element.
		 */
		init: function() {
			if(this.element) {
				this.initTabs_();
			}
		}
	});

	/**
	 * Constructor for an individual tab.
	 *
	 * @constructor
	 * @param {Element} tab The HTML element for the tab.
	 * @param {Tabs} ctx The Tabs object that owns the tab.
	 */
	function Tab(tab, ctx) {
		if(tab) {
			var rippleContainer = document.createElement('span');
			addClass(rippleContainer, ctx._CssClasses.U_RIPPLE_CONTAINER);
			addClass(rippleContainer, ctx._CssClasses.U_JS_RIPPLE_EFFECT);
			var ripple = document.createElement('span');
			addClass(ripple, ctx._CssClasses.U_RIPPLE);
			rippleContainer.appendChild(ripple);
			tab.appendChild(rippleContainer);

			tab.ripple = new Ripple(tab)

			tab.addEventListener('click', function(e) {
				stopEvent(e);
				// e.preventDefault();
				var href = tab.href.split('#')[1];
				var panel = ctx.element.querySelector('#' + href);
				ctx.resetTabState_();
				ctx.resetPanelState_();
				addClass(tab, ctx._CssClasses.ACTIVE_CLASS);
				addClass(panel, ctx._CssClasses.ACTIVE_CLASS);
			});

		}
	}

	compMgr.regComp({
		comp: Tabs,
		compAsString: 'u.Tabs',
		css: 'u-tabs'
	});
	if(document.readyState && document.readyState === 'complete') {
		compMgr.updateComp();
	} else {
		on(window, 'load', function() {
			//扫描并生成控件
			compMgr.updateComp();
		});
	}

	export {Tabs};


/***/ },
/* 8 */
/***/ function(module, exports) {

	/**
	 * Module : neoui-tooltip
	 * Author : Kvkens(yueming@yonyou.com)
	 * Date   : 2016-08-06 13:26:06
	 */
	import {extend} from 'neoui-sparrow/js/extend';
	import {on} from 'neoui-sparrow/js/event';
	import {makeDOM,addClass,removeClass,getZIndex} from 'neoui-sparrow/js/dom';

	var Tooltip = function(element, options) {
		this.init(element, options)
			//this.show()
	}

	Tooltip.prototype = {
		defaults: {
			animation: true,
			placement: 'top',
			//selector: false,
			template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow" ></div><div class="tooltip-inner"></div></div>',
			trigger: 'hover focus',
			title: '',
			delay: 0,
			html: false,
			container: false,
			viewport: {
				selector: 'body',
				padding: 0
			},
			showFix: false
		},
		init: function(element, options) {
			this.element = element
			this.options = extend({}, this.defaults, options);
			this._viewport = this.options.viewport && document.querySelector(this.options.viewport.selector || this.options.viewport);

			var triggers = this.options.trigger.split(' ')

			for(var i = triggers.length; i--;) {
				var trigger = triggers[i]
				if(trigger == 'click') {
					on(this.element, 'click', this.toggle.bind(this));
				} else if(trigger != 'manual') {
					var eventIn = trigger == 'hover' ? 'mouseenter' : 'focusin'
					var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'
					on(this.element, eventIn, this.enter.bind(this));
					on(this.element, eventOut, this.leave.bind(this));
				}
			}
			this.options.title = this.options.title || this.element.getAttribute('title');
			this.element.removeAttribute('title');
			if(this.options.delay && typeof this.options.delay == 'number') {
				this.options.delay = {
					show: this.options.delay,
					hide: this.options.delay
				}
			};
			//tip模板对应的dom
			this.tipDom = makeDOM(this.options.template);
			addClass(this.tipDom, this.options.placement);
			if(this.options.colorLevel) {
				addClass(this.tipDom, this.options.colorLevel);
			}
			this.arrrow = this.tipDom.querySelector('.tooltip-arrow');

			// tip容器,默认为当前元素的parent
			this.container = this.options.container ? document.querySelector(this.options.container) : this.element.parentNode;
		},
		enter: function() {
			var self = this;
			clearTimeout(this.timeout);
			this.hoverState = 'in';
			if(!this.options.delay || !this.options.delay.show) return this.show();

			this.timeout = setTimeout(function() {
				if(self.hoverState == 'in') self.show()
			}, this.options.delay.show)
		},
		leave: function() {
			var self = this;
			clearTimeout(this.timeout);
			self.hoverState = 'out'
			if(!self.options.delay || !self.options.delay.hide) return self.hide()
			self.timeout = setTimeout(function() {
				if(self.hoverState == 'out') self.hide()
			}, self.options.delay.hide)
		},
		show: function() {
			var self = this;
			this.tipDom.querySelector('.tooltip-inner').innerHTML = this.options.title;
			this.tipDom.style.zIndex = getZIndex();

			if(this.options.showFix) {
				document.body.appendChild(this.tipDom);
				this.tipDom.style.position = 'fixed';
				showPanelByEle({
					ele: this.element,
					panel: this.tipDom,
					position: "top"
				});
				// fix情况下滚动时隐藏
				on(document, 'scroll', function() {
					self.hide();
				})
			} else {
				this.container.appendChild(this.tipDom);
				var inputLeft = this.element.offsetLeft;
				var inputTop = this.element.offsetTop;
				var inputWidth = this.element.offsetWidth;
				var inputHeight = this.element.offsetHeight;
				var topWidth = this.tipDom.offsetWidth;
				var topHeight = this.tipDom.offsetHeight;
				if(this.options.placement == 'top') {
					this.left = this.element.offsetLeft + inputWidth / 2;
					this.top = this.element.offsetTop - topHeight;
				}
				// 水平居中
				this.tipDom.style.left = this.left - this.tipDom.clientWidth / 2 + 'px';
				// this.tipDom.style.left = this.left + 'px';
				this.tipDom.style.top = this.top + 'px';
			}

			addClass(this.tipDom, 'active');

			// var placement = this.options.placement;
			// var pos = this.getPosition()
			// var actualWidth = this.tipDom.offsetWidth
			// var actualHeight = this.tipDom.offsetHeight
			// var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

			// this.applyPlacement(calculatedOffset, placement)

		},
		hide: function() {
			if(this.options.showFix) {
				if(document.body.contains(this.tipDom)) {
					removeClass(this.tipDom, 'active');
					document.body.removeChild(this.tipDom);
				}
			} else {
				if(this.container.contains(this.tipDom)) {
					removeClass(this.tipDom, 'active');
					this.container.removeChild(this.tipDom);
				}
			}

		},
		applyPlacement: function(offset, placement) {
			var width = this.tipDom.offsetWidth
			var height = this.tipDom.offsetHeight

			// manually read margins because getBoundingClientRect includes difference
			var marginTop = parseInt(this.tipDom.style.marginTop, 10)
			var marginLeft = parseInt(this.tipDom.style.marginTop, 10)

			// we must check for NaN for ie 8/9
			if(isNaN(marginTop)) marginTop = 0
			if(isNaN(marginLeft)) marginLeft = 0

			offset.top = offset.top + marginTop
			offset.left = offset.left + marginLeft

			// $.fn.offset doesn't round pixel values
			// so we use setOffset directly with our own function B-0
			this.tipDom.style.left = offset.left + 'px';
			this.tipDom.style.top = offset.top + 'px';

			addClass(this.tipDom, 'active');

			// check to see if placing tip in new offset caused the tip to resize itself
			var actualWidth = this.tipDom.offsetWidth
			var actualHeight = this.tipDom.offsetHeight

			if(placement == 'top' && actualHeight != height) {
				offset.top = offset.top + height - actualHeight
			}
			var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

			if(delta.left) offset.left += delta.left
			else offset.top += delta.top

			var isVertical = /top|bottom/.test(placement)
			var arrowDelta = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
			var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

			//$tip.offset(offset)
			this.tipDom.style.left = offset.left + 'px';
			this.tipDom.style.top = offset.top - 4 + 'px';

			// this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)

		},
		getCalculatedOffset: function(placement, pos, actualWidth, actualHeight) {
			return placement == 'bottom' ? {
					top: pos.top + pos.height,
					left: pos.left + pos.width / 2 - actualWidth / 2
				} :
				placement == 'top' ? {
					top: pos.top - actualHeight,
					left: pos.left + pos.width / 2 - actualWidth / 2
				} :
				placement == 'left' ? {
					top: pos.top + pos.height / 2 - actualHeight / 2,
					left: pos.left - actualWidth
				} :
				/* placement == 'right' */
				{
					top: pos.top + pos.height / 2 - actualHeight / 2,
					left: pos.left + pos.width
				}
		},
		getPosition: function(el) {
			el = el || this.element;
			var isBody = el.tagName == 'BODY';
			var elRect = el.getBoundingClientRect()
			if(elRect.width == null) {
				// width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
				elRect = extend({}, elRect, {
					width: elRect.right - elRect.left,
					height: elRect.bottom - elRect.top
				})
			}
			var elOffset = isBody ? {
				top: 0,
				left: 0
			} : {
				top: el.offsetTop,
				left: el.offsetLeft
			};
			var scroll = {
				scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : el.scrollTop
			}
			var outerDims = isBody ? {
					width: window.innerWidth || document.body.clientWidth,
					height: window.innerHeight || document.body.clientHeight
				} : null
				//return extend({}, elRect, scroll, outerDims, elOffset)
			return extend({}, elRect, scroll, outerDims)

		},
		getViewportAdjustedDelta: function(placement, pos, actualWidth, actualHeight) {
			var delta = {
				top: 0,
				left: 0
			}
			if(!this._viewport) return delta

			var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
			var viewportDimensions = this.getPosition(this._viewport)

			if(/right|left/.test(placement)) {
				var topEdgeOffset = pos.top - viewportPadding - viewportDimensions.scroll
				var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
				if(topEdgeOffset < viewportDimensions.top) { // top overflow
					delta.top = viewportDimensions.top - topEdgeOffset
				} else if(bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
					delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
				}
			} else {
				var leftEdgeOffset = pos.left - viewportPadding
				var rightEdgeOffset = pos.left + viewportPadding + actualWidth
				if(leftEdgeOffset < viewportDimensions.left) { // left overflow
					delta.left = viewportDimensions.left - leftEdgeOffset
				} else if(rightEdgeOffset > viewportDimensions.width) { // right overflow
					delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
				}
			}

			return delta
		},
		replaceArrow: function(delta, dimension, isHorizontal) {
			if(isHorizontal) {
				this.arrow.style.left = 50 * (1 - delta / dimension) + '%';
				this.arrow.style.top = '';
			} else {
				this.arrow.style.top = 50 * (1 - delta / dimension) + '%';
				this.arrow.style.left = '';
			}
		},
		destory: function() {

		},
		setTitle: function(title) {
			this.options.title = title;
		}

	};


	export{
	    Tooltip  
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	/**
	 * Module : neoui-year
	 * Author : liuyk(liuyk@yonyou.com)
	 * Date   : 2016-08-11 15:17:07
	 */

	import {BaseComponent} from 'neoui-sparrow/js/BaseComponent';
	import {on, off, stopEvent} from 'neoui-sparrow/js/event';
	import {addClass, makeDOM, showPanelByEle, getZIndex, removeClass} from 'neoui-sparrow/js/dom';
	import {extend} from 'neoui-sparrow/js/extend'; 
	import {isIE8} from 'neoui-sparrow/js/env'; 
	import {compMgr} from 'neoui-sparrow/js/compMgr';
	import {URipple} from 'neoui-sparrow/js/util/ripple';

	const YearMonth = BaseComponent.extend({
		DEFAULTS : {
		},
		init: function(){
			var self = this;			 
			var element = this.element;
			this.options = extend({}, this.DEFAULTS, this.options);
			this.panelDiv = null;
			this.input = this.element.querySelector("input");
			
			var d = new Date();
			this.year = d.getFullYear();
			this.startYear = this.year - this.year % 10 - 1;
			this.month = d.getMonth() + 1;
			
			on(this.input, 'blur',function(e){
	            self._inputFocus = false;
	        	self.setValue(self.input.value);
	        });
	        
			// 添加focus事件
			this.focusEvent();
			// 添加右侧图标click事件
			this.clickEvent();
		},

	    createPanel: function(){
	    	if(this.panelDiv){
	    		this._fillYear();
	    		return;
	    	}
	    	var oThis = this;
	    	this.panelDiv = makeDOM('<div class="u-date-panel" style="margin:0px;"></div>');
	    	this.panelContentDiv = makeDOM('<div class="u-date-content"></div>');
	    	this.panelDiv.appendChild(this.panelContentDiv);
	    	
	    	// this.preBtn = makeDOM('<button class="u-date-pre-button u-button flat floating mini" style="display:none;">&lt;</button>');
	        // this.nextBtn = makeDOM('<button class="u-date-next-button u-button flat floating mini" style="display:none;">&gt;</button>');
	    	this.preBtn = makeDOM('<button class="u-date-pre-button u-button mini">&lt;</button>');
	        this.nextBtn = makeDOM('<button class="u-date-next-button u-button mini">&gt;</button>');
	        
	    	on(this.preBtn, 'click', function(e){
	            oThis.startYear -= 10;
	            oThis._fillYear();
	        });
	        on(this.nextBtn, 'click', function(e){
	            oThis.startYear += 10;
	            oThis._fillYear();
	        });
	        this.panelContentDiv.appendChild(this.preBtn);
	        this.panelContentDiv.appendChild(this.nextBtn);
	        this._fillYear();
	    	
	    },

	    /**
	     *填充年份选择面板
	     * @private
	     */
	    _fillYear: function(type){
	        var oldPanel,year,template,yearPage,titleDiv,yearDiv, i,cell;
	        oldPanel = this.panelContentDiv.querySelector('.u-date-content-page');
	        if(oldPanel)
	            this.panelContentDiv.removeChild(oldPanel);
	        template = ['<div class="u-date-content-page">',
	                        '<div class="u-date-content-title"></div>',
	                        '<div class="u-date-content-panel"></div>',
	                    '</div>'].join("");
	        yearPage = makeDOM(template);
	        titleDiv = yearPage.querySelector('.u-date-content-title');
	        titleDiv.innerHTML = (this.startYear) + '-' + (this.startYear + 11);
	        yearDiv = yearPage.querySelector('.u-date-content-panel');
	        for(i = 0; i < 12; i++){
	            cell = makeDOM('<div class="u-date-content-year-cell">'+ (this.startYear + i) +'</div>');
	            new URipple(cell);
	            if (this.startYear + i == this.year){
	                addClass(cell, 'current');
	            }
	            cell._value = this.startYear + i;
	            yearDiv.appendChild(cell);
	        }
	        var oThis = this;
	        on(yearDiv, 'click', function(e){
	            var _y = e.target._value;
	            oThis.year = _y;
	            oThis._fillMonth();
	            stopEvent(e);
	        });
	    	
	    	this.preBtn.style.display = 'block';
	    	this.nextBtn.style.display = 'block';
	    	// this._zoomIn(yearPage);
	    	this.panelContentDiv.appendChild(yearPage);
	    	this.contentPage = yearPage;
	        this.currentPanel = 'year';
	    },

	    /**
	     * 填充月份选择面板
	     * @private
	     */
	    _fillMonth: function(){
	        var oldPanel,template,monthPage,_month,cells,i;
	        oldPanel = this.panelContentDiv.querySelector('.u-date-content-page');
	        if(oldPanel)
	        	this.panelContentDiv.removeChild(oldPanel);
	        _month = this.month;
	        template = ['<div class="u-date-content-page">',
	            '<div class="u-date-content-title">'+_month+'月</div>',
	            '<div class="u-date-content-panel">',
	                '<div class="u-date-content-year-cell">1月</div>',
	                '<div class="u-date-content-year-cell">2月</div>',
	                '<div class="u-date-content-year-cell">3月</div>',
	                '<div class="u-date-content-year-cell">4月</div>',
	                '<div class="u-date-content-year-cell">5月</div>',
	                '<div class="u-date-content-year-cell">6月</div>',
	                '<div class="u-date-content-year-cell">7月</div>',
	                '<div class="u-date-content-year-cell">8月</div>',
	                '<div class="u-date-content-year-cell">9月</div>',
	                '<div class="u-date-content-year-cell">10月</div>',
	                '<div class="u-date-content-year-cell">11月</div>',
	                '<div class="u-date-content-year-cell">12月</div>',
	            '</div>',
	            '</div>'].join("");

	        monthPage = makeDOM(template);
	        cells =monthPage.querySelectorAll('.u-date-content-year-cell');
	        for (i = 0; i < cells.length; i++){
	            if (_month == i + 1){
	                addClass(cells[i],'current');
	            }
	            cells[i]._value = i + 1;
	            new URipple(cells[i]);
	        }
	        var oThis = this;
	        on(monthPage, 'click', function(e){
	            var _m = e.target._value;
	            oThis.month = _m;
	            monthPage.querySelector('.u-date-content-title').innerHTML = _m + '月';
	            oThis.setValue(oThis.year + '-' + oThis.month);
	            oThis.hide();
	        });
	        
	        this.preBtn.style.display = 'none';
	    	this.nextBtn.style.display = 'none';
	    	this._zoomIn(monthPage);
	        this.currentPanel = 'month';
	    },


	    /**
	     * 淡入动画效果
	     * @private
	     */
	    _zoomIn: function(newPage){
	        if (!this.contentPage){
	            this.panelContentDiv.appendChild(newPage);
	            this.contentPage = newPage;
	            return;
	        }
	        addClass(newPage, 'zoom-in');
	        this.panelContentDiv.appendChild(newPage);
	        if(isIE8){
	            this.contentPage = newPage;
	        }else{
	            var cleanup = function() {
	                newPage.removeEventListener('transitionend', cleanup);
	                newPage.removeEventListener('webkitTransitionEnd', cleanup);
	                // this.panelContentDiv.removeChild(this.contentPage);
	                this.contentPage = newPage;
	            }.bind(this);
	            if (this.contentPage){
	                newPage.addEventListener('transitionend', cleanup);
	                newPage.addEventListener('webkitTransitionEnd', cleanup);
	            }
	            window.requestAnimationFrame(function() {
	                    addClass(this.contentPage, 'is-hidden');
	                    removeClass(newPage, 'zoom-in');
	            }.bind(this));
	        }
	        
	    },


	    setValue: function(value) {
	    	value = value? value: '';
	    	if(value && value.indexOf('-') > -1){
	    		var vA = value.split("-");
	    		this.year = vA[0];
	    		var month = vA[1];
	    		this.month = month % 12;
	    		if(this.month == 0)
	    			this.month = 12;
	    	
	    		value = this.year + '-' + this.month;
	    	}
	    	this.value = value;
	    	this.input.value = value;
	    	this.trigger('valueChange', {value:value})
	    },

	    focusEvent: function() {
	    	var self = this;
	    	on(this.input,'focus', function(e) {
	            self._inputFocus = true;
	    		self.show(e);
	    		stopEvent(e);
	    	});
	    },

	    //下拉图标的点击事件
	    clickEvent: function() {
	    	var self = this;		
	    	var caret = this.element.nextSibling
	    	on(caret,'click',function(e) {
	    		self.input.focus();
	            stopEvent(e);
	    	})
	    },


	    show: function(evt) {
	    	var oThis = this;
	    	if(this.value && this.value.indexOf('-') > -1){
	    		var vA = this.value.split("-");
	    		this.year = vA[0];
	    		var month = vA[1];
	    		this.month = month % 12;
	    		if(this.month == 0)
	    			this.month = 12;
	    	}
	    	this.createPanel();
	    	/*因为元素可能变化位置，所以显示的时候需要重新计算*/
	    	this.width = this.element.offsetWidth;
	    	if(this.width < 300)
	    		this.width = 300;
	        
	    	this.panelDiv.style.width = this.width + 'px';

	        if(this.options.showFix){
	            document.body.appendChild(this.panelDiv);
	            this.panelDiv.style.position = 'fixed';
	            showPanelByEle({
	                ele:this.input,
	                panel:this.panelDiv,
	                position:"bottomLeft"
	            });
	        }else{
	         //    this.element.parentNode.appendChild(this.panelDiv);
	        	// //调整left和top
	         //    this.left = this.element.offsetLeft;
	         //    var inputHeight = this.element.offsetHeight;
	         //    this.top = this.element.offsetTop + inputHeight;
	         //    this.panelDiv.style.left = this.left + 'px';
	         //    this.panelDiv.style.top = this.top + 'px';
	         
	                var bodyWidth = document.body.clientWidth,bodyHeight = document.body.clientHeight,
	                panelWidth = this.panelDiv.offsetWidth,panelHeight = this.panelDiv.offsetHeight;

	                this.element.appendChild(this.panelDiv);
	                this.element.style.position = 'relative'; 
	                this.left = this.input.offsetLeft;
	                var inputHeight = this.input.offsetHeight;
	                this.top = this.input.offsetTop + inputHeight;

	                if(this.left + panelWidth > bodyWidth){
	                    this.left = bodyWidth - panelWidth;
	                }

	                if((this.top + panelHeight) > bodyHeight){
	                    this.top = bodyHeight - panelHeight;
	                }
	            

	                this.panelDiv.style.left = this.left + 'px';
	                this.panelDiv.style.top = this.top + 'px';
	        }

	        
	    	this.panelDiv.style.zIndex = getZIndex();
	        addClass(this.panelDiv, 'is-visible');
	        var oThis = this;
	        var callback = function (e) {
	            if (e !== evt && e.target !== oThis.input && !oThis.clickPanel(e.target)  && self._inputFocus != true) {
	                // document.removeEventListener('click', callback);
	                off(document,'click',callback);
	            	oThis.hide();
	        	}
	        };
	        on(document,'click',callback);
	        // document.addEventListener('click', callback);
	    },

	    clickPanel: function(dom){
	    	while(dom){
	    		if(dom == this.panelDiv){
	    			return true
	    		}else{
	    			dom = dom.parentNode;
	    		}
	    	}
	    	return false;
	    },

	    hide: function() {
	    	removeClass(this.panelDiv, 'is-visible');
	        this.panelDiv.style.zIndex = -1;
	    }
	});

	compMgr.regComp({
	    comp: YearMonth,
	    compAsString: 'u.YearMonth',
	    css: 'u-yearmonth'
	});
	if(document.readyState && document.readyState === 'complete') {
	    compMgr.updateComp();
	} else {
	    on(window, 'load', function() {
	        //扫描并生成控件
	        compMgr.updateComp();
	    });
	}
	export {YearMonth};

/***/ }
/******/ ])
});
;