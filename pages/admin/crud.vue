<template>
  <v-container grid-list-xs>
    <v-text-field
      v-model="databaru.nama"
      name="name"
      label="nama"
    ></v-text-field>
    <v-text-field v-model="databaru.id" name="id" label="id"></v-text-field>
    <v-text-field
      v-model="databaru.umur"
      name="umur"
      label="label"
    ></v-text-field>
    <v-text-field
      v-model="databaru.email"
      name="email"
      label="email"
    ></v-text-field>
    <v-btn color="success" @click="tambahkaryawan">tambah</v-btn>
    <v-btn color="success" @click="tambahkaryawanid">tambah pake id</v-btn>

    <v-divider></v-divider>

    <v-data-table
      :headers="headers"
      :items="karyawan"
      v-if="karyawan.length > 0"
    >
    </v-data-table>
  </v-container>
</template>

<script>
import { db } from "~/services/fireinit.js";
import _ from "lodash";
export default {
  computed: {},

  data() {
    return {
      headers: [
        {
          text: "id",
          value: "id",
        },
        {
          text: "nama",
          value: "nama",
        },
        {
          text: "umur",
          value: "umur",
        },
        {
          text: "email",
          value: "email",
        },
      ],
      databaru: {
        nama: "",
        umur: 0,
        email: "",
      },
      karyawan: [],
    };
  },

  //watch melihat setiap data berubah
  watch: {},
  mounted() {
    this.tarikdatakaryawan();
  },
  methods: {
    async tambahkaryawanid() {
      try {
        await db.collection("karyawan").doc(this.databaru.id).set({
          nama: this.databaru.nama,
          umur: this.databaru.umur,
          email: this.databaru.email,
        });
        this.tarikdatakaryawan();
        this.databaru = { nama: "", umur: 0 };
      } catch (error) {
        console.log(error);
      }
    },
    async tarikdatakaryawan() {
      this.karyawan = [];
      return await db
        .collection("karyawan")
        .get()
        .then((doc) => {
          if (doc.size > 0) {
            doc.forEach((doc2) => {
              const data = _.assign({ id: doc2.id }, doc2.data()); // assign untuk gabungin 2 object
              this.karyawan.push(data);
            });
          } else {
            console.log("data kosong");
          }
        })
        .catch((error) => {
          console.log("terjadi error tarikdatakaryawan");

          console.log(error);
        });
    },
    async tambahkaryawan() {
      try {
        await db.collection("karyawan").add({
          nama: this.databaru.nama,
          umur: this.databaru.umur,
          email: this.databaru.email,
        });
        this.tarikdatakaryawan();
        this.databaru = { nama: "", umur: 0, email: "" };
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>