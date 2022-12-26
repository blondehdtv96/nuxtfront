<template>
<div id="">
  <Header/>
  <Carosel/>
  <Cardform/>
  <Weeklydeals/>
  <Rekomendasi/>
  <Properti/>
  <Rentaldeal/>
  <Apartemen/>
  <Section/>

</div>
</template>


<script>
import Header from '~/components/Header'
import Carosel from '~/components/Carosel'
import Cardform from '~/components/Cardform'
import Weeklydeals from '~/components/Weeklydeals'
import Rekomendasi from '~/components/Rekomendasi'
import Properti from '~/components/Properti'
import Rentaldeal from '~/components/Rentaldeal'
import Apartemen from '~/components/Apartemen'
import Section from '~/components/Section'
export default {


  layout: 'kosong',
  name: '../web/IndexPage',

  components: [
    Header,
    Carosel,
    Cardform,
    Weeklydeals,
    Rekomendasi,
    Properti,
    Rentaldeal,
    Apartemen,
    Section,


  ],

  data: () => ({
    model: null,
  }),

};
</script>
