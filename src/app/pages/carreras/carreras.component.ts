import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carreras',
  templateUrl: './carreras.component.html',
  styleUrls: ['./carreras.component.css']
})
export class CarrerasComponent implements OnInit{
  frases: string[] = [
    "Cada logro comienza con la decisión de intentarlo",
    "El aprendizaje es un tesoro que te seguirá allá a donde vayas",
    "El éxito es la suma de pequeños esfuerzos, repetidos dia tras dia",
    "Siempre parece imposible hasta que se hace",
    "He fallado una y otra vez a lo largo de mi vida. Es por eso por lo que he tenido éxito",
    "Nuestra paciencia conseguirá más cosas que nuestra fuerza"
  ];

  fraseAleatoria!: string;

  constructor(){}

  ngOnInit(): void {
    this.mostrarfrase();
  }

  mostrarfrase(){
    const indiceAleatorio = Math.floor(Math.random() * this.frases.length);
    this.fraseAleatoria = this.frases[indiceAleatorio];
  }
}
