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
    <custom-button v-if="isDelete" @click="store.getters.deleteFriend(friend.id);isShowModal =true;isDelete=false">Удалить пользователя</custom-button>
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
import axios from "axios";
import CustomButton from "@/components/CustomButton.vue";
import store from "@/store/store";
import CustomModal from "@/components/CustomModal.vue";

const route = useRoute()
const id: any = route.params.id
const friend: object = ref(null)
const error = ref('')
const isLoading = ref(false)
const isShowModal = ref(false)
const isDelete =ref(true)

const fetchFriendFromApi = async () => {
  try {
    isLoading.value = true
    const response: object = await axios.get('https://jsonplaceholder.typicode.com/users/' + id)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    friend.value = response.data
  } catch (e) {
    error.value = e?.message
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