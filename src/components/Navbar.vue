<template>
  <div>
    <v-app-bar app color="light-blue accent-2" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://i.imgur.com/U51aOSC.png"
          transition="scale-transition"
          width="60"
        />
      </div>

      <v-spacer />
      
      <v-btn to="/inicio" text>Inicio</v-btn>
      <v-btn to="/about" text>Sobre nosotros</v-btn>
      <v-btn to="/postulacion" text>Postulación</v-btn>
      <v-btn to="/cotizacion" text>Cotización</v-btn>
      <v-btn to="/contacto" text>Contacto</v-btn>
      <v-btn to="/loginBakend" text>Bakend</v-btn>
    </v-app-bar>

    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style></style>
