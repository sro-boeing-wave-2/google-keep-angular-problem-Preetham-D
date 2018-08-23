import {Injectable} from '@angular/core'
import { HttpClient } from '@angular/common/http';
import {Http} from '@angular/http';
import {HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from '../../node_modules/rxjs';
import { Notes } from './Note';

const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type':'application/json',
    // 'Authorization':'my-auth-token'
  })
};

@Injectable()

export class NotesService {
  private _url : string = "https://localhost:44377/api/Notes";
  constructor(private http: HttpClient) {}
  getNotes(): Observable<Notes[]>{
    return this.http.get<Notes[]>(this._url);
  }
  getNoteById(id:number):Observable<Notes>{
    return this.http.get<Notes>(this._url+"/"+id)
  }
  postNotes(note: Notes):Observable<Notes>{
    return this.http.post<any>(this._url,note,httpOptions);
  }
  deleteNotes(id:number){
    return this.http.delete(this._url+"/"+id);
  }
  editNotes(id:number,note:Notes){
    return this.http.put(this._url+"/"+id,note);
  }
}
