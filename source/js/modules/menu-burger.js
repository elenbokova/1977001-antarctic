import {FocusLock} from '../utils/focus-lock.js';
import {ScrollLock} from '../utils/scroll-lock.js';

const focusLock = new FocusLock();
const scrollLock = new ScrollLock();

const header = document.querySelector('[data-id="header"]');
const navigationToggle = header.querySelector('[data-nav-toggle]');
const navigation = header.querySelector('[data-nav]');
const navitaionLinks = header.querySelectorAll('[data-nav-link]');

header.dataset.js = 'true';
navigation.dataset.nav = 'is-hidden';

const openMenu = () => {
  navigation.dataset.nav = 'is-shown';
  focusLock.lock('.header');
  scrollLock.disableScrolling();
  header.dataset.overlay = 'is-shown';
  document.addEventListener('click', onClickOutsideMenu);
};

const closeMenu = () => {
  navigation.dataset.nav = 'is-hidden';
  focusLock.unlock();
  scrollLock.enableScrolling();
  header.dataset.overlay = 'is-hidden';
  document.removeEventListener('click', onClickOutsideMenu);
};

const onClickOutsideMenu = (evt) => {
  const target = evt.target;
  if (!target.closest('.header__container')) {
    closeMenu();
  }
};

navitaionLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (navigation.dataset.nav === 'is-shown') {
      closeMenu();
    }
  });
});

const onBurgerClick = () => {
  if (navigation.dataset.nav === 'is-hidden') {
    openMenu();
  } else {
    closeMenu();
  }
};

const initMenuBurger = () => {
  navigationToggle.addEventListener('click', onBurgerClick);
};

export {initMenuBurger};
