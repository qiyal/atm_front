import { Component, OnInit } from '@angular/core';
import {User} from '../models/User';
import {DataControlService} from '../service/data-control.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {
  deposit: string;
  balance: number;

  constructor(
    private service: DataControlService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.deposit = '';
    this.balance = 0;
    this.service.getUserBalance(localStorage.getItem('userId')).subscribe(res => {
      this.balance = res;
    });
  }

  setValue(s: string) {
    this.deposit += s;
  }

  deleteLastNumber() {
    this.deposit = this.deposit.substring(0, this.deposit.length - 1);
  }

  clearValue() {
    this.deposit = '';
  }

  enterValue() {
    this.service.addSumInUserBalance(localStorage.getItem('userId'),  Number(this.deposit)).subscribe(res => {
      this.router.navigate(['/interface']);
    });
  }
}
