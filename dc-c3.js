//Douglas Crockford's solutions
//javascript.crockford.com/little.html

// Chapter Two

function isLat(s) {
	return isNull(s) || (isAtom(car(s)) && isLat(cdr(s)));
}

function isMember(a, lat) {
	return isNull(lat) ? false :
		isEq(a, car(lat)) || isMember(a, cdr(lat));
}

// Chapter Three

function rember(a, lat) {
	return isNull(lat) ? null :
		isEq(a, car(lat)) ? cdr(lat) :
		cons(car(lat), rember(a, cdr(lat)));
}

function firsts(l) {
	return isNull(l) ? null :
		cons(car(car(l)), firsts(cdr(l)));
}

function insertR(neo, old, lat) {
	return isNull(lat) ? null :
		cons(car(lat), isEq(car(lat), old) ? cons(neo, cdr(lat)) :
				insertR(neo, old, cdr(lat)));
}

function insertL(neo, old, lat) {
	return isNull(lat) ? null :
		isEq(car(lat), old) ? cons(neo, lat) :
		cons(car(lat), insertL(neo, old, cdr(lat)));
}

function subst(neo, old, lat) {
	return isNull(lat) ? null :
		isEq(car(lat), old) ? cons(neo, cdr(lat)) :
		cons(car(lat), subst(neo, old, cdr(lat)));
}

function subst2(neo, old1, old2, lat) {
	return isNull(lat) ? null :
		isEq(car(lat), old1) || isEq(car(lat), old2) ?
		cons(neo, cdr(lat)) :
		cons(car(lat), subst(neo, old1, old2, cdr(lat)));
}

function multirember(a, lat) {
	return isNull(lat) ? null :
		isEq(a, car(lat)) ? multirember(a, cdr(lat)) :
		cons(car(lat), multirember(a, cdr(lat)));
}

function multiinsertR(neo, old, lat) {
	return isNull(lat) ? null :
		isEq(old, car(lat)) ?
		cons(old, cons(neo, multiinsertR(old, neo, cdr(lat)))) :
		multiinsertR(old, neo, cdr(lat));
}

function multiinsertL(neo, old, lat) {
	return isNull(lat) ? null :
		isEq(old, car(lat)) ?
		cons(neo, cons(old, multiinsertL(old, neo, cdr(lat)))) :
		multiinsertL(old, neo, cdr(lat));
}

function multisubst(neo, old, lat) {
	return isNull(lat) ? null :
		isEq(car(lat), old) ? cons(neo, multisubst(neo, old, cdr(lat))) :
		cons(car(lat), multisubst(neo, old, cdr(lat)));
}
