import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-foromovil',
  templateUrl: './foromovil.component.html',
  styleUrls: ['./foromovil.component.css']
})
export class ForomovilComponent implements OnInit {

  investId: any;
  invests: User[];
  invest:User;
  constructor(private activateRoute: ActivatedRoute, private userService: UserService) {
    this.investId= this.activateRoute.snapshot.params['uid'];
    this.invests= this.userService.getInvests();
    this.invest= this.invests.find((record)=>{
      return record.uid == this.investId;
    });
    console.log(this.invest);

  }

  ngOnInit(): void {
  }

}
