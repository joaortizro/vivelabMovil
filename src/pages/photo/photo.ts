import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PhotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-photo',
  templateUrl: 'photo.html',
})
export class PhotoPage {
  photo:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.photo=navParams.get('photo');
    console.log(this.photo)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhotoPage');
  }

}
