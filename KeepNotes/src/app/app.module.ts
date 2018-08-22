import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule , routingComponents}from './app-routing.module'


import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
// import { EditComponent } from './edit/edit.component';
// import { GetNotesComponent } from './get-notes/get-notes.component';
import { DeleteNoteComponent } from './delete-note/delete-note.component';
import { NotesService } from './notes.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,

    CreateComponent,
    // EditComponent,
    // GetNotesComponent,
    DeleteNoteComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
