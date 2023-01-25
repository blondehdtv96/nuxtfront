import Vuex from 'vuex'
import _, { reject } from 'lodash'
import RekomendasiStore from './modules/RekomendasiStore'
import RentaldealStore from './modules/RentaldealStore'
import CrudkaryawanStore from './modules/crudkaryawanStore'
import CrudjabatanStore from './modules/crudjabatanStore'
import CruddivisiStore from './modules/CruddivisiStore'
import ProvinsiStore from './modules/ProvinsiStore'
import KotaStore from './modules/KotaStore'
import KecamatanStore from './modules/KecamatanStore'


const createStore = () => {
    return new Vuex.Store({
        modules: {
            RekomendasiStore,
            RentaldealStore,
            CrudkaryawanStore,
            CrudjabatanStore,
            CruddivisiStore,
            ProvinsiStore,
            KotaStore,
            KecamatanStore,

        },
        state: () => ({
            
        }),

    })
}

export default createStore