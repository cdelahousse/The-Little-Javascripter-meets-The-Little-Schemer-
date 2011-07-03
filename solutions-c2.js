
//CHAPTER TWO
lilJSter.isLat = function (l) { //Function as in book
	return isNull(l) ? true :
		isAtom(car(l)) ? this.isLat(cdr(l)) :
		/*ELSE*/ false; 
}
lilJSter.isMember = function (a,l) { //As in book
	return isNull(l) ? false :
		(/*OR*/ isEq(a,car(l)) || this.isMember(a,cdr(l))); //Else 
}




