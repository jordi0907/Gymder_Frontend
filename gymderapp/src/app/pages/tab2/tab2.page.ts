import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
declare var mapboxgl:any;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  cargandoGeo = false;
  coords;
  posicion: false;
  visible = false;

  constructor(private geolocation: Geolocation) {}

  ngOnInit() {

  }



  getGeo(){

    console.log("activado",  this.visible )

    if (this.visible==true){this.visible=false}else{this.visible=true}

    if(this.visible){
      console.log("dentro",  this.visible )
      this.cargandoGeo = true;
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      this.cargandoGeo = false;

      const coords = `${resp.coords.latitude}, ${resp.coords.longitude}`;
      console.log(coords);
      this.coords = coords;



    const latLng = this.coords.split(',');
    const lat = Number(latLng[0]);
    const lng = Number(latLng[1]);




    mapboxgl.accessToken = 'pk.eyJ1IjoiYXBwZ3ltZGVyIiwiYSI6ImNrcDM0MWgyejA3ZDAyb3M1Mm15dHYzb3QifQ.tphsTtpXwlkG2D130LDEWw';
    const map = new mapboxgl.Map({
      container:   'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [ lng, lat ],
      zoom: 12
    });

    var popup = new mapboxgl.Popup()
  .setText('Parc del Garraf')
  .addTo(map);
  var popup2 = new mapboxgl.Popup()
  .setText('Esportiu La Piscina')
  .addTo(map);
  var popup3 = new mapboxgl.Popup()
  .setText('TU estas aqui')
  .addTo(map);

    const marker = new mapboxgl.Marker()
        .setLngLat( [ lng, lat ] )
        .addTo( map )
        .setPopup(popup3);


        var marker2 = new mapboxgl.Marker({ color: 'black', rotation: 45 })
        .setLngLat([1.73264, 41.23115])
        .addTo(map)
        .setPopup(popup);
        var marker3 = new mapboxgl.Marker({ color: 'black', rotation: 45 })
        .setLngLat([1.71981, 41.22130])
        .addTo(map)
        .setPopup(popup2);

     }).catch((error) => {
       console.log('Error getting location', error);
       this.cargandoGeo = false;
     });

     //this.visible= false;

  }
}

}
