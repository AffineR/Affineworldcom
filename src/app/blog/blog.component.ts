import { Component, OnInit } from '@angular/core';
import { Blogdata } from '../Class/blogdata';
import { ConnecttoIBMService } from '../Service/connectto-ibm.service';
import { FireserviceService } from '../Service/fireservice.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blog=new Blogdata();

  user:any;
  constructor(private service:ConnecttoIBMService,private fireservice:FireserviceService) { }

  ngOnInit()
  {
    var user=localStorage.getItem('user');
    this.user=JSON.parse(user);
    // this.fireservice.getalldata()

    // this.service.getalldata().subscribe((Response)=>
    // {
    //   console.log(Response);
    //   this.blog=Response;
    //   console.log(this.blog)
    // })
  }

}
