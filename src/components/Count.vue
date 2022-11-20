<template>
  <button @click="increment" />
  <div v-if="count % 2 === 0">Count: {{ count }}. Count is even.</div>
  <div v-if="count % 2 !== 0">Count: {{ count }}. Count is odd.</div>
  <div>PostID: {{postId}}</div>
</template>
<script lang="ts">
import { count } from "console";
import { computed, inject, defineComponent } from "vue";

export default defineComponent({
  name: "APP",
  computed:{
    count():Number{
      return this.$store.state.count
    },
    postId():Number{
      return this.$route.params.postId
    },
  },
  methods:{
    increment(){
      this.$store.commit("increment");
    }
  },
});
</script>
