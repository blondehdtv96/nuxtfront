const state = {
    slider3: [
        {
          title: 'Apartemen Citra Living',
          image: 'https://cdn.travelio.id/hotel/2f6aa-61bf36262eea0e25edc64312/DSCF2902_n.jpg',
          price: "Rp.3.000.000-,/Perbulan"
        },
        {
          title: 'Apartemen Putri Park View',
          image: 'https://cdn.travelio.id/hotel/35f39-62661ae4aa3e4d989cf593cb/DSC01677_n.jpg',
          price: "Rp.3.000.000-,/Perbulan"
        },
        {
          title: 'Apartemen Basura City',
          image: 'https://cdn.travelio.id/hotel/4d1d0-610be6c997210b442c9f2f6c/DSCF8744_n.jpg',
          price: "Rp.3.000.000-,/Perbulan"
        },
        {
          title: 'Apartemen Signature Park Grande',
          image: 'https://cdn.travelio.id/hotel/4fe0f-6332a051d720855bcba8d2c7/DSC05238_n.jpg',
          price: "Rp.3.000.000-,/Perbulan"
        },
        {
          title: 'Apartemen Grand Palace Kalibata ',
          image: 'https://cdn.travelio.id/hotel/ecf20-5fe1e44d1a25214ff4cf9b1b/DSC06677_n.jpg',
          price: "Rp.3.000.000-,/Perbulan"
        }
      ]
  }
  // getters
  const getters = {
  gettersslider3:(state)=>{
    return state.slider3
  },
  }
  
  // actions (simpan, list dll)
  const actions = {
    simpanAreaActions({commit},payload){
        return new Promise(async(resolve,reject)=>{
  
        })
    },
  }
  
  // mutations (mutasi jika terjadi perubahan)
  const mutations = {
    saveitemEditDataArea: (state, payload)=>{
      state.itemEditDataArea.push(payload)
  },
    saveitemDataArea: (state, payload)=>{
        state.itemDataArea.push(payload)
    },
    resetitemDataArea: (state)=>{
        state.itemDataArea=[]
    }
  
  }
  
  export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
  }