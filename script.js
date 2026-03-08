export default {
  async fetch(request) {

    if (request.method === "POST") {

      const data = await request.json();
      const message = data.message;

      return new Response(
        JSON.stringify({
          reply: "You said: " + message
        }),
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          }
        }
      );

    }

    return new Response("Study AI Worker Running");
  }
};
