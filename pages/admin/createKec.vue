<template>
    <v-container>
      <v-dialog v-model="dialogtambahKec" width="500">
        <v-card justify="center" width="500">
          <v-container>
            <v-form ref="form" v-model="valid" lazy-validation>
                <v-select
                  v-model="idprovinsiselected"
                  :items="dataprovinsi"
                  item-text="Provinsi"
                  item-value="idProv"
                  label="Provinsi"
                  required
                ></v-select>
                <v-select
                  v-model="idkotaselected"
                  :items="filteredkeca"
                  item-text="Kota"
                  item-value="idKota"
                  label="Kota"
                  required
                ></v-select>
              <v-text-field
                label="ID Kecamatan"
                single-line
                v-model="databaru.idKecamatan"
              ></v-text-field>
              <v-text-field
                label="Kecamatan"
                single-line
                v-model="databaru.Kecamatan"
              ></v-text-field>
              <v-btn color="success" @click="validate()">tambah</v-btn>
            </v-form>
          </v-container>
        </v-card>
      </v-dialog>
      <v-btn color="success" @click="bukadialog()">Tambah Kecamatan</v-btn>
      <template>
      <v-text-field
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
      <v-data-table :headers="headers" 
                    :items="datakecamatan"
                    sort-by="nama">
        <template v-slot:top>
        </template>
      </v-data-table>
</template>
  </v-container>
</template>
<script>
  export default {
    computed: {
      dataprovinsi() {
        return this.$store.getters["ProvinsiStore/gettersProvinsi"];
      },

      datakota() {
        return this.$store.getters["KotaStore/gettersKota"];
      },

      datakecamatan() {
        return this.$store.getters["KecamatanStore/gettersKecamatan"];
      },
    },
  
    data() {
      return {
        valid: true,
        idprovinsiselected: null,
        idkotaselected: null,
        filteredKota: "",
        filteredKec: "",
        filteredkeca: "",

      headers: [
          {
            text: 'Provinsi',
            value: 'Provinsi',
          },
          {
            text: 'Kota',
            value: 'Kota',
          },
          {
            text: 'id Kota',
            value: 'idKota'
          },
          {
            text: 'id Kecamatan',
            value: 'idKec',
          },
          {
            text: 'Kecamatan',
            value: 'Kecamatan',
          },
        ],
        databaru: {
        idProv: "",
        idKota: "",
        idKecamatan: "",
        Provinsi: "",
        Kota: "",
        Kecamatan: "",
      },
      Kecamatan: [],

      dialogtambahKec: false,
      };
    },


  //watch menambahkan setiap data 
  watch:{
    idprovinsiselected : function(){
      if(this.idprovinsiselected == ""){
        return
      }
      console.log('beruhah di watch')
      const datakota = this.dataprovinsi
      const id = this.idprovinsiselected
      const filteredKota2 = _.filter(datakota, function(n){ return n.idProv == id})
      console.log(filteredKota2 )
      // console.log(filteredKota3)
      this.filteredKota= filteredKota2
      this.databaru.idKota = filteredKota2[0].idKota
      this.databaru.Provinsi =filteredKota2[0].Provinsi
      this.databaru.idProv = filteredKota2[0].idProv
    },

    idkotaselected : function (){
      const datakec = this.datakota
      const dataidkota = this.databaru.idKota
      const id = this.idkotaselected
      const filteredKec1 = _.filter(datakec, function(o){ return o.idKota == id})
      const filteredKec2 = _.filter(filteredKec1, function(i){ return i.idKec == dataidkota})
      console.log(filteredKec2)
      this.filteredKec = filteredKec1
      this.filteredkeca = filteredKec2
      this.databaru.idKota = filteredKec2[0].idKota
      this.databaru


    },
  },

    mounted(){
      this.tampildataprov();
      this.tampildatakota();
      this.tampildatakecamatan();
    },

    methods: {

      bukadialog(){
        this.dialogtambahKec = true;
      },

      async tambahkecamatan(){
        try {
          this.$store.dispatch("KecamatanStore/actiontambahkecamatan", this.databaru);
          this.databaru = { idProv : "", idKota : "", idKecamatan : "", Provinsi : "", Kota : "", Kecamatan : "" };
        } catch (error){
          console.log(error)
        }

        this.idprovinsiselected = "";
        this.dialogtambahKec = false;
      },

      async tampildataprov(){
        this.dataprovinsi = [];
        return this.$store.dispatch("ProvinsiStore/actiontampilprov", this.databaru);
      },

      async tampildatakota(){
        this.datakota = [];
        return this.$store.dispatch("KotaStore/actiontampilkota", this.databaru);
      },

      async tampildatakecamatan(){
        this.datakecamatan = [];
        return this.$store.dispatch("KecamatanStore/actiontampilkecamatan", this.databaru);
      },

    },
  };
  </script>