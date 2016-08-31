//Sparrow import
import {extend} from 'neoui-sparrow/lib/extend';

//Neoui import
import {Autocomplete} from 'neoui/js/neoui-autocomplete';
import {Button} from 'neoui/js/neoui-button';



var ex = {
	Autocomplete : Autocomplete,
	Button : Button
};
//extend(ex,env);

extend(ex,window.u || {});
window.u = ex;
export {ex as u};