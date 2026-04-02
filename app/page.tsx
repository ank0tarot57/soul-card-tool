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
  message: "経験や価値観を通して、人に安心や学びを渡していく役割があります。",
  personality: {
    catchCopy: "安心感のある誠実な人",
    charm:
      "あなたは、きちんとした印象や信頼感を与えやすい人です。人に対して誠実で、言葉や態度に安定感があるため、相談相手として選ばれやすいでしょう。",
    daily:
      "ルールや礼儀を大切にしやすく、場に合った振る舞いが自然にできます。誰かに教えたり、わかりやすく伝えたりする力もあります。",
    love:
      "恋愛では、軽い関係よりも信頼できる関係を求めやすいです。気持ちが固まるまで慎重ですが、一度決めると誠実に向き合います。",
    message:
      "あなたのまっすぐさは、人の心に安心を届ける力です。",
    luckyWord: "信頼",
    luckyItem: "シンプルな本や文庫本"
  },
  soul: {
    catchCopy: "意味とつながりを伝えていく魂",
    essence:
      "あなたの魂には、「大切なことを人に手渡したい」という思いがあります。経験や学びを、自分だけのものにせず、誰かの支えに変えていける人です。",
    theme: "正しさに縛られすぎず、自分にとっての真実を見つけること。",
    lifeTheme:
      "学び、信頼、精神的な支えを通して、人との深いつながりを育てること。",
    growth:
      "人を導く力と、自分自身の心の声に従う力の両立。",
    message:
      "あなたが積み重ねてきたことは、誰かの安心や希望になっていきます。",
    guardianWord: "わたしの学びには意味がある",
    guardianItem: "お気に入りのノート"
  }
},
6: {
  name: "恋人たち",
  image: "/cards/lovers.png",
  role: "選び取る力",
  message: "大切なものを見極め、自分らしい愛し方や関わり方を育てていく人です。",
  personality: {
    catchCopy: "心を通わせることで魅力が輝く人",
    charm:
      "あなたは、人との距離をやわらかく縮める魅力があります。親しみやすく、相手の気持ちに自然と寄り添えるため、一緒にいると心がほどける人だと思われやすいでしょう。",
    daily:
      "会話の中で空気をやさしくしたり、相手が話しやすい雰囲気を作ったりしやすいです。人とのつながりの中で、自分らしさが出やすいタイプです。",
    love:
      "恋愛では、心が通っているかどうかをとても大切にするでしょう。言葉だけでなく、態度や空気感から愛情を感じ取りたい人です。",
    message:
      "あなたの魅力は、誰かと比べて勝つことではなく、心を通わせられるところにあります。",
    luckyWord: "つながり",
    luckyItem: "ペアモチーフの小物"
  },
  soul: {
    catchCopy: "愛と選択を通して本音に戻る魂",
    essence:
      "あなたの魂は、人との関わりの中で多くを学ぶ本質を持っています。誰かを好きになること、つながること、迷うこと、そのすべてが大切な学びになりやすい人です。",
    theme: "相手に合わせすぎず、自分の本音を選ぶこと。",
    lifeTheme:
      "愛の中でも自分を見失わず、本当に望む関係を選び取っていくこと。",
    growth:
      "選ぶ力。優しさと自己犠牲を混同しない力。",
    message:
      "愛されるために無理をしなくても、あなたは大切にされていい存在です。",
    guardianWord: "わたしの本音を選ぶ",
    guardianItem: "小さな鏡"
  }
},
7: {
  name: "戦車",
  image: "/cards/chariot.png",
  role: "進む力",
  message: "迷いがあっても前へ進もうとする推進力と集中力があります。",
  personality: {
    catchCopy: "前に進む力が強い人",
    charm:
      "あなたは、行動力や推進力のある人として見られやすいでしょう。迷っていても最終的には前を向く力があり、その姿が周りに刺激を与えます。",
    daily:
      "やると決めたら集中して進めたり、目標ができると一気にスイッチが入ったりしやすいです。止まるより、動きながら考えるほうが向いています。",
    love:
      "恋愛では、自分の気持ちがはっきりすると積極的になりやすいです。ただ、焦りすぎると相手のペースを見失うこともあるかもしれません。",
    message:
      "あなたの前進する力は、人生を切り開く大切なエネルギーです。",
    luckyWord: "前進",
    luckyItem: "スニーカーや歩きやすい靴"
  },
  soul: {
    catchCopy: "葛藤を超えて自分の道を進む魂",
    essence:
      "あなたの魂には、立ち止まりながらでも前へ向かう意志があります。迷いや不安があっても、自分の人生をあきらめたくない強さを持っています。",
    theme: "感情に振り回されすぎず、自分の意志で進むこと。",
    lifeTheme:
      "葛藤や揺れを抱えながらも、自分の方向性を定めて進んでいくこと。",
    growth:
      "感情と行動を一致させる力。勢いだけでなく、意志を持って進む力。",
    message:
      "焦らなくても大丈夫です。大切なのは、あなた自身が進みたい方向を知ることです。",
    guardianWord: "わたしの道を進む",
    guardianItem: "鍵モチーフの小物"
  }
},
8: {
  name: "力",
  image: "/cards/strength.png",
  role: "やさしい強さ",
  message: "無理やりではなく、愛や信頼で物事を整えていく力があります。",
  personality: {
    catchCopy: "やさしい強さを持つ人",
    charm:
      "あなたは、声を荒げずに場を落ち着かせられるような魅力を持っています。強引ではないのに芯があり、そばにいる人に安心感を与えます。",
    daily:
      "感情的な場面でも、なんとか穏やかに整えようとする力があります。人の弱さや不安に対しても、頭ごなしに否定せず受け止めることができる人です。",
    love:
      "恋愛では、相手を理解しようとする気持ちが強く、包み込むような優しさが出やすいです。ただ、我慢しすぎてしまうと自分の気持ちが後回しになることもあります。",
    message:
      "あなたの強さは、戦うことではなく、やさしく向き合えることにあります。",
    luckyWord: "しなやかさ",
    luckyItem: "やわらかい素材のストール"
  },
  soul: {
    catchCopy: "本当の強さをやさしさの中に見つける魂",
    essence:
      "あなたの魂は、強さを外側の圧ではなく、内側の落ち着きとして育てていくタイプです。無理に勝つことより、自分や相手の弱さに向き合うことに意味を見出します。",
    theme: "怖れや不安を否定せず、それでも自分を扱っていくこと。",
    lifeTheme:
      "感情、衝動、傷つきやすさを抱えながらも、やさしい形で力を使えるようになること。",
    growth:
      "自分を落ち着かせる力。優しさを自己犠牲ではなく、意志として使う力。",
    message:
      "無理に強くならなくて大丈夫です。あなたには、すでに静かな強さがあります。",
    guardianWord: "やさしさは強さ",
    guardianItem: "お気に入りのマグカップ"
  }
},
9: {
  name: "隠者",
  image: "/cards/hermit.png",
  role: "深く見つめる力",
  message: "ひとりの時間の中で本質を見つけ、静かな知恵を育てていく人です。",
  personality: {
    catchCopy: "深く考え、本質を見つめる人",
    charm:
      "あなたは、にぎやかさよりも落ち着いた深みで人を惹きつけるタイプです。軽い言葉より、本当に必要な一言を大切にするため、信頼されやすいでしょう。",
    daily:
      "ひとりで考える時間が必要だったり、すぐ答えを出すより納得するまで見つめたかったりします。流行より、自分が本当に良いと思うものを大事にする人です。",
    love:
      "恋愛では慎重で、心が動いてもすぐには見せないかもしれません。でも、軽く始まる関係より、深く安心できる関係に惹かれやすいでしょう。",
    message:
      "あなたの静かな時間は、心を置き去りにしないための大切な時間です。",
    luckyWord: "本質",
    luckyItem: "読書灯やランプ"
  },
  soul: {
    catchCopy: "孤独の中で真実を育てる魂",
    essence:
      "あなたの魂は、外に答えを求めるより、自分の内側で真実を見つけたい本質を持っています。ひとりの時間は寂しさではなく、魂が整うための大切な場でもあります。",
    theme: "周りのスピードに合わせすぎず、自分のリズムを守ること。",
    lifeTheme:
      "静けさ、内省、探求を通して、自分だけの知恵と光を見つけていくこと。",
    growth:
      "孤独を恐れず、本音と向き合う力。深い理解を生きる力。",
    message:
      "急がなくて大丈夫です。あなたの答えは、静かな場所でちゃんと育っています。",
    guardianWord: "静かな光を信じる",
    guardianItem: "小さなランタンモチーフ"
  }
},
  10: {
  name: "運命の輪",
  image: "/cards/wheel-of-fortune.png",
  role: "流れを変える力",
  message: "転機や変化を通して、自分や周囲の世界を動かしていく役割があります。",
  personality: {
    catchCopy: "流れをつかむ力がある人",
    charm:
      "あなたは、停滞した空気を変えたり、新しい流れを呼び込んだりする魅力があります。意外なタイミングでチャンスを引き寄せることも多い人です。",
    daily:
      "予定通りよりも、流れの中で思わぬ展開が起きやすいでしょう。環境の変化があっても、その中で自分なりの意味を見つけやすい人です。",
    love:
      "恋愛では、偶然の再会や急な展開など、流れが動きやすい傾向があります。追いかけすぎるより、タイミングを感じることが大切です。",
    message:
      "あなたの人生には、必要なときに流れが動く力があります。",
    luckyWord: "タイミング",
    luckyItem: "丸いモチーフのアクセサリー"
  },
  soul: {
    catchCopy: "変化の中で意味を受け取る魂",
    essence:
      "あなたの魂は、変化や巡りを通して成長していく本質を持っています。思い通りにいかないことの中にも、あとから意味が見えてくることが多い人です。",
    theme: "コントロールできない流れの中でも、自分を見失わないこと。",
    lifeTheme:
      "変化を恐れず、巡りの中で新しい自分に出会っていくこと。",
    growth:
      "流れを信じる力。変化の中で自分に必要なものを受け取る力。",
    message:
      "止まって見える時期にも、見えないところで流れは動いています。",
    guardianWord: "流れの中にも意味がある",
    guardianItem: "コインケース"
  }
},
11: {
  name: "正義",
  image: "/cards/justice.png",
  role: "整える力",
  message: "感情だけでなく、誠実さやバランスを大切にしながら進める人です。",
  personality: {
    catchCopy: "まっすぐで誠実な人",
    charm:
      "あなたは、感情だけで動かず、物事をきちんと見ようとする誠実さがあります。公平で落ち着いた印象を与えやすく、信頼されやすいでしょう。",
    daily:
      "人の話を聞くときも、片方だけではなく全体を見ようとします。感覚だけで決めるより、納得できる基準を持って動きたい人です。",
    love:
      "恋愛では、曖昧な関係や不公平さに敏感です。気持ちがあっても、ちゃんと向き合えない関係には心が疲れやすいでしょう。",
    message:
      "あなたの誠実さは、心を守るための大切な基準でもあります。",
    luckyWord: "誠実さ",
    luckyItem: "シンプルなリング"
  },
  soul: {
    catchCopy: "本当のバランスを学ぶ魂",
    essence:
      "あなたの魂は、表面的な優しさよりも、本当に誠実なことを大切にします。自分の中で納得できる生き方をしたい気持ちが強い人です。",
    theme: "感情と理性のどちらかに偏りすぎず、バランスをとること。",
    lifeTheme:
      "自分にとって正しい選択を重ねながら、心と現実の両方を整えていくこと。",
    growth:
      "境界線を引く力。自分の価値を公平に扱う力。",
    message:
      "誰かにわかってもらう前に、まず自分の気持ちを正しく扱ってあげてください。",
    guardianWord: "わたしにとっての正しさ",
    guardianItem: "整ったデザインの文房具"
  }
},
12: {
  name: "吊るされた男",
  image: "/cards/hanged-man.png",
  role: "見方を変える力",
  message: "立ち止まる時間の中で、新しい意味や価値を見つけられる人です。",
  personality: {
    catchCopy: "見え方を変える力を持つ人",
    charm:
      "あなたは、すぐに答えを出すより、一度立ち止まって別の角度から見られる人です。人が見落としやすい感情や事情にも気づきやすいでしょう。",
    daily:
      "流れに逆らえない時期でも、その中で学べることを探したり、今できることを静かに考えたりする傾向があります。簡単に人を責めない優しさもあります。",
    love:
      "恋愛では、相手の事情や気持ちを理解しようとして待つことが多いかもしれません。ただ、待つことが自己犠牲になっていないかは大切なポイントです。",
    message:
      "立ち止まって見えるものの中にも、ちゃんと意味があります。",
    luckyWord: "視点の転換",
    luckyItem: "空の写真やポストカード"
  },
  soul: {
    catchCopy: "手放しの中で気づきを受け取る魂",
    essence:
      "あなたの魂は、勢いで進むより、止まる時間の中で大切なものを受け取る本質を持っています。すぐに動けない時期にも、深い学びが起きやすい人です。",
    theme: "思い通りにいかない時期にも、自分を責めすぎないこと。",
    lifeTheme:
      "我慢や停滞に意味を見つけるだけでなく、その体験から新しい見方を得ていくこと。",
    growth:
      "手放す力。コントロールできない状況の中で意味を見つける力。",
    message:
      "止まっているように見える時間も、あなたの魂には必要な時間です。",
    guardianWord: "今は受け取る時間",
    guardianItem: "やわらかいクッション"
  }
},
13: {
  name: "死神",
  image: "/cards/death.png",
  role: "終わらせて生まれ変わる力",
  message: "不要になったものを手放し、新しい流れへ進む変容力があります。",
  personality: {
    catchCopy: "終わりと始まりを動かす人",
    charm:
      "あなたは、古い流れを終わらせて新しい流れへ向かう力を持っています。中途半端なままにしない潔さがあり、本質的な変化を起こしやすい人です。",
    daily:
      "違和感があるものをそのままにしにくく、必要だと思ったら思い切って整理したり切り替えたりできます。変化が怖くても、どこかで腹をくくれる人です。",
    love:
      "恋愛では、曖昧なまま続けることに疲れやすいでしょう。本当に違うと感じたときは、苦しくても終わらせる決断をすることがあります。",
    message:
      "終わらせる力は、未来を開く力でもあります。",
    luckyWord: "手放し",
    luckyItem: "黒や深い赤の小物"
  },
  soul: {
    catchCopy: "脱皮を通して本当の自分に近づく魂",
    essence:
      "あなたの魂は、古い自分を何度も脱ぎ捨てながら成長していく本質を持っています。変化は怖いものでもありますが、同時に魂が生き直すための大切な節目です。",
    theme: "終わったものを終わったまま受け入れること。",
    lifeTheme:
      "執着を少しずつ手放しながら、自分に合った生き方へ生まれ変わっていくこと。",
    growth:
      "再生する力。痛みの後に新しい希望を見つける力。",
    message:
      "失うことは、あなたが前に進めない人だから起きるのではなく、新しい自分に向かう準備でもあります。",
    guardianWord: "手放した先に光がある",
    guardianItem: "新しくしたポーチや財布"
  }
},
14: {
  name: "節制",
  image: "/cards/temperance.png",
  role: "調和させる力",
  message: "違うもの同士をつなぎ、やさしくバランスを取っていくことができます。",
  personality: {
    catchCopy: "心地よいバランスを作る人",
    charm:
      "あなたは、極端に偏らず、ちょうどよい落ち着きを作る魅力があります。人と人の間をやわらかくつないだり、荒れた空気を穏やかに整えたりする力がある人です。",
    daily:
      "無理をしすぎるより、自分に合ったペースを見つけようとします。違うもの同士をうまく混ぜたり、ちょうどいい形に整えたりするのも得意でしょう。",
    love:
      "恋愛では、激しいドラマよりも安心できる関係を求めやすいです。相手に合わせることもできますが、自分の心地よさを守ることも大切です。",
    message:
      "あなたの穏やかさは、周りの心を整える癒しの力です。",
    luckyWord: "調和",
    luckyItem: "透明感のあるグラス"
  },
  soul: {
    catchCopy: "ちょうどいい自分を育てる魂",
    essence:
      "あなたの魂は、白か黒かではなく、そのあいだにある“ちょうどよさ”を見つける本質を持っています。急激な変化より、やさしい調整の中で育つ人です。",
    theme: "頑張りすぎと諦めの間で、自分に合うバランスを見つけること。",
    lifeTheme:
      "さまざまな経験や感情を統合しながら、自分にとって心地よい生き方を作ること。",
    growth:
      "整える力。極端に揺れた後でも、自分の中心に戻る力。",
    message:
      "急に完璧にならなくても大丈夫です。少しずつ整っていけば、それで十分です。",
    guardianWord: "わたしにちょうどいい",
    guardianItem: "ハーブティー"
  }
},
  15: {
  name: "悪魔",
  image: "/cards/devil.png",
  role: "欲望を見抜く力",
  message: "強い惹かれや執着を通して、本当のテーマに気づいていく人です。",
  personality: {
    catchCopy: "強い引力と魅力を持つ人",
    charm:
      "あなたは、人を惹きつける濃さやインパクトを持っています。綺麗ごとだけではない本音や欲望にも目をそらさないため、独特の色気や存在感を感じさせやすいでしょう。",
    daily:
      "好き嫌いがはっきりしやすく、惹かれるものには強く反応します。表面だけの関係より、もっと深いものを求める傾向があります。",
    love:
      "恋愛では、強く惹かれる気持ちや執着、離れにくさが出やすいかもしれません。だからこそ、自分の本音と境界線の両方が大切になります。",
    message:
      "あなたの情熱は悪いものではなく、大切に扱えば大きな魅力になります。",
    luckyWord: "本音",
    luckyItem: "深い色のリップや小物"
  },
  soul: {
    catchCopy: "欲望と影を通して自由を学ぶ魂",
    essence:
      "あなたの魂は、綺麗な感情だけではなく、執着や欲望、依存や怖れにも深く向き合う本質を持っています。それは弱さではなく、より本当の自由を知るための学びでもあります。",
    theme: "心を縛るものに気づき、本当に望むものを見極めること。",
    lifeTheme:
      "依存や執着の形を知りながら、自分を苦しめるつながりから少しずつ自由になること。",
    growth:
      "欲望を否定せずに扱う力。自分を縛るパターンから目をそらさない力。",
    message:
      "苦しくなるほど求めてしまうものの中に、あなたの大切な傷と願いが隠れています。",
    guardianWord: "わたしを縛るものに気づく",
    guardianItem: "ブラック系のノート"
  }
},
16: {
  name: "塔",
  image: "/cards/tower.png",
  role: "壊して真実に戻す力",
  message: "思い込みを超え、本音の世界に戻るための大きな変化を起こせる人です。",
  personality: {
    catchCopy: "本音を揺り起こす人",
    charm:
      "あなたは、表面を取り繕うより本質を見ようとする力があります。ときに周りからはインパクトのある人、隠していたことを浮かび上がらせる人として映るかもしれません。",
    daily:
      "違和感をごまかせず、嘘のまま続けることが苦手です。急な方向転換や気づきが起きやすく、それが人生の転機につながることもあります。",
    love:
      "恋愛では、見ないふりをしていた問題が一気に表面化する経験をしやすいかもしれません。でもそれは、壊すためだけではなく、本当の気持ちに戻るためでもあります。",
    message:
      "揺れることは、間違っているサインではなく、本音が動き始めたサインです。",
    luckyWord: "目覚め",
    luckyItem: "稲妻や星モチーフの小物"
  },
  soul: {
    catchCopy: "崩れることで真実に戻る魂",
    essence:
      "あなたの魂は、偽りの安心より、本当の自分に戻ることを選ぶ本質を持っています。壊れる出来事は痛みもありますが、同時に魂が正直になるためのきっかけでもあります。",
    theme: "見ないふりをしてきた本音や違和感に気づくこと。",
    lifeTheme:
      "古い思い込みや無理を手放し、本当に必要な土台を作り直すこと。",
    growth:
      "真実に向き合う力。壊れた後にも自分を立て直す力。",
    message:
      "崩れたもののすべてが失敗ではありません。そこからしか始まらない再出発もあります。",
    guardianWord: "本音に戻っていい",
    guardianItem: "新しくしたルームウェア"
  }
},
17: {
  name: "星",
  image: "/cards/star.png",
  role: "希望を灯す力",
  message: "傷ついたあとでも、自分や誰かに光を思い出させる魅力があります。",
  personality: {
    catchCopy: "希望とやさしさをにじませる人",
    charm:
      "あなたは、透明感や素直さで人を惹きつける人です。派手さとは違う、静かな希望のような魅力があり、そばにいると心が軽くなると思われやすいでしょう。",
    daily:
      "無理に大きく見せるより、自然体でいたい人です。小さなときめきや美しさに気づきやすく、自分らしい感性を大切にしています。",
    love:
      "恋愛では、理想や純粋な願いを大切にしやすいでしょう。心から信じたい気持ちがある一方で、現実とのギャップに傷つくこともあるかもしれません。",
    message:
      "あなたの素直さは、未来を照らす光のような魅力です。",
    luckyWord: "希望",
    luckyItem: "星モチーフのアクセサリー"
  },
  soul: {
    catchCopy: "傷のあとに希望を灯す魂",
    essence:
      "あなたの魂は、とても繊細で、同時に深い希望を持っています。傷ついたあとでも完全に閉じるのではなく、もう一度信じたいと願う光を心の中に残している人です。",
    theme: "傷ついても、自分の願いをあきらめすぎないこと。",
    lifeTheme:
      "ありのままの自分で生きること、そして希望を少しずつ回復していくこと。",
    growth:
      "素直さを守る力。絶望のあとにも小さな光を見つける力。",
    message:
      "あなたの願いは、弱さではありません。未来へ向かう大切な光です。",
    guardianWord: "希望は消えていない",
    guardianItem: "ガラスの小物"
  }
},
18: {
  name: "月",
  image: "/cards/moon.png",
  role: "見えない心を感じる力",
  message: "曖昧さや不安の中にも、まだ言葉にならない感情を見つけられる人です。",
  personality: {
    catchCopy: "繊細な感受性を持つ人",
    charm:
      "あなたは、目に見えるものだけではなく、空気や気配まで感じ取るような魅力があります。ミステリアスさや夢っぽさもあり、どこか放っておけない印象を残しやすいでしょう。",
    daily:
      "相手の言葉の裏にある気持ちを感じたり、場の雰囲気に影響を受けたりしやすいかもしれません。理屈では説明できない直感が働くことも多い人です。",
    love:
      "恋愛では、相手の気持ちを深読みしやすい一面があります。曖昧さに揺れやすいぶん、安心できる言葉や態度が心の安定につながります。",
    message:
      "あなたの繊細さは、ただ不安定なのではなく、深く感じ取れる才能でもあります。",
    luckyWord: "感受性",
    luckyItem: "月モチーフのアクセサリー"
  },
  soul: {
    catchCopy: "揺れの中で本音を見つけていく魂",
    essence:
      "あなたの魂は、とても豊かな感情の世界を持っています。見えない不安や曖昧さに揺れることもありますが、そのぶん人の痛みや心の奥に深く触れられる人です。",
    theme: "不安や曖昧さの中でも、自分の感情を否定しすぎないこと。",
    lifeTheme:
      "揺れや迷いを通して、本当の気持ちや心の癖を知っていくこと。",
    growth:
      "感情を受け止める力。見えないものに飲まれず、自分を整える力。",
    message:
      "揺れる日があるのは、あなたの心が弱いからではなく、深く感じられる人だからです。",
    guardianWord: "揺れの中にも本音がある",
    guardianItem: "夜に使うアロマ"
  }
},
19: {
  name: "太陽",
  image: "/cards/sun.png",
  role: "明るさを広げる力",
  message: "素直さや生命力で、人の心を軽くし、前向きな空気を広げる人です。",
  personality: {
    catchCopy: "明るさと素直さで人を照らす人",
    charm:
      "あなたは、まっすぐであたたかい魅力を持っています。笑顔や言葉に裏表が少なく、一緒にいると元気が出ると思われやすいでしょう。",
    daily:
      "思ったことを素直に表現しやすく、好きなものへの反応もわかりやすい人です。人を励ましたり、場を明るくしたりする力があります。",
    love:
      "恋愛では、好きな気持ちが比較的表に出やすいでしょう。心が通う喜びを大切にする一方で、曇った空気や曖昧な関係には疲れやすいかもしれません。",
    message:
      "あなたの素直な明るさは、誰かの心をあたためる光です。",
    luckyWord: "よろこび",
    luckyItem: "黄色やゴールドの小物"
  },
  soul: {
    catchCopy: "ありのままの自分で輝く魂",
    essence:
      "あなたの魂は、本来とても明るく、生命力にあふれています。誰かの期待に合わせた自分ではなく、自然体の自分で生きるほど輝きやすい人です。",
    theme: "自分の喜びや純粋さを、遠慮しすぎず表に出すこと。",
    lifeTheme:
      "隠れすぎず、縮こまりすぎず、自分の光をそのまま生きること。",
    growth:
      "自己表現の力。喜びを受け取り、分かち合う力。",
    message:
      "あなたがあなたらしく笑えること自体が、大切な才能です。",
    guardianWord: "わたしは光を隠さない",
    guardianItem: "サンキャッチャー"
  }
},
  20: {
  name: "審判",
  image: "/cards/judgement.png",
  role: "目覚めの力",
  message: "過去の経験を糧にして、新しい自分へ呼び起こされる人生テーマがあります。",
  personality: {
    catchCopy: "大事なタイミングで目覚める人",
    charm:
      "あなたは、人生の節目で大切な気づきを起こしやすい人です。普段は静かでも、ここぞという時に本来の力が目を覚ますような魅力があります。",
    daily:
      "過去の経験をただの思い出で終わらせず、意味として受け取りやすいでしょう。何かに呼ばれるように方向転換することもある人です。",
    love:
      "恋愛では、過去の恋から学びを受け取ったあとに大きく変わることがあります。繰り返しのパターンから抜けたい気持ちが強くなりやすいでしょう。",
    message:
      "あなたの人生には、何度でも本当の自分に戻るタイミングがあります。",
    luckyWord: "目覚め",
    luckyItem: "ベルや音の鳴る小物"
  },
  soul: {
    catchCopy: "過去を超えて生き直していく魂",
    essence:
      "あなたの魂は、過去にとらわれ続けるためではなく、そこから意味を受け取り、新しい自分へ目覚める本質を持っています。やり直しや再出発に深い縁のある人です。",
    theme: "過去の後悔や古い思い込みから少しずつ自由になること。",
    lifeTheme:
      "何度でも自分を呼び戻し、本来の生き方へ戻っていくこと。",
    growth:
      "過去を意味に変える力。自分を赦し、再び選び直す力。",
    message:
      "過去のあなたを責め続けなくても大丈夫です。ここからまた選び直せます。",
    guardianWord: "わたしは生き直せる",
    guardianItem: "音楽プレイヤーやイヤホン"
  }
},
21: {
  name: "世界",
  image: "/cards/world.png",
  role: "完成させる力",
  message: "ひとつの流れを統合し、次の世界へ自然に進んでいく力があります。",
  personality: {
    catchCopy: "満ちた魅力を持つ人",
    charm:
      "あなたは、どこか完成された安心感や、自然な華やかさを持っています。無理に頑張らなくても、その人らしさが全体の雰囲気として伝わりやすい人です。",
    daily:
      "物事をひとつの流れとして見たり、経験をつなげて意味づけたりするのが上手です。今までの出来事があとからひとつにつながる感覚を持ちやすいでしょう。",
    love:
      "恋愛では、不安定さより安心感のある関係を求めやすいです。頑張って追いかける恋より、自然に満たされる関係に惹かれるでしょう。",
    message:
      "あなたは、足りなさを埋めるためだけではなく、満ちた自分でつながっていける人です。",
    luckyWord: "完成",
    luckyItem: "丸いモチーフのアクセサリー"
  },
  soul: {
    catchCopy: "統合と満ち足りた自分を目指す魂",
    essence:
      "あなたの魂は、バラバラに見える経験をひとつにつなぎ、自分という世界を完成させていく本質を持っています。足りない自分ではなく、すでに多くを持っている自分に戻っていく人です。",
    theme: "不足感ではなく、今あるものに気づくこと。",
    lifeTheme:
      "経験、傷、喜び、出会い、そのすべてを統合して“これがわたし”と受け入れていくこと。",
    growth:
      "受容する力。終わりを迎え、次の始まりへ自然につなぐ力。",
    message:
      "あなたの歩いてきた道は、ちゃんと今のあなたを形づくっています。",
    guardianWord: "わたしはもう欠けていない",
    guardianItem: "お気に入りのリング"
  }
　},
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

  if (total >= 100) {
    const firstTwoDigits = Number(String(total).slice(0, 2));
    return toMajorArcanaNumber(firstTwoDigits);
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
              <p className="text-sm text-slate-500">2枚のカードが映す、あなたらしさ</p>
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