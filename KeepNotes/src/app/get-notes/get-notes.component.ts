import { Component, OnInit } from '@angular/core';
import {NotesService} from '../notes.service';
import {Router} from '@angular/router';
//import { Note } from '../INote';

@Component({
  selector: 'app-get-notes',
  templateUrl: './get-notes.component.html',
  styleUrls: ['./get-notes.component.css']
})
export class GetNotesComponent implements OnInit {

  notes: any;
  id:number;
  constructor(private noteService : NotesService,private router : Router) { }

  onClick(note){
    // this.noteService.editNotes();
    this.router.navigate(['',note.id]);
  }

  getNotes(): void{
    this.noteService.getNotes()
    .subscribe(data => this.notes = data);
  }

  ngOnInit() {
    this.getNotes();
  }

}
