<template>
	<input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
</template>

<script lang="ts" setup>
const props = defineProps({
	modelValue: String,
})

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