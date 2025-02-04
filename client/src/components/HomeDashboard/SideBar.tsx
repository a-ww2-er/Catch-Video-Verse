import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const channels = [
  {
    name: "Agent00",
    game: "Marvel Rivals",
    viewers: "9.7K",
    avatar: "/placeholder.svg",
  },
  {
    name: "Jynxzi",
    game: "Tom Clancy's Rainbow Six Siege",
    viewers: "44.8K",
    avatar: "/placeholder.svg",
  },
  {
    name: "2xRaKaiOffline",
    game: "Just Chatting",
    viewers: "63",
    avatar: "/placeholder.svg",
  },
  {
    name: "pinofinochannel",
    game: "Talk Shows & Podcasts",
    viewers: "15",
    avatar: "/placeholder.svg",
  },
  {
    name: "SypherPK",
    game: "Fortnite",
    viewers: "2.6K",
    avatar: "/placeholder.svg",
  },
];

export function Sidebar() {
  return (
    <div className="w-60 border-r bg-background flex flex-col">
      <div className="p-3 flex items-center justify-between border-b">
        <h2 className="font-semibold">For You</h2>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <ChevronLeft className="h-4 w-4" />
        </Button>
      </div>
      <ScrollArea className="flex-1">
        <div className="p-3">
          <h3 className="mb-4 text-sm font-semibold">LIVE CHANNELS</h3>
          <div className="space-y-4">
            {channels.map((channel) => (
              <div key={channel.name} className="flex gap-3">
                <Avatar className="h-9 w-9">
                  <AvatarImage src={channel.avatar} />
                  <AvatarFallback>
                    {channel.name.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 overflow-hidden">
                  <h4 className="text-sm font-medium leading-none truncate">
                    {channel.name}
                  </h4>
                  <p className="text-sm text-muted-foreground truncate">
                    {channel.game}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {channel.viewers} viewers
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
