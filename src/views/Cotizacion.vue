<template>
  <v-container>
    <br /><br /><br />

    <v-layout wrap>
      <v-flex class="mt-5" xs12>
        <h1 style="color:#2c64ac">COTIZACIÓN</h1>
        <hr class="black" />
        <h2 class="ml-5 mr-5 mb-5 mt-5" align="justify">
          ¡Calcula el presupuesto de tus proyectos con nuestro simulador!
        </h2>
      </v-flex>

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
                <th class="text-left">
                  ACCION
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in paquete.cotizaciones" :key="item.id">
                <td>{{ item.pega }}</td>
                <td>{{ item.superficie }}</td>
                <td>{{ item.subtot }}</td>
                <td>
                  <button
                    class="btn btn-danger btn-sm"
                    @click="deleteTareas(item.id, item.subtot)"
                  >
                    Eliminar
                  </button>
                </td>
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
      <v-flex class="mt-5" xs6>
        <h2 style="color:#2c64ac">Seleccione trabajo</h2>
        <hr class="black" />
        <v-select
          :items="box"
          menu-props="auto"
          hide-details
          label="Trabajos"
          single-line
          v-model="contizacion.pega"
        ></v-select>
        <br />
        <hr class="black" />
        <br />

        <v-row class="black--text">
          <v-col class="ml-12">
            <h4>Superficie</h4>
          </v-col>
          <v-col class="mr-12">
            <v-slider
              v-model="contizacion.superficie"
              label="m2"
              step="1"
              thumb-label="always"
              ticks
              min="1"
              max="100"
            ></v-slider>
          </v-col>
        </v-row>

        <v-row class="black--text">
          <v-col class="ml-12">
            <h4>Subtotal</h4>
          </v-col>
          <v-col class="mr-12">
            <v-text-field
              placeholder="$xxxxxxx"
              v-model="contizacion.subtot"
            ></v-text-field>
            {{ generarSubtotal }}
          </v-col>
        </v-row>

        <v-row class="orange--text justify-content align-center">
          <v-col class="ml-12">
            <h4>E-Mail:</h4>
          </v-col>
          <v-col class="mr-12 ">
            <v-text-field
              v-model="paquete.mail"
              placeholder="n.herrera04@ufromail.cl"
            ></v-text-field>
            <v-row>
              <h4 class="blue--text pa-2">
                Asegurate de tener acceso a este email.
              </h4>
            </v-row>
          </v-col>
        </v-row>
      </v-flex>

      <v-flex class="mt-5" xs12>
        <div align="center">
          <v-btn rounded color="primary" dark @click="enviarPaquete(paquete)"
            >Enviar cotización</v-btn
          >
          <v-btn rounded color="" dark @click="agregarTrabajo"
            >Agregar trabajo</v-btn
          >
        </div>

        <br />
        <hr class="black" />
       
        <div align="center">
          <v-img
            src="https://i.imgur.com/U51aOSC.png"
            max-height="200"
            max-width="200"
          ></v-img>
        </div>
        <br />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
const shortid = require("shortid");

export default {
  name: "Cotizacion",

  data: () => ({
    contizacion: {
      id: '',
      pega: '',
      superficie: '',
      subtot: 0,
    },

    paquete: {
      idp: '',
      mail: '',
      total: 0,
      cotizaciones: [],
    },

    box: [
      "Radier Cemento",
      "Paneles aislantes",
      "Ceramica",
      "Piso Flotante",
      "Pintura",
    ],
  }),
  methods: {
    agregarTrabajo() {
      this.contizacion.id = shortid.generate();
      this.paquete.cotizaciones.push(this.contizacion);
      this.paquete.total = this.paquete.total + this.contizacion.subtot;
      this.contizacion = {
        pega: "",
        superficie: "",
        subtot: 0,
      };
    },
    deleteTareas(id, subtot) {
      this.paquete.cotizaciones = this.paquete.cotizaciones.filter(
        (item) => item.id !== id
      );
      this.paquete.total = this.paquete.total - subtot;
    },
    async enviarPaquete(cotizacion) {
      this.paquete.idp = shortid.generate();
      try {
        const res = await fetch( `https://webproyect-27e28-default-rtdb.firebaseio.com/cotizacion/${this.paquete.idp}.json`,{
            method:'PUT',
            header: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(cotizacion),
          }
        );
        const dataDB = await res.json();
        console.log(dataDB);
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    generarSubtotal() {
      if (this.contizacion.pega === "Radier Cemento") {
        this.contizacion.subtot = this.contizacion.superficie * 4000;
      }
      if (this.contizacion.pega === "Paneles aislantes") {
        this.contizacion.subtot = this.contizacion.superficie * 5200;
      }
      if (this.contizacion.pega === "Ceramica") {
        this.contizacion.subtot = this.contizacion.superficie * 4500;
      }
      if (this.contizacion.pega === "Piso Flotante") {
        this.contizacion.subtot = this.contizacion.superficie * 4800;
      }
      if (this.contizacion.pega === "Pintura") {
        this.contizacion.subtot = this.contizacion.superficie * 6000;
      }
    },
   
  },
  create() {},
};
</script>
