import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './componentes';



@NgModule({
  imports: [ CommonModule ],
  declarations: [ CalculadoraComponent ],
  exports: [ CalculadoraComponent ]
})
export class CalculadoraModule { }
