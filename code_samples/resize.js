var lwip = require('lwip');

lwip.open('images/portrait.jpg', function(err, image) {
  if (err) throw err;
  // lanczos
  image.resize(200, 200, function(err, rzdImg) {
    rzdImg.writeFile('images/resize/lanczos_resize.jpg', function(err) {
      if (err) throw err;
    });
  });
});


lwip.open('images/portrait.jpg', function(err, image) {
  if (err) throw err;
  // nearest-neighbor
  image.resize(200, 200, 'nearest-neighbor', function(err, rzdImg) {
    rzdImg.writeFile('images/resize/nearest-neighbor_resize.jpg', function(err) {
      if (err) throw err;
    });
  });
});
