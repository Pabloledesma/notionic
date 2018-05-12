import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the NoteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NoteProvider {

  private notes = [
    {id:1, title: 'Nota 1', description: 'Description 1'},
    {id:2, title: 'Nota 2', description: 'Description 2'},
    {id:3, title: 'Nota 3', description: 'Description 3'}
  ];

  constructor(public http: HttpClient) {
    
  }

  getNotes(){
    return this.notes;
  }

  getNote(id){
    return this.notes.filter( (e, i) => { return e.id == id })[0];
  }

  createNote(note){
    this.notes.push(note);
  }

  updateNote(note){
    for(let i = 0; i < this.notes.length; i++){
      if(this.notes[i].id == note.id){
        this.notes[i] = note;
      }
    }
  }

  deleteNote(note){
    for(let i = 0; i < this.notes.length; i++){
      if(this.notes[i].id == note.id){
        this.notes.splice(i, 1);
      }
    }
  }

}
