import {createStore} from "vuex";
import type {Friend, State} from "@/store/state";


const store = createStore<State>({
	state() {
		return {
			queryTextForFriends: '',
			friendsList: [],
			isShowContent: false,
			friend: {
				id: '',
				name: '',
				email: '',
				username: '',
				address: {
					street: ''
				}
			}
		}
	},
	getters: {
		filterFriendsList: (state: State) => {
			return state.friendsList.filter((user: any) => user.name.toLowerCase().includes(state.queryTextForFriends.toLowerCase()))
		},
		deleteFriend: (state: State) => (id: number) => {
			state.friendsList = [...state.friendsList].filter((user: any) => user.id !== id)
		}
	},


	mutations: {
		changeQueryTextForFriends(state: any, text: string) {
			state.queryTextForFriends = text
		},
		fetchFriendsFromApi(state: any, data: Array<object>) {
			state.friendsList = [...data]
		},

		fetchFriendItemFromApi(state: any, data: Friend) {
			state.friend.id = data.id
			state.friend.name = data.name
			state.friend.email = data.email
			state.friend.username = data.username
			state.friend.address.street = data.address.street
		},
		changeShowContent(state: any, data: boolean) {
			state.isShowContent = data
		}
	},

})

export default store