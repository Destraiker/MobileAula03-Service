import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pessoas-detalhe',
  templateUrl: './pessoas-detalhe.component.html',
  styleUrls: ['./pessoas-detalhe.component.css']
})
export class PessoasDetalheComponent implements OnInit {

  @Output() novaPessoa=new EventEmitter();

  AlterarPessoa(){
    this.novaPessoa=new EventEmitter();
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
