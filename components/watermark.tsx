import Image from "next/image"

export function Watermark() {
  return (
    <div className="fixed bottom-4 right-4 z-10 pointer-events-none">
      <div className="relative">
        <Image
          src="/darkwings-logo-transparent.jpg"
          alt="DARKWING'S"
          width={120}
          height={60}
          className="opacity-20 hover:opacity-40 transition-opacity duration-300"
          priority={false}
        />
      </div>
    </div>
  )
}
