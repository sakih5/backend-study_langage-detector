const franc = require('franc');
const langs = require('langs');
const colors = require('colors');

// 入力テキスト（他の言語に変えてもOK）
const text = process.argv[2] || 'This is a sample English sentence.';

// francで言語コードを取得（例: 'eng'）
const langCode = franc(text);

if (langCode === 'und') {
  console.log('言語を特定できませんでした。もっと長い文を試してください。'.red);
} else {
  const language = langs.where('3', langCode);
  console.log(`検出された言語コード: ${langCode}`.green);
  console.log(`言語名: ${language.name}（${language.local}）`.green);
}