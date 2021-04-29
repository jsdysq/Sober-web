<template>
  <a-modal
    title="新增任务列表
"
    :width="900"
    :visible="visible"
    :confirmLoading="confirmLoading"
    @ok="handleSubmit"
    @cancel="handleCancel"
  >
    <a-spin :spinning="confirmLoading">
      <a-form :form="form">
        <a-form-item
          label="任务名称"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          has-feedback
        >
          <a-input placeholder="请输入任务名称" v-decorator="['taskName', {rules: [{required: true, message: '请输入任务名称！'}]}]" />
        </a-form-item>
        <a-form-item
          label="端口扫描类型"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
        >
          <a-select style="width: 100%" placeholder="请选择端口扫描类型">
            <a-select-option v-for="(item,index) in portScanTypeData" :key="index" :value="item.code">{{ item.name }}</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item
          label="端口扫描"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
        >
          <a-radio-group placeholder="请选择端口扫描" v-decorator="['portScan']" >
            <a-radio v-for="(item,index) in portScanData" :key="index" :value="item.code">{{ item.name }}</a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item
          label="域名扫描"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
        >
          <a-radio-group placeholder="请选择域名扫描" v-decorator="['domainScan']" >
            <a-radio v-for="(item,index) in domainScanData" :key="index" :value="item.code">{{ item.name }}</a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item
          label="360扫描"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
        >
          <a-radio-group placeholder="请选择360扫描" v-decorator="['threesixScan']" >
            <a-radio v-for="(item,index) in threesixScanData" :key="index" :value="item.code">{{ item.name }}</a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item
          label="fofa扫描"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
        >
          <a-radio-group placeholder="请选择fofa扫描" v-decorator="['fofaScan']" >
            <a-radio v-for="(item,index) in fofaScanData" :key="index" :value="item.code">{{ item.name }}</a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item
          label="文件扫描"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
        >
          <a-radio-group placeholder="请选择文件扫描" v-decorator="['fileScan']" >
            <a-radio v-for="(item,index) in fileScanData" :key="index" :value="item.code">{{ item.name }}</a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item
          label="弱口令扫描 "
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
        >
          <a-radio-group placeholder="请选择弱口令扫描 " v-decorator="['weakPassScan']" >
            <a-radio v-for="(item,index) in weakPassScanData" :key="index" :value="item.code">{{ item.name }}</a-radio>
          </a-radio-group>
        </a-form-item>
      </a-form>
    </a-spin>
  </a-modal>
</template>

<script>
  import { sysUserTaskAdd } from '@/api/modular/main/sysusertask/sysUserTaskManage'
  export default {
    data () {
      return {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 5 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 15 }
        },
        portScanTypeData: [],
        portScanData: [],
        domainScanData: [],
        threesixScanData: [],
        fofaScanData: [],
        fileScanData: [],
        weakPassScanData: [],
        visible: false,
        confirmLoading: false,
        form: this.$form.createForm(this)
      }
    },
    methods: {
      // 初始化方法
      add (record) {
        this.visible = true
        const portScanTypeOption = this.$options
        this.portScanTypeData = portScanTypeOption.filters['dictData']('consts_type')
        const portScanOption = this.$options
        this.portScanData = portScanOption.filters['dictData']('yes_or_no')
        const domainScanOption = this.$options
        this.domainScanData = domainScanOption.filters['dictData']('yes_or_no')
        const threesixScanOption = this.$options
        this.threesixScanData = threesixScanOption.filters['dictData']('yes_or_no')
        const fofaScanOption = this.$options
        this.fofaScanData = fofaScanOption.filters['dictData']('yes_or_no')
        const fileScanOption = this.$options
        this.fileScanData = fileScanOption.filters['dictData']('yes_or_no')
        const weakPassScanOption = this.$options
        this.weakPassScanData = weakPassScanOption.filters['dictData']('yes_or_no')
      },
      /**
       * 提交表单
       */
      handleSubmit () {
        const { form: { validateFields } } = this
        this.confirmLoading = true
        validateFields((errors, values) => {
          if (!errors) {
            for (const key in values) {
              if (typeof (values[key]) === 'object') {
                values[key] = JSON.stringify(values[key])
              }
            }
            sysUserTaskAdd(values).then((res) => {
              if (res.success) {
                this.$message.success('新增成功')
                this.confirmLoading = false
                this.$emit('ok', values)
                this.handleCancel()
              } else {
                this.$message.error('新增失败')// + res.message
              }
            }).finally((res) => {
              this.confirmLoading = false
            })
          } else {
            this.confirmLoading = false
          }
        })
      },
      handleCancel () {
        this.form.resetFields()
        this.visible = false
      }
    }
  }
</script>
