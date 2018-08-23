import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetNotesComponent } from './get-notes/get-notes.component';
import { EditComponent } from './edit/edit.component';
import { DeleteNoteComponent } from './delete-note/delete-note.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  { path: '', component: CreateComponent },
  { path: 'notes', component: GetNotesComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: ':id', component: DeleteNoteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [GetNotesComponent, EditComponent, DeleteNoteComponent];
// export const routingComponents = [EditComponent];
