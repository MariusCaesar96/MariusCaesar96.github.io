import { Component, OnInit } from '@angular/core';
import { Run, TaskService } from '../task.service';
import { listStagger } from '../animations/animations';

@Component({
  selector: 'app-tab1',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
  animations: [ listStagger ]
})
export class ProfilePage implements OnInit {
  runs: Run[] = [];

  constructor(private tasksService: TaskService) {}

  ngOnInit(): void {
    this.tasksService.getTasks().subscribe(tasks => {
      this.runs = tasks;
    });
  }

}
