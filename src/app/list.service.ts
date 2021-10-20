import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IList } from './list';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }
//public mylist:any=[];
myob:IList={ id:12,
  name:"string name",
  creating_date:"string creat",
  lastupdate:"string update"};
  public obj :any=[];
  public obj2 :any=[];
  getList():Observable<IList[]>{
  /*  var x = localStorage.getItem("0");
     var s=0;
    while (typeof x !== 'undefined' && x !== null){
      this.mylist.add(x);
      s++;
       x = localStorage.getItem(s+"");
    }
    */
    
   // let text2 = localStorage.getItem("myarray");
    //if (text2!=null)
    {
     // let obj2 =[];// = JSON.parse(text2); 
     // this.obj2.push(this.myob);
     const myJSON = JSON.stringify(this.obj);
      localStorage.setItem("myarray", myJSON);
    }

    let text = localStorage.getItem("myarray");
    let obj;
   if (text!=null){ obj = JSON.parse(text); } 
   return obj;
    
  }
 setelement(itemname:string){
  this.myob={ id:1,
    name:itemname,
    creating_date:"string creat",
    lastupdate:"string update"};

  let text = localStorage.getItem("myarray");

  if (text!=null){
     this.obj = JSON.parse(text); } 
    this.obj.push(this.myob);
   const myJSON = JSON.stringify(this.obj);
localStorage.setItem("testJSON", myJSON);
  
  

 }

 
}
