import { Component, OnInit } from '@angular/core';
import {pessoas} from './pessoas.model';
import {PessoasService} from '../pessoas.service'

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {

  pessoasArray: pessoas[] = [];
  detalhePessoa: boolean=false;
  pessoa:pessoas;

  AlterarPessoa(novaPessoa){
    
  }

  constructor(private eventosService: PessoasService) { }

  ngOnInit(): void {
    this.pessoasArray = this.eventosService.getPessoas();
  }

}