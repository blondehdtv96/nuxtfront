<template>
    <v-container>
        <v-card class="t-1"
        rounded>
        <v-card-text>
                <v-card
                flat
                class="py-4"
                >
                    <v-card-text>
                    <v-row>
                        <v-btn-toggle
                        v-model="toggle_exclusive"
                        >
                        <v-btn
                        outline>
                            Harian
                        </v-btn>
                        <v-btn>
                            Bulanan
                        </v-btn>
                        <v-btn>
                            Tahunan
                        </v-btn>
                        </v-btn-toggle>
                    </v-row>
                    </v-card-text>
                </v-card>

            <v-row>
                <v-col cols="2">
                    <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
                    >
                    <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    prepend-inner-icon="mdi-map-marker" 
                    label="Mau Sewa Dimana ?"
                    required
                    ></v-text-field>
                    </v-form>
                </v-col>

                <v-col cols="4">
                    <v-menu
                        ref="menu"
                        v-model="menu"
                        :close-on-content-click="false"
                        :return-value.sync="date"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                    >
                        <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                            v-model="date"
                            prepend-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                        ></v-text-field>
                        </template>
                        <v-date-picker
                        v-model="date"
                        no-title
                        scrollable
                        >
                        <v-spacer></v-spacer>
                        <v-btn
                            text
                            color="primary"
                            @click="menu = false"
                        >
                            Cancel
                        </v-btn>
                        <v-btn
                            text
                            color="primary"
                            @click="$refs.menu.save(date)"
                        >
                            OK
                        </v-btn>
                        </v-date-picker>
                    </v-menu>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col
                    cols="12"
                    sm="6"
                    md="4"
                    >
                    <v-dialog
                        ref="dialog"
                        v-model="modal"
                        :return-value.sync="date"
                        persistent
                        width="290px"
                    >
                        <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                            v-model="date"
                            prepend-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                        ></v-text-field>
                        </template>
                        <v-date-picker
                        v-model="date"
                        scrollable
                        >
                        <v-spacer></v-spacer>
                        <v-btn
                            text
                            color="primary"
                            @click="modal = false"
                        >
                            Cancel
                        </v-btn>
                        <v-btn
                            text
                            color="primary"
                            @click="$refs.dialog.save(date)"
                        >
                            OK
                        </v-btn>
                        </v-date-picker>
                    </v-dialog>
                    </v-col>
                <v-col cols="2">
                    <v-select
                    v-model="select"
                    label="Pilih Berapa Bulan"
                    required
                    ></v-select>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="2">
                    <v-select
                    v-model="select"
                    label="Tipe Properti:"
                    required
                    ></v-select>
                </v-col>
                <v-col cols="2">
                    <v-select
                    v-model="select"
                    label="Tipe Kamar:"
                    required
                    ></v-select>
                </v-col>
                <v-col cols="2">
                    <v-select
                    v-model="select"
                    label="Tipe Furniture:"
                    required
                    ></v-select>
                </v-col>

                <v-col cols="3">
                    <v-checkbox v-model="checkbox">
                    <template v-slot:label>
                        <div>
                        Tanggal check in saya flexible
                        </div>
                    </template>
                    </v-checkbox>
                </v-col>

                <v-col cols="2">
                    <v-btn
                    class="l-2"
                    width="100"
                    rounded
                    color="red"
                    dark
                    >
                    Cari
                    </v-btn>   
                </v-col>
            </v-row>
        </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: 'Cardform',

    data: () => ({
    menu: true,

    select: null,
      items: [
        '1 Bulan',
        '2 Bulan',
        '3 Bulan',
        '4 Bulan',
      ],


    date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,
    }),
};
</script>