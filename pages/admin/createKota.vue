<template>
  <v-container>
    <v-dialog v-model="dialogtambahKota" width="500">
      <v-card justify="center" width="500">
        <v-container>
          <v-form ref="form" v-model="valid">
            <v-select
              v-model="idselect"
              :items="dProvinsiall"
              item-text="Provinsi"
              item-value="idProv"
              label="Provinsi"
              required
            ></v-select>
            <v-text-field
              label="Nama Kota"
              single-line
              :rules="Kota"
              v-model="databaru.Kota"
            ></v-text-field>
            <v-btn color="success" @click="validate()">Tambah</v-btn>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>
    <v-btn color="success" @click="bukadialog()">Tambah Kota</v-btn>
    <template>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
      <v-data-table
        :headers="headers"
        :items="dKotaall"
        sort-by="nama"
        :search="search"
      >
        <template v-slot:top> </template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon medium class="mr-2" @click="editdata2(item)"
            >mdi-pencil</v-icon
          >
          <v-icon small @click="hapusdata(item)">mdi-eraser</v-icon>
        </template>
      </v-data-table>
      <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete()">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="confirmhapus">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
    </template>
  </v-container>
</template>
        
    
<script>
export default {
  computed: {
    dProvinsiall() {
      return this.$store.getters["ProvinsiStore/gettersProvinsi"];
    },

    dKotaall() {
      return this.$store.getters["KotaStore/gettersKota"];
    },
  },

  data() {
    return {
      search: "",
      filteredprov: null,
      editedIndex: -1,
      valid: true,
      Kota: [(v) => !!v || "Kota harus diisi"],
      idselect: "",

      databaru: {
        idProv: "",
        idKota: "",
        Provinsi: "",
        Kota: "",
      },
      editdata: {
        idProv: "",
        idKota: "",
        Provinsi: "",
        Kota: "",
      },

      dialogDelete: false,
      dialogedit: false,
      dialogtambahKota: false,

      headers: [
        {
          text: "id Provinsi",
          value: "idProv",
        },
        {
          text: "id Kota",
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
        {
          text: "Actions",
          value: "actions",
        },
      ],
    };
  },

  //watch melihat setiap data berubah
  watch: {
    idselect : function(){
      if (this.idselect == "") {
        return
      }
      const dataprovinsi = this.dProvinsiall
      const id = this.idselect
      const filterprov1 = _.filter(dataprovinsi, function(n){ return n.idProv == id})
      console.log(filterprov1)
      this.filteredprov = filterprov1
      this.databaru.idProv = filterprov1[0].idProv
      this.databaru.Provinsi = filterprov1[0].Provinsi
    },

  },
  methods: {

    bukadialog() {
      this.dialogtambahKota = true;
    },

    tutupdialog() {
      this.dialogedit = false;
    },

    validate() {
      if (this.$refs.form.validate()) {
        this.tambahKota();
      }
      
    },

    closeDelete() {
      this.dialogDelete = false;
    },

    async tambahKota() {
      const hitungidkota = this.databaru.idKota;
      this.databaru.idKota = hitungidkota;
      this.$store.dispatch("KotaStore/actiontambahKota", this.databaru);
      this.databaru.idKota = this.dKotaall.length + 1;
      this.databaru = {
        idProv: "",
        idKota: "",
        Provinsi: "",
        Kota: "",
      };
      this.dialogtambahKota = false;
      this.idselect= "";
    },

    hapusdata(item) {
            this.editedIndex = this.dKotaall.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialogDelete = true
        },
        confirmhapus() {
            this.$store.dispatch("KotaStore/actionhapusdata", this.editedIndex)
            console.log(this.editedIndex)
            this.dialogDelete = false
        },


    editdata2(item) {
      this.indexedit = this.dKotaall.indexOf(item);
      this.editdata = Object.assign({}, item);
      this.dialogedit = true;
    },
    updatedata() {
      const updatedata = {
        index: this.indexedit,
        dataedit: this.editdata,
      };
      this.$store.dispatch("KotaStore/actionupdatedata", updatedata);
      this.dialogedit = false;
    },
  },
};
</script>