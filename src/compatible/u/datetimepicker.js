
/* ========================================================================
 * UUI: datetimepicker.js
 *
 * ========================================================================
 * Copyright 2015 yonyou, Inc.
 * thanks: https://github.com/Eonasdan/bootstrap-datetimepicker 
 * ======================================================================== */

+function($,moment ) {	
    'use strict';
    if (typeof Array.prototype.reduce != "function") {
	  Array.prototype.reduce = function (callback, initialValue ) {
	     var previous = initialValue, k = 0, length = this.length;
	     if (typeof initialValue === "undefined") {
	        previous = this[0];
	        k = 1;
	     }
	     
	    if (typeof callback === "function") {
	      for (k; k < length; k++) {
	         this.hasOwnProperty(k) && (previous = callback(previous, this[k], k, this));
	      }
	    }
	    return previous;
	  };
	}
    if($.app){
		$.fn.datetimepicker = function(params){
				var params = params ? params : {}; 
			    var tmpv,today,tmpformat,tmpcol,tmptype;
                if($(this).data('create')){
                    return;
                }else{
                    $(this).data('create',true)
                }
				tmpv = $(this).find("input").val()				
				if(tmpv){
					tmpv = $.getPickerArray(tmpv)
				}else{
					today = new Date();
					tmpv = [ today.getFullYear(),today.getMonth(), today.getDate(),(today.getHours() < 10 ? '0' + today.getHours() : today.getHours()),(today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes())]	
				}
				tmptype = params.picker_type?params.picker_type:"datetime"
					
				if(tmptype== "datetime"){
					tmpformat = function (p, values, displayValues) {
		                return values[0] + '-' + values[1] + '-' + values[2] + ' ' +  values[3] + ':' + values[4] ;
		        	}
					tmpcol = [
		                // Years
			                {
			                    values: (function () {
			                        var arr = [];
			                        for (var i = 1950; i <= 2030; i++) { arr.push(i); }
			                        return arr;
			                    })(),
			                    textAlign: 'left',
			                    width:100
			                },
			                 {
					            divider: true,
					            content: '-'
					        },
			                // Months
			                {
			                    values: ('1 2 3 4 5 6 7 8 9 10 11 12').split(' '),			                    			                  
			                    textAlign: 'left'
			                },
			                 {
					            divider: true,
					            content: '-'
					        },
			                // Days
			                {
			                    values: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
			                 	textAlign: 'left'
			                },
			                 // Space divider
					        {
					            divider: true,
					            content: '  '
					        },
					        // Hours
					        {
					            values: (function () {
					                var arr = [];
					                for (var i = 0; i <= 23; i++) { arr.push(i < 10 ? '0' + i : i); }
					                return arr;
					            })()
					        },
					        // Divider
					        {
					            divider: true,
					            content: ':'
					        },
					        // Minutes
					        {
					            values: (function () {
					                var arr = [];
					                for (var i = 0; i <= 59; i++) { arr.push(i < 10 ? '0' + i : i); }
					                return arr;
					            })()
					        }
			                
			             ]   
				}else{
					tmpformat = function (p, values, displayValues) {
		                return values[0] + '-' + values[1] + '-' + values[2] ;
		        	}
					tmpcol = [
		                // Years
			                {
			                    values: (function () {
			                        var arr = [];
			                        for (var i = 1950; i <= 2030; i++) { arr.push(i); }
			                        return arr;
			                    })(),
			                    textAlign: 'left',
			                    width:100
			                },
			                 {
					            divider: true,
					            content: '-'
					        },
			                // Months
			                {
			                   
			                    values: ('1 2 3 4 5 6 7 8 9 10 11 12').split(' '),			                  
			                    textAlign: 'left'
			                },
			                 {
					            divider: true,
					            content: '-'
					        },
			                // Days
			                {
			                    values: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
			                 	textAlign: 'left'
			                }
								                
						]  
					
				}
				
		       
		        $(this).addClass("moblie_input").find("input").attr("readonly","readonly")
		        $('#picker-date-container').html("")
		        $.app.picker_mobile({
		            input:this,
		            convertToPopover:false,
		            cssClass:params.cssClass,
		            toolbar:true,
		            refer:params.refer,
		            //container: '#picker-date-container',		            
		            rotateEffect: true,		         
		            value: tmpv,	         
		            formatValue: tmpformat,
		            cols:tmpcol,
		            pickerType:tmptype
		        });        
		        
		}

        $("[data-provide='datetimepicker']").each(function(i,node){
            $(node).datetimepicker();
        });



     	return;
	}
    if (!moment) {
        throw new Error('datetimepicker requires Moment.js to be loaded first');
    }
    var inputSelector = 'input,div[contenteditable=true]'

    var dateTimePicker = function (element, options) {
        var picker = {},
            date = moment().startOf('d'),
            viewDate = date.clone(),
            unset = true,
            input,
            component = false,
            widget = false,
            use24Hours,
            minViewModeNumber = 0,
            actualFormat,
            parseFormats,
            currentViewMode,
            datePickerModes = [
                {
                    clsName: 'days',
                    navFnc: 'M',
                    navStep: 1
                },
                {
                    clsName: 'months',
                    navFnc: 'y',
                    navStep: 1
                },
                {
                    clsName: 'years',
                    navFnc: 'y',
                    navStep: 10
                }
            ],
            viewModes = ['days', 'months', 'years'],
            verticalModes = ['top', 'bottom', 'auto'],
            horizontalModes = ['left', 'right', 'auto'],
            toolbarPlacements = ['default', 'top', 'bottom'],
            /********************************************************************************
             *
             * Private functions
             *
             ********************************************************************************/
            isEnabled = function (granularity) {
                if (typeof granularity !== 'string' || granularity.length > 1) {
                    throw new TypeError('isEnabled expects a single character string parameter');
                }
                switch (granularity) {
                    case 'y':
                        return actualFormat.indexOf('Y') !== -1;
                    case 'M':
                        return actualFormat.indexOf('M') !== -1;
                    case 'd':
                        return actualFormat.toLowerCase().indexOf('d') !== -1;
                    case 'h':
                    case 'H':
                        return actualFormat.toLowerCase().indexOf('h') !== -1;
                    case 'm':
                        return actualFormat.indexOf('m') !== -1;
                    case 's':
                        return actualFormat.indexOf('s') !== -1;
                    default:
                        return false;
                }
            },

            hasTime = function () {
                return (isEnabled('h') || isEnabled('m') || isEnabled('s'));
            },

            hasDate = function () {
                return (isEnabled('y') || isEnabled('M') || isEnabled('d'));
            },

            getDatePickerTemplate = function () {
                var headTemplate = $('<thead>')
                        .append($('<tr>')
                            .append($('<th>').addClass('prev').attr('data-action', 'previous')
                                .append($('<span>').addClass(options.icons.previous))
                                )
                            .append($('<th>').addClass('picker-switch').attr('data-action', 'pickerSwitch').attr('colspan', '5'))
                            .append($('<th>').addClass('next').attr('data-action', 'next')
                                .append($('<span>').addClass(options.icons.next))
                                )
                            ),
                    contTemplate = $('<tbody>')
                        .append($('<tr>').append($('<td>').attr('colspan', '7')));
                return [
                    $('<div>').addClass('datepicker-days')
                        .append($('<table>').addClass('table-condensed')
                            .append(headTemplate)
                            .append($('<tbody>'))
                            ),
                    $('<div>').addClass('datepicker-months')
                        .append($('<table>').addClass('table-condensed')
                            .append(headTemplate.clone())
                            .append(contTemplate.clone())
                            ),
                    $('<div>').addClass('datepicker-years')
                        .append($('<table>').addClass('table-condensed')
                            .append(headTemplate.clone())
                            .append(contTemplate.clone())
                            )
                ];
            },

            getTimePickerMainTemplate = function () {
                var topRow = $('<tr>'),
                    middleRow = $('<tr>'),
                    bottomRow = $('<tr>');

                if (isEnabled('h')) {
                    topRow.append($('<td>')
                        .append($('<a>').attr({ tabindex: '-1'}).addClass('btn').attr('data-action', 'incrementHours')
                            .append($('<span>').addClass(options.icons.up))));
                    middleRow.append($('<td>')
                        .append($('<span>').addClass('timepicker-hour').attr('data-time-component', 'hours').attr('data-action', 'showHours')));
                    bottomRow.append($('<td>')
                        .append($('<a>').attr({ tabindex: '-1'}).addClass('btn').attr('data-action', 'decrementHours')
                            .append($('<span>').addClass(options.icons.down))));
                }
                if (isEnabled('m')) {
                    if (isEnabled('h')) {
                        topRow.append($('<td>').addClass('separator'));
                        middleRow.append($('<td>').addClass('separator').html(':'));
                        bottomRow.append($('<td>').addClass('separator'));
                    }
                    topRow.append($('<td>')
                        .append($('<a>').attr({ tabindex: '-1'}).addClass('btn').attr('data-action', 'incrementMinutes')
                            .append($('<span>').addClass(options.icons.up))));
                    middleRow.append($('<td>')
                        .append($('<span>').addClass('timepicker-minute').attr('data-time-component', 'minutes').attr('data-action', 'showMinutes')));
                    bottomRow.append($('<td>')
                        .append($('<a>').attr({ tabindex: '-1'}).addClass('btn').attr('data-action', 'decrementMinutes')
                            .append($('<span>').addClass(options.icons.down))));
                }
                if (isEnabled('s')) {
                    if (isEnabled('m')) {
                        topRow.append($('<td>').addClass('separator'));
                        middleRow.append($('<td>').addClass('separator').html(':'));
                        bottomRow.append($('<td>').addClass('separator'));
                    }
                    topRow.append($('<td>')
                        .append($('<a>').attr({ tabindex: '-1'}).addClass('btn').attr('data-action', 'incrementSeconds')
                            .append($('<span>').addClass(options.icons.up))));
                    middleRow.append($('<td>')
                        .append($('<span>').addClass('timepicker-second').attr('data-time-component', 'seconds').attr('data-action', 'showSeconds')));
                    bottomRow.append($('<td>')
                        .append($('<a>').attr({ tabindex: '-1'}).addClass('btn').attr('data-action', 'decrementSeconds')
                            .append($('<span>').addClass(options.icons.down))));
                }

                if (!use24Hours) {
                    topRow.append($('<td>').addClass('separator'));
                    middleRow.append($('<td>')
                        .append($('<button>').addClass('btn btn-primary').attr('data-action', 'togglePeriod')));
                    bottomRow.append($('<td>').addClass('separator'));
                }

                return $('<div>').addClass('timepicker-picker')
                    .append($('<table>').addClass('table-condensed')
                        .append([topRow, middleRow, bottomRow]));
            },

            getTimePickerTemplate = function () {
                var hoursView = $('<div>').addClass('timepicker-hours')
                        .append($('<table>').addClass('table-condensed')),
                    minutesView = $('<div>').addClass('timepicker-minutes')
                        .append($('<table>').addClass('table-condensed')),
                    secondsView = $('<div>').addClass('timepicker-seconds')
                        .append($('<table>').addClass('table-condensed')),
                    ret = [getTimePickerMainTemplate()];

                if (isEnabled('h')) {
                    ret.push(hoursView);
                }
                if (isEnabled('m')) {
                    ret.push(minutesView);
                }
                if (isEnabled('s')) {
                    ret.push(secondsView);
                }

                return ret;
            },

            getToolbar = function () {
                var row = [];
                if (options.showTodayButton) {
                    row.push($('<td>').append($('<a>').attr('data-action', 'today').attr('title', '当前时间').append($('<span>').addClass(options.icons.today))));
                }
                if (!options.sideBySide && hasDate() && hasTime()) {
                    row.push($('<td>').append($('<a>').attr('data-action', 'togglePicker').attr('title', '时间选择').append($('<span>').addClass(options.icons.time))));
                }
                if (options.showClear) {
                    row.push($('<td>').append($('<a>').attr('data-action', 'clear').attr('title', '清除当前选择').append($('<span>').addClass(options.icons.clear))));
                }
                return $('<table>').addClass('table-condensed').append($('<tbody>').append($('<tr>').append(row)));
            },

            getTemplate = function () {
                var template = $('<div>').addClass('bootstrap-datetimepicker-widget dropdown-menu'),
                    dateView = $('<div>').addClass('datepicker').append(getDatePickerTemplate()),
                    timeView = $('<div>').addClass('timepicker').append(getTimePickerTemplate()),
                    content = $('<ul>').addClass('list-unstyled'),
                    toolbar = $('<li>').addClass('picker-switch accordion-toggle').append(getToolbar());

                if (use24Hours) {
                    template.addClass('usetwentyfour');
                }
                if (options.sideBySide && hasDate() && hasTime()) {
                    template.addClass('timepicker-sbs');
                    template.append(
                        $('<div>').addClass('row')
                            .append(dateView.addClass('col-sm-6'))
                            .append(timeView.addClass('col-sm-6'))
                    );
                    template.append(toolbar);
                    return template;
                }

                if (hasDate()) {
                    content.append($('<li>').addClass((hasTime() ? 'collapse in' : '')).append(dateView));
                }
                content.append(toolbar);
                if (hasTime()) {
                    content.append($('<li>').addClass((hasDate() ? 'collapse' : '')).append(timeView));
                }

                return template.append(content);
            },

            dataToOptions = function () {
                var eData,
                    dataOptions = {};

                if (element.is(inputSelector)) {
                    eData = element.data();
                } else {
                    eData = element.find(inputSelector).data();
                }

                if (eData.dateOptions && eData.dateOptions instanceof Object) {
                    dataOptions = $.extend(true, dataOptions, eData.dateOptions);
                }

                $.each(options, function (key) {
                    var attributeName = 'date' + key.charAt(0).toUpperCase() + key.slice(1);
                    if (eData[attributeName] !== undefined) {
                        dataOptions[key] = eData[attributeName];
                    }
                });
                return dataOptions;
            },

            place = function () {
                var position = (component || element).position(),
                    offset = (component || element).offset(),
                    vertical = 'auto',
                    horizontal = 'auto',
                    parent;

                if (options.widgetParent) {
                	
                    parent = options.widgetParent.append(widget);
                    
                } else if (element.is(inputSelector)) {
                    parent = element.parent().append(widget);
                } else {
                    parent = element;
                    element.children().first().after(widget);
                }

                // Top and bottom logic
                if (offset.top + widget.height() * 1.5 >= $(window).height() + $(window).scrollTop() &&
                    widget.height() + element.outerHeight() < offset.top) {
                    vertical = 'top';
                } else {
                    vertical = 'bottom';
                }

                // Left and right logic
                if (parent.width() < offset.left + widget.outerWidth() / 2 &&
                    offset.left + widget.outerWidth() > $(window).width()) {
                    horizontal = 'right';
                } else {
                    horizontal = 'left';
                }

                if (vertical === 'top') {
                    widget.addClass('top').removeClass('bottom');
                } else {
                    widget.addClass('bottom').removeClass('top');
                }

                if (horizontal === 'right') {
                    widget.addClass('pull-right');
                } else {
                    widget.removeClass('pull-right');
                }

                // find the first parent element that has a relative css positioning
                
                if (parent.css('position') !== 'relative' && parent[0].nodeName !==  "BODY") {
                	
                    parent = parent.parents().filter(function () {
                        return $(this).css('position') === 'relative';
                    }).first();
                    if(parent.length === 0){
                    parent = $("body")	;
                    }
                }
				
                if (parent.length === 0) {
                    throw new Error('datetimepicker component should be placed within a relative positioned container');
                }
				
                widget.css({
                    top: vertical === 'top' ? 'auto' : position.top + element.outerHeight(),
                    bottom: vertical === 'top' ? position.top + element.outerHeight() : 'auto',
                    left: horizontal === 'left' ? parent.css('padding-left') : 'auto',
                    right: horizontal === 'left' ? 'auto' : parent.width() - element.outerWidth()
                });
                if(options.widgetParent){
                	if(vertical === 'top'){
		                widget.css({	
		                	top:  element.offset().top - widget.outerHeight(),                  
		                    left: element.offset().left,
		                    bottom: 'auto',
		                    right:'auto'
		                 });
		             }else{
		             	widget.css({	
		                	top:  element.offset().top + element.outerHeight(),                  
		                    left: element.offset().left,
		                    bottom: 'auto',
		                    right:'auto'
		                 });
		             	
		             }
                }
//				//查询模板拓展
//				if(options.afterShow){
//					options.afterShow(widget,component || element);
//				}
            },

            notifyEvent = function (e) {
                if (e.type === 'dp.change' && ((e.date && e.date.isSame(e.oldDate)) || (!e.date && !e.oldDate))) {
                    return;
                }
                element.trigger(e);
            },

            showMode = function (dir) {
                if (!widget) {
                    return;
                }
                if (dir) {
                    currentViewMode = Math.max(minViewModeNumber, Math.min(2, currentViewMode + dir));
                }
                widget.find('.datepicker > div').hide().filter('.datepicker-' + datePickerModes[currentViewMode].clsName).show();
            },
		//星期排序
           fillDow = function () {
                var row = $('<tr>'),
                    currentDate = viewDate.clone().startOf('w').subtract(1, 'd');

                while (currentDate.isBefore(viewDate.clone().endOf('w').subtract(1, 'd'))) {
					
                    row.append($('<th>').addClass('dow').text(currentDate.format('dd')));
                    currentDate.add(1, 'd');
                }
                widget.find('.datepicker-days thead').append(row);
            },

            isValid = function (targetMoment, granularity) {
                if (!targetMoment.isValid()) {
                    return false;
                }
                if (options.minDate && targetMoment.isBefore(options.minDate, granularity)) {
                    return false;
                }
                if (options.maxDate && targetMoment.isAfter(options.maxDate, granularity)) {
                    return false;
                }
                return true;
            },

            fillMonths = function () {
                var spans = [],
                    monthsShort = viewDate.clone().startOf('y').hour(12); // hour is changed to avoid DST issues in some browsers
                while (monthsShort.isSame(viewDate, 'y')) {
                    spans.push($('<span>').attr('data-action', 'selectMonth').addClass('month').text(monthsShort.format('MMM')));
                    monthsShort.add(1, 'M');
                }
                widget.find('.datepicker-months td').empty().append(spans);
            },

            updateMonths = function () {
                var monthsView = widget.find('.datepicker-months'),
                    monthsViewHeader = monthsView.find('th'),
                    months = monthsView.find('tbody').find('span');

                monthsView.find('.disabled').removeClass('disabled');

                if (!isValid(viewDate.clone().subtract(1, 'y'), 'y')) {
                    monthsViewHeader.eq(0).addClass('disabled');
                }

                monthsViewHeader.eq(1).text(viewDate.year());

                if (!isValid(viewDate.clone().add(1, 'y'), 'y')) {
                    monthsViewHeader.eq(2).addClass('disabled');
                }

                months.removeClass('active');
                if (date.isSame(viewDate, 'y')) {
                    months.eq(date.month()).addClass('active');
                }

                months.each(function (index) {
                    if (!isValid(viewDate.clone().month(index), 'M')) {
                        $(this).addClass('disabled');
                    }
                });
            },

            updateYears = function () {
                var yearsView = widget.find('.datepicker-years'),
                    yearsViewHeader = yearsView.find('th'),
                    startYear = viewDate.clone().subtract(5, 'y'),
                    endYear = viewDate.clone().add(6, 'y'),
                    html = '';

                yearsView.find('.disabled').removeClass('disabled');

                if (options.minDate && options.minDate.isAfter(startYear, 'y')) {
                    yearsViewHeader.eq(0).addClass('disabled');
                }

                yearsViewHeader.eq(1).text(startYear.year() + '-' + endYear.year());

                if (options.maxDate && options.maxDate.isBefore(endYear, 'y')) {
                    yearsViewHeader.eq(2).addClass('disabled');
                }

                while (!startYear.isAfter(endYear, 'y')) {
                    html += '<span data-action="selectYear" class="year' + (startYear.isSame(date, 'y') ? ' active' : '') + (!isValid(startYear, 'y') ? ' disabled' : '') + '">' + startYear.year() + '</span>';
                    startYear.add(1, 'y');
                }

                yearsView.find('td').html(html);
            },

            fillDate = function () {
            	
                var daysView = widget.find('.datepicker-days'),
                    daysViewHeader = daysView.find('th'),
                    currentDate,
                    endDate,
                    html = [],
                    row,
                    
                    clsName;

                if (!hasDate()) {
                    return;
                }

                daysView.find('.disabled').removeClass('disabled');
                daysViewHeader.eq(1).text(viewDate.format('YYYY MMMM'));

                if (!isValid(viewDate.clone().subtract(1, 'M'), 'M')) {
                    daysViewHeader.eq(0).addClass('disabled');
                }
                if (!isValid(viewDate.clone().add(1, 'M'), 'M')) {
                    daysViewHeader.eq(2).addClass('disabled');
                }
				//调整星期顺序
                currentDate = viewDate.clone().startOf('M').startOf('week').subtract(1, 'day');
				if(viewDate.clone().startOf('M').weekday() == 6){
					currentDate =  viewDate.clone().startOf('M')
				}
				endDate = viewDate.clone().endOf('M').endOf('w').subtract(1, 'day');

				if(viewDate.clone().endOf('M').weekday() == 6){
					endDate =  endDate.add(1, 'w')
				}
			
                while (!endDate.isBefore(currentDate, 'd')) {
                    if (currentDate.weekday() === 6) {						
                        row = $('<tr>');
                        html.push(row);
                    }
                    clsName = '';
                    if (currentDate.isBefore(viewDate, 'M')) {
                        clsName += ' old';
                    }
                    if (currentDate.isAfter(viewDate, 'M')) {
                        clsName += ' new';
                    }
                    if (currentDate.isSame(date, 'd') && !unset) {
                        clsName += ' active';
                    }
                    if (!isValid(currentDate, 'd')) {
                        clsName += ' disabled';
                    }
                    if (currentDate.isSame(moment(), 'd')) {
                        clsName += ' today';
                    }
                    if (currentDate.day() === 0 || currentDate.day() === 6) {
                        clsName += ' weekend';
                    }
                    row.append('<td data-action="selectDay" class="day' + clsName + '">' + currentDate.date() + '</td>');
                    currentDate.add(1, 'd');
                }

                daysView.find('tbody').empty().append(html);

                updateMonths();

                updateYears();
            },

            fillHours = function () {
                var table = widget.find('.timepicker-hours table'),
                    currentHour = viewDate.clone().startOf('d'),
                    html = [],
                    row = $('<tr>');

                if (viewDate.hour() > 11 && !use24Hours) {
                    currentHour.hour(12);
                }
                while (currentHour.isSame(viewDate, 'd') && (use24Hours || (viewDate.hour() < 12 && currentHour.hour() < 12) || viewDate.hour() > 11)) {
                    if (currentHour.hour() % 4 === 0) {
                        row = $('<tr>');
                        html.push(row);
                    }
                    row.append('<td data-action="selectHour" class="hour' + (!isValid(currentHour, 'h') ? ' disabled' : '') + '">' + currentHour.format(use24Hours ? 'HH' : 'hh') + '</td>');
                    currentHour.add(1, 'h');
                }
                table.empty().append(html);
            },

            fillMinutes = function () {
                var table = widget.find('.timepicker-minutes table'),
                    currentMinute = viewDate.clone().startOf('h'),
                    html = [],
                    row = $('<tr>'),
                    step = 5;

                while (viewDate.isSame(currentMinute, 'h')) {
                    if (currentMinute.minute() % (step * 4) === 0) {
                        row = $('<tr>');
                        html.push(row);
                    }
                    row.append('<td data-action="selectMinute" class="minute' + (!isValid(currentMinute, 'm') ? ' disabled' : '') + '">' + currentMinute.format('mm') + '</td>');
                    currentMinute.add(step, 'm');
                }
                table.empty().append(html);
            },

            fillSeconds = function () {
                var table = widget.find('.timepicker-seconds table'),
                    currentSecond = viewDate.clone().startOf('m'),
                    html = [],
                    row = $('<tr>');

                while (viewDate.isSame(currentSecond, 'm')) {
                    if (currentSecond.second() % 20 === 0) {
                        row = $('<tr>');
                        html.push(row);
                    }
                    row.append('<td data-action="selectSecond" class="second' + (!isValid(currentSecond, 's') ? ' disabled' : '') + '">' + currentSecond.format('ss') + '</td>');
                    currentSecond.add(5, 's');
                }

                table.empty().append(html);
            },

            fillTime = function () {
                var timeComponents = widget.find('.timepicker span[data-time-component]');
                if (!use24Hours) {
                    widget.find('.timepicker [data-action=togglePeriod]').text(date.format('A'));
                }
                timeComponents.filter('[data-time-component=hours]').text(date.format(use24Hours ? 'HH' : 'hh'));
                timeComponents.filter('[data-time-component=minutes]').text(date.format('mm'));
                timeComponents.filter('[data-time-component=seconds]').text(date.format('ss'));

                fillHours();
                fillMinutes();
                fillSeconds();
            },

            update = function () {
                if (!widget) {
                    return;
                }
                fillDate();
                fillTime();
            },

            setValue = function (targetMoment) {
                var oldDate = unset ? null : date;

                // case of calling setValue(null or false)
                if (!targetMoment) {
                    unset = true;
                    _setInputValue(input, '');
                    element.data('date', '');
                    notifyEvent({
                        type: 'dp.change',
                        date: null,
                        oldDate: oldDate
                    });
                    update();
                    return;
                }

                targetMoment = targetMoment.clone().locale(options.locale);


                if (isValid(targetMoment)) {
                    date = targetMoment;
                    viewDate = date.clone();
                    _setInputValue(input, date.format(actualFormat));
                    element.data('date', date.format(actualFormat));
                    update();
                    unset = false;
                    notifyEvent({
                        type: 'dp.change',
                        date: date.clone(),
                        oldDate: oldDate
                    });
                } else {
//                  if (!options.keepInvalid) {
                        _setInputValue(input, unset ? '' : date.format(actualFormat));
//                  }
                    notifyEvent({
                        type: 'dp.error',
                        date: targetMoment
                    });
                }
            },

           hide = function(){
				// if(blurAble){
				var transitioning = false;
                input.trigger("change.date");
				if (!widget) {
				return picker;
				}

				// Ignore event if in the middle of a picker transition
				widget.find('.collapse').each(function () {
				var collapseData = $(this).data('collapse');
				if (collapseData && collapseData.transitioning) {
				transitioning = true;
				return false;
				}
				return true;
				});
				if (transitioning) {
				return picker;
				}
				if (component && component.hasClass('btn')) {
				component.toggleClass('active');
				}
				widget.hide();
				 
				$(window).off('resize', place);
				widget.off('mousedown', '[data-action]');
			//	widget.off('mousedown', false);
				widget.off('mouseenter');
				widget.off('mouseleave');
				widget.remove();
				widget = false;
				 
				notifyEvent({
				type: 'dp.hide',
				date: date.clone()
				});
				return picker;
				// }
			},
 
            clear = function () {
                setValue(null);
            },
 
            /********************************************************************************
             *
             * Widget UI interaction functions
             *
             ********************************************************************************/
            actions = {
                next: function () {
                    viewDate.add(datePickerModes[currentViewMode].navStep, datePickerModes[currentViewMode].navFnc);
                    fillDate();
                },
 
                previous: function () {
                    viewDate.subtract(datePickerModes[currentViewMode].navStep, datePickerModes[currentViewMode].navFnc);
                    fillDate();
                },
 
                pickerSwitch: function () {
                    showMode(1);
                },
 
                selectMonth: function (e) {
                    var month = $(e.target).closest('tbody').find('span').index($(e.target));
                    viewDate.month(month);
                    if (currentViewMode === minViewModeNumber) {
                        setValue(date.clone().year(viewDate.year()).month(viewDate.month()));
                        hide();
                    } else {
                        showMode(-1);
                        fillDate();
                    }
                },
 
                selectYear: function (e) {
                    var year = parseInt($(e.target).text(), 10) || 0;
                    viewDate.year(year);
                    if (currentViewMode === minViewModeNumber) {
                        setValue(date.clone().year(viewDate.year()));
                        hide();
                    } else {
                        showMode(-1);
                        fillDate();
                    }
                },
 
                selectDay: function (e) {
                    var day = viewDate.clone();
                    if ($(e.target).is('.old')) {
                        day.subtract(1, 'M');
                    }
                    if ($(e.target).is('.new')) {
                        day.add(1, 'M');
                    }
                    setValue(day.date(parseInt($(e.target).text(), 10)));
					input.blur();
					hide();
										   
                },
 
                incrementHours: function () {
                    setValue(date.clone().add(1, 'h'));
                },
 
                incrementMinutes: function () {
                    setValue(date.clone().add(1, 'm'));
                },
 
                incrementSeconds: function () {
                    setValue(date.clone().add(1, 's'));
                },
 
                decrementHours: function () {
                    setValue(date.clone().subtract(1, 'h'));
                },
 
                decrementMinutes: function () {
                    setValue(date.clone().subtract(1, 'm'));
                },
 
                decrementSeconds: function () {
                    setValue(date.clone().subtract(1, 's'));
                },
 
                togglePeriod: function () {
                    setValue(date.clone().add((date.hours() >= 12) ? -12 : 12, 'h'));
                },
 
                togglePicker: function (e) {
                    var $this = $(e.target),
                        $parent = $this.closest('ul'),
                        expanded = $parent.find('.in'),
                        closed = $parent.find('.collapse:not(.in)'),
                        collapseData;
 
                    if (expanded && expanded.length) {
                        collapseData = expanded.data('collapse');
                        if (collapseData && collapseData.transitioning) {
                            return;
                        }
                        if (expanded.collapse) { // if collapse plugin is available through bootstrap.js then use it
                            expanded.collapse('hide');
                            closed.collapse('show');
                        } else { // otherwise just toggle in class on the two views
                            expanded.removeClass('in');
                            closed.addClass('in');
                        }
                        if ($this.is('span')) {
                            $this.toggleClass(options.icons.time + ' ' + options.icons.date);
                        } else {
                            $this.find('span').toggleClass(options.icons.time + ' ' + options.icons.date);
                        }
 
                        // NOTE: uncomment if toggled state will be restored in show()
                        //if (component) {
                        //    component.find('span').toggleClass(options.icons.time + ' ' + options.icons.date);
                        //}
                    }
                },
 
                showPicker: function () {
                    widget.find('.timepicker > div:not(.timepicker-picker)').hide();
                    widget.find('.timepicker .timepicker-picker').show();
                },
 
                showHours: function () {
                    widget.find('.timepicker .timepicker-picker').hide();
                    widget.find('.timepicker .timepicker-hours').show();
                },
 
                showMinutes: function () {
                    widget.find('.timepicker .timepicker-picker').hide();
                    widget.find('.timepicker .timepicker-minutes').show();
                },
 
                showSeconds: function () {
                    widget.find('.timepicker .timepicker-picker').hide();
                    widget.find('.timepicker .timepicker-seconds').show();
                },
 
                selectHour: function (e) {
                    var hour = parseInt($(e.target).text(), 10);
 
                    if (!use24Hours) {
                        if (date.hours() >= 12) {
                            if (hour !== 12) {
                                hour += 12;
                            }
                        } else {
                            if (hour === 12) {
                                hour = 0;
                            }
                        }
                    }
                    setValue(date.clone().hours(hour));
                    actions.showPicker.call(picker);
                },
 
                selectMinute: function (e) {
                    setValue(date.clone().minutes(parseInt($(e.target).text(), 10)));
                    actions.showPicker.call(picker);
                },
 
                selectSecond: function (e) {
                    setValue(date.clone().seconds(parseInt($(e.target).text(), 10)));
                    actions.showPicker.call(picker);
                },
 
                clear: clear,
 
                today: function () {
                    setValue(moment());
                },
 
                close: hide
            },
 
            doAction = function (e) {
                if ($(e.currentTarget).is('.disabled')) {
                    return false;
                }
                actions[$(e.currentTarget).data('action')].apply(picker, arguments);
                return false;
            },
 
            show = function () {
                var currentMoment;
//                  useCurrentGranularity = {
//                      'year': function (m) {
//                          return m.month(0).date(1).hours(0).seconds(0).minutes(0);
//                      },
//                      'month': function (m) {
//                          return m.date(1).hours(0).seconds(0).minutes(0);
//                      },
//                      'day': function (m) {
//                          return m.hours(0).seconds(0).minutes(0);
//                      },
//                      'hour': function (m) {
//                          return m.seconds(0).minutes(0);
//                      },
//                      'minute': function (m) {
//                          return m.seconds(0);
//                      }
//                  };
 
                if (input.prop('disabled') || (!options.ignoreReadonly && input.prop('readonly')) 
                            || (input.prop('contenteditable') == false)
                            || widget
                            || input.closest('fieldset').prop('disabled')) {
                    return picker;
                }
                if (unset && (input.is(inputSelector) && _getInputValue(input).trim().length === 0)) {
//                  currentMoment = moment();
//                  if (typeof options.useCurrent === 'string') {
//                      currentMoment = useCurrentGranularity[options.useCurrent](currentMoment);
//                  }
//                  setValue(currentMoment);
                }
 
                widget = getTemplate();
 					
                fillDow();
                fillMonths();
 
                widget.find('.timepicker-hours').hide();
                widget.find('.timepicker-minutes').hide();
                widget.find('.timepicker-seconds').hide();
 
                update();
                showMode();
 
                $(window).on('resize', place);
                widget.on('mousedown', '[data-action]', doAction); // this handles clicks on the widget
               // widget.on('mousedown',false);
				widget.on('mouseenter',function(){
				input.off('blur.picker')
//				blurAble = false
				})
				widget.on('mouseleave',function(){

                input.focus().on('blur.picker',hide)
//				blurAble = true
				})
                if (component && component.hasClass('btn')) {
                    component.toggleClass('active');
                }
                widget.show();
                place();

                if (!input.is(':focus')) {
                    input.focus();
                }

                notifyEvent({
                    type: 'dp.show'
                });
                return picker;
            },

            toggle = function () {
                return (widget ? hide() : show());
            },

            parseInputDate = function (inputDate) {
                if (moment.isMoment(inputDate) || inputDate instanceof Date) {
                    inputDate = moment(inputDate);
                } else {
                    inputDate = moment(inputDate, parseFormats);
                }
                inputDate.locale(options.locale);
                return inputDate;
            },
            change = function (e) {
                var val = _getInputValue($(e.target)).trim(),
                    parsedDate = val ? parseInputDate(val) : null;
                setValue(parsedDate);
                e.stopImmediatePropagation();
                return false;
            },

            attachDatePickerElementEvents = function () {
                input.on({
                    'change': change,
                    'blur.picker': hide
                });

                input.on({
                    'focus': show
                });

               if (component) {
                    component.on('click', toggle);
                    component.on('mousedown', false);
                }
            },

            detachDatePickerElementEvents = function () {
                input.off({
                    'change': change,
                    'blur': hide
                });

                input.off({
                    'focus': show
                });

                if (component) {
                    component.off('click', toggle);
                    component.off('mousedown', false);
                }
            },

            initFormatting = function () {
                var format = options.format || 'L LT';

//              actualFormat = format.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function (formatInput) {
//                  var newinput = date.localeData().longDateFormat(formatInput) || formatInput;
//                  return newinput.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function (formatInput2) { //temp fix for #740
//                      return date.localeData().longDateFormat(formatInput2) || formatInput2;
//                  });
//              });
				
				actualFormat = options.format ||  'YYYY-M-D  HH:mm';
                parseFormats = options.extraFormats ? options.extraFormats.slice() : [];
                if (parseFormats.indexOf(format) < 0 && parseFormats.indexOf(actualFormat) < 0) {
                    parseFormats.push(actualFormat);
                }

                use24Hours = (actualFormat.toLowerCase().indexOf('a') < 1 && actualFormat.indexOf('h') < 1);

                if (isEnabled('y')) {
                    minViewModeNumber = 2;
                }
                if (isEnabled('M')) {
                    minViewModeNumber = 1;
                }
                if (isEnabled('d')) {
                    minViewModeNumber = 0;
                }

                currentViewMode = Math.max(minViewModeNumber, currentViewMode);

                if (!unset) {
                    setValue(date);
                }
            },

            // 新添加方法 by tianxq1
            _getInputValue = function(input) {
                var value;
                if(input.is('input')) {
                    value = input.val();
                } else if(input.is('div[contenteditable=true]')) {
                    value = input.html();
                } else {
                    throw new Error('Must be a input or contenteditable div');
                }
                return value;
            },

            _setInputValue = function(input, value) {
                if(input.is('input')) {
                    input.val(value);
                } else if(input.is('div[contenteditable=true]')) {
                    input[0].value = value;
                } else {
                    throw new Error('Must be a input or contenteditable div');
                }
            };

        /********************************************************************************
         *
         * Public API functions
         * =====================
         *
         * Important: Do not expose direct references to private objects or the options
         * object to the outer world. Always return a clone when returning values or make
         * a clone when setting a private variable.
         *
         ********************************************************************************/
        picker.destroy = function () {
            hide();
            detachDatePickerElementEvents();
            element.removeData('DateTimePicker');
            element.removeData('date');
        };

        picker.toggle = toggle;

        picker.show = show;

        picker.hide = hide;

        picker.ignoreReadonly = function (ignoreReadonly) {
            if (arguments.length === 0) {
                return options.ignoreReadonly;
            }
            if (typeof ignoreReadonly !== 'boolean') {
                throw new TypeError('ignoreReadonly () expects a boolean parameter');
            }
            options.ignoreReadonly = ignoreReadonly;
            return picker;
        };

        picker.options = function (newOptions) {
            if (arguments.length === 0) {
                return $.extend(true, {}, options);
            }

            if (!(newOptions instanceof Object)) {
                throw new TypeError('options() options parameter should be an object');
            }
            $.extend(true, options, newOptions);
            $.each(options, function (key, value) {
                if (picker[key] !== undefined) {
                    picker[key](value);
                } else {
                    //throw new TypeError('option ' + key + ' is not recognized!');
                }
            });
            return picker;
        };

        picker.getLong = function(){
            return date.valueOf();
        };
        picker.date = function (newDate) {
            if (arguments.length === 0) {
                if (unset) {
                    return null;
                }
                return date.clone();
            }

            if (newDate !== null && typeof newDate !== 'string' && !moment.isMoment(newDate) && !(newDate instanceof Date)) {
                newDate = parseFloat(newDate);
                if (!isNaN(newDate)) {
                    newDate = new Date(newDate);
                }
                else {
                    throw new TypeError('date() parameter must be one of [null, string, moment or Date]');
                }
            }

            setValue(newDate === null ? null : parseInputDate(newDate));
			if(newDate == ''){
                setValue('');
            }
            return picker;
        };

        picker.format = function (newFormat) {
            if (arguments.length === 0) {
                return options.format;
            }

            if ((typeof newFormat !== 'string') && ((typeof newFormat !== 'boolean') || (newFormat !== false))) {
                throw new TypeError('format() expects a sting or boolean:false parameter ' + newFormat);
            }

            options.format = newFormat;
            if (actualFormat) {
                initFormatting(); // reinit formatting
            }
            return picker;
        };

        picker.extraFormats = function (formats) {
            if (arguments.length === 0) {
                return options.extraFormats;
            }

            if (formats !== false && !(formats instanceof Array)) {
                throw new TypeError('extraFormats() expects an array or false parameter');
            }

            options.extraFormats = formats;
            if (parseFormats) {
                initFormatting(); // reinit formatting
            }
            return picker;
        };

        picker.maxDate = function (maxDate) {
            if (arguments.length === 0) {
                return options.maxDate ? options.maxDate.clone() : options.maxDate;
            }

            if ((typeof maxDate === 'boolean') && maxDate === false) {
                options.maxDate = false;
                update();
                return picker;
            }

            if (typeof maxDate === 'string') {
                if (maxDate === 'now' || maxDate === 'moment') {
                    maxDate = moment();
                }
            }

            var parsedDate = parseInputDate(maxDate);

            if (!parsedDate.isValid()) {
                throw new TypeError('maxDate() Could not parse date parameter: ' + maxDate);
            }
            if (options.minDate && parsedDate.isBefore(options.minDate)) {
                throw new TypeError('maxDate() date parameter is before options.minDate: ' + parsedDate.format(actualFormat));
            }
            options.maxDate = parsedDate;
            if (options.maxDate.isBefore(maxDate)) {
                setValue(options.maxDate);
            }
            if (viewDate.isAfter(parsedDate)) {
                viewDate = parsedDate.clone();
            }
            update();
            return picker;
        };

        picker.minDate = function (minDate) {
            if (arguments.length === 0) {
                return options.minDate ? options.minDate.clone() : options.minDate;
            }

            if ((typeof minDate === 'boolean') && minDate === false) {
                options.minDate = false;
                update();
                return picker;
            }

            if (typeof minDate === 'string') {
                if (minDate === 'now' || minDate === 'moment') {
                    minDate = moment();
                }
            }

            var parsedDate = parseInputDate(minDate);

            if (!parsedDate.isValid()) {
                throw new TypeError('minDate() Could not parse date parameter: ' + minDate);
            }
            if (options.maxDate && parsedDate.isAfter(options.maxDate)) {
                throw new TypeError('minDate() date parameter is after options.maxDate: ' + parsedDate.format(actualFormat));
            }
            options.minDate = parsedDate;
            if (options.minDate.isAfter(minDate)) {
                setValue(options.minDate);
            }
            if (viewDate.isBefore(parsedDate)) {
                viewDate = parsedDate.clone();
            }
            update();
            return picker;
        };

        picker.defaultDate = function (defaultDate) {
            if (arguments.length === 0) {
                return options.defaultDate ? options.defaultDate.clone() : options.defaultDate;
            }
            if (!defaultDate) {
                options.defaultDate = false;
                return picker;
            }

            if (typeof defaultDate === 'string') {
                if (defaultDate === 'now' || defaultDate === 'moment') {
                    defaultDate = moment();
                }
            }

            var parsedDate = parseInputDate(defaultDate);
            if (!parsedDate.isValid()) {
                throw new TypeError('defaultDate() Could not parse date parameter: ' + defaultDate);
            }
            if (!isValid(parsedDate)) {
                throw new TypeError('defaultDate() date passed is invalid according to component setup validations');
            }

            options.defaultDate = parsedDate;

            if (options.defaultDate && _getInputValue(input).trim() === '' && input.attr('placeholder') === undefined) {
                setValue(options.defaultDate);
            }
            return picker;
        };

        picker.locale = function (locale) {
            if (arguments.length === 0) {
                return options.locale;
            }

            if (!moment.localeData(locale)) {
                throw new TypeError('locale() locale ' + locale + ' is not loaded from moment locales!');
            }

            options.locale = locale;
            date.locale(options.locale);
            viewDate.locale(options.locale);

            if (actualFormat) {
                initFormatting(); // reinit formatting
            }
            if (widget) {
                hide();
                show();
            }
            return picker;
        };

        picker.sideBySide = function (sideBySide) {
            if (arguments.length === 0) {
                return options.sideBySide;
            }

            if (typeof sideBySide !== 'boolean') {
                throw new TypeError('sideBySide() expects a boolean parameter');
            }
            options.sideBySide = sideBySide;
            if (widget) {
                hide();
                show();
            }
            return picker;
        };

        picker.viewMode = function (viewMode) {
            if (arguments.length === 0) 
                return options.viewMode;

            if (typeof viewMode !== 'string') 
                throw new TypeError('viewMode() expects a string parameter');

            if (viewModes.indexOf(viewMode) === -1) 
                throw new TypeError('viewMode() parameter must be one of (' + viewModes.join(', ') + ') value');

            options.viewMode = viewMode;
            currentViewMode = Math.max(viewModes.indexOf(viewMode), minViewModeNumber);

            showMode();
            return picker;
        };
		
//		//查询模板拓展
//		picker.afterShow=function(afterShow){
//			options.afterShow = afterShow;
//		return picker
//		};

        picker.showTodayButton = function (showTodayButton) {
            if (arguments.length === 0) {
                return options.showTodayButton;
            }

            if (typeof showTodayButton !== 'boolean') {
                throw new TypeError('showTodayButton() expects a boolean parameter');
            }

            options.showTodayButton = showTodayButton;
            if (widget) {
                hide();
                show();
            }
            return picker;
        };

        picker.showClear = function (showClear) {
            if (arguments.length === 0) {
                return options.showClear;
            }

            if (typeof showClear !== 'boolean') {
                throw new TypeError('showClear() expects a boolean parameter');
            }

            options.showClear = showClear;
            if (widget) {
                hide();
                show();
            }
            return picker;
        };

        picker.clear = function () {
            clear();
            return picker;
        };

        // initializing element and component attributes
        if (element.is(inputSelector))
            input = element;
        else
            input = element.find(inputSelector);

        if (element.hasClass('input-group')) {
            if (element.find('.datepickerbutton').size() === 0) {
                component = element.find('[class^="input-group-"]');
            } else {
                component = element.find('.datepickerbutton');
            }
        }

        if (!input.is(inputSelector)) {
            throw new Error('Could not initialize DateTimePicker without an input element');
        }

        $.extend(true, options, dataToOptions());

        picker.options(options);

        initFormatting();

        attachDatePickerElementEvents();

//      if (input.prop('disabled')) {
//          picker.disable();
//      }
        
        if (input.is(inputSelector) && _getInputValue(input).trim().length !== 0) {
            setValue(parseInputDate(_getInputValue(input).trim()));
        }
        else if (options.defaultDate && input.attr('placeholder') === undefined) {
            setValue(options.defaultDate);
        }
        return picker;
    };

    /********************************************************************************
     *
     * jQuery plugin constructor and defaults object
     *
     ********************************************************************************/

    $.fn.datetimepicker = function (options) {
        return this.each(function () {
            var $this = $(this);
            if (!$this.data('DateTimePicker')) {
                // create a private copy of the defaults object
                options = $.extend(true, {}, $.fn.datetimepicker.defaults, options);
                $this.data('DateTimePicker', dateTimePicker($this, options));
            }
        });
    };

    $.fn.datetimepicker.defaults = {
//		afterShow:undefined,
        format: false,
        extraFormats: false,
        minDate: false,
        maxDate: false,
        locale: moment.locale('zh-cn'),
        defaultDate: false,
        icons: {
            time: 'glyphicon glyphicon-time',
            date: 'glyphicon glyphicon-calendar',
            up: 'glyphicon glyphicon-chevron-up',
            down: 'glyphicon glyphicon-chevron-down',
            previous: 'glyphicon glyphicon-chevron-left',
            next: 'glyphicon glyphicon-chevron-right',
            today: 'glyphicon glyphicon-screenshot',
            clear: 'glyphicon glyphicon-trash'
        },
        sideBySide: false,
        viewMode: 'days',
        showTodayButton: true,
        showClear: true,
        ignoreReadonly: false
    };
    $(document).on(
        'focus.datetimepicker.data-api click.datetimepicker.data-api',
        '[data-provide="datetimepicker"]',
        function (e) {
            var $this = $(this);
            if ($this.data('DateTimePicker')) return;
            e.preventDefault();
            var options = JSON.parse($this.attr('data-options') || null);
            $this.datetimepicker(options || {});
            $this.data('DateTimePicker').show();
            $this.on('dp.change', function() {
                $(this).find('input').trigger('change');
            });
        }
    );
}($, moment);    
