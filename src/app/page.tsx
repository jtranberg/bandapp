"use client"; // Ensure it's a client component for useEffect to work

import React, { useState, useEffect } from 'react';
import { collection, addDoc, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from './firebase'; // Make sure this points to your firebase.ts file

// Define message structure
interface Message {
  id: string;
  text: string;
  createdAt: Date;
}

const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('createdAt', 'asc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedMessages = snapshot.docs.map((doc) => ({
        id: doc.id,
        text: doc.data().text as string,
        createdAt: doc.data().createdAt.toDate() as Date,
      }));
      setMessages(fetchedMessages);
      setLoading(false); // Disable loading once messages are fetched
    });

    return () => unsubscribe();
  }, []);

  const sendMessage = async () => {
    if (message.trim() === '') {
      alert('Please enter a message');
      return;
    }

    await addDoc(collection(db, 'messages'), {
      text: message,
      createdAt: new Date(),
    });

    setMessage(''); // Clear the input after sending
  };

  const formatDate = (date: Date) => {
    return `${date.getHours()}:${date.getMinutes()}`;
  };

  return (
    
    <div className="chat-container">
      {loading ? <p>Loading...</p> : null}
      <div className="chat-messages">
        {messages.map((msg) => (
          <div key={msg.id}>
            <p>{msg.text}</p>
            <small>{formatDate(msg.createdAt)}</small>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatComponent;
