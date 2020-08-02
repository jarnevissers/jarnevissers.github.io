// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
const tooltip = document.querySelectorAll('.try-me');
const body = document.body;
const theme = localStorage.getItem('theme');
const check_box = document.getElementById('check_box');

if (theme){
  body.classList.add(theme)
}

check_box.checked = theme === 'dark';


Element.prototype.remove = function() {
  this.parentElement.removeChild(this);
};
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
  for(var i = this.length - 1; i >= 0; i--) {
    if(this[i] && this[i].parentElement) {
      this[i].parentElement.removeChild(this[i]);
    }
  }
};

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  tooltip.remove();
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
}
function delete_tooltip() {
  tooltip.remove();
}
function toggle() {
  if (body.className === 'light') {
    body.classList.replace('light', 'dark');
    localStorage.setItem('theme', 'dark');
  }else{
    body.classList.replace('dark', 'light');
    localStorage.setItem('theme', 'light');
  }
}
