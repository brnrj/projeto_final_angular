import { DataBrPipe } from './data-br.pipe';

describe('DataBrPipe', () => {
  it('create an instance', () => {
    const pipe = new DataBrPipe();
    expect(pipe).toBeTruthy();
  });
  it('deve formatar a data 12-08-2021 para 08/12/2021', () => {
    const pipe = new DataBrPipe();
    expect(pipe.transform('2021-12-08')).toEqual('08/12/2021');
    console.log(pipe.transform('12-08-2021'));
  })
});
