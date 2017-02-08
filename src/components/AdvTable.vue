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
        :page-size="internalPageSize"
        layout="total,sizes,prev,pager,next,jumper"
        :total="total"
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
      currentPage:1,
      internalPageSize:this.pageSizes[0]
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
    actionColWidth:{
      type:String,
      default(){
        return ""
      }
    },
    pageSizes:{
      type:Array,
      default(){
        return [10,20,50]
      }
    }
  },
  computed:{
    tableData(){
      let newData = this.data
      return newData
    },
    curTableData(){
      let from = this.internalPageSize*(this.currentPage-1)
      let to = from + this.internalPageSize
      return this.tableData.slice(from ,to)
    },
    total(){
      return this.tableData.length
    }
  },
  methods:{
    handleSizeChange(size){
      this.internalPageSize = size
    },
    handleCurrentChange(currentPage){
      this.currentPage = currentPage
    }
  },
  watch:{

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
