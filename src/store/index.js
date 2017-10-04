import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
	state: {
		mydata:   '',
        mybooked: ''
	},
	mutations: {
		changeMydata(state,n){
			state.mydata = n;
		},
        changeMybooked(state,n){
            state.mybooked = n;
        }
	},
	actions: {
		getData({commit}){
			
			var querystring = require('querystring');
        	var httpRequest;
        	var bodyString = {
        	    useremail: localStorage.user
        	};
        	var postStr = querystring.stringify(bodyString);

        	httpRequest = new XMLHttpRequest();
        	if(!httpRequest) {
        	    alert('这里有一点错误！');
        	    return false;
        	}
        	const that = this;
  			
        	httpRequest.onreadystatechange = function(){
        	    if(httpRequest.readyState === XMLHttpRequest.DONE){
        	        if(httpRequest.status === 200) {
        	            //that.postData = JSON.parse(httpRequest.responseText);
        	            commit('changeMydata',JSON.parse(httpRequest.responseText));
        	        }else{
        	            alert('呀！网络错误！');
        	        }
        	    }
        	};

        	httpRequest.open('POST','https://www.ryansky.cn:3333/myself');
        	httpRequest.send(postStr);
		}, 

        getMybooked({commit}){
            var querystring = require('querystring');
            var httpRequest;
            var bodyString = {
                useremail: localStorage.user
            };
            var postStr = querystring.stringify(bodyString);

            httpRequest = new XMLHttpRequest();
            if(!httpRequest) {
                alert('这里有一点错误！');
                return false;
            }
            const that = this;
            
            httpRequest.onreadystatechange = function(){
                if(httpRequest.readyState === XMLHttpRequest.DONE){
                    if(httpRequest.status === 200) {
                        //that.postData = JSON.parse(httpRequest.responseText);
                        commit('changeMybooked',JSON.parse(httpRequest.responseText));
                    }else{
                        alert('呀！网络错误！');
                    }
                }
            };

            httpRequest.open('POST','https://www.ryansky.cn:3333/mybooked');
            httpRequest.send(postStr);
        }
	}

})