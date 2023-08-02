import { Component } from '@angular/core';
import { Sub } from '../models/sub';
import { SubscribersService } from '../services/subscribers.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css'],
})
export class SubscriptionFormComponent {

  isEmailError:any = false
  isSubsceribed:any = false
  constructor(private subService:SubscribersService,private afs:AngularFirestore) {}

  onSubmit(formVal:any){
    const subData:Sub = {
      name:formVal.name,
      email:formVal.email
    }

    // this.subService.addSubs(subData)
    // formVal.reset()

    this.subService.checkSubs(subData.email).subscribe(val=>{
      console.log(val);
      if(val.empty){
        this.subService.addSubs(subData);
        this.isSubsceribed = true
        this.isEmailError = false
      }else{
        console.log('Email Address is Already in use');
        this.isEmailError = true
      }

    })

  }
}
