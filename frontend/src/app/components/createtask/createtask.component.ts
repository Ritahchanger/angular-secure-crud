import { Component, Output } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { GettodosService } from '../../pages/home/gettodos.service';

import { ITask } from '../../FModels/todo.response.interface';

import { ITaskResponse } from '../../FModels/todo.response.interface';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-createtask',
  imports: [FormsModule],
  templateUrl: './createtask.component.html',
  styleUrl: './createtask.component.css',
})
export class CreatetaskComponent {
  taskTodo: string = '';


  @Output() tasksUpdated = new EventEmitter<ITask[]>();

  constructor(private todosService: GettodosService) {}

  submit(event: SubmitEvent) {
    event.preventDefault();

    if (!this.taskTodo.trim()) {
      alert('Add a task kindly');

      return;
    }

    this.todosService.addTodo(this.taskTodo).subscribe(
      (response) => {
      

        this.taskTodo = '';

        this.todosService.getTasks().subscribe(
          (results: ITaskResponse) => {
            this.tasksUpdated.emit(results.data);
          },

          (error) => {
            console.error(`Error loading tasks`, error);
          }
        );
      },

      (error) => {
        console.error('Error adding task:', error);

        alert('There was an error adding the task. Please try again');
      }
    );
  }
}
