import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  loggedinStatus: any = null;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.loggedInUser.subscribe((res) => {
      this.loggedinStatus = res;
      console.log('this.loggedinStatus : ', this.loggedinStatus);
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = document.querySelector('nav');
    if (window.pageYOffset > 0) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  }

  logout() {
    this.authService.logout();
  }
}
