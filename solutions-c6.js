//Chapter Six 
//Douglas Crockford more or less skipped this chapter
lilJSter = _ = extendAndWrap(lilJSter, { 
	isNumbered : function (aexp) {
		return isAtom(aexp) ? isNumber(aexp) :
			isEq(car(cdr(aexp)), '+') ? 
				_.isNumbered(car(aexp)) && _.isNumbered(car(cdr(cdr(aexp)))) :
			isEq(car(cdr(aexp)), 'x') ?
				_.isNumbered(car(aexp)) && _.isNumbered(car(cdr(cdr(aexp)))) :
			isEq(car(cdr(aexp)), '^') ? 
				_.isNumbered(car(aexp)) && _.isNumbered(car(cdr(cdr(aexp)))) :
			undefined; //Kludge because ternary JS expressions need an else clause
	},
	isNumbered2 : function (aexp) {
		return isAtom(aexp) ? isNumber(aexp) :
				_.isNumbered2(car(cdr(aexp))) && _.isNumbered2(car(cdr(cdr(aexp))));
	},
	
	value : function (nexp) {
		return isAtom(nexp) ? nexp:
			isEq(car(cdr(nexp)), '+') ? 
				_.plus(	_.value(car(nexp)),
								_.value(car(cdr(cdr(nexp))))) :
			isEq(car(cdr(nexp)), 'x') ?
				_.minus(_.value(car(nexp)),
								_.value(car(cdr(cdr(nexp))))) :
			isEq(car(cdr(nexp)), '^') ? 
				_.power(_.value(car(nexp)),
								_.value(car(cdr(cdr(nexp))))) :
			undefined;//Kludge because ternary JS expressions need an else clause 
	},
	//Abstraction... YAY!
	firstSubExp : function (aexp) {
		return car(cdr(aexp));
	},
	secondSubExp : function (aexp) {
		return car(cdr(cdr(aexp)));
	},
	op : function (aexp) {
		return car(aexp);
	},
	value2 : function (nexp) {
		return isAtom(nexp) ? nexp:
			isEq(_.op(nexp), '+') ? 
				_.plus(	_.value2(_.firstSubExp(nexp)),
								_.value2(_.secondSubExp(nexp))) :
			isEq(_.op(nexp), 'x') ?
				_.minus(_.value2(_.firstSubExp(nexp)),
								_.value2(_.secondSubExp(nexp))) :
			isEq(_.op(nexp), '^') ? 
				_.power(_.value2(_.firstSubExp(nexp)),
								_.value2(_.secondSubExp(nexp))) :
			undefined;//Kludge because ternary JS expressions need an else clause 
	},

});
