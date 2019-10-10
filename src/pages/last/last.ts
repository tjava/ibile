import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-last',
  templateUrl: 'last.html',
})
export class LastPage {

  show_house16: number = this.navParams.get("show_house16");

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewController: ViewController) {
  }

  close(){
    this.viewController.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LastPage');
  }

}
