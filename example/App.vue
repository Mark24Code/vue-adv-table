<template>
    <div id="app">
        <AdvTable
            :data="tableData"
            :rowActionsDef="rowActionsDef"
            :pageSizes="[10,20,30]"
            :selectModel="true"
            :toolBarDef="toolBarDef"
        >
            <el-table-column label="序号" prop="sn" sortable="custom" ></el-table-column>
            <el-table-column label="工厂" prop="fname" sortable="custom" ></el-table-column>
            <el-table-column label="日期" prop="factory_date" sortable="custom"></el-table-column>
        </AdvTable>
    </div>
</template>
<script>
// // dev
// import AdvTable from '../src/components/AdvTable'
// test
import '../dist/adv-table.css'
import AdvTable from '../dist/adv-table.js'

import mockData from './mock.js'

export default {
    name: 'app',
    components: {
        AdvTable
    },
    created(){
        for(var i=0;i<100;i++){
            this.tableData = this.tableData.concat(mockData.list)
        }
    },
    data() {
        return {
            multiSelect:[],
            tableData: [],
            rowActionsDef: this.getRowActionsDef(),
            toolBarDef:this.getToolBarDef()

        }
    },
    methods: {
        getRowActionsDef() {
            let self = this
            return [{
                type: 'primary',
                tip: '修改',
                handler(row) {
                    console.log('修改 clicked', row, self)
                    self.$message('修改 clicked')
                }

            }, {
                type: 'primary',
                tip: '测试',
                handler(row) {
                    console.log('测试 click', row, self)
                    self.$message('测试 click')
                }

            }]
        },
        getToolBarDef(){
            let self = this
            let actions = [{
                name:"新建",
                icon:"plus",
                // icon_html:'<i class="fa fa-id-card-o" aria-hidden="true"></i>',
                handler(){
                    self.$message("新建clicked")
                }
            },{
                name:"删除",
                icon:"delete",
                handler(){
                    self.$message("删除clicked")
                }
            },{
                name:"暂停",
                icon:"time",
                handler(){
                    self.$message("暂停clicked")
                }
            }]

            let multiSelectChange = (multipleSelection)=>{
                console.log(multipleSelection)
                self.multiSelect=multipleSelection
            }

            return {
                actions:{
                    width:8,
                    def:actions
                },
                search:{
                    width:4
                },
                multiSelect:{
                    def:multiSelectChange
                }
            }
        }
    }
}
</script>
<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
