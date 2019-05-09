const localWorksKey = 'localWorksKey'

export default{
    localWorksKey,

    install(Vue){
    
        Vue.prototype.getLocalItem = function(key){
            if (localStorage.getItem(key)) {
                try {
                  let item = JSON.parse(localStorage.getItem(key));
                  return item;
                } catch(e) {
                  localStorage.removeItem(key);
                  return null;
                }
            }
            return null;
        };
        Vue.prototype.setLocalItem = function(key,item){
            const parsed = JSON.stringify(item);
            localStorage.setItem(key, parsed);
        };
        


    },
     

}

