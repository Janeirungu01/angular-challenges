import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Member, ContributionRecord, ContributionSetup } from '../models/contribution-model';

@Injectable({
  providedIn: 'root'
})
export class ContributionService {
  private base = '/api/chamas'; // base path; backend should mount endpoints under this

  constructor(private http: HttpClient) {}

  // Get members and their contribution state for a chama
  getMembers(chamaId: string | number): Observable<Member[]> {
    return this.http.get<Member[]>(`${this.base}/${chamaId}/members`).pipe(
      catchError(err => {
        console.error('getMembers error', err);
        return throwError(() => err);
      })
    );
  }

  // Get contribution history for a member or group
  getContributionHistory(chamaId: string | number, memberId?: string | number): Observable<ContributionRecord[]> {
    const url = memberId ? `${this.base}/${chamaId}/members/${memberId}/contributions` : `${this.base}/${chamaId}/contributions`;
    return this.http.get<ContributionRecord[]>(url).pipe(
      catchError(err => throwError(() => err))
    );
  }

  // Create contribution setup
  createSetup(chamaId: string | number, setup: ContributionSetup): Observable<ContributionSetup> {
    return this.http.post<ContributionSetup>(`${this.base}/${chamaId}/setups`, setup).pipe(
      catchError(err => throwError(() => err))
    );
  }

  // Trigger payment (STK Push) - backend must handle M-Pesa credentials and STK push
  initiateMpesaStk(chamaId: string | number, memberId: string | number, amount: number, phone: string): Observable<{ checkoutRequestId?: string; status: string; message?: string }> {
    // Expected backend route: POST /api/chamas/{chamaId}/payments/mpesa
    // body: { memberId, amount, phone }
    return this.http.post<{ checkoutRequestId?: string; status: string; message?: string }>(
      `${this.base}/${chamaId}/payments/mpesa`,
      { memberId, amount, phone }
    ).pipe(
      catchError(err => {
        console.error('initiateMpesaStk error', err);
        return throwError(() => err);
      })
    );
  }

  // Poll or confirm payment - backend should expose an endpoint to check if a checkoutRequest succeeded
  checkPaymentStatus(chamaId: string | number, checkoutRequestId: string): Observable<{ status: 'SUCCESS' | 'PENDING' | 'FAILED'; receipt?: string; amount?: number; phone?: string }> {
    return this.http.get<{ status: 'SUCCESS' | 'PENDING' | 'FAILED'; receipt?: string }>(
      `${this.base}/${chamaId}/payments/status/${checkoutRequestId}`
    ).pipe(
      catchError(err => throwError(() => err))
    );
  }

  // Fallback: mark contribution manually (treasurer)
  recordContribution(chamaId: string | number, record: Partial<ContributionRecord>): Observable<ContributionRecord> {
    return this.http.post<ContributionRecord>(`${this.base}/${chamaId}/contributions`, record).pipe(
      catchError(err => throwError(() => err))
    );
  }
}
