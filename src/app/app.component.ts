import {Component, Directive} from '@angular/core';
import {Account} from './account/account.model';
import {AccountsList} from './account/accounts_list.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls:['app/app.component.css'],
})

@Directive({
  selector:'[AccountsList]'
})

export class AppCompnent {

  private _nextId = 3
  private createAcc(titleEl:any, descEl:any, balEl:any){
    this._accounts.push(new Account(this._nextId, titleEl.value, descEl.value,balEl.value))
    this._selected.push(false)
    this._nextId++

    titleEl.value = ""
    descEl.value = ""
    balEl.value = 0
  }


}