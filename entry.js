import {extend} from 'neoui-sparrow/lib/extend';
import {Autocomplete} from 'neoui/js/neoui-autocomplete';
import {DateTimePicker} from 'neoui/js/neoui-datetimepicker';
import {NavLayout} from 'neoui/js/neoui-layout.nav';
import {NavLayoutTab} from 'neoui/js/neoui-layout.nav';
import {Menu} from 'neoui/js/neoui-menu';
import {Tabs} from 'neoui/js/neoui-tabs';
import {Tooltip} from 'neoui/js/neoui-tooltip';
import {YearMonth} from 'neoui/js/neoui-yearmonth';
var ex = {"Autocomplete":Autocomplete,"DateTimePicker":DateTimePicker,"NavLayout":NavLayout,"NavLayoutTab":NavLayoutTab,"Menu":Menu,"Tabs":Tabs,"Tooltip":Tooltip,"YearMonth":YearMonth}
extend(ex,window.u || {});
window.u = ex;
export {ex as u};