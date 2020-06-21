// doraemons.js を作成し、doraemons を切り出してみる
// export が必要（この変数を別ファイルから呼ぶよ的な感じ）
// 名前は複数系がベター
// 一意性と扱いやすさを考慮すると id を採番するのがよいと思う
//  → DBでもidカラムはほぼ必ずあるのと、同じ名前のデータが複数あってもidが違うなら問題ないので
export const doraemons = [
  {
    id: 1,
    name: "ドラえもん",
    favorite: "ドラ焼き",
    image: "img/doraemon.jpg"
  },
  {
    id: 2,
    name: "ドラ・ザ・キッド",
    favorite: "ケチャップとマスタードをかけたドラ焼き",
    image: "img/dora-the-kid.png"
  },
  {
    id: 3,
    name: "ドラリーニョ",
    favorite: "タバスコをかけたドラ焼き",
    image: "img/dorarinho.jpeg"
  }
];
