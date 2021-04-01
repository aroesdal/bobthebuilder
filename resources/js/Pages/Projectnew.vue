<template>
    <v-container>
        <h1>New project</h1>
        <v-layout>
            <v-flex md12 xs12 mb-2>
                <v-container fill-height>
                    <v-layout row wrap text-md-center text-sm-center text-xs-center>
                        <v-flex md12 sm12 xs12>
                            <v-form>
                                <v-container>
                                    <v-row>
                                        <v-col
                                            cols="12"
                                            sm="6"
                                            md="5"
                                        >
                                            <v-text-field
                                                v-model="project.project_name"
                                                label="Name"
                                                :error-messages="project.error"
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row color="success">
                                        <v-btn @click="storeProject()">Save</v-btn>
                                    </v-row>
                                </v-container>
                            </v-form>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
	export default {
		name: "projectnew",
		data: () => ({
			project:{
				project_name: '',
                error: ''
			}
		}),
		mounted() {
		},
		methods: {
			storeProject() {
				this.isLoading = true;
				this.axios.post('/api/projects/', {project_name: this.project.project_name})
					.then(response => {
						this.$router.push({path: '/projects'});
					})
					.catch(error => {
                        this.project.error = error.response.data.errors.project_name[0];
						console.log(error)
					});
			}
		}
	};
</script>

<style scoped>

</style>
