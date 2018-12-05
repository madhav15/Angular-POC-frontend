import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  public user: User;
  
  constructor(private userService: UserService,  private router : Router) { }

  ngOnInit() {
    this.user = this.userService.getter();
  }

  processForm() {
    if (this.user.id == undefined) {
      this.userService.createUser(this.user).subscribe((user)=> {
        console.log("Success");
        this.router.navigate(["/"]);
      }, (error)=> {
        console.log("Error");
      });
    } else {
      this.userService.updateUser(this.user).subscribe((user)=> {
        console.log("Success");
        this.router.navigate(["/"]);
      }, (error)=> {
        console.log("Error");
      });
    }
  }

}
