// おみくじの画像を配列に入れて、ランダムに表示させる
const imgArr = new Array('img/daikichi.png','img/chuukichi.png','img/kichi.png','img/kyou.png','img/daikyou.png');
// 最初の画像
const resetImg = 'img/toukaimiko.png';    
// スタートボタン
const startBtn = document.getElementById('start-btn');
// リセットボタン
const resetBtn = document.getElementById('reset-btn');
// おみくじの画像
const omikujiImg = document.getElementById('omikuji-img');

// スタートボタンを押したらこの関数が実行される
startBtn.onclick = function() {
	// ランダムな数値を生成
    const random=Math.floor(Math.random()*imgArr.length);
	// おみくじの画像をランダムに表示させる
    omikujiImg.src=imgArr[random];
    
	// もしランダムな数値が0だったら
    if(random == 0){
		// アラートを表示させる
        alert("パンパカパーン!今日はいい日になるかもね♪");
    }
}

// リセットボタンを押したらこの関数が実行される
resetBtn.onclick = function() {
	// おみくじの画像をリセットする
	omikujiImg.src=resetImg;
}

