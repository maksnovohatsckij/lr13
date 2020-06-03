import { Component, OnInit, Input } from '@angular/core';
import { MyWorkerType, MyWorker } from 'src/app/shared/worker.model';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-change-worker',
  templateUrl: './change-worker.component.html',
  styleUrls: ['./change-worker.component.css']
})
export class ChangeWorkerComponent implements OnInit {
  myWorkerType = MyWorkerType;
  name: string;
  surname: string;
  type: number;
 
  @Input() worker: MyWorker; 

  constructor() { }

  ngOnInit(): void {
    this.name = this.worker.name;
    this.surname = this.worker.surname;
    this.type = this.worker.type;
  }

  onChangeWorker(dropdown:NgbDropdown) {
    if (this.name && this.surname) {
      dropdown.close();
      this.changeWorker();
    }
  }

  private changeWorker() {
    this.worker.name = this.name;
    this.worker.surname = this.surname;
    this.worker.type = this.type;
  }

}
