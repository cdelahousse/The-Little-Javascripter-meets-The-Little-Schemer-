//CHAPTER TWO
lilJSter = _ = extend(lilJSter, {
	isLat: function (l) { //Function as in book
	return isNull(l) ? true :
		isAtom(car(l)) ? _.isLat(cdr(l)) :
		/*ELSE*/ false; 
	},
	member: function (a,l) { //As in book
		return isNull(l) ? false :
		(/*OR*/ isEq(a,car(l)) || _.isMember(a,cdr(l))); //Else 
	}
});

r = new R(lilJSter);
