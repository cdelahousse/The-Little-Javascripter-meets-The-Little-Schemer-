//Chapter Five
lilJSter = _ = extendAndWrap(lilJSter, {

	remberstar : function (a,l) { 
		return isNull(l) ? null :
			isAtom(car(l)) ?
				isEq(a,car(l)) ? 
					_.remberstar(a,cdr(l)) :
					cons(car(l),_.remberstar(a,cdr(l))) :
			cons(_.remberstar(a,car(l)),_.remberstar(a,cdr(l)));
	},

	insertRstar : function (n,o,l) {
		return isNull(l) ? null :
			isAtom(car(l)) ? 
				isEq(car(l),o) ? 
					cons(	o,
								cons(	n,
											_.insertRstar(n,o,cdr(l)))) :
					cons(cdr(l),_.insertRstar(n,o,cdr(l))) :
				cons(_.insertRstar(n,o,car(l)),_.insertRstar(n,o,cdr(l)));
	},

	occurstar : function (a,l) {//Note: needs plus() from chapter 4

		//NOTE: return 0, not null, because we're returning a number, not a list.
		return isNull(l) ? 0 : 
			isAtom(car(l)) ?
				isEq(car(l),a) ? add1(_.occurstar(a,cdr(l))) :
				_.occurstar(a,cdr(l)) :
			_.plus(_.occurstar(a,car(l)),_.occurstar(a,cdr(l)));
	},

	subststar : function (n,o,l) { 
		return isNull(l) ? null :
			isAtom(car(l)) ? 
				isEq(car(l),o) ?
					cons(	n,
								_.subststar(n,o,cdr(l))) :
					cons(car(l),_.subststar(n,o,cdr(l))) :
			cons(_.subststar(n,o,car(l)),_.subststar(n,o,cdr(l)));
	},

	insertLstar : function (n,o,l) {
		return isNull(l) ? null :
			isAtom(car(l)) ? 
				isEq(car(l),o) ? 
					cons(	n,
								cons(	o,
											_.insertLstar(n,o,cdr(l)))) :
					cons(car(l),_.insertLstar(n,o,cdr(l))) :
			cons(_.insertLstar(n,o,car(l)),_.insertLstar(n,o,cdr(l)));
	},

	memberstar : function (a,l) {//XXX RECHECK
		return isNull(l) ? false:
			isAtom(car(l)) ? 
				//NOTE: one could have done isEq(car(l), a) ? true : instead of using OR (||). The OR statement eliminates the need for it become if the predicate evaluates to true, OR doesn't continue to look at the other predicates and returns true. It's like a shorter form of (isEq(car(l),a) ? true : _.memberstar(a,cdr(l) )
				isEq(car(l),a) ||  
					_.memberstar(a,cdr(l)) :
				_.memberstar(a,car(l)) ||
					_.memberstar(a,cdr(l)) ;
	},

	leftmost : function (l) { 
		return isAtom(car(l)) ? car(l) :
			_.leftmost(car(l));
	},
//Pg 88. OR asks questions (evaluates expressions) in sequence and stops when one evaluates to true, which evaluates the entire expression to true. The others aren't evaluated. NOTE: It is a 'special form' (see SICP 1.1.3 and 1.1.6) where the parameters aren't evaluated unless needed, unlike most other things)
	
//Pg 89. AND asks questions (evaluates expressions) in sequence and stops when one evaluates to FALSE. The others aren't evaluated and the entire expression evaluates to FALSE. If every expression evaluates to true, the entire predicate evaluates to TRUE. NOTE: It is a 'special form' (see SICP 1.1.3 and 1.1.6) where the parameters aren't evaluated unless needed, unlike most other things)
//
	isEqList : function(l1,l2) { //XXX I don't quite understand this, recheck, go over it again. Remember though, it asks nine questions. Start at page 89
				return	isNull(l1) && isNull(l2) ? true : //Question 1: null? null? in args
								isNull(l1) && isAtom(l2) ? false : //Q2: null? atom?
								//Q3: null? list? == false 
								//b/c that's the only possibility for the second argument (l2)
								isNull(l1) ? false :  //Q3
								isAtom(car(l1)) && isNull(l2) ? false : //Q4: Atom? null?
								isAtom(car(l1)) && isAtom(car(l2)) ? //Q5 Atom? Atom?
									_.eqan(car(l1),car(l2)) && _.isEqList(cdr(l1),cdr(l2)) : //Wha..? XXX
								isAtom(car(l1)) ? false :
								isNull(l2) ? false :
								isAtom(car(l2)) ? false :
								//else
								_.isEqList(car(l1),car(l2)) &&
									_.isEqList(cdr(l1),cdr(l2));
	},

	isEqList2 : function (l1,l2) { 
		return	isNull(l1) && isNull(l2) ? true : 
						//NOTE: They're not both empty lists, so if one OR the other is,
						//they aren't equal lists
						isNull(l1) || isNull(l2) ? false :
						isAtom(car(l1)) && isNull(l2) ? false :
						isAtom(car(l1)) && isAtom(car(l2)) ? 
							_.eqan(car(l1),car(l2)) && _.isEqList(cdr(l1),cdr(l2)) :
						isAtom(car(l1)) || isAtom(car(l2)) ? false :
						//else
						_.isEqList2(car(l1),car(l2)) &&
							_.isEqList2(cdr(l1),cdr(l2));
	},
	isEqual : function (s1,s2) {
		return isAtom(s1) && isAtom(s2) ?  //Q1: Atom? Atom? in args
				_.isEqan(s1,s2) : //If Q1 is true, are they the same atom? 
			isAtom(s1) ? false : //Q2  Atom? S-Exp? in args
			isAtom(s2) ? false : //Q3:  S-Exp? Atom?:  in args
			//Else
			_.isEqlist2(s1,s2); //Q4:	S-Exp? S-Exp? in args
	},
	isEqual2 : function (s1,s2) {
		return isAtom(s1) && isAtom(s2) ? //Q1: Atom? Atom? in args
				_.isEqan(s1,s2) : //If Q1 is true, are they the same atom? 
			isAtom(s1) || isAtom(s2) ? false : //Q2 and Q3: Atom? S-Exp? OR S-Exp? Atom?
			//Else
			_.isEqList2(s1,s2); //Q4:	S-Exp? S-Exp in args
	},

	isEqList3 : function (l1,l2) {  //XXX Revise this part of book... Juicy and enlighting
		return	isNull(l1) && isNull(l2) ? true :  //Answers question 1 of eqlist
						isNull(l1) || isNull(l2) ? false : //Answers question 2 and 3
						//else
						//isEqual asks most of the questions of the original isEqList
						_.isEqual2(car(l1),car(l2)) &&
							_.isEqList3(cdr(l1),cdr(l2));
	},
	rember2: function (s,ls) {//Not a star function because only recurs on cdr
		return isNull(ls) ? null :
			isEqual2(s,car(ls)) ? cdr(ls) : 
			/*ELSE*/ 
			cons(car(ls), _.rember2(s,cdr(ls))); 
	}
}); //End extendAndWrap
