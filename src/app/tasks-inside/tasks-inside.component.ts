import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ITasks } from '../tasks';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks-inside',
  templateUrl: './tasks-inside.component.html',
  styleUrls: ['./tasks-inside.component.css']
})
export class TasksInsideComponent implements OnInit {
  public listID:any;
  public task:any = [];
  constructor(private _taskService:TasksService,private router :ActivatedRoute ,private r2 :Router) { }


  ngOnInit(): void {
    this.router.paramMap.subscribe((p:ParamMap)=>
    {let id;
      if((id=p.get('id'))!=null){this.listID=parseInt(id)
        this.task=this._taskService.gettask();//this.listID
      }}
    );
   
  }
  delete(deleteob:ITasks){
    this._taskService.deletetask(deleteob);
this.task=this._taskService.gettask();
  }
  settaskname(itemname:string){
    this._taskService.settask(this.listID,itemname);
this.task=this._taskService.gettask();
  }
  back(){
    let selectedid=this.listID?this.listID:null;
   // this.r2.navigate(['/department',{id:selectedid}]);
   this.r2.navigate(['../',{id:selectedid}],{relativeTo:this.router});
  }

}
