import { Component, Input, OnInit } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ITasks } from 'src/app/services/taskService/tasks';
import { TasksInsideComponent } from '../tasks-inside/tasks-inside.component';
@Component({
  selector: 'app-taskmodal',
  templateUrl: './addmodal.component.html',
  styleUrls: ['./addmodal.component.css']
})
export class taskmodalComponent implements OnInit {
    @Input() modalName: string="";
    @Input()
    id!: ITasks;
   
    
    ngOnInit(): void {
    }
    closeResult = '';
    
    constructor(private modalService: NgbModal ,private task: TasksInsideComponent  ) {
      
    }
  
    open(content:any) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
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
  
    addlist(itemname: string) {
    
    }
    updateList(newName:string) {
     
    }
    
    addTask(itemname: string) {
      if (itemname.length > 0 && itemname.trim() != '') {
        this.task._listService.addTask(this.task.listID, itemname);
        this.task.ngOnInit();
        }
    }
  }