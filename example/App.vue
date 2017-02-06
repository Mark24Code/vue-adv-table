<template>
    <div id="app">
        <img src="./assets/logo.png">
        <AdvTable :data='tableData' :row-actions-def="rowActionsDef">
            <el-table-column label="姓名" prop="name"></el-table-column>
            <el-table-column label="日期" prop="date"></el-table-column>
            <el-table-column label="地址" prop="address"></el-table-column>
        </AdvTable>
    </div>
</template>
<script>
// import AdvTable from '../src/components/AdvTable'
import '../dist/adv-table.css'
import AdvTable from '../dist/adv-table.js'
export default {
    name: 'app',
    components: {
        AdvTable
    },
    data() {
        return {
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }],
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
