import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './shared/services/auth.service';
import {User} from './user.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {
    this.authService.currentUser.subscribe(x => this.currentUser = x);
  }

  public toggleFlag = false;
  title = 'MyManga';

  // tslint:disable-next-line:new-parens
  currentUser: User = new User;

  imgPath = 'assets/sun.png';
  sunPath = 'assets/sun.png';
  moonPath = 'assets/moon.png';

  imgIconPath = 'assets/profileIcon.png';
  narutoBlackPath = 'assets/profileIcon.png';
  narutoWhitePath = 'assets/profileIconDark.png';

  imgPencilPath = 'assets/pencil.png';
  imgLogoutPath = 'assets/logout.png';


  status = false;

  logout(id: number): void {
    this.authService.logout(id);
    this.router.navigate(['/login']);
  }


  changeStyle(): void {
    const body = document.body;
    body.classList.toggle('dark-mode');

    const nav: any = document.querySelector('.navbar');
    nav.classList.toggle('nav-dark-mode');

    this.status = !this.status;

    if (this.status === true) {
      this.imgPath = this.moonPath;
      this.imgIconPath = this.narutoWhitePath;

    } else {
      this.imgPath = this.sunPath;
      this.imgIconPath = this.narutoBlackPath;

    }

  }
}
