import Vue from 'vue'
import Vuex from 'vuex'
import request from '../tools/request'
import xmlJson from "xml-js";
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        days: [],
        temps:[],
        google: []
    },
    getters:{

    },
    mutations: {
        daysMutation(days){
            this.days= days
        }
    },
    actions:{
        getData(){
            const baseUrl = 'http://localhost:8181/'
            // let apiResponse = []
            const google = request.get(`${baseUrl}google`).then(response => this.googleTemps= response.data)
            const bing = request.get(`${baseUrl}bing`).then(response => this.days=converter(response.data))

            const converter = (response) => {

                const result = xmlJson.xml2json(response, {compact: true, spaces: 0});
                console.log('result')
                console.log(JSON.parse(result))
                return JSON.parse(result);
            }
            console.log(google)
            console.log(bing)
        }
    }
})