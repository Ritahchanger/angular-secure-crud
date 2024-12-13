
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITask } from '../../FModels/todo.response.interface';
import { GettodosService } from '../../pages/home/gettodos.service';

@Component({
  selector: 'app-tasks',
  imports: [CommonModule],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'], 
})
export class TasksComponent implements OnInit {
  @Input() task: ITask = {} as ITask;
  
  @Output() taskDeleted = new EventEmitter<string>(); 

  constructor(private gettodosService: GettodosService) {}

  ngOnInit(): void {}

 
  confirmTodo(): void {
    this.gettodosService.confirmTodo(this.task._id as string).subscribe(
      () => {
        const action = this.task.completed ? 'uncompleted' : 'completed';
        alert(`Task ${action} successfully!`);
        this.task.completed = !this.task.completed; 
      },
      (error) => {
        console.error('Error confirming task:', error);
        alert('Failed to update task status. Please try again.');
      }
    );
  }


  deleteTodo(): void {
    this.gettodosService.deleteTodo(this.task._id as string).subscribe(
      () => {
        
        this.taskDeleted.emit(this.task._id); 
      },
      (error) => {
        console.error('Error deleting task:', error);
        alert('Failed to delete the task. Please try again.');
      }
    );
  }
}
