import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';




@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  
  constructor(public user: UserService,public router:Router) { }
  
  
  

  ngOnInit(): void {
    
  }

  onBack() {
    localStorage.clear();
    this.router.navigate(['/']);
  }

  

}
