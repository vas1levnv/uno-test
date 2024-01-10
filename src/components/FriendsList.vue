<template>
	<custom-button
		v-show="!store.state.isShowContent && !queryText"
		@click="fetchFriendsFromApi"
	>Построить
	</custom-button>
	<div class="friends-content" v-show="store.state.isShowContent">
		<div class="friends-input">
			<custom-input @input="store.commit('changeQueryTextForFriends', queryText)" v-model="queryText"/>
		</div>
		<div v-show="error" class="error">
			{{ error }}
		</div>
		<div v-show="isLoading">
			Идет загрузка...
		</div>
		
		<RouterLink v-show="!isLoading " :to="'friends/' + friend.id" v-for="friend in searchedUsers">
			<div class="friends-item">
				<div>{{ friend.name }}</div>
				<div class="friends-item__bg" :style="{opacity: 1-(0.1*friend.id)}"></div>
			</div>
		</RouterLink>
		<div v-show="searchedUsers.length === 0">Пользователь с таким именем не найден...</div>
	</div>
</template>

<script lang="ts" setup>

import {computed, ref} from "vue";
import axios from "axios";
import CustomInput from "@/components/CustomInput.vue";
import CustomButton from "@/components/CustomButton.vue";
import store from "@/store/store";

const queryText = store.state.queryTextForFriends
const error = ref(null)
const isLoading = ref(false)


const fetchFriendsFromApi = async () => {
	try {
		isLoading.value = true
		store.commit('changeShowContent', true)
		const response: object = await axios.get('https://jsonplaceholder.typicode.com/users')
		await new Promise((resolve) => setTimeout(resolve, 1000))
		store.commit('fetchFriendsFromApi', response.data)
	} catch (e) {
		error.value = e?.message
		store.commit('changeShowContent', false)
	} finally {
		isLoading.value = false
	}
}

const searchedUsers = computed((): void => {
	return store.getters.filterFriendsList
})
</script>

<style scoped lang="scss">
.friends {
	&-input {
		margin-bottom: 1rem;
	}
	
	&-item {
		position: relative;
		padding: 0.5rem 1rem;
		border-radius: 0.25rem;
		margin-bottom: 1rem;
		overflow: hidden;
		
		&__bg {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: -1;
			background: var(--vt-c-indigo);
		}
	}
}
</style>