import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { LastPage } from '../last/last';

@Component({
  selector: 'page-yepe',
  templateUrl: 'yepe.html',
})
export class YepePage {

  house1: any[] = [1, 1, 2, 1];
  house2: any[] = [1, 2, 2, 2];
  house3: any[] = [2, 1, 1, 1];
  house4: any[] = [2, 2, 1, 2];
  house5: any[] = [1, 1, 1, 1];
  house6: any[] = [1, 2, 1, 2];
  house7: any[] = [2, 1, 2, 2];
  house8: any[] = [2, 2, 2, 1];
  house9: any[] = [1, 1, 2, 2];
  house10: any[] = [1, 2, 2, 1];
  house11: any[] = [2, 1, 1, 2];
  house12: any[] = [2, 2, 1, 1];
  house13: any[] = [1, 1, 1, 2];
  house14: any[] = [1, 2, 1, 1];
  house15: any[] = [2, 1, 2, 1];
  house16: any[] = [2, 2, 2, 2];

  sum: number;
  sum1: string;
  sum2: string;
  
  house_1: number = this.navParams.get("first_number");
  house_2: number = this.navParams.get("second_number");
  house_3: number = this.navParams.get("third_number");
  house_4: number = this.navParams.get("fourt_number");
  house_5: any[] = [];
  house_6: any[] = [];
  house_7: any[] = [];
  house_8: any[] = [];
  house_9: any[] = [];
  house_10: any[] = [];
  house_11: any[] = [];
  house_12: any[] = [];
  house_13: any[] = [];
  house_14: any[] = [];
  house_15: any[] = [];
  house_16: any[] = [];

  house_to_add1: any[] = [];
  house_to_add2: any[] = [];
  house_to_add3: any[] = [];
  house_to_add4: any[] = [];

  show_house5: number;
  show_house6: number;
  show_house7: number;
  show_house8: number;
  show_house9: number;
  show_house10: number;
  show_house11: number;
  show_house12: number;
  show_house13: number;
  show_house14: number;
  show_house15: number;
  show_house16: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalController: ModalController) {

    this.house_to_add1 = this.computeHouse1(this.house_1);
    this.house_to_add2 = this.computeHouse2(this.house_2);
    this.house_to_add3 = this.computeHouse3(this.house_3);
    this.house_to_add4 = this.computeHouse4(this.house_4);

    this.house_5[0] = this.house_to_add1[0];
    this.house_5[1] = this.house_to_add2[0];
    this.house_5[2] = this.house_to_add3[0];
    this.house_5[3] = this.house_to_add4[0];

    this.house_6[0] = this.house_to_add1[1];
    this.house_6[1] = this.house_to_add2[1];
    this.house_6[2] = this.house_to_add3[1];
    this.house_6[3] = this.house_to_add4[1];

    this.house_7[0] = this.house_to_add1[2];
    this.house_7[1] = this.house_to_add2[2];
    this.house_7[2] = this.house_to_add3[2];
    this.house_7[3] = this.house_to_add4[2];

    this.house_8[0] = this.house_to_add1[3];
    this.house_8[1] = this.house_to_add2[3];
    this.house_8[2] = this.house_to_add3[3];
    this.house_8[3] = this.house_to_add4[3];

    this.house_9[0] = this.sumHouse(this.house_to_add1[0], this.house_to_add2[0]);
    this.house_9[1] = this.sumHouse(this.house_to_add1[1], this.house_to_add2[1]);
    this.house_9[2] = this.sumHouse(this.house_to_add1[2], this.house_to_add2[2]);
    this.house_9[3] = this.sumHouse(this.house_to_add1[3], this.house_to_add2[3]); 

    this.house_10[0] = this.sumHouse(this.house_to_add3[0], this.house_to_add4[0]);
    this.house_10[1] = this.sumHouse(this.house_to_add3[1], this.house_to_add4[1]);
    this.house_10[2] = this.sumHouse(this.house_to_add3[2], this.house_to_add4[2]);
    this.house_10[3] = this.sumHouse(this.house_to_add3[3], this.house_to_add4[3]);
    
    this.house_11[0] = this.sumHouse(this.house_5[0], this.house_6[0]);
    this.house_11[1] = this.sumHouse(this.house_5[1], this.house_6[1]);
    this.house_11[2] = this.sumHouse(this.house_5[2], this.house_6[2]);
    this.house_11[3] = this.sumHouse(this.house_5[3], this.house_6[3]);

    this.house_12[0] = this.sumHouse(this.house_7[0], this.house_8[0]);
    this.house_12[1] = this.sumHouse(this.house_7[1], this.house_8[1]);
    this.house_12[2] = this.sumHouse(this.house_7[2], this.house_8[2]);
    this.house_12[3] = this.sumHouse(this.house_7[3], this.house_8[3]);

    this.house_13[0] = this.sumHouse(this.house_9[0], this.house_10[0]);
    this.house_13[1] = this.sumHouse(this.house_9[1], this.house_10[1]);
    this.house_13[2] = this.sumHouse(this.house_9[2], this.house_10[2]);
    this.house_13[3] = this.sumHouse(this.house_9[3], this.house_10[3]);

    this.house_14[0] = this.sumHouse(this.house_11[0], this.house_12[0]);
    this.house_14[1] = this.sumHouse(this.house_11[1], this.house_12[1]);
    this.house_14[2] = this.sumHouse(this.house_11[2], this.house_12[2]);
    this.house_14[3] = this.sumHouse(this.house_11[3], this.house_12[3]);

    this.house_15[0] = this.sumHouse(this.house_13[0], this.house_14[0]);
    this.house_15[1] = this.sumHouse(this.house_13[1], this.house_14[1]);
    this.house_15[2] = this.sumHouse(this.house_13[2], this.house_14[2]);
    this.house_15[3] = this.sumHouse(this.house_13[3], this.house_14[3]);

    this.house_16[0] = this.sumHouse(this.house_to_add1[0], this.house_15[0]);
    this.house_16[1] = this.sumHouse(this.house_to_add1[1], this.house_15[1]);
    this.house_16[2] = this.sumHouse(this.house_to_add1[2], this.house_15[2]);
    this.house_16[3] = this.sumHouse(this.house_to_add1[3], this.house_15[3]);


    this.show_house5 = this.resultArray(this.house_5);
    this.show_house6 = this.resultArray(this.house_6);
    this.show_house7 = this.resultArray(this.house_7);
    this.show_house8 = this.resultArray(this.house_8);
    this.show_house9 = this.resultArray(this.house_9);
    this.show_house10 = this.resultArray(this.house_10);
    this.show_house11 = this.resultArray(this.house_11);
    this.show_house12 = this.resultArray(this.house_12);
    this.show_house13 = this.resultArray(this.house_13);
    this.show_house14 = this.resultArray(this.house_14);
    this.show_house15 = this.resultArray(this.house_15);
    this.show_house16 = this.resultArray(this.house_16);

  }

  sumHouse(sum1: number, sum2: number){

    this.sum = sum1 + sum2;

    if(this.sum == 2) {
      return 2;
    }else if(this.sum == 3) {
      return 1;
    }else if(this.sum == 4) {
      return 2;
    }
  }

  compareArray(array1: any[], array2: any[]){

    if(array1[0] == array2[0] && array1[1] == array2[1] && array1[2] == array2[2] && array1[3] == array2[3]) {
      return "true";
    }else if(this.sum == 3) {
      return "false";
    }
  }

  resultArray(r_house: any[]){

    let result1 = this.compareArray(r_house, this.house1);
    let result2 = this.compareArray(r_house, this.house2);
    let result3 = this.compareArray(r_house, this.house3);
    let result4 = this.compareArray(r_house, this.house4);
    let result5 = this.compareArray(r_house, this.house5);
    let result6 = this.compareArray(r_house, this.house6);
    let result7 = this.compareArray(r_house, this.house7);
    let result8 = this.compareArray(r_house, this.house8);
    let result9 = this.compareArray(r_house, this.house9);
    let result10 = this.compareArray(r_house, this.house10);
    let result11 = this.compareArray(r_house, this.house11);
    let result12 = this.compareArray(r_house, this.house12);
    let result13 = this.compareArray(r_house, this.house13);
    let result14 = this.compareArray(r_house, this.house14);
    let result15 = this.compareArray(r_house, this.house15);
    let result16 = this.compareArray(r_house, this.house16);

    if(result1 == "true") {
      return 1;
    } else if(result2 == "true"){
      return 2;
    }else if(result3 == "true"){
      return 3;
    }else if(result4 == "true"){
      return 4;
    }else if(result5 == "true"){
      return 5;
    }else if(result6 == "true"){
      return 6;
    }else if(result7 == "true"){
      return 7;
    }else if(result8 == "true"){
      return 8;
    }else if(result9 == "true"){
      return 9;
    }else if(result10 == "true"){
      return 10;
    }else if(result11 == "true"){
      return 11;
    }else if(result12 == "true"){
      return 12;
    }else if(result13 == "true"){
      return 13;
    }else if(result14 == "true"){
      return 14;
    }else if(result15 == "true"){
      return 15;
    }else if(result16 == "true"){
      return 16;
    }

  }

  computeHouse1(house_1: number){

    let hos = [];

    if (house_1 == 1) {
      hos = [1, 1, 2, 1];
      return hos;
    } else if (house_1 == 2) {
      hos = [1, 2, 2, 2];
      return hos;
    } else if (house_1 == 3) {
      hos = [2, 1, 1, 1];
      return hos;
    } else if (house_1 == 4) {
      hos = [2, 2, 1, 2];
      return hos;
    } else if (house_1 == 5) {
      hos = [1, 1, 1, 1];
      return hos;
    } else if (house_1 == 6) {
      hos = [1, 2, 1, 2];
      return hos;
    } else if (house_1 == 7) {
      hos = [2, 1, 2, 2];
      return hos;
    } else if (house_1 == 8) {
      hos = [2, 2, 2, 1];
      return hos;
    } else if (house_1 == 9) {
      hos = [1, 1, 2, 2];
      return hos;
    } else if (house_1 == 10) {
      hos = [1, 2, 2, 1];
      return hos;
    } else if (house_1 == 11) {
      hos = [2, 1, 1, 2];
      return hos;
    } else if (house_1 == 12) {
      hos = [2, 2, 1, 1];
      return hos;
    } else if (house_1 == 13) {
      hos = [1, 1, 1, 2];
      return hos;
    } else if (house_1 == 14) {
      hos = [1, 2, 1, 1];
      return hos;
    } else if (house_1 == 15) {
      hos = [2, 1, 2, 1];
      return hos;
    } else if (house_1 == 16) {
      hos = [2, 2, 2, 2];
      return hos;
    }
  }

  computeHouse2(house_2: number){

    let hos = [];

    if (house_2 == 1) {
      hos = [1, 1, 2, 1];
      return hos;
    } else if (house_2 == 2) {
      hos = [1, 2, 2, 2];
      return hos;
    } else if (house_2 == 3) {
      hos = [2, 1, 1, 1];
      return hos;
    } else if (house_2 == 4) {
      hos = [2, 2, 1, 2];
      return hos;
    } else if (house_2 == 5) {
      hos = [1, 1, 1, 1];
      return hos;
    } else if (house_2 == 6) {
      hos = [1, 2, 1, 2];
      return hos;
    } else if (house_2 == 7) {
      hos = [2, 1, 2, 2];
      return hos;
    } else if (house_2 == 8) {
      hos = [2, 2, 2, 1];
      return hos;
    } else if (house_2 == 9) {
      hos = [1, 1, 2, 2];
      return hos;
    } else if (house_2 == 10) {
      hos = [1, 2, 2, 1];
      return hos;
    } else if (house_2 == 11) {
      hos = [2, 1, 1, 2];
      return hos;
    } else if (house_2 == 12) {
      hos = [2, 2, 1, 1];
      return hos;
    } else if (house_2 == 13) {
      hos = [1, 1, 1, 2];
      return hos;
    } else if (house_2 == 14) {
      hos = [1, 2, 1, 1];
      return hos;
    } else if (house_2 == 15) {
      hos = [2, 1, 2, 1];
      return hos;
    } else if (house_2 == 16) {
      hos = [2, 2, 2, 2];
      return hos;
    }
  }

  computeHouse3(house_3: number){

    let hos = [];

    if (house_3 == 1) {
      hos = [1, 1, 2, 1];
      return hos;
    } else if (house_3 == 2) {
      hos = [1, 2, 2, 2];
      return hos;
    } else if (house_3 == 3) {
      hos = [2, 1, 1, 1];
      return hos;
    } else if (house_3 == 4) {
      hos = [2, 2, 1, 2];
      return hos;
    } else if (house_3 == 5) {
      hos = [1, 1, 1, 1];
      return hos;
    } else if (house_3 == 6) {
      hos = [1, 2, 1, 2];
      return hos;
    } else if (house_3 == 7) {
      hos = [2, 1, 2, 2];
      return hos;
    } else if (house_3 == 8) {
      hos = [2, 2, 2, 1];
      return hos;
    } else if (house_3 == 9) {
      hos = [1, 1, 2, 2];
      return hos;
    } else if (house_3 == 10) {
      hos = [1, 2, 2, 1];
      return hos;
    } else if (house_3 == 11) {
      hos = [2, 1, 1, 2];
      return hos;
    } else if (house_3 == 12) {
      hos = [2, 2, 1, 1];
      return hos;
    } else if (house_3 == 13) {
      hos = [1, 1, 1, 2];
      return hos;
    } else if (house_3 == 14) {
      hos = [1, 2, 1, 1];
      return hos;
    } else if (house_3 == 15) {
      hos = [2, 1, 2, 1];
      return hos;
    } else if (house_3 == 16) {
      hos = [2, 2, 2, 2];
      return hos;
    }
  }

  computeHouse4(house_4: number){

    let hos = [];

    if (house_4 == 1) {
      hos = [1, 1, 2, 1];
      return hos;
    } else if (house_4 == 2) {
      hos = [1, 2, 2, 2];
      return hos;
    } else if (house_4 == 3) {
      hos = [2, 1, 1, 1];
      return hos;
    } else if (house_4 == 4) {
      hos = [2, 2, 1, 2];
      return hos;
    } else if (house_4 == 5) {
      hos = [1, 1, 1, 1];
      return hos;
    } else if (house_4 == 6) {
      hos = [1, 2, 1, 2];
      return hos;
    } else if (house_4 == 7) {
      hos = [2, 1, 2, 2];
      return hos;
    } else if (house_4 == 8) {
      hos = [2, 2, 2, 1];
      return hos;
    } else if (house_4 == 9) {
      hos = [1, 1, 2, 2];
      return hos;
    } else if (house_4 == 10) {
      hos = [1, 2, 2, 1];
      return hos;
    } else if (house_4 == 11) {
      hos = [2, 1, 1, 2];
      return hos;
    } else if (house_4 == 12) {
      hos = [2, 2, 1, 1];
      return hos;
    } else if (house_4 == 13) {
      hos = [1, 1, 1, 2];
      return hos;
    } else if (house_4 == 14) {
      hos = [1, 2, 1, 1];
      return hos;
    } else if (house_4 == 15) {
      hos = [2, 1, 2, 1];
      return hos;
    } else if (house_4 == 16) {
      hos = [2, 2, 2, 2];
      return hos;
    }
  }

  last(){
    let modal = this.modalController.create(LastPage, {"show_house16" : this.show_house16});

    modal.present();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad YepePage');
  }

}
