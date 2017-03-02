<template>
    <div>
        <el-button
            type="primary"
            v-for="action in actions"
            @click = "action.handler"
            :icon = "action.icon"
        ><span class="icon_html" v-html="action.icon_html"></span>{{action.name}}</el-button>
    </div>
</template>
<script >
    export default {
        props:{
            actions:{
                type:Array,
                default(){
                    return []
                }
            }
        }
    }
</script>
<style scoped>
.icon_html{
  margin: 0 5px 0 0;
}
</style>
