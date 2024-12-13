import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-createtask',
  imports: [FormsModule],
  templateUrl: './createtask.component.html',
  styleUrl: './createtask.component.css'
})
export class CreatetaskComponent {

  taskTodo:string = "";


  submit(event:SubmitEvent){

    event.preventDefault();

    if(!this.taskTodo.trim()){

      alert("Add a task kindly");

      return;

    }

    alert('Task added');
    

    console.log(`A task to be added has been consoled:${this.taskTodo}`)


  }

}
