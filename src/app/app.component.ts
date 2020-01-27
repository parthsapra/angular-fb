import { Component } from "@angular/core";
import { FbUser } from "./fb.model";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  user: FbUser = new FbUser();
  errorID1="";
  userFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.userFormGroup = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['',Validators.required],
      email: ['',Validators.required],
      password: ['',Validators.required],
      day: ['',Validators.required],
      month: ['',Validators.required],
      year:['',Validators.required],
      gender:['',Validators.required]
    })
  }
  submit() {
    console.log(this.userFormGroup.value);
  }
}
