<template>
  <!-- template の中は HTML を記述する。実際にコンポーネントとして見える部分 -->
  <div>
    <h1>コンポーネント02</h1>
    <!-- {{ key }} の形で記述 -->
    <h2 class="test">{{ title }}をするよ</h2>
    <h3>{{ title }}は{{ msg }}だよ</h3>

    <!-- @click 属性を作成し、値には methods で追加した関数名を記述 -->
    <!-- 普通のJSで言うところの onclick="関数名()" と同じ -->
    <button @click="method01">メソッド01実行ボタン</button>
    <button @click="method01">メソッド01を使い回すよ</button>
    <br />
    <!-- @change 属性で onchange になる -->
    <select @change="method01">
      <option>onchangeとかも使えるよ</option>
      <option>変える度にmethod01が実行されるよ</option>
      <option>onclick,oncahnge以外にもいろいろ使えるよ</option>
    </select>
    <br />
    <button @click="changeTitle">Vueの何をするの？</button>
    <hr />
    <p>Q1.何の勉強してるの？</p>
    <p>正解は・・・{{ answer }}</p>
    <button @click="openAnswer">答えを見るボタン</button>
    <hr />

    <h3>v-if について</h3>
    <p>ture や false をテンプレートで使えるので if とかもできちゃう</p>
    <p>myFlag の初期値は data 内で false にしてあるけど</p>
    <button @click="myFlagOn">このボタンを押すと</button>
    <p v-if="myFlag">v-if="myFlag" が true になるので、この要素が表示される</p>
  </div>
</template>

<script>
// script の中には JS を記述する（コンポーネントの処理、ロジック）
export default {
  name: "Comp02",
  data() {
    return {
      // プロパティは変数感覚で使える
      title: "Vue",
      msg: "JSのフレームワーク",
      answer: "",
      // trueやfalseも使える。
      myFlag: false // 初期値はfalse
    };
  },
  // data と同じ階層にオブジェクトとして追加する
  methods: {
    // 関数を methods に追加する
    method01() {
      alert(this.title);
    },
    // data の title を変える関数を追加してみる
    // data の中のプロパティは this.key(この場合 this.title)で参照できる
    changeTitle() {
      this.title = "Vueのお勉強";
    },
    openAnswer() {
      this.answer = "Vue.jsだよ";
    },
    myFlagOn() {
      // 同コンポーネント内であれば this をつければ data プロパティは同じスコープで使える
      this.myFlag = true; // 押したらtrue
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// style の中には template 部分に関する css を記述する
// lang=scss で scss もかける
// scoped を記述でこのコンポーネントだけにスタイルが適用される
.test {
  background-color: rgb(0, 60, 255);
  color: #fff;
}
</style>
