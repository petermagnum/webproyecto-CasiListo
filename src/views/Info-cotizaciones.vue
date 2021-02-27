<template>
  <div>
    <NavBakend />
    <v-container>
      <br /><br /><br />

      <v-layout wrap>
        <v-flex class="mt-5" xs12>
          <h1 style="color:#2c64ac">Info Cotización</h1>
          <hr class="black" />
        </v-flex>
      </v-layout>

      <v-flex class="mt-5" xs6>
        <h2 style="color:#2c64ac">Trabajos seleccionados</h2>
        <hr class="black mr-6" />
        <br />

        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  TRABAJO
                </th>
                <th class="text-left">
                  M^2
                </th>
                <th class="text-left">
                  SUBTOTAL
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in paquete.cotizaciones" :key="item.id">
                <td>{{ item.pega }}</td>
                <td>{{ item.superficie }}</td>
                <td>{{ item.subtot }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <br /><br />

        <v-row class="black--text">
          <v-col class="ml-12">
            <h4>Total</h4>
          </v-col>
          <v-col class="mr-12">
            <v-text-field
              placeholder="Placeholder"
              v-model="paquete.total"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-flex>
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
      paquete: {},
    };
  },

  methods: {
    async cargarInfo() {
      try {
        const res = await fetch(
          "https://webproyect-27e28-default-rtdb.firebaseio.com/cotizacion.json"
        );
        const dataDB = await res.json();

        this.paquete = dataDB[this.$route.params.id];
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.cargarInfo();
  },
};
</script>
