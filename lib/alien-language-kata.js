/*
 * alien-language-kata
 * https://github.com/sodper/alien-language-kata
 *
 * Copyright (c) 2014 Per Flitig
 * Licensed under the MIT license.
 */

'use strict';

var toArray = function(string) {
	var arr = [];
	for(var i = 0, l = string.length; i<l; i++) {
		arr.push(string[i]);
	}
	return arr;
};

var isMatch = function(data, test) {
	//console.log([data, test]);
	if (data === test) {
		return true;
	}
	test = toArray(test);
	data = toArray(data);
	while (data.length > 0) {
		var tc = test.shift();
		var dc = data.shift();
		//console.log([tc, dc]);
		if (tc === '(') {
			var parenMatchFound = false;
			while (tc !== ')') {
				tc = test.shift();
				if (tc === dc) {
					//console.log('paren match found');
					parenMatchFound = true;
				}
			}
			if (!parenMatchFound) {
				//console.log('paren match not found');
				return false;
			}
		} else if (tc !== dc) {
			//console.log('char mismatch');
			return false;
		}
	}
	return true;
};

exports.match = function(data, tests) {
	var matches = [];

	tests.forEach(function (t, ti) {
		var count = 0;
		data.forEach(function (d) {
			if (isMatch(d, t)) {
				count++;
			}
		});
		matches[ti] = count;
	});

	return matches;
};
