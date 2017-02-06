<template>
   <el-table
      class="adv-table"
      :data="curTableData"
      border
      fit
      stripe
      style="width: 100%">
      <slot></slot>
      <el-table-column
        label="操作"
        prop= "innerRowActions"
        :min-width="actionColWidth"
        inline-template
      >
        <div class="action-list">
          <span v-for="action in rowActionsDef">
            <el-button
              class="actionBtn"
              :type="action.type"
              size="small"
              @click="action.handler(row)"
            >
              {{action.tip}}
            </el-button>
          </span>
        </div>
      </el-table-column>
    </el-table>
</template>

<script>
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)

export default {
  name: 'AdvTable',
  data () {
    return {

    }
  },
  props:{
    data: {
      type: Array,
      default() {
        return []
      }
    },
    rowActionsDef: {
      type: Array,
      default() {
        return []
      }
    },
    actionColWidth: String
  },
  computed:{
    tableData(){
      let newData = this.data
      return newData
    },
    curTableData(){
      return this.tableData
    }
  }
}
</script>

<style scoped>
.actionBtn{
  margin: 0 5px;
}
</style>
