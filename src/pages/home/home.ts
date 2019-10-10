import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { YepePage } from '../yepe/yepe';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  first_number: number;
  second_number: number;
  third_number: number;
  fourt_number: number;

  constructor(public navCtrl: NavController) {

  }

  compute(){
    this.navCtrl.push(YepePage, {"first_number": this.first_number, "second_number": this.second_number, "third_number": this.third_number, "fourt_number": this.fourt_number});
  }

}
