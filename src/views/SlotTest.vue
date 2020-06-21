<template>
  <div class="slot-test">
    <h1>slotを使ってみる</h1>
    <ContentBox>
      <template slot="header">
        <h3>ContentBoxのタイトル</h3>
      </template>
      <template>
        <!-- template を子要素に入れる -->
        <!-- この中に書いた HTML が ContentBox コンポーネントの slot タグに入れ込まれる -->
        <!-- template タグは HTML には構築されない（無視される） -->
        <!-- ここの template タグの子要素が ContentBox.vue に記述した slot に入る -->
        <p>ほげほげほげ</p>
        <p>ふがふがふが</p>
        <p>slotとはテンプレートタグ内の入れ替え</p>
      </template>
    </ContentBox>
  </div>
</template>

<script>
import ContentBox from "@/components/ContentBox";

export default {
  name: "SlotTest",
  components: { ContentBox }
};
</script>

<style scoped></style>
