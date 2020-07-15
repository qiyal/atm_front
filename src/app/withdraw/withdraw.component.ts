import { Component, OnInit } from '@angular/core';
import {DataControlService} from '../service/data-control.service';
import {User} from '../models/User';
import {Router} from '@angular/router';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {
  value: string;
  balance: number;
  userId: string;
  error = false;

  constructor(private service: DataControlService, private router: Router) {
  }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');
    this.service.getUserBalance(this.userId).subscribe(res => {
      this.balance = res;
    });
    this.value = '';
  }

  setValue(s: string) {
    this.value += s;
  }

  deleteLastNumber() {
    this.value = this.value.substring(0, this.value.length - 1);
  }

  clearValue() {
    this.value = '';
  }

  enterValue() {

    this.service.withdrawUserBalance(this.userId, Number(this.value)).subscribe(res => {
      if (res === 1) {
        this.error = false;
        this.router.navigate(['/interface']);
      } else {
        this.error = true;
      }
    });
  }

  choseAmount(amount: number) {
    this.value = String(amount);
  }
}
