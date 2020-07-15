import {Component, OnInit} from '@angular/core';
import {DataControlService} from '../service/data-control.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.css']
})
export class PinComponent implements OnInit {
  pinCode: string;

  constructor(
    private service: DataControlService,
    private router: Router
  ) {
    this.pinCode = '';
  }

  ngOnInit(): void {
  }

  setPinCode(s: string) {
    if (this.pinCode.length < 4) {
      this.pinCode += s;
    }
  }

  deleteLastValuePinCode() {
    if (this.pinCode.length !== 0) {
      this.pinCode = this.pinCode.substring(0, this.pinCode.length - 1);
    }
  }

  clearPinCode() {
    this.pinCode = '';
  }

  enterPinCode() {
    if (this.pinCode.length === 4) {
      this.service.checkPinCode(this.pinCode, Number(localStorage.getItem('userId'))).subscribe(res => {
        localStorage.setItem('pinCodeStatus', res);
        this.router.navigate(['/interface']);
      });
    }
  }
}
