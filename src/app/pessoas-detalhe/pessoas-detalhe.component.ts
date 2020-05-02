import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { pessoas } from '../pessoas/pessoas.model';

@Component({
  selector: 'app-pessoas-detalhe',
  templateUrl: './pessoas-detalhe.component.html',
  styleUrls: ['./pessoas-detalhe.component.css']
})
export class PessoasDetalheComponent implements OnInit {
  @Input() pessoa: pessoas;
  @Output() novaPessoaEvento = new EventEmitter();
  @Input() display;
  novaPessoa: pessoas;

  AbrirNovoForm() {
    document.getElementById("detalhesForm").style.display = "none";
    document.getElementById("atulizarForm").style.display = "block";
  }
  ConfirmarAlteracao(name, idade, corOlhos, sexo, email) {
    this.novaPessoa = { id: this.pessoa.id, name: name, idade: idade, corOlhos: corOlhos, sexo: sexo, email: email };
    this.novaPessoaEvento.emit(this.novaPessoa);
    document.getElementById("detalhesForm").style.display = "none";
    document.getElementById("atulizarForm").style.display = "none";
  }

  constructor() {
    
  }

  ngOnInit(): void {
    if(this.display=="block"){
      document.getElementById("detalhesForm").style.display = "block";
    }
  }

}
