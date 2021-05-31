import { Component, ViewChild ,OnInit, Inject, LOCALE_ID } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar';
import { AlertController, ModalController } from '@ionic/angular';
import { formatDate } from '@angular/common';

//Backend
import { ReservarService } from 'src/app/services/reservar.service';
import { Sala } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.page.html',
  styleUrls: ['./horarios.page.scss'],
})
export class HorariosPage implements OnInit {

  //Backend
  salas: Array<Sala> = []
  mensaje: string;

  //Calendar
  eventSource = [];
  viewTitle: string;

  calendar = {
    mode: 'month',
    currentDate: new Date(),
    startingDayMonth: 1,
    formatDayHeader: 'EEE'
  };

  selectedData: Date;

  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  constructor(
    private reservarService: ReservarService,
    private alertCtrl: AlertController,
    @Inject(LOCALE_ID) private locale: string,
    private modalCtrl: ModalController
    ) {}

  ngOnInit() {
    //Backend
    this.reservarService.getSalas().subscribe((salas :any) =>{
      if(salas['ok']==true){
        this.salas = salas['salas']
        console.log(salas['ok'])
        console.log("in");
        //Crear una fecha
    var eventosGym = this.salas;
    var mesesEvento = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
    //Crear eventos con las salas de backend.
    var events = [];


    for (var i = 0; i < eventosGym.length; i +=1) {
      var splitEventos = eventosGym[i].horario.split(" ", 8);
      var splitDia = parseInt(splitEventos[1]);
      var splitMes = splitEventos[7];
      var splitHoraInicio = splitEventos[3].split(":", 2);
      var splitHoraFinal = splitEventos[5].split(":", 2);
      var horaInicio = parseInt(splitHoraInicio[0]) + parseInt(splitHoraInicio[1])/60;
      var horaFinal = parseInt(splitHoraFinal[0]) + parseInt(splitHoraFinal[1])/60;

      var mesNumerico
      for (var e = 0; e< 12; e += 1) {
        if (splitMes === mesesEvento[e]) {
          mesNumerico = e;
        }
      }

      //creamos el evento
      var date = new Date();
      var startTime;
      var endTime;

      startTime = new Date(
        date.getFullYear(),
        mesNumerico,
        splitDia,
        0,
        horaInicio * 60
      );
      endTime = new Date(
        date.getFullYear(),
        mesNumerico,
        splitDia,
        0,
        horaFinal * 60
      );
      events.push({
        title: eventosGym[i].name,
        startTime: startTime,
        endTime: endTime,
        allDay: false
      });

    }
    this.eventSource = events

    }else if(salas['ok'] == false){
        console.log("out")
      }
    })



  }

  //Cambia el mes
  next() {
    this.myCal.slideNext();
  }

  back() {
    this.myCal.slidePrev();
  }


  //Va cambiando el mes y el año cuando mueves hacia adelante o atras
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  //Enseña de que hora a que hora va el evento
  async onEventSelected(event) {
    //Use Angular date pipe for conversion
    let start = formatDate(event.startTime, 'medium', this.locale);
    let end = formatDate(event.endTime, 'medium', this.locale);

    const alert = await this.alertCtrl.create({
      header: event.title,
      subHeader: event.desc,
      message: 'From: ' + start + '<br><br>To: ' + end,
      buttons: ['OK'],
    });
    alert.present();
  }

  removeEvents() {
    this.eventSource = [];
  }

  createEventsDay() {
  }

}
