import { Component, OnInit } from '@angular/core';
import { User} from '../interfaces/user'

@Component({
  selector: 'app-iniciomovil',
  templateUrl: './iniciomovil.component.html',
  styleUrls: ['./iniciomovil.component.css']
})
export class IniciomovilComponent implements OnInit {

  constructor() {

    let myUser: User={
      uid:1,
      name:'tefa',
      age:2,
      email:'ejar@'
    }
    console.log(myUser);
   }

  ngOnInit(): void {
  }

}
