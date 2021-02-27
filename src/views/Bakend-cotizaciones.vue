<template>
  <div>
    <NavBakend/>
    <v-container>
      <br /><br /><br />
      <h1 class="my-5">Bakend Cotizaciones</h1>
      <v-row class="justify-center pt-8 pb-8"> </v-row>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">e-mail</th>
            <th scope="col">total</th>
            <th scope="col">Accion</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in arrayCotizaciones" :key="item.id">
            <td>{{ item.mail }}</td>
            <td>{{ item.total }}</td>
            <td>
              <router-link
                class="btn btn-warning ml-2 btn-sm"
                :to="{
                  name: 'Info-cotizaciones',
                  params: {
                    id: item.idp,
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
import NavBakend from "../components/Nav-bakend.vue";
export default {
  components: {
    NavBakend,
  },
  data() {
    return {
      arrayCotizaciones: [],
    };
  },
  computed: {},
  methods: {
    async cargarLocalStorage() {
      try {
        const res = await fetch(
          "https://webproyect-27e28-default-rtdb.firebaseio.com/cotizacion.json"
        );
        const dataDB = await res.json();

        for (let id in dataDB) {
          this.arrayCotizaciones.push(dataDB[id]);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.cargarLocalStorage();
  },
};
</script>
