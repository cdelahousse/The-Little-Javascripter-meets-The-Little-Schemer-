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
