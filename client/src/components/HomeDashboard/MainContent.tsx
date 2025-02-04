import { Card } from "@/components/ui/card";
import Image from "next/image";

export function MainContent() {
  return (
    <div className="flex-1 p-6">
      <div className="grid gap-6">
        <div className="aspect-video relative rounded-lg overflow-hidden">
          <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-sm rounded">
            LIVE
          </div>
          <Image
            src="https://i.pinimg.com/736x/39/8a/12/398a12c880571668c6763527b5aeab20.jpg"
            alt="Stream preview"
            className="object-cover"
            fill
          />
        </div>
        <div className="grid gap-4">
          <h2 className="text-2xl font-bold">
            Live channels we think you'll like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="aspect-video relative">
                  <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-sm rounded">
                    LIVE
                  </div>
                  <Image
                    src="/placeholder.svg"
                    alt="Stream preview"
                    className="object-cover"
                    fill
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold truncate">Stream Title</h3>
                  <p className="text-sm text-muted-foreground">
                    {Math.floor(Math.random() * 100)}K viewers
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
