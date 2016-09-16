document.addEventListener("DOMContentLoaded", function(event) {
  Galaxy.makeGalaxy();
});

window.Galaxy = {

  makeGalaxy: function() {
    var the_number_of_stars_the_sky_should_have = 1000,
        the_number_of_stars_in_the_sky_now = 0,
        galaxy_element,
        height = window.outerHeight,
        width = window.outerWidth;

    galaxy_element = document.createElement('div');

    galaxy_element.setAttribute("style",
      "height: " + height + "px;" +
      "width: " + width + "px;" +
      "position: absolute;"
    );

    document.body.insertBefore(galaxy_element, document.getElementById('content'));

    while (the_number_of_stars_in_the_sky_now < the_number_of_stars_the_sky_should_have) {
      var new_star = document.createElement('div'),
          x,
          y;

      new_star.innerText = "*";

      x = Math.random() * width;
      y = Math.random() * height;

      new_star.setAttribute('style',
        "color: white;" +
        "position: absolute;" +
        "font-size: 8px;" +
        "right: " + x + "px;" +
        "top: " + y + "px;"
      );

      galaxy_element.appendChild(new_star);

      the_number_of_stars_in_the_sky_now = the_number_of_stars_in_the_sky_now + 1;
    }
  }

}
