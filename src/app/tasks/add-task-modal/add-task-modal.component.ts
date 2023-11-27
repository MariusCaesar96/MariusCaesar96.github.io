import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Run } from 'src/app/task.service';

@Component({
  selector: 'app-add-task-modal',
  templateUrl: './add-task-modal.component.html',
  styleUrls: ['./add-task-modal.component.css']
})
export class AddTaskModalComponent implements OnInit {
  newRun: Run = {
    title: '',
    description: '',
    duration: '',
    distance: 0,
    thumbnail: '',
    location: '',
    date: new Date(),
  };
  
  constructor(private modalController: ModalController) { }

  ngOnInit(): void {
  }

  addRun() {
    this.modalController.dismiss({
      'dismissed': true,
      data: this.newRun
    });
  }

  dismissModal() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }


}
