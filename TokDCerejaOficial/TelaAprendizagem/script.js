const largura = window.innerWidth;
console.log(largura);

var index = 0;
show_image(index);
function show_image(i) {
  index += i;

  var images = document.getElementsByClassName("image");

  var dots = document.getElementsByClassName("dot");

  for (i = 0; i < images.length; i++) images[i].style.display = "block";

  for (i = 0; i < dots.length; i++)
    dots[i].className = dots[i].className.replace(" active", "");

  for (i = 0; i < dots.length; i++)
    images[i].className = images[i].className.replace(" imgActive", "");

  if (index > images.length - 1) index = 0;

  if (index < 0) index = images.length - 1;

  images[index].style.display = "block";
  images[index].className += " imgActive";
  dots[index].className += " active";
}
