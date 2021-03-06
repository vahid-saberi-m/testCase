import Vue from 'vue'
import Vuex from 'vuex'
import request from '../tools/request'
import xmlJson from "xml-js";
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        days: [],
        temps:[],
        google: [],
        location:''
    },
    getters:{

    },
    mutations: {
        daysMutation(state,payload){
            const bingDays = payload['weather-service'].day
          bingDays.forEach((item)=> {state.days.push({
              dayName: item['day-name']._text,
              temp: parseInt(item['max-temp']._text),
              status:item.status._text,
          })
              const location = item['city-name']
              if(location){
                  state.location= location._text
              }
          })
        },
        avgTempCalc(state,payload){
            payload.forEach((item,index)=>{
               const prevTemp=state.days[index].temp
                const avgTemp= (prevTemp+parseInt(item.max))/2
                state.days[index].temp= avgTemp
            })
        }
    },
    actions:{
        getData(){
            const baseUrl = 'http://localhost:8181/'
             request.get(`${baseUrl}bing`).then(response => this.commit('daysMutation',converter(response.data)))
             request.get(`${baseUrl}google`).then(response => this.commit('avgTempCalc', response.data['google-services']))

            const converter = (response) => {

                const result = xmlJson.xml2json(response, {compact: true, spaces: 0});
                return JSON.parse(result);
            }

        }
    }
})