import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '/folder/dashboard', icon: 'home' },
    { title: 'Notes', url: '/folder/notes', icon: 'newspaper' },
    { title: 'Recording', url: '/folder/recording', icon: 'videocam' },
    { title: 'Attendance', url: '/folder/attendance', icon: 'person' },
    { title: 'Homework', url: '/folder/homework', icon: 'book' },
    { title: 'Zoom Meeting', url: '/folder/zoomMeeting', icon: 'videocam' },
    { title: 'Change Password', url: '/folder/changePassword', icon: 'create' },
    { title: 'Logout', url: '/folder/logout', icon: 'log-out' },
  ];
  constructor() {}
}
