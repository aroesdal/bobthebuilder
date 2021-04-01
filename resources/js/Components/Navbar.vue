<template>
    <nav class="navBar">
        <ul class="navBar__link">
            <li><router-link :to="{ name: 'projectnew' }">New project</router-link></li>
            <li><router-link :to="{ name: 'projectlist' }">Projects</router-link></li>
            <li><router-link :to="{ name: 'projectarchive' }">Archive</router-link></li>
        </ul>
    </nav>
</template>

<script>
	export default {
		name: "navbar"
	}
</script>

<style scoped>

</style>
