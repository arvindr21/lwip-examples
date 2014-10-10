var lwip = require('lwip');
var fs = require('fs');

// Create a image file
lwip.create(500, 500, 'red', function(err, image) {
  image.writeFile('images/new/new_image.jpg', function(err) {
    if (err) throw err;
  });
});

// Create a image file using buffer
lwip.create(500, 500, 'red', function(err, image) {
  image.toBuffer('jpg', function(err, buffer) {
    fs.writeFile('images/new/buffer_new_output.jpg', buffer, function(err) {
      if (err) throw err;
    });
  });
});
