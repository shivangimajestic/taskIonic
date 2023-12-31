import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '/folder/dashboard', icon: 'home' },
    { title: 'Notes', url: '/notes', icon: 'newspaper' },
    { title: 'Recording', url: '/recording', icon: 'videocam' },
    { title: 'Attendance', url: '/attendance', icon: 'person' },
    { title: 'Homework', url: '/homework', icon: 'book' },
    { title: 'Zoom Meeting', url: '/zoommeeting', icon: 'videocam' },
    { title: 'Change Password', url: '/changepassword', icon: 'create' },
    { title: 'Logout', url: '/logout', icon: 'log-out' },
  ];
  constructor() {}
}
