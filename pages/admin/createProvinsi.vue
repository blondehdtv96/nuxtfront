<template>
  <v-container>
    <v-dialog v-model="dialogtambahProv" width="500">
      <v-card justify="center" width="500">
        <v-container>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              label="Nama Provinsi"
              single-line
              :rules="Prov"
              v-model="databaru.Provinsi"
            ></v-text-field>
            <v-btn color="success" @click="validate()">tambah</v-btn>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>
    <v-btn color="success" @click="bukadialog()">Tambah Provinsi</v-btn>
    <template>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
      <v-data-table :headers="headers" 
                    :items="dProvinsiall"
                    sort-by="nama"
                    :search="search">
        <template v-slot:top>
        </template>
          <template v-slot:[`item.actions`] ="{ item }">
          <v-icon medium class="mr-2" @click="editdataprov(item)">mdi-pencil</v-icon>
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
                <v-text-field
                  label="Provinsi"
                  :rules="Prov"
                  v-model="editdata.Provinsi"
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
  },



  data() {
    return {
      search: '',
      editedIndex: -1,
      valid: true,

      Prov: [(v) => !!v || "Provinsi Harus Diisi"],

      databaru: {
        idProv: 0,
        Provinsi: "",
      },
      editdata: {
        idProv: 0,
        Provinsi: "",
      },

      dialogedit: false,
      dialogtambahProv: false,
      dialogDelete: false,

      headers: [
        {
          text: 'Provinsi',
          value: 'Provinsi',
        },
        {
          text: 'Actions',
          value: 'actions',
        }
      ]
    };
  },

  methods: {
    bukadialog() {
      this.dialogtambahProv = true
    },

    tutupdialog() {
      this.dialogedit = false
    },

    closeDelete() {
      this.dialogDelete = false
    },

    validate() {
        if (this.$refs.form.validate()) {
          this.tambahProv();
        } else {
          this.$toast.error("pesan error");
        }
      },
    
    async tambahProv(){
      const hitungidProv = this.databaru.idProv 
      this.databaru.idProv = hitungidProv
      this.$store.dispatch("ProvinsiStore/actiontambahProvinsi", this.databaru)
      this.databaru.idProv = this.dProvinsiall.length + 1
      this.databaru = {
        idProv: "",
        Provinsi: "",
      }

      this.dialogtambahProv = false

    },

    hapusdata(item) {
            this.editedIndex = this.dProvinsiall.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialogDelete = true
        },
        confirmhapus() {
            this.$store.dispatch("ProvinsiStore/actionhapusdata", this.editedIndex)
            console.log(this.dProvinsiall)
            this.dialogDelete = false
        },

    editdataprov(item) {
      //console.log('line182')
      this.dialogedit = true;
      this.indexedit = this.dProvinsiall.indexOf(item)
      this.editdata = Object.assign({}, item)
    },


    updatedata() {
      const updatedata = {
        index: this.indexedit,
        dataedit: this.editdata,
      };
      this.$store.dispatch("ProvinsiStore/actionupdatedata", updatedata);
      this.dialogedit = false;
    },
  },
};
</script>