//CHAPTER THREE
lilJSter = _ = extendAndWrap(lilJSter, {
	rember : function (a,l) {
		return isNull(l) ? null :
			isEq(a,car(l)) ? cdr(l) : 
			/*ELSE*/ cons(car(l), _.rember(a,cdr(l)));
	},

	firsts : function (l) {
		return isNull(l) ? null :
		/*ELSE*/ cons(car(car(l)), _.firsts(cdr(l)));
	},

	insertR : function (n,o,l) {//As in book
		return isNull(l) ? null :
			isEq(car(l), o) ?
				cons(o, cons(n,cdr(l))) :
		/*ELSE*/ cons(car(l), _.insertR(n,o,cdr(l)));
	},

	insertL : function (n,o,l) { //As in book 
		return isNull(l) ? null :
			isEq(car(l), o) ?
				cons(n, cons(o,cdr(l))) :
		/*ELSE*/ cons(car(l), _.insertL(n,o,cdr(l)));
	},

	insertLmod : function (n,o,l) { //As modified in book -- (cons new lat)
		return isNull(l) ? null :
			isEq(car(l), o) ?
				cons(n, l) :
		/*ELSE*/ cons(car(l), _.insertLmod(n,o,cdr(l)));
	},

	subst : function (n,o,l) {
		return isNull(l) ? null :
			isEq(car(l),o) ? cons(n, cdr(l)) :
		/*ELSE*/ cons(car(l), _.subst(n,o,cdr(l)));
	},
	subst2 : function (n,o1,o2,l) { //As in book 
		return isNull(l) ? null :
			isEq(car(l),o1) ? 
				cons(n, cdr(l)) :
			isEq(car(l),o2) ? 
				cons(n, cdr(l)) :
		/*ELSE*/ cons(car(l), _.subst2(n,o1,o2,cdr(l)));
	},
	subst2mod : function (n,o1,o2,l) { //As modified in book
		return isNull(l) ? null :
			isEq(car(l), o1) || isEq(car(l), o2) ?
				cons(n, cdr(l)) :
		/*ELSE*/ cons(car(l), _.subst2(n,o1,o2,cdr(l)));
	},

	multirember : function (a,l) {
		return isNull(l) ? null :
			isEq(a,car(l)) ? 
				_.multirember(a,cdr(l)) : 
			/*ELSE*/ cons(car(l),_.multirember(a,cdr(l)));
	},

	multiinsertR : function (n,o,l) {//As in book. NOTE: DC's version doesn't seem to work
		return isNull(l) ? null :
			isEq(car(l), o) ?
				cons(o, 
						cons(n,
							_.multiinsertR(n,o,cdr(l)))) :
		/*ELSE*/ cons(car(l), _.multiinsertR(n,o,cdr(l)));
	},

	multiinsertL : function (n,o,l) { //As in book. NOTE: DC's version doesn't seem to work
		return isNull(l) ? null :
			isEq(car(l), o) ?
				cons(n,
						cons(o,
							_.multiinsertL(n,o,cdr(l)))) :
		/*ELSE*/ cons(car(l), _.multiinsertL(n,o,cdr(l)));
	},

	multisubst : function (n,o,l) {
		return isNull(l) ? null :
			isEq(car(l), o) ?
				cons(n, 
						 _.multisubst(n,o,cdr(l))) :
				cons(car(l), 
						_.multisubst(n,o,cdr(l)));
	}
});
