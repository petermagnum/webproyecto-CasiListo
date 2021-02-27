<template>
  <v-container>
    <br><br><br>
    
    <v-layout wrap>
      <v-flex class="mt-5" xs12>
        <h1 style="color:#2c64ac">CONTÁCTANOS</h1>
        <hr class="black">
        <h2 class="ml-5 mr-5 mb-5 mt-5" align="justify">Escríbanos y cuéntenos en qué podemos asesorarlo.</h2>
      </v-flex>

      <v-flex class="mt-5" xs6>
        <h2 style="color:#2c64ac">Formulario Contacto</h2>
        <hr class="black  mr-5">
        <v-row class="pa-15 justify-center">
      <v-card elevation="10" shaped class="blue--text" width="900">
        <v-card-title class="ml-8">Ingrese sus datos personales:</v-card-title>
        <v-divider class="ml-8 mr-8 " horizontal></v-divider>
        <v-row class="orange--text align-center flex-start">
          <v-col class="ml-12">
            <h4>Nombres:</h4>
          </v-col>
          <v-col class="mr-12">
            <v-text-field
             :rules="rules"
             v-model="contacto.nombres"></v-text-field>          
          </v-col>
        </v-row>
        <v-row class="orange--text justify-content align-center">
          <v-col class="ml-12">
            <h4>Apellidos:</h4>
          </v-col>
          <v-col class="mr-12">
            <v-text-field 
            :rules="rules"
            v-model="contacto.apellidos"></v-text-field>
          </v-col>
        </v-row>
        <v-row class="orange--text align-center flex-start">
          <v-col class="ml-12">
            <h4>Teléfono:</h4>
          </v-col>
          <v-col class="mr-12">
            <v-text-field 
            :rules="rules"
             v-model="contacto.telefono"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="orange--text align-center flex-start">
          <v-col class="ml-12">
            <h4>Empresa:</h4>
          </v-col>
          <v-col class="mr-12">
            <v-text-field 
            :rules="rules"
             v-model="contacto.empresa"></v-text-field>
          </v-col>
        </v-row>
        <v-row class="orange--text align-center flex-start">
          <v-col class="ml-12">
            <h4>Región:</h4>
          </v-col>
          <v-col class="mr-12">
            <v-text-field 
            :rules="rules"
             v-model="contacto.region"></v-text-field>
          </v-col>
        </v-row>
        <v-row class="orange--text align-center flex-start">
          <v-col class="ml-12">
            <h4>Comuna:</h4>
          </v-col>
          <v-col class="mr-12">
            <v-text-field 
            :rules="rules"
             v-model="contacto.comuna"></v-text-field>
          </v-col>
        </v-row>
        <v-row class="orange--text justify-content align-center">
          <v-col class="ml-12">
            <h4>E-Mail:</h4>
          </v-col>
          <v-col class="mr-12">
            <v-text-field 
            :rules="rules"
             v-model="contacto.mail"></v-text-field>
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
          <v-card-actions>
            <v-btn color="blue" text @click="enviarContacto(contacto)">
              Enviar Formulario
            </v-btn>
          </v-card-actions>
        </v-row>
      </v-card>

      </v-row>
      </v-flex>

      <v-flex class="mt-5" xs6>
        <h2 style="color:#2c64ac">Datos de interés</h2>
        <hr class="black mr-5"><br><br>
        <div align="center">
          <v-img src="https://i.imgur.com/WhYtRlH.png"></v-img>
          <br>
        </div>
        <h4 class="ml-5 mr-5 mb-5 mt-5" align="center">José Reyes Morales #2090, Temuco</h4>
        <h4 class="ml-5 mr-5 mb-5 mt-5" align="center">contacto@construbae.cl</h4>
        <h4 class="ml-5 mr-5 mb-5 mt-5" align="center">+56 9 77751485</h4>
      </v-flex>
    </v-layout>

    
    

    
  </v-container>
</template>

<script>
const shortid = require("shortid");
export default {
  name: "Contacto",

  data: () => ({
    contacto:{
      id:'',
      nombres:'',
      apellidos:'',
      telefono:'',
      empresa:'',
      region:'',
      comuna:'',
      mail:'',
      mensaje:'',
      
    },

    rules: [
      (value) => !!value || "Requerido.",
      (value) => (value || "").length <= 30 || "Max 30 caracteres",
    ],
    telefono: [
      (value) => !!value || "Requerido",
      (value) => (value || "").length <= 9 || "Max 9 caracteres",
    ],
  }),
  methods:{
     async enviarContacto(contacto) {
      this.contacto.id = shortid.generate();
      try {
        const res = await fetch( `https://webproyect-27e28-default-rtdb.firebaseio.com/contacto/${this.contacto.id}.json`,{
            method:'PUT',
            header: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(contacto),
          }
        );
        const dataDB = await res.json();
        console.log(dataDB);
      } catch (error) {
        console.log(error);
      }
    },
  }
};
</script>