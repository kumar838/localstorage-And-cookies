import { Component,OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
Acceskey=this.cookies.get("lastname")
constructor(private activatedRoute: ActivatedRoute,private cookies:CookieService ,private router:Router){

console.log("Cookie Value=" + this.Acceskey);

if(this.Acceskey=="" || this.Acceskey==undefined)
{
  console.log(this.Acceskey)
 this.router.navigate(['/login']);
 //window.location.href="http://localhost:5000/login";
}


}
ngOnInit(){

}

  title = 'app';

}
