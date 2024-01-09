<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
</script>

<template>
	<div class="container">
		<header>
			<nav>
				<RouterLink to="/">Home</RouterLink>
				<RouterLink to="/about">About</RouterLink>
			</nav>
		</header>
		<RouterView/>
	</div>
</template>

<style scoped lang="scss">
header {
	padding: 1rem 0;
}
nav{
	display: flex;
	gap: 0.5rem;
}
</style>
