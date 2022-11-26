const header = document.querySelector('[data-id="header"]');
const navigationToggle = header.querySelector('[data-nav-toggle]');
const navigation = header.querySelector('[data-nav]');

header.dataset.js = 'true';
navigation.dataset.nav = 'is-hidden';


const onBurgerClick = () => {
  if (navigation.dataset.nav === 'is-hidden') {
    navigation.dataset.nav = 'is-shown';
  } else {
    navigation.dataset.nav = 'is-hidden';
  }
};

const initMenuBurger = () => {
  navigationToggle.addEventListener('click', onBurgerClick);
};

export {initMenuBurger};
