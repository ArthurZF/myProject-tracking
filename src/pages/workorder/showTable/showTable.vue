<template>
    <div class="table-outs">
        <el-select v-model="value" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
        </el-select>
    </div>
</template>
<script>
    export default {
        name: "showTable",
        data() {
            return {
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value: '黄金糕'
            }
        }
    }
</script>
<style lang="less" scoped>
    .table-outs {
        width: 100%;
        height: 500px;
        margin-top: 30px;
    }
</style>