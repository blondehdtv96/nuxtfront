<template>
  <v-container>
    <v-dialog v-model="dialogtambahprov" width="500">
      <v-card justify="center" width="500">
        <v-container>
          <!-- <v-text-field label="id Provinsi" single-line item-text="idProv" item-value="idProv"
            v-model="databaru.idProv"></v-text-field> -->
          <v-text-field label="Nama Provinsi" single-line item-text="Provinsi" item-value="idProv"
            v-model="databaru.Provinsi"></v-text-field>
          <v-btn color="success" @click="tambahprovinsi()">tambah</v-btn>
        </v-container>
      </v-card>
    </v-dialog>
    <v-btn color="success" @click="bukadialog()">Tambah Provinsi</v-btn>
    <template>
      <v-col cols="12">
        <v-data-table :headers="headers" :items="dataprovinsi" sort-by="nama">
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
  },
  data() {
    return {
      headers: [
        {
          text: "ID Provinsi",
          value: "idProv",
        },
        {
          text: "Nama Provinsi",
          value: "Provinsi",
        },
      ],
      databaru: {
        idProv: "",
        Provinsi: "",
      },
      provinsi: [],
      dialogtambahprov: false,
    };
  },

  watch: {},

  mounted() {
    this.tampildataprov();
  },

  methods: {
    bukadialog() {
      this.dialogtambahprov = true;
    },

    async tambahprovinsi() {
      try {
        const x = this.dataprovinsi.length 
        const xx = x + 1
        const id = "P" + xx
        console.log(x)
        this.databaru.idProv = id
        this.$store.dispatch("ProvinsiStore/actiontambahProvinsi", this.databaru);
        this.databaru = { idProv: "", Provinsi: "" };
      } catch (error) {
        console.log(error);
      }
      // this.databaru.idProv = this.dataprovinsi.length
      this.dialogtambahprov = false;
    },

    async tampildataprov() {
      this.dataprovinsi = [];
      return this.$store.dispatch("ProvinsiStore/actiontampilprov", this.databaru);
    },
  },
};
</script>