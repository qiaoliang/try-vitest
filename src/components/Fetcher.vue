<template>
  <div>Fetcher</div>
</template>
<script lang="ts">
import {defineComponent } from "vue";
import  axios from 'axios';
export default defineComponent({
  methods:{
    async getInfo(){
      await axios.get("https://www.continuousdelivery20.com").then()
    }
  },
  mounted(){
    this.getInfo()
  }
});
</script>
