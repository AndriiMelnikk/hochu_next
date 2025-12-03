import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@shared/ui/card";
import { Input } from "@shared/ui/input";
import { Button } from "@shared/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@shared/ui/avatar";
import { ScrollArea } from "@shared/ui/scroll-area";
import { Send, Search, MoreVertical } from "lucide-react";
import { Badge } from "@shared/ui/badge";

interface Message {
  id: number;
  sender: string;
  text: string;
  time: string;
  isOwn: boolean;
}

interface Conversation {
  id: number;
  name: string;
  lastMessage: string;
  time: string;
  unread: number;
  avatar: string;
  online: boolean;
}

const Chat = () => {
  const [selectedChat, setSelectedChat] = useState<number>(1);
  const [messageText, setMessageText] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  // Макетні дані розмов
  const conversations: Conversation[] = [
    {
      id: 1,
      name: "Марія Коваль",
      lastMessage: "Так, товар в наявності",
      time: "10:30",
      unread: 2,
      avatar: "",
      online: true,
    },
    {
      id: 2,
      name: "Дмитро Петренко",
      lastMessage: "Коли зможете зустрітись?",
      time: "09:15",
      unread: 0,
      avatar: "",
      online: false,
    },
    {
      id: 3,
      name: "Олена Сидоренко",
      lastMessage: "Дякую за швидку відповідь!",
      time: "Вчора",
      unread: 0,
      avatar: "",
      online: true,
    },
    {
      id: 4,
      name: "Андрій Мельник",
      lastMessage: "Можу запропонувати знижку 10%",
      time: "Вчора",
      unread: 1,
      avatar: "",
      online: false,
    },
  ];

  // Макетні повідомлення
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "Марія Коваль",
      text: "Доброго дня! Щодо вашого запиту на ноутбук MacBook Pro",
      time: "10:25",
      isOwn: false,
    },
    {
      id: 2,
      sender: "Ви",
      text: "Привіт! Так, цікавить",
      time: "10:26",
      isOwn: true,
    },
    {
      id: 3,
      sender: "Марія Коваль",
      text: "Маю в наявності модель 2023 року, 16GB RAM, 512GB SSD. Ціна 45000 грн",
      time: "10:27",
      isOwn: false,
    },
    {
      id: 4,
      sender: "Ви",
      text: "Чудово! Який стан? Є гарантія?",
      time: "10:28",
      isOwn: true,
    },
    {
      id: 5,
      sender: "Марія Коваль",
      text: "Стан відмінний, використовувався рік. Гарантія ще діє півроку",
      time: "10:29",
      isOwn: false,
    },
    {
      id: 6,
      sender: "Марія Коваль",
      text: "Так, товар в наявності",
      time: "10:30",
      isOwn: false,
    },
  ]);

  const handleSendMessage = () => {
    if (!messageText.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      sender: "Ви",
      text: messageText,
      time: new Date().toLocaleTimeString("uk-UA", { hour: "2-digit", minute: "2-digit" }),
      isOwn: true,
    };

    setMessages([...messages, newMessage]);
    setMessageText("");
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const selectedConversation = conversations.find(c => c.id === selectedChat);

  return (
    <div className="grid md:grid-cols-[350px_1fr] gap-6 h-[600px]">
      {/* Список розмов */}
      <Card>
        <CardHeader>
          <CardTitle>Повідомлення</CardTitle>
          <div className="relative mt-2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Пошук розмов..." className="pl-9" />
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <ScrollArea className="h-[480px]">
            {conversations.map((conv) => (
              <div
                key={conv.id}
                onClick={() => setSelectedChat(conv.id)}
                className={`flex items-start gap-3 p-4 cursor-pointer transition-colors hover:bg-muted/50 border-b ${
                  selectedChat === conv.id ? "bg-muted" : ""
                }`}
              >
                <div className="relative">
                  <Avatar>
                    <AvatarImage src={conv.avatar} />
                    <AvatarFallback className="bg-gradient-primary text-white">
                      {conv.name.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  {conv.online && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium truncate">{conv.name}</span>
                    <span className="text-xs text-muted-foreground">{conv.time}</span>
                  </div>
                  <p className="text-sm text-muted-foreground truncate">{conv.lastMessage}</p>
                </div>
                {conv.unread > 0 && (
                  <Badge className="bg-primary">{conv.unread}</Badge>
                )}
              </div>
            ))}
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Вікно чату */}
      <Card>
        <CardHeader className="border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Avatar>
                  <AvatarImage src={selectedConversation?.avatar} />
                  <AvatarFallback className="bg-gradient-primary text-white">
                    {selectedConversation?.name.split(" ").map(n => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                {selectedConversation?.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
                )}
              </div>
              <div>
                <h3 className="font-semibold">{selectedConversation?.name}</h3>
                <p className="text-xs text-muted-foreground">
                  {selectedConversation?.online ? "В мережі" : "Не в мережі"}
                </p>
              </div>
            </div>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-5 w-5" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0 flex flex-col">
          <ScrollArea className="flex-1 h-[440px] p-4" ref={scrollRef}>
            <div className="space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.isOwn ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[70%] rounded-lg p-3 ${
                      msg.isOwn
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <span className="text-xs opacity-70 mt-1 block">{msg.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          
          <div className="border-t p-4">
            <div className="flex gap-2">
              <Input
                placeholder="Напишіть повідомлення..."
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <Button onClick={handleSendMessage} variant="gradient">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Chat;

