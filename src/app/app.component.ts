import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'Home'
    },
    {
      title: 'Carrinho',
      url: '/carrinho',
      icon: 'cart' 
    },
    {
      title: 'Conta',
      url: '/list',
      icon: 'contact'
    },
    {
      title: 'Configuração',
      url: '/configuracao',
      icon: 'settings'
    },
    {
      title: 'Sobre',
      url: '/sobre',
      icon: 'help-circle'
    },
  ];
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
