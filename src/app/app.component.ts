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

  private hideEmail:boolean = true

  private isBlueBg:boolean = true
  private bgColor:string = 'red'
  private toggle() {
    this.hideEmail = !this.hideEmail
  }

  private changeMail(newMail:string){
    this.currentUser.email = newMail
  }

  private keyPress(event:KeyboardEvent){
    if(event.keyCode == 13){
      var inputElement = <HTMLInputElement>event.target
      this.changeMail(inputElement.value)
    }
  }

  private getUsername():string {
    return this.currentUser.username
  }

  private users:Array<User> = [
    { username: "User1", email:"user1@ex.com" },
    { username: "User2", email:"user2@ex.com" },
    { username: "User3", email:"user3@ex.com" },
    { username: "User4", email:"user4@ex.com" }
  ]
}

interface User {
  username:string,
  email:string
}