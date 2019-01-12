import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AddUsers } from '../../store/actions/user.actions';
import { IUser } from '../../models/user.interface';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../../store/state/app.state';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { selectUserList, selectFixedUserList } from '../../store/selectors/user.selector';
import { GetUsers, GetFixedUser } from './../../store/actions/user.actions';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;  
  @Input()
  users: IUser[];  
  copyusers: any;

  @Output()
  userSelected: EventEmitter<number> = new EventEmitter();
  copyusers = this._store.pipe(select(selectUserList));  
  constructor(private _store: Store<IAppState>, private formBuilder: FormBuilder) {
    
  }
  
  ngOnInit() {    
    this.registerForm = this.formBuilder.group({
        name: ['', Validators.required],
        cardnumber: ['', Validators.required],
        cardtype: ['', [Validators.required]], 
    }); 
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      var lastRecordCount = 0;

      this._store.select(state => state).subscribe(data => {
        lastRecordCount = data.users.users.length;
      });

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
      
      this._store.dispatch(new AddUsers({                  
        id: lastRecordCount+1,
        name: this.registerForm.value.name,
        cardNumber: this.registerForm.value.cardnumber,
        cardType: this.registerForm.value.cardtype
      })
    );
  }

  navigateToUser(id: number) {
    this.userSelected.emit(id);
  }

  editUser(id: number) {
    console.log(id);
    this._store.select('id').subscribe(data) => {
      console.log(data); 
    });
  }

}
