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
	},
	isEqset: function (s1,s2) { // XXX: review
		return isNull (s1) ? true :
			_.isSubset(s1,s2) && _.isSubset(s2,s1) ;
	},
	isIntersect: function (s1,s2) {
		return isNull (s1) ? false :
			_.isMember(car(s1),s2) ? true :
			/*else*/ _.isIntersect(cdr(s1),s2);
	},
	isIntersect2: function (s1,s2) {
		return isNull (s1) ? false :
			_.isMember(car(s1),s2) || _.isIntersect(cdr(s1),s2);
	},
	intersect : function (s1, s2) {
		return isNull (s1) ? null :
			_.isMember(car(s1), s2) ? cons(	car(s1),
																			_.intersect(	cdr(s1), s2)) :
				/*ELSE*/ _.intersect(cdr(s1),s2);
	},
	union : function (s1, s2) {
		return isNull (s1) ? s2 :
			_.isMember(car(s1),s2) ?
				_.union(cdr(s1),s2) :
			/*ELSE*/	cons(car(s1), _.union(cdr(s1), s2));
	},
	difference : function (s1, s2) {
		return isNull (s1) ? null :
			_.isMember(car(s1),s2) ?
				_.difference(cdr(s1),s2) :
			/*else*/ cons(car(s1), _.difference(cdr(s1),s2));
	},
	intersectall: function (lset) {
		return isNull (cdr(lset)) ? car(lset) :
			_.intersect(car(lset), _.intersectall(cdr(lset)));
	},
	isaPair : function (x) {
		return	isAtom(x) ? false :
						isNull (x) ? false :
						isNull(cdr(x)) ? false :
						isNull(cdr(cdr(x))) ? true :
						/*Else*/ false;
		},
	first : function (l) {
		return car(l);
	},

	second : function (l) {
		return car(cdr(l));
	},
	build : function (s1,s2) {
		return cons(	s1,
									cons(s2, null));
	},
	third : function (l) {
		return car(cdr(cdr(l)));
	},
	isFun : function (r) {
		return _.isSet(_.firsts(r));
	},
	revrel : function (r) {
		return isNull(r) ? null :
			cons(	_.build(	_.second(car(r)),
											_.first(car(r))),
						_.revrel(cdr(r)))
	},
	revpair : function (p) {
		return _.build(_.second(p),_.first(p));
	},
	revrel2 : function (r) {
		return isNull(r) ? null :
			cons(	_.revpair(car(r)),
						_.revrel2(cdr(r)));
	}, 
	isFullful : function (r) {
		//"seconds" is defined through wishful thinking (see SICP lecture 2A)
		return _.isSet(_.seconds(r));
	},

});

