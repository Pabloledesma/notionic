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

  note = {id: null, title: null, description: null};

  constructor(
    public noteProvider: NoteProvider, 
    public navCtrl: NavController, 
    public navParams: NavParams
  )
  {
    this.note = noteProvider.getNote( navParams.get('note') );
  }

  ionViewDidLoad() {
    
  }

}
