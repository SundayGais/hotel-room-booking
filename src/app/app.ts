import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- Add this import for CommonModule
import { HomeComponent } from './home/home.component';


@Component({
  selector: 'app-root',
  standalone: true, // Ensure this is set to true for standalone component
  imports: [
    CommonModule,     // <-- Add CommonModule for Angular directives like *ngIf, *ngFor
    HomeComponent // <-- Add RoomListComponent here
  ],
  templateUrl: './app.html', // Matches your file name
  styleUrl: './app.scss'     // Matches your file name
})
export class App { // Keeping 'App' as your class name based on your code
  protected title = 'hotel-room-booking-engine';
}