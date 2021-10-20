import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IList } from './list';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }
//public mylist:any=[];
myob:IList={ id:0,
  name:"string name",
  creating_date:"string creat",
  lastupdate:"string update"};
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
      let obj2 =[];// = JSON.parse(text2); 
      obj2.push(this.myob);
     const myJSON = JSON.stringify(obj2);
      localStorage.setItem("myarray", myJSON);
    }

    let text = localStorage.getItem("myarray");
    let obj;
   if (text!=null){ obj = JSON.parse(text); } 
   return obj;
    
  }
 setelement(newobject:any){
  let text = localStorage.getItem("myarray");
  let obj =[];
  if (text!=null){
     obj = JSON.parse(text); } 
    obj.push(newobject);
   const myJSON = JSON.stringify(obj);
localStorage.setItem("testJSON", myJSON);
  
  

 }

 
}
