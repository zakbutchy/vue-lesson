<template>
  <div class="list-test">
    <h1>v-forを使ってみる</h1>
    <p>v-forでfor文と同じことができる</p>
    <p>v-for="中身 in 配列" で配列から一個づつ中身が取れる</p>
    <p>v-forを使う場合は :key をbind（属性として値を設定してあげる）する</p>

    <h2>v-for + v-if を使うには HTMLに影響せず、forやifが使えて要素も囲える templateタグ を使うとよい</h2>
    <p>v-for で自身を繰り返せるが、特定の要素だけを表示したい if とかを書くとLintに怒られるので。</p>
    <p>forでli自身が繰り返されるより、 forの中身（子要素）を回す方がイメージしやすいので。。</p>
    <List></List>
  </div>
</template>

<script>
import List from "@/components/List";

export default {
  name: "ListTest",
  components: { List }
};
</script>

<style scoped></style>
