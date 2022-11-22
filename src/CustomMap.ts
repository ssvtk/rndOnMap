export class CustomMap {
  private googleMap: google.maps.Map
  constructor(id: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(id) as HTMLElement,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      }
    )
  }
  //func add marker on map
  addMarker(lat:number, lng:number):void {

  } 
}
