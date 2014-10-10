var lwip = require('lwip');

var lefty, righty;

lwip.open('images/portrait.jpg', function(err, image) {
  var imgWidth = image.width(),
    imgHeight = image.height();

  image.crop(0, 0, (imgWidth / 2) - 1, imgHeight - 1, function(err, cropped) {
    lefty = cropped;
    lefty.writeFile('images/processed/portrait_lefty.jpg', function(err) {
      if (err) throw err;

      // re-opening the same image, coz the `image` is == `cropped`
      // If we do not get a fresh copy, we will be modifing the cropped image :(

      lwip.open('images/portrait.jpg', function(err, image) {
        if (err) throw err;

        var imgWidth = image.width(),
          imgHeight = image.height();

        image.crop(imgWidth / 2, 0, imgWidth - 1, imgHeight - 1, function(err, cropped) {
          if (err) throw err;

          righty = cropped;

          righty.writeFile('images/processed/portrait_righty.jpg', function(err) {
            if (err) throw err;

            lwip.create(imgWidth, imgHeight, 'white', function(err, newImg) {
              if (err) throw err;

              newImg.paste(0, 0, righty, function(err, newImg) {
                if (err) throw err;

                newImg.paste(imgWidth / 2, 0, lefty, function(err, newImg) {
                  if (err) throw err;

                  newImg.border(18, 'gray', function(err, newImg) {
                    if (err) throw err;

                    newImg.writeFile('images/processed/portrait_new.jpg', function(err) {
                      if (err) throw err;
                    }); // write the final output

                  }); // add a border - for fun \O/

                }); // paste lefty to the right part of the new image 

              }); // paste righty to the left part of the new image

            }); // create a blank image

          }); // write righty to file for reference

        }); // righty creation

      }); // re-open the same image

    }); // write lefty to file for reference

  }); // lefty creation
});
