import { auth } from '@/services/fireinit.js'
import _ from 'lodash'

export default (context) => {
    const { store } = context

    return new Promise((resolve) => {
        auth.onAuthStateChanged(async(user) => {
            if (user != null) {
                store.commit('setUser', user)

                // var idtoken = auth.currentUser.getIdToken();
               await auth.currentUser.getIdTokenResult()
                    .then((idTokenResult) => {
                        // Confirm the user is an Admin.
                        const role = store.state.datarole
                        if (_.includes(role,idTokenResult.claims.role)) {
                            store.commit('setRole', idTokenResult.claims.role)
                            store.commit('setIdtoken', idTokenResult['token'])
                            store.commit('setName', idTokenResult.claims.name)
                            store.commit('setIdStore', idTokenResult.claims.store)
                            store.commit('setPrivilege', idTokenResult.claims.privilege)
                        }else{

                        }
                    })
          

            }

            resolve()
        })
    })
}
