<template>
    <v-container>
        <v-row>
            <v-col cols="6">
                <h1>Rekomandasi Apartemen</h1>
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
        </v-row>

    <v-row>
        <v-col cols="6">
          <h1>Rekomandasi Rumah</h1>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="2">
          <v-select
            text-color="white"
            v-model="select"
            label="Jakarta"
            required
          ></v-select>
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
    </v-row>
        
    </v-container>
</template>

<script>

export default {
    name: 'Rekomendasi',
    computed: {
      dslider2 () {
        return this.$store.getters['RekomendasiStore/gettersslider2'];
      },
    },

};
</script>
