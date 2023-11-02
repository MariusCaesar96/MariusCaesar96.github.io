import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tasks.page.html',
  styleUrls: ['tasks.page.scss']
})
export class TasksPage implements OnInit {
  searchTerm: string = '';
  filteredTasks: any[] = [];

filterTasks() {
  if (this.searchTerm.trim() === '') {
    this.filteredTasks = this.mockTasks;
  } else {
    this.filteredTasks = this.mockTasks.filter((task) => {
      return task.title.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  }
}
  mockTasks = [
    {
      title: 'Run 5km',
      dateDue: '2019-01-01',
      completed: false,
      dateCompleted: null,
      category: 'running'
    },
    {
      title: 'Do 20 pushups',
      dateDue: '2019-01-02',
      completed: false,
      dateCompleted: null,
      category: 'exercise'
    },
    {
      title: 'Read 50 pages of a book',
      dateDue: '2019-01-03',
      completed: false,
      dateCompleted: null,
      category: 'reading'
    },
    {
      title: 'Write a blog post',
      dateDue: '2019-01-04',
      completed: false,
      dateCompleted: null,
      category: 'writing'
    },
    {
      title: 'Cook a new recipe',
      dateDue: '2019-01-05',
      completed: false,
      dateCompleted: null,
      category: 'cooking'
    },
    {
      title: 'Complete project report',
      dateDue: '2022-01-06',
      completed: false,
      dateCompleted: null,
      category: 'work'
    },
    {
      title: 'Buy groceries',
      dateDue: '2022-01-07',
      completed: false,
      dateCompleted: null,
      category: 'personal'
    },
    {
      title: 'Call mom',
      dateDue: '2022-01-08',
      completed: false,
      dateCompleted: null,
      category: 'personal'
    }
  ]

  constructor() {}

  ngOnInit() {
    this.filteredTasks = this.mockTasks;
  }

}
