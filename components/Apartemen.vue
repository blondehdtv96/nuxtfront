<template>
    <v-container>
      <v-row>
        <v-col cols="6">
          <h1>Sewa Apartemen Sesuai Budget ? Bisa!</h1>
        </v-col>
          <v-spacer></v-spacer>
            <v-col cols="2">
                <v-select
                    text-color="white"
                    v-model="select"
                    label="Jakarta"
                    required>
                </v-select>
            </v-col>
        </v-row>
      <v-row>
        <v-col cols="2">
          <v-card
            width="400"
            outlined
            color="red"
          >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4">
              Harga
            </div>
            <v-list-item-title class="text-h6 mb-1">
              Rp 2 Juta
            </v-list-item-title>
            <v-list-item-subtitle>Perbulan</v-list-item-subtitle>
            </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
        <v-col cols="2">
          <v-card
            width="400"
            outlined
            color="grey"
          >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4">
              Harga
            </div>
            <v-list-item-title class="text-h6 mb-1">
              Rp. 2-3.5 Juta
            </v-list-item-title>
            <v-list-item-subtitle>Perbulan</v-list-item-subtitle>
            </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
        <v-col cols="2">
          <v-card
            width="400"
            outlined
            color="yellow"
          >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4">
              Harga
            </div>
            <v-list-item-title class="text-h6 mb-1">
              Rp 3-5 Juta
            </v-list-item-title>
            <v-list-item-subtitle>Perbulan</v-list-item-subtitle>
            </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
        <v-col cols="2">
          <v-card
            width="400"
            outlined
            color="purple"
          >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4">
              Harga
            </div>
            <v-list-item-title class="text-h6 mb-1">
              Rp 5-7 Juta
            </v-list-item-title>
            <v-list-item-subtitle>Perbulan</v-list-item-subtitle>
            </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
        <v-col cols="2">
          <v-card
            width="400"
            outlined
            color="green"
          >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4">
              Harga
            </div>
            <v-list-item-title class="text-h6 mb-1">
              Rp 7-10 Juta
            </v-list-item-title>
            <v-list-item-subtitle>Perbulan</v-list-item-subtitle>
            </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
        <v-col cols="2">
          <v-card
            width="400"
            outlined
            color="orange"
          >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4">
              Harga
            </div>
            <v-list-item-title class="text-h6 mb-1">
              > Rp 10 Juta
            </v-list-item-title>
            <v-list-item-subtitle>Perbulan</v-list-item-subtitle>
            </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
      <v-col cols="6">
          <h1>Apartemen Terbaik Saat Ini</h1>
        </v-col>
          <v-spacer></v-spacer>
            <v-col cols="2">
                <v-select
                    text-color="white"
                    v-model="select"
                    label="Jakarta"
                    required>
                </v-select>
            </v-col>
        </v-row>
      <v-row>
        <v-col cols="12">
                <v-sheet 
                    class="mt-2 mx-10"
                    elevation="2"
                    max-width="100%"
                >
            <v-slide-group mobile-break-point="1000" show-arrows center-active>  
              <template v-slot:next>
                <v-icon color="red" large>mdi-arrow-right</v-icon>
              </template>
              <template v-slot:prev>
                <v-icon color="orange" large>mdi-arrow-left</v-icon>
              </template>
              <v-slide-item v-for="(slide, i) in dslider2" :key="i">
                <v-card width="250">
                    <v-card-title>
                        <v-img height="200px" contain :src="slide.image"></v-img>
                    </v-card-title>
                    <v-card-text>
                      <b>{{ slide.title }}</b>
                      <p></p>
                      <b>{{ slide.price }}</b>
                    </v-card-text>
                  </v-card>
                </v-slide-item>
              </v-slide-group>
            </v-sheet>
          </v-col>

        <v-row>
          <v-col cols="12">
          <h1>Lagi Cari Tempat Tinggal?</h1>
          <p></p>
            <v-list-item-title class="text-h6 mb-1">
              Temukan properti kami di kota-kota besar di Indonesia!
            </v-list-item-title>
          </v-col>
        </v-row>
      </v-row>
      <v-row>
        <v-col cols="2">
          <div class="text--primary">
            <!-- Using the elevation prop -->
            <v-hover>
              <template v-slot:default="{ hover }">
                <v-card
                  :elevation="hover ? 30 : 6"
                  class="mx-auto pa-12"
                  height="200"
                  width="220"
                  rounded
                  align="center"
                >
                <v-navigation-drawer
                    absolute
                    dark
                    src="	https://asset.travelio.com/asset/desktop/images/new-design/kota2/background-jakarta-2.png?v=123"
                    width="100%"
                    permanent
                  >
                  <span class="white--text">
                    <h3
                    class="mt-16">Jakarta</h3>
                  </span>
                  </v-navigation-drawer>
                </v-card>
              </template>
            </v-hover>
          </div>
        </v-col>
        <v-col cols="2">
          <div class="text--primary">
            <!-- Using the elevation prop -->
            <v-hover>
              <template v-slot:default="{ hover }">
                <v-card
                  :elevation="hover ? 30 : 6"
                  class="mx-auto pa-12"
                  height="200"
                  width="220"
                  rounded
                  align="center"
                >
                <v-navigation-drawer
                    absolute
                    src="https://asset.travelio.com/asset/desktop/images/new-design/kota2/background-bandung-2.png?v=123"
                    width="100%"
                    permanent
                  >
                  <span class="white--text">
                    <h3
                    class="mt-16">Bandung</h3>
                  </span>
                  </v-navigation-drawer>
                </v-card>
              </template>
            </v-hover>
          </div>
        </v-col>
        <v-col cols="2">
          <div class="text--primary">
            <!-- Using the elevation prop -->
            <v-hover>
              <template v-slot:default="{ hover }">
                <v-card
                  :elevation="hover ? 30 : 6"
                  class="mx-auto pa-12"
                  height="200"
                  width="220"
                  rounded
                  align="center"
                >
                <v-navigation-drawer
                    absolute
                    dark
                    src="https://asset.travelio.com/asset/desktop/images/new-design/kota2/background-surabaya-2.png?v=123"
                    width="100%"
                    permanent
                  >
                  <span class="white--text">
                    <h3
                    class="mt-16">Surabaya</h3>
                  </span>
                  </v-navigation-drawer>
                </v-card>
              </template>
            </v-hover>
          </div>
        </v-col>
        <v-col cols="2">
          <div class="text--primary">
            <!-- Using the elevation prop -->
            <v-hover>
              <template v-slot:default="{ hover }">
                <v-card
                  :elevation="hover ? 30 : 6"
                  class="mx-auto pa-12"
                  height="200"
                  width="220"
                  rounded
                  align="center"
                >
                <v-navigation-drawer
                    absolute
                    dark
                    src="https://asset.travelio.com/asset/desktop/images/new-design/kota2/background-tangerang-2.png?v=123"
                    width="100%"
                    permanent
                  >
                  <span class="white--text">
                    <h3
                    class="mt-16">Tangerang</h3>
                  </span>
                  </v-navigation-drawer>
                </v-card>
              </template>
            </v-hover>
          </div>
        </v-col>
        <v-col cols="2">
          <div class="text--primary">
            <!-- Using the elevation prop -->
            <v-hover>
              <template v-slot:default="{ hover }">
                <v-card
                  :elevation="hover ? 30 : 6"
                  class="mx-auto pa-12"
                  height="200"
                  width="220"
                  rounded
                  align="center"
                >
                <v-navigation-drawer
                    absolute
                    dark
                    src="https://asset.travelio.com/asset/desktop/images/new-design/kota2/background-bogor-2.png?v=123"
                    width="100%"
                    permanent
                  >
                  <span class="white--text">
                    <h3
                    class="mt-16">Bogor</h3>
                  </span>
                  </v-navigation-drawer>
                </v-card>
              </template>
            </v-hover>
          </div>
        </v-col>
        <v-col cols="2">
          <div class="text--primary">
            <!-- Using the elevation prop -->
            <v-hover>
              <template v-slot:default="{ hover }">
                <v-card
                  :elevation="hover ? 30 : 6"
                  class="mx-auto pa-12"
                  height="200"
                  width="220"
                  rounded
                  align="center"
                >
                <v-navigation-drawer
                    absolute
                    dark
                    src="	https://asset.travelio.com/asset/desktop/images/new-design/kota2/background-depok-2.png?v=123"
                    width="100%"
                    permanent
                  >
                  <span class="white--text">
                    <h3
                    class="mt-16">Depok</h3>
                  </span>
                  </v-navigation-drawer>
                </v-card>
              </template>
            </v-hover>
          </div>
        </v-col>
      </v-row>
    </v-container>

    
</template>

<script>

export default {
    name: 'Apartemen',

    computed: {
     dslider1() {
    return this.$store.getters["ApartemenStore/gettersslider1"];
  },
},

    data: () => ({

    }),

    methods: {

    }

};
</script>

<!---belom manggil datanya
