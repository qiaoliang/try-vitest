<template>
  <button @click="increment" />
  <div v-if="count % 2 === 0">Count: {{ count }}. Count is even.</div>
  <div v-if="count % 2 !== 0">Count: {{ count }}. Count is odd.</div>
  <Fetcher/>
</template>
<script lang="ts">
import {defineComponent } from "vue";
import Fetcher from './Fetcher.vue'
export default defineComponent({
  components:{
    Fetcher
  },
  computed:{
    count():Number{
      return this.$store.state.count
    },
  },
  methods:{
    increment(){
      this.$store.commit("increment");
    }
  },
});
</script>
