import { Component, OnInit } from '@angular/core';
import { User} from '../interfaces/user';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-gestorusuariosmovil',
  templateUrl: './gestorusuariosmovil.component.html',
  styleUrls: ['./gestorusuariosmovil.component.css']
})
export class GestorusuariosmovilComponent implements OnInit {

  invests: User[];
  query: string ='';
  constructor(private userService: UserService ) {
    this.invests = userService.getInvests();
  }

  ngOnInit(): void {
  }

}
