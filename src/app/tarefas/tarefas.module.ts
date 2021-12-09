import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TarefaService, TarefaConcluidaDirective } from './shared';
import { ListarTarefaComponent } from './listar';
import { CadastrarTarefaComponent } from './cadastrar';
import { EditarTarefasComponent } from './editar';

@NgModule({
  declarations: [
    ListarTarefaComponent,
    CadastrarTarefaComponent,
    EditarTarefasComponent,
    TarefaConcluidaDirective
  ],
  imports: [
    CommonModule, RouterModule, FormsModule
  ],
  providers: [ TarefaService ]
})
export class TarefasModule { }