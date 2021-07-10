export default axios => ({
  getCollections({page, quantity}) {
    return axios.$get(`/collection?page=${page}&per_page=${quantity}`);
  },

  saveCollection(collection){
    return axios.$post('/collection', collection)
  }
})
