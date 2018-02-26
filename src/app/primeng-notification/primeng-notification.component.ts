import { Notification } from './../notifications/notification';
import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';



@Component({
  selector: 'app-primeng-notification',
  templateUrl: './primeng-notification.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrimengNotificationComponent implements OnChanges {

  @Input() notification: Notification;

  msgs: any;

  constructor() { }

  public ngOnChanges(): void {
    console.log(this.notification);
    this.msgs = [];
    this.msgs = [...this.msgs, this.notification];
  }
}
