import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import {ActivatedRoute} from '@angular/router';
import { parse } from 'path';

@Component({
  selector: 'app-delete-note',
  templateUrl: './delete-note.component.html',
  styleUrls: ['./delete-note.component.css']
})
export class DeleteNoteComponent implements OnInit {

  id : number;
  constructor(private noteService : NotesService,private router : ActivatedRoute) { }
  // onSubmit(){
  //   this.noteService.deleteNotes(this.id).subscribe(data => console.log('success!',data),
  //                     error => console.error('Error!',error));
  // }
  ngOnInit() {
    console.log(this.id);
    this.id = parseInt(this.router.snapshot.paramMap.get('id'));
    console.log(this.id);
    this.noteService.deleteNotes(this.id).subscribe(data => console.log('success!',data),
                      error => console.error('Error!',error));
  }

}
