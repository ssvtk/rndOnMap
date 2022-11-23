/// <reference types="@types/google.maps" />
import { User } from "./User"
import { Company } from "./Company"
import { CustomMap } from "./CustomMap"
 



const newUser = new User()
const newCompany = new Company()

const map = new CustomMap("map")

map.addMarker(newCompany)
map.addMarker(newUser)
