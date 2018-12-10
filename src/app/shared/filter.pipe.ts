import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../pokemons/pokemon';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(items: Pokemon[], searchText: string): any[] {
    if (!items) { return []; }
    if (!searchText) { return items; }

    searchText = searchText.toLowerCase();

    return items.filter( it => {
      return it.name.toLowerCase().includes(searchText) || (it.id + '').includes(searchText);
    });
  }
}
