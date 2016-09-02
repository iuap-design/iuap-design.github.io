import {extend} from 'neoui-sparrow/lib/extend';
import {slidePanel} from 'neoui/js/neoui-slidePanel';
var ex = {"slidePanel":slidePanel}
extend(ex,window.u || {});
window.u = ex;
export {ex as u};