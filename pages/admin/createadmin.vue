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
            <!-- <v-text-field
              label="Jabatan"
              single-line
              :rules="jabatanRules"
              v-model="databaru.jabatan"
            ></v-text-field> -->
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
            <v-btn color="success" @click="validate()">tambah</v-btn>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>
    <v-btn color="success" @click="bukadialog()">New Data karyawan</v-btn>
    <!-- <v-simple-table>
      <template>
        <thead>
          <tr>
            <th class="text-left">No.</th>
            <th class="text-left">Nama</th>
            <th class="text-left">Umur</th>
            <th class="text-left">Jabatan</th>
            <th class="text-left">Divisi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data, index) in dkaryawanall" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ data.nama }}</td>
            <td>{{ data.umur }}</td>
            <td>{{ data.jabatan }}</td>
            <td>{{ data.divisi }}</td>
            <td>
              <v-btn color="success" @click="hapusdata(index)">Hapus</v-btn>
              <v-btn color="primary" @click="editdata1(data, index)">
                Edit
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table> -->
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
                    :search="search"
                    :key="index">
        <template v-slot:top>
        </template>
          <template v-slot:[`item.actions`] ="{ item }">
          <v-icon medium class="mr-2" @click="editdata2(item)">mdi-pencil</v-icon>
          <v-icon small @click="hapusdata(item)">mdi-eraser</v-icon>
        </template>
        <template v-slot:no-data>
          <v-btn color="primary" @click="initialize">Reset</v-btn>
        </template>

      </v-data-table>
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
              <v-col cols="12" sm="6" md="4">
                <v-select
                  v-model="editdata.jabatan"
                  :items="djabatanall"
                  item-text="jabatan"
                  item-value="jabatan"
                  label="Jabatan"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-select
                  v-model="editdata.divisi"
                  :items="ddivisiall"
                  item-text="divisi"
                  item-value="divisi"
                  label="Divisi"
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
  },
  data() {
    return {
      search: '',
      indexedit: 1,
      valid: true,
      nameRules: [(v) => !!v || "Nama Harus Disii"],
      umurRules: [(v) => !!v || "Umur harus diisi"],
      jabatanRules: [(v) => !!v || "Jabatan harus diisi"],
      divisiRules: [(v) => !!v || "Divisi harus diisi"],

      databaru: {
        nama: "",
        umur: "",
        jabatan: "",
        divisi: "",
      },
      editdata: {
        nama: "",
        umur: "",
        jabatan: "",
        divisi: "",
      },

      dialogedit: false,
      dialogtambahkaryawan: false,
      

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
            text: 'Actions',
            value: 'actions',
          }
        ],
    };
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
        this.$toast.error("ini nampil dulu dah");
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
      };
      this.dialogtambahkaryawan = false;
    },

    hapusdata(item) {
      //console.log('line 166 lancar')
      this.$store.dispatch("CrudkaryawanStore/actionhapusdata", item);
    },

    editdata2(item) {
      this.indexedit = this.dkaryawanall.indexOf(item)
      this.editdata = Object.assign({}, item)
      this.dialogedit = true
    },

    // editdata1(item) {
    //   //console.log('line182')
    //   this.dialogedit = true;
    //   this.editdata.nama = data.nama;
    //   this.editdata.umur = data.umur;
    //   this.editdata.jabatan = data.jabatan;
    //   this.editdata.divisi = data.divisi;
    //   this.indexedit = index;
    // },

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
