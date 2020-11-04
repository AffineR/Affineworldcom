import { Component, OnInit } from '@angular/core';
import { GetallFAQService } from "../Service/getall-faq.service";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent implements OnInit 
{

  FAQ:any;

  check:boolean;
  
  id:any;

  constructor(private service:GetallFAQService) { }

  ngOnInit()
  {
    this.id=null;
    this.check=false;
    this.FAQ=this.service.getallservice();
    console.log(this.FAQ);
  }

  show(i)
  {
    this.check=true;
    this.id=i;
  }

}
