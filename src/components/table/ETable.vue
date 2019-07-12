<template>
  <div class="e-table" v-if="items">
    <table class="e-table" border="0" cellspacing="0" cellpadding="0">
      <thead v-if="headers">
        <tr>
          <th v-for="head in headers">
            <span v-if="head.name">{{head.name}}</span>
            <span v-else>{{head}}</span>
          </th>
          <th v-if="removeAble">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items">
          <td v-if="headers" v-for="head in headers">
            <span>{{item[head.field]}}</span>
          </td>
          <td v-else v-for="(value, key) in item" :key="key">
            <span>{{value}}</span>
          </td>
          <td v-if="removeAble" @click="remove(index)" style="color:red">
            <i class="fa fa-remove"></i>
            <span>删除</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
    export default {
      name: "ETable",
      data(){
        return {
          items: []
        }
      },
      props:{
        headers: Array,
        datas: Array,
        editAble: Boolean,
        removeAble: Boolean
      },
      mounted(){
        this.items = this.datas;
      },
      methods:{
        remove(index){
          this.datas.splice(index,1);
        }
      }
    }
</script>

<style scoped>
  .e-table{
    width: 100%;
  }

  table th{
    word-wrap:break-word;
    word-break:break-all;
    table-layout:fixed;
    border:1px solid #ccc;
  }

  table td{
    word-break:break-all;
    word-wrap:break-word;
    white-space:pre-line;
    border:1px solid #ccc;
    text-align: center;
  }
</style>
