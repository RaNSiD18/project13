import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MyWorkerType, MyWorker } from 'src/app/shared/worker.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addform-worker',
  templateUrl: './addform-worker.component.html',
  styleUrls: ['./addform-worker.component.css']
})
export class AddformWorkerComponent implements OnInit {
  myWorkerType = MyWorkerType;
  public mask = ['+','7','(', /[1-9]/, /\d/, /\d/, ')', '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/,'-', /\d/, /\d/];
  workerForm: FormGroup;

  @Output() addWorker = new EventEmitter<MyWorker>();
  @Input() worker: MyWorker;
  
  constructor() { }

  ngOnInit(): void {
    this.workerForm = this.validate();
  }

  onAddWorker(){
    if (this.worker.name != undefined && this.worker.surname != undefined) {
      let worker: MyWorker = {
        name: this.worker.name,
        surname: this.worker.surname,
        type: this.worker.type,
        phone: this.worker.phone,
      }
      if (this.worker.id != undefined)
        worker.id = this.worker.id; 
      this.addWorker.emit(worker);
      this.workerForm = this.validate();
    } else alert('Воу Воу!!! Вы не вели данные работника!!!');
  }
  validate(name = null, surname = null, phone = null, type = 0, id = null) {
    return new FormGroup({
      Name: new FormControl({value: name, disabled: false}, [Validators.required, Validators.pattern('[A-Z,А-Я][a-z,а-я]+')]),

      Surname: new FormControl({value: surname, disabled: false}, [Validators.required, Validators.pattern('[A-Z,А-Я][a-z,а-я]+')]),

      Phone: new FormControl({value: phone, disabled: false}, [Validators.required]),

      Type: new FormControl({value: type, disabled: false}, [Validators.required]),

      Id: new FormControl({value: id, disabled: false})
    })
  }
}
