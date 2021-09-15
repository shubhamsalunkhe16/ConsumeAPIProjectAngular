import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  public userData = {
    name: '',
    username: '',
    password: '',
    confirmPassword: '',
    language: '',
    mobileNo: '',
    enabled: '',
  };

  constructor(private user: UserService, private router: Router) {}

  ngOnInit(): void {}

  formSubmit() {
    if (this.userData.username == '' || this.userData.username == null) {
      Swal.fire('', 'field is empty', 'warning');
      return;
    }
    if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        this.userData.username
      )
    ) {
      Swal.fire('Invalid email address', 'Please try again', 'warning');
      return;
    }
    this.user.fetchUser(this.userData.username).subscribe(
      (data: any) => {
        console.log(data);
        if (data == null) {
          Swal.fire(
            'User not found',
            'Please insert correct email address',
            'warning'
          );
          return;
        }
        if (!data.enabled) {
          Swal.fire(
            'User is not verified',
            'Please verify your email address',
            'warning'
          );
          return;
        }

        this.user.setUser(data);
        this.router.navigate(['/userDetails']);
      },
      (error) => {
        console.log(error);
        Swal.fire('Something went wrong', error.message, 'error');
      }
    );
  }
}
