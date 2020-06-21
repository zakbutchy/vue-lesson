<template>
  <h3>h3の見出し用コンポーネント</h3>
</template>

<script>
export default {
  name: "Header03",
  // props を使うと属性値を受け取れる
  // data のように変数として使える。this.title ができるし、template でも {{ title }} という風に使える
  props: {
    title: {
      // titleという名前で属性をとる
      type: String, // 文字列型で。typeはObjectとかも指定できる
      required: true // 必須にする。必須じゃない場合はfalse
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
