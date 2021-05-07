<template>
  <div>
    <a-card :bordered="false" :bodyStyle="tstyle">
    </a-card>
    <a-card :bordered="false">
      <s-table
        ref="table"
        :columns="columns"
        :data="loadData"
        :alert="true"
        :rowKey="(record) => record.id"
        :rowSelection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
      >
        <template class="table-operator" slot="operator" v-if="hasPerm('sysTitleCode:add')" >
          <a-button type="primary" v-if="hasPerm('sysTitleCode:add')" icon="plus" @click="$refs.addForm.add()">添加检测域名</a-button>
        </template>
        <span slot="action" slot-scope="text, record">
          <a v-if="hasPerm('sysTitleCode:edit')" @click="$refs.editForm.edit(record)">编辑</a>
          <a-divider type="vertical" v-if="hasPerm('sysTitleCode:edit') & hasPerm('sysTitleCode:delete')"/>
          <a-popconfirm v-if="hasPerm('sysTitleCode:delete')" placement="topRight" title="确认删除？" @confirm="() => sysTitleCodeDelete(record)">
            <a>删除</a>
          </a-popconfirm>
        </span>
      </s-table>
      <add-form ref="addForm" @ok="handleOk" />
      <edit-form ref="editForm" @ok="handleOk" />
    </a-card>
  </div>
</template>
<script>
  import { STable } from '@/components'
  import { sysTitleCodePage, sysTitleCodeDelete } from '@/api/modular/main/systitlecode/sysTitleCodeManage'
  import addForm from './addForm.vue'
  import editForm from './editForm.vue'
  export default {
    components: {
      STable,
      addForm,
      editForm
    },
    data () {
      return {
        // 查询参数
        queryParam: {},
        // 表头
        columns: [
          {
            title: '序号',
            align: 'center',
            dataIndex: 'id'
          },
          {
            title: '需要查询的域名',
            align: 'center',
            dataIndex: 'webUrl'
          },
          {
            title: 'HTTP状态',
            align: 'center',
            dataIndex: 'webCode'
          },
          {
            title: '网址标题',
            align: 'center',
            dataIndex: 'webTitle'
          }
        ],
        tstyle: { 'padding-bottom': '0px', 'margin-bottom': '10px' },
        // 加载数据方法 必须为 Promise 对象
        loadData: parameter => {
          return sysTitleCodePage(Object.assign(parameter, this.queryParam)).then((res) => {
            return res.data
          })
        },
        selectedRowKeys: [],
        selectedRows: []
      }
    },
    created () {
      if (this.hasPerm('sysTitleCode:edit') || this.hasPerm('sysTitleCode:delete')) {
        this.columns.push({
          title: '操作',
          width: '150px',
          dataIndex: 'action',
          scopedSlots: { customRender: 'action' }
        })
      }
    },
    methods: {
      sysTitleCodeDelete (record) {
        sysTitleCodeDelete(record).then((res) => {
          if (res.success) {
            this.$message.success('删除成功')
            this.$refs.table.refresh()
          } else {
            this.$message.error('删除失败') // + res.message
          }
        })
      },
      handleOk () {
        this.$refs.table.refresh()
      },
      onSelectChange (selectedRowKeys, selectedRows) {
        this.selectedRowKeys = selectedRowKeys
        this.selectedRows = selectedRows
      }
    }
  }
</script>
<style lang="less">
  .table-operator {
    margin-bottom: 18px;
  }
  button {
    margin-right: 8px;
  }
</style>
