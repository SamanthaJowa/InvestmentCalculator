import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UserInputService{
    private annualData = [];

    constructor(){
        const annualData = localStorage.getItem('results')

        if(annualData){
            this.annualData =JSON.parse(annualData)
        }
    }

    calculateInvestmentResults(initialInvestment: number, annualInvestment: number, expectedReturn: number, duration: number) {
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
      
        return annualData;
      }

    private saveAnnualData(){
        localStorage.setItem('annualData', JSON.stringify(this.annualData))
    }
}