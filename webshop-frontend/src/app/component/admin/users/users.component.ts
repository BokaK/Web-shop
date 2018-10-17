import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../model/user';
import {UserService} from '../../../service/user.service';

// TODO form validation - password
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class AdminUsersComponent implements OnInit {

  userForm: FormGroup;
  submited = false;
  users: User[];
  cols: any[];
  ifNewUser = true;
  displayDialog = false;
  deleteUserId: string;
  contactInfoForm: FormGroup;
  errorMsgForRequiredField = 'Полето е задолжително!';
  displayPasswordDialog = false;
  displayNewUserDialog = false;
  constructor(private userService: UserService,
              private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {

    this.cols = [
      { field: 'contactInfo.firstName', header: 'Име' },
      { field: 'contactInfo.lastName', header: 'Презиме' },
      { field: 'contactInfo.company', header: 'Компанија' },
      { field: 'contactInfo.city', header: 'Град' },
      { field: 'contactInfo.country', header: 'Држава' },
      { field: 'contactInfo.phone', header: 'Телефонски број' },
      { field: 'username', header: 'Корисничко име' },
      { field: 'email', header: 'Емаил адреса' }
    ];

    this.contactInfoForm = this.formBuilder.group({
      'id' : '',
      'city' : ['', Validators.required],
      'company' : ['', Validators.required],
      'country' : ['', Validators.required],
      'firstName' : ['', Validators.required],
      'lastName' : ['', Validators.required],
      'phone' : ['', Validators.required]
    });
    this.userForm = this.formBuilder.group({
      'id' : '',
      'email' : ['', Validators.required],
      'enabled' : '',
      'password' : '',
      'type' : '',
      'username' : ['', Validators.required],
      'contactInfo' : this.contactInfoForm
    });

    this.getAllUsers();
  }

  private getAllUsers() {
    this.userService.getAllUsers().subscribe(data => {
      this.users = data;
      console.log(data);
    });
  }

  saveUser() {
    this.submited = true;

    if (!this.userForm.valid) {
      return;
    }

    if (this.ifNewUser) {
      this.showPasswordDialog();
    } else {
      this.userService.updateUser(this.userForm.value).subscribe(data => {
        this.reset();
      });
    }
  }

  writeUser() {
    this.userForm.controls['type'].patchValue('ROLE_USER');
    this.userService.saveUser(this.userForm.value).subscribe(data => {
      this.reset();
    });
  }

  newUser() {
    this.ifNewUser = true;
    this.reset();
    this.showNewUserDialog();
  }

  changeUser(value) {
    this.ifNewUser = false;
    this.userForm.setValue(value);
  }

  showDialog(value) {
    this.displayDialog = true;
    this.deleteUserId = value.id;
  }
  deleteUser() {
    this.userService.deleteUser(this.deleteUserId).subscribe(data => {
      this.reset();
    });
  }

  reset() {
    this.submited = false;
    this.userForm.reset();
    this.contactInfoForm.reset();
    this.ifNewUser = true;
    this.getAllUsers();
  }

  showPasswordDialog() {
    this.displayPasswordDialog = true;
  }

  showNewUserDialog() {
    this.displayNewUserDialog = true;
  }
}
