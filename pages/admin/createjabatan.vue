<template>
  <v-container>
    <v-dialog v-model="dialogtambahjabatan" width="500">
      <v-card justify="center" width="500">
        <v-container>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              label="Jabatan"
              single-line
              :rules="jabatanRules"
              v-model="databaru.jabatan"
            ></v-text-field>
            <v-btn color="success" @click="validate()">tambah</v-btn>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>
    <v-btn color="success" @click="bukadialog()">Tambah Jabatan</v-btn>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">No.</th>
            <th class="text-left">Jabatan</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data, index) in djabatanall" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ data.jabatan }}</td>
            <td>
              <v-btn color="success" @click="hapusdata(index)">Hapus</v-btn>
              <v-btn color="primary" @click="editdatajabatan(data, index)">
                Edit
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
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
                  label="Jabatan"
                  :rules="jabatanRules"
                  v-model="editdata.jabatan"
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
    djabatanall() {
      return this.$store.getters["CrudjabatanStore/gettersdatajabatan"];
    },
  },

  data() {
    return {
      indexedit: 1,
      valid: true,
      jabatanRules: [(v) => !!v || "Jabatan harus diisi"],

      databaru: {
        idJabatan: 0,
        jabatan: "",
      },
      editdata: {
        jabatan: "",
      },

      dialogedit: false,
      dialogtambahjabatan: false,
    };
  },

  methods: {
    bukadialog() {
      this.dialogtambahjabatan = true;
    },

    tutupdialog() {
      this.dialogedit = false;
    },

    validate() {
      if (this.$refs.form.validate()) {
        this.tambahdata();
      } else {
        this.$toast.error("pesan error");
      }
    },

    async tambahdata() {
      //console.log("masuk152");
      const hitungidjabatan = this.databaru.idJabatan + 1
      this.databaru.idJabatan = hitungidjabatan
      this.$store.dispatch("CrudjabatanStore/actiontambahdata", this.databaru);
      this.databaru.idJabatan = this.djabatanall.length
      //console.log('masuk154')
      //console.log('dibawah return 155')
      this.databaru = {
        idJabatan: "",
        jabatan: "",
      };
      
      this.dialogtambahjabatan = false;
    },

    hapusdata(index1) {
      this.$store.dispatch("CrudjabatanStore/actionhapusdata", index1);
    },

    editdatajabatan(data, index) {
      //console.log('line182')
      this.dialogedit = true;
      this.editdata.jabatan = data.jabatan;
      this.indexedit = index;
    },

    updatedata() {
      const updatedata = {
        index: this.indexedit,
        dataedit: this.editdata,
      };
     this.$store.dispatch("CrudjabatanStore/actionupdatedata", updatedata);
      this.dialogedit = false;
    },
  },
};
</script>