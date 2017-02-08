<template>
<div class="adv-table-wrap">
  <el-row class="tool-bar">
    <el-col
      class="action-btn-col"
      :span="toolBarDef.actions.width"
    >
      <ActionBar
        :actions="toolBarDef.actions.def"
      ></ActionBar>
    </el-col>
    <el-col
      class="search-col"
      v-if="toolBarDef.search"
      :span="toolBarDef.search.width"
      :offset="toolBarDef.search.offset"
    >
       <el-input
          icon="search"
          v-model="searchKey"
      ></el-input>
    </el-col>
  </el-row>
   <el-table
      class="adv-table"
      border
      fit
      stripe
      style="width: 100%"
      :data="curTableData"
      @sort-change="handleSort"
      :default-sort = "defaultSort"
      @selection-change="handleSelectionChange"
  >
      <el-table-column
        v-if="selectModel"
        type="selection"
        width="55">
      </el-table-column>

      <slot></slot>

      <el-table-column
        label="操作"
        prop= "innerRowActions"
        :min-width="actionColWidth"
        inline-template
        v-if="actionModel"
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

import ActionBar from './ActionBar'

export default {
  name: 'AdvTable',
  data () {
    return {
      currentPage:1,
      internalPageSize:this.pageSizes[0],
      sortObj:{},
      multipleSelection:[],
      actionModel:false,
      searchKey:""
    }
  },
  components:{
    ActionBar
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
    },
    defaultSort:{
      type:Object,
      default(){
        return {prop: null, order: null}//:defaultSort="{prop: 'sn', order: 'ascending'}"
      }
    },
    selectModel:{
      type:Boolean,
      default(){
        return false
      }
    },
    toolBarDef:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  computed:{
    tableData(){
      let newData = this.data

      //search filter
      this.filters.forEach((filter)=>{
        if(!filter.value){
          return true
        }

        if(filter.property){

        }else{
          //fuzzy search
          newData = newData.filter(el=>{
            return Object.keys(el).some((key)=>{
              return String(el[key]).indexOf(filter.value)>-1
            })
          })
        }
      })

      //sort data
      if(this.sortObj.order){
        let order = this.sortObj.order
        let prop = this.sortObj.prop
        let isDescending = !!(order === 'descending')
        newData.sort(function(a,b){
          if(a[prop]>b[prop]){
            return 1
          }else if(a[prop] < b[prop]){
            return -1
          }else{
            return 0
          }
        })
        if(isDescending){
          newData.reverse()
        }

      }
      return newData
    },
    curTableData(){
      let from = this.internalPageSize*(this.currentPage-1)
      let to = from + this.internalPageSize
      return this.tableData.slice(from ,to)
    },
    total(){
      return this.tableData.length
    },
    filters(){
      let filters = [{
        value:this.searchKey
      }]

      let prop = this.toolBarDef.filters && this.toolBarDef.filters.prop
      if(prop){

      }
      return filters
    }
  },
  methods:{
    handleSizeChange(size){
      this.internalPageSize = size
    },
    handleCurrentChange(currentPage){
      this.currentPage = currentPage
    },
    handleSort(sortObj){
      this.sortObj = sortObj
    },
    handleSelectionChange(multiSelect){
       this.multipleSelection = multiSelect;
       console.log(this.multipleSelection)
    }
  },
  watch:{
    rowActionsDef:{
      immediate:true,
      handler(val){
        let self = this
        if(val.length>0){
          self.actionModel = true
        }else{
          self.actionModel = false
        }
      }
    }
  }
}
</script>

<style scoped>
.tool-bar{
  margin: 10px 0;
}
.actionBtn{
  margin: 0 5px;
}
.pagination-wrap{
  text-align: right;
  margin: 10px 0;
}
.action-btn-col{
  text-align: left;
}
</style>
