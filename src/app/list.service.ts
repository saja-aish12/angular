import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IList } from './list';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }
myob:IList={ id:12,
  name:"string name",
  creating_date:new Date(),
  lastupdate:new Date()};
  public obj :any=[];
  public listid=0;
  getList( ):IList[]{
   let text = localStorage.getItem("listarray");
    let obj;
   if (text!=null){ obj = JSON.parse(text); } 
   return obj;
    
  }

  

  addList(itemname:string){
  this.myob={ id:this.listid++,
    name:itemname,
    creating_date:new Date(),
    lastupdate:new Date()};

  let text = localStorage.getItem("listarray");

  if (text!=null){
     this.obj = JSON.parse(text); } 
    this.obj.push(this.myob);
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
