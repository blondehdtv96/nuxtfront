import { db } from "~/services/fireinit.js";
const state = {
    Provinsi: [],
}

const getters = {
    gettersProvinsi: ((state) => {
        return state.Provinsi
    }),
}

const actions = {
    actiontambahProvinsi({ dispatch }, payload) {
        //console.log('masuk38 crud store')
        return new Promise(async (resolve, reject) => {
            try {
                if (confirm("anda Yakin ?") == true) {
                    await db.collection("provinsi").doc(payload.idProv).set({
                        idProv: payload.idProv,
                        Provinsi: payload.Provinsi
                    });
                    dispatch("actiontampilprov")
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

    async actiontampilprov({ commit, state }, payload) {
        state.Provinsi = []
        return await db
            .collection("provinsi")
            .get()
            .then((doc) => {
                if (doc.size > 0) {
                    doc.forEach((doc2) => {
                        const data = _.assign({ id: doc2.id }, doc2.data()); // assign untuk gabungin 2 object
                        commit('tampilprovinsiMutation', data)
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
        state.Provinsi.splice(payload, 1)
    },
    updateProvinsiMutation(state, payload) {
        state.Provinsi = payload
    },
    tampilprovinsiMutation(state, payload) {
        state.Provinsi.push(payload)
    },
}

export default {
    namespaced: true,
    mutations,
    getters,
    state,
    actions,
}