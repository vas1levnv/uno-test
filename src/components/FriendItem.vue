<template>
	<RouterLink to="/">Назад</RouterLink>
	<div class="error">
		{{ error }}
	</div>
	<div v-if="!isLoading">
		<div style="margin: 2rem 0">
			<div class="friend-property">
				<b>Id</b>
				<div>{{ friend.id }}</div>
			</div>
			<div class="friend-property">
				<b>Name</b>
				<div>{{ friend.name }}</div>
			</div>
			<div class="friend-property">
				<b>Username</b>
				<div>{{ friend.username }}</div>
			</div>
			<div class="friend-property">
				<b>Email</b>
				<div>{{ friend.email }}</div>
			</div>
			<div class="friend-property">
				<b>Street</b>
				<div>{{ friend.address.street }}</div>
			</div>
		</div>
		<custom-button v-if="isDelete" @click="handleDeleteUser(friend.id)">
			Удалить пользователя
		</custom-button>
	</div>
	<div v-else>
		Идет загрузка...
	</div>
	<custom-modal :is-show="isShowModal" @changeIsShowModal="isShowModal=false">
		<div>Пользователь удален</div>
		<RouterLink to="/">Перейти назад</RouterLink>
	</custom-modal>
</template>

<script lang="ts" setup>
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import axios, {AxiosError} from "axios";
import CustomButton from "@/components/CustomButton.vue";
import store from "@/store/store";
import CustomModal from "@/components/CustomModal.vue";
import type {ResponseData} from "@/store/state";

const route = useRoute()
const id: any = route.params.id
const friend = store.state.friend
const error = ref<any>('')
const isLoading = ref<boolean>(false)
const isShowModal = ref<boolean>(false)
const isDelete = ref<boolean>(true)

const fetchFriendFromApi = async () => {
	try {
		isLoading.value = true
		const response: ResponseData = await axios.get('https://jsonplaceholder.typicode.com/users/' + id)
		await new Promise((resolve) => setTimeout(resolve, 1000))
		store.commit('fetchFriendItemFromApi', response.data)
	} catch (err) {
		const errors = err as Error | AxiosError;
		if (!axios.isAxiosError(error)) {
			error.value = errors?.message
		}
	} finally {
		isLoading.value = false
	}
}

const handleDeleteUser = (id: string | number) => {
	store.getters.deleteFriend(id);
	isShowModal.value = true;
	isDelete.value = false
}

onMounted(() => {
	fetchFriendFromApi()
})

</script>

<style scoped>
.friend-property{
	display: flex;
	gap: 1rem;
}
</style>