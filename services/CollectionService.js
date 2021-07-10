/**
 * @fileoverview Here all the requests to the api related to the collections are made.
 * @author Josué Ayala <josue.ayala@elaniin.com>
 */

export default axios => ({
  /**
   * This service returns all the desired collections from the request 🎃
   * @param {Object} pagination - An object is obtained from the call to action .
   * @param {Number} pagination.page - The current page of the pagination.
   * @param {Number} pagination.quantity - The number of listed files desired.
   * @returns {Promise} The promise object represents the response of all desired collections.
   */
  getCollections({page, quantity}) {
    return axios.$get(`/collection?page=${page}&per_page=${quantity}`);
  },

  saveCollection(collection){
    return axios.$post('/collection', collection)
  }
})
