<template>
	<div class="error">
		{{ error }}
	</div>
	<div>
		<div>
			<div>{{ friend?.id }}</div>
			<div>{{ friend?.name }}</div>
			<div>{{ friend?.username }}</div>
			<div>{{ friend?.email }}</div>
			<div>{{ friend?.address?.street }}</div>
		</div>
		<custom-button @click="store.getters.deleteFriend(friend.id)">Удалить пользователя</custom-button>
	</div>
</template>

<script lang="ts" setup>
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import axios from "axios";
import CustomButton from "@/components/CustomButton.vue";
import store from "@/store/store";

const route = useRoute()
const id: any = route.params.id
const friend: object = ref(null)
const error = ref('')

const fetchFriendFromApi = async () => {
	try {
		const response: object = await axios.get('https://jsonplaceholder.typicode.com/users/' + id)
		new Promise((resolve) => setTimeout(resolve, 1000))
		friend.value = response.data
	} catch (e) {
		error.value = e.message
	}
}

onMounted(() => {
	fetchFriendFromApi()
})

</script>

<style scoped>

</style>