import Vuex from 'vuex'
import _, { reject } from 'lodash'
import ApartemenStore from './modules/ApartemenStore'
import RekomendasiStore from './modules/RekomendasiStore'
import RentaldealStore from './modules/RentaldealStore'
import CrudkaryawanStore from './modules/crudkaryawanStore'
import CrudjabatanStore from './modules/crudjabatanStore'
import CruddivisiStore from './modules/CruddivisiStore'

const createStore = () => {
    return new Vuex.Store({
        modules: {
            ApartemenStore,
            RekomendasiStore,
            RentaldealStore,
            CrudkaryawanStore,
            CrudjabatanStore,
            CruddivisiStore,

        },
        state: () => ({
            
        }),

    })
}

export default createStore