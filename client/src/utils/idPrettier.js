function idPrettier(id) {
  return id.match(/[0-9]/g).join().replace(/,/g, '').slice(-6)
}

export default idPrettier
