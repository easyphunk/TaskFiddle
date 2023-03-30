const AppRoutes = {
    home: {
        pattern: '/'
    },
    board: {
        pattern: '/board/:id',
        getPath: (id: string): string => `/board/${id}`
    },
    members: {
        pattern: '/members/:id',
        getPath: (id: string): string => `/members/${id}`
    },
    projectSettings: {
        pattern: '/project-settings/:id',
        getPath: (id: string): string => `/project-settings/${id}`
    },
    allProjects: {
        pattern: '/all-projects'
    },
    createProject: {
        pattern: '/create-project'
    },
}

export default AppRoutes;