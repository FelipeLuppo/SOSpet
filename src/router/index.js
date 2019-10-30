import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [
//   {
//     path: "/",
//     name: "home",
//     component: Home
//   },
//   {
//     path: "/about",
//     name: "about",
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () =>
//       import(/* webpackChunkName: "about" */ "../views/About.vue")
//   },
  {
    path: "/pets",
    name: "pets",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Pets.vue")
  },
  {
    path: "/sistespe",
    name: "sistespe",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SistEspe.vue")
  },
  {
	  path:"/addpet",
	  name:'addpet',
	  component: () =>
      import(/* webpackChunkName: "about" */ "../views/AddPet.vue")
  },
  {
	path:"/addpet:id",
	name:'addpet',
	component: () =>
	import(/* webpackChunkName: "about" */ "../views/AddPet.vue")
},
{
	path:"/vets",
	name:'vets',
	component: () =>
	import(/* webpackChunkName: "about" */ "../views/Vets.vue")
},
{
	path:"/consultas",
	name:'consultas',
	component: () =>
	import(/* webpackChunkName: "about" */ "../views/Consultas.vue")
},
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
