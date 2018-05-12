import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoteProvider } from '../../providers/note/note';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  public note = {id: null, title: null, description: null};
  public id = 0;

  constructor(
    public noteProvider: NoteProvider, 
    public navCtrl: NavController, 
    public navParams: NavParams
  )
  {
    this.id = navParams.get('note');
    if(this.id != 0)
    this.note = noteProvider.getNote(this.id);
  }

  createNote(note){

    if(note.id != 0){

      this.noteProvider.updateNote(note);
      alert('Update note successfully!');
    
    } else {

      note.id = Date.now();
      this.noteProvider.createNote(note);
      alert('Note created!!');
    
    }
    
    this.navCtrl.pop();
  }

  deleteNote(){
    this.noteProvider.deleteNote(this.note);
    alert('Note deleted!');
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    
  }

}
