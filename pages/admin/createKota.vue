<template>
  <v-container>
    <v-dialog v-model="dialogtambahkota" width="500">
      <v-card justify="center" width="500">
        <v-container>
          <v-select v-model="idprovinsiselected" :items="dataprovinsi" item-text="Provinsi" item-value="idProv" label="Provinsi"
            required></v-select>
          <v-text-field label="Nama Kota" single-line item-text="Kota" item-value="idKota"
            v-model="databaru.Kota"></v-text-field>
          <v-btn color="success" @click="tambahkota()">Tambah</v-btn>
        </v-container>
      </v-card>
    </v-dialog>
    <v-btn color="success" @click="bukadialog()">Tambah Kota</v-btn>
    <template>
      <v-col cols="12">
        <v-data-table :headers="headers" :items="datakota" sort-by="nama">
        </v-data-table>
      </v-col>
    </template></v-container>
</template>
        
    
<script>
// import { db } from "~/services/fireinit.js";
import _ from "lodash";
export default {
  computed: {
    dataprovinsi() {
      return this.$store.getters["ProvinsiStore/gettersProvinsi"];
    },
    datakota() {
      return this.$store.getters["KotaStore/gettersKota"];
    },
  },
  data() {
    return {
      idprovinsiselected: "",
      headers: [
        {
          text: "ID Provinsi",
          value: "idProv",
        },
        {
          text: "ID Kota",
          value: "idKota",
        },
        {
          text: "Provinsi",
          value: "Provinsi",
        },
        {
          text: "Kota",
          value: "Kota",
        },

      ],
      databaru: {
        idProv: "",
        idKota: "",
        Provinsi: "",
        Kota: "",
      },
      kota: [],
      idprovinsiselected: "",
      dialogtambahkota: false,
    };
  },


  mounted() {
    this.tampildataprovinsi();
    this.tampildatakota();
  },

<<<<<<< HEAD

watch:{

  idprovinsiselected : async function(){
      console.log("118")
      if(this.idprovinsiselected == ""){
        return
      } 
      const provref = this.dataprovinsi
      const selectidprov = this.idprovinsiselected
      const provselectid = _.filter(provref, function(c){return c.idProv == selectidprov})
      this.databaru.idProv = provselectid[0].idProv
      this.databaru.Provinsi = provselectid[0].Provinsi
    },
},

=======
  watch:{
        idprovinsiselected : function(){
        if(this.idprovinsiselected == ""){
          return
        }
        const propinsi = this.dataprovinsi
        const idselectpropinsi = this.idprovinsiselected
        const selectidprop = _.filter(propinsi, function(d){ return d.idProv == idselectpropinsi})
        this.databaru.idProv = selectidprop[0].idProv
        this.databaru.Provinsi = selectidprop[0].Provinsi
      },
    },
    
>>>>>>> f1156d85521aa52301309845f468850f4e9bb8b9
  methods: {
    bukadialog() {
      this.dialogtambahkota = true;
    },

    async tambahkota() {
      try {
        const x = this.datakota.length
        const xx = x + 1
        const id = "K" + xx
        this.databaru.idKota = id
<<<<<<< HEAD

=======
>>>>>>> f1156d85521aa52301309845f468850f4e9bb8b9
        this.$store.dispatch("KotaStore/actiontambahkota", this.databaru);
        this.databaru = { idProv: "", idKota: "", Provinsi: "", Kota: "", };
      } catch (error) {
        console.log(error);
      }
<<<<<<< HEAD
      this.idprovinsiselected = "";
=======
      this.idprovinsiselected = "",
      this.idselect = "";
>>>>>>> f1156d85521aa52301309845f468850f4e9bb8b9
      this.dialogtambahkota = false;
    },
    // async tampildatakota() {
    //   this.datakota = [];
    //   return this.$store.dispatch("KotaStore/actiontampilkota", this.databaru);
    // },

    async tampildataprovinsi() {
      this.dataprovinsi = [];
      return this.$store.dispatch("ProvinsiStore/actiontampilprov", this.databaru);
    },

    async tampildatakota() {
      this.datakota = [];
      return this.$store.dispatch("KotaStore/actiontampilkota", this.databaru);
    },

  },
};
</script>