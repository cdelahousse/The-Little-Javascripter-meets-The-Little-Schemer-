//Creates a new object from props that will inherit from target
function extend (target,props) {

	//Add members from props to function
	function f (p) {
		for (member in p){
			this[member] = p[member];
		};
	}

	//Inherit from target
	f.prototype = target;

	//New object
	return new f(props);
}

//Creates 'lil Javascripter object
lilJSter = {}

_ = lilJSter //Shortcut
