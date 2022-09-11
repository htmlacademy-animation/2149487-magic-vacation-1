export default () => {
  // module 1 task 2

  window.addEventListener(`load`, () => {
    document.body.classList.add(`loaded`);
  });

  // module 2 task 2

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function letterWrap(item, tag, className, ...options) {
    const wrapper = document.createElement(tag);
    wrapper.classList = `letters-animation--letter ${options.join(` `)}`;
    wrapper.innerHTML = item;

    return wrapper;
  }

  function wordWrap(item, tag, ...options) {
    const wrapper = document.createElement(tag);
    wrapper.classList = `letters-animation--word ${options}`;

    item.split(``).forEach((word) => (
      wrapper.appendChild(letterWrap(word, `span`, `letters-animation--letter`, `delay-${getRandomInt(1, 10) * 35}ms`, `duration-${getRandomInt(1, 10) * 100}ms`))
    ));

    return wrapper;
  }

  function stringWrap(item, tag, ...options) {
    const wrapper = document.createElement(tag);
    wrapper.classList = `letters-animation--string ${options}`;

    item.split(` `).forEach((word) => (
      wrapper.appendChild(wordWrap(word, `span`))
    ));

    return wrapper;
  }

  function lettersTextAnimation(text) {
    let innerHTML = text.innerHTML;
    text.innerHTML = ``;

    innerHTML.split(`<br>`).map((word) => (
      text.appendChild(stringWrap(word, `span`))
    ));
  }

  let animationElements = [...document.querySelectorAll(`.letters-animation`)];

  animationElements.forEach((item) => {
    lettersTextAnimation(item);
  });
};


// module 2 task 3

// 3.10

const footerTogglers = [...document.querySelectorAll(`.screen__footer .js-footer-toggler`)];
const screenFooter = [...document.querySelectorAll(`.screen__footer`)];
const screenFooterToggle = () => {
  screenFooter.forEach((footer) => {
    footer.classList.toggle(`active`);
  });
};

footerTogglers.forEach((item) => {
  item.addEventListener(`click`, () => {
    screenFooterToggle();
  });
});

