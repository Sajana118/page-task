import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)




// Get the stored state from local storage
const storedState = localStorage.getItem('vuex_state')
const initialState = storedState ? JSON.parse(storedState) : {}
const storedSelectedStoreId = localStorage.getItem('selectedStoreId')
const initialSelectedStoreId = storedSelectedStoreId ? JSON.parse(storedSelectedStoreId) : undefined

const store = new Vuex.Store({
    state: {
        user: null,
        formData: {},
        selectedStoreId: initialSelectedStoreId,
        paramStoreId: undefined,
        screenToShow: 'Main',
        pageTitle: '店舗選択',
        openSidebar: false,
        stores: [],
        selectedStore: {},
        loadingCounter: 0,
        ...initialState
    },
    mutations: {
        setUser (state, user) {
            state.user = user
        },
        setStores (state, stores) {
            state.stores = stores
        },
        setFormData (state, formData) {
            state.formData = formData
        },
        setScreen (state, screenName) {
            state.screenToShow = screenName
        },
        setPageTitle (state, pageTitle) {
            state.pageTitle = pageTitle
        },
        setOpenSidebar (state) {
            state.openSidebar = !state.openSidebar
        },
        setSelectedStore (state, store) {
            state.selectedStore = store
        },
        setSelectedStoreId (state, storeId) {
            if (state.paramStoreId) { state.selectedStoreId = state.paramStoreId } else { state.selectedStoreId = storeId }
            localStorage.setItem('selectedStoreId', storeId)
        },
        setParamStoreId (state, storeId) {
            state.paramStoreId = storeId
        },
        incrementLoadingCounter (state) {
            state.loadingCounter++
        },
        decrementLoadingCounter (state) {
            state.loadingCounter--
        },
        removeUser (state) {
            state.user = null
        },
        clearStore (state) {
            state.stores = []
        }
    },
    actions: {
        async fetchUserDetail ({ commit }) {
            try {
                const response = await this.$http.request('get', '/user-detail')
                const user = response.data
                commit('setUser', user) // Set user in Vuex store
            } catch (error) {
                console.error('Error fetching user details:', error)
            }
        },
        setScreen (context, screenName) {
            context.commit('setScreen', screenName)
            // Save state to local storage after mutation
            // localStorage.setItem('vuex_state', JSON.stringify(context.state))
        },
        setPageTitle (context, pageTitle) {
            context.commit('setPageTitle', pageTitle)
            // Save state to local storage after mutation
            // localStorage.setItem('vuex_state', JSON.stringify(context.state))
        },
        setOpenSidebar (context) {
            context.commit('setOpenSidebar')
        },
        removeUser (context) {
            context.commit('removeUser')
        },
        setStores (context, stores) {
            context.commit('setStores', stores)
        },
        setFormData(context, formData) {
            context.commit('setFormData', formData)
        },
        setSelectedStore (context, store) {
            context.commit('setSelectedStore', store)
            // localStorage.setItem('selectedStore', JSON.stringify(store))
        },
        clearStores (context) {
            context.commit('clearStore')
            context.commit('clearSelectedStore')
        }
    },
    getters: {
        currentUser: state => state.user,
        stores: state => state.stores,
        getAvailableStoresName: state => {
            return state.stores.map(store => ({
                id: store.id,
                name: store.name
            }))
        },
        selectedStore: state => {
            return state.selectedStore
        },
        screenToShow: state => state.screenToShow,
        pageTitle: state => state.pageTitle,
        openSidebar: state => state.openSidebar,
        owner: state => state.owner,
        selectedStoreId: state => state.selectedStoreId
    },
    strict: process.env.NODE_ENV !== 'production',
    plugins: [mutationLogger]
})

export default store