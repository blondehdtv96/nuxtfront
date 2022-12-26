<template>
    <v-container>
      <v-dialog v-model="dialogtambahdivisi" width="500">
        <v-card justify="center" width="500">
          <v-container>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                label="Divisi"
                single-line
                :rules="divisiRules"
                v-model="databaru.divisi"
              ></v-text-field>
              <v-btn color="success" @click="validate()">tambah</v-btn>
            </v-form>
          </v-container>
        </v-card>
      </v-dialog>
      <v-btn color="success" @click="bukadialog()">Tambah divisi</v-btn>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">No.</th>
              <th class="text-left">Divisi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(data, index) in ddivisiall" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ data.divisi }}</td>
              <td>
                <v-btn color="success" @click="hapusdata(index)">Hapus</v-btn>
                <v-btn color="primary" @click="editdatadivisi(data, index)">
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
                    label="divisi"
                    :rules="divisiRules"
                    v-model="editdata.divisi"
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
      ddivisiall() {
        return this.$store.getters["CrudkaryawanStore/gettersdatadivisi"];
      },
    },
  
    data() {
      return {
        indexedit: 1,
        valid: true,
        divisiRules: [(v) => !!v || "divisi harus diisi"],
  
        databaru: {
          divisi: "",
        },
        editdata: {
          divisi: "",
        },
  
        dialogedit: false,
        dialogtambahdivisi: false,
      };
    },
  
    methods: {
      bukadialog() {
        this.dialogtambahdivisi = true;
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
        this.$store.dispatch("CrudkaryawanStore/actiontambahdatadivisi", this.databaru);
        //console.log('masuk154')
        //console.log('dibawah return 155')
        this.databaru = {
          divisi: "",
        };
        this.dialogtambahdivisi = false;
      },
  
      hapusdata(index1) {
        this.$store.dispatch("CrudkaryawanStore/actionhapusdatadivisi", index1);
      },
  
      editdatadivisi(data, index) {
        //console.log('line182')
        this.dialogedit = true;
        this.editdata.divisi = data.divisi;
        this.indexedit = index;
      },
  
      updatedata() {
        const updatedata = {
          index: this.indexedit,
          dataedit: this.editdata,
        };
       this.$store.dispatch("CrudkaryawanStore/actionupdatedatadivisi", updatedata);
        this.dialogedit = false;
      },
    },
  };
  </script>