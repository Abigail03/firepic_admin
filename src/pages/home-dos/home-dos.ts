import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
//import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Platillo } from '../../commons/platillo'
import { AgregarPage } from '../agregar/agregar';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Bebida } from '../../commons/bebida';
import { AgregarDosPage } from '../agregar-dos/agregar-dos';
import { BebidasPage } from '../bebidas/bebidas';
import { PageDosPage } from '../page-dos/page-dos';

/**
 * Generated class for the HomeDosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-home-dos',
  templateUrl: 'home-dos.html',
})
export class HomeDosPage {
  

  

 private itemsCollection: AngularFirestoreCollection<Platillo>;
  platillos: Observable<Platillo[]>;
  constructor(private readonly afs: AngularFirestore, public modalCtrl: ModalController, public navCtrl: NavController) {

    this.itemsCollection = afs.collection<Platillo>('platillos');
    this.platillos = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Platillo;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
  openModal() {
    let profileModal = this.modalCtrl.create(AgregarPage);
    profileModal.present();
  }

  bebidas() {
    this.navCtrl.push(PageDosPage);
  }
  
}

