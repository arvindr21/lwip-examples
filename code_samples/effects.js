var lwip = require('lwip');

// Apply border to an Image
lwip.open('images/portrait.jpg', function(err, image) {
  if (err) throw err;
  var _brdOpts = {
    width: 20,
    color: 'magenta'
  }

  image.border(_brdOpts.width, _brdOpts.color, function(err, brdImg) {
    if (err) throw err;
    brdImg.writeFile('images/effects/portrait_border.jpg', function(err) {
      if (err) throw err;
    });
  });

});

// flip x-axis
lwip.open('images/portrait.jpg', function(err, image) {
  if (err) throw err;
  image.mirror('x', function(err, mirrorImg) {
    if (err) throw err;
    mirrorImg.writeFile('images/effects/portrait_mirror_x.jpg', function(err) {
      if (err) throw err;
    });
  });

});

// flip xy-axis
lwip.open('images/portrait.jpg', function(err, image) {
  if (err) throw err;
  image.mirror('y', function(err, mirrorImg) {
    if (err) throw err;
    mirrorImg.writeFile('images/effects/portrait_mirror_y.jpg', function(err) {
      if (err) throw err;
    });
  });

});

// flip xy-axis
lwip.open('images/portrait.jpg', function(err, image) {
  if (err) throw err;
  image.mirror('xy', function(err, mirrorImg) {
    if (err) throw err;
    mirrorImg.writeFile('images/effects/portrait_mirror_xy.jpg', function(err) {
      if (err) throw err;
    });
  });

});

// rotate image
lwip.open('images/portrait.jpg', function(err, image) {
  if (err) throw err;
  image.rotate(45, 'yellow', function(err, rtdImg) {
    if (err) throw err;
    rtdImg.writeFile('images/effects/portrait_rtd_45.jpg', function(err) {
      if (err) throw err;
    });
  });

});

//scale image
lwip.open('images/portrait.jpg', function(err, image) {
  if (err) throw err;
  image.scale(0.3, function(err, rtdImg) {
    if (err) throw err;
    rtdImg.writeFile('images/effects/portrait_scale.jpg', function(err) {
      if (err) throw err;
    });
  });

});

//rotate and scale images
lwip.open('images/portrait.jpg', function(err, image) {
  if (err) throw err;
  image.batch()
    .rotate(45, 'yellow')
    .scale(0.3)
    .writeFile('images/effects/portrait_rotate_scale.jpg', function(err) {
      if (err) throw err;
    });

});

// compound effects
lwip.open('images/portrait.jpg', function(err, image) {
  if (err) throw err;
  var _base = image;
  var imgWidth = image.width(),
    imgHeight = image.height();

  image.batch()
    .scale(0.75)
    .blur(2)
    .flip('x')
    .rotate(-22, 'white')
    .crop(imgWidth / 2, imgHeight)
    .border(5, 'red')
    .writeFile('images/effects/compound_effect.jpg', function(err) {
      if (err) throw err;
    });

});
