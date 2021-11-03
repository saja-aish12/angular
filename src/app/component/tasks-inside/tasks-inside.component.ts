import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ListService } from 'src/app/services/listService/list.service';
import { ITasks } from 'src/app/services/taskService/tasks';
import { TasksService } from 'src/app/services/taskService/tasks.service';


@Component({
  selector: 'app-tasks-inside',
  templateUrl: './tasks-inside.component.html',
  styleUrls: ['./tasks-inside.component.css'],
})
export class TasksInsideComponent implements OnInit {
  public listID: number = -1;
  public task: ITasks[] = [];
  constructor(
    private _taskService: TasksService,
    private _listService:ListService,
    private router: ActivatedRoute,
    private r2: Router
  ) {


  }

  ngOnInit(): void {
    this.router.paramMap.subscribe((p: ParamMap) => {
      let id;
      if ((id = p.get('id')) != null) {
        this.listID = parseInt(id);
        this.task = this._listService.getTask(this.listID); //this.listID
      }
    });
  }
  delete(deleteob: ITasks) {
    this._listService.deleteTask(deleteob,this.listID);
    this.task = this._listService.getTask(this.listID);
  }
  addNewTask(itemname: string) {
    if (itemname.length > 0 && itemname.trim() != '') {
      this._listService.addTask(this.listID, itemname);
      this.task = this._listService.getTask(this.listID);
    }
  }
  back() {
    let selectedid = this.listID ;
    this.r2.navigate(['/list',{id:selectedid}]);
   // this.r2.navigate(['../', { id: selectedid }], { relativeTo: this.router });
  }

  rename(task: ITasks ,newName:string) {
    
    this._listService.renameTask(task ,newName ,this.listID);
    this.task = this._listService.getTask(this.listID);
  }
  changeDiscription(task: ITasks ,newName:string){
    this._listService.changeTaskDiscription(task ,newName,this.listID);
    this.task = this._listService.getTask(this.listID);
  }
}
