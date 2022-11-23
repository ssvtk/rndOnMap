//Instuctions to every other class
// on how they can be an orgument to "addMarker"
interface Mappable {
  location: {
    lat: number
    lng: number
  }
}
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
  addMarker(item: Mappable): void {
    new google.maps.Marker({
      position: {
        lat: item.location.lat,
        lng: item.location.lng,
      },
      map: this.googleMap,
    })
  }
}
