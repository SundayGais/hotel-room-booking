import { Component, OnInit } from '@angular/core';
import { RoomService, Room } from '../../services/room.service';
import { CommonModule } from '@angular/common'; // Needed for *ngFor, *ngIf
import { BookRoomModalComponent } from '../book-room-modal/book-room-modal.component';

// Declare bootstrap to avoid TypeScript errors for window.bootstrap
declare var bootstrap: any;

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [
    CommonModule,
    BookRoomModalComponent
  ],
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {
  rooms: Room[] = [];
  selectedRoom: Room | null = null;
  showBookingSuccessToast = false;
  bookedRoomName: string = '';

  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
    this.loadRooms();
  }

  loadRooms(): void {
    this.roomService.getRooms().subscribe({
      next: (data) => {
        this.rooms = data;
      },
      error: (error) => {
        console.error('Error fetching rooms:', error);
      }
    });
  }

  openBookingModal(room: Room): void {
    this.selectedRoom = room;
    const modalElement = document.getElementById('bookRoomModal');
    if (modalElement) {
      const modal = new (window as any).bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  onBookingSuccess(bookedRoom: Room): void {
    console.log(`Booking successful for room: ${bookedRoom.name}`);
    const index = this.rooms.findIndex(r => r.id === bookedRoom.id);
    if (index > -1) {
      this.rooms[index] = bookedRoom;
    }
    this.showBookingSuccessToast = true;
    this.bookedRoomName = bookedRoom.name;
    setTimeout(() => {
      this.showBookingSuccessToast = false;
      this.bookedRoomName = '';
    }, 3000);
  }

  getAvailabilityClass(availability: 'Available' | 'Booked'): string {
    return availability === 'Available' ? 'text-success' : 'text-danger';
  }
}