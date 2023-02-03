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
        console.log("14")
        return new Promise(async (resolve, reject) => {
            console.log("16")
            try {
                if (confirm("anda Yakin ?") == true) {
                    console.log("19")
                   await db.collection("Kecamatan").doc(payload.idKecamatan).set({
                        idProv: payload.idProv,
                        idKota: payload.idKota,
                        idKecamatan: payload.idKecamatan,
                        Provinsi: payload.Provinsi,
                        Kota: payload.Kota,
                        Kecamatan: payload.Kecamatan,
                    });
                    console.log("49")
                    dispatch("actiontampilkecamatan")
                    setTimeout(() => {
                        resolve()
                    }, 2000);
                } else {
                    console.log("35")
                    reject()
                }
            } catch (err) {
                reject()
            }
        })
    },


    async actiontampilkecamatan({ commit, state }) {
        state.Kecamatan = []
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

    async actiontampilquerykecamatan({ commit, state },payload) {
        state.Kecamatan = []
        return await db
            .collection("Kecamatan")
            .where("idKota", "==", payload)
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