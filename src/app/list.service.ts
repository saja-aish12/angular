import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IList } from './list';
import { LocalStoreService } from './local-store.service';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor(private _LocalStoreService: LocalStoreService) {}

  public obj: any = [];
  public listid = 0;
  getList(): IList[] {
    return this._LocalStoreService.getLists();
  }

  addList(itemname: string) {
    let newListObject = {
      id: this.listid++,
      name: itemname,
      creating_date: new Date(),
      lastupdate: new Date(),
    };

    this._LocalStoreService.addLists(newListObject);
  }

  deleteList(list: IList) {
    this._LocalStoreService.deleteLists(list);
  }

  renameList(list: IList, newName: string) {
    let updateListName = {
      id: list.id,
      name: newName,
      creating_date: list.creating_date,
      lastupdate: new Date(),
    };
    this._LocalStoreService.updateList(updateListName);
  }
}
