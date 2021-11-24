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
    this._listService.deleteTask(deleteTask);
    this._listService.getTask(this.listID).subscribe((data : ITasks[])=>{this.task=data});
    
  }
  addNewTask(itemname: string) {
    if (itemname.length > 0 && itemname.trim() != '') {
     // this._listService.addTask(this.listID, itemname);
    //  this.task = this._listService.getTask(this.listID);
    }
  }
  back() {
    let selectedid = this.listID ;
    this.r2.navigate(['/list',{id:selectedid}]);
   // this.r2.navigate(['../', { id: selectedid }], { relativeTo: this.router });
  }

  getDate():any{
   let dat=new Date();
    //console.log("s:"+d+ "new:"+ dat.toISOString().substring(0,10) );
return dat.toISOString().substring(0,10);
  }
  changeState(taskstate:ITasks){
   let newState=taskstate.current_state==="NOT Start"?"in Progress":"Done";
    this._listService.updateTask( taskstate,taskstate.name,taskstate.description,taskstate.start_date,taskstate.end_date,newState,taskstate.list_id);
    this.ngOnInit();
  }
}
