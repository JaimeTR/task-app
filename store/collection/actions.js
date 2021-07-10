export default {
  /**
   * This action sets all values to a mutation.
   * @param {object} arguments - Desired arguments from vuex for actions
   * @param {Object} pagination - An object is obtained from the call to action .
   * @param {Number} pagination.page - The current page of the pagination.
   * @param {Number} pagination.quantity - The number of listed files desired.
   */
  async getAllCollections({ commit }, pagination){
    try {
      commit('setData', { prop: 'loader', value: true });
      const response = await this.$CollectionService.getCollections(pagination);
      commit('setData', { prop: 'loader', value: false });
      commit('setData', { prop: 'collections', value: response.data });
    } catch (error) {
      console.error(error);
    }
  }
}
