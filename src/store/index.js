import { createStore } from 'vuex'

export default createStore({
  state: {
    characters: [], // va a mostrar todo
    charactersFilter: [] //va a mostrar lo que queremos, para no tener que hacer otra peticion a la API
  },
  getters: {
  },
  mutations: {
    setCharacters(state, payload) {
      state.characters = payload
    },
    setCharactersFilter(state, payload){
      state.charactersFilter = payload
    },
  },
  actions: {
    async getCharacters({commit}) {
      try {
        const response = await fetch ('https://rickandmortyapi.com/api/character')
        const data = await response.json()
        commit('setCharacters', data.results)
        commit('setCharactersFilter', data.results)

      } catch (error) {
        console.error(error);
      }
    }
  },
  modules: {
  }
})
