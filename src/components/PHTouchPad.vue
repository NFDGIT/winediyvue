<template>
    <div class="touchView" >
        <!-- <PHDiv :text = "angle"></PHDiv> -->
        <div>
         <!-- tranlateX:{{ parameter.deltaX }}  tranlateY: {{ parameter.deltaY }} <br>
         angle:{{ parameter.angle }}<br>
         scale: {{ parameter.scale }} -->
         </div>


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

