// Dynamic Loading Modules

// Views
const Dashboard = resolve => { require.ensure(['../views/Dashboard.vue'], ()=>{ resolve(require('../views/Dashboard.vue')); }); };

// UI Components
const Buttons = resolve => { require.ensure(['../components/Buttons.vue'], ()=>{ resolve(require('../components/Buttons.vue')); }); };
const Badges = resolve => { require.ensure(['../components/Badges.vue'], ()=>{ resolve(require('../components/Badges.vue')); }); };
const Alerts = resolve => { require.ensure(['../components/Alerts.vue'], ()=>{ resolve(require('../components/Alerts.vue')); }); };
const ProgressBars = resolve => { require.ensure(['../components/ProgressBars.vue'], ()=>{ resolve(require('../components/ProgressBars.vue')); }); };

const BasicForms = resolve => { require.ensure(['../components/forms/BasicForms.vue'], ()=>{ resolve(require('../components/forms/BasicForms.vue')); }); };
const Grids = resolve => { require.ensure(['../components/Grids.vue'], ()=>{ resolve(require('../components/Grids.vue')); }); };
const Widgets = resolve => { require.ensure(['../components/Widgets.vue'], ()=>{ resolve(require('../components/Widgets.vue')); }); };
const Typography = resolve => { require.ensure(['../components/Typography.vue'], ()=>{ resolve(require('../components/Typography.vue')); }); };
const Icons = resolve => { require.ensure(['../components/icons/Icons.vue'], ()=>{ resolve(require('../components/icons/Icons.vue')); }); };
const SetsList = resolve => { require.ensure(['../components/icons/SetsList.vue'], ()=>{ resolve(require('../components/icons/SetsList.vue')); }); };
const Sets = resolve => { require.ensure(['../components/icons/Set.vue'], ()=>{ resolve(require('../components/icons/Set.vue')); }); };
const Tables = resolve => { require.ensure(['../components/tables/Tables.vue'], ()=>{ resolve(require('../components/tables/Tables.vue')); }); };


//Charts
const ChartJS = resolve => { require.ensure(['../components/charts/ChartJS.vue'], ()=>{ resolve(require('../components/charts/ChartJS.vue')); }); };


//Maps
const GoogleMapsPage = resolve => { require.ensure(['../components/maps/google-maps/GoogleMapsPage.vue'], ()=>{ resolve(require('../components/maps/google-maps/GoogleMapsPage.vue')); }); };
const LeafletMapsPage = resolve => { require.ensure(['../components/maps/leaflet-maps/LeafletMapsPage.vue'], ()=>{ resolve(require('../components/maps/leaflet-maps/LeafletMapsPage.vue')); }); };


// // User Info
// const User = resolve => { require.ensure(['../layouts/User.vue'], ()=>{ resolve(require('../layouts/User.vue')); }); };

//Pages
const Login = resolve => { require.ensure(['../pages/login/Login.vue'], ()=>{ resolve(require('../pages/login/Login.vue')); }); };
const Register = resolve => { require.ensure(['../pages/register/Register.vue'], ()=>{ resolve(require('../pages/register/Register.vue')); }); };
const Page404 = resolve => { require.ensure(['../pages/Page404.vue'], ()=>{ resolve(require('../pages/Page404.vue')); }); };
const Page500 = resolve => { require.ensure(['../pages/Page500.vue'], ()=>{ resolve(require('../pages/Page500.vue')); }); };


export const routes = [
    {
        path : '',
        name: 'home',
        components:{
            default: Dashboard
        }
    },
    {   path : '/dashboard',
        components:{
            default: Dashboard
        }
    },

    // // UI Components
    { path : '/components/buttons', name: 'buttons', component: Buttons },
    { path : '/components/badges', name: 'badges', component: Badges },
    { path : '/components/alerts', name: 'alerts', component: Alerts },
    { path : '/components/progressbars', name: 'progressbars', component: ProgressBars },
    { path : '/components/basic-form', name: 'basic-form', component: BasicForms },
    { path : '/components/grids', name: 'grids', component: Grids },
    { path : '/components/widgets', name: 'widgets', component: Widgets },
    { path : '/components/typography', name: 'typography', component: Typography },
    { path : '/components/tables', name: 'tables', component: Tables },

    {
        path : '/components/icons',
        component: Icons,
        children:[
            {
                path: '',
                component: SetsList,
                name: 'Icons'
            },
            {
                path: ':name',
                component: Sets,
                props: true,

            }
        ]
    },
    {
        path : '/components/charts',
        name: 'Charts',
        component: { render (c) { return c('router-view') }},
        children:[

            {
                path: '/components/chartjs',
                component: ChartJS,
                name: 'chart-js'
            }
        ]
    },
    {
        path : '/components/maps',
        name: 'Maps',
        component: { render (c) { return c('router-view') }},
        children:[
            {
                path: '/components/maps/google-maps',
                component: GoogleMapsPage,
                name: 'google-maps-page'
            },
            {
                path: '/components/maps/leaflet-maps',
                component: LeafletMapsPage,
                name: 'leaflet-maps-page'
            }
        ]
    },
    {
        path : '/components/auth',
        name: 'auth',
        component: { render (c) { return c('router-view') }},
        children:[
            {
                path: '/auth/login',
                component: Login,
                name: 'login',
                meta: {
                    default: false,
                    title: 'Login'
                }
            },
            {
                path: '/auth/register',
                component: Register,
                name: 'Register'
            },
            {
                path: '/auth/Page404',
                component: Page404,
                name: 'Page404'
            },
            {
                path: '/auth/Page500',
                component: Page500,
                name: 'Page500'
            }

        ]
    },

    //Redirect to Home
    { path: '/redirect-me', redirect: { name: 'home' } },

    // 404 redirect to home
    { path: '*', redirect: { name: 'Page404', component: Page404 }  }
];