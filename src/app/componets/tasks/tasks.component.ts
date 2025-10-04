import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';
import { NgForOf } from "../../../../node_modules/@angular/common";
import { TaskItemComponent } from "../task-item/task-item.component";


@Component({
  selector: 'app-tasks',
  imports: [NgForOf, TaskItemComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnItit(): void {
    this.tasks = this.taskService.getTasks()
  }
}
