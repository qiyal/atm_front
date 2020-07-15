import { Component, OnInit } from '@angular/core';
import {DataControlService} from '../service/data-control.service';
import {User} from '../models/User';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {
  balance: number;
  id: string;

  constructor(private service: DataControlService) {
  }

  ngOnInit(): void {
    this.id = localStorage.getItem('userId');
    this.service.getUserBalance(this.id).subscribe(res => {
      this.balance = res;
    });
  }

}
