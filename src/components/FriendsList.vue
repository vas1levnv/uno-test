<template>
	<custom-input v-model="queryText"/>
	<RouterLink :to="'friends/' + friend.id" v-for="friend in friendsList">
		<div>{{ friend.name }}</div>
	</RouterLink>

</template>

<script lang="ts" setup>

import {onMounted, ref} from "vue";
import axios from "axios";
import CustomInput from "@/components/CustomInput.vue";

const friendsList: any = ref([])
const queryText = ref()

const fetchFriendsFromApi = async () => {
	try {
		const response: object = await axios.get('https://jsonplaceholder.typicode.com/users')
		new Promise((resolve) => setTimeout(resolve, 1000))
		friendsList.value = response.data
	} catch (e) {
		console.error(e)
	}
}

onMounted(() => {
	fetchFriendsFromApi()
})

</script>

<style scoped>

</style>