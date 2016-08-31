//Sparrow import
import {extend} from 'neoui-sparrow/lib/extend';

// import {Autocomplete} from 'neoui/js/neoui-autocomplete';
// import {Button} from 'neoui/js/neoui-button';



// var ex = {
// 	Autocomplete : Autocomplete,
// 	Button : Button
// };

// extend(ex,window.u || {});
// window.u = ex;
// export {ex as u};

import {Autocomplete} from 'neoui/js/neoui-autocomplete';
import {Button} from 'neoui/js/neoui-button';
var ex = {"Autocomplete":Autocomplete,"Button":Button}
extend(ex,window.u || {});
window.u = ex;
export {ex as u};