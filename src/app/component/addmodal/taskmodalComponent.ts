import { Component, Input, OnInit } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { IList } from 'src/app/services/listService/list';
import { ITasks } from 'src/app/services/taskService/tasks';
import { TasksInsideComponent } from '../tasks-inside/tasks-inside.component';
@Component({
  selector: 'app-taskmodal',
  templateUrl: './addmodal.component.html',
  styleUrls: ['./addmodal.component.css'],
})
export class taskmodalComponent implements OnInit {
  @Input() modalName: string = '';
  @Input()
  id!: IList;
  @Input()
  idT!: ITasks;

  ngOnInit(): void {}
  closeResult = '';

  constructor(
    private modalService: NgbModal,
    private task: TasksInsideComponent
  ) {}

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  addlist(itemname: string) {}
  updateList(list:IList,newName: string) {}

  addTask(name: string, description: string, start_date: any, end_date: any) {
    if (
      name.length > 0 &&
      name.trim() != '' &&
      description.length > 0 &&
      description.trim() != '' &&
      start_date != null &&
      end_date != null &&
      start_date._inputValue < end_date._inputValue
    ) {
      console.log(start_date);

      this.task._listService.addTask(
        this.task.listID,
        name,
        description,
        start_date._inputValue,
        end_date._inputValue
      );
      this.task.ngOnInit();
    }
  }

  updateTask(
    name: string,
    description: string,
    start_date: any,
    end_date: any
  ) {
    this.task._listService.updateTask(
      this.idT,
      name,
      description,
      start_date._inputValue || this.idT.start_date,
      end_date._inputValue || this.idT.end_date,
      this.idT.current_state,
      this.task.listID
    );
    this.task.ngOnInit();
  }
}
