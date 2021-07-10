export default {
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
