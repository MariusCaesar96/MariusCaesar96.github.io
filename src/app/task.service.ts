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
      location: 'Central Park',
      date: new Date('2022-01-01')
    },
    {
      title: 'Afternoon Run',
      description: 'Run for 45 minutes',
      duration: '00:45:00',
      distance: 7,
      thumbnail: '',
      location: 'Beach',
      date: new Date('2022-01-01')
    },
    {
      title: 'Evening Run',
      description: 'Run for 20 minutes',
      duration: '00:20:00',
      distance: 3,
      thumbnail: '',
      location: 'Neighborhood Park',
      date: new Date('2022-01-02')
    },
    // Add 5 more mock running tasks here
    {
      title: 'Trail Run',
      description: 'Run for 1 hour',
      duration: '01:00:00',
      distance: 10,
      thumbnail: '',
      location: 'Mountain Trail',
      date: new Date('2022-01-03')
    },
    {
      title: 'Night Run',
      description: 'Run for 40 minutes',
      duration: '00:40:00',
      distance: 6,
      thumbnail: '',
      location: 'City Streets',
      date: new Date('2022-01-04')
    },
    {
      title: 'Park Run',
      description: 'Run for 25 minutes',
      duration: '00:25:00',
      distance: 4,
      thumbnail: '',
      location: 'Local Park',
      date: new Date('2022-01-05')
    },
    {
      title: 'Long Run',
      description: 'Run for 2 hours',
      duration: '02:00:00',
      distance: 15,
      thumbnail: '',
      location: 'Country Road',
      date: new Date('2022-01-06')
    },
    {
      title: 'Interval Run',
      description: 'Run for 35 minutes',
      duration: '00:35:00',
      distance: 5.5,
      thumbnail: '',
      location: 'Track',
      date: new Date('2022-01-07')
    }
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

  filterTasks(searchTerm: string) {
    const tasks = this.tasks$.getValue();
    if (searchTerm === '') {
      return this.tasks$.asObservable();
    } else {
      const filteredTasks = tasks.filter(task => {
        return task.title.toLowerCase().includes(searchTerm.toLowerCase());
      })
      return new BehaviorSubject(filteredTasks);
    }
  }
}
