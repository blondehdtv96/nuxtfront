<template>
  <v-row>
    <v-col cols="12">
    <v-carousel :show-arrows="false" hide-delimiters
      top=100%
      bottom=40%
      left=auto
      max-width=1100x
      height=400px
              >
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    </v-col>
  </v-row>
  </template>

<script>
export default {
    name: 'Carosel',
    data () {
      return {
        items: [
          {
            src: 'https://asset.travelio.com/asset/desktop/images/new-design/banner/banner-home-dec-2021.jpg',
          },
        ],
      }
    },
  }
</script>