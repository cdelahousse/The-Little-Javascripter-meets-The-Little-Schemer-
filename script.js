﻿//Test Variables 
var 
		//list of atoms
		lat = ['a', ['b', ['c', ['b', ['d']]]]],
		lat2 = ['z', ['y', ['x', ['w', ['v']]]]],
		//List of numbers
		tup = [1,[2,[3,[4,[5]]]]], 
		num = 8,
		atom = 'mom',
		//Null List  === Null. See Crockford's little Javascripter description
		null_list = null,
		ll1,ll2, //list aliases
		//List of lats rendered from Crockford's Text to S-Expression function -- s();
		list_lat = ll1 = s("((how much (wood)) could ((a (wood)  chuck)) " 
				+ "(((chuck))) (if (a) ((wood chuck))) could  chuck wood)"),
		list_lat2 = ll2 = s("((five  plums) (four) (eleven  green  oranges))"),

		//lilJSter alias
		_ ,
		//Creates my 'lil Javascripter object
		lilJSter = _ = {},

		//Will wrap function with Crockford's p();
		r;

//Creates a new object from props that will inherit from target
//Similar to Object.create
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

//Copies member into new object and wraps it with a new function
//Usage: 
//var r = new R(lilJSter);
//r.multiinsertL('y','b',lat);
function R (obj,func) {
	for (member in obj) {
		//Mirrors obj's members, select wrapper
		this[member] = wrapMember(member); 
	};
	
	//Takes original property and wraps it
	function wrapMember (mem,wrapper) {
		return function (/*arguments*/) {
			var fn;

			//copies function for fn
			fn = obj[mem];

			//Wrap fn
			return func( fn.apply(fn,arguments) );
		};
	}
}

//Wraps and extends programatically
function extendAndWrap (target,props){
	var new_obj;

	new_obj = extend(target,props);

	//Wrap obj's members with with Crockford's p() function 
	//p() renders a human readable version of an S-Expression
	r = new R(new_obj,p);

	return new_obj;
}
