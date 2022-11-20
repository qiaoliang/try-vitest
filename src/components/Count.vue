<template>
  <button @click="increment" />
  <div v-if="count % 2 === 0">Count: {{ count }}. Count is even.</div>
  <div v-if="count % 2 !== 0">Count: {{ count }}. Count is odd.</div>
</template>
<script lang="ts">
import { computed, inject, defineComponent } from "vue";

export default defineComponent({
  name: "APP",
  computed:{
    count():Number{
      return this.$store.state.count
    }
  },
  methods:{
    increment(){
      this.$store.commit("increment");
    }
  },
});
</script>
