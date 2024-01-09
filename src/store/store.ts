// @ts-ignore
import {createStore} from "vuex";

const store: object = createStore({
	state() {
		return {
			queryTextForFriends: '',
		}
	},
	mutations: {
		changeQueryTextForFriends(state: any, text: string) {
			state.queryTextForFriends = text
		},
	},

})

export default store