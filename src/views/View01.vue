<template>
  <div class="view-one">
    <h1>テストビュー01</h1>
    <comp01></comp01>
  </div>
</template>

<script>
import Comp01 from "@/components/Comp01";
export default {
  name: "View01",
  components: { Comp01 }
};
</script>

<style scoped></style>
