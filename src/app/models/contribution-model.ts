export interface Member {
  id: number | string;
  name: string;
  phone?: string; // e.g. 2547XXXXXXXX
  expectedAmount: number;
  lastPaymentDate?: string; // ISO date
  balance?: number; // outstanding (expected - paid)
}

export interface ContributionRecord {
  id: number | string;
  memberId: number | string;
  amount: number;
  date: string; 
  method: 'MPESA' | 'BANK' | 'CASH' | 'OTHER';
  receipt?: string;
  status: 'PAID' | 'PENDING' | 'FAILED';
}

export interface ContributionSetup {
  id?: number | string;
  name: string;
  type: 'FIXED' | 'ADHOC' | 'TARGET';
  amountPerMember: number;
  frequency: 'WEEKLY' | 'BIWEEKLY' | 'MONTHLY' | 'QUARTERLY';
  dueDate?: string; 
  gracePeriodDays?: number;
  active?: boolean;
}
