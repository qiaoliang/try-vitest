<template>
  <button @click="increment" />
  <div v-if="count % 2 === 0">Count: {{ count }}. Count is even.</div>
  <div v-if="count % 2 !== 0">Count: {{ count }}. Count is odd.</div>
</template>
<script lang="ts">
import { computed, inject, defineComponent } from "vue";

export default defineComponent({
  name: "APP",
  setup() {
    const store = inject('store');  //在父组件传来的 provide 参数中查找对应的值
    const count = computed(() => store.state.count);
    const increment = () => {
      store.commit();
    };
    return {
      count,
      increment,
    };
  },
});
</script>
