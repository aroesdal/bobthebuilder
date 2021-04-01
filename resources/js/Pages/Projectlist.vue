<template>
    <v-container>
        <h1>Ongoing projects</h1>
        <v-layout>
            <v-flex md12 xs12 mb-2>
                <v-container fill-height>
                    <v-layout row wrap text-md-center text-sm-center text-xs-center>
                        <v-flex md12 sm12 xs12>
                            <v-card v-for="project in orderedProjects" :key="project.id"
                                    class="mx-auto mb-3"
                            >
                                <v-list-item three-line>
                                    <v-list-item-content>
                                        <v-list-item-title class="headline mb-1">
                                            {{project.project_name}}
                                        </v-list-item-title>
                                        <v-list-item-subtitle>You spent {{project.time_spent}} on this project.</v-list-item-subtitle>
                                    </v-list-item-content>

                                    <v-list-item-avatar size="30">
                                        <v-btn color="error" @click="deleteProject(project)">
                                            <v-icon center>mdi-delete</v-icon>
                                        </v-btn>
                                    </v-list-item-avatar>
                                </v-list-item>
                                <v-card-actions>
                                    <v-layout justify-start>
                                        <v-btn
                                            rounded
                                            color="primary"
                                            class="mr-3"
                                            @click="newInvoice(project)"
                                        >New invoice</v-btn>
                                        <v-btn
                                            rounded
                                            color="success"
                                            @click="finishProject(project)"
                                        >Finish</v-btn>
                                    </v-layout>
                                    <v-layout justify-end>
                                    <v-btn
                                        outlined
                                        rounded
                                        color="error"
                                        v-if="project.is_active"
                                        @click="setProjectStatus(project)"
                                    >Stop</v-btn>
                                    <v-btn
                                        outlined
                                        rounded
                                        color="success"
                                        v-else
                                        @click="setProjectStatus(project)"
                                    >Start</v-btn>
                                    </v-layout>
                                </v-card-actions>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
	export default {
		name: "projectlist",
		data: () => ({
			projects: [
				{
					id: null,
					project_name: null,
					is_active: null,
                    time_spent: 0
				}
			]
		}),
		mounted() {
			this.fetchProjects();
		},
		methods: {
			fetchProjects() {
				this.axios.get('/api/projects/')
					.then(response => {
						this.projects = response.data;
						// console.log(this.projects);
						Object.values(this.projects).forEach(value => {
							value.time_spent = this.timeSpent(value);
						});
					})
					.catch(error => {
						console.error(error);
					});
			},
			deleteProject (project) {
				this.axios.delete('/api/projects/' + project.id)
					.then(response => {
						this.fetchProjects();
					})
					.catch(error => {
						console.error(error);
					});
            },
			setProjectStatus (project) {
				console.log(project.is_active, project.id);
				this.axios.patch('/api/projects/' + project.id, {current_status: project.is_active})
					.then(response => {
						this.fetchProjects();
					})
					.catch(error => {
						console.error(error);
					});
            },
            timeSpent (project) {
	            let timespent = 0;
	            Object.values(project.project_works).forEach(value => {
		            timespent += value.time_spent_in_seconds;
	            });
	            let hours = Math.floor(timespent / 60 / 60);
	            let minutes = Math.floor(timespent / 60) - (hours * 60);
	            let seconds = timespent % 60;

	            return hours + ' hours ' + minutes + ' minutes ' + seconds + ' seconds';
            },
            finishProject (project) {
	            this.axios.patch('/api/projects/' + project.id + '/finish')
		            .then(response => {
			            this.fetchProjects();
		            })
		            .catch(error => {
			            console.error(error);
		            });
            },
            newInvoice (project) {
	            this.axios.patch('/api/projects/' + project.id + '/invoice')
		            .then(response => {
			            this.fetchProjects();
		            })
		            .catch(error => {
			            console.error(error);
		            });
            }
		},
		computed: {
			orderedProjects: function () {
				return _.orderBy(this.projects, 'id')
			}
		}
	};
</script>

<style scoped>

</style>
