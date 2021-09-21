import { Component } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  nome="";
  alterarNome(nome: { target: { value: string; }; }) {
    console.log(nome.target.value);
    this.nome = nome.target.value;
    }
  adicionar(nomeInput: any) { 
  console.log("Adicionado novo nme : " + nomeInput);
    console.log("Adicionando...")
    }
  }

