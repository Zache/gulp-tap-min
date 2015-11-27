var through = require('through2'),
	chalk = require('chalk');

var skipped = [
	'skip',
	'error',
	'type',
	'test',
	'id',
	'name',
	'ok'
];

function format(out) {
	if (arguments.length > 2)
	out.push(Array.prototype.slice.call(arguments, 1).join(' '));
	else
	out.push(arguments[1]);
	out.push('\r\n');
}

function report(out, verbose, test) {
	if (test.ok && !verbose)
		return;

	format(out, '#', test.ok ? chalk.green(test.name) : chalk.red(test.name));

	test.asserts
	.filter(function(assert) {
		return !assert.ok || verbose;
	})
	.forEach(function(assert) {
		format(out, assert.ok ? chalk.green('ok') : chalk.red('not ok') , assert.id, assert.name);
		format(out, '	---');

		Object.keys(assert)
		.filter(function(key) {
			return skipped.indexOf(key) === -1;
		})
		.forEach(function(key) {
			format(out, '	', chalk.gray(key + ':'), assert[key]);
		});

		format(out, '	...');
	});
}

var tapez = function(opts) {
	opts = opts || {};
	var verbose = opts.verbose || false;

	var tests = {};
	var asserts = 0;

	var transform = function(row, encoding, cb) {
		switch (row.type) {
			case 'test':
				row.asserts = [];
				row.ok = true;
				tests[row.id] = row;
				break;
			case 'assert':
				if (!row.ok)
					tests[row.test].ok = false;
				asserts++;
				row.id = asserts;
				tests[row.test].asserts.push(row);
				break;
			case 'end':
				report(this, verbose, tests[row.test]);
				break;
		}

		cb();
	};

	var flush = function(cb) {
		var failed = 0;
		var passed = 0;
		var asserts = 0;

		Object.keys(tests)
		.map(function(key) {
			return tests[key];
		})
		.forEach(function(test) {
			if (test.ok)
				passed++;
			else
				failed++;
			asserts += test.asserts.length;
		});

		if (passed && failed) {
			this.push('\r\n');

			format(this, 1 + '..' + asserts);
			format(this, '# tests ' + passed + failed);
		}

		if (passed)
			format(this, chalk.green('# pass ' + passed));

		if (failed)
			format(this, chalk.red('# fail ' + failed));

		cb();
	};

	return through.obj(transform, flush);
};

module.exports = tapez;