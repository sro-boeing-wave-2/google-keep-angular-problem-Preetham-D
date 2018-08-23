import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { NotesService } from '../notes.service';
import { Notes} from '../Note';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  Note : Notes;
  note : Notes;
  Id: number;

  constructor( private route : ActivatedRoute,
                private services : NotesService,private routes : Router) { }


  ngOnInit() {
    this.getNoteById();
  }
  getNoteById(){
    this.Id = +this.route.snapshot.paramMap.get("id");
    this.services.getNoteById(this.Id).subscribe(data => {this.Note = data; console.log(this.Note);});
  }
  onSubmitEdit(){
    this.services.editNotes(this.Id,this.Note).subscribe(data =>{console.log('success!',data);this.routes.navigate(['/notes']);error => console.error('Error!',error)})
  }

}
