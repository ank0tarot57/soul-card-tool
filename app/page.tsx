"use client";

import React, { useState } from "react";
const cardData = {
  0: {
  name: "愚者",
  image: "/cards/fool.png",
  role: "自由な始まり",
  message: "枠にとらわれず、自分の感覚を信じて新しい流れへ進むエネルギーです。",
  personality: {
    catchCopy: "自由な感性で新しい風を運ぶ人",
    charm:
      "あなたは、型にはまりすぎない自然体の魅力を持っています。少し不思議でも、どこか目が離せない空気感があり、「この人はこの人のままでいいんだ」と周りに感じさせる力があります。",
    daily:
      "気になったことをまずやってみたり、直感で動いたほうがうまくいきやすかったりします。予定通りに進めるより、そのときの気持ちや流れを大切にするタイプです。",
    love:
      "恋愛では、駆け引きよりも素直な気持ちを大切にしやすいでしょう。好きになるとまっすぐですが、縛られすぎると心が苦しくなりやすい一面もあります。",
    message:
      "あなたの自由さは未熟さではなく、新しい可能性に心を開ける才能です。",
    luckyWord: "はじまり",
    luckyItem: "白いスニーカー"
  },
  soul: {
    catchCopy: "恐れよりも魂の声を選んで進む魂",
    essence:
      "あなたの心の奥には、「まだ見ぬ世界へ向かいたい」という純粋な衝動があります。安心だけを選ぶより、自分らしく生きられる道を探し続ける人です。",
    theme: "失敗を怖がりすぎず、自分の感覚を信じること。",
    lifeTheme:
      "周りの正解ではなく、自分だけの人生の歩き方を見つけていくこと。",
    growth:
      "不安があっても一歩踏み出す勇気。まだ形になっていない自分を信じる力。",
    message:
      "答えが見えないときこそ、心が軽くなる方向に進んで大丈夫です。",
    guardianWord: "わたしの感覚を信じる",
    guardianItem: "小さな旅ノート"
  }
},
1: {
  name: "魔術師",
  image: "/cards/magician.png",
  role: "始める力",
  message: "思いつきを形にし、自分の意志で現実を動かしていく力があります。",
  personality: {
    catchCopy: "思いを形にする力を持つ人",
    charm:
      "あなたは、言葉や行動で自分の世界を作っていける人です。頭の回転が早く、必要なものを組み合わせて前に進める器用さがあります。",
    daily:
      "アイデアが浮かぶのが早く、会話でも気の利いた一言が自然に出やすいでしょう。何かを始めるときの瞬発力があり、ゼロから形を作ることが得意です。",
    love:
      "恋愛では、気になる相手に自分から働きかける力があります。言葉や雰囲気づくりで距離を縮めるのが上手ですが、器用に見られるぶん本音を誤解されることもあります。",
    message:
      "あなたの言葉と行動には、現実を動かす力があります。",
    luckyWord: "創造",
    luckyItem: "お気に入りのペン"
  },
  soul: {
    catchCopy: "内なる可能性を現実にしていく魂",
    essence:
      "あなたの魂には、「思いを現実に変える力」が宿っています。ただ夢を見るだけではなく、自分の意志を使って世界に働きかけていく人です。",
    theme: "自分の力を疑いすぎず、持っているものを使ってみること。",
    lifeTheme:
      "自分の才能や表現を通して、人生に主体的に関わっていくこと。",
    growth:
      "自己信頼。考えるだけで終わらせず、行動へつなげる力。",
    message:
      "あなたには、まだ使い切れていない才能がたくさんあります。",
    guardianWord: "わたしは形にできる",
    guardianItem: "小さなアクセサリーケース"
  }
},
2: {
  name: "女教皇",
  image: "/cards/high-priestess.png",
  role: "感じ取る力",
  message: "表面だけでなく、空気や本音を静かに読み取る感受性があります。",
  personality: {
    catchCopy: "静かな知性と深い感受性を持つ人",
    charm:
      "あなたは、騒がしく目立つというより、落ち着いた雰囲気で人を引きつける魅力があります。多くを語らなくても、「ちゃんと見ている人」「わかってくれそうな人」と思われやすいでしょう。",
    daily:
      "一度立ち止まって考えることが多く、感情的に反応する前に相手や状況をよく見ています。ひとりの時間で心を整えることも大切な人です。",
    love:
      "恋愛では慎重で、簡単には心を開かないかもしれません。でも一度信頼した相手には深く誠実です。言葉より空気や温度感で気持ちを感じ取ることが多いでしょう。",
    message:
      "あなたの静けさの中には、表には見えにくい強さと知恵があります。",
    luckyWord: "静けさ",
    luckyItem: "月モチーフの小物"
  },
  soul: {
    catchCopy: "心の奥の真実を見つめる魂",
    essence:
      "あなたの魂は、とても繊細で深く、表面的なことでは満たされにくい本質を持っています。にぎやかさよりも、本物かどうかを大切にする人です。",
    theme: "外の声に流されず、自分の内側の感覚を信じること。",
    lifeTheme:
      "見えないもの、言葉にならないものに意味を見出しながら、自分だけの真実とつながること。",
    growth:
      "直感を信頼する力。静かな時間の中で本音を受け取る力。",
    message:
      "急いで答えを出さなくても、あなたの中にはすでに大切な感覚があります。",
    guardianWord: "内側の声を聞く",
    guardianItem: "手帳やジャーナル"
  }
},
3: {
  name: "女帝",
  image: "/cards/empress.png",
  role: "育む力",
  message: "安心感や豊かさを生み出し、人や物事をあたたかく育てていく資質があります。",
  personality: {
    catchCopy: "やわらかさと豊かさで人を包む人",
    charm:
      "あなたは、安心感やぬくもりを人に与えやすい人です。一緒にいるとほっとすると感じられやすく、自然体なのに華やかさもあります。",
    daily:
      "居心地のいい空間を作るのが得意だったり、人の変化によく気づいたりします。好きなものを大事に育てる感覚があり、美しいものや心地よいものに惹かれやすいでしょう。",
    love:
      "恋愛では、愛情深く相手を包み込むような優しさが出やすいです。好きな人のために尽くせる反面、自分ばかり与えていないか気づくことも大切です。",
    message:
      "あなたの優しさは、人を満たす力でもあり、自分を満たすためにも使っていいものです。",
    luckyWord: "豊かさ",
    luckyItem: "好きな香りのハンドクリーム"
  },
  soul: {
    catchCopy: "愛と受容を育てて広げていく魂",
    essence:
      "あなたの魂には、命や愛を育むあたたかさがあります。誰かを癒したい、安心させたい、美しいものを大切にしたいという願いが深く流れています。",
    theme: "与えるだけでなく、自分も受け取っていいと知ること。",
    lifeTheme:
      "愛されること、育てること、満ちることを通して、自分自身の価値を思い出していくこと。",
    growth:
      "受け取る力。心地よさや豊かさを自分に許す力。",
    message:
      "あなたは、頑張って価値を証明しなくても、存在そのものにあたたかさがあります。",
    guardianWord: "わたしも受け取っていい",
    guardianItem: "花柄のポーチ"
  }
},
4: {
  name: "皇帝",
  image: "/cards/emperor.png",
  role: "土台を作る力",
  message: "現実を整え、安定した形へ導く責任感と実行力があります。",
  personality: {
    catchCopy: "頼られる強さを持つ人",
    charm:
      "あなたは、しっかり者に見られやすく、いざというときに頼りにされる人です。落ち着いた判断力があり、周りから「この人なら大丈夫」と思われやすいでしょう。",
    daily:
      "物事を整理したり、段取りを決めたりするのが比較的得意です。感情に流されすぎず、現実的に考える場面で力を発揮しやすいタイプです。",
    love:
      "恋愛では、相手を守りたい気持ちが強く出るかもしれません。安定した関係を望みやすい一方で、弱さを見せるのが少し苦手なこともあります。",
    message:
      "あなたの強さは、人を支える力であると同時に、安心を作る愛の形でもあります。",
    luckyWord: "安定",
    luckyItem: "腕時計"
  },
  soul: {
    catchCopy: "自分の人生を自分で築いていく魂",
    essence:
      "あなたの魂は、土台を作ること、守ること、形にすることに強い力を持っています。曖昧なままではなく、自分の足でしっかり立ちたい人です。",
    theme: "「しっかりしなければ」を背負いすぎず、本当の強さを育てること。",
    lifeTheme:
      "責任や現実と向き合いながら、自分らしい安心と基盤を築いていくこと。",
    growth:
      "自分を守る力。責任感とやわらかさのバランスをとる力。",
    message:
      "強くあることと、ひとりで抱え込むことは同じではありません。",
    guardianWord: "わたしの土台を整える",
    guardianItem: "レザー素材の手帳"
  }
},
  5: {
    name: "教皇",
    image: "/cards/hierophant.png",
    role: "導く力",
    message: "経験や価値観を通して、人に安心や学びを渡していく役割があります。"
  },
  6: {
    name: "恋人たち",
    image: "/cards/lovers.png",
    role: "選び取る力",
    message: "大切なものを見極め、自分らしい愛し方や関わり方を育てていく人です。"
  },
  7: {
    name: "戦車",
    image: "/cards/chariot.png",
    role: "進む力",
    message: "迷いがあっても前へ進もうとする推進力と集中力があります。"
  },
  8: {
    name: "力",
    image: "/cards/strength.png",
    role: "やさしい強さ",
    message: "無理やりではなく、愛や信頼で物事を整えていく力があります。"
  },
  9: {
    name: "隠者",
    image: "/cards/hermit.png",
    role: "深く見つめる力",
    message: "ひとりの時間の中で本質を見つけ、静かな知恵を育てていく人です。"
  },
  10: {
    name: "運命の輪",
    image: "/cards/wheel-of-fortune.png",
    role: "流れを変える力",
    message: "転機や変化を通して、自分や周囲の世界を動かしていく役割があります。"
  },
  11: {
    name: "正義",
    image: "/cards/justice.png",
    role: "整える力",
    message: "感情だけでなく、誠実さやバランスを大切にしながら進める人です。"
  },
  12: {
    name: "吊るされた男",
    image: "/cards/hanged-man.png",
    role: "見方を変える力",
    message: "立ち止まる時間の中で、新しい意味や価値を見つけられる人です。"
  },
  13: {
    name: "死神",
    image: "/cards/death.png",
    role: "終わらせて生まれ変わる力",
    message: "不要になったものを手放し、新しい流れへ進む変容力があります。"
  },
  14: {
    name: "節制",
    image: "/cards/temperance.png",
    role: "調和させる力",
    message: "違うもの同士をつなぎ、やさしくバランスを取っていくことができます。"
  },
  15: {
    name: "悪魔",
    image: "/cards/devil.png",
    role: "欲望を見抜く力",
    message: "強い惹かれや執着を通して、本当のテーマに気づいていく人です。"
  },
  16: {
    name: "塔",
    image: "/cards/tower.png",
    role: "壊して真実に戻す力",
    message: "思い込みを超え、本音の世界に戻るための大きな変化を起こせる人です。"
  },
  17: {
    name: "星",
    image: "/cards/star.png",
    role: "希望を灯す力",
    message: "傷ついたあとでも、自分や誰かに光を思い出させる魅力があります。"
  },
  18: {
    name: "月",
    image: "/cards/moon.png",
    role: "見えない心を感じる力",
    message: "曖昧さや不安の中にも、まだ言葉にならない感情を見つけられる人です。"
  },
  19: {
    name: "太陽",
    image: "/cards/sun.png",
    role: "明るさを広げる力",
    message: "素直さや生命力で、人の心を軽くし、前向きな空気を広げる人です。"
  },
  20: {
    name: "審判",
    image: "/cards/judgement.png",
    role: "目覚めの力",
    message: "過去の経験を糧にして、新しい自分へ呼び起こされる人生テーマがあります。"
  },
  21: {
    name: "世界",
    image: "/cards/world.png",
    role: "完成させる力",
    message: "ひとつの流れを統合し、次の世界へ自然に進んでいく力があります。"
  }
};

function sumDigits(num: number) {
  return String(num)
    .split("")
    .map((char) => Number(char))
    .reduce((sum, n) => sum + n, 0);
}

function toMajorArcanaNumber(num: number) {
  if (num === 22) return 0;
  return num;
}
function getPersonalityNumberFromTotal(total: number) {
  if (total <= 21) {
    return toMajorArcanaNumber(total);
  }

  const reduced = sumDigits(total);
  return toMajorArcanaNumber(reduced);
}

function getSoulNumberFromPersonality(personalityNumber: number) {
  if (personalityNumber <= 9) {
    return toMajorArcanaNumber(personalityNumber);
  }

  const reduced = sumDigits(personalityNumber);
  return toMajorArcanaNumber(reduced);
}
function calculateMaryGreerCards(dateString: string) {
  if (!dateString) {
    return null;
  }

  const parts = dateString.split("-");
  if (parts.length !== 3) {
    return null;
  }

  const [yearStr, monthStr, dayStr] = parts;
  const year = Number(yearStr);
  const month = Number(monthStr);
  const day = Number(dayStr);

  if (
    !Number.isInteger(year) ||
    !Number.isInteger(month) ||
    !Number.isInteger(day) ||
    month < 1 ||
    month > 12 ||
    day < 1 ||
    day > 31
  ) {
    return null;
  }

  const firstYear = Number(yearStr.slice(0, 2));
  const lastYear = Number(yearStr.slice(2, 4));
  const total = month + day + firstYear + lastYear;

  const personalityNumber = getPersonalityNumberFromTotal(total);
  const soulNumber = getSoulNumberFromPersonality(personalityNumber);

  const personalityCard = cardData[personalityNumber as keyof typeof cardData];
  const soulCard = cardData[soulNumber as keyof typeof cardData];

  if (!personalityCard || !soulCard) {
    return null;
  }

  return {
    total,
    personalityNumber,
    soulNumber,
    personalityCard,
    soulCard
  };
}

function buildCombinedMessage(
  personalityCard: { name: string; role: string },
  soulCard: { name: string; role: string }
) {
  const sameCard = personalityCard.name === soulCard.name;

  if (sameCard) {
    return `あなたは「${personalityCard.role}」をまっすぐ体現しやすい人です。外から見える魅力と、心の奥にあるテーマが同じ方向を向いているため、自分らしさが伝わりやすいでしょう。`;
  }

  return `外からは「${personalityCard.role}」として見られやすく、心の奥では「${soulCard.role}」を大切に育てていく人です。人から見えるあなたと、本当のあなたの間にあるその奥行きが、あなたらしい魅力になります。`;

}
function InfoRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="border-t border-slate-100 py-4 first:border-t-0 first:pt-0">
      <p className="mb-1 text-xs font-semibold tracking-[0.08em] text-slate-400">
        {label}
      </p>
      <p className="text-sm leading-7 text-slate-700">{value}</p>
    </div>
  );
}

export default function Page() {
  const [birthdate, setBirthdate] = useState("");
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");

  function handleDiagnose() {
    if (!birthdate) {
      setError("生年月日を入力してください。");
      setResult(null);
      return;
    }

    const calculated = calculateMaryGreerCards(birthdate);

    if (!calculated) {
      setError("診断結果を表示できませんでした。入力形式を確認してください。");
      setResult(null);
      return;
    }

    setError("");
    setResult({
      ...calculated,
      combinedMessage: buildCombinedMessage(calculated.personalityCard, calculated.soulCard)
    });
  }

  const inputClass =
    "w-full rounded-2xl border border-slate-200 px-4 py-3 text-base outline-none focus:border-rose-300";
  const cardClass =
    "overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm";

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-pink-50 to-orange-50 px-4 py-5 text-slate-800 sm:px-5 md:p-6">
      <div className="mx-auto max-w-5xl rounded-[2rem] bg-white/90 p-4 shadow-xl sm:p-5 md:p-10">
     <div className="mb-6 text-center md:mb-8">
  <h1 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
    ソウルカード診断
  </h1>
  <p className="mx-auto max-w-3xl text-sm leading-7 text-slate-600 md:text-base md:leading-8 [text-align:justify] [text-justify:inter-ideograph]">
    タロットは、未来を言い当てるためだけのものではなく、心を映し、自分の本音に出会うためのもの。
    このソウルカード診断では、生年月日から導かれるカードを通して、あなたが生まれ持った魅力や魂のテーマをやさしく読み解いていきます。
    恋愛に揺れる夜も、生きにくさの中で自分をうまく愛せない日も、カードはあなたの心の奥にある声を静かに映し出してくれるでしょう。<br />
    今の自分を責めるためではなく、もっと深く理解し、やさしく愛していくためのヒントとして受け取ってください。
  </p>
</div>

        <div className="grid gap-4 rounded-3xl bg-rose-50/70 p-4 sm:p-5 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <label className="mb-2 block text-sm font-medium">生年月日</label>
            <input
              type="date"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              className={inputClass}
            />
          </div>
          <button
            onClick={handleDiagnose}
            className="w-full rounded-2xl bg-slate-900 px-6 py-3 text-white transition hover:opacity-90 md:w-auto"
          >
            診断する
          </button>
        </div>

        {error && (
          <div className="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </div>
        )}

        {result && (
          <div className="mt-6 space-y-6 md:mt-8 md:space-y-8">
            <div className="rounded-3xl bg-sky-100/80 px-4 py-3 text-center sm:px-6 sm:py-4">
              <p className="text-lg font-semibold text-slate-800 sm:text-xl md:text-2xl">
                あなたの内と外を映す2枚
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 md:gap-6">
              <div className={cardClass}>
                <div className="border-b border-slate-100 bg-rose-50 px-4 py-3 sm:px-5 sm:py-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-rose-700 sm:text-xs">
                    Personality Card
                  </p>
                  <p className="mt-1 text-xs text-slate-600 sm:text-sm">
                    表にあらわれやすいあなた
                  </p>
                </div>
                <img
                  src={result.personalityCard.image}
                  alt={result.personalityCard.name}
                 className="h-[280px] w-full object-contain bg-slate-50 p-3 sm:h-[320px] md:h-[360px]"
                />
                <div className="p-4 sm:p-5">
  <h2 className="mt-1 text-xl font-bold sm:text-2xl">
    {result.personalityCard.name}
  </h2>

  <div className="mt-4 rounded-2xl bg-rose-50 px-4 py-3">
    <p className="text-xs font-semibold tracking-[0.08em] text-rose-500">
      ひとことでいうと
    </p>
    <p className="mt-1 text-sm font-medium leading-6 text-slate-800">
      {result.personalityCard.personality.catchCopy}
    </p>
  </div>

  <div className="mt-5 space-y-1">
    <InfoRow
      label="あなたの表に出やすい魅力"
      value={result.personalityCard.personality.charm}
    />
    <InfoRow
      label="日常で出やすい特徴"
      value={result.personalityCard.personality.daily}
    />
    <InfoRow
      label="恋愛で出やすい傾向"
      value={result.personalityCard.personality.love}
    />
    <InfoRow
      label="あなたへのひとことメッセージ"
      value={result.personalityCard.personality.message}
    />
  </div>

  <div className="mt-5 grid gap-3 sm:grid-cols-2">
    <div className="rounded-2xl bg-slate-50 px-4 py-3">
      <p className="text-xs font-semibold tracking-[0.08em] text-slate-400">
        ラッキーワード
      </p>
      <p className="mt-1 text-sm font-medium text-slate-800">
        {result.personalityCard.personality.luckyWord}
      </p>
    </div>
    <div className="rounded-2xl bg-slate-50 px-4 py-3">
      <p className="text-xs font-semibold tracking-[0.08em] text-slate-400">
        ラッキーアイテム
      </p>
      <p className="mt-1 text-sm font-medium text-slate-800">
        {result.personalityCard.personality.luckyItem}
      </p>
    </div>
  </div>
</div>
              </div>

              <div className={cardClass}>
                <div className="border-b border-slate-100 bg-amber-50 px-4 py-3 sm:px-5 sm:py-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-700 sm:text-xs">
                    Soul Card
                  </p>
                  <p className="mt-1 text-xs text-slate-600 sm:text-sm">
                    心の奥にあるテーマ
                  </p>
                </div>
                <img
                  src={result.soulCard.image}
                  alt={result.soulCard.name}
                 className="h-[280px] w-full object-contain bg-slate-50 p-3 sm:h-[320px] md:h-[360px]"
                />
                <div className="p-4 sm:p-5">
  <h2 className="mt-1 text-xl font-bold sm:text-2xl">
    {result.soulCard.name}
  </h2>

  <div className="mt-4 rounded-2xl bg-amber-50 px-4 py-3">
    <p className="text-xs font-semibold tracking-[0.08em] text-amber-600">
      ひとことでいうと
    </p>
    <p className="mt-1 text-sm font-medium leading-6 text-slate-800">
      {result.soulCard.soul.catchCopy}
    </p>
  </div>

  <div className="mt-5 space-y-1">
    <InfoRow
      label="心の奥にある本質"
      value={result.soulCard.soul.essence}
    />
    <InfoRow
      label="心のテーマ"
      value={result.soulCard.soul.theme}
    />
    <InfoRow
      label="人生のテーマ"
      value={result.soulCard.soul.lifeTheme}
    />
    <InfoRow
      label="この人生で育てていく力"
      value={result.soulCard.soul.growth}
    />
    <InfoRow
      label="あなたへのひとことメッセージ"
      value={result.soulCard.soul.message}
    />
  </div>

  <div className="mt-5 grid gap-3 sm:grid-cols-2">
    <div className="rounded-2xl bg-slate-50 px-4 py-3">
      <p className="text-xs font-semibold tracking-[0.08em] text-slate-400">
        お守りワード
      </p>
      <p className="mt-1 text-sm font-medium text-slate-800">
        {result.soulCard.soul.guardianWord}
      </p>
    </div>
    <div className="rounded-2xl bg-slate-50 px-4 py-3">
      <p className="text-xs font-semibold tracking-[0.08em] text-slate-400">
        お守りアイテム
      </p>
      <p className="mt-1 text-sm font-medium text-slate-800">
        {result.soulCard.soul.guardianItem}
      </p>
    </div>
  </div>
</div>
              </div>
            </div>

            <div className="rounded-3xl bg-slate-50 p-4 sm:p-5 md:p-6">
              <p className="text-sm text-slate-500">2枚の組み合わせメッセージ</p>
              <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base md:leading-8">
                {result.combinedMessage}
              </p>
            </div>

         <div className="rounded-3xl bg-white p-4 text-xs leading-6 text-slate-500 ring-1 ring-slate-100 sm:p-5">
  <p>
    この診断は、Mary K. Greer の Tarot Birth Cards / Personality Card / Soul Card の考え方を参考に構成しています。
  </p>
  <p className="mt-2">表示される解釈メッセージは当サイト独自の表現です。</p>
  <p className="mt-2">
    ※ 一部のカード画像には、パブリックドメインのRider-Waite-Smith画像を使用しています。引用元：amateras.blog。今後、順次オリジナル画像へ差し替え予定です。
  </p>
</div>ß
          </div>
        )}
      </div>
    </div>
  );
}