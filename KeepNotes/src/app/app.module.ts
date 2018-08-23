import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule,MatCardModule,MatGridListModule,MatIconModule} from '@angular/material';
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
import { GetNotesComponent } from './get-notes/get-notes.component';

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
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [NotesService,GetNotesComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
