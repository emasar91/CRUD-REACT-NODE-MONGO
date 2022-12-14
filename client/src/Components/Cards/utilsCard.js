import idPrettier from '../../utils/idPrettier'

/**
 * @param data row data to be displayed
 * @param column data from column to be displayed
 * @returns the value from cell
 */
const getValueCell = (data, column) => {
  if (column.id === '_id') {
    return idPrettier(data[column.id])
  } else if (column.id === 'category') {
    return { value: data[column.id].name, tooltip: data[column.id].description }
  } else {
    return data[column.id]
  }
}

export { getValueCell }
