import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  checkStatus(s: string) {
    if (localStorage.getItem('pinCodeStatus') === 'false') {
      localStorage.removeItem('pinCodeStatus');
      localStorage.removeItem('userId');
      this.router.navigate(['/error']);
    } else {
      this.router.navigate([s]);
    }
  }

  exit() {
    localStorage.removeItem('pinCodeStatus');
    localStorage.removeItem('userId');
    this.router.navigate(['/start']);
  }
}
