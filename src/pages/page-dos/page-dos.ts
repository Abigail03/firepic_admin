import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Bebida } from '../../commons/bebida';
import { AgregarPage } from '../agregar/agregar';
import { AgregarBebidaPage } from '../agregar-bebida/agregar-bebida';

/**
 * Generated class for the PageDosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-page-dos',
  templateUrl: 'page-dos.html',
})
export class PageDosPage {

  private itemsCollection: AngularFirestoreCollection<Bebida>;
  bebidas: Observable<Bebida[]>;
  constructor(private readonly afs: AngularFirestore, public modalCtrl: ModalController, public navCtrl: NavController) {
   
    this.itemsCollection = afs.collection<Bebida>('bebidas');
    this.bebidas = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Bebida;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    ); 
  }
  openModa() {
    let profileModal = this.modalCtrl.create(AgregarBebidaPage);
    profileModal.present(); 
  }
}
