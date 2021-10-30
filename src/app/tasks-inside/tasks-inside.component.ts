import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ITasks } from '../tasks';
import { TasksService } from '../tasks.service';

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
    private router: ActivatedRoute,
    private r2: Router
  ) {}

  ngOnInit(): void {
    this.router.paramMap.subscribe((p: ParamMap) => {
      let id;
      if ((id = p.get('id')) != null) {
        this.listID = parseInt(id);
        this.task = this._taskService.getTask(); //this.listID
      }
    });
  }
  delete(deleteob: ITasks) {
    this._taskService.deleteTask(deleteob);
    this.task = this._taskService.getTask();
  }
  setTaskName(itemname: string) {
    if (itemname.length > 0 && itemname.trim() != '') {
      this._taskService.addTask(this.listID, itemname);
      this.task = this._taskService.getTask();
    }
  }
  back() {
    let selectedid = this.listID ? this.listID : null;
    // this.r2.navigate(['/department',{id:selectedid}]);
    this.r2.navigate(['../', { id: selectedid }], { relativeTo: this.router });
  }

  rename(task: ITasks ,newName:string) {
    
    this._taskService.renameTask(task ,newName);
    this.task = this._taskService.getTask();
  }
  changeDiscription(task: ITasks ,newName:string){
    this._taskService.changeTaskDiscription(task ,newName);
    this.task = this._taskService.getTask();
  }
}
