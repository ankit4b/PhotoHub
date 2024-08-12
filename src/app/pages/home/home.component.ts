import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  activeItem: string = 'Home';

  setActive(item: string) {
    this.activeItem = item;
  }

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    console.log(this.authService.getUser());
  }
}
