
const state = {
    datadivisi: [
        {
            divisi: 'HRD',
        },
        {
            divisi: 'IT',
        },
        {
            divisi: 'Keuangan',
        },
        {
            divisi: 'Operasional',
        }
    ]
}

const getters = {
    gettersdatadivisi: ((state) => {
        return state.datadivisi
    }),
}

const actions = {
    actiontambahdata({ commit }, payload) {
        //console.log('masuk38 crud store')
        return new Promise(async (resolve, reject) => {
            try {
                if (confirm("anda Yakin ?") == true) {
                    commit('tambahdataMutation', payload)
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

    actionhapusdata({ commit, state }, payload) {
        return new Promise(async (resolve, reject) => {
            console.log('line 58 jalan')
            if (confirm("anda yakin") == true) {
                console.log('line61')
                const datahapus = state.datadivisi;
                datahapus.splice(payload, 1)
                commit('hapusdataMutation', datahapus)
                console.log(state.datadivisi.length)
                resolve()
            } else {
                reject()
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
                    const dataedit = state.datadivisi
                    console.log('tampil line 88')
                    const updatedata = Object.assign(dataedit[payload.index], payload.dataedit)
                    console.log(dataedit)
                    //console.log(dataedit)
                    commit('updatelistMutation', dataedit)
                }
                resolve(1)
            } catch (HandleError) {
                reject('tenang aja')
            }
        })
    },
}

const mutations = {

    tambahdataMutation(state, payload) {
        state.datadivisi.push(payload)
    },

    hapusdataMutation(state, payload) {
        state.datadivisi = payload
    },
    
    updatelistMutation(state, payload){
        state.datadivisi = payload
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}