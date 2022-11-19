<template>
  <button @click="increment" />
  <div v-if="count % 2 === 0">Count: {{ count }}. Count is even.</div>
  <div v-if="count % 2 !== 0">Count: {{ count }}. Count is odd.</div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "APP",
  setup() {
    const count = ref(0);
    const increment = () => {
      count.value += 1;
    };
    return {
      count,
      increment,
    };
  },
});
</script>
