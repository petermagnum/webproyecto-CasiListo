<template>
  <v-container>
    <div>
      <br />
      <br />
      <br /><br />
      <br />
      <br />
    </div>
    <v-row class="justify-center pt-15">
      <v-card height="300" width="600">
        <v-row class="justify-center pt-5">
          <v-card-title>
            <h2>Login</h2>
          </v-card-title>
        </v-row>
        <v-row class="justify-center">
          <h3 class="pl-8 pt-5">usuario:</h3>
          <v-text-field
            v-model="credencial.user"
            color="deep-purple accent-3"
            loading
            class="pr-8 pl-5"
          ></v-text-field>
        </v-row>
        <v-row class="justify-center">
          <h3 class="pl-8 pt-5">Contraseña:</h3>
          <v-text-field
            v-model="credencial.pass"
            color="deep-purple accent-3"
            loading
            class="pr-8 pl-5"
            type="password"
          ></v-text-field>
        </v-row>
        <v-row class="justify-center pt-5">
          <v-btn
           @click="autentificar"
            elevation="2"
            color="deep-purple accent-3"
          
            >Ingresar</v-btn
          >
        </v-row>
      </v-card>
    </v-row>
    
    <div>
      <br />
      <br />
      <br /><br />
      <br />
      <br />
    </div>
  </v-container>
</template>

<script>
import router from '../router'
export default {
  name: "LoginBakend",

  data: () => ({
    credencial: {
      user: '',
      pass: '',

    },
    credencialDB: {},
  }),
  methods: {
    async cargarLocalStorage() {
      try {
        const res = await fetch(
          "https://webproyect-27e28-default-rtdb.firebaseio.com/credencial.json"
        );
        const dataDB = await res.json();

        this.credencialDB=dataDB["c1"];
       
      } catch (error) {
        console.log(error);
      }
    },
    autentificar(){
      
      if(this.credencialDB.user === this.credencial.user){
        if(this.credencialDB.pass === this.credencial.pass){
            router.push('/bakend-home')
            

            
        }
      }else{
        alert("Usuario o contraseña incorrectos!")
      }
    }
  },
  created(){
    this.cargarLocalStorage();
  }
 
};
</script>
