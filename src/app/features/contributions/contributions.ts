import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Contribution {
  id: number;
  memberName: string;
  memberID: string;
  amount: number;
  date: string;
}

@Component({
  selector: 'app-contributions',
  imports: [CommonModule, FormsModule],
  templateUrl: './contributions.html',
  styleUrl: './contributions.scss'
})

export class Contributions {
  contributions: Contribution[] = [
    { id: 1, memberName: 'Jane Doe', memberID: 'MBR-001', amount: 2000, date: new Date().toLocaleDateString() },
    { id: 2, memberName: 'John Mwangi', memberID: 'MBR-002', amount: 1500, date: new Date().toLocaleDateString() }
  ];

  newContribution: Partial<Contribution> = {
    memberName: '',
    memberID: '',
    amount: 0
  };

  addContribution() {
    if (this.newContribution.memberName && this.newContribution.amount) {
      const contribution: Contribution = {
        id: this.contributions.length + 1,
        memberName: this.newContribution.memberName,
        memberID: this.newContribution.memberID || 'MBR-XXX',
        amount: this.newContribution.amount,
        date: new Date().toLocaleDateString()
      };

      this.contributions.push(contribution);

      this.newContribution = { memberName: '', amount: 0 };
    }
  }
}

