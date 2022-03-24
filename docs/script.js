function showResult(){
    let result = document.getElementById("result")
    result.contentWindow.document.close();
    result.contentWindow.document.write(document.getElementById("code").value)
}

function showResultNew(){
    let windowResult = window.open("about:blank")
    windowResult.document.close();
    windowResult.document.write(document.getElementById("code").value)
}
