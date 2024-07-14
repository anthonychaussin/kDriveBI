import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeSwitchService {

  constructor() {
    this.setTheme('dark');
  }

  setTheme(theme: 'light'|'dark') {
    document.body.classList.remove('light');
    document.body.classList.remove('dark');
    document.body.classList.add(theme);
  }
}
