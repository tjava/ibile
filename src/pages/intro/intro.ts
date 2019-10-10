import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  letGo(){
    this.navCtrl.push(HomePage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }

}
