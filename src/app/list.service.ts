import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IList } from './list';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }
//public mylist:any=[];
public date =new Date();
myob:IList={ id:12,
  name:"string name",
  creating_date:this.date,
  lastupdate:this.date};
  public obj :any=[];
  public listid=0;
  getList( ):Observable<IList[]>{
   let text = localStorage.getItem("listarray");
    let obj;
   if (text!=null){ obj = JSON.parse(text); } 
   return obj;
    
  }

  

  setList(itemname:string){
  this.myob={ id:this.listid++,
    name:itemname,
    creating_date:this.date,
    lastupdate:this.date};

  let text = localStorage.getItem("listarray");

  if (text!=null){
     this.obj = JSON.parse(text); } 
    this.obj.push(this.myob);
   const myJSON = JSON.stringify(this.obj);
localStorage.setItem("listarray", myJSON);
  
  

 }

 deletelist(delte_ob:IList){


  let text = localStorage.getItem("listarray");

  let obj;
 if (text!=null){ obj = JSON.parse(text); }
 let index=this.obj.indexOf(delte_ob); 
 this.obj.splice(index,1);
 const myJSON = JSON.stringify(this.obj);
 localStorage.setItem("listarray", myJSON);
  
  

 }


}
