var origin = 'http://localhost:3000';
var app = require('../app');
var analyser = require('../src/analyser');
import * as request from 'request';
import * as assert from 'assert';
import * as mocha from 'mocha';
import * as http from 'http';
import * as tests from './tests';



describe('App', function () 
{
	describe('Server', function ()
	{
		before(function (done) 
		{
			var server = http.createServer(app);
			server.listen('3000');
			done();
		});
		it('Initializes', function (done)
		{
			request.get(origin, function (err, res)
			{
				if (err) throw err;
				else assert.equal(200, res.statusCode);
				done();
			});
		});
	});
	describe('Analyser', function ()
	{

		describe('Colour modes', function ()
		{
			var cases = tests.expected.colourModes.cases;
			Object.keys(cases).forEach(function (key) 
			{
				var colourMode = new analyser.colourMode(cases[key].RGB);
				it('Case ' + key + ' Converts to HEX', function (done)
				{
					colourMode.toHex(function (HEX) 
					{
						assert.equal(HEX, cases[key].HEX);
						done();
					});
				});
				it('Case ' + key + ' Converts to CMY', function (done)
				{
					colourMode.toCMY(function (CMY) 
					{
						assert.deepEqual(CMY, cases[key].CMY);
						done();
					});
				});
				it('Case ' + key + ' Converts to CMYK', function (done)
				{
					colourMode.toCMYK(function (CMYK) 
					{
						assert.deepEqual(CMYK, cases[key].CMYK);
						done();
					});
				});
				it('Case ' + key + ' Converts to HSL', function (done)
				{
					colourMode.toHSL(function (HSL) 
					{
						assert.deepEqual(HSL, cases[key].HSL);
						done();
					});
				});
			});
		});
	});
	after(function ()
	{
		process.exit(0);
	});
});
