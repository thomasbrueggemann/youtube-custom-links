var cheerio = require("cheerio");
var request = require("request");

module.exports = {

	// DOWNLOAD
	download: function(channel, callback) {

		var options = {
			"url": "https://www.youtube.com/channel/" + channel,
			"headers": {
				"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.109 Safari/537.36"
			}
		};

		// trigger the request
		request(options, function(error, response, body) {

			// check if a response is available at all
			if(!response) {
				return callback(500, null);
			}

			// check the response code
			if (!error && response.statusCode === 200) {

				// all is clear!
				return callback(response.statusCode, body);
			}

			return callback(response.statusCode, null);
		});
	},

	// CUSTOM LINKS
	customLinks: function(channel, callback) {

		if (channel.length < 20) {
			return callback({
				"error": "not a valid channel id"
			});
		}

		// download channel page
		module.exports.download(channel, function(statusCode, body) {

			if (statusCode === 200 && body) {

				var results = [];
				$ = cheerio.load(body);

				$(".channel-links-item").each(function(i, elem) {

					var a = $(this).find("a");
					results.push({
						"url": a.attr("href"),
						"title": a.attr("title"),
						"icon": a.find(".about-channel-link-favicon").attr("src")
					});
				});

				return callback(null, results);

			} else {
				return callback({
					"error": "could not read channels"
				}, []);
			}
		});
	}
};
