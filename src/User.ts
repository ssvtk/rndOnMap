import { faker } from "@faker-js/faker"
import { Mappable } from "./CustomMap"

export class User implements Mappable {
  name: string
  location: {
    lat: number
    lng: number
  }

  constructor() {
    this.name = faker.name.fullName()
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    }
  }
  markerContent(): string {
    return `<h1>${this.name}</h1>
    <p>${faker.lorem.paragraph(5)}</p>`
  }
}
