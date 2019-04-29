<template>
<div style="position:absolute;width:100%;height:100%;overflow:hidden;left:0px;top:0px;">
   <input class="inputer" ref="inputer" type="file" name="" id="" @change="fileChange" > 
</div>    
</template>
<script>
export default {
    methods:{
        fileChange(){
            let inputDOM = this.$refs.inputer;
            // 通过DOM取文件数据
            let files = inputDOM.files;
        
            // 
            let file = files[0];
            var url = null;  
            // let name = file.name;

            if (window.createObjcectURL != undefined) {  
                url = window.createOjcectURL(file);  
            } else if (window.URL != undefined) {  
                url = window.URL.createObjectURL(file);  
            } else if (window.webkitURL != undefined) {  
                url = window.webkitURL.createObjectURL(file);  
            }
            let  fileUrls = [url];

            this.$emit('selectFileCallBack',fileUrls);

        },
        getUrls(files){
            var  fileUrls = [];
             
            for (var i ; i < files.length ; i ++)
            {
                let file = files[0];
                var url = null;  
                // let name = file.name;

                if (window.createObjcectURL != undefined) {  
                    url = window.createOjcectURL(file);  
                } else if (window.URL != undefined) {  
                    url = window.URL.createObjectURL(file);  
                } else if (window.webkitURL != undefined) {  
                    url = window.webkitURL.createObjectURL(file);  
                }
                fileUrls.push(url);
            }
 

        }


    }
}
</script>
<style scoped>
.inputer{
    /* display: none; */

    opacity: 0.0;
    position: absolute;
    width: 100%;
    height:100%;
}
</style>
