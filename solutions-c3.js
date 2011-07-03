//CHAPTER THREE

lilJSter.rember = function (a,l) {
	return isNull(l) ? null :
		isEq(a,car(l)) ? cdr(l) : 
		/*ELSE*/ cons(car(l), this.rember(a,cdr(l)));
}

lilJSter.firsts = function (l) {
	return isNull(l) ? null :
	/*ELSE*/ cons(car(car(l)), this.firsts(cdr(l)));
}	

lilJSter.insertR = function (n,o,l) {//As in book
	return isNull(l) ? null :
		isEq(car(l), o) ?
			cons(o, cons(n,cdr(l))) :
	/*ELSE*/ cons(car(l), this.insertR(n,o,cdr(l)));
}

lilJSter.insertL = function (n,o,l) { //As in book 
	return isNull(l) ? null :
		isEq(car(l), o) ?
			cons(n, cons(o,cdr(l))) :
	/*ELSE*/ cons(car(l), this.insertL(n,o,cdr(l)));
}

lilJSter.insertLmod = function (n,o,l) { //As modified in book -- (cons new lat)
	return isNull(l) ? null :
		isEq(car(l), o) ?
			cons(n, l) :
	/*ELSE*/ cons(car(l), this.insertLmod(n,o,cdr(l)));
}

lilJSter.subst = function (n,o,l) {
	return isNull(l) ? null :
		isEq(car(l),o) ? cons(n, cdr(l)) :
	/*ELSE*/ cons(car(l), this.subst(n,o,cdr(l)));
}

lilJSter.subst2 = function (n,o1,o2,l) { //As in book 
	return isNull(l) ? null :
		isEq(car(l),o1) ? 
			cons(n, cdr(l)) :
		isEq(car(l),o2) ? 
			cons(n, cdr(l)) :
	/*ELSE*/ cons(car(l), this.subst2(n,o1,o2,cdr(l)));
}


lilJSter.subst2mod = function (n,o1,o2,l) { //As modified in book
	return isNull(l) ? null :
		isEq(car(l), o1) || isEq(car(l), o2) ?
			cons(n, cdr(l)) :
	/*ELSE*/ cons(car(l), this.subst2(n,o1,o2,cdr(l)));
}

lilJSter.multirember = function (a,l) {
	return isNull(l) ? null :
		isEq(a,car(l)) ? 
			this.multirember(a,cdr(l)) : 
		/*ELSE*/ cons(car(l), this.multirember(a,cdr(l)));
}

lilJSter.multiinsertR = function (n,o,l) {//As in book. NOTE: DC's version doesn't seem to work
	return isNull(l) ? null :
		isEq(car(l), o) ?
			cons(o, 
					cons(n,
						this.multiinsertR(n,o,cdr(l)))) :
	/*ELSE*/ cons(car(l), this.multiinsertR(n,o,cdr(l)));
}

lilJSter.multiinsertL = function (n,o,l) { //As in book. NOTE: DC's version doesn't seem to work
	return isNull(l) ? null :
		isEq(car(l), o) ?
			cons(n,
					cons(o,
						this.multiinsertL(n,o,cdr(l)))) :
	/*ELSE*/ cons(car(l), this.multiinsertL(n,o,cdr(l)));
}


lilJSter.multisubst = function (n,o,l) {
	return isNull(l) ? null :
		isEq(car(l), o) ?
			cons(n, 
					this.multisubst(n,o,cdr(l))) :
			cons(car(l), 
					this.multisubst(n,o,cdr(l)));
}
