<template>
  <button @click="increment" />
  <div v-if="count % 2 === 0">Count: {{ count }}. Count is even.</div>
  <div v-if="count % 2 !== 0">Count: {{ count }}. Count is odd.</div>
</template>
<script lang="ts">
import { computed, inject, defineComponent } from "vue";
import { useStore } from 'vuex';

export default defineComponent({
  name: "APP",
  setup() {
    const store = inject('store');
    const count = computed(() => store.state.count);
    const increment = () => {
      store.commit("increment");
    };
    return {
      count,
      increment,
    };
  },
});
</script>
