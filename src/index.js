import 'vue-github-buttons/dist/vue-github-buttons.css'
import VueGitHubButtons from 'vue-github-buttons'
import VueVideoPlayer from 'vue-video-player'
import Notifications from 'vue-notification'
import 'video.js/dist/video-js.css'
import VueRouter from 'vue-router'
import VueMoment from 'vue-moment'
import Vuex from 'vuex'
import Vue from 'vue'

import routes from './routes.js'
import store from './store.js'

const ETHEREUM_ACCOUNT = '9a3ff2891d114ef8ed3d3c46543afdc7b8a57609'

Vue.use(VueGitHubButtons)
Vue.use(VueVideoPlayer)
Vue.use(Notifications)
Vue.use(VueRouter)
Vue.use(VueMoment)
Vue.use(Vuex)

new Vue({
    el: '#app',

    store: new Vuex.Store(store),

    router: new VueRouter({ routes }),

    mounted() {
        console.warn('With Great Power Comes With Great Responsibility.')
    },

    methods: {
        onClickDonate() {
            this.createRequestTransaction(0.037)
                .then(() => this.$notify('Thank You!!'))
                .catch(err =>
                    this.$notify({
                        title: err.message || 'Error',
                        type: 'error'
                    })
                )
        },

        /**
         * createRequestTransaction(value, data, gas, gasPrice)
         *
         * Prompts the user with MetaMask to send ethereum to the account set in the constant ETHEREUM_ACCOUNT (line 22). Use the method this.$root.createRequestTransaction() in your components to charge a user.
         *
         * Example Code:
         * this.$root.createRequestTransaction(0.037)
         * .then(result => console.log(result)) // Transaction successful
         * .catch(err => console.error(err)) // Transaction failed
         *
         * ** This is experimental/example code this may have bugs and may be removed in future versions.
         *
         * @param {Number|String} value - The amount of ether to request. When a number is provided this will be converted into a string that is it's value in Wei hex-encoded. Otherwise a string (hex-encoded Wei value) can directly be provided to this argument.
         * @param {String} data - Optional. Send data with the transaction.
         * @param {String} gas - Optional. Set the amount of gas.
         * @param {String} gasPrice - Optional. Set the amount of gas.
         * @returns {Promise}
         */
        createRequestTransaction(value, data, gas, gasPrice) {
            return new Promise((resolve, reject) => {
                if (typeof ethereum === 'undefined') {
                    console.warn('window.ethereum = ', typeof window.ethereum)
                    return reject(Error('window.ethereum is undefined.'))
                }

                if (typeof value === 'number') {
                    if (typeof web3 !== 'object') {
                        return reject(Error('Web3 is not enabled, cannot convert number to hex-encoded value'))
                    }
                    value = web3.toHex(web3.toWei(value.toString(), 'ether')) // Thanks u/cav_
                }

                ethereum
                    .enable()
                    .then(accounts =>
                        ethereum
                            .send('eth_sendTransaction', [
                                {
                                    from: accounts[0],
                                    ETHEREUM_ACCOUNT,
                                    value,
                                    data,
                                    gas,
                                    gasPrice
                                }
                            ])
                            .then(result => {
                                console.log(result)
                                return resolve(result)
                            })
                            .catch(err => reject(err))
                    )
                    .catch(err => reject(err))
            })
        }
    }
})
