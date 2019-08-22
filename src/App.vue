<template>
  <v-app id="inspire">
    <v-navigation-drawer :clipped="$vuetify.breakpoint.lgAndUp" v-model="drawer" fixed app>
      <v-card>
        <v-list dense>
          <v-list-group color="primary">
            <template v-slot:activator>
              <v-list-item-avatar>
                <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
              </v-list-item-avatar>
              <v-list-item-title>John Porras R.</v-list-item-title>
            </template>
            <v-list-item>
              <v-list-item-title>Cargo</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-title>cambiar de clave</v-list-item-title>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-card>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item-group color="primary">
          <v-list-item :to="{ name: 'home' }">
            <v-list-item-icon><v-icon>home</v-icon></v-list-item-icon>
            <v-list-item-content><v-list-item-title>Inicio</v-list-item-title></v-list-item-content>
          </v-list-item>
          <v-list-group no-action>
            <template v-slot:activator>
                <v-list-item-icon><v-icon>settings</v-icon></v-list-item-icon>
                <v-list-item-title>Configuración</v-list-item-title>
            </template>
            <v-list-item :to="{ name: 'sistemas' }">
              <v-list-item-title>&nbsp;&nbsp;&nbsp;Sistemas</v-list-item-title>
            </v-list-item>
            <v-list-item :to="{ name: 'usuarios' }">
              <v-list-item-title>&nbsp;&nbsp;&nbsp;Usuarios</v-list-item-title>
            </v-list-item>
          </v-list-group>
        </v-list-item-group>        
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="blue darken-3" dark>
      <v-toolbar-title  style="width: 300px"  class="ml-0 pl-4">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <span class="hidden-sm-and-down">Nombre del sistema</span>
      </v-toolbar-title>
      <v-text-field flat solo-inverted hide-details prepend-inner-icon="search" label="Search" class="hidden-sm-and-down"></v-text-field>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container fluid fill-height>
        <v-slide-x-transition mode="out-in">
          <router-view/>
        </v-slide-x-transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      dialog: false,
      drawer: null,
      items: [
        { icon: 'home', text: 'Inicio' },
        {
          icon: 'settings', 'icon-alt': 'settings',
          text: 'Configuración',
          model: false,
          children: [
            { text: 'Sistemas' },
            { text: 'Export' },
            { text: 'Print' },
            { text: 'Undo changes' },
            { text: 'Other contacts' },
          ],
        },
      ],
    }),
  }
</script>