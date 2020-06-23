import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
declare const fengmap: any;

@Component({
  selector: 'fd-fm-map',
  templateUrl: './fm-map.component.html',
  styleUrls: ['./fm-map.component.css'],
})
export class FmMapComponent implements OnInit {
  @ViewChild('fengMapRef', { static: true }) fengMapRef: ElementRef<
    HTMLDivElement
  >;
  map: any;

  @Input() fmapId = 'gmyxzg-yfl';

  constructor() {}

  ngOnInit(): void {
    this.openMap();
  }

  openMap() {
    /**
     * 初始化参数，默认使用在线数据，从蜂鸟视图数据服务器加载模型数据
     * https://www.fengmap.com/docs/js/v2.5.0/fengmap.FMMap.html
     *
     * */
    const mapOptions = {
      // 必要，地图容器
      container: this.fengMapRef.nativeElement,
      // 必要，地图应用名称，通过蜂鸟云后台创建
      appName: '研祥智谷',
      // 必要，地图应用密钥，通过蜂鸟云后台获取
      key: '49504d4b506cb9ea13c3c8501a64c31a',
    };

    // 初始化地图对象
    this.map = new fengmap.FMMap(mapOptions);

    // 打开Fengmap服务器的地图数据和主题
    this.map.openMapById(this.fmapId, (error) => {
      // 打印错误信息
      console.log(error);
    });

    // 地图加载完成事件
    this.map.on('loadComplete', () => {});
  }
}
