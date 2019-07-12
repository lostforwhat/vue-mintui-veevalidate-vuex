<template>
  <div class="e-select">
    <mt-cell class="mt-cell" :title="title" @click.native="visible = true">
      <span v-if="currentPlaceholder" class="placeholder-text">{{delayPlaceholder}}</span>
      <span v-else class="text">{{delayPlaceholder}}</span>
      <i class="fa fa-angle-down"></i>
    </mt-cell>
    <mt-popup v-if="currentSlots[0]" class="mt-popup" v-model="visible" :closeOnClickModal="true" position="bottom">
      <div class="popup-container">
        <div class="title">
          <div class="text" @click="cancel()">取消</div>
          <div class="text confirm" @click="confirm()">确定</div>
        </div>
        <mt-picker v-if="refresh" ref="picker" class="mt-picker" value-key="text" :slots="currentSlots" @change="onChange">
        </mt-picker>
      </div>
    </mt-popup>
  </div>
</template>

<script>
    export default {
      name: "ESelect",
      data(){
        return {
          visible: false,
          currentValue: this.value,
          currentPlaceholder: this.placeholder,
          refresh: true,
          defaultIndex: 0
        }
      },
      created(){
        this.resetSlots();
      },
      computed:{
        delayPlaceholder(){
          let data = this.slots;
          let defaultIndex = this.defaultIndex;
          return this.currentPlaceholder || (data && data[defaultIndex] && data[defaultIndex].text) || (data && data[defaultIndex]) || '';
        },
        currentSlots(){
          return [
            {
              values: this.slots,
              textAlign: 'center',
              defaultIndex: this.defaultIndex
            }
          ]
        }
      },
      watch: {
        value(val){
          if( !val || val == '' ){
            this.currentPlaceholder = this.placeholder ? this.placeholder : "";
          }
          this.currentValue = val;
          this.resetSlots();
        },
        currentValue(val){
          this.$emit('input', val);
        },
        visible(val){
          if(typeof val !== 'undefined' && !val){
            this.refresh = false;
            this.resetSlots();
            this.$nextTick(()=>{
              this.refresh = true;
            })
          }
        }
      },
      props:{
        slots: {
          type: Array,
          required: true
        },
        value: {},
        title: {
          type: String
        },
        placeholder: {
          type: String
        }
      },
      methods: {
        resetSlots(){
          let defaultIndex = 0;
          for(let i=0;i<this.slots.length;i++){
            let val = (this.slots[i] && this.slots[i].value) || (this.slots[i] && this.slots[i].text) || this.slots[i];
            defaultIndex = val === this.value ? i : defaultIndex;
          }
          this.defaultIndex = defaultIndex;
        },
        onChange(picker, values){

        },
        cancel() {
          this.visible = false;
        },
        confirm(){
          this.visible = false;
          let picker = this.$refs.picker.getValues();
          this.currentPlaceholder = "";
          // let text = (picker[0] && picker[0].text) || picker[0];
          let value = (picker[0] && picker[0].value) || (picker[0] && picker[0].text) || picker[0];
          if(this.currentValue != value){
            this.currentValue = value;
            this.$nextTick(() => {
              this.$emit('e-change', this.currentValue);
            })
          }
        }
      }
    }
</script>

<style scoped lang="scss">

  .e-select /deep/ .mint-cell-title {
    min-width: 120px;
  }

  .mt-cell {
    .placeholder-text {
      margin-right: 15px;
      color: #b4b4b4;
    }
    .text {
      margin-right: 15px;
      color: #333333;
    }
  }
  .mt-popup {
    width: 100%; height: 45%;
    .popup-container {
      width: 100%; height: 100%; background-color: white;
      .title {
        display: flex; justify-content: space-between;
        .text {
          font-size: 14px; padding: 10px; color: #333333;
          &.confirm { color: #007aff;
          }
        }
      }
    }
  }
</style>
