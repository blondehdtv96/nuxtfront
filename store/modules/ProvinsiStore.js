const state = {
    Provinsi: [
        {
            idProv: "p1",
            Provinsi: "Jawa Barat",

        },
        {
            idProv: "p2",
            Provinsi: "Jawa Tengah",

        },
        {
            idProv: "p3",
            Provinsi: "Jawa Timur",

        },
        {
            idProv: "p4",
            Provinsi: "DKI Jakarta",
        },
        // {
        //     idProv: 5,
        //     Provinsi: "Sumatera Utara",
        // },
        // {
        //     idProv: 6,
        //     Provinsi: "Sumatera Utara",
        // },
        // {
        //     idProv: 7, 
        //     Provinsi: "Kalimantan Tengah"
        // },
    ],
}

const getters = {
    gettersProvinsi : ((state) => {
        return state.Provinsi
    }),
}

const actions = {
    actiontambahProvinsi({ commit }, payload) {
        //console.log('masuk38 crud store')
        return new Promise(async (resolve, reject) => {
            try {
                if (confirm("anda Yakin ?") == true) {
                    commit('tambahProvinsiMutation', payload)
                    setTimeout(() => {
                        resolve()
                    }, 2000);
                } else {
                    reject()
                }
            } catch (err) {
                reject()
            }
        })
    },

    actionhapusdata({ commit }, payload) {
        return new Promise((resolve, reject) => {
            try {
                commit('hapusProvinsiMutation', payload)
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
                    const dataedit = state.Provinsi
                    console.log('tampil line 88')
                    const updatedata = Object.assign(dataedit[payload.index], payload.dataedit)
                    console.log(dataedit)
                    //console.log(dataedit)
                    commit('updateProvinsiMutation', dataedit)
                }
                resolve(1)
            } catch (HandleError) {
                reject('tenang aja')
            }
        })
    },

}

const mutations = {

    tambahProvinsiMutation(state, payload) {
        state.Provinsi.push(payload)
    },
    hapusProvinsiMutation(state, payload) {
        state.Provinsi.splice (payload, 1)
    },
    updateProvinsiMutation(state, payload) {
        state.Provinsi = payload
    },
}

export default  {
    namespaced: true,
    mutations,
    getters,
    state,
    actions,
}