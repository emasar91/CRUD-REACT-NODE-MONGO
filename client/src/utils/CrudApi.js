import axios from 'axios'
const endpoint = process.env.REACT_APP_CRUD_APP
const apiV = 'v1'

class CrudApi {
  static async getAllCards() {
    const res = await axios.get(`${endpoint}/${apiV}/cards/`)
    const data = res.data
    return data
  }
}

export default CrudApi
