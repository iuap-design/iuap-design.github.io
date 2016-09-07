import {extend} from 'neoui-sparrow/lib/extend';
import {Autocomplete} from 'neoui/js/neoui-autocomplete';
var ex = {"Autocomplete":Autocomplete}
extend(ex,window.u || {});
window.u = ex;
export {ex as u};