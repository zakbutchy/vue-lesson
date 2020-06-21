<template>
  <div>
    <!-- 出したい箇所に slot タグを配置 -->
    <!-- name指定することで、コンポーネント使用時にどこを置き換えるか指定できる -->
    <slot name="header" />
    ここはContentBox
    <slot />
  </div>
</template>

<script>
export default {
  name: "ContentBox"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
