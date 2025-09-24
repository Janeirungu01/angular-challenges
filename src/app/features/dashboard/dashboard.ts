import { Component } from '@angular/core';
import { ChartConfiguration, ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Card } from '../../shared/card/card';

@Component({
  selector: 'app-dashboard',
  imports: [BaseChartDirective, Card],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
  chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: { legend: { position: 'top' } }
  };

  lineChartData: ChartConfiguration['data'] = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [60000, 80000, 100000, 120000, 140000, 160000],
        label: 'Loans Issued',
        borderColor: '#22c55e',
        backgroundColor: 'rgba(34, 197, 94, 0.3)',
        tension: 0.4,
        fill: true
      },
      {
        data: [20000, 30000, 50000, 60000, 70000, 80000],
        label: 'Repayments',
        borderColor: '#facc15',
        backgroundColor: 'rgba(250, 204, 21, 0.3)',
        tension: 0.4,
        fill: true
      }
    ]
  };

  doughnutChartData: ChartData<'doughnut'> = {
    labels: ['Personal', 'Business', 'Education', 'Emergency'],
    datasets: [
      { data: [30, 25, 20, 15], backgroundColor: ['#22c55e', '#0ea5e9', '#f97316', '#8b5cf6', '#ef4444'], hoverOffset: 6 }
    ]
  };
}

