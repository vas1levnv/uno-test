import {createStore} from "vuex";
import router from "@/router";

const store: object = createStore({
	state() {
		return {
			queryTextForFriends: '',
		}
	},
	mutations: {
		changeQueryTextForFriends(state, text) {
			state.queryTextForFriends = text
		},
	},

})

export default store