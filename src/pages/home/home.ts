import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Platillo } from '../../commons/platillo'
import { AgregarPage } from '../agregar/agregar';
import { LoginPage } from '../login/login';
import { BebidasDosPage } from '../home-dos/home-dos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  principal = LoginPage;
  

  private itemsCollection: AngularFirestoreCollection<Platillo>;

  platillos: Observable<Platillo[]>;

  constructor(private readonly afs: AngularFirestore, public modalCtrl: ModalController) {

    this.itemsCollection = afs.collection<Platillo>('platillos');
    this.platillos = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Platillo;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  
}
