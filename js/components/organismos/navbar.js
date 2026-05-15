import renderNavlink from '../moleculas/navLink.js';

export default function renderNav(links) {
  const nav = document.createElement('nav');
  nav.appendChild(renderNavlink(links));
  return nav;
}
