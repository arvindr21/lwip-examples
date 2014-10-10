var lwip = require('lwip');

// Crop with dimensions
lwip.open('images/portrait.jpg', function(err, image) {

  var _cropOpt = {
    left: 400,
    top: 200,
    right: 699,
    bottom: 499
  }; // extract the face from the pic

  image.crop(_cropOpt.left, _cropOpt.top, _cropOpt.right, _cropOpt.bottom, function(err, crpdImg) {
    if (err) throw err;
    crpdImg.writeFile('images/crop/dimensions_crop.jpg', function(err) {
      if (err) throw err;
    });
  });

});

// Crop from center
lwip.open('images/portrait.jpg', function(err, image) {

  var _cropOpt = {
    width: 300,
    height: 300
  };

  image.crop(_cropOpt.width, _cropOpt.height, function(err, crpdImg) {
    if (err) throw err;
    crpdImg.writeFile('images/crop/center_crop.jpg', function(err) {
      if (err) throw err;
    });
  });

});
