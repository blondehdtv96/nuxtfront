<template>
    <v-container>
      <v-dialog v-model="dialogtambahKec" width="500">
        <v-card justify="center" width="500">
          <v-container>
            <v-form ref="form" v-model="valid" lazy-validation>
                <v-select
                  v-model="idprovinsiselected"
                  :items="dProvinsiall"
                  item-text="Provinsi"
                  item-value="idProv"
                  label="Provinsi"
                  required
                ></v-select>
                <v-select
                  v-model="idkotaselected.Kota"
                  :items="filteredKota"
                  item-text="Kota"
                  item-value="Kota"
                  label="Kota"
                  required
                ></v-select>
              <v-text-field
                label="Kecamatan"
                single-line
                :rules="Kec"
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
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
      <v-data-table :headers="headers" 
                    :items="dKecall"
                    sort-by="nama"
                    :search="search">
        <template v-slot:top>
        </template>
          <template v-slot:[`item.actions`] ="{ item }">
          <v-icon medium class="mr-2" @click="editdata2(item)">mdi-pencil</v-icon>
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
<v-dialog v-model="dialogedit" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Edit Data</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-select
                  v-model="idprovinsiselected"
                  :items = "dKecall"        
                  item-text="Provinsi"
                  item-value="idProv"
                  label="Provinsi"
                  required
                ></v-select>
                <v-select
                  v-model="editdata.Kota"
                  :items = "filteredKec"        
                  item-text="Kota"
                  item-value="Kota"
                  label="Kota"
                  required
                ></v-select>
                <v-text-field
                  label="Kecamatan"
                  :rules = "Kec"
                  v-model="editdata.Kecamatan"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="tutupdialog()">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="updatedata()">Simpan</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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

      dKecall() {
        return this.$store.getters["KecamatanStore/gettersKecamatan"];
      },
    },
  
    data() {
      return {
        search: '',
        indexedit: 1,
        valid: true,
        Kec: [(v) => !!v || "Kecamatan harus diisi "],
        idprovinsiselected: "",
        idkotaselected: "",
        filteredKec: null,
        filteredKota: null,

  
        databaru: {
          idProv: "",
          idKota: "",
          idKec: "",
          Provinsi:"",
          Kota: "",
          Kecamatan: "",
        },
        editdata: {
          idProv: "",
          idKota: "",
          idKec: "",
          Provinsi: "",
          Kota: "",
          Kecamatan: "",
        },
        
        dialogedit: false,
        dialogtambahKec: false,
        dialogDelete: false,


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
          {
            text: 'Actions',
            value: 'actions',
          }
        ],
      };
    },


  //watch menambahkan setiap data 
  watch:{
    idprovinsiselected : function(){
      if(this.idprovinsiselected == ""){
        return
      }
      console.log('beruhah di watch')
      const datakota = this.dKotaall
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
      const datakec = this.dKotaall
      const dataidkota = this.databaru.idKota
      const id = this.idkotaselected
      const filteredKec1 = _.filter(datakec, function(o){ return o.idKota == id})
      const filteredKec2 = _.filter(filteredKec1, function(i){ return i.idKec == dataidkota})
      console.log(filteredKec2)
      this.filteredKec = filteredKec1
      this.filteredkeca = filteredKec2
      this.databaru.idKota = filteredKec2[0].idKota


    },
  },


    methods: {
      bukadialog() {
        this.dialogtambahKec = true;
      },
  
      tutupdialog() {
        this.dialogedit = false;
      },
  
      validate() {
        if (this.$refs.form.validate()) {
          this.tambahKec();
        } else {
          this.$toast.error("pesan error");
        }
      },

      closeDelete() {
        this.dialogDelete = false
      },
  
      async tambahKec() {
        const hitungidkec = this.databaru.idKec
        this.databaru.idKec = hitungidkec
        this.$store.dispatch("KecamatanStore/actiontambahkecamatan", this.databaru);
        this.databaru.idKec = this.dKecall.length + 1
        this.databaru = {
          idProv: "",
          idKota: "",
          idKec: "",
          Provinsi: "",
          Kota:"",
          Kecamatan: "",
        };

        this.dialogtambahKec = false;
        this.idprovinsiselected = "";
      },
  
      hapusdata(item) {
            this.editedIndex = this.dKecall.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialogDelete = true
        },
        confirmhapus() {
            this.$store.dispatch("KecamatanStore/actionhapusdata", this.editedIndex)
            console.log(this.editedIndex)
            this.dialogDelete = false
        },
  
      editdata2(item) {
      this.indexedit = this.dKecall.indexOf(item)
      this.editdata = Object.assign({}, item)
      this.dialogedit = true
    },
      updatedata() {
        const updatedata = {
          index: this.indexedit,
          dataedit: this.editdata,
        };
        this.$store.dispatch("KecamatanStore/actionupdatedata", updatedata);
        this.dialogedit = false;
      },
    },
  };
  </script>