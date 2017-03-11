import {Component} from '@angular/core';

let templateStr = `
  <h1>Data Layer</h1>
  <ng2-map zoom="4" center="-28, 137">
    <data-layer geoJson="https://storage.googleapis.com/mapsdevsite/json/google.json"></data-layer>
  </ng2-map>
  <code>
    <br/><b>HTML</b>
    <pre>{{templateStr | htmlCode:'-code'}}</pre>
  </code>
`;
@Component({
  template: templateStr
})
export class DataLayerComponent {
  templateStr: string = templateStr;
}
