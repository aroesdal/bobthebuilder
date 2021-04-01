<template>
    <v-app>
        <Navbar></Navbar>
        <router-view></router-view>
    </v-app>
</template>

<script>
    import './Styles/app.scss'
	export default {
		name: "app",
        components: {
			Navbar: () => import('./Components/Navbar.vue')
        }
	}
</script>

<style scoped>

</style>
