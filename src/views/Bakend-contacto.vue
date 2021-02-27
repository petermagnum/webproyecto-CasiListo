<template>
<div>
  <Nav-bakend/>
  <v-container>
    <br /><br /><br />
    <h1 class="my-5">Bakend Contactos</h1>
    <v-row class="justify-center pt-8 pb-8">
   
    </v-row>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>    
          <th scope="col">e-mail</th>  
          <th scope="col">Accion</th>     
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in arrayContactos" :key="item.id">
         
          <td>{{ item.nombres }}</td>
          <td>{{ item.apellidos }}</td>
          <td>{{ item.mail }}</td>
          <td>
            <router-link
              class="btn btn-warning ml-2 btn-sm"
              :to="{
                name: 'Info-contacto',
                params: {
                  id: item.id,
                },
              }"
            >
              Ver Info
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </v-container>
  </div>
</template>

<script>
import NavBakend from '../components/Nav-bakend.vue'
export default {
  components: { NavBakend },


  data() {
    return {
      arrayContactos: [],
    };
  },
  computed: {},
  methods: {
    async cargarLocalStorage() {
    
      try {
        const res = await fetch(
          "https://webproyect-27e28-default-rtdb.firebaseio.com/contacto.json"
        );
        const dataDB = await res.json();

        for (let id in dataDB) {
          this.arrayContactos.push(dataDB[id]);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  created(){
    this.cargarLocalStorage();
  }
};
</script>
