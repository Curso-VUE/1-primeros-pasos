Vue.filter('string_filter', (value, param) => {
  return `${param} ${value}`
})