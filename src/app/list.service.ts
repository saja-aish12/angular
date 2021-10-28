import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IList } from './list';
import { LocalStoreService } from './local-store.service';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private _LocalStoreService:LocalStoreService) { }

  public obj :any=[];
  public listid=0;
  getList( ):IList[]{
    return this._LocalStoreService.getLists();
    
  }

  

  addList(itemname:string){
 let newListObject={ id:this.listid++,
    name:itemname,
    creating_date:new Date(),
    lastupdate:new Date()};

  let text = localStorage.getItem("listarray");

  if (text!=null){
     this.obj = JSON.parse(text); } 
    this.obj.push(newListObject);
   const myJSON = JSON.stringify(this.obj);
localStorage.setItem("listarray", myJSON);
  
  

 }

 deleteList(list:IList){


  let text = localStorage.getItem("listarray");

 if (text!=null){ this.obj = JSON.parse(text); }
 
 let equaledList= this.obj.filter((value: IList) => value.id !== list.id);
 this.obj=equaledList;
    const myJSON = JSON.stringify(equaledList);
 localStorage.setItem("listarray", myJSON);
  
  

 }


}
