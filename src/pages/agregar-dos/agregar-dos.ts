import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ToastController, Platform } from 'ionic-angular';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Bebida } from '../../commons/bebida';
import { Observable } from 'rxjs';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AngularFireStorage } from 'angularfire2/storage';
import { finalize } from 'rxjs/operators';
import 'whatwg-fetch';

/**
 * Generated class for the AgregarDosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-agregar-dos',
  templateUrl: 'agregar-dos.html',
})
export class AgregarDosPage {

  private itemsCollection: AngularFirestoreCollection<Bebida>;

  bebidas: Observable<Bebida[]>;

  nombre: any;
  Sabor: any;
  Precio: any;
  img: any;
  assetCollection;

  //Miniatura de la Imagen
  imagePreview: string = "";
  //Imagen en formato para subir
  imagen64: string;
  //Observables
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;

  constructor(public readonly afs: AngularFirestore,
    public viewCtrl: ViewController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public imagePicker: ImagePicker,
    public firebaseServiceProvider: FirebaseServiceProvider,
    public platform: Platform,
    public camera: Camera,
    public fireStorage: AngularFireStorage) {
  }

  agregarBebidas() {
    console.log("bebida agregado");

    this.itemsCollection = this.afs.collection<Bebida>('bebidas');
    /* this.platillos = this.itemsCollection.snapshotChanges().pipe(
       map(actions => actions.map(a => {
         const data = a.payload.doc.data() as Platillo;
         const id = a.payload.doc.id;
         return { id, ...data };
       }))
     ); */

    const id = this.afs.createId();
    if (this.nombre != null && this.Sabor != null && this.img != null && this.Precio != null) {
      const plato: Bebida = { 'Nombre': this.nombre, 'Sabor': this.Sabor, 'img': this.img, 'Precio': this.Precio }
      console.table(plato);
      this.afs.collection('bebidas').doc(id).set(plato);
      this.presentToast('Bebida creada exitosamente');
      this.viewCtrl.dismiss();

    } else {
      this.presentToastError();
    }

  }



  presentToastError() {
    const toast = this.toastCtrl.create({
      message: 'Faltan campos por llenar!',
      duration: 1000
    });
    toast.present();
  }

  close() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarDosPage');
  }


  agregarBebida2() {
    console.log("bebida agregada");

    this.itemsCollection = this.afs.collection<Bebida>('bebida');
    /* this.platillos = this.itemsCollection.snapshotChanges().pipe(
       map(actions => actions.map(a => {
         const data = a.payload.doc.data() as Platillo;
         const id = a.payload.doc.id;
         return { id, ...data };
       }))
     ); */

    const id = this.afs.createId(); //Crea un ID automáticamente
    //El registro debe ser completo
    if (this.nombre != null && this.Sabor != null && this.img != null) {
      //Cargando la imagen en el servidor
      const file = this.imagePreview;
      const filePath = '/bebidas/' + this.nombre;
      const fileRef = this.fireStorage.ref(filePath);
      //Carga de imagen por funcion "upload"
      const task = this.fireStorage.upload(filePath, file);
      this.presentToast("Cargando imagen...");

      // Mostrando el porcentage de carga
      this.uploadPercent = task.percentageChanges();
      // cuando el URL de descarga se encuentra disponible
      task.snapshotChanges().pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(imgURL => {
            //console.log("imgURL: " + imgURL);
            this.img = imgURL;

            //La imagen ya se encuentra disponible (deberia)
            //Creando arreglo/objeto para su posterior envío


            const id = this.afs.createId();
            if (this.nombre != null && this.Sabor != null && this.img != null && this.Precio != null) {
              const plato: Bebida = { 'Nombre': this.nombre, 'Sabor': this.Sabor, 'img': this.img, 'Precio': this.Precio }
              console.table(plato);
              this.afs.collection('bebidas').doc(id).set(plato);
              this.presentToast('Bebida creada exitosamente');
              this.viewCtrl.dismiss();

            } else {
              this.presentToastError();
            }

          }, (err) => {
            console.log("Error al cargar", err);
            this.presentToast("¡La imagen no pudo subirse!");
          });

        }
        )
      )
        .subscribe()

    } else {
      //El registro no es completo
      this.presentToast("¡Bebida Incompleta!");
    }

  }

  selectImageCamera(src: number) {

    //Formato de la imagen a tomar
    const config: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      saveToPhotoAlbum: true,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: src // 0 = Galeria, 1 = Camara
    }

    //Promesa: Sí se pudo tomar la foto con la configuración indicada..
    this.camera.getPicture(config).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.imagePreview = 'data:image/jpeg;base64,' + imageData;
      this.imagen64 = imageData;

      this.uploadFile(imageData);
    }, (err) => {
      console.log("Error en cámara", JSON.stringify(err));
      this.presentToast("¡No se pudo tomar la foto!");
    });

  }

  //Función de Galería
  selectImageGallery() {

    //Configuración de la imagen
    let conf: ImagePickerOptions = {
      quality: 50,
      outputType: 1, //Devuelve un string codificado base-64
      maximumImagesCount: 1
    }

    //Promesa: sí logra tomar una foto con la configuración dada...
    this.imagePicker.getPictures(conf).then((results) => {
      for (var i = 0; i < results.length; i++) {
        // console.log('Image URI: ' + results[i]);
        this.imagePreview = 'data:image/jpeg;base64,' + results[i];
        this.imagen64 = results[i];

      }
    }, (err) => {
      console.log("ERROR: la imagen no es valida: ", JSON.stringify(err));
      this.presentToast('¡La imagen no es válida!');
    });

  }


  //Carga Asicnrona de imagenes (funciona junto a un <input type ="file">)
  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = '/bebidas/' + this.nombre;
    const fileRef = this.fireStorage.ref(filePath);
    const task = this.fireStorage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL = fileRef.getDownloadURL();
        //Tomando la URL tras descargarla
        this.downloadURL.subscribe(imgURL => {
          //console.log("imgURL: " + imgURL);
          this.img = imgURL;
        })

      }
      )
    )
      .subscribe()
  }


  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: '' + message,
      duration: 4000,
      position: 'bottom'
    });
    toast.present();
  }
}
