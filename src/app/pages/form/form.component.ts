import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public userData = {
    name: '',
    username: '',
    password: '',
    confirmPassword: '',
    language: '',
    mobileNo: '',
  };

  constructor(private user:UserService,private router: Router) { }

  ngOnInit(): void {
  }

  formSubmit(){
    if (
      this.userData.username == '' ||
      this.userData.username == null
    ) {
      Swal.fire('', 'field is empty', 'warning');
      return;
    }
    if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        this.userData.username
      )
    ) {
      Swal.fire('', 'Invalid email address', 'warning');
      return;
    }
    this.user.fetchUser(this.userData.username).subscribe(
      (data) => {
        console.log(data);
        this.user.setUser(data);
        this.router.navigate(['/userDetails'])
      },
      (error) => {
        console.log(error);
      },
    );
  }
}
