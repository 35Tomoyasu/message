// 全てのanimationTarget属性を取得
const targetElement = document.querySelectorAll(".animationTarget");

  console.log("画面の高さ", window.innerHeight)

// スクロールする度に関数内の処理実行
document.addEventListener("scroll", function() {
  for (let i = 0; i < targetElement.length; i++) {
    // ブラウザの上からの距離(liタグの上端からの距離）を定義
    const getElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight * .6
    
    // window.innerHeight: 現在のブラウザの高さを取得
    // もし6割見えたらアニメーション表示
    if (window.innerHeight > getElementDistance) {
      targetElement[i].classList.add("show");
    }
  }
})
