import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { IList } from '../list';
import { ListService } from '../list.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent implements OnInit {
  @Input() name: string="";
  public list: IList[] = [];

  constructor(
    private _listService: ListService,
    private router: Router,
    private r2: ActivatedRoute
  ) {}
  public slectedid: any;
  ngOnInit(): void {
    this.list = this._listService.getList();
    this.r2.paramMap.subscribe((p: ParamMap) => {
      let id;
      if ((id = p.get('id')) != null) this.slectedid = parseInt(id);
    });
  }
  addElementname(itemname: string) {
    if (itemname.length > 0 && itemname.trim() != '') {
      this._listService.addList(itemname);
      this.list = this._listService.getList();
    }
  }
  onSelect(d: any) {
    this.router.navigate([d.id], { relativeTo: this.r2 });
  }
  rename(list: IList ,newName:string) {
    
    this._listService.renameList(list ,newName);
    this.list = this._listService.getList();
  }
  delete(list: IList) {
    this._listService.deleteList(list);
    this.list = this._listService.getList();
  }
  isSelected(L: any) {
    return L.id === this.slectedid;
  }
 
}
