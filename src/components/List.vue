<template>
  <div>
    <ul>
      <!-- v-for="中身 in 配列" で配列から一個づつ中身が取れる -->
      <!-- v-forを使う場合は :key をbind（属性として値を設定してあげる）する -->
      <!-- オブジェクトの一意になるものを指定する -->
      <li v-for="doraemon in doraemons" :key="doraemon.id">
        ID{{ doraemon.id }}の「{{ doraemon.name }}」は{{ doraemon.favorite }}が好き
      </li>
      <!-- 配列のキーを指定してもよい -->
      <li v-for="(doraemon, index) in doraemons" :key="index">
        「{{ doraemon.name }}」は{{ doraemon.favorite }}が好き
      </li>
    </ul>
    <hr>
    <div class="dora">
      <p>ドラえもんズの名前を入れてみて↓</p>
      <input type="text" v-model="name">
      <ul>
        <template v-for="doraemon in doraemons">
          <!-- input に入れた名前と同じなら true -->
          <li :key="doraemon.id" v-if="doraemon.name === name">
            <p>
              <img :src="doraemon.image" :alt="doraemon.name" />
            </p>
            ID{{ doraemon.id }}の{{ doraemon.name }}は{{ doraemon.favorite }}が好き
          </li>
        </template>
      </ul>
    </div>

    <hr>
    <p>index を使うと select で指定した番号（配列のn番目）のデータだけ出すとかもできる</p>
    <ul>
      <template v-for="(doraemon, index) in doraemons">
        <li :key="doraemon.id" v-if="index === select">
          ID{{ doraemon.id }}の{{ doraemon.name }}は{{ doraemon.favorite }}が好き
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
// 作った doraemons.js をインポート
// import { exportしたやつ（使いたいやつ） } from "ファイルパス（拡張子不要）"
import { doraemons } from "@/resources/doraemons";
export default {
  name: "List",
  // data にオブジェクトが入った配列を定義
  data() {
    return {
      // import された変数が使える
      name: "",
      select: 1,
      doraemons
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.dora {
  img {
    width: 200px;
    height: 200px;
  }

  p {
    text-align: center;
  }
}
</style>
