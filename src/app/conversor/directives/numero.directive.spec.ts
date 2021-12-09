import { NumeroDirective } from './numero.directive';

describe('NumeroDirective', () => {
  it('should create an instance', () => {
    let el: any;
    const directive = new NumeroDirective(el);
    expect(directive).toBeTruthy();
  });
});
