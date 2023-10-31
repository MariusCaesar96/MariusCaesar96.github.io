import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage {

  recentRuns = [
    {
      img: 'assets/img/runs/1.jpg',
      distance: '5.2',
      time: '00:32:00',
      name: 'Morning Run'
    },
    {
      img: 'assets/img/runs/2.jpg',
      distance: '3.8',
      time: '00:22:30',
      name: 'Afternoon Run'
    },
    {
      img: 'assets/img/runs/3.jpg',
      distance: '6.1',
      time: '00:45:00',
      name: 'Evening Run'
    },
    {
      img: 'assets/img/runs/4.jpg',
      distance: '4.5',
      time: '00:30:00',
      name: 'Night Run'
    },
    {
      img: 'assets/img/runs/5.jpg',
      distance: '5.0',
      time: '00:35:00',
      name: 'Early Morning Run'
    }
  ]

  constructor() {}

}
