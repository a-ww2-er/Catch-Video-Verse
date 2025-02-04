import { Search, Bell, MessageSquare, Crown, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Navbar() {
  return (
    <nav className="flex h-14 items-center px-4 border-b gap-4 bg-background">
      <div className="flex items-center gap-6">
        <svg className="h-8 w-8 text-primary" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M11.64 5.93h1.43v4.28h-1.43m3.93-4.28H17v4.28h-1.43M7 2L3.43 5.57v12.86h4.28V22l3.58-3.57h2.85L20.57 12V2m-1.43 9.29l-2.85 2.85h-2.86l-2.5 2.5v-2.5H7.71V3.43h11.43Z"
          />
        </svg>
        <div className="flex gap-4">
          <Button variant="ghost" className="font-semibold">
            Following
          </Button>
          <Button variant="ghost" className="font-semibold">
            Browse
          </Button>
        </div>
      </div>

      <div className="flex-1 max-w-xl ml-4">
        <div className="relative">
          <Input
            type="search"
            placeholder="Search"
            className="w-full pl-4 pr-10"
          />
          <Button
            size="icon"
            variant="ghost"
            className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
          >
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-primary" />
        </Button>
        <Button variant="ghost" size="icon">
          <MessageSquare className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Crown className="h-5 w-5" />
        </Button>
        <Button
          variant="default"
          className="bg-primary text-primary-foreground"
        >
          Go Ad-Free
        </Button>
        <Button variant="ghost" size="icon">
          <User className="h-5 w-5" />
        </Button>
      </div>
    </nav>
  );
}
