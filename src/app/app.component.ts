import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '/folder/inbox', icon: 'home' },
    { title: 'Notes', url: '/folder/outbox', icon: 'newspaper' },
    { title: 'Recording', url: '/folder/favorites', icon: 'videocam' },
    { title: 'Attendance', url: '/folder/archived', icon: 'person' },
    { title: 'Homework', url: '/folder/trash', icon: 'book' },
    { title: 'Zoom Meeting', url: '/folder/spam', icon: 'videocam' },
    { title: 'Change Password', url: '/folder/spam', icon: 'create' },
    { title: 'Logout', url: '/folder/spam', icon: 'log-out' },
  ];
  constructor() {}
}
