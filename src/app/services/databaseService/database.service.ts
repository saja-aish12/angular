import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IList } from '../listService/list';
import { ITasks } from '../taskService/tasks';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private listUrl = 'http://localhost:8080/api/v1/list';
  private taskUrl = 'http://localhost:8080/api/v1/task';

  constructor(private http: HttpClient) {}

  getLists(): Observable<IList[]> {
    return this.http.get<IList[]>(`${this.listUrl}`);
  }
  addLists(obj: IList): Observable<IList> {
    return this.http.post<IList>(this.listUrl, obj);
  }
  deleteLists(list: IList): Observable<any> {
    return this.http.delete(`${this.listUrl}/${list.id}`);
  }
  updateList(list: IList): Observable<any> {
    return this.http.put<IList>(this.listUrl, list);
  }

  getTasks(listId: number): Observable<ITasks[]> {
    return this.http.get<ITasks[]>(`${this.taskUrl}/${listId}`);
  }
  addTasks(obj: ITasks, listId: number): Observable<any> {
    return this.http.post<ITasks>(`${this.taskUrl}/add/${listId}`, obj);
  }
  deleteTasks(task: ITasks): Observable<any> {
    return this.http.delete(`${this.taskUrl}/delete/${task.id}`);
  }
  updateTask(task: ITasks, listId: number): Observable<any> {
    return this.http.put(`${this.taskUrl}/update/${task.id}`, task);
  }
}
