import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../user';
import { Router } from '@angular/router'


@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {

  public usersData : User[];

  constructor(private userService: UserService, private router : Router) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((users : any[])=>{
      console.log(users);
      this.usersData = users;
    }, (error)=> {
      alert("Some Error occured " + error);
    });
  }

  deleteUser(user) {
    this.userService.deleteUser(user.id).subscribe((date)=>{
    this.usersData.splice(this.usersData.indexOf(user), 1);
    }, (error)=> {
      console.log(error);
      alert("Error while deleting employee " + error);
    });
  }

  updateUser(user) {
    this.userService.setter(user);
    this.router.navigate(['/op']);
  }

  newUser() {
    let user = new User();
    this.userService.setter(user);
    this.router.navigate(['/op']);
  }

}
