import React, { useState } from "react";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:3000/api/getDet/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: input }),
      });

      const data = await res.json();

      const botMsg = {
        text: data.reply || "Sorry, I didn't understand that.",
        sender: "bot",
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error("Error fetching:", err);
      setMessages((prev) => [
        ...prev,
        { text: "❌ Error reaching assistant. Try again later.", sender: "bot" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="max-w-md mx-auto p-4 h-[80vh] flex flex-col font-sans">
      {/* Chat Container */}
      <div className="flex-1 overflow-y-auto mb-3 px-2 space-y-3 scrollbar-thin bg-white/10 backdrop-blur-md border border-white/30 rounded-xl shadow-xl p-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-3 rounded-2xl text-sm shadow-md max-w-[75%] break-words ${
              msg.sender === "user"
                ? "bg-blue-600 text-white self-end"
                : "bg-white/80 text-gray-900 self-start"
            }`}
          >
            {msg.text}
          </div>
        ))}
        {loading && (
          <div className="bg-white/70 text-gray-700 p-3 rounded-2xl shadow-md self-start max-w-[75%]">
            Typing...
          </div>
        )}
      </div>

      {/* Input Section */}
      <div className="flex gap-2 mt-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 border border-gray-300 bg-white/60 backdrop-blur-sm p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-600"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-200"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
