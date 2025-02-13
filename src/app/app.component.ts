import { Component, Input, signal } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestmentsResultComponent } from "./investments-result/investments-result.component";
import { InvestmentInput } from './investment-input.model';
import { InvestmentsResultsModel } from './investments-results.model';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [HeaderComponent, UserInputComponent, InvestmentsResultComponent]
})
export class AppComponent {

    resultsData = signal<InvestmentsResultsModel[] | undefined>(undefined);
    

    onCalculateInvestmentResults(data: InvestmentInput) {
        const{initialInvestment, annualInvestment, expectedReturn, duration} = data
        const annualData = [];
        let investmentValue = initialInvestment;
      
        for (let i = 0; i < duration; i++) {
          const year = i + 1;
          const interestEarnedInYear = investmentValue * (expectedReturn / 100);
          investmentValue += interestEarnedInYear + annualInvestment;
          const totalInterest =
            investmentValue - annualInvestment * year - initialInvestment;
          annualData.push({
            year: year,
            interest: interestEarnedInYear,
            valueEndOfYear: investmentValue,
            annualInvestment: annualInvestment,
            totalInterest: totalInterest,
            totalAmountInvested: initialInvestment + annualInvestment * year,
          });
        }
      
        this.resultsData.set(annualData)
      }
}
