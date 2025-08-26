import { MessageCircle } from "lucide-react";

const LiveChat = () => {
  const handleLiveChat = () => {
    window.open("https://wa.me/254720496076?text=Hello%20VertaTech%2C%20I%27m%20interested%20in%20your%20services", "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex flex-col items-center">
        <span className="text-xs font-medium text-foreground mb-2 bg-background/90 px-2 py-1 rounded-md shadow-sm">
          Live Chat
        </span>
        <button
          onClick={handleLiveChat}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          aria-label="Start live chat via WhatsApp"
        >
          <MessageCircle className="h-6 w-6 group-hover:animate-pulse" />
        </button>
      </div>
    </div>
  );
};

export default LiveChat;