import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private splashScreen: SplashScreen) {
    this.splashScreen.show();

    this.splashScreen.hide();
  }

}
