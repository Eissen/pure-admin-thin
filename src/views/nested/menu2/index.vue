<script setup lang="ts">
import { ref } from "vue";
defineOptions({
  name: "Menu2"
});

const input = ref("");
</script>

<template>
  <div class="dark:text-white">
    <p>菜单二</p>
    <el-input v-model="input" />
  </div>
</template>
