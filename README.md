# Hotel Booking System

This project is a single-page front-end application built with Angular, developed as a solution for a Junior Front-end Developer technical assessment.

## How to Run 

1. Download and install Visual Studio Code from the official website.

2. Download and install Node.js from the official Node.js website.

3. Open your terminal in VS Code (Ctrl+\` or View > Terminal) and run the following command to install Angular CLI globally:

       npm install -g @angular/cli
    
4. Clone the repository to your local machine using the following command:

       git clone https://github.com/SundayGais/hotel-room-booking.git
 
5. Open your terminal in VS Code (Ctrl+\` or View > Terminal), then navigate into the downloaded project folder:
    
       cd hotel-room-booking-engine 
   

6. Once inside the project directory, install all the necessary Node.js packages by running:
   
       npm install

7. Ensure your MockAPI.io project is set up with a `rooms` resource (with `id`, `name`, `type`, `price`, `availability`, and `imageUrl` fields). Update the `apiUrl` in `src/app/services/room.service.ts` to point to your specific MockAPI.io API endpoint URL. The URL used for this project's data is:
    
        private apiUrl='https://684c5a55ed2578be881e904b.mockapi.io/hotel-room-booking-engine/rooms';

Populate your MockAPI.io `rooms` data with example entries, ensuring `imageUrl` is set correctly for Single, Double, and Suite types. Populate your MockAPI.io `rooms` data with example entries, ensuring `imageUrl` is set correctly for Single, Double, and Suite types.

8. After configuring the API URL and ensuring all dependencies are installed, run the application using the following command:

       ng serve --open

    This command will compile the application and automatically open it in your default web browser, typically at `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Brief Explaination

The system was built with a focus on simplicity and clarity.The system functions by its visual parts (components) requesting information from room.service.ts, which then directly obtains data from MockAPI and sends it back for display. It used MockAPI.io as a simple, temporary database which is an easy-to-use version of something like MySQL, but designed for quick development and do not have to much features but it okay for simple project. This allowed the front-end development to proceed quickly without needing a complex real backend right away. For styling the application, SCSS was chosen specifically because it offers a more organized and efficient way to manage the app's visual design. Lastly, using Angular CLI helps keep the coding structured with separate, independent sections, making the app easy to understand and maintain, and it also uses a smart system to handle information smoothly in the background.

That's all. Thanks.

Created by: Syafiq Zaki
