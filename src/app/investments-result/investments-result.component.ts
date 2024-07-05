import { Component, Input, input } from '@angular/core';

import { CurrencyPipe } from '@angular/common';
import { InvestmentsResultsModel } from '../investments-results.model';

@Component({
  selector: 'app-investments-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investments-result.component.html',
  styleUrl: './investments-result.component.css'

})
export class InvestmentsResultComponent {
  results = input<InvestmentsResultsModel[]>();
 // @Input() results?:InvestmentsResultsModel[]
}
