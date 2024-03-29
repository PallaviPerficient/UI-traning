import { Component } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
// import { StatusBar } from '@ionic-native/status-bar/ngx';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform, private navCtrl: NavController) {

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // this.statusBar.styleDefault();
      // this.splashScreen.hide();
      if (window.localStorage.getItem("empId") == '' || window.localStorage.getItem("empId") == null)

        this.navCtrl.navigateRoot(['./login']);

      else
        this.navCtrl.navigateRoot(['./tabs']);



    });
  }


}
