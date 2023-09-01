export default {
  clear: () => window && JSON.parse(window.sessionStorage.getItem('mp-filters')),
  get: () => window && JSON.parse(window.sessionStorage.getItem('mp-filters')),
  set: (filters) => window && window.sessionStorage.setItem('mp-filters', JSON.stringify(filters))
}