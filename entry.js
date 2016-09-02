import {extend} from 'neoui-sparrow/lib/extend';
var ex = {}
extend(ex,window.u || {});
window.u = ex;
export {ex as u};