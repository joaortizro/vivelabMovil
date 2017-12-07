import { Component,OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import {UsersProvider} from '../../providers/users/users';
import {UserPage} from '../user/user'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  
})
export class HomePage {

  private users: any;
  private photos:any;
  private album_ids=[]
  private album=[]
  private user_photo=[]
  constructor(public navCtrl: NavController,
              private usersService:UsersProvider) {

  }

  loadUsers(){
    return this.usersService.getUsers().subscribe((response:Response)=>{
      this.users=response.json();
      //console.log(this.users)
    })
  }
  slice(element,index,array){
    return (index%10==0)
  }
  loadPhotos(){
    return this.usersService.getPhotos().subscribe((response:Response)=>{
      this.photos=response.json();
      for(var photo in this.photos){
        if(this.album_ids.indexOf(this.photos[photo].albumId)==-1){
          this.album_ids.push(this.photos[photo].albumId);
          this.album.push(this.photos[photo].url)
        } 
      }
      this.user_photo=this.album.filter(this.slice)
    })

  }
  ngOnInit() {
    this.loadUsers();
    this.loadPhotos();
    }
  userSelected(user,photo){
    this.navCtrl.push(UserPage,{userInfo:user,userPhoto:photo})
  }
}
