import { Component } from '@angular/core';
import { ServService } from '../../services/serv.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(public ServService:ServService){}
  delet_task(index:number){

   this.ServService.delet_task(index)
  }
}
