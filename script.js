const response = await fetch("https://businesstime3rdndgithub-io.hetanshhgadhiaaa.workers.dev", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    message: userMessage
  })
});
