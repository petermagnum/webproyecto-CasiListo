<template>
  <div>
    <NavBakend />
    <v-container>
      <br /><br /><br />

      <v-layout wrap>
        <v-flex class="mt-5" xs12>
          <h1 style="color:#2c64ac">Info Contacto</h1>
          <hr class="black" />
        </v-flex>
      </v-layout>

      <v-flex class="mt-5" xs6>
        <v-row class="pa-15 justify-center">
          <v-card elevation="10" shaped class="blue--text" width="2000">
            <v-row class="orange--text align-center flex-start">
              <v-col class="ml-12">
                <h4>Nombres:</h4>
              </v-col>
              <v-col class="mr-12">
                <v-text-field v-model="contacto.nombres"></v-text-field>
              </v-col>
            </v-row>
            <v-row class="orange--text justify-content align-center">
              <v-col class="ml-12">
                <h4>Apellidos:</h4>
              </v-col>
              <v-col class="mr-12">
                <v-text-field v-model="contacto.apellidos"></v-text-field>
              </v-col>
            </v-row>
            <v-row class="orange--text align-center flex-start">
              <v-col class="ml-12">
                <h4>Teléfono:</h4>
              </v-col>
              <v-col class="mr-12">
                <v-text-field v-model="contacto.telefono"></v-text-field>
              </v-col>
            </v-row>
            <v-row class="orange--text align-center flex-start">
              <v-col class="ml-12">
                <h4>Empresa:</h4>
              </v-col>
              <v-col class="mr-12">
                <v-text-field v-model="contacto.empresa"></v-text-field>
              </v-col>
            </v-row>
            <v-row class="orange--text align-center flex-start">
              <v-col class="ml-12">
                <h4>Región:</h4>
              </v-col>
              <v-col class="mr-12">
                <v-text-field v-model="contacto.region"></v-text-field>
              </v-col>
            </v-row>
            <v-row class="orange--text align-center flex-start">
              <v-col class="ml-12">
                <h4>Comuna:</h4>
              </v-col>
              <v-col class="mr-12">
                <v-text-field v-model="contacto.comuna"></v-text-field>
              </v-col>
            </v-row>
            <v-row class="orange--text justify-content align-center">
              <v-col class="ml-12">
                <h4>E-Mail:</h4>
              </v-col>
              <v-col class="mr-12">
                <v-text-field v-model="contacto.mail"></v-text-field>
                <v-row>
                  <h4 class="blue--text pa-2">
                    Asegurate de tener acceso a este email.
                  </h4>
                </v-row>
              </v-col>
            </v-row>

            <v-row class="orange--text justify-content align-center">
              <v-col class="ml-12">
                <h4>Mensaje:</h4>
              </v-col>
              <v-col class="mr-12">
                <v-textarea
                  v-model="contacto.mensaje"
                  counter
                  maxlength="350"
                  full-width
                  single-line
                ></v-textarea>
              </v-col>
            </v-row>

            <v-row class="ml-2 mr-2 pt-2">
              <v-divider class="ml-2 mr-2 pt-2" horizontal></v-divider>
            </v-row>

            <v-row class="justify-center pt-2 pb-5">
              <v-card-actions> </v-card-actions>
            </v-row>
          </v-card>
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
      contacto: {},
    };
  },

  methods: {
    async cargarInfo() {
      try {
        const res = await fetch(
          "https://webproyect-27e28-default-rtdb.firebaseio.com/contacto.json"
        );
        const dataDB = await res.json();

        this.contacto = dataDB[this.$route.params.id];
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
