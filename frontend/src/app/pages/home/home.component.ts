import { Component, OnInit } from '@angular/core';

import { NavbarComponent } from '../../components/navbar/navbar.component';

import { CreatetaskComponent } from '../../components/createtask/createtask.component';

import { TasksComponent } from '../../components/tasks/tasks.component';

import { ITaskResponse } from '../../FModels/todo.response.interface';

import { GettodosService } from './gettodos.service';

import { ITask } from '../../FModels/todo.response.interface';
@Component({
  selector: 'app-home',
  imports: [NavbarComponent, CreatetaskComponent, TasksComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  tasks: ITask[] | null = null;

  constructor(private todosService: GettodosService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.todosService.getTasks().subscribe(
      (response: ITaskResponse) => {
        this.tasks = response.data;
      },

      (error) => {
        console.error(`Error loading tasks`, error);
      },

      () => {
        console.log(`The data has been fetched successfully!`);
      }
    );
  }

  onTasksUpdated(updatedTasks: ITask[]): void {
    this.tasks = updatedTasks;

    console.log(`Tasks updated in the home component:`, this.tasks);
  }

  updateTasks(id: string): void {
    if (this.tasks) {
      this.tasks = this.tasks.filter((task: ITask) => task._id !== id);

      console.log(`Task with ID ${id} removed.`);
    }

    console.log('There is no tasks to update')
  }
}
