import {extend} from 'neoui-sparrow/lib/extend';
import {ClockPicker} from 'neoui/js/neoui-clockpicker';
import {Loading} from 'neoui/js/neoui-loading';
import {showLoading} from 'neoui/js/neoui-loading';
import {hideLoading} from 'neoui/js/neoui-loading';
import {showWaiting} from 'neoui/js/neoui-loading';
import {removeWaiting} from 'neoui/js/neoui-loading';
import {Menu} from 'neoui/js/neoui-menu';
import {Month} from 'neoui/js/neoui-month';
import {NavMenu} from 'neoui/js/neoui-navmenu';
var ex = {"ClockPicker":ClockPicker,"Loading":Loading,"showLoading":showLoading,"hideLoading":hideLoading,"showWaiting":showWaiting,"removeWaiting":removeWaiting,"Menu":Menu,"Month":Month,"NavMenu":NavMenu}
extend(ex,window.u || {});
window.u = ex;
export {ex as u};