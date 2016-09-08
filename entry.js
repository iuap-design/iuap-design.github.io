import {extend} from 'neoui-sparrow/lib/extend';
import {Checkbox} from 'neoui/js/neoui-checkbox';
import {Combo} from 'neoui/js/neoui-combo';
import {Combobox} from 'neoui/js/neoui-combobox';
import {NavMenu} from 'neoui/js/neoui-navmenu';
import {pagination} from 'neoui/js/neoui-pagination';

import {CheckboxAdapter} from 'kero-adapter/js/component/keroa-checkbox';
import {ComboboxAdapter} from 'kero-adapter/js/component/keroa-combo';
import {PaginationAdapter} from 'kero-adapter/js/component/keroa-pagination';
var ex = {"Checkbox":Checkbox,"Combo":Combo,"Combobox":Combobox,"NavMenu":NavMenu,"pagination":pagination,"CheckboxAdapter":CheckboxAdapter,"ComboboxAdapter":ComboboxAdapter,"PaginationAdapter":PaginationAdapter}
extend(ex,window.u || {});
window.u = ex;
export {ex as u};