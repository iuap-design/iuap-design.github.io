import {extend} from 'neoui-sparrow/lib/extend';
import {Autocomplete} from 'neoui/js/neoui-autocomplete';
import {YearMonth} from 'neoui/js/neoui-yearmonth';

var ex = {"Autocomplete":Autocomplete,"YearMonth":YearMonth}
extend(ex,window.u || {});
window.u = ex;
export {ex as u};