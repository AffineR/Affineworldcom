import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConnecttoIBMService } from '../Service/connectto-ibm.service';
import { FireserviceService } from '../Service/fireservice.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  rForm: FormGroup;

  images=[];

  catall:any;

  imagedata:any;

  spinne:any;

  user:any;

  modelidd:any;

  constructor(private fb: FormBuilder, private router:Router,private service:ConnecttoIBMService,
    private fireservice: FireserviceService) { }

  ngOnInit()
  {
    var user=localStorage.getItem('user');
    this.user=JSON.parse(user);
    // console.log(this.user)

    this.rForm=this.fb.group(
      {
        "id":this.user.email,
        "email": this.user.email,
        "firstName": this.user.firstName,
        "lastName": this.user.lastName,
        "name": this.user.name,
        "photoUrl": this.user.photoUrl,
        "provider": this.user.provider,
        "title":[null,Validators.required],
        "paragraph":[null,Validators.required],
        "image":[null,Validators.required],
        "pdesc": this.fb.array([this.adddesc()]),
      }
    );
  }

  adddesc() {
    return this.fb.group({
      description: [null, Validators.required],
    });
  }

  addimages() {
    return this.fb.group({
      anyshopproductsimagesvalue: [null, Validators.required],
    });
  }

  addAddress1() {
    this.pdesc.push(this.adddesc());
  }
  removeAddress1(index) {
    this.pdesc.removeAt(index);
  }

  get pdesc() {
    return <FormArray>this.rForm.get('pdesc');
  }

  selectfile(event)
  {
    if(event.target.files[0] && event.target.files[0].size < 256000)
    {
      var reader=new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload=(event:any)=>
      {
        this.imagedata=event.target.result;
      }
    }
    else{
      alert("Size is too large");
    }
  }

  addpost(data)
  {
    this.rForm.value.image=this.imagedata;
    // console.log(this.rForm.value);
    this.fireservice.savedata(this.rForm.value);
    // this.service.savepost(this.rForm.value).subscribe((Response)=>
    // {
    //   console.log(Response);
    //   this.rForm.reset();
    // })
  }

  getrandomdata()
  {
    return Math.floor(Math.random() * (99999999999 - 10000000000)) + 10000000000;
  }


}
