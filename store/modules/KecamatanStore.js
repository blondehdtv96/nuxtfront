import { db } from "~/services/fireinit.js";
const state = {
    Kecamatan: [],
}

const getters = {
    gettersKecamatan : ((state) => {
        return state.Kecamatan
    }),
}

const actions = {
    actiontambahkecamatan({ dispatch }, payload) {
        //console.log('masuk38 crud store')
        return new Promise(async (resolve, reject) => {
            try {
                if (confirm("anda Yakin ?") == true) {
                    await db.collection("Kecamatan").doc(payload.idKecamatan).set({
                        idprov: payload.idprov,
                        idKota: payload.idKota,
                        idKecamatan: payload.idKecamatan,
                        Provinsi: payload.Provinsi,
                        Kota: payload.Kota,
                        Kecamatan: payload.Kecamatan,
                    });
                    dispatch("actiontampilkecamatan")
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

    async actiontampilkecamatan({ commit, state }) {
        state.Kota = []
        return await db
            .collection("Kecamatan")
            .get()
            .then((doc) => {
                if (doc.size > 0) {
                    doc.forEach((doc2) => {
                        const data = _.assign({ id: doc2.id }, doc2.data()); // assign untuk gabungin 2 object
                        commit('tampilkecamatanMutation', data)
                    });
                } else {
                    console.log("data kosong");
                }
            })
            .catch((error) => {
                console.log("terjadi error tampildatakecamatan");
                console.log(error);
            });
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
    tampilkecamatanMutation(state, payload){
        state.Kecamatan.push(payload)
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,

}