import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  rot_a: number = 0;
  rot_b: number = 0;
  rot_c: number = 0;
  rot_d: number = 0;

  pws_pwd:string = '';
  constructor(
    private clipboardApi: ClipboardService,
    private toastr: ToastrService
  ) {
    rot_a: 0;
    rot_b: 0;
    rot_c: 0;
    rot_d: 0;
    pws_pwd:'';
  }

  rot(rot_a:string,rot_b:string,rot_c:string) {
    this.rot_d = ( Number(rot_c) * Number(rot_b) ) / Number(rot_a);
  }

  pwd(pws_chars:string) {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < Number(pws_chars); i++){
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    const copyIcon = document.querySelector('#copyIcon');
          copyIcon?.classList.add('active');

    this.pws_pwd = text;
  }

  copyToClipboardText(){
    this.clipboardApi.copyFromContent(this.pws_pwd);
    this.toastr.success('Password copied to clipboard');
  }

  ngOnInit(): void {
  }

}
