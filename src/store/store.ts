import {createStore} from "vuex";
import type {State} from "@/store/state";

const store: object = createStore<State>({
	state() {
		return {
			queryTextForFriends: '',
			friendsList: [],
			isShowContent: false,
		}
	},
	getters: {
		filterFriendsList: (state: Array<object>) => {
			return state.friendsList.filter((user: object) => user.name.toLowerCase().includes(state.queryTextForFriends.toLowerCase()))
		},
		deleteFriend: (state: Array<object>) => (id: number) => {
			state.friendsList = [...state.friendsList].filter((user: object) => user.id !== id)
		}
	},


	mutations: {
		changeQueryTextForFriends(state: any, text: string) {
			state.queryTextForFriends = text
		},
		fetchFriendsFromApi(state: any, data: Array<object>) {
			state.friendsList = [...data]
		},
		changeShowContent(state: any, data: boolean) {
			state.isShowContent = data
		}
	},

})

export default store