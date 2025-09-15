import { Component } from '@angular/core';
import { Authservice } from '../authservice';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  constructor(public auth: Authservice) {}

  logout() {
    this.auth.logout();
  }
}
