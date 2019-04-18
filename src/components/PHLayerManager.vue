<template>
    <draggable v-model="colors" @update="datadragEnd" :options = "{animation:500}">
            <transition-group>
                <div v-for="element in parameters" :key="element" class = "drag-item">
                    {{element.title}}
                </div>
            </transition-group>
     </draggable>

</template>
<script>
import draggable from 'vuedraggable'
    export default{
        // props:['parameters'],
        data(){
            return{
                msg:"这是测试组件",
                parameters: [
                    'red','yellow'
                ],
                startArr:[],
                endArr:[],
                count:0,
            }
        },
        components: {
            draggable,
        },
        methods:{
           

            getdata () {
                // evt
                // console.log(evt.draggedContext.element.text)
            },
            datadragEnd (evt) {
                // alert(this.parameters);
                // let parameter = {
                //     oldIndex:evt.oldIndex,
                //     newIndex:evt.newIndex
                // }

                // this.$emit("layerChangeCallBack",parameter);

                let index1 = evt.oldIndex;
                let index2 = evt.newIndex;
                this.parameters[index1] = this.parameters.splice(index2, 1, this.parameters[index1])[0];
                this.$emit("layerChangeCallBack",this.parameters);
                // evt.preventDefault();

                
        

                
 
                
                

                // console.log('拖动前的索引 :' + evt.oldIndex)
                // console.log('拖动后的索引 :' + evt.newIndex)
                // console.log(this.colors);
            }
        },
        mounted(){
            // 为了防止火狐浏览器拖拽的时候以新标签打开，此代码真实有效
            document.body.ondrop = function (event) {
                event.preventDefault();
                event.stopPropagation();
            }
        }
    }

</script>
<style scoped>
.test{
        border:1px solid #ccc;
    }
    .drag-item{
        width: 100%;
        height: 50px;
        line-height: 50px;
        margin: auto;
        position: relative;
        background: #ddd;
        margin-top:20px;
    }
    .ghostClass{
        opacity: 1;
    }
    .bottom{
        width: 100%;
        height: 50px;
        position: relative;
        background: blue;
        top:2px;
        left: 2px;
        transition: all .5s linear;
    }
</style>

