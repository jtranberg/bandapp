import React, { useState, useEffect } from 'react';
import { collection, addDoc, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from './app/firebase'; // Correct the path based on your directory structure


// Define the type for a message
interface Message {
  id: string;
  text: string;
  createdAt: Date;
}

const ChatComponent: React.FC = () => {
  // Specify the type of messages as an array of Message objects
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('createdAt', 'asc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedMessages = snapshot.docs.map((doc) => ({
        id: doc.id,
        text: doc.data().text as string, // Type assertion to ensure it's a string
        createdAt: doc.data().createdAt.toDate() as Date, // Convert Firestore timestamp to Date
      }));
      setMessages(fetchedMessages); // Set state with fetched messages
    });

    return () => unsubscribe();
  }, []);

  const sendMessage = async () => {
    if (message) {
      await addDoc(collection(db, 'messages'), {
        text: message,
        createdAt: new Date(),
      });
      setMessage(''); // Clear the input after sending the message
    }
  };

  return (
    <div>
      <div className="chat-messages">
        {messages.map((msg) => (
          <div key={msg.id}>{msg.text}</div>
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
