<template>
	<RouterLink to="/">Назад</RouterLink>
	<div class="error">
		{{ error }}
	</div>
	<div v-if="!isLoading">
		<div>
			<div>{{ friend?.id }}</div>
			<div>{{ friend?.name }}</div>
			<div>{{ friend?.username }}</div>
			<div>{{ friend?.email }}</div>
			<div>{{ friend?.address?.street }}</div>
		</div>
		<custom-button v-if="isDelete" @click="store.getters.deleteFriend(friend.id);isShowModal =true;isDelete=false">
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

const route = useRoute()
const id: any = route.params.id
const friend = ref<object>({})
const error = ref<string>('')
const isLoading = ref<boolean>(false)
const isShowModal = ref<boolean>(false)
const isDelete = ref<boolean>(true)

interface ResponseData {
	data: object
}

const fetchFriendFromApi = async () => {
	try {
		isLoading.value = true
		const response: ResponseData = await axios.get('https://jsonplaceholder.typicode.com/users/' + id)
		await new Promise((resolve) => setTimeout(resolve, 1000))
		friend.value = response.data
	} catch (err) {
		const errors = err as Error | AxiosError;
		if(!axios.isAxiosError(error)){
			error.value = errors?.message
		}
	} finally {
		isLoading.value = false
	}
}

onMounted(() => {
	fetchFriendFromApi()
})

</script>

<style scoped>

</style>