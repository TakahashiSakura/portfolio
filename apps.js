const apps = [
  {
    name: "Myヘルスノート",
    icon: "♡",
    theme: "health",
    description:
      "症状、通院記録など、体調に関する情報をひとつにまとめて管理できるヘルスノート。",
    tags: ["Health", "Record", "SwiftUI"],
    url: "https://apps.apple.com/app/id6787606632"
  },

  {
    name: "My買い物リスト",
    icon: "✓",
    theme: "shopping",
    description:
      "毎日の買い物を、シンプルに記録・管理するための買い物リストアプリ。",
    tags: ["Shopping", "List", "SwiftUI"],
    url: ""
  },

  {
    name: "Myメニュー",
    icon: "♨",
    theme: "menu",
    description:
      "毎日の献立や食事を考えるときに使える、シンプルなメニュー管理アプリ。",
    tags: ["Food", "Menu", "SwiftUI"],
    url: ""
  },

  {
    name: "Myタスク",
    icon: "●",
    theme: "task",
    description:
      "やることを整理して、毎日のタスクを分かりやすく管理するためのアプリ。",
    tags: ["Task", "Productivity", "SwiftUI"],
    url: ""
  },

  {
    name: "My Song List",
    icon: "♪",
    theme: "song",
    description:
      "歌いたい曲をすっきり記録。状況に合わせて曲を選んでくれる音楽ノート。",
    tags: ["Music", "List", "SwiftUI"],
    url: "https://apps.apple.com/app/id6780097543"
  },

  {
    name: "MyStoryIdea",
    icon: "W",
    theme: "story",
    description:
      "思いついた物語やアイデアを残して、創作のヒントをストックしていくためのアプリ。",
    tags: ["Story", "Idea", "Creative"],
    url: ""
  },

  {
    name: "MyDegu",
    icon: "D",
    theme: "degu",
    description:
      "デグーの体重・元気度・通院記録などを、まとめて残せる健康記録アプリ。",
    tags: ["Degu", "Health", "Record"],
    url: "https://apps.apple.com/us/app/mydegu/id6795147871"
  },

  {
    name: "MyFavorite",
    icon: "♦",
    theme: "favorite",
    description:
      "推しや大切なものの記録を、写真や思い出と一緒に残していくコレクションアプリ。",
    tags: ["Favorite", "Photos", "Record"],
    url: "https://apps.apple.com/us/app/myfavorite/id6787602927"
  },

  {
    name: "安値グラフ",
    icon: "↗",
    theme: "price",
    description:
      "商品の価格を記録して、いつ・どこで安かったかを分かりやすく確認するためのアプリ。",
    tags: ["Price", "Chart", "Shopping"],
    url: ""
  }
];

const appGrid = document.getElementById("appGrid");

if (appGrid) {
  appGrid.innerHTML = apps
    .map((app) => {
      const tags = app.tags
        .map((tag) => `<span>${tag}</span>`)
        .join("");

      const storeButton = app.url
        ? `
          <a
            class="store-button"
            href="${app.url}"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="${app.name}をApp Storeで見る"
          >
            <span class="apple"></span>
            <span>
              <small>Download on the</small>
              <strong>App Store</strong>
            </span>
          </a>
        `
        : `
          <span
            class="store-button store-button-disabled"
            aria-label="${app.name}のApp Store URLは未設定です"
          >
            <span class="apple"></span>
            <span>
              <small>App Store</small>
              <strong>URL未設定</strong>
            </span>
          </span>
        `;

      return `
        <article class="app-card ${app.theme}">
          <div class="app-top">
            <div class="app-icon">${app.icon}</div>
            <span class="status">iOS</span>
          </div>

          <h3>${app.name}</h3>
          <p>${app.description}</p>

          <div class="tags">
            ${tags}
          </div>

          ${storeButton}
        </article>
      `;
    })
    .join("");
}

const appPrev = document.getElementById("appPrev");
const appNext = document.getElementById("appNext");

function getAppScrollAmount() {
  const firstCard = appGrid?.querySelector(".app-card");

  if (!firstCard) return 380;

  const styles = window.getComputedStyle(appGrid);
  const gap = parseFloat(styles.columnGap || styles.gap) || 0;

  return firstCard.getBoundingClientRect().width + gap;
}

if (appGrid && appPrev && appNext) {
  appPrev.addEventListener("click", () => {
    appGrid.scrollBy({
      left: -getAppScrollAmount(),
      behavior: "smooth"
    });
  });

  appNext.addEventListener("click", () => {
    appGrid.scrollBy({
      left: getAppScrollAmount(),
      behavior: "smooth"
    });
  });
}
