import { Component, OnInit } from '@angular/core';
import {Storage} from '../storage/storage';
import { Router ,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private storage:Storage,private router:Router) { }

  ngOnInit() {
  var currentUser=this.storage.getItem("username"); // get the current storage value identify by the key "username"
  if(currentUser == null){  // checking current user login or not
  this.router.navigate(['/login']);  
   }


   // Automatic redirect to login page After 10 seconds 
  //setTimeout(()=>{
 //this.router.navigate(['/login']);
 // },10000)
       }

logout()
    {
localStorage.clear();   // clear all the local storage variables
this.ngOnInit();
    }
}
