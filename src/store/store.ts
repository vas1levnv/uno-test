// @ts-ignore
import {createStore} from "vuex";

const store: object = createStore({
	state() {
		return {
			queryTextForFriends: '',
			friendsList: [
			],
		}
	},
	getters:{
		filterFriendsList: (state: Array<object>) => {
			return state.friendsList.filter((user:object) => user.name.toLowerCase().includes(state.queryTextForFriends.toLowerCase()))
		}
	},
	
	
	mutations: {
		changeQueryTextForFriends(state: any, text: string) {
			state.queryTextForFriends = text
		},
		fetchFriendsFromApi(state:any, data: Array<object>){
			state.friendsList = [...data]
		}
	},

})

export default store