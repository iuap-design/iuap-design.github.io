;(function($) {
	var Combobox = function(element, options) {

		var self = this;
		this.$element = element;
		this.options = $.extend({}, Combobox.DEFAULTS, options);
		this.items = [];
		//this.oLis = [];
		this.mutilPks = [];
		this.oDiv = null;
		
	

		Object.defineProperty(element[0], 'value', {

			get: function() {

				return this.trueValue;
			},
			set: function(pk) {

				var items = self.items;
				//var oLis = self.oLis;
				var oLis = $(self.oDiv).find('li');

				if (self.options.single == "true" || self.options.single == true ) {

					for (var i = 0, length = items.length; i < length; i++) {

						var ipk = items[i].pk;
						if (ipk == pk) {
							this.innerHTML = items[i].name;
							this.trueValue = pk;
							break;
						} else {

							this.trueValue = '';
							this.innerHTML = '';
						}

					}

				} else if (self.options.mutil == "true" || self.options.mutil == true) {
                    
                    if(!$.isArray(pk) ){
                    	if(typeof pk == "string" && pk !== ""){                   		
                    		pk = pk.split(',');
                    		self.mutilPks = pk;
                    	}else{
                    		return
                    	}
                    }
                    
					if (self.mutilPks.length == 0) {
						self.mutilPks = pk;
					}

					$(this).html('');
					var valueArr = [];

					for (var j = 0; j < pk.length; j++) {

						for (var i = 0, length = oLis.length; i < length; i++) {
							var ipk = oLis[i].item.pk;
							if (pk[j] == ipk) {

								valueArr.push(pk[j]);

								oLis[i].style.display = 'none';

								var imageFont = $("<i class='fa fa-close'></i>");

								imageFont.on('mousedown', function() {

									var $this = $(this);
									//var lis = self.oLis;
									var lis = $(self.oDiv).find('li');

									for (var j = 0, len = lis.length; j < len; j++) {
										if (lis[j].item.name == $this.siblings('.itemName').html()) {
											lis[j].style.display = 'block';

											for (var h = 0; h < self.mutilPks.length; h++) {
												if (self.mutilPks[h] == lis[j].item.pk) {
													self.mutilPks.splice(h, 1);
													h--;
												}
											}

											for (var b = 0; b < valueArr.length; b++) {
												if (valueArr[b] == lis[j].item.pk) {
													valueArr.splice(b, 1);
													b--;
												}
											}

										}
									}

									$this.parent().remove();
									element[0].trueValue = '';
									element[0].trueValue = valueArr.toString();
									$(element).trigger('mutilSelect',valueArr.toString())
								});



								var selectName = $("<i class='itemName'>" + items[i].name + "</i>");

								var activeSelect = $("<div class='mutil-select-div'></div>")

								activeSelect.append(imageFont);
								activeSelect.append(selectName);

								$(this).append(activeSelect);


							}

						}


					}

					this.trueValue = valueArr.toString();
					

				}


			}
		})
        //禁用下拉框
        if(this.options.readonly === "readonly")return;
        
		if (this.options.single == "true" || this.options.single == true) {
			this.singleSelect()
		}

		if (this.options.mutil == "true" || this.options.mutil == true) {
			this.mutilSelect();
		}
		
		this.clickEvent();

		this.blurEvent();
        
        this.comboFilter();
        
        this.comboFilterClean();
	}

	Combobox.DEFAULTS = {
		dataSource: {},
		mutil: false,
		enable: true,
		single: true,
		onSelect: function() {}
	}

	Combobox.fn = Combobox.prototype;

	Combobox.fn.createDom = function() {

		var data = this.options.dataSource;
		if ($.isEmptyObject(data)) {
			throw new Error("dataSource为空！");
		}

		var oDiv = document.createElement("div");
		oDiv.className = 'select-list-div';
        //this.oDiv
		this.oDiv = oDiv;
		//新增搜索框
		
        var searchDiv = document.createElement("div");
        searchDiv.className = 'select-search';
		var searchInput =  document.createElement("input");
		searchDiv.appendChild(searchInput);
		//oDiv.appendChild(searchDiv);
		//禁用搜索框
		if(this.options.readchange){
			searchDiv.style.display = "none"
		}
		var oUl = document.createElement("ul");

		oUl.className = 'select-list-ul';
	
		for (var i = 0; i < data.length; i++) {
			var item = {
				pk: data[i].pk,
				name: data[i].name
			}
			this.items.push(item)
			var oLi = document.createElement("li");

			oLi.item = item;
			oLi.innerHTML = data[i]['name'];

			//this.oLis.push(oLi);

			oUl.appendChild(oLi);

		}


		oDiv.appendChild(oUl);
		oDiv.style.display = 'none';
		document.body.appendChild(oDiv);

	}

	Combobox.fn.focusEvent = function() {
		var self = this;
		this.$element.on('click', function(e) {
			if(!self.$element.data("enable") && self.options.readchange == true) return;
			var returnValue = self.show();

			if (returnValue === 1) return;
			// self.show();

			self.floatLayer();

			self.floatLayerEvent();

			if (e.stopPropagation) {
				e.stopPropagation();
			} else {
				e.cancelBubble = true;
			}

		});
	}

	//下拉图标的点击事件
	Combobox.fn.clickEvent = function() {
		var self = this;		
		var caret = this.$element.next('.input-group-addon')[0] || this.$element.next(':button')[0];

		$(caret).on('click', function(e) {

			self.show();

			self.floatLayer();

			self.floatLayerEvent();

			if (e.stopPropagation) {
				e.stopPropagation();
			} else {
				e.cancelBubble = true;
			}

		})
	}

	//tab键切换 下拉隐藏	
	Combobox.fn.blurEvent = function() {
		var self = this;
        
		this.$element.on('keyup', function(e) {
			var key = e.which || e.keyCode;
			if (key == 9)
				self.show();
			
		}).on('keydown', function(e) {
			var key = e.which || e.keyCode;
			if(key == 9)
			self.hide();
		});
	}



	Combobox.fn.floatLayer = function() {

		if ($(".select-floatDiv").length == 0) {

			var oDivTwo = document.createElement("div");

			oDivTwo.className = 'select-floatDiv';
			document.body.appendChild(oDivTwo);
		}

	}

	Combobox.fn.floatLayerEvent = function() {
		var self = this;
		$(".select-floatDiv").click(function(e) {

			self.hide();
			$(this).remove();

			if (e.stopPropagation) {
				e.stopPropagation();
			} else {
				e.cancelBubble = true;
			}
		});


	}

	Combobox.fn.show = function() {

		//var oLis = this.oLis;
		var oLis = $(this.oDiv).find('li');
		var vote = 0;
		for (var i = 0, length = oLis.length; i < length; i++) {

			if (oLis[i].style.display == 'none') {
				vote++;
			}
		}

		if (vote === length) return 1;

		var left = this.$element.offset().left;
		var top = this.$element.offset().top;

		var selectHeight = this.options.dataSource.length * 30 + 10 + 10;

		var differ = (top + this.$element.outerHeight() + selectHeight) - ($(window).height() + $(window).scrollTop());
		var oDiv = this.oDiv;

		if (differ > 0) {

			oDiv.style.left = left + 'px';
			oDiv.style.top = top - selectHeight + 'px';

		} else {

			oDiv.style.left = left + 'px';
			oDiv.style.top = top + this.$element.outerHeight() + 'px';

		}

		oDiv.style.display = 'block';
	}

	Combobox.fn.hide = function() {
		this.oDiv.style.display = 'none';
	}

	Combobox.fn.singleDivValue = function() {
		var self = this;
		//var oLis = this.oLis;
		var oLis = $(this.oDiv).find('li');
		for (var i = 0; i < oLis.length; i++) {
			
			$(oLis[i]).click(function(){
				
				var item = this.item
				self.$element.val(item.pk);

				self.oDiv.style.display = 'none';

				self.options.onSelect(item);

				self.$element.trigger('change');
				
			})

		}
	}

	Combobox.fn.mutilDivValue = function() {
		var self = this;
		//var oLis = this.oLis;
		var oLis = $(this.oDiv).find('li');
		for (var i = 0; i < oLis.length; i++) {
			$(oLis[i]).click(function(){
				
				var pk = this.item.pk;
				var mutilpks = self.mutilPks;
				var mutilLenth = mutilpks.length;

				if (mutilLenth > 0) {

					for (var k = 0; k < mutilLenth; k++) {

						if (pk == mutilpks[k]) {

							mutilpks.splice(k, 1);
                            k--;
						}

					}

				}

				mutilpks.push(pk);

				self.$element.val(mutilpks);
                
                self.$element.trigger('mutilSelect',mutilpks.toString())

				self.oDiv.style.display = 'none';
				this.style.display = 'none';
				self.$element.trigger('change');
				
				
				
			})

		}
	}

	Combobox.fn.singleSelect = function() {

		this.createDom();
		this.focusEvent();
		this.singleDivValue();

	}

	Combobox.fn.mutilSelect = function() {

		this.createDom();
		this.mutilDivValue();
		this.focusEvent();

	}
   //过滤下拉选项
   Combobox.fn.comboFilter = function(){
   	 var self = this;
   	 $(this.oDiv).on('keyup',function(){
   	 	 var content = $(this).find('.select-search input').val()
   	 	
   	 	 var oLis = $(this).find('li')
   	 	 for(var i=0;i<oLis.length;i++){
   	 	 	 if(oLis[i].item.name.indexOf(content) != -1){
   	 	 	 	oLis[i].style.display = 'block';
   	 	 	 }else{
   	 	 	 	oLis[i].style.display = 'none';
   	 	 	
   	 	 	 }
   	 	 }
   	 	 
   	 	 
   	 })
   }
   
   //过滤的后续处理
   Combobox.fn.comboFilterClean = function(){
   	  var self = this;
   	  $(this.$element).on('click',function(){
   	  	 $(self.oDiv).find('.select-search input').val('')  	  	
   	  	 var oLis = $(self.oDiv).find('li');
   	  	 if(self.options.single == "true" || self.options.single == true){
   	  	 	for(var i=0;i<oLis.length;i++){
   	  	 	  oLis[i].style.display = 'block'
   	  	   }
   	  	 }else if(self.options.mutil == "true" || self.options.mutil == true ){
   	  	 	 var selectLisIndex = [];
   	  	 	 var selectLisSpan = $(this).find('.mutil-select-div .itemName');
   	  	 	
   	  	 	 for(var i=0;i<selectLisSpan.length;i++){
   	  	 	 	 for(var k=0;k<oLis.length;k++){
   	  	 	 	 	if($(selectLisSpan[i]).html() == oLis[k].item.name){
   	  	 	 	 		//oLis[k].style.display = 'none';
   	  	 	 	 		selectLisIndex.push(k)
 	  	 	 	 	}
   	  	 	 	 }
   	  	 	 }
   	  	 	 
   	  	 	for(var l=0; l<oLis.length;l++) {
   	  	 		oLis[l].style.display = 'block'
   	  	 		for(var j=0;j<selectLisIndex.length;j++){
   	  	 	 	if(l == selectLisIndex[j])
   	  	 	 	  oLis[l].style.display = 'none'
   	  	 	   }
   	  	 	}
   	  	 	 
   	  	 	 
   	  	 }
   	  	 
   	  	  
   	  })
   }
	var Plugin = function(option) {

		var $this = $(this);
		var data = $this.data('s.select');
		var options = typeof option == 'object' && option

		if (!data) $this.data('s.select', (new Combobox(this, options)))

	}

    //动态设置li值
	$.fn.setComboData = function(dataSourse) {
        var $this = $(this).data('s.select');
        if(!$this)return;
		var data = dataSourse;
		if (!$.isArray(data) || data.length == 0) return;
		
		$this.items.length = 0;

		var Olis = $($this.oDiv).find('li');
		
		
	    if(data.length < Olis.length){
			
			for(var k=data.length;k<Olis.length;k++){
				   $(Olis[k]).remove();
			}		
			
		}else if(data.length > Olis.length){
			var liTemplate = Olis[0]
			var oUl = $($this.oDiv).find('ul')
			for(var j=0;j<(data.length-Olis.length);j++){
				$(liTemplate).clone(true).appendTo(oUl)
			}
		}
        
        Olis = $($this.oDiv).find('li');
        
		for (var i = 0; i < data.length; i++) {
			var item = {
				pk: data[i].pk,
				name: data[i].name
			}
			$this.items.push(item)
			Olis[i].item = item;
			Olis[i].innerHTML = data[i]['name']
		 }
		
	}

	$.fn.Combobox = Plugin;

})($);