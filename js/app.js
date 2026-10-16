'use strict';

// HTML要素は取得済みです。以下の変数を使って課題を完成させてください。
const loadButton = document.getElementById('load-button');
const categorySelect = document.getElementById('category-select');
const dataStatus = document.getElementById('data-status');
const visibleCount = document.getElementById('visible-count');
const eventList = document.getElementById('event-list');

// APIから取得したイベントの配列を保存します。
let events = [];

// 課題2・3：イベントの表示とカテゴリでの絞り込み
function renderEvents() {
  // TODO: 前の一覧を消し、eventsから条件に合うイベントをliで追加する。
  // TODO: 表示件数を更新する。0件ならメッセージを表示する。
}

// 課題1：GASからJSONを取得する
async function loadEvents() {
  // TODO: fetch(API_BASE_URL)でデータを取得する。
  // TODO: response.json()で配列に変換し、eventsに保存する。
  // TODO: renderEvents()を呼び出し、取得結果を画面に表示する。
}

// 課題1・3：イベントを登録する
// TODO: ボタンのonclickにloadEventsを、プルダウンのonchangeにrenderEventsを設定する。
