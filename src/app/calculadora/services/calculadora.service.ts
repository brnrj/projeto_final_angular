/**
 * Serviço responsável por executar as operações da calculadora
 * @author Bruno Martins
 * @since 1.0.0
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
  static readonly SOMA: string = "+";
  static readonly SUB: string = "-";
  static readonly MULT: string = "*";
  static readonly DIV: string = "/";

  constructor() {}

  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number;

    switch(operacao){
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
      break;
      case CalculadoraService.SUB:
        resultado = num1 - num2;
      break;
      case CalculadoraService.MULT:
        resultado = num1 * num2;
      break;
      case CalculadoraService.DIV:
        resultado = num1 / num2;
      break;
      default:
        resultado = 0;
    }
    return resultado;
  }
}
