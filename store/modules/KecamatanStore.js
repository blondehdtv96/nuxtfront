const state = {
    Kecamatan: [
        {
            idProv: 1,
            idKota: 1,
            idKec: 1,
            Provinsi: "Jawa Barat",
            Kota: "Bandung",
            Kecamatan: "Soreang",

        },
        {
            idProv: 1,
            idKota: 2,
            idKec: 2,
            Provinsi: "Jawa Barat",
            Kota: "Bekasi",
            Kecamatan: "Medan Satria",

        },
        {
            idProv: 2,
            idKota: 1,
            idKec: 3,
            Provinsi: "Jawa Tengah",
            Kota: "Sragen",
            Kecamatan: "Desa Picul"


        },
        {
            idProv: 2,
            idKota: 2,
            idKec: 4,
            Provinsi: "Jawa Tengah",
            Kota: "Solo",
            Kecamatan: "Desa Lupic"


        },

    ],
}

const getters = {
    gettersKecamatan : ((state) => {
        return state.Kecamatan
    }),
}

const actions = {
    actiontambahkecamatan({ commit }, payload) {
        //console.log('masuk38 crud store')
        return new Promise(async (resolve, reject) => {
            try {
                if (confirm("anda Yakin ?") == true) {
                    commit('tambahkecamatanMutation', payload)
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

    actionupdatedata({ commit, state }, payload) {
        console.log('tampil line 81')
        return new Promise(async (resolve, reject) => {
            console.log('line 83 oke')
            try {
                if (confirm("mau update data ?") == true) {
                    console.log('tampil line 85')
                    const dataedit = state.Kecamatan
                    console.log('tampil line 88')
                    const updatedata = Object.assign(dataedit[payload.index], payload.dataedit)
                    console.log(dataedit)
                    //console.log(dataedit)
                    commit('updatekecamatanMutation', dataedit)
                }
                resolve(1)
            } catch (HandleError) {
                reject('tenang aja')
            }
        })
    },

    actionhapusdata({ commit }, payload) {
        return new Promise((resolve, reject) => {
            try {
                commit('hapuskecamatanMutation', payload)
                resolve(1)
            } catch (error) {
                reject(0)
            }
        })
    },
}

const mutations = {
    tambahkecamatanMutation(state, payload) {
        state.Kecamatan.push(payload)
    },
    
    updatekecamatanMutation(state, payload) {
        state.Kecamatan.splice (payload, 1)
    },

    hapuskecamatanMutation (state, payload) {
        state.Kecamatan = payload
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,

}