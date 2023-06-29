import { AlertModel } from '@app/models/common/alert.model';
import { Subject } from 'rxjs';

export class NotificationService {
  loading = new Subject<boolean>();
  alert = new Subject<AlertModel>();

  constructor() {}
  showNotification(alert: AlertModel) {
    this.alert.next(alert);
  }
  showLoading(value: boolean) {
    this.loading.next(value);
  }
}
