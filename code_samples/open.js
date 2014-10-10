var lwip = require('lwip');
var fs = require('fs');

// readind a image file
lwip.open('images/portrait.jpg', function(err, image) {
  if (err) throw err;
});

// reading a image from buffer
var fs = require('fs');
fs.readFile('images/portrait.jpg', function(err, buffer) {
  lwip.open(buffer, 'jpg', function(err, image) {
    if (err) throw err;
  });
});
