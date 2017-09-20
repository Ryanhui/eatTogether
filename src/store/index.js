import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
	state: {
		count: 3
	},

	mutations: {
		increment(state){
			state.count++
		}
	},

	actions: {
		
	}
})