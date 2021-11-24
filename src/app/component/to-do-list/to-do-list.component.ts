import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { IList } from 'src/app/services/listService/list';


import { ListService } from 'src/app/services/listService/list.service';
import { AddmodalComponent } from '../addmodal/addmodal.component';


@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent implements OnInit {
  @Input() name: string="";
  public list: IList[] = [];
public closeResult:string="";
  constructor(
    public _listService: ListService,
    private router: Router,
    private r2: ActivatedRoute,
  ) {}
  public slectedid: any;
  ngOnInit(): void {
     this._listService.getList().subscribe((data : IList[])=>{console.log(data);this.list=data});
    this.r2.paramMap.subscribe((p: ParamMap) => {
      let id;
      if ((id = p.get('id')) != null) this.slectedid = parseInt(id);
    });
  }
 /* addElementname(itemname: string) {
    if (itemname.length > 0 && itemname.trim() != '') {
      this._listService.addList(itemname);
      this.list = this._listService.getList();
    }
  }*/
  onSelect(d: any) {
    this.router.navigate(['list_tasks',d.id]);
    //this.router.navigate([d.id], { relativeTo: this.r2 });
  }
  rename(listUpdate: IList ,newName:string) {
   
    this._listService.renameList(listUpdate ,newName);
    this._listService.getList().subscribe((data : IList[])=>{this.list=data});
   
  //  this.list = this._listService.getList();
  }
  delete(list: IList) {
    this._listService.deleteList(list);
    this._listService.getList().subscribe((data : IList[])=>{this.list=data});
   
   // this.list = this._listService.getList();
  }
  isSelected(L: any) {
    return L.id === this.slectedid;
  }

  
}