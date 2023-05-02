[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/wH3jFylN)
# hw4-using-react
This is the starter code of [2023-Programming User Interface Homework](https://hackmd.io/@akairisu/ByGFeGdZh)

# Report
- 姓名：江宗翰
- deploy 的網站連結：[https://main--incomparable-arithmetic-0b287e.netlify.app/](https://main--incomparable-arithmetic-0b287e.netlify.app/)
- 實作的加分作業項目：無
- 設計行為描述與理由：
    - 購物車內容及數量，以及相關會影響其內容的操作函式，都方在最上層的 `App` 中，再透過 `props` 的方式傳給如 `Deatils` 或 `Cart` 等頁面，因為這些狀態都是最上層在管理，所以整個網站可以在各處即時因 state 的變化而改變呈現的畫面。也就是這些主要的資料都由最上層的 `App` 所管理，因此對於多分頁的情況會獨立紀錄，互不影響。
    - 而因為重新整理會清除這些 state，所以重新整理後就會消失，因為此網站無後端，所以設計資料都是儲存在瀏覽器記憶體中，且並無使用到 localStorge 或是 Cookie (使用這些會讓使用者多分頁狀況下會是同樣的購物車資料，且重新整理或是關閉頁面後資料不會立即消失)。
- 討論：使用 React 實作與作業一中使用純 html/css/JavaScript 實作有何不同。哪一個比較方便與為什麼？哪一個比較容易理解如何操作與為什麼？哪一個在實作同一個頁面時需要撰寫更多程式碼？
    - 整體上 React 比較方便，可以大量模組化需要撰寫的元件並重複使用，最明顯的地方就是 Header 和 Footer 的地方不用複製貼上多次一樣的 html 程式碼。以及 State 的設計讓開發者只要專注在 State 的變化而不用去考慮其變化後哪些地方需要跟著做更改 (因為這部份 React 負責了)。
    -  React 優勢在當有複雜的動態操作，也就是有需要 JS 和 html 互動的地方，可以非常直覺的撰寫，比起純 JS ，單就 JS 的程式碼就可以清楚其想表達的邏輯，不太需要配合 html 一起查看。(或者說 JSX 就是將兩者結合在一起了)
    - 然而 React 在使用時有些需要注意、在純JS時不會發生的問題：像是多個子元件一定要給 `key` 這個屬性，否則在動態操作下很容易出現出乎意料的 bugs，但純 html 基本上只要複製貼上多個子元件就好，因此當網頁比較少需要互動的情況下(例如沒有動態數量的元件要呈現)，用純 html 可能會比較簡單 (將 React 學習成本考量進去)
    - 然而，現今大部分網站都相當複雜且有各種互動操作，因此 React 佔有大量優勢，可以理解為何 React 成為現在流行的前端設計工具。
- 其他實作的網站的有趣之處
    - Netlify 部分有踩到一些雷，是說明裡提供的那篇沒講到的：Netlify 預設會將警告當成錯誤導致部署失敗，參考[這篇](https://dev.to/kapi1/solved-treating-warnings-as-errors-because-of-process-env-ci-true-bk5)可解決。