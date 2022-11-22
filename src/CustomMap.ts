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
  addMarker(item: hasLocation): void {
    new google.maps.Marker({
      position: {
        lat: item.location.lat,
        lng: item.location.lng,
      },
      map: this.googleMap,
    })
  }
}

export interface hasLocation {
  location: {
    lat: number
    lng: number
  }
}
