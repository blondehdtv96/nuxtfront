<template>
  <v-container>
    <v-dialog v-model="dialogtambahkaryawan" width="500">
      <v-card justify="center" width="500">
        <v-container>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              label="Nama"
              single-line
              :rules="nameRules"
              v-model="databaru.nama"
            ></v-text-field>
            <v-text-field
              label="Umur"
              single-line
              :rules="umurRules"
              v-model="databaru.umur"
            ></v-text-field>
            <v-select
              v-model="databaru.jabatan"
              :items="djabatanall"
              item-text="jabatan"
              item-value="jabatan"
              label="Jabatan"
              required
            ></v-select>
            <v-select
              v-model="databaru.divisi"
              :items="ddivisiall"
              item-text="divisi"
              item-value="divisi"
              label="divisi"
              required
            ></v-select>
            <v-select
              v-model="idprovinsiselected"
              :items="dprovinsiall"
              item-text="Provinsi"
              item-value="idProv"
              label="Provinsi"
              required
            ></v-select>
            <v-select
              v-model="idkotaselected"
              :items="filteredKota"
              item-text="Kota"
              item-value="idKota"
              label="Kota"
              required
            ></v-select>
            <v-select
              v-model="idkotaselected"
              :items="filteredKecamatan"
              item-text="Kecamatan"
              item-value="idKec"
              label="Kecamatan"
              required
            ></v-select>
            <v-btn color="success" @click="validate()">tambah</v-btn>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>
    <v-btn color="success" @click="bukadialog()">New Data karyawan</v-btn>
    <template>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
      <v-data-table :headers="headers" 
                    :items="dkaryawanall"
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
                <v-text-field
                  label="Nama"
                  :rules="nameRules"
                  v-model="editdata.nama"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Umur"
                  v-model="editdata.umur"
                  hint="example of helper text only on focus"
                ></v-text-field>
              </v-col>
              <v-col cols="10" sm="6" md="4">
                <v-select
                  v-model="editdata.jabatan"
                  :items="djabatanall"
                  item-text="jabatan"
                  item-value="jabatan"
                  label="Jabatan"
                  required
                ></v-select>
              </v-col>
              <v-col cols="10" sm="6" md="4">
                <v-select
                  v-model="editdata.divisi"
                  :items="ddivisiall"
                  item-text="divisi"
                  item-value="divisi"
                  label="Divisi"
                  required
                ></v-select>
              </v-col>
              <v-col cols="10" sm="6" md="4">
              <v-select
              v-model="idprovinsiselected"
              :items="dprovinsiall"
              item-text="Provinsi"
              item-value="idProv"
              label="Provinsi"
              required
            ></v-select>
            </v-col>
            <v-col cols="10" sm="6" md="4">
            <v-select
              v-model="editdata.Kota"
              :items="filteredKota"
              item-text="Kota"
              item-value="Kota"
              label="Kota"
              required
            ></v-select>
            </v-col>
            <v-col cols="10" sm="6" md="4">
            <v-select
              v-model="editdata.Kecamatan"
              :items="filteredKota"
              item-text="Kecamatan"
              item-value="Kecamatan"
              label="Kecamatan"
              required
            ></v-select>
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
    dkaryawanall() {
      return this.$store.getters["CrudkaryawanStore/gettersdatakaryawan"];
    },

    djabatanall(){
      return this.$store.getters["CrudjabatanStore/gettersdatajabatan"];
    },

    ddivisiall(){
      return this.$store.getters["CruddivisiStore/gettersdatadivisi"];
    },

    dprovinsiall(){
      return this.$store.getters["ProvinsiStore/gettersProvinsi"];
    },
    dkotall(){
      return this.$store.getters["KotaStore/gettersKota"];
    },

    dKecall(){
      return this.$store.getters["KecamatanStore/gettersKecamatan"];
    },
  },
  data() {
    return {
      filteredKota:null,
      filteredKecamatan:null,
      search: '',
      editedIndex: -1,
      valid: true,
      nameRules: [(v) => !!v || "Nama Harus Disii"],
      umurRules: [(v) => !!v || "Umur harus diisi"],
      jabatanRules: [(v) => !!v || "Jabatan harus diisi"],
      divisiRules: [(v) => !!v || "Divisi harus diisi"],
      idprovinsiselected:"",
      idkotaselected:"",

      databaru: {
        nama: "",
        umur: "",
        jabatan: "",
        divisi: "",
        idProv: "",
        idKota: "",
        idKec: "",
        Provinsi: "",
        Kota: "",
        Kecamatan: "",
      },
      editdata: {
        nama: "",
        umur: "",
        jabatan: "",
        divisi: "",
        idProv: "",
        idKota: "",
        idKecamatan: "",
        Provinsi: "",
        Kota: "",
        Kecamatan: "",

      },

      dialogedit: false,
      dialogtambahkaryawan: false,
      dialogDelete: false,

      headers: [
          {
            text: 'Nama',
            align: 'start',
            value: 'nama',
          },
          {
            text: 'Umur',
            value:'umur',

          },
          { 
            text: 'Jabatan',
            value: 'jabatan',
          },
          {
            text: 'Divisi',
            value: 'divisi',
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
          {
            text: 'Actions',
            value: 'actions',
          }
        ],
    };
  },
  watch:{
    idprovinsiselected : function(){
      if (this.idprovinsiselected == "") {
        return
      }
      console.log('beruhah di watch')
      const datakota = this.dkotall
      const id = this.idprovinsiselected
      const filteredKota2 = _.filter(datakota, function(n){ return n.idProv == id})
      console.log(filteredKota2)
      this.filteredKota = filteredKota2
      this.databaru.idProv = filteredKota2[0].idProv
      this.databaru.Provinsi = filteredKota2[0].Provinsi
      this.databaru.idKota = filteredKota2[0].idKota
      this.databaru.Kota = filteredKota2[0].Kota
      

      
    },

    idkotaselected : function(){
      if (this.idkotaselected == "") {
        return
      }
      const idprov = this.databaru.idProv
      // const idkotan = this.databaru.idKota
      const datakec = this.dKecall
      const idkota1 = this.idkotaselected
      const filteredKecamatan2 = _.filter(datakec, function (o) {return o.idKota == idkota1})
      const filteredKecamatan3 = _.filter(filteredKecamatan2, function (i) {return i.idProv == idprov})
      console.log(filteredKecamatan3)
      this.filteredKecamatan4 = filteredKecamatan2
      this.filteredKecamatan = filteredKecamatan3
      this.databaru.idProv = filteredKecamatan3[0].idProv
      this.databaru.Provinsi = filteredKecamatan3[0].Provinsi
      this.databaru.idKota = filteredKecamatan3[0].idKota
      this.databaru.Kota = filteredKecamatan3[0].Kota
      this.databaru.idKec = filteredKecamatan3[0].idKec
      this.databaru.Kecamatan = filteredKecamatan3[0].Kecamatan
    },
  },
  methods: {
    bukadialog() {
      this.dialogtambahkaryawan = true;
    },

    tutupdialog() {
      this.dialogedit = false;
    },

    validate() {
      if (this.$refs.form.validate()) {
        //console.log("masuk145");
        this.tambahdata();
      } else {
        this.$toast.error("kosong");
      }
    },

    async tambahdata() {
      //console.log("masuk152");
      this.$store.dispatch("CrudkaryawanStore/actiontambahdata", this.databaru);
      //console.log('masuk154')
      //console.log('dibawah return 155')
      this.databaru = {
        nama: "",
        umur: "",
        jabatan: "",
        divisi: "",
        idProv: "",
        idKota:"",
        idKec:"",
        Kota: "",
        Kecamatan: "",
      };
      this.dialogtambahkaryawan = false;
      this.idprovinsiselected ="";
      this.idkotaselected = "";
    },

    hapusdata(item) {
            this.editedIndex = this.dkaryawanall.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialogDelete = true
        },
        confirmhapus() {
            this.$store.dispatch("CrudkaryawanStore/actionhapusdata", this.editedIndex)
            console.log(this.editedIndex)
            this.dialogDelete = false
        },

    editdata2(item) {
      this.indexedit = this.dkaryawanall.indexOf(item)
      this.editdata = Object.assign({}, item)
      this.dialogedit = true
    },



    updatedata() {
      const updatedata = {
        index: this.indexedit,
        dataedit: this.editdata,
      };
      this.$store.dispatch("CrudkaryawanStore/actionupdatedata", updatedata);
      this.dialogedit = false;
    },
  },
};
</script>
