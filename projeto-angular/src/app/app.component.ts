import { Component } from '@angular/core';
//famoraes
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  nome = "";
  esconder = true;
  alterarNome(nome: { target: { value: string; }; }) {
    console.log(nome.target.value);
    this.nome = nome.target.value;
    console.log(nome);
  }

  adicionar(nomeInput: any) {
    console.log("nomeinput : " + nomeInput.value);
    console.log("nome local : " + this.nome);
    this.nome = nomeInput.value;
    console.log("Adicionando...");
    console.log("nome mod." + this.nome);

    if (nomeInput.value.lenght < 0) {
      this.esconder = true;
    }
    else {
      this.esconder = false;
    }
  }
}

