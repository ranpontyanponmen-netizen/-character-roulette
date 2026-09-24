const data = {

  "髪型": [
    "ロングストレート",
    "ふわふわツインテール",
    "ゆるふわハーフアップ",
    "外ハネボブ",
    "姫カットロング",
    "三つ編みツイン",
    "サイドテール",
    "ショートウルフ",
    "ゆる巻きロング",
    "お団子ヘア"
  ],

  "髪のクセ": [
    "毛先がくるんと内巻き",
    "ぴょこんとアホ毛がある",
    "前髪が少し跳ねている",
    "ふわふわしている",
    "毛先だけ外に跳ねる",
    "寝ぐせっぽい",
    "さらさらストレート",
    "ところどころウェーブ",
    "髪が少し広がる",
    "くるくるした癖毛"
  ],

  "目の形": [
    "たれ目",
    "つり目",
    "丸目",
    "ジト目",
    "猫目",
    "半月目",
    "大きなぱっちり目",
    "細めの目"
  ],

  "瞳孔の形": [
    "丸",
    "ハート",
    "星",
    "縦長",
    "ひし形",
    "花",
    "十字",
    "三日月"
  ],

  "性別": [
    "女の子",
    "男の子",
    "中性的",
    "どちらとも言えない雰囲気"
  ],

  "体の形＆種族": [
    "小柄な人間",
    "普通体型の人間",
    "長身の人間",
    "小さなうさぎ獣人",
    "猫耳の獣人",
    "妖精",
    "吸血鬼",
    "天使",
    "悪魔",
    "人魚",
    "魔女"
  ],

  "髪色": [
    "ミルキーピンク",
    "ストロベリーピンク",
    "ホワイト",
    "ミルクティーベージュ",
    "淡いラベンダー",
    "ベビーブルー",
    "ローズブラウン",
    "ブラック",
    "ピーチカラー",
    "シルバー"
  ],

  "目の色": [
    "ローズピンク",
    "ルビーレッド",
    "アメジスト",
    "ベビーブルー",
    "エメラルド",
    "ハニーゴールド",
    "ブラウン",
    "グレー",
    "ピンク×ブルーのグラデーション"
  ],

  "肌色": [
    "アイボリー",
    "明るいベージュ",
    "ピンクベージュ",
    "ミルクティーベージュ",
    "ほんのり日焼けしたベージュ"
  ],

  "服装ジャンル": [
    "クラシカルロリータ",
    "甘めロリータ",
    "ゴシックロリータ",
    "ヴィクトリアン風",
    "ふわふわガーリー",
    "魔女風ワンピース",
    "アンティークドレス",
    "ティーパーティー風",
    "フリルたっぷりの制服",
    "妖精風ドレス"
  ],

  "性格": [
    "おっとりしていて優しい",
    "元気で人懐っこい",
    "ツンツンしているけど実は優しい",
    "無口でミステリアス",
    "のんびりマイペース",
    "いたずら好き",
    "真面目で几帳面",
    "甘えんぼう",
    "クールだけど照れ屋",
    "好奇心旺盛"
  ]

};


function randomItem(array) {

  return array[
    Math.floor(
      Math.random() * array.length
    )
  ];

}


let audioContext = null;


function playSound() {

  if (!audioContext) {

    audioContext =
      new (
        window.AudioContext ||
        window.webkitAudioContext
      )();

  }

  if (
    audioContext.state === "suspended"
  ) {

    audioContext.resume();

  }

  const now =
    audioContext.currentTime;


  const osc1 =
    audioContext.createOscillator();

  const gain1 =
    audioContext.createGain();


  osc1.type = "sine";

  osc1.frequency.setValueAtTime(
    880,
    now
  );

  osc1.frequency.exponentialRampToValueAtTime(
    1760,
    now + 0.18
  );


  gain1.gain.setValueAtTime(
    0.0001,
    now
  );

  gain1.gain.exponentialRampToValueAtTime(
    0.16,
    now + 0.025
  );

  gain1.gain.exponentialRampToValueAtTime(
    0.0001,
    now + 0.32
  );


  osc1.connect(gain1);

  gain1.connect(
    audioContext.destination
  );


  osc1.start(now);

  osc1.stop(
    now + 0.32
  );


  const osc2 =
    audioContext.createOscillator();

  const gain2 =
    audioContext.createGain();


  osc2.type = "sine";

  osc2.frequency.setValueAtTime(
    1320,
    now + 0.08
  );

  osc2.frequency.exponentialRampToValueAtTime(
    2200,
    now + 0.24
  );


  gain2.gain.setValueAtTime(
    0.0001,
    now
  );

  gain2.gain.exponentialRampToValueAtTime(
    0.11,
    now + 0.1
  );

  gain2.gain.exponentialRampToValueAtTime(
    0.0001,
    now + 0.4
  );


  osc2.connect(gain2);

  gain2.connect(
    audioContext.destination
  );


  osc2.start(
    now + 0.08
  );

  osc2.stop(
    now + 0.4
  );

}


function createCharacter() {

  const result =
    document.getElementById(
      "result"
    );


  const button =
    document.getElementById(
      "rouletteButton"
    );


  playSound();


  button.classList.remove(
    "rolling"
  );

  void button.offsetWidth;

  button.classList.add(
    "rolling"
  );


  result.classList.remove(
    "result-opening"
  );

  result.classList.remove(
    "sparkle"
  );

  void result.offsetWidth;


  let html = `

    <div class="result-title">
      ♡ CHARACTER ♡
    </div>

  `;


  for (
    const category in data
  ) {

    const value =
      randomItem(
        data[category]
      );


    html += `

      <div class="character-item">

        <span class="character-label">
          ${category}
        </span>

        <span class="character-value">
          ${value}
        </span>

      </div>

    `;

  }


  result.innerHTML =
    html;


  result.classList.add(
    "result-opening"
  );


  setTimeout(
    function () {

      result.classList.add(
        "sparkle"
      );

    },
    100
  );


  const items =
    result.querySelectorAll(
      ".character-item"
    );


  items.forEach(
    function (item, index) {

      setTimeout(
        function () {

          item.classList.add(
            "show"
          );

        },
        250 + index * 75
      );

    }
  );

}


document
  .getElementById(
    "rouletteButton"
  )
  .addEventListener(
    "click",
    createCharacter
  );
