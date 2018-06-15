import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import {Storage} from '../storage/storage';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})
export class LoginComponent implements OnInit {

  
  public form = {
    email: null,
    password: null
  };

  constructor( private router:Router ,private storage:Storage,private cookieservice:CookieService) { }

      ngOnInit() 
   { 
if(this.storage.getItem("username")!=null){
  this.router.navigate(['/home']);
   }

}
 
onSubmit() {

    if (this.form.email == "kumarphp60@gmail.com" && this.form.password == "kumar@2016")
     {
         this.router.navigate(['/home']);
         var expire = new Date();
         var time = Date.now() + ((3600 * 1000) * 0.01); // current time + 6 hours ///
         expire.setTime(time);
         this.cookieservice.put("lastname", this.form.email , {'expires': expire} )
     }
 else{ 
       alert("Please enter Valid Credentials");
    }

    localStorage.setItem("username",this.form.email );  // setting local storage Item
    //this.storage.setItem("username", this.username);
     }

}
