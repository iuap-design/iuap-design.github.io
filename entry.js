import {extend} from 'neoui-sparrow/lib/extend';
import {Autocomplete} from 'neoui/js/neoui-autocomplete';
import {Switch} from 'neoui/js/neoui-switch';

import {SwitchAdapter} from 'kero-adapter/js/component/keroa-switch';
var ex = {"Autocomplete":Autocomplete,"Switch":Switch,"SwitchAdapter":SwitchAdapter}
extend(ex,window.u || {});
window.u = ex;
export {ex as u};