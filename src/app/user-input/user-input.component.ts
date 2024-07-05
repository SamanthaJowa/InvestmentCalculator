import { Component, EventEmitter, Output, output, signal } from '@angular/core';
import { UserInputService } from './user-input.service';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
 // @Output() calculate = new EventEmitter<InvestmentInput>();
  calculate = output<InvestmentInput>()


  enteredInvestment = signal('0')
  enteredAnnualInvestment = signal('0')
  expectedReturn = signal('5')
  duration = signal('10')

  onSubmit(){
    this.calculate.emit({
      initialInvestment: +this.enteredInvestment(),
      duration: +this.duration(),
      expectedReturn: +this.expectedReturn(),
      annualInvestment: +this.enteredAnnualInvestment()
    })

    this.enteredAnnualInvestment.set('0')
    this.enteredInvestment.set('0')
    this.expectedReturn.set('5')
    this.duration.set('10')
  }
}