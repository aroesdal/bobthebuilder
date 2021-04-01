const routes = [
    {
        path: '/projects',
        component: () => import('../Pages/ProjectList.vue'),
        name: 'projectlist'
    },
    {
        path: '/projects/new',
        component: () => import('../Pages/ProjectNew.vue'),
        name: 'projectnew'
    },
    {
        path: '/archive',
        component: () => import('../Pages/ProjectArchive.vue'),
        name: 'projectarchive'
    }
]

export default routes;
