import { ReservarService } from 'src/app/services/reservar.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-admin-reservas',
  templateUrl: './admin-reservas.page.html',
  styleUrls: ['./admin-reservas.page.scss'],
})
export class AdminReservasPage implements OnInit {
  crearSalaForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private reservarService: ReservarService,
    private navCtrl: NavController) { }

  ngOnInit() {
    this.crearSalaForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.nullValidator]],
      actividad: ['', [Validators.required, Validators.nullValidator]],
      horario: ['', [Validators.required, Validators.nullValidator]],
      maxInscritos: ['', [Validators.required, Validators.nullValidator]]
    });
  }

  createSala(){
    if (this.crearSalaForm.invalid) { return;}

    let sala ={
      name: this.crearSalaForm.value.name,
      actividad: this.crearSalaForm.value.actividad,
      horario: this.crearSalaForm.value.horario,
      maxInscritos: this.crearSalaForm.value.maxInscritos
    }
    this.reservarService.createSala(sala).subscribe(data =>{
      this.navCtrl.navigateRoot('/main/tabs/tab3/reservar', { animated: true});
    })
    
  }

}
