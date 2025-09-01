import { MessageSquare, Phone, Headphones } from "lucide-react";

const LiveChat = () => {
  const handleLiveChat = () => {
    window.open("https://wa.me/254720496076?text=Hello%20VertaTech%2C%20I%27m%20interested%20in%20your%20services", "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex flex-col items-center">
        <span className="text-sm font-medium text-foreground mb-3 bg-background/90 px-3 py-2 rounded-lg shadow-md">
          Live Chat Support
        </span>
        <button
          onClick={handleLiveChat}
          className="bg-green-500 hover:bg-green-600 text-white p-5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          aria-label="Start live chat via WhatsApp"
        >
          <div className="flex items-center justify-center">
            <MessageSquare className="h-8 w-8 group-hover:animate-pulse" />
            <Headphones className="h-6 w-6 ml-1 group-hover:animate-bounce" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default LiveChat;