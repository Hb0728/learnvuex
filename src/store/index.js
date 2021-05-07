import Vue from 'vue'
import Vuex from 'vuex'
 
Vue.use(Vuex)

const store =new Vuex.Store({
    state:{
        count:0,
        man:[
            {name:'huangbinbin',age:25},
            {name:'huangyuanyuan',age:26},
            {name:'zhouqun',age:53},
            {name:'huangguanglin',age:60}
        ]
    },
    mutations:{
        add(state){
            this.state.count++
        },
        jian(state){
            this.state.count--
        }
    },
    actions:{

    },
    getters:{
        addd(state){
          return  state.man.filter(s=>s.age>25)
        },
        adddd(state){
            return age =>state.man.filter(s=>s.age>age)
            }
        }
    })
0
export default store