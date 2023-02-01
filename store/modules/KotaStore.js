import { db } from "~/services/fireinit.js";
const state = {
    Kota: [],
}

const getters = {
    gettersKota: ((state) => {
        return state.Kota
    }),
}

const actions = {
    actiontambahkota({ dispatch }, payload) {
        return new Promise(async (resolve, reject) => {
            try {
                if (confirm("anda Yakin ?") == true) {
                    await db.collection("Kota").doc(payload.idKota).set({
                        idProv: payload.idProv,
                        idKota: payload.idKota,
                        Provinsi: payload.Provinsi,
                        Kota: payload.Kota,
                    });
                    dispatch("actiontampilkota")
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

    async actiontampilkota({ commit, state }) {
        state.Kota = []
        return await db
            .collection("Kota")
            .get()
            .then((doc) => {
                if (doc.size > 0) {
                    doc.forEach((doc2) => {
                        const data = _.assign({ id: doc2.id }, doc2.data()); // assign untuk gabungin 2 object
                        commit('tampilkotaMutation', data)
                    });
                } else {
                    console.log("data kosong");
                }
            })
            .catch((error) => {
                console.log("terjadi error tampildataprov");
                console.log(error);
            });
    },

    async actiontampilquerykota ({ commit, state}, payload) {
        state.Kota = []
        return await db
            .collection("Kota")
            .where("idProv", "==", payload)
            .get()
            .then((doc) => {
                if (doc.size > 0) {
                    doc.forEach((doc2) => {
                        const data = _.assign({ id: doc2.id }, doc2.data()); // assign untuk gabungin 2 object
                        commit('tampilkotaMutation', data)
                    });
                } else {
                    console.log("data kosong");
                }
            })
            .catch((error) => {
                console.log("terjadi error tampildataprov");
                console.log(error);
            });

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
    tampilkotaMutation(state, payload) {
        state.Kota.push(payload)
    },
}

export default {
    namespaced: true,
    mutations,
    getters,
    state,
    actions,
}