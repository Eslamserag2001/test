import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink,  } from '@angular/router';
import { ServService } from '../../services/serv.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  pid !: any
  task!:any
  constructor(private _ActivatedRoute: ActivatedRoute , private ServService:ServService,private Router:Router) { }


  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((p) => {
      this.pid = p.get('id')})
      
      this.task= this.ServService.task[ this.pid]
      
      
  }


  updatetask(){
    this.ServService.updatetask(this.pid,this.task)
    this.Router.navigate(['/home'])
  }

deletetask(){
  this.ServService.delet_task(this.pid)
  this.Router.navigate(['/home'])
}




}
