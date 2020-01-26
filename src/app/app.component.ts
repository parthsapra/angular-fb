import { Component } from '@angular/core';
import{FbUser} from './fb.model';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  user:FbUser = new FbUser();
  submit(){
    console.log(this.user);
  }
}
