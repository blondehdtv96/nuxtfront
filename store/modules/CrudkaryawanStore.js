const state = {
  datakaryawan: [
    {
      nama: 'abdul gopur',
      umur: '20',
      jabatan: 'Staff',
      divisi: 'HRD',
      idProv: 1,
      idKota: 1,
      idKecamatan: 1,
      Provinsi: "Jawa Barat",
      Kota: "Bandung",
      Kecamatan: "Soreang",
    },
    // {
    //   nama: 'samsul gas',
    //   umur: '21',
    //   jabatan: 'Staff',
    //   divisi: 'HRD',
    //   idProv: 2,
    //   idKota: 1,
    //   idKecamatan: 1,
    //   Provinsi: "Jawa Tengah",
    //   Kota: "Sragen",
    //   Kecamatan: "Desa Kidul",
    // },
    // {
    //   nama: 'nurdin koyor',
    //   umur: '22',
    //   jabatan: 'Staff',
    //   divisi: 'IT',
    //   idProv: 3,
    //   idKota: 1,
    //   idKecamatan: 1,
    //   Provinsi: "Jawa Timur",
    //   Kota: "Pacitan",
    //   Kecamatan: "Desa Rejo",
    // },
    // {
    //   nama: 'budi semangka',
    //   umur: '23',
    //   jabatan: 'Manager',
    //   divisi: 'Operasional',
    //   idProv: 4,
    //   idKota: 1,
    //   idKecamatan: 1,
    //   Provinsi: "DKI Jakarta",
    //   Kota: "Jakarta Selatan",
    //   Kecamatan: "Tambora",
    // },
    
],

}

const getters = {
  gettersdatakaryawan: ((state) => {
    return state.datakaryawan
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
          const dataedit = state.datakaryawan;
          console.log('tampil line 88')
          const updatedata = Object.assign(dataedit[payload.index], payload.dataedit)
          console.log(updatedata)
          //console.log(dataedit)
          commit('updatelistMutation', dataedit)
        }
        resolve(1)
      } catch (HandleError) {
        reject('tenang aja')
      }
    })
  },


  //Action Jabatan//
  actiontambahdatajabatan({ commit }, payload) {
    //console.log('masuk38 crud store')
    return new Promise(async (resolve, reject) => {
      try {
        if (confirm("anda Yakin ?") == true) {
          commit('tambahdatajabatanMutation', payload)
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

  actionhapusdatajabatan({ commit, state }, payload) {
    return new Promise(async (resolve, reject) => {
      console.log('line 58 jalan')
      if (confirm("anda yakin") == true) {
        console.log('line61')
        const datahapus = state.datajabatan;
        datahapus.splice(payload, 1)
        commit('hapusdatajabatanMutation', datahapus)
        console.log(state.datajabatan.length)
        resolve()
      } else {
        reject()
      }
    })
  },

  actionupdatedatajabatan({ commit, state }, payload) {
    console.log('tampil line 81')
    return new Promise(async (resolve, reject) => {
      console.log('line 83 oke')
      try {
        if (confirm("mau update data ?") == true) {
          console.log('tampil line 85')
          const dataedit = state.datajabatan
          console.log('tampil line 88')
          const updatedata = Object.assign(dataedit[payload.index], payload.dataedit)
          console.log(dataedit)
          //console.log(dataedit)
          commit('updatelistjabatanMutation', dataedit)
        }
        resolve(1)
      } catch (HandleError) {
        reject('tenang aja')
      }
    })
  },

  //action divisi
  actiontambahdatadivisi({ commit }, payload) {
    //console.log('masuk38 crud store')
    return new Promise(async (resolve, reject) => {
      try {
        if (confirm("anda Yakin ?") == true) {
          commit('tambahdatadivisiMutation', payload)
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

  actionhapusdatadivisi({ commit, state }, payload) {
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

  actionupdatedatadivisi({ commit, state }, payload) {
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

//end action

const mutations = {
  //Mutation Karyawan
  tambahdataMutation(state, payload) {
    state.datakaryawan.push(payload)
  },

  hapusProvinsiMutation(state, payload) {
    state.datakaryawan.splice (payload, 1)
  },

  updatelistMutation(state, payload) {
    state.datakaryawan = payload
  },

  //end mutation


}
export default {
  namespaced: true,
  actions,
  mutations,
  getters,
  state,
}
