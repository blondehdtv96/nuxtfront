<template>
    <v-container>
        <v-card class="mt-2 mb-12"
        color="red">
          <v-card-text>
            <v-row>
              <v-col cols="4">
                <v-card-title
                ><h3>Weekly Deals</h3></v-card-title>
              </v-col>
            <v-spacer></v-spacer>
              <v-col cols="2">
                <v-select
                    text-color="white"
                    v-model="select"
                    label="Jakarta"
                    required
                  >
                </v-select>
              </v-col>
              <v-col cols="3">
                <v-btn
                  class="mt-2 l-1"
                  height="40"
                  width="250"
                  rounded
                  color="black"
                  dark
                  >
                  Berakhir dalam 3 hari lagi!
                </v-btn>   
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3">
                <v-img
                  class="mb-2 mx-6"
                  height=400px
                  width=200px
                  src="https://asset.travelio.com/asset/desktop/images/new-design/banner/banner-weekly-deals-1.png"
                  rounded
                >
                </v-img>
              </v-col>
              <v-col cols="9">
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
              <v-slide-item v-for="(slide, i) in dwslider1" :key="i">
                <v-card width="250" class="ma-6">
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
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
name: 'Weeklydeals',
computed: {
  dwslider1() {
    return this.$store.getters["ApartemenStore/gettersslider1"];
  },
},
    data: () => ({
    model: null,
    select: null,
    
  }),
};
</script>
