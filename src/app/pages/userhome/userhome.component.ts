import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';




@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  
  constructor(public user: UserService) { }
  
  
  

  ngOnInit(): void {
    
  }

  

}
