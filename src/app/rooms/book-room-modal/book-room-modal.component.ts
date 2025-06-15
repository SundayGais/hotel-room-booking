import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Room, RoomService } from '../../services/room.service'; // Adjust path if needed
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; // For Reactive Forms
import { CommonModule } from '@angular/common'; // For ngIf, ngClass
// Declare bootstrap to avoid TypeScript errors for window.bootstrap
declare var bootstrap: any;

@Component({
  selector: 'app-book-room-modal',
  standalone: true, // This MUST be true if it's a standalone component
  imports: [CommonModule, ReactiveFormsModule], // Essential imports for standalone and forms
  templateUrl: './book-room-modal.component.html',
  styleUrls: ['./book-room-modal.component.scss']
})
export class BookRoomModalComponent implements OnInit, OnChanges {
  @Input() selectedRoom: Room | null = null; // Input from RoomListComponent
  @Output() bookingSuccess = new EventEmitter<Room>(); // Output to RoomListComponent

  bookingForm!: FormGroup; // Use definite assignment assertion or initialize in constructor

  constructor(
    private fb: FormBuilder,
    private roomService: RoomService
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedRoom'] && this.selectedRoom) {
      // Reset form and potentially pre-fill if needed when room changes
      this.initializeForm();
    }
  }

  initializeForm(): void {
    this.bookingForm = this.fb.group({
      guestName: ['', Validators.required],
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.bookingForm.valid && this.selectedRoom) {
      // Simulate booking: update room availability to 'Booked'
      // This calls your service to update the mock API
      this.roomService.updateRoomAvailability(this.selectedRoom.id, 'Booked').subscribe({
        next: (roomData) => {
          // Emit event to notify parent (RoomListComponent) of successful booking
          this.bookingSuccess.emit(roomData); // Emit the updated room data
          this.hideModal(); // Hide the Bootstrap modal
          this.bookingForm.reset(); // Clear the form for next use
        },
        error: (error) => {
          console.error('Error booking room:', error);
          alert('Failed to book room. Please try again.'); // Simple error feedback
        }
      });
    } else {
      // Mark all fields as touched to show validation errors
      this.bookingForm.markAllAsTouched();
    }
  }

  // Helper to manually hide the modal (called after successful booking)
  hideModal(): void {
    const modalElement = document.getElementById('bookRoomModal');
    if (modalElement) {
      const modal = bootstrap.Modal.getInstance(modalElement); // Get existing instance
      if (modal) {
        modal.hide();
      }
    }
  }
}