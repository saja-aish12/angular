import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ListService } from '../list.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  public List:any = [];

  constructor(private _listService:ListService,private router:Router ,private r2 :ActivatedRoute) {

   }
  public slectedid:any;
    ngOnInit(): void {
      this.List=this._listService.getList();
   /*   this.r2.paramMap.subscribe((p:ParamMap)=>
   {let id;
     if((id=p.get('id'))!=null)this.slectedid=parseInt(id)
    }
   );*/
    }
    setelementname(itemname:string){
      this._listService.setelement(itemname);
 this.List=this._listService.getList();
    }
    onselect(d:any){
 this.router.navigate([d.id],{relativeTo:this.r2});  
  }
    isselected(department:any){
  return department.id === this.slectedid;
    }
  }


