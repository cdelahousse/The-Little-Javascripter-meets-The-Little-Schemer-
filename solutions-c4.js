//Chapter Four
lilJSter = _ = extendAndWrap(lilJSter, {
	plus: function (n,m) {
					return isZero(m) ? n:
	add1(plus(n,sub1(m)));
				},

	minus: function (n,m) {
					return isZero(m) ? n:
sub1(minus(n,sub1(m)));
				},

	addtup	: function (t) { //Written using Crockford's primitives. They're more efficient. The rest of the solutions will follow suit.
						return isNull(t) ? 0 :
plus(car(t),_.addtup(cdr(t)));
					},

	star : function (n,m) {
					return isZero(m) ? 0:
						plus(n,_.star(n,sub1(m)));
				},

	tupplus : function (t1,t2) { //As in book
						return isNull(t1) && isNull(t2) ?
							null : 
							cons(plus(car(t1),car(t2)), 
									_.tupplus(
										cdr(t1),cdr(t2)));
						},

	tupplusmod : function (t1,t2) {
								return isNull(t1) ? t2 :
									isNull(t2) ? t1 :
									cons(plus(car(t1),car(t2)), 
											_.tupplusmod(
												cdr(t1),cdr(t2)));
			},

	gt : function (n,m) { //As in book
				return isZero(n) ? false :
					isZero(m) ? true :
					_.gt(sub1(n),sub1(m));
			},

	lt : function (n,m) {  //As in book 
				return isZero(m) ? false :
					isZero(n) ? true :
					_.gt(sub1(n),sub1(m));
			},

	//SKIPPED (= n m) -- Equal Numbers

	power : function (n,m){
						return isZero(m) ? 1:
							_.star(n, _.power(n,sub1(m)));
					},

	quotient : function (n,m){
							return lt(n,m) ? 0:
								add1(_.quotient(minus(n,m),m));
						},

	length : function (l) {
						return isNull(l) ? 0 :
							add1(_.length(cdr(l)));
					},
	pick	: function (n,l) {
					return isZero(sub1(n)) ? car(l) :
						_.pick(sub1(n),cdr(l));
				},

	rempick	: function (n,l) {
							return isZero(sub1(n)) ? cdr(l):
								cons(car(l), _.rempick(sub1(n),cdr(l)));
						},

	noNums	: function (l) {
						return isNull(l) ? null :		
							isNumber(car(l)) ? _.noNums(cdr(l)) :
							cons(car(l), _.noNums(cdr(l)));
					},

	allNums	: function (l) {
							return isNull(l) ? null :		
								isNumber(car(l)) ? 
								cons(car(l), _.allNums(cdr(l))) :
								_.allNums(cdr(l));
						},

	eqan	: function (a1,a2) { //NOTE: Recheck XXX
					return isNumber(a1) && isNumber(a2) ? 
						isEqn(a1,a2) :
						isNumber(a1) || isNumber(a2) ?  false :
						isEq(a1,a2); 
				},
	occur	: function (a,l) { //Note: Recheck XXX
						return isNull(l) ? null :
							isEq(car(l),a) ? add1( _.occur(a,cdr(l))) :
							_.occur(a,cdr(l));
					},

	isOne : function(n) {
						return isEqn(n, 1);
					},

	rempickRewrite	: function (n,l) {
					return _.isOne(n) ? cdr(l):
						cons(car(l), _.rempickRewrite(sub1(n),cdr(l)));
					}
});
