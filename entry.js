import {extend} from 'neoui-sparrow/lib/extend';
import {Autocomplete} from 'neoui/js/neoui-autocomplete';
import {Checkbox} from 'neoui/js/neoui-checkbox';
import {ClockPicker} from 'neoui/js/neoui-clockpicker';
import {Table} from 'neoui/js/neoui-data-table';
import {MDLayout} from 'neoui/js/neoui-layout.md';
import {Multilang} from 'neoui/js/neoui-multilang';
import {Progress} from 'neoui/js/neoui-progress';

import {CheckboxAdapter} from 'kero-adapter/js/component/keroa-checkbox';
import {ProgressAdapter} from 'kero-adapter/js/component/keroa-progress';
var ex = {"Autocomplete":Autocomplete,"Checkbox":Checkbox,"ClockPicker":ClockPicker,"Table":Table,"MDLayout":MDLayout,"Multilang":Multilang,"Progress":Progress,"CheckboxAdapter":CheckboxAdapter,"ProgressAdapter":ProgressAdapter}
extend(ex,window.u || {});
window.u = ex;
export {ex as u};