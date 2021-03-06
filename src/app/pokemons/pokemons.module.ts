import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { RouterModule } from '@angular/router';

import { MatListModule } from '@angular/material/list';
import {
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatSidenavModule, MatSnackBarModule
} from '@angular/material';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import { PokedexComponent } from './pokedex/pokedex.component';
import {SharedModule} from '../shared/shared.module';
import { TeamComponent } from './team/team.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [PokemonListComponent, PokemonDetailComponent, PokedexComponent, TeamComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatInputModule,
    MatSnackBarModule,
    InfiniteScrollModule,
    FormsModule,
    SharedModule,
    RouterModule
  ]
})
export class PokemonsModule { }
