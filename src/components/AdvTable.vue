<template>
<div class="adv-table-wrap">

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
    <div class="pagination-wrap">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="pageSizes"
        :page-size="pageSize"
        layout="total,sizes,prev,pager,next,jumper"
        :total="400"
      >
      </el-pagination>
    </div>
</div>
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
      currentPage:1
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
    actionColWidth: String,
    pageSizes:{
      type:Array,
      default(){
        return [20,50,100,150,200]
      }
    },
    pageSize:{
      type:Number,
      default:20
    }
  },
  computed:{
    tableData(){
      let newData = this.data
      return newData
    },
    curTableData(){
      return this.tableData
    }
  },
  methods:{
    handleSizeChange(val){
      console.log("每页 ${"+val+"} 条");
    },
    handleCurrentChange(currentPage){
      console.log("当前页 ${"+currentPage+"} 条");
    }
  }
}
</script>

<style scoped>
.actionBtn{
  margin: 0 5px;
}
.pagination-wrap{
  text-align: right;
  margin: 10px 0;
}
</style>
