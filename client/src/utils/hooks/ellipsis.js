function truncate(input, limit = 20) {
  if (input.length > limit) {
    return `${input.substring(0, limit)}...`
  } else {
    return input
  }
}
export default truncate
