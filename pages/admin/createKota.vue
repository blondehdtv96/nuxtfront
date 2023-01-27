<template>
  <v-container>
    <v-dialog v-model="dialogtambahkota" width="500">
      <v-card justify="center" width="500">
        <v-container>
          <v-select
                  v-model="idselect"
                  :items="dataprovinsi"
                  item-text="Provinsi"
                  item-value="idProv"
                  label="Provinsi"
                  required
                ></v-select>
                <v-text-field label="Id Kota" single-line item-text="idKota" item-value="idKota"
            v-model="databaru.idKota"></v-text-field>
          <v-text-field label="Nama Kota" single-line item-text="Kota" item-value="Kota"
            v-model="databaru.Kota"></v-text-field>
          <v-btn color="success" @click="tambahkota()">Tambah</v-btn>
        </v-container>
      </v-card>
    </v-dialog>
    <v-btn color="success" @click="bukadialog()">Tambah Kota</v-btn>
    <template>
      <v-col cols="12">
        <v-data-table
         :headers="headers" 
         :items="datakota" 
         sort-by="nama">
        </v-data-table>
      </v-col>
    </template></v-container>
</template>
        
    
<script>
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
      idselect: null,
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
      Kota: [],

      dialogtambahkota: false,
    };
  },

  watch: {
    idselect : function(){
      if (this.idselect == "") {
        return
      }
      const dataprov = this.dataprovinsi
      const id = this.idselect
      const filterprov1 = _.filter(dataprov, function(n){ return n.idProv == id})
      this.filteredprov = filterprov1
      this.databaru.idProv = filterprov1[0].idProv
      this.databaru.Provinsi = filterprov1[0].Provinsi
    },
  },

  mounted() {
    this.tampildataprovinsi();
    this.tampildatakota();
  },

  methods: {
    bukadialog() {
      this.dialogtambahkota = true;
    },

    async tambahkota() {
      try {
        this.$store.dispatch("KotaStore/actiontambahkota", this.databaru);
        this.databaru = { idProv: "", idKota:"", Provinsi: "", Kota: "", };
      } catch (error) {
        console.log(error);
      }
      this.idselect = "";
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

    async tampildatakota(){
      this.datakota = [];
      return this.$store.dispatch("KotaStore/actiontampilkota", this.databaru);
    },
    
  },
};
</script>