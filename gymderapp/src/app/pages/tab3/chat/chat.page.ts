import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})

export class ChatPage implements OnInit {

  constructor(private socket:Socket) { 
    console.log(socket);
    let message= {msg:"hola"}
    this.socket.emit('connection')
    this.socket.emit('new-message', message)
    console.log("Esta todo bien");
  }

  ngOnInit() {
  }

}
