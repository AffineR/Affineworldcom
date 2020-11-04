import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
  AmazonLoginProvider,
} from 'angularx-social-login';

@Component({
  selector: 'app-loginwithmail',
  templateUrl: './loginwithmail.component.html',
  styleUrls: ['./loginwithmail.component.css']
})
export class LoginwithmailComponent implements OnInit {

  user: SocialUser;
  email:any;

  messagestatus:boolean;
  message:any;

  constructor(private authService: SocialAuthService,private router:Router) { }

  ngOnInit(): void {
    this.messagestatus=false;
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
    // console.log(this.user);
    localStorage.setItem("user",JSON.stringify(this.user))
    this.router.navigate(['/']);
  }

  login()
  {
    this.message="Username and password is not valid"
    this.message.setTimeout(() => {
      this.messagestatus=true;
    }, 1000);
  }

}
