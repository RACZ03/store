import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform( arreglo: any[], texto: string, col1?: string ): any[] {
    if ( texto === '' || texto === undefined )
    {
      return arreglo;
    }
    else
    {
      texto = texto.toLowerCase();
      const busqueda1 = arreglo.filter(item => {
        if (!item[col1]) {
          return
        }
        return item[col1].toLowerCase()
          .includes(texto);
      });

      return busqueda1;
    }
  }

}
