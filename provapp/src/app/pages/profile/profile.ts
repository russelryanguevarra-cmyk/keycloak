import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/auth.service';
@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  constructor(public auth: AuthService) {}
}
