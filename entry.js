import {extend} from 'neoui-sparrow/lib/extend';
import {Autocomplete} from 'neoui/js/neoui-autocomplete';
import {ClockPicker} from 'neoui/js/neoui-clockpicker';

var ex = {"Autocomplete":Autocomplete,"ClockPicker":ClockPicker}
extend(ex,window.u || {});
window.u = ex;
export {ex as u};