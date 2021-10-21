$('#change').click(function () {
    const data = $('#jsonInput').val()
    let a = data.replace(/ /g, "")
    let b = JSON.parse(a)
    console.log(b)
    getStudent(b);
});

function getStudent(data) {
    let sum = 0;
    for (i = 0; i < data.length; i++) {
        sum =
            exchangePoints(data[i].國文1) +
            exchangePoints(data[i].國文2) +
            exchangePoints(data[i].英語1) +
            exchangePoints(data[i].英語2) +
            exchangePoints(data[i].歷史1) +
            exchangePoints(data[i].歷史2) +
            exchangePoints(data[i].地理1) +
            exchangePoints(data[i].地理2) +
            exchangePoints(data[i].公民1) +
            exchangePoints(data[i].公民2) +
            exchangePoints(data[i].數學1) +
            exchangePoints(data[i].數學2) +
            exchangePoints(data[i].理化1) +
            exchangePoints(data[i].理化2)

        const STREAM_TEMPLATE = `<tr>
            <td>${data[i].年班}</td>
            <td>${data[i].座號}</td>
            <td>${data[i].姓名}</td>
            <td>${sum}</td>
            </tr>`;

        $('#tb').append(STREAM_TEMPLATE)
        console.log(data[i].年班 + " 座號:" + data[i].座號 + " 姓名:" + data[i].姓名 + " 總共點數 : " + sum)
    }
}


function exchangePoints(score) {
    if (score == 100) return 3
    else if (score >= 90) return 2
    else if (score >= 80 && score < 90) return 1
    else return 0
}



