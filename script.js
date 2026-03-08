async function sendMessage() {

  const inputBox = document.getElementById("chatInput");
  const chatBox = document.getElementById("chatBox");

  const userMessage = inputBox.value;

  if (!userMessage) return;

  chatBox.innerHTML += "<p><b>User:</b> " + userMessage + "</p>";

  inputBox.value = "";

  const response = await fetch("https://businesstime3rdndgithub-io.hetanshhgadhiaaa.workers.dev", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: userMessage
    })
  });

  const data = await response.json();

  chatBox.innerHTML += "<p><b>AI:</b> " + data.reply + "</p>";

}
