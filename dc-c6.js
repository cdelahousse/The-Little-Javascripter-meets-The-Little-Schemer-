
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

// Chapter Four

function plus(n, m) {
		return isZero(m) ? n : add1(plus(n, sub1(m)));
}

function minus(n, m) {
		return isZero(m) ? n : sub1(minus(n, sub1(m)));
}

function addtup(tup) {
		return isNull(tup) ? 0 : plus(car(tup), addtup(cdr(tup)));
}

function star(n, m) {
		return isZero(m) ? 0 : plus(n, star(n, sub1(m)));
}

function tupplus(tup1, tup2) {
		return isNull(tup1) ? tup2 :
						isNull(tup2) ? tup1 :
						cons(plus(car(tup1), car(tup2)), tupplus(cdr(tup1), cdr(tup2)));
}

function gt(n, m) {
		return isZero(n) ? false :
						isZero(m) ||
						gt(sub1(n), sub1(m));
}

function lt(n, m) {
		return isZero(m) ? false :
						isZero(n) ||
						lt(sub1(n), sub1(m));
}

function isEqn(n, m) {
		return !gt(n, m) && !lt(n, m);
}

function power(n, m) {
		return isZero(m) ? 1 :
						star(n, power(n, sub1(m)));
}

function quotient(n, m) {
		return lt(n, m) ? 0 :
						add1(quotient(minus(n, m), m));
}

function length(lat) {
		return isNull(lat) ? 0 :
						add1(length(cdr(lat)));
}

function pick(n, lat) {
		return isZero(sub1(n)) ? car(lat) :
						pick(sub1(n), cdr(lat));
}

function rempick(n, lat) {
		return isZero(sub1(n)) ? cdr(lat) :
						cons(car(lat), rempick(sub1(n), cdr(lat)));
}

function noNums(lat) {
		return isNull(lat) ? null :
						isNumber(car(lat)) ? noNums(cdr(lat)) :
						cons(car(lat), noNums(cdr(lat)));
}

function allNums(lat) {
		return isNull(lat) ? null :
						isNumber(car(lat)) ? cons(car(lat), allNums(cdr(lat))) :
						allNums(cdr(lat));
}

function isEqan(a1, a2) {
		return isNumber(a1) && isNumber(a2) ? isEqn(a1, a2) :
						isNumber(a1) || isNumber(a2) ? false :
						isEq(a1, a2);
}

function occur(a, lat) {
		return isNull(lat) ? 0 :
						isEq(car(lat), a) ? add1(occur(a, cdr(lat))) :
						occur(a, cdr(lat));
}

function isOne(n) {
		return isEqn(n, 1);
}

function rempick(n, lat) {
		return isOne(n) ? cdr(lat) :
						cons(car(lat), rempick(sub1(n), cdr(lat)));
}

// Chapter Five

function remberstar(a, l) {
    return isNull(l) ? null :
            isAtom(car(l)) ?
                isEq(car(l), a) ? remberstar(a, cdr(l)) :
                cons(car(l), remberstar(a, cdr(l))) :
            cons(remberstar(a, car(l)), remberstar(a, cdr(l)));
}

function insertRstar(neo, old, l) {
    return isNull(l) ? null :
            isAtom(car(l)) ?
                isEq(car(l)) ? cons(old, cons(neo,
                    insertRstar(neo, old, cdr(l)))) :
                cons(car(l), insertRstar(neo, old, cdr(l))) :
            cons(insertRstar(neo, old, car(l)), insertRstar(neo, old, cdr(l)));
}

function occurstar(a, l) {
    return isNull(l) ? 0 :
            isAtom(car(l)) ?
                isEq(car(l), a) ? add1(occurstar(cdr(l))) :
                occurstar(cdr(l)) :
            plus(occurstar(a, car(l)), occurstar(a, cdr(l)));
}

function subststar(neo, old, l) {
    return isNull(l) ? null :
            cons(
                isAtom(car(l)) ? isEq(car(l)) ? neo : car(l) :
                    insertRstar(neo, old, car(l)),
                subststar(neo, old, cdr(l)));
}

function insertLstar(neo, old, l) {
    return isNull(l) ? null :
            isAtom(car(l)) ?
                isEq(car(l)) ? cons(neo, cons(old,
                    insertLstar(neo, old, cdr(l)))) :
                cons(car(l), insertLstar(neo, old, cdr(l))) :
            cons(insertLstar(neo, old, car(l)), insertLstar(neo, old, cdr(l)));
}

function memberstar(a, l) {
    return isNull(l) ? false :
            (isAtom(l) ? isEq(car(l), a) : memberstar(a, car(l))) ||
                memberstar(a, cdr(l));
}

function leftmost(l) {
    return isAtom(car(l)) ? car(l) :
            leftmost(car(l));
}

function isEqlist(l1, l2) {
    return isNull(l1) && isNull(l2) ? true :
            isNull(l1) || isNull(l2) ? false :
            isAtom(car(l1)) && isAtom(car(l2)) ?
                isEqan(car(l1), car(l2)) && isEqlist(cdr(l1), cdr(l2)) :
            isAtom(car(l1)) || isAtom(car(l2)) ? false :
            isEqlist(car(l1), car(l2)) && isEqlist(cdr(l1), cdr(l2));
}

function isEqual(s1, s2) {
    return isAtom(s1) && isAtom(s2) ? isEqan(s1, s2) :
            isAtom(s1) || isAtom(s2) ? false :
            isEqlist(s1, s2);
}

function isEqlist(l1, l2) {
    return isNull(l1) && isNull(l2) ? true :
            isNull(l1) || isNull(l2) ? false :
            isEqual(car(l1), car(l2)) && isEqual(cdr(l1), cdr(l2));
}


function rember(s, l) {
    return isNull(l) ? null :
            isEqual(car(l), s) ? cdr(l) :
            cons(car(l), rember(s, cdr(l)));
}

// Chapter Six
var operator = car;

function firstSubExp(aexp) {
    return car(cdr(aexp));
}

function secondSubExp(aexp) {
    return car(cdr(cdr(aexp)));
}

