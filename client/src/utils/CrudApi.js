import axios from 'axios'
const endpoint = process.env.REACT_APP_CRUD_APP

class CrudApi {
  static async getCardById(id) {
    const res = await axios.get(
      `${endpoint}/quotes/${externalId}/externalId?status=pending`
    )
    const data = res.data
    return data
  }
}

export default CrudApi
