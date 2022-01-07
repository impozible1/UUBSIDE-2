function run(){
	var name = document.getElementById("fileNameInput").value
	var text = document.getElementById("textarea").value
	var blob = new Blob([text],
  { type: "text/plain;charset=utf-8" });
	saveAs(blob, name);
}