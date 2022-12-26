<template>
    <v-app-bar
            absolute
            color="white"
            elevate-on-scroll
            scroll-target="#scrolling-techniques-7"
            >
            <v-img
            max-height=60px
            max-width=170px
            class="mt-n1 mx-16"
            src="https://asset.travelio.com/asset/desktop/images/travelio_logo.png"
            >    
            </v-img> 
            <v-spacer></v-spacer>
            <v-btn
            class="ma-12"
            outlined
            color="black"
            >
            Daftar/Masuk
            </v-btn>
            <v-btn
            class="ma-12"
            outlined
            color="black"
            @click="pindahkeadmin()"
            >
            admin
            </v-btn>
            <v-btn
            outlined>
            Promosi
            </v-btn>

            <div class="text-center">
    <v-btn
    class="mt-n1 mx-16"
      rounded
      color="black"
      dark
    >
      Daftarkan Properti Saya
    </v-btn>
  </div>
    </v-app-bar>
</template>

<script>
export default {
    name: 'Header',
    methods:{
      pindahkeadmin(){
        this.$router.push({ name: 'admin' })
        // untuk back pake this.$router.go(-1)
      },
    },
    data: () => ({

    }),
};
</script>
