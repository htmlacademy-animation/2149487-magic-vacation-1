export default () => {
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
};
