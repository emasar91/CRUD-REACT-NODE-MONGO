import axios from 'axios'
const endpoint = process.env.REACT_APP_CRUD_APP
const apiV = 'v1'

class CrudApi {
  //cards - products
  static async addNewCard(newData) {
    const res = await axios.post(`${endpoint}/${apiV}/card/`, newData)
    const data = res.data
    return data
  }

  static async getAllCards() {
    const res = await axios.get(`${endpoint}/${apiV}/cards/`)
    const data = res.data
    return data
  }

  static async updateCardById(id, dataToUpdate) {
    const res = await axios.put(`${endpoint}/${apiV}/card/${id}`, dataToUpdate)
    const data = res.data
    return data
  }

  static async deleteCardById(id) {
    const res = await axios.delete(`${endpoint}/${apiV}/card/${id}`)
    const data = res.data
    return data
  }

  //categories
  static async addNewCategory(newData) {
    const res = await axios.post(`${endpoint}/${apiV}/category/`, newData)
    const data = res.data
    return data
  }

  static async getAllCategories() {
    const res = await axios.get(`${endpoint}/${apiV}/categories/`)
    const data = res.data
    return data
  }

  static async getCategory(id) {
    const res = await axios.get(`${endpoint}/${apiV}/category/${id}`)
    const data = res.data
    return data
  }

  static async updateCategoryById(id, dataToUpdate) {
    const res = await axios.put(
      `${endpoint}/${apiV}/category/${id}`,
      dataToUpdate
    )
    const data = res.data
    return data
  }
}

export default CrudApi
