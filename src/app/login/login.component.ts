import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
  AmazonLoginProvider,
} from 'angularx-social-login';
import { ConnecttoIBMService } from '../Service/connectto-ibm.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: SocialUser;
  email:any;

  constructor(private authService: SocialAuthService,private router:Router,private service:ConnecttoIBMService) { }

  ngOnInit(): void {
    this.authService.authState.subscribe(user => {
      // console.log(user);
      this.user = user;
      this.email=user.email;
      this.checkloginemail();
    });
  }
  
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  checkloginemail()
  {
    console.log(this.user);
    localStorage.setItem("user",JSON.stringify(this.user))
    this.router.navigate(['/']);
    // this.service.savedata(this.user).subscribe((Response)=>
    // {
    //   console.log(Response);
    // })
  }

}
