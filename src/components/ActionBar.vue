<template>
    <div>
        <el-button
            type="primary"
            v-for="action in actions"
            @click = "action.handler"
            :icon = "action.icon"
        >{{action.name}}</el-button>
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