import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { NoteProvider } from '../../providers/note/note';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public notes: any[];

  constructor(public noteProvider: NoteProvider, public navCtrl: NavController) {
   this.notes = noteProvider.getNotes();
  }


  noteSelected(note){
    this.navCtrl.push(DetailPage, {
      note: note.id
    }); 
  }
}
