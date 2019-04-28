<template>
<div>
   <input type="file" name="" id="" @change="fileChange($event.target.files)" > 
</div>    
</template>
<script>
export default {
    methods:{
        fileChange(files){
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


    }
}
</script>
<style scoped>

</style>
