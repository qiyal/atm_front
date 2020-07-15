import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DataControlService} from '../service/data-control.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  hasNumber = false;

  constructor(
    private service: DataControlService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      numberCard: new FormControl('', Validators.required),
      pinCode: new FormControl('', Validators.required),
    });
  }

  get numberCard() {
    return this.form.get('numberCard');
  }

  get pinCode() {
    return this.form.get('pinCode');
  }

  setNumberCard(s: string) {
    if (this.numberCard.value.length < 16)
      this.numberCard.setValue(this.numberCard.value + s);
  }

  setPinCode(s: string) {
    if (this.pinCode.value.length < 4)
      this.pinCode.setValue(this.pinCode.value + s);
  }

  deleteLastValue() {
    let str = this.numberCard.value;
    let l = str.length;

    if (l !== 0)
      this.numberCard.setValue(str.substring(0, l - 1));
  }

  deleteLastValuePinCode() {
    let str = this.pinCode.value;
    let l = str.length;

    if (l !== 0)
      this.pinCode.setValue(str.substring(0, l - 1));
  }

  clear() {
    this.numberCard.setValue('');
  }

  clearPinCode() {
    this.pinCode.setValue('');
  }

  enterNumberCard() {
    if (this.numberCard.value.length === 16) {
      this.hasNumber = true;
    }
  }

  enterPinCode() {

    if (this.pinCode.value.length === 4) {
      this.service.checkCard(this.form.getRawValue()).subscribe(res => {
        if (res === 0) {
          localStorage.setItem('pinCodeStatus', 'false');
        } else {
          localStorage.setItem('pinCodeStatus', 'true');
          localStorage.setItem('userId', res);
        }
        this.router.navigate(['/interface']);
      });
    }
  }

}
