<template>
  <div>
    <h1>テストビュー03</h1>
    <Header02 title="title属性に見出し" />
    <Header03 title="title属性に見出し" />
    <!-- コンポーネントで設定した title がボタンのテキストとして設定される -->
    <Button01 />
    <!-- ボタンのテキストを設定できる -->
    <Button01 title="絶対押すなよ" />
  </div>
</template>

<script>
import Header02 from "@/components/Header02";
import Header03 from "@/components/Header03";
import Button01 from "@/components/Button01";
export default {
  name: "View03",
  components: {
    Header02,
    Header03,
    Button01
  }
};
</script>

<style scoped></style>
