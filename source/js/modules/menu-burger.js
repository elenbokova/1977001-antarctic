import {FocusLock} from '../utils/focus-lock.js';
import {ScrollLock} from '../utils/scroll-lock.js';

const focusLock = new FocusLock();
const scrollLock = new ScrollLock();

const header = document.querySelector('[data-id="header"]');
const navigationToggle = header.querySelector('[data-nav-toggle]');
const navigation = header.querySelector('[data-nav]');

header.dataset.js = 'true';
navigation.dataset.nav = 'is-hidden';


const onBurgerClick = () => {
  if (navigation.dataset.nav === 'is-hidden') {
    navigation.dataset.nav = 'is-shown';
    focusLock.lock('.header');
    scrollLock.disableScrolling();
  } else {
    navigation.dataset.nav = 'is-hidden';
    focusLock.unlock();
    scrollLock.enableScrolling();
  }
};

const initMenuBurger = () => {
  navigationToggle.addEventListener('click', onBurgerClick);
};

export {initMenuBurger};
