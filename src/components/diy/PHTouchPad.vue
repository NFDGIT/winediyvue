<template>
   <div class="touchView" >
   </div>    
</template>
<script>

import AlloyFinger from 'alloyfinger'

export default {

    data(){
        return {
            parameter:{
                deltaX:0,
                deltaY:0,
                angle:0,
                scale:1
            }

        }
    },
    methods:{
        touchStart(){

        }
    },
    mounted() {
        var _this = this
      
    

        let touchview = document.getElementsByClassName('touchView')[0];


        new AlloyFinger(touchview,{
            touchStart:function(evt){
                // alert('touch');
                // _this.touchStart();
                // _this.$emit("touchCallBack",'');
                // alert('helo swift');
                _this.$emit("touchStartCallBack",'');
                evt.preventDefault();
 
            },
            touchEnd:function(evt){
         
                _this.$emit("touchEndCallBack",'');
                evt.preventDefault();
            },
            // longTap: function () {
            //     // alert('long tap')
            // },
            touchMove:function (evt) {
    
                _this.parameter.deltaX = evt.deltaX;
                _this.parameter.deltaY = evt.deltaY;
                _this.$emit("touchMoveCallBack",'');
                evt.preventDefault();    
            },
    
            pinch: function (evt) {
              
                _this.parameter.scale = evt.scale;
                // alert(evt.scale);
                _this.$emit("touchMoveCallBack",'');
                // _this.parameter.scale = 1
    
            },
            rotate: function (evt) {
                _this.parameter.angle = evt.angle;
                _this.$emit("touchMoveCallBack",'');
                _this.parameter.angle = 0;

           
            },
 
            
        });

    }

}
</script>
<style scoped>
    .touchView{
        width: 300px;
        height: 300px;
        background-color: aliceblue;
    }
</style>

