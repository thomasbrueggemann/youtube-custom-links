'use strict';

var ais = require("../main");

describe("YouTube Custom Links", function() {

	it("should download the source code with HTTP 200", function(done) {

		ais.download("UCZbZeC2OfdVMwm9AR_zu0_g", function(status, body) {

			status.should.equal(200);
			return done();
		});
	});

	it("should download source code and contain channel-links-items", function(done) {

		ais.download("UCZbZeC2OfdVMwm9AR_zu0_g", function(status, body) {

			status.should.equal(200);
			(body.indexOf("channel-links-item") >= 0).should.equal(true);
			return done();
		});
	});


	it("should download and extract the custom links of a youtube channel", function(done) {

		ais.customLinks("UCZbZeC2OfdVMwm9AR_zu0_g", function(pos, links) {
			console.log(links);
			links.length.should.equal(4);
			return done();
		});
	});
});