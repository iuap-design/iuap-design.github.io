import {extend} from 'neoui-sparrow/lib/extend';
import {Loading} from 'neoui/js/neoui-loading';
import {showLoading} from 'neoui/js/neoui-loading';
import {hideLoading} from 'neoui/js/neoui-loading';
import {showWaiting} from 'neoui/js/neoui-loading';
import {removeWaiting} from 'neoui/js/neoui-loading';
var ex = {"Loading":Loading,"showLoading":showLoading,"hideLoading":hideLoading,"showWaiting":showWaiting,"removeWaiting":removeWaiting}
extend(ex,window.u || {});
window.u = ex;
export {ex as u};