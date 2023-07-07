import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidePopupService } from '@app/shared/popups/side-popup/side-popup.service';


@Component({
  selector: 'app-managecast',
  templateUrl: './managecast.component.html',
  styleUrls: ['./managecast.component.scss']
})
export class ManagecastComponent {
  constructor(
    private router:Router,
    private popupservice: SidePopupService
    ) {

  }

}
