<template>
  <div>
    <span v-if="!success" style="color: red;">入力してください</span>
    <br />
    <input v-model.trim="message" type="text" />
    <br />
    {{ message }}
    <br />
    <button>ボタン</button>
  </div>
</template>

<script>
export default {
  name: "Validator",
  data() {
    return {
      message: ""
    };
  },
  computed: {
    success() {
      return !!this.message;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
