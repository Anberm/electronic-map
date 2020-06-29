import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DrawControl, DrawPolygon } from '@antv/l7-draw';
import { Mapbox } from '@antv/l7-maps';
import { Scene } from '@antv/l7';

declare const mapboxgl: any;

@Component({
  selector: 'fd-area-map',
  templateUrl: './area-map.component.html',
  styleUrls: ['./area-map.component.css'],
})
export class AreaMapComponent implements OnInit {
  @ViewChild('areaMap', { static: true }) areaMap: ElementRef<HTMLDivElement>;

  constructor() {}

  ngOnInit(): void {
    this.mapRender();
  }

  mapRender() {
    const polygon: any = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: {
            id: 130,
            type: 'polygon',
            active: true,
            pointFeatures: [
              {
                type: 'Feature',
                properties: {
                  active: true,
                  id: '0',
                },
                geometry: {
                  type: 'Point',
                  coordinates: [118.79864081482003, 36.50619959218312],
                },
              },
              {
                type: 'Feature',
                properties: {
                  active: true,
                  id: '1',
                },
                geometry: {
                  type: 'Point',
                  coordinates: [118.7972246084604, 36.505026752224836],
                },
              },
              {
                type: 'Feature',
                properties: {
                  active: true,
                  id: '2',
                },
                geometry: {
                  type: 'Point',
                  coordinates: [118.79891976455838, 36.503577925392605],
                },
              },
              {
                type: 'Feature',
                properties: {
                  active: true,
                  id: '3',
                },
                geometry: {
                  type: 'Point',
                  coordinates: [118.80093678573661, 36.504733539459096],
                },
              },
              {
                type: 'Feature',
                properties: {
                  active: true,
                  id: '4',
                },
                geometry: {
                  type: 'Point',
                  coordinates: [118.80003556350789, 36.50616509714426],
                },
              },
            ],
          },
          geometry: {
            type: 'Polygon',
            coordinates: [
              [
                [118.79864081482003, 36.50619959218312],
                [118.80003556350789, 36.50616509714426],
                [118.80093678573661, 36.504733539459096],
                [118.79891976455838, 36.503577925392605],
                [118.7972246084604, 36.505026752224836],
                [118.79864081482003, 36.50619959218312],
              ],
            ],
          },
        },
      ],
    };
    mapboxgl.accessToken =
      'pk.eyJ1IjoiYW5iZXJtIiwiYSI6ImNrYnJqNXVnaDJ3ejMyb214a2U4MXlkazkifQ.nsXT5HbJUuhQ6ECvR9i2Sw';
    const map = new mapboxgl.Map({
      container: this.areaMap.nativeElement, // container id
      pitch: 0,
      style: 'mapbox://styles/mapbox/satellite-streets-v11',
      center: [118.79804, 36.505044],
      zoom: 15,
    });
    map.on('load', () => {
      map.addSource('google.tile', {
        type: 'raster',
        tiles: [
          'https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}',
        ],
        tileSize: 256,
      });
      map.addLayer({
        id: 'google',
        type: 'raster',
        source: 'google.tile',
      });
    });
    const scene = new Scene({
      id: this.areaMap.nativeElement,
      map: new Mapbox({
        mapInstance: map,
      }),
      logoVisible: false,
    });

    scene.on('loaded', () => {
      const draw = new DrawPolygon(scene, {
        data: polygon,
      });
    });
  }
}
