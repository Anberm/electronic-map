import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DrawControl } from '@antv/l7-draw';
import { Mapbox } from '@antv/l7-maps';
import { Scene } from '@antv/l7';
declare const L7: any;

@Component({
  selector: 'fd-draw-map',
  templateUrl: './draw-map.component.html',
  styleUrls: ['./draw-map.component.css'],
})
export class DrawMapComponent implements OnInit {
  @ViewChild('drawMap', { static: true }) drawMap: ElementRef<HTMLDivElement>;

  constructor() {}

  ngOnInit(): void {
    this.mapRender();
  }

  mapRender() {
    const scene = new Scene({
      id: this.drawMap.nativeElement,
      map: new Mapbox({
        pitch: 0,
        style: 'mapbox://styles/mapbox/satellite-streets-v11',
        center: [118.79804, 36.505044],
        zoom: 15,
      }),
      logoVisible: false,
    });
    // const drawControl = new DrawControl(scene, {
    //   position: 'topright',
    //   layout: 'horizontal', // horizontal vertical
    //   controls: {
    //     point: true,
    //     polygon: true,
    //     line: true,
    //     circle: true,
    //     rect: true,
    //     delete: true,
    //   },
    // });

    scene.on('loaded', () => {
      const drawControl = new DrawControl(scene, {
        position: 'topright',
        layout: 'horizontal', // horizontal vertical
        controls: {
          point: true,
          polygon: true,
          line: true,
          circle: true,
          rect: true,
          delete: true,
        },
      });
      scene.addControl(drawControl);
      drawControl.on('draw.create', (e) => {
        console.log(e);
        alert(JSON.stringify(e));
      });
      drawControl.on('draw.delete', (e) => {
        console.log(e);
        alert(JSON.stringify(e));
      });
      drawControl.on('draw.update', (e) => {
        console.log(e);
        alert(JSON.stringify(e));
      });
    });
  }
}
