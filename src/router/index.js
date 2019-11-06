import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
	  path: "/",
	  redirect:'/login',
	  component: () => import( "../views/Inicial.vue"),
	children:[
		{
			name: "login",
			path:'/login',
			component: () => import( "../views/Login.vue")
		},
		{
			name:"registrar",
			path:'/registrar',
			component: () => import( "../views/Registrar.vue")
		}
	]
     
    },

  {
    path: "/app",
	name: "menu",
	
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
	component: () => import( "../views/Menu.vue"),
	children:[
		{
			path: "/sistespe",
			name: "sistespe",
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () =>
			  import( "../views/SistEspe.vue")
		  },
		  {
			path: "/addpet",
			name: "addpet",
			component: () =>
			  import( "../views/AddPet.vue")
		  },
		  {
			path: "/addpet:id",
			name: "addpet",
			component: () =>
			  import( "../views/AddPet.vue")
		  },
		  {
			path: "/vets",
			name: "vets",
			component: () => import( "../views/Vets.vue")
		  },
		  {
			path: "/consultas",
			name: "consultas",
			component: () =>
			  import( "../views/Consultas.vue")
		  },
		  {
			path: "/login",
			name: "login",
			component: () =>
			  import( "../views/Login.vue")
		  },
		  {
			path: "/registrar",
			name: "registrar",
			component: () =>
			  import( "../views/Registrar.vue")
		  },
		  {
			path: "/pets",
			name: "pets",
			component: () =>
			  import( "../views/Pets.vue")
		  },
		  {
			path: "/avaliar",
			name: "avaliar",
			component: () =>
			  import( "../views/Avaliar.vue")
		  },
	]
  },
//   {
//     path: "/sistespe",
//     name: "sistespe",
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () =>
//       import( "../views/SistEspe.vue")
//   },
//   {
//     path: "/addpet",
//     name: "addpet",
//     component: () =>
//       import( "../views/AddPet.vue")
//   },
//   {
//     path: "/addpet:id",
//     name: "addpet",
//     component: () =>
//       import( "../views/AddPet.vue")
//   },
//   {
//     path: "/vets",
//     name: "vets",
//     component: () => import( "../views/Vets.vue")
//   },
//   {
//     path: "/consultas",
//     name: "consultas",
//     component: () =>
//       import( "../views/Consultas.vue")
//   },
//   {
//     path: "/login",
//     name: "login",
//     component: () =>
//       import( "../views/Login.vue")
//   },
//   {
//     path: "/registrar",
//     name: "registrar",
//     component: () =>
//       import( "../views/Registrar.vue")
//   },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
