// The code shown in this store is purely example code and is ok to be deleted.
import axios from 'axios'


const state = {
    gitHubStars: 0
}

const getters = {
    gitHubStars: (state) => (state.gitHubStars),
}

const mutations = {
    setGitHubStars: (state, gitHubStars) => (state.gitHubStars = gitHubStars),
}

const actions = {
    getGitHubStars({ commit }) {
        return new Promise((resolve, reject) => {
            axios.get('https://api.github.com/repos/anthonybudd/vipfs')
                .then(({ data }) => {
                    commit('setGitHubStars', data.stargazers_count)
                    resolve(data.stargazers_count)
                })
                .catch(err => reject(err))
        })
    },
}


export default {
    state,
    getters,
    mutations,
    actions,
}
