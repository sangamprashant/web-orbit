"use client"; // Add this directive at the top to ensure Next.js recognizes this as a client component.

import { useState } from "react";
import { botImage } from "@/assets/assets";
import "./chat.css";

interface Message {
    sender: "bot" | "user";
    content: string;
}

interface ChatUIProps {
    handleToggle: () => void
}

const ChatUi = ({ handleToggle }: ChatUIProps) => {
    const [messages, setMessages] = useState<Message[]>([
        { sender: "bot", content: "Hello! I'm WebOrbit assistant. How can I help you?" },
    ]);
    const [userInput, setUserInput] = useState<string>("");

    // Expanded Predefined responses for the chatbot
    const predefinedChats: { [key: string]: string } = {
        "what is weborbit": "WebOrbit is a powerful tool for managing web projects seamlessly.",
        "pricing": "We offer flexible pricing plans. Check our pricing page for details.",
        "features": "WebOrbit provides project management, collaboration tools, and integrations with other platforms.",
        "contact": "You can reach us at contact@weborbit.com.",
        "support": "For support, please visit our support page or send us an email.",
        "trial": "You can sign up for a 30-day free trial by visiting our signup page.",
        "integrations": "WebOrbit integrates with tools like Slack, GitHub, and Google Drive.",
        "security": "We take security seriously. WebOrbit uses industry-standard encryption to protect your data.",
        "subscription plans": "We offer monthly and yearly subscriptions with various plans depending on your needs.",
        "cancel subscription": "You can cancel your subscription anytime by visiting your account settings."
    };

    const handleUserInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setUserInput(e.target.value);
    };

    const sendMessage = () => {
        if (userInput.trim() === "") return;

        // Add user message to chat
        const newMessage: Message = { sender: "user", content: userInput.trim() };
        setMessages([...messages, newMessage]);

        // Find the bot's response (if any)
        const botResponse = predefinedChats[userInput.toLowerCase()] || "Sorry, I don't understand. Please ask something related to WebOrbit.";

        // Add bot message after a slight delay
        setTimeout(() => {
            const botMessage: Message = { sender: "bot", content: botResponse };
            setMessages(prevMessages => [...prevMessages, botMessage]);
        }, 1000);

        // Clear input field
        setUserInput("");
    };

    // Handle sending message on 'Enter' key
    const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <section className="avenue-messenger">
            <div className="menu">
                <div className="button" onClick={handleToggle}>x</div>
            </div>
            <div className="agent-face">
                <div className="half">
                    <img className="agent circle" src={botImage} alt="Chat Bot" />
                </div>
            </div>
            <div className="chat">
                <div className="chat-title">
                    <h1>WebOrbit Assistant</h1>
                    <h2>How can I assist you?</h2>
                </div>
                <div className="messages">
                    <div className="messages-content p-2">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`message ${msg.sender === "user" ? "message-personal" : "new"}`}
                            >
                                {msg.sender === "bot" && (
                                    <figure className="avatar">
                                        <img src={botImage} alt="Bot Avatar" />
                                    </figure>
                                )}
                                {msg.content}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="message-box">
                    <textarea
                        className="message-input"
                        placeholder="Type message..."
                        value={userInput}
                        onChange={handleUserInput}
                        onKeyDown={handleKeyPress}
                    />
                    <button type="submit" className="message-submit" onClick={sendMessage}>
                        Send
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ChatUi;


