<template>
  <button>{{ title }}</button>
</template>

<script>
export default {
  name: "Button01",
  // props を使うと属性値を受け取れる
  // data のように変数として使える。this.title ができるし、template でも {{ title }} という風に使える
  props: {
    title: {
      // titleという名前で属性をとる
      type: String, // 文字列型で
      required: false, // 必須じゃない時は初期値も決められる
      // 初期値は default で関数を指定する
      // () => "hoge" は function() {return "hoge"} と同義
      default: () => "押してね"
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
