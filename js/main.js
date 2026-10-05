'use strict';

// Mobile navigation: native anchors, Escape and predictable focus.
const toggle = document.querySelector('.burger');
const navigation = document.querySelector('#navigation');
function closeNavigation(returnFocus = false) {
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Открыть меню');
  navigation.classList.remove('open');
  if (returnFocus) toggle.focus();
}
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
  navigation.classList.toggle('open', open);
});
navigation.addEventListener('click', event => {
  if (event.target.closest('a')) closeNavigation();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') closeNavigation(true);
});
document.addEventListener('click', event => {
  if (!event.target.closest('.header')) closeNavigation();
});
document.querySelector('.header').addEventListener('focusout', event => {
  if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget)) closeNavigation();
});
matchMedia('(min-width: 651px)').addEventListener('change', () => closeNavigation());

// Menu tabs follow the ARIA automatic activation keyboard pattern.
const tabs = [...document.querySelectorAll('[role="tab"]')];
function selectTab(tab) {
  tabs.forEach(item => {
    const active = item === tab;
    item.setAttribute('aria-selected', String(active));
    item.tabIndex = active ? 0 : -1;
    document.getElementById(item.getAttribute('aria-controls')).hidden = !active;
  });
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectTab(tab));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next === undefined) return;
    event.preventDefault();
    selectTab(tabs[next]);
    tabs[next].focus();
    tabs[next].scrollIntoView({block: 'nearest', inline: 'nearest', behavior: 'instant'});
  });
});

// The demo map reports its status without navigating or sending requests.
document.querySelector('.map-button').addEventListener('click', () => {
  document.querySelector('#map-status').textContent = 'В демонстрационной версии реальная локация не подключена.';
});
