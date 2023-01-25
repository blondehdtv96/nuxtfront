<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      :color="color"
      fixed
      app
    >
      <v-list>
        <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Admin Pahala Kencana</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon
            :color="item.color">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />
      <v-btn color="success" @click="kembaligo()">back</v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  methods:{
    kembaligo(){
      this.$router.go(-1)
    }
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-account',
          title:'Setting Karyawan',
          to: '/admin/createadmin',
          color: 'green',

        },
        {
          icon: 'mdi-briefcase',
          title: '  Jabatan',
          to: '/admin/createjabatan',
          color: 'green',
        },
        {
          icon: 'mdi-briefcase',
          title: ' Divisi',
          to: '/admin/createdivisi',
          color: 'green',
        },
        {
          icon: 'mdi-home',
          title: 'Provinsi',
          to: '/admin/createProvinsi',
          color: 'green',
        },
        {
          icon: 'mdi-home',
          title: 'Kota',
          to: '/admin/createKota',
          color: 'green',
        },
        {
          icon: 'mdi-home',
          title: 'Kecamatan',
          to: '/admin/createKec',
          color:  'green',
        },
        
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Sistem Data Karyawan',
      color: 'orange',
    }
  }
}
</script>
