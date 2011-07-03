//Chapter Four

lilJSter.plus= function (n,m) {
	return isZero(m) ? n:
		add1(plus(n,sub1(m)));
}

lilJSter.minus= function (n,m) {
	return isZero(m) ? n:
		sub1(minus(n,sub1(m)));
}

lilJSter.addtup	= function (t) { //Written using Crockford's primitives. They're more efficient. The rest of the solutions will follow suit.
	return isNull(t) ? 0 :
		plus(car(t),this.addtup(cdr(t)));
}

lilJSter.star = function (n,m) {
	return isZero(m) ? 0:
		plus(n, this.star(n,sub1(m)));
}

lilJSter.tupplus = function (t1,t2) { //As in book
	return isNull(t1) && isNull(t2) ?
			null : 
		cons(plus(car(t1),car(t2)), 
				this.tupplus(
					cdr(t1),cdr(t2)));
}

lilJSter.tupplusmod = function (t1,t2) {
	return isNull(t1) ? t2 :
		isNull(t2) ? t1 :
			cons(plus(car(t1),car(t2)), 
				this.tupplusmod(
					cdr(t1),cdr(t2)));
}

lilJSter.gt = function (n,m) { //As in book
	return isZero(n) ? false :
		isZero(m) ? true :
			this.gt(sub1(n),sub1(m));
}

lilJSter.lt = function (n,m) {  //As in book 
	return isZero(m) ? false :
		isZero(n) ? true :
			this.gt(sub1(n),sub1(m));
}

//SKIPPED (= n m) -- Equal Numbers

lilJSter.power = function (n,m){
	return isZero(m) ? 1:
		this.star(n,this.power(n,sub1(m)));
}

lilJSter.quotient = function (n,m){
	return lt(n,m) ? 0:
		add1(this.quotient(minus(n,m),m));
}

lilJSter.length = function (l) {
	return isNull(l) ? 0 :
		add1(this.length(cdr(l)));
}
lilJSter.pick	= function (n,l) {
	return isZero(sub1(n)) ? car(l) :
		this.pick(sub1(n),cdr(l));
}

lilJSter.rempick	= function (n,l) {
	return isZero(sub1(n)) ? cdr(l):
		cons(car(l),this.rempick(sub1(n),cdr(l)));
}

lilJSter.noNums	= function (l) {
	return isNull(l) ? null :		
		isNumber(car(l)) ? this.noNums(cdr(l)) :
		cons(car(l), this.noNums(cdr(l)));
}

lilJSter.allNums	= function (l) {
	return isNull(l) ? null :		
		isNumber(car(l)) ? 
			cons(car(l),this.allNums(cdr(l))) :
		this.allNums(cdr(l));
}

lilJSter.eqan	= function (a1,a2) { //NOTE: Recheck XXX
	return isNumber(a1) && isNumber(a2) ? 
					isEqn(a1,a2) :
		isNumber(a1) || isNumber(a2) ?  false :
		isEq(a1,a2); 
}
lilJSter.occur	= function (a,l) { //Note: Recheck XXX
	return isNull(l) ? null :
		isEq(car(l),a) ? add1(this.occur(a,cdr(l))) :
	this.occur(a,cdr(l));
}
		
lilJSter.isOne = function(n) {
    return isEqn(n, 1);
}

lilJSter.rempickRewrite	= function (n,l) {
	return this.isOne(n) ? cdr(l):
		cons(car(l),this.rempickRewrite(sub1(n),cdr(l)));
}
