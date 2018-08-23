import { Component, OnInit } from '@angular/core';
import { Notes } from '../Note';
import { NotesService } from '../notes.service';
import { FormArray } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
notesModel : Notes = new Notes(0,"NG", "from angular",  true,  [{label:"hr"}], [{list:"wa"}] );
//notesModel : Notes = new Notes("","",true,[{label:"hel"}],[{list:"hey"}]);
constructor(private noteService : NotesService,
private route : Router) { }

onSubmit(){
  this.noteService.postNotes(this.notesModel)
  .subscribe(data => {console.log('Success!',data); this.route.navigate(['/notes'])},
              error => console.error('Error!',error));
}
  ngOnInit() {
  }

}
