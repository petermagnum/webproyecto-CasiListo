<template>
  <div>
    <NavBakend />
    <v-container>
      <br /><br /><br />

      <v-layout wrap>
        <v-flex class="mt-5" xs12>
          <h1 style="color:#2c64ac">Info Postulante</h1>
          <hr class="black" />
        </v-flex>
      </v-layout>

      <v-row class="pa-15 justify-center">
        <v-card elevation="10" shaped class="blue--text" width="900">
          <v-row class="orange--text align-center flex-start">
            <v-col class="ml-12">
              <h4>Nombres:</h4>
            </v-col>
            <v-col class="mr-12">
              <v-text-field
                :rules="rules"
                type="text"
                v-model="formulario.nombre"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="orange--text justify-content align-center">
            <v-col class="ml-12">
              <h4>Apellidos:</h4>
            </v-col>
            <v-col class="mr-12">
              <v-text-field
                :rules="rules"
                type="text"
                v-model="formulario.apellidos"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="orange--text justify-content align-center">
            <v-col class="ml-12">
              <h4>Edad:</h4>
            </v-col>
            <v-col>
              <v-select
                :items="numbers"
                menu-props="auto"
                hide-details
                label="Edad"
                single-line
                v-model.number="formulario.edad"
              ></v-select>
            </v-col>
            <v-col>
              <h4>Telefono:</h4>
            </v-col>
            <v-col class="mr-12">
              <v-text-field
                :rules="telefono"
                type="text"
                v-model="formulario.fono"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="orange--text justify-content align-center">
            <v-col class="ml-12">
              <h4>E-Mail:</h4>
            </v-col>
            <v-col class="mr-12">
              <v-text-field
                :rules="rules"
                type="text"
                v-model="formulario.mail"
              ></v-text-field>
              <v-row> </v-row>
            </v-col>
          </v-row>
          <v-row class="orange--text justify-content align-center">
            <v-col class="ml-12">
              <h4>Rut:</h4>
            </v-col>
            <v-col class="mr-12">
              <v-text-field
                :rules="rules"
                type="text"
                v-model="formulario.rut"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="orange--text justify-content align-center">
            <v-col>
              <h4 class="ml-12">Direccion:</h4>
            </v-col>
            <v-col class="mr-12">
              <v-text-field
                :rules="rules"
                v-model="formulario.direccion"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="ml-8 mr-8 pt-8">
            <v-divider class="ml-8 mr-8 pt-8" horizontal></v-divider>
          </v-row>

          <v-card-title class="ml-8"
            >Ingrese datos de la vivienda:</v-card-title
          >
          <v-row class="ml-8 mr-8 pt-8">
            <v-divider class="ml-8 mr-8 pt-8" horizontal></v-divider>
          </v-row>
          <v-row class="black--text">
            <v-col class="ml-12">
              <h4>Superficie de la vivienda</h4>
            </v-col>
            <v-col class="mr-12">
              <v-slider
                v-model="formulario.superficie"
                :rules="metros"
                label="m2"
                step="1"
                thumb-label="always"
                ticks
                min="30"
                max="140"
                type="number"
              ></v-slider>
            </v-col>
          </v-row>
          <v-row class="black--text">
            <v-col class="ml-12">
              <h4>Año permiso edificación de la vivienda</h4>
            </v-col>
            <v-col class="mr-12">
              <v-slider
                v-model="formulario.year"
                :rules="edificacion"
                label="m2"
                step="1"
                thumb-label="always"
                ticks
                min="1900"
                max="2021"
              ></v-slider>
            </v-col>
          </v-row>
          <v-row class="ml-12">
            <v-checkbox
              v-model="formulario.categorias"
              label="¿Cuenta con la escritura de la vivienda?"
              color="primary"
              value="escritura"
              hide-details
              class="black--text"
            ></v-checkbox>
          </v-row>
          <v-row class="ml-12">
            <v-checkbox
              v-model="formulario.categorias"
              label="¿Su carnet de identidad esta vigente?"
              color="primary"
              value="carnet"
              hide-details
              class="black--text"
            ></v-checkbox>
          </v-row>
          <v-row class="ml-12">
            <v-checkbox
              v-model="formulario.categorias"
              label="¿posee cuenta de ahorro para la vivienda?"
              color="primary"
              value="ahorro"
              hide-details
              class="black--text"
            ></v-checkbox>
          </v-row>
          <v-row class="ml-12">
            <v-checkbox
              v-model="formulario.categorias"
              label="¿Fue beneficiario de algun subsidio de aislación?"
              color="primary"
              value="fue beneficiario"
              hide-details
              class="black--text"
            ></v-checkbox>
          </v-row>
          <v-row class="ml-12">
            <v-checkbox
              v-model="formulario.categorias"
              label="¿Posee registro social de hogares?"
              color="primary"
              value="registro social"
              hide-details
              class="black--text"
            ></v-checkbox>
          </v-row>
          <v-row class="ml-8 mr-8 pt-8">
            <v-divider class="mx-4" horizontal></v-divider>
          </v-row>
          <v-row class="ml-12">
            <v-checkbox
              v-model="formulario.categorias"
              label="¿Acepto los terminos y condiciones?"
              color="primary"
              value="acepto"
              hide-details
              class="black--text"
            ></v-checkbox>
          </v-row>
          <v-row class="justify-center pt-8 pb-8">
            <v-card-actions> </v-card-actions>
          </v-row>
        </v-card>
      </v-row>
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
      formulario: {},
    };
  },

  methods: {
    async cargarInfo() {
      try {
        const res = await fetch(
          "https://webproyect-27e28-default-rtdb.firebaseio.com/formulario.json"
        );
        const dataDB = await res.json();

        this.formulario = dataDB[this.$route.params.rut];
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

<style></style>
