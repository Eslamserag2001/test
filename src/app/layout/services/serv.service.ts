import { Injectable } from '@angular/core';
import { task } from '../interface';
import { json } from 'stream/consumers';

@Injectable({
  providedIn: 'root'
})

export class ServService {

  constructor() { 

 let storetaske =localStorage.getItem('task')
 if (storetaske) {
  this.task=JSON.parse(storetaske)
  
 }

  }

  task: task[] =[]
   




  delet_task(index: number) {

    this.task.splice(index, 1)
    this.storetask()
  }

  save_task(title: string, disc: string) {
    this.task.push(
      {
        title: title,
        discription: disc
      }
    )
this.storetask()
  }
  updatetask(id: number, task: any) {
    this.task[id] = task
    this.storetask()
  }


  storetask() {
    localStorage.setItem('task', JSON.stringify(this.task))
  }




}
