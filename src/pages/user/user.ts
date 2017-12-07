import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserProvider} from '../../providers/user/user' 
import {PhotoPage} from '../photo/photo'

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  user :any;
  userPhoto:any;
  userAlbum:any;
  photosIds=[];
  photos=[]
  selected:boolean = false;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
               private userProvider:UserProvider) {
    this.user=navParams.get('userInfo');
    this.userPhoto=navParams.get('userPhoto')
    
  }
  loadAlbums(){
    this.userProvider.getAlbumsbyId(this.user.id).subscribe((response:Response)=>{
      this.userAlbum=response.json();
      for(var album in this.userAlbum){
        //console.log(album)
        this.photosIds.push(this.userAlbum[album].id)
      }
      //console.log(this.userAlbum)
      //console.log(this.photosIds)
      this.loadPhotos();
    });
  }

  loadPhotos(){
    for(let id of this.photosIds){
    this.userProvider.getPhotosbyAlbumId(id).subscribe((response:Response)=>
      {
        this.photos[id]=response.json();
      });
      }
    console.log(this.photos)
  }
  show(){
    this.selected =  !this.selected
  }
  ngOnInit(){
    this.loadAlbums();
    
  }
  selectedPhoto(objectPhoto){
    this.navCtrl.push(PhotoPage,{photo:objectPhoto})
  }
  ionViewDidLoad() {
    //console.log('ionViewDidLoad UserPage');
    //console.log(this.user)
  }

}
