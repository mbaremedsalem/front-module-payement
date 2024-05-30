import { Component } from '@angular/core';
import { InputOtpModule } from 'primeng/inputotp';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-otp',
  standalone: true,
  imports: [FormsModule, InputOtpModule],
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.scss',

})
export class OtpComponent {
  value : any
}
