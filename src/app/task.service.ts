import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// create Run interface?
export interface Run {
  title: string;
  description: string;
  duration: string;
  distance: number;
  thumbnail: string;
  location: string;
  date: Date;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  runs: Run[] = [
    {
      title: 'Morning Run',
      description: 'Run for 30 minutes',
      duration: '00:30:00',
      distance: 5,
      thumbnail: '',
      location: 'Central Park', // Add the location property with a mock location
      date: new Date('2022-01-01')
    },
    // Add more mock running tasks here
    {
      title: 'Afternoon Run',
      description: 'Run for 45 minutes',
      duration: '00:45:00',
      distance: 7,
      thumbnail: '',
      location: 'Beach', // Add the location property with a mock location
      date: new Date('2022-01-01') // Add the date property with a mock date
    },
    {
      title: 'Evening Run',
      description: 'Run for 20 minutes',
      duration: '00:20:00',
      distance: 3,
      thumbnail: '',
      location: 'Neighborhood Park', // Add the location property with a mock location
      date: new Date('2022-01-02') // Add the date property with a mock date
    },
    // ... Repeat this pattern for the remaining tasks
  ]

  private tasks$ = new BehaviorSubject(this.runs)

  constructor() { }

  getTasks() {
    return this.tasks$.asObservable();
  }

  addTask(task: Run) {
    const tasks = this.tasks$.getValue();
    tasks.push(task);
    this.tasks$.next(tasks);
    console.log({ tasks })
  }

  updateTask(task: Run) {
    const tasks = this.tasks$.getValue();
    const index = tasks.findIndex(t => t.title === task.title);
    tasks[index] = task;
    this.tasks$.next(tasks);
  }

  deleteTask(task: Run) {
    const tasks = this.tasks$.getValue();
    const index = tasks.findIndex(t => t.title === task.title);
    tasks.splice(index, 1);
    this.tasks$.next(tasks);
  }

}
