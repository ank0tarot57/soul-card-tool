"use client";

import React, { useState } from "react";

const cardData = {
  0: {
    name: "愚者",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/RWS_Tarot_00_Fool.jpg/320px-RWS_Tarot_00_Fool.jpg",
    role: "自由な始まり",
    message: "枠にとらわれず、自分の感覚を信じて新しい流れへ進むエネルギーです。"
  },
  1: {
    name: "魔術師",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/RWS_Tarot_01_Magician.jpg/320px-RWS_Tarot_01_Magician.jpg",
    role: "始める力",
    message: "思いつきを形にし、自分の意志で現実を動かしていく力があります。"
  },
  2: {
    name: "女教皇",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/320px-RWS_Tarot_02_High_Priestess.jpg",
    role: "感じ取る力",
    message: "表面だけでなく、空気や本音を静かに読み取る感受性があります。"
  },
  3: {
    name: "女帝",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/RWS_Tarot_03_Empress.jpg/320px-RWS_Tarot_03_Empress.jpg",
    role: "育む力",
    message: "安心感や豊かさを生み出し、人や物事をあたたかく育てていく資質があります。"
  },
  4: {
    name: "皇帝",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/RWS_Tarot_04_Emperor.jpg/320px-RWS_Tarot_04_Emperor.jpg",
    role: "土台を作る力",
    message: "現実を整え、安定した形へ導く責任感と実行力があります。"
  },
  5: {
    name: "教皇",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/RWS_Tarot_05_Hierophant.jpg/320px-RWS_Tarot_05_Hierophant.jpg",
    role: "導く力",
    message: "経験や価値観を通して、人に安心や学びを渡していく役割があります。"
  },
  6: {
    name: "恋人たち",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/TheLovers.jpg/320px-TheLovers.jpg",
    role: "選び取る力",
    message: "大切なものを見極め、自分らしい愛し方や関わり方を育てていく人です。"
  },
  7: {
    name: "戦車",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/RWS_Tarot_07_Chariot.jpg/320px-RWS_Tarot_07_Chariot.jpg",
    role: "進む力",
    message: "迷いがあっても前へ進もうとする推進力と集中力があります。"
  },
  8: {
    name: "力",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/RWS_Tarot_08_Strength.jpg/320px-RWS_Tarot_08_Strength.jpg",
    role: "やさしい強さ",
    message: "無理やりではなく、愛や信頼で物事を整えていく力があります。"
  },
  9: {
    name: "隠者",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/RWS_Tarot_09_Hermit.jpg/320px-RWS_Tarot_09_Hermit.jpg",
    role: "深く見つめる力",
    message: "ひとりの時間の中で本質を見つけ、静かな知恵を育てていく人です。"
  },
  10: {
    name: "運命の輪",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg/320px-RWS_Tarot_10_Wheel_of_Fortune.jpg",
    role: "流れを変える力",
    message: "転機や変化を通して、自分や周囲の世界を動かしていく役割があります。"
  },
  11: {
    name: "正義",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/RWS_Tarot_11_Justice.jpg/320px-RWS_Tarot_11_Justice.jpg",
    role: "整える力",
    message: "感情だけでなく、誠実さやバランスを大切にしながら進める人です。"
  },
  12: {
    name: "吊るされた男",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/RWS_Tarot_12_Hanged_Man.jpg/320px-RWS_Tarot_12_Hanged_Man.jpg",
    role: "見方を変える力",
    message: "立ち止まる時間の中で、新しい意味や価値を見つけられる人です。"
  },
  13: {
    name: "死神",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/RWS_Tarot_13_Death.jpg/320px-RWS_Tarot_13_Death.jpg",
    role: "終わらせて生まれ変わる力",
    message: "不要になったものを手放し、新しい流れへ進む変容力があります。"
  },
  14: {
    name: "節制",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/RWS_Tarot_14_Temperance.jpg/320px-RWS_Tarot_14_Temperance.jpg",
    role: "調和させる力",
    message: "違うもの同士をつなぎ、やさしくバランスを取っていくことができます。"
  },
  15: {
    name: "悪魔",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/RWS_Tarot_15_Devil.jpg/320px-RWS_Tarot_15_Devil.jpg",
    role: "欲望を見抜く力",
    message: "強い惹かれや執着を通して、本当のテーマに気づいていく人です。"
  },
  16: {
    name: "塔",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/RWS_Tarot_16_Tower.jpg/320px-RWS_Tarot_16_Tower.jpg",
    role: "壊して真実に戻す力",
    message: "思い込みを超え、本音の世界に戻るための大きな変化を起こせる人です。"
  },
  17: {
    name: "星",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/RWS_Tarot_17_Star.jpg/320px-RWS_Tarot_17_Star.jpg",
    role: "希望を灯す力",
    message: "傷ついたあとでも、自分や誰かに光を思い出させる魅力があります。"
  },
  18: {
    name: "月",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/RWS_Tarot_18_Moon.jpg/320px-RWS_Tarot_18_Moon.jpg",
    role: "見えない心を感じる力",
    message: "曖昧さや不安の中にも、まだ言葉にならない感情を見つけられる人です。"
  },
  19: {
    name: "太陽",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/RWS_Tarot_19_Sun.jpg/320px-RWS_Tarot_19_Sun.jpg",
    role: "明るさを広げる力",
    message: "素直さや生命力で、人の心を軽くし、前向きな空気を広げる人です。"
  },
  20: {
    name: "審判",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/RWS_Tarot_20_Judgement.jpg/320px-RWS_Tarot_20_Judgement.jpg",
    role: "目覚めの力",
    message: "過去の経験を糧にして、新しい自分へ呼び起こされる人生テーマがあります。"
  },
  21: {
    name: "世界",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/RWS_Tarot_21_World.jpg/320px-RWS_Tarot_21_World.jpg",
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

  if (total < 100) {
    const reduced = sumDigits(total);
    return toMajorArcanaNumber(reduced);
  }

  const digits = String(total).split("").map(Number);
  const reduced = digits[0] + digits[1] + digits[2];
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

export default function Page() {
  const [birthdate, setBirthdate] = useState("");
  const [result, setResult] = useState<null | {
    total: number;
    personalityNumber: number;
    soulNumber: number;
    personalityCard: {
      name: string;
      image: string;
      role: string;
      message: string;
    };
    soulCard: {
      name: string;
      image: string;
      role: string;
      message: string;
    };
    combinedMessage: string;
  }>(null);
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
        <div className="mb-6 md:mb-8">
          <h1 className="mb-2 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            ソウルカード診断
          </h1>
          <p className="max-w-2xl text-sm leading-6 text-slate-600 md:text-base md:leading-7">
            生年月日から、外にあらわれやすい資質を示す Personality Card と、心の奥にあるテーマを示す Soul Card を表示します。
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
                  className="h-[280px] w-full object-cover sm:h-[320px] md:h-[360px]"
                />
                <div className="p-4 sm:p-5">
                  <h2 className="mt-1 text-xl font-bold sm:text-2xl">
                    {result.personalityCard.name}
                  </h2>
                  <p className="mt-2 text-sm font-medium text-rose-700">
                    {result.personalityCard.role}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-700 sm:leading-7">
                    {result.personalityCard.message}
                  </p>
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
                  className="h-[280px] w-full object-cover sm:h-[320px] md:h-[360px]"
                />
                <div className="p-4 sm:p-5">
                  <h2 className="mt-1 text-xl font-bold sm:text-2xl">
                    {result.soulCard.name}
                  </h2>
                  <p className="mt-2 text-sm font-medium text-rose-700">
                    {result.soulCard.role}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-700 sm:leading-7">
                    {result.soulCard.message}
                  </p>
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
                この診断は、Mary K. Greer の Tarot Birth Cards / Personality Card /
                Soul Card の考え方を参考に構成しています。
              </p>
              <p className="mt-2">
                表示される解釈メッセージは当サイト独自の表現です。
              </p>
              <p className="mt-2">
                ※ 現在の画像は試作表示用です。実運用では、オリジナル画像または商用利用可能な素材への差し替えをおすすめします。
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}