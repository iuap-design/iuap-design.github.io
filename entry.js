import {extend} from 'neoui-sparrow/lib/extend';
import {Button} from 'neoui/js/neoui-button';
var ex = {"Button":Button}
extend(ex,window.u || {});
window.u = ex;
export {ex as u};