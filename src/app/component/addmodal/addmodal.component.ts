import { Component, Input, OnInit } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { IList } from 'src/app/services/listService/list';
import { ListService } from 'src/app/services/listService/list.service';
import { TasksInsideComponent } from '../tasks-inside/tasks-inside.component';
import { ToDoListComponent } from '../to-do-list/to-do-list.component';
@Component({
  selector: 'app-addmodal',
  templateUrl: './addmodal.component.html',
  styleUrls: ['./addmodal.component.css']
})
export class AddmodalComponent implements OnInit {
  @Input() modalName: string="";
  @Input()
  listId!: IList;
 
  
  ngOnInit(): void {
  }
  closeResult = '';

  constructor(private modalService: NgbModal ,
    private list:ToDoListComponent ) {}

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
    if (itemname.length > 0 && itemname.trim() != '') {
      this.list._listService.addList(itemname);
      this.list.list = this.list._listService.getList();
      this.list.ngOnInit();
    }
  }
  updateList(newName:string) {
    this.list.rename(this.listId,newName) ;
  }
}
