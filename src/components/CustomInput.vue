<template>
	<input type="text" v-model="value" >
</template>

<script lang="ts" setup>
import {computed} from "vue";

const props = defineProps({
	modelValue: String,
})

const emit = defineEmits(["update:modelValue"])

const value: any = computed({
	get() {
		return props.modelValue;
	},
	set(value) {
		emit("update:modelValue", value);
	},
});

</script>

<style scoped lang="scss">
input {
	background: transparent;
	border: 2px solid var(--vt-c-white-mute);
	padding: 0.5rem 1rem;
	border-radius: 0.5rem;
	color: var(--green);
	outline: none;
	transition: 0.4s ease;
	
	&:focus {
		border-color: var(--vt-c-white);
	}
}
</style>