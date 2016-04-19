# YouTube Custom Links  [![Build Status](https://travis-ci.org/thomasbrueggemann/youtube-custom-links.svg?branch=master)](https://travis-ci.org/thomasbrueggemann/youtube-custom-links.js) [![npm](https://img.shields.io/badge/npm-1.0.1-blue.svg)](https://www.npmjs.com/package/youtube-custom-links)
In addition to the YouTube Data API, it extracts the customs links of a youtube channel

## Install

`npm install youtube-custom-links`

## Usage

```javascript
var youtube = require("youtube-custom-links");

var channelId = "UCZbZeC2OfdVMwm9AR_zu0_g";
youtube.customLinks(channelId, function(err, links) {
	console.log(links);

	/*
	[ { url: 'https://www.facebook.com/twoaboardtuuli/',
    title: 'Facebook',
    icon: '//s2.googleusercontent.com/s2/favicons?feature=youtube_channel&domain_url=https%3A%2F%2Fwww.facebook.com%2Ftwoaboardtuuli%2F' },
  { url: 'https://twitter.com/twoaboardtuuli',
    title: 'Twitter',
    icon: '//s2.googleusercontent.com/s2/favicons?feature=youtube_channel&domain_url=https%3A%2F%2Ftwitter.com%2Ftwoaboardtuuli' },
  { url: 'https://instagram.com/twoaboardtuuli',
    title: 'Instagram',
    icon: '//s2.googleusercontent.com/s2/favicons?feature=youtube_channel&domain_url=https%3A%2F%2Finstagram.com%2Ftwoaboardtuuli' },
  { url: 'http://two-aboard-tuuli.com',
    title: 'Website',
    icon: '//s2.googleusercontent.com/s2/favicons?feature=youtube_channel&domain_url=http%3A%2F%2Ftwo-aboard-tuuli.com' } ]
	*/
});
```