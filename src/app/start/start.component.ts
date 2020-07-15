import { Component, OnInit } from '@angular/core';
import {DataControlService} from '../service/data-control.service';
import {Router} from '@angular/router';
import {User} from '../models/User';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  hasNumber = false;
  constructor(private service: DataControlService, private router: Router) { }

  ngOnInit(): void {
  }

  getRandomAccount() {
    this.service.getRandomUser().subscribe(res => {
      if (res) {
        localStorage.setItem('userId', res.id)
        this.router.navigate(['/pin']);
      } else {
        this.hasNumber = true;
      }
    });
  }
}
