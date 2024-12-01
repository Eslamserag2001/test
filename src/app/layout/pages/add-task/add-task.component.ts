import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ServService } from '../../services/serv.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  constructor(private ServService: ServService, private Router: Router) { }

  save_task(title: string, disc: string) {

    this.ServService.save_task(title, disc)

    this.Router.navigate(['/home'])

  }








}
