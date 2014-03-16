/*
 * alien-language-kata
 * https://github.com/sodper/alien-language-kata
 *
 * Copyright (c) 2014 Per Flitig
 * Licensed under the MIT license.
 */

'use strict';

var isMatch = function(data, test) {
	if (data === test) {
		return true;
	}
	return false;
};

exports.match = function(data, tests) {
	var matches = [];

	tests.forEach(function (t, ti, ta) {
		var count = 0;
		data.forEach(function (d, di, da) {
			if (isMatch(d, t)) {
				count++;
			};
		});
		matches[ti] = count
	});

	return matches;
};
