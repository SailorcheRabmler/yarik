import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsListComponent } from './details-list.component';
import { DetailCardComponent } from './detail-card/detail-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
	declarations: [DetailsListComponent, DetailCardComponent],
	imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
	exports: [DetailsListComponent],
})
export class DetailsListModule {}
