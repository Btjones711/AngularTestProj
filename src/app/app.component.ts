import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styles: ['.blue-bg{background-color:blue;}']
})

export class AppComponent  { 
  name = 'Angular';
  private username:string = "Test"
  private currentUser:User = { username: "Test", email: "test@test.com" }
  
  private disabledInput:boolean = false

  private isDisabled():boolean {
    return this.disabledInput
  }

  private isBlueBg:boolean = true
  private bgColor:string = 'red'

  private getUsername():string {
    return this.currentUser.username
  }
}

interface User {
  username:string,
  email:string
}