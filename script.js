function preload_image(img) {
  img.src = img.dataset.src;
}

const config_opts = {
  rootMargin: "400px 400px 400px 400px"
};

let observer = new IntersectionObserver(function (entries, self) {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      let elem = entry.target;
      preload_image(elem);
      self.unobserve(elem);
    }
  }
}, config_opts);

let images = document.querySelectorAll("img.demo-image");
for (const image of images) {
  observer.observe(image);
}
