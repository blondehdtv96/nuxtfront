const state = {
    Kota: [
        {
            idProv: 1,
            idKota: 1,
            Provinsi: "Jawa Barat",
            Kota: "Bandung",

        },
        {
            idProv: 1,
            idKota: 2,
            Provinsi: "Jawa Barat",
            Kota: "Bekasi",

        },
        {
            idProv: 2,
            idKota: 1,
            Provinsi: "Jawa Tengah",
            Kota: "Sragen",

        },
        {
            idProv: 2,
            idKota: 2,
            Provinsi: "Jawa Tengah",
            Kota: "Solo",

        },

        // {
        //     idProv: 4,
        //     idKota: 1,
        //     Provinsi: "DKI Jakarta",
        //     Kota: "Jakarta Selatan",

        // },
        // {
        //     idProv: 4,
        //     idKota: 2,
        //     Provinsi: "DKI Jakarta",
        //     Kota: "Jakarta Timur",
        // },
        // {
        //     idProv: 7,
        //     idKota: 1,
        //     Provinsi: "Kalimantan Tengah",
        //     Kota: "test1"

        // },
    ],
}

const getters = {
    gettersKota : ((state) => {
        return state.Kota
    }),
}

const actions = {
    actiontambahKota({ commit }, payload) {
        //console.log('masuk38 crud store')
        return new Promise(async (resolve, reject) => {
            try {
                if (confirm("anda Yakin ingin menambahkan data baru ?") == true) {
                    commit('tambahKotaMutation', payload)
                    setTimeout(() => {
                        resolve(2)
                    }, 5000);
                } else {
                    reject(2)
                }
            } catch (err) {
                reject(2)
            }
        })
    },

    actionhapusdata({ commit }, payload) {
        return new Promise((resolve, reject) => {
            try {
                commit('hapusKotaMutation', payload)
                resolve(1)
            } catch (error) {
                reject(0)
            }
        })
    },

    actionupdatedata({ commit, state }, payload) {
        console.log('tampil line 81')
        return new Promise(async (resolve, reject) => {
            console.log('line 83 oke')
            try {
                if (confirm("mau update data ?") == true) {
                    console.log('tampil line 85')
                    const dataedit = state.Kota
                    console.log('tampil line 88')
                    const updatedata = Object.assign(dataedit[payload.index], payload.dataedit)
                    console.log(dataedit)
                    //console.log(dataedit)
                    commit('updateKotaMutation', dataedit)
                }
                resolve(1)
            } catch (HandleError) {
                reject('tenang aja')
            }
        })
    },

}

const mutations = {

    tambahKotaMutation(state, payload) {
        state.Kota.push(payload)
    },
    hapusKotaMutation: (state, payload) => {
        state.Kota.splice(payload, 1);
    },
    updateKotaMutation(state, payload) {
        state.Kota = payload
    },
}

export default  {
    namespaced: true,
    mutations,
    getters,
    state,
    actions,
}