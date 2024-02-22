"use client";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const ChatPage = () => {
  const [socket, setSocket] = useState(undefined);

  useEffect(() => {
    const socket = io("http://localhost:3000");
  }, []);
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
};

export default ChatPage;
