﻿// The Little JavaScripter
// http://www.crockford.com/javascript/little.js
// Copyright 2003 Douglas Crockford. All rights reserved wrrrld wide.
// May 4, 2011

// Produce a printable presentation of an s-expression
function p(x) {
	var r;
	if (isList(x)) {
		r = '(';
		do {
			r += p(car(x)) + ' ';
			x = cdr(x);
		} while (isList(x));
		if (r.charAt(r.length - 1) === ' ') {
			r = r.substr(0, r.length - 1);
		}
		if (isAtom(x)) {
			r += ' . ' + x;
		}
		return r + ')';
	}
	if (isNull(x)) {
		return '()';
	}
	return x;
}

// Produce an s-expression from a string.
var s = function(x) {

	var tx = /\s*(\(|\)|[^\s()]+|$)/g,
	result;
	tx.lastIndex = 0;
	result = (function list() {
		var head = null,
		neo = null,
		r = tx.exec(x),
		sexp = (r && r[1]) || '',
		tail = null;

		if (sexp !== '(') {
			return sexp;
		}
		while (true) {
			sexp = list();
			if (sexp === '' || sexp === ')') {
				return head;
			}
			neo = [sexp];
			if (tail) {
				tail[1] = neo;
			} else {
				tail = head = neo;
			}
			tail = neo;
		}
	} ());
	s.lastIndex = tx.lastIndex;
	return result;
};

// Produce an object using another object as its prototype.
Object.prototype.begetObject = function() {
	var F = function() {};
	F.prototype = this;
	return new F();
};

var global = this;

// Little Scheme primitives
function add1(n) {
	return + n + 1;
}

function car(s) {
	return s[0];
}

function cdr(s) {
	return s[1];
}

function cons(a, d) {
	return [a, d];
}

function isAtom(a) {
	return typeof a === 'string' || typeof a === 'number' || typeof a === 'boolean';
}

function isBoolean(a) {
	return typeof a === 'boolean';
}

function isEq(s, t) {
	return s === t;
}

function isFunction(a) {
	return typeof a === 'function';
}

function isList(a) {
	return a && typeof a === 'object' && a.constructor === Array;
}

function isNumber(a) {
	return isFinite(a);
}

function isNull(a) {
	return typeof a === 'undefined' || (typeof a === 'object' && ! a);
}

function isUndefined(a) {
	return typeof a === 'undefined';
}

function isZero(s) {
	return s === 0;
}

function sub1(n) {
	return n - 1;
}

