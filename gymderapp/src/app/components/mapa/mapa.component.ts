import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

declare var mapboxgl: any;


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements OnInit {

  @Input() coords: string;
  @ViewChild("mapa") mapElement: ElementRef

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
    console.log(this.coords)
    console.log(this.mapElement.nativeElement)
    const latLng = this.coords.split(',');
    const lat = Number(latLng[0]);
    const lng = Number(latLng[1]);


    mapboxgl.accessToken = 'pk.eyJ1IjoiYXBwZ3ltZGVyIiwiYSI6ImNrcDM0MWgyejA3ZDAyb3M1Mm15dHYzb3QifQ.tphsTtpXwlkG2D130LDEWw';
    const map = new mapboxgl.Map({
      container:   this.mapElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [ lng, lat ],
      zoom: 15
    });

    const marker = new mapboxgl.Marker()
        .setLngLat( [ lng, lat ] )
        .addTo( map );
  },200);
  }
}
