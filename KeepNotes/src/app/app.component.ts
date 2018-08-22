import { Component } from '@angular/core';
import { Notes } from './Note';
//import{userForm} from './create/create.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'KeepNotes';
  // notesModel = new Notes("NG","from angular",  true,  [{label:"hr"}], [{list:"wa"}] );
  // onSubmit() {
  //   console.log(this.userForm.value)
  // }
}
