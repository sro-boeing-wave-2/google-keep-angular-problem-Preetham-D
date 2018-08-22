import { Component, OnInit } from '@angular/core';
import { Notes } from '../Note';
import { NotesService } from '../notes.service';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
notesModel : Notes = new Notes(6,"NG", "from angular",  true,  [{label:"hr"}], [{list:"wa"}] );
//notesModel : Notes = new Notes("","",true,[{label:"hel"}],[{list:"hey"}]);
constructor(private noteService : NotesService) { }

onSubmit(){
  this.noteService.postNotes(this.notesModel)
  .subscribe(data => console.log('Success!',data),
              error => console.error('Error!',error));
}
  ngOnInit() {
  }

}
