import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import { IdGenerator } from "./services/IdGenerator"

let id = new IdGenerator().generateId()
console.log(id)

app.post('/user/signup', createUser)
app.put('/user/edit/:id', editUser)