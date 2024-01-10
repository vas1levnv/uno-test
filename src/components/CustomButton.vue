<template>
	<button>
		<slot/>
	</button>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
button {
	padding: 0.5rem 1rem;
	border-radius: 0.5rem;
	color: var(--green);
	background: transparent;
	border: 2px solid var(--color-border);
	font-weight: 700;
	transition: 0.4s ease;
	cursor: pointer;
	overflow: hidden;
	
	&:hover {
		background: var(--green-hover);
		color: var(--vt-c-black);
	}
}
</style>