//Chapter SEven
lilJSter = _ = extendAndWrap(lilJSter, {
	isSet: function (l) {
		return isNull(l) ? true :
			_.isMember(car(l),cdr(l)) ? false :
			/*ELSE*/	_.isSet(cdr(l));
	},
	makeset : function (l) {
		return isNull (l) ? l :
			_.isMember(car(l), cdr(l)) ? _.makeset(cdr(l)) :
			/*ELSE*/ cons(car(l), _.makeset(cdr(l)));
	},
	makeset2 : function (l) {
		return isNull (l) ? l :
	/*Else*/cons(	car(l),
						_.makeset2(	_.multirember(	car(l),
																				cdr(l))));
	},
	isSubset : function (s1,s2) {
		return isNull (s1) ? true :
			_.isMember(car(s1),s2) ? _.isSubset(cdr(s1),s2) :
			/*Else*/ false;
	},
	isSubset2 : function (s1,s2) {
		return isNull (s1) ? true :
			_.isMember(car(s1),s2) && _.isSubset(cdr(s1),s2);
	}
});

