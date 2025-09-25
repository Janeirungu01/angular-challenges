import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Userservice, User } from '../../services/userservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'app-users',
  imports: [CommonModule, FormsModule, MatPaginatorModule, MatSortModule],
  standalone: true,
  templateUrl: './users.html'
})
export class Users implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  pagedUsers: User[] = [];
  searchTerm = '';
  totalUsers = 0;
  pageSize = 5;
  pageIndex = 0;

  constructor(private userService: Userservice, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.filteredUsers = [...users];
      this.totalUsers = users.length;
      this.pageIndex = 0; 
      this.updatePagedUsers();
    });
  }

  applyFilter() {
    const term = this.searchTerm.toLowerCase();
    this.filteredUsers = this.users.filter(
      u =>
        u.name.toLowerCase().includes(term) ||
        u.username.toLowerCase().includes(term) ||
        u.email.toLowerCase().includes(term)
    );
    this.totalUsers = this.filteredUsers.length;
    this.pageIndex = 0; 
    this.updatePagedUsers();
  }

  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.updatePagedUsers();
  }

  updatePagedUsers() {
    const start = this.pageIndex * this.pageSize;
    const end = start + this.pageSize;
    if (!this.filteredUsers || this.filteredUsers.length === 0) {
      this.pagedUsers = [];
      this.cdr.detectChanges();
      return;
    }
    this.pagedUsers = this.filteredUsers.slice(start, end);
    this.cdr.detectChanges();
  }
}
