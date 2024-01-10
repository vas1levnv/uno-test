<template>
	<custom-button
		v-show="!isShowContent"
		@click="fetchFriendsFromApi"
	>Построить
	</custom-button>
	<div class="friends-content" v-show="isShowContent">
		<div class="friends-input">
			<custom-input v-model="queryText"/>
		</div>
		<div v-show="error" class="error">
			{{ error }}
		</div>
		<RouterLink :to="'friends/' + friend.id" v-for="friend in searchedUsers">
			<div class="friends-item">
				<div>{{ friend.name }}</div>
				<div class="friends-item__bg" :style="{opacity: 1-(0.1*friend.id)}"></div>
			</div>
		</RouterLink>
	</div>
	
	<div>{{ store.state.queryTextForFriends }}</div>
	<div @click="store.commit('changeQueryTextForFriends', queryText)">btn</div>
</template>

<script lang="ts" setup>

import {computed, ref} from "vue";
import axios from "axios";
import CustomInput from "@/components/CustomInput.vue";
import CustomButton from "@/components/CustomButton.vue";
import store from "@/store/store";

const friendsList: any = ref([])
const queryText = ref('')
const error = ref(null)
const isShowContent = ref(false)


const fetchFriendsFromApi = async () => {
	try {
		isShowContent.value = true
		const response: object = await axios.get('https://jsonplaceholder.typicode.com/users')
		new Promise((resolve) => setTimeout(resolve, 1000))
		friendsList.value = response.data
	} catch (e) {
		error.value = e.message
		isShowContent.value = false
	}
}

const searchedUsers = computed((): void => {
	return friendsList.value.filter(user => user.name.toLowerCase().includes(queryText.value.toLowerCase()))
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