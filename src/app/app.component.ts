import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'piano';

aplicarSonido(numero:number){

  const audio = new Audio();

  audio.src="../assets/sonidos/piano"+numero+".mp3";

  audio.load();

  audio.play();


}
}
