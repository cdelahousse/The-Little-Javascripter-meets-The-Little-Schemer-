


//CHAPTER TWO
var c2 = {

	isLat: function (l) { //Function as in book
		return isNull(l) ? true :
			isAtom(car(l)) ? this.isLat(cdr(l)) :
			/*ELSE*/ false; 
	},

	isMember: function (a,l) { //As in book
		return isNull(l) ? false :
			(/*OR*/ isEq(a,car(l)) || this.isMember(a,cdr(l))); //Else 
	}
	rember: function (a,l) {
		return isNull(l) ? null :
		/*ELSE*/ isEq(a,car(l)) ? cdr(l) : 
			/*ELSE*/ cons(car(l), this.rember(cdr(l)));
	}
}



