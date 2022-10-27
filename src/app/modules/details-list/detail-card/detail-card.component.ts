import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../../shared/products/product.interface';
import { productMock } from '../../../shared/products/product.mock';

@Component({
	selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.less'],
})
export class DetailCardComponent {
	readonly detail = productMock;

  onProductBuy(event: Event) {
        
    debugger;
    if ((event.target as any)["outerText"] == "Купить")
    {
      this.detail.ordered += 1;
        
    }
    else event.stopPropagation();

    
	}

	isStarActive(starIndex: number): boolean {
		return Boolean(this.detail && this.detail.rating >= starIndex);
	}
}
