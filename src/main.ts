import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';


const showSidebar = (toggleId: string, sidebarId: string, headerId: string, mainId: string): void => {
  const toggle = document.getElementById(toggleId);
  const sidebar = document.getElementById(sidebarId);
  const header = document.getElementById(headerId);
  const main = document.getElementById(mainId);

  if (toggle && sidebar && header && main) {
    toggle.addEventListener('click', () => {

      sidebar.classList.toggle('show-sidebar');

      header.classList.toggle('left-pd');
      main.classList.toggle('left-pd');
    });
  }
};
showSidebar('header-toggle', 'sidebar', 'header', 'main');


const sidebarLink = document.querySelectorAll<HTMLAnchorElement>('.sidebar__list a');

function linkColor(this: HTMLAnchorElement): void {
  sidebarLink.forEach(l => l.classList.remove('active-link'));
  this.classList.add('active-link');
}

sidebarLink.forEach(l => l.addEventListener('click', linkColor));


const themeButton = document.getElementById('theme-button') as HTMLButtonElement;
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-fill';


const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');


const getCurrentTheme = (): string => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = (): string => themeButton.classList.contains(iconTheme) ? 'ri-moon-clear-fill' : 'ri-sun-fill';


if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'ri-moon-clear-fill' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
