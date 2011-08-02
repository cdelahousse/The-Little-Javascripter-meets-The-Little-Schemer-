﻿//Creates a new object from props that will inherit from target
function extend (target,props) {

	//Add members from props to function
	function F (p) {
		for (member in p) {
			this[member] = p[member];
		};
	}

	//Inherit from target
	F.prototype = target;

	//New object
	return new F(props);
}

//Wrap obj's members with with Crockford's p() function 
//Usage: 
//var r = new R(lilJSter);
//r.multiinsertL('y','b',lat);
//p() renders a human readable version of an S-Expression
function R (obj) {
	for (member in obj) {
		//Mirrors obj's members, select wrapper
		this[member] = wrap(member,p); 
	};
	
	//Takes original property and wraps it
	function wrap (mem,wrapper) {
		return function () {
			var args,fn;

			//for fn.apply
			args = Array.prototype.slice.call(arguments);

			//copies function for fn
			fn = obj[mem];

			//Wrap fn
			return wrapper( fn.apply(fn,args) );
		};
	}
}

//Test Variables 
var 
		//list of atoms
		lat = ['a', ['b', ['c', ['b', ['d']]]]],
		//List of numbers
		tup = [1,[2,[3,[4,[5]]]]], 
		num = 8,
		atom = 'mom',
		//Null List  === Null. See Crockford's little Javascripter description
		null_list = null,
		//List of lats rendered from Crockford's Text to S-Expression function -- s();
		list_lat = s("((how much (wood)) could ((a (wood)  chuck)) (((chuck))) (if (a) ((wood chuck))) could  chuck wood)"),
		list_lat2 = s("((five  plums) (four) (eleven  green  oranges))"),


		//lilJSter alias
		_,
		//Creates my 'lil Javascripter object
		lilJSter = _ = {},

		//Will wrap function with Crockford's p();
		r;
