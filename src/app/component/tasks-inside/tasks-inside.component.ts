import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ListService } from 'src/app/services/listService/list.service';
import { ITasks } from 'src/app/services/taskService/tasks';


@Component({
  selector: 'app-tasks-inside',
  templateUrl: './tasks-inside.component.html',
  styleUrls: ['./tasks-inside.component.css'],
})
export class TasksInsideComponent implements OnInit {
  public listID: number = -1;
  public task: ITasks[] = [];
  constructor(
    public _listService:ListService,
    private router: ActivatedRoute,
    private r2: Router
  ) {


  }

  ngOnInit(): void {
    this.router.paramMap.subscribe((p: ParamMap) => {
      let id;
      if ((id = p.get('id')) != null) {
        this.listID = parseInt(id);
        this._listService.getTask(this.listID).subscribe((data : ITasks[])=>{this.task=data});
     }
    });
  }
  delete(deleteTask: ITasks) {
    console.log(deleteTask);
    this._listService.deleteTask(deleteTask).subscribe((data : ITasks[])=>{this.task=data});
    this._listService.getTask(this.listID).subscribe((data : ITasks[])=>{this.task=data});
    
  }
 
  back() {
    let selectedid = this.listID ;
    this.r2.navigate(['/list',{id:selectedid}]);
  }

  getDate():any{
   let dat=new Date();
return dat.toISOString().substring(0,10);
  }
  changeState(taskstate:ITasks):any{
   let newState=taskstate.current_state==="NOT Start"?"in Progress":"Done";
    this._listService.updateTask( taskstate,taskstate.name,taskstate.description,taskstate.start_date,taskstate.end_date,newState,taskstate.list_id)
    .subscribe((data : ITasks[])=>{this.task=data;
      this.ngOnInit();});
    
  }
}
