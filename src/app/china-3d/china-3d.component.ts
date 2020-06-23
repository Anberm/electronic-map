import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LineLayer, PolygonLayer, Scene, PointLayer, Popup } from '@antv/l7';
import { Mapbox } from '@antv/l7-maps';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'fd-china-3d',
  templateUrl: './china-3d.component.html',
  styleUrls: ['./china-3d.component.css']
})
export class China3DComponent implements OnInit {
  @ViewChild('china3d', { static: true }) china3d: ElementRef<HTMLDivElement>;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('./assets/100000_full.json').subscribe(x => {
      this.mapRender(x);
    })
  }

  mapRender(data: any) {
    const scene = new Scene({
      id: this.china3d.nativeElement,
      map: new Mapbox({
        center: [106.2825, 38],
        pitch: 45,
        style: 'blank',
        zoom: 2.8,
        minZoom: 0,
        maxZoom: 10,
      }),
      logoVisible: false,
    });

    scene.on('loaded', () => {
      const player = new PolygonLayer({})
        .source(data)
        .shape('fill')
        .scale({
          color: {
            type: 'quantile',
          },
        })
        .style({
          opacity: 1,
        })
        .color('#3478ce')
        .active({
          color: '#EFBD6A',
        });
      // player.on('mousemove', (e) => {
      //   const popup = new Popup({
      //     offsets: [0, 0],
      //     closeButton: false,
      //   })
      //     .setLnglat(e.lngLat)
      //     .setHTML(`<span>${e.feature.properties.name}</span>`);
      //   scene.addPopup(popup);
      // });
      scene.addLayer(player);

      const lineLayer = new LineLayer()
        .source(data)
        .shape('line')
        .color('#4fb1eb')
        .size([0.4, -16])
        .style({
          opacity: 0.77,
        });
      scene.addLayer(lineLayer);
      // const pointLayer = new PointLayer({})
      //   .source(chinaJson)
      //   .shape('name', ['cylinder'])
      //   .size('name', (h) => {
      //     if (h === '广西壮族自治区') {
      //       return [6, 6, 20];
      //     }
      //     return [0, 0, 0];
      //   })
      //   .color('name', ['#C1862B'])
      //   .style({
      //     opacity: 1.0,
      //   });
      // // pointLayer.on('mousemove', (e) => {
      // //   const popup = new Popup({
      // //     offsets: [0, 0],
      // //     closeButton: false,
      // //   })
      // //     .setLnglat(e.lngLat)
      // //     .setHTML(`<span>${e.feature.properties.name}</span>`);
      // //   scene.addPopup(popup);
      // // });
      // scene.addLayer(pointLayer);
    });
  }

}
