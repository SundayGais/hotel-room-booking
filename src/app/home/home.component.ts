import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomListComponent } from '../rooms/room-list/room-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RoomListComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  showRoomList: boolean = false; // Initially hide the room list

  constructor() { }

  // Method to show the room list
  displayRoomList(): void {
    this.showRoomList = true;
    // Optional: Scroll to the room list section if it's far down
    // setTimeout(() => {
    //   document.getElementById('room-list-section')?.scrollIntoView({ behavior: 'smooth' });
    // }, 100);
  }
}