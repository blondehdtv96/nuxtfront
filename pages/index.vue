<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <v-card class="mx-auto" max-width="344" outlined color="yellow">
          <v-list-item>
            <v-list-item-content>
              <div class="text-overline mb-4">Total Data Karyawan</div>
              <v-list-item-title class="text-h10 mb-1">
                Data Karyawan : {{  this.dkaryawanall.length }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card class="mx-auto" max-width="344" outlined color="green">
          <v-list-item>
            <v-list-item-content>
              <div class="text-overline mb-4">Total Data Provinsi</div>
              <v-list-item-title class="text-h10 mb-1">
                Data Provinsi : {{ this.dprovinsiall.length }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card class="mx-auto" max-width="344" outlined color="blue">
          <v-list-item>
            <v-list-item-content>
              <div class="text-overline mb-4">Total Data Kota</div>
              <v-list-item-title class="text-h11 mb-1">
                Data Kota : {{  this.dkotall.length }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card class="mx-auto" max-width="344" outlined color="cyan">
          <v-list-item>
            <v-list-item-content>
              <div class="text-overline mb-4">Total Data Kecamatan</div>
              <v-list-item-title class="text-h10 mb-1">
                Data Kecamatan : {{ this.dkecall.length }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>

    <v-card class="mt-8 mb-12">
      <v-data-table :headers="headers" :items="dkaryawanall" sort-by="nama">
      </v-data-table>
    </v-card>

    <v-row>
      <v-col cols="4">
        <v-card class="mt-4 mb-12">
          <v-data-table
            :headers="headersp"
            :items="dprovinsiall"
            sort-by="nama"
          >
          </v-data-table>
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card class="mt-4 mb-12">
          <v-data-table
            :headers="headersk"
            :items="dkotall"
            sort-by="nama"
          >
          </v-data-table>
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card class="mt-4 mb-12">
          <v-data-table
            :headers="headerskk"
            :items="dkecall"
            sort-by="nama"
          >
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    dprovinsiall() {
      return this.$store.getters["ProvinsiStore/gettersProvinsi"];
    },
    dkotall() {
      return this.$store.getters["KotaStore/gettersKota"];
    },
    dkecall() {
      return this.$store.getters["KecamatanStore/gettersKecamatan"];
    },
    dkaryawanall() {
      return this.$store.getters["CrudkaryawanStore/gettersdatakaryawan"];
    },
  },

  data() {
    return {
      headers: [
        {
          text: "Nama",
          align: "start",
          value: "nama",
        },
        {
          text: "Umur",
          value: "umur",
        },
        {
          text: "Jabatan",
          value: "jabatan",
        },
        {
          text: "Divisi",
          value: "divisi",
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
          text: "Kecamatan",
          value: "Kecamatan",
        },
      ],

      headersp: [
        {
          text: "Provinsi",
          value: "Provinsi",
        },
        
      ],

      headersk: [
        {
          text: "Provinsi",
          value: "Provinsi",
        },

        {
          text: "Kota",
          value: "Kota",
        }, 
      ],

      headerskk: [
        {
          text: "Provinsi",
          value: "Provinsi",
        },

        {
          text: "Kota",
          value: "Kota",
        }, 

        {
          text: "Kecamatan",
          value: "Kecamatan",
        }, 
      ],
    };
  },
};
</script>
