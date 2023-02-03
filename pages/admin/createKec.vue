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
                  v-model="idkotaselect"
                  :items="datakota"
                  item-text="Kota"
                  item-value="idKota"
                  label="Kota"
                  required
                ></v-select>
              <v-text-field
                label="Kecamatan"
                single-line
                v-model="databaru.Kecamatan"
              ></v-text-field>
              <v-btn color="success" @click="tambahkecamatan()">tambah</v-btn>
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
import _ from "lodash";
// import { db, collection, query, where } from "~/services/fireinit.js";
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
        idprovinsiselected: "",
        idkotaselect: "",

      headers: [
          {
            text: 'id Kota',
            value: 'idKota'
          },
          {
            text: 'id Kecamatan',
            value: 'idKecamatan',
          },
          {
            text: 'Provinsi',
            value: 'Provinsi',
          },
          {
            text: 'Kota',
            value: 'Kota',
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


  watch:{
    idprovinsiselected : async function(){
      console.log("118")
      if(this.idprovinsiselected == ""){
        return
      } 
      const provref = this.dataprovinsi
      const selectidprov = this.idprovinsiselected
      const selectprov = _.filter(provref, function(b){return b.idProv == selectidprov})
      this.databaru.idProv = selectprov[0].idProv
      this.databaru.Provinsi = selectprov[0].Provinsi
      this.$store.dispatch("KotaStore/actiontampilquerykota", selectidprov);
    },

    idkotaselect : async function(){
      if(this.idkotaselect == ""){
        return
      } 
      const kotareferensi = this.datakota
      const selectidkota = this.idkotaselect
      console.log(selectidkota)
      const selectkota = _.filter(kotareferensi, function(a){return a.idKota == selectidkota})
      this.databaru.idKota = selectkota[0].idKota
      this.databaru.Kota = selectkota[0].Kota
      // this.$store.dispatch("KotaStore/actiontampilquerykota", selectidkota);
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
        //console.log()
        try {
        const refkecamatan = this.datakecamatan.length 
        const reftambah1 = refkecamatan + 1
        const refgabung = "KC" + reftambah1
        this.databaru.idKecamatan = refgabung
        this.$store.dispatch("KecamatanStore/actiontambahkecamatan", this.databaru);
        this.databaru = { idProv : "", idKota : "", idKecamatan : "", Provinsi : "", Kota : "", Kecamatan : "" };
        } catch (error){
          console.log(error)
        }

        this.idprovinsiselected = "";
        this.idkotaselect = "";
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