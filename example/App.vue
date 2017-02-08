<template>
    <div id="app">
        <img src="./assets/logo.png">
        <AdvTable
            :data="tableData"
            :row-actions-def="rowActionsDef"
            :pageSizes="[10,20,30]"
        >
            <el-table-column label="序号" prop="sn"></el-table-column>
            <el-table-column label="工厂" prop="fname"></el-table-column>
            <el-table-column label="日期" prop="factory_date"></el-table-column>
        </AdvTable>
    </div>
</template>
<script>
// // dev
import AdvTable from '../src/components/AdvTable'
// // test
// import '../dist/adv-table.css'
// import AdvTable from '../dist/adv-table.js'

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
            tableData: [],
            rowActionsDef: this.getRowActionsDef(),

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
        }
    }
}
</script>
<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
