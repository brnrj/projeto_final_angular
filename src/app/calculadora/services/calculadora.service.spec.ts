import { inject, TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve garantir que 1 + 4 = 5',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let soma = service.calcular(1, 4, CalculadoraService.SOMA);
      expect(soma).toEqual(5);
  }));

  it('deve garantir que 5 - 2 = 3',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let sub = service.calcular(5, 2, CalculadoraService.SUB);
      expect(sub).toEqual(3);
  }));

  it('deve garantir que 5 * 3 = 15',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let mult = service.calcular(5, 3, CalculadoraService.MULT);
      expect(mult).toEqual(15);
  }));

  it('deve garantir que 50 / 5 = 10',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let div = service.calcular(50, 5, CalculadoraService.DIV);
      expect(div).toEqual(10);
  }));

  it('deve retornar 0 para operação inválida',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let operacaoInvalida = service.calcular(1, 4, '%');
      expect(operacaoInvalida).toEqual(0);
  }));
});
