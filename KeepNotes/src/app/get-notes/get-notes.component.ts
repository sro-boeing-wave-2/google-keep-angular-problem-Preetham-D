import { Component, OnInit } from '@angular/core';
import {NotesService} from '../notes.service';
import {Router} from '@angular/router';
import {MatGridList} from '@angular/material/grid-list';
// import { ETIMEDOUT } from 'constants';
// import { Observable } from '../../../node_modules/rxjs';
//import { Note } from '../INote';

@Component({
  selector: 'app-get-notes',
  templateUrl: './get-notes.component.html',
  styleUrls: ['./get-notes.component.css']
})
export class GetNotesComponent implements OnInit {

  notes: any;
  id:number;
  // edit_note : any;
  constructor(private noteService : NotesService,private router : Router) { }

  onClick(note){
    // this.noteService.editNotes();
    this.router.navigate(['',note.id]);
  }
  // onClickEdit(note){
  //   this.notes = note;
  //   return this.notes;
  // }
  // callEdit():Observable<any>{
  //   return this.onClickEdit(this.notes);
  // }
  getNotes(): void{
    this.noteService.getNotes()
    .subscribe(data => this.notes = data);
  }

  ngOnInit() {
    this.getNotes();
  }

}
