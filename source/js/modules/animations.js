export default () => {
  // task 1
  function task1() {
    const fadeInElements = [...document.querySelectorAll(`.fadein`)];

    const onIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(`fadein-active`);
        } else {
          entry.target.classList.remove(`fadein-active`);
        }
      });
    };

    const observer = new IntersectionObserver(onIntersect);

    fadeInElements.forEach((item) => {
      observer.observe(item);
    });
  }

  // task 2

  window.addEventListener(`load`, () => {
    document.body.classList.add(`loaded`);
  });
};
