import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-white">
      <div className="flex flex-col items-center justify-center h-screen">
        <Image
          className=""
          src="/circa81-logo.png"
          alt="Circa 81 Logo"
          width={800}
          height={194}
          priority
        />
        <p className='gray'>Coming Soon...</p>
      </div>
    </main>
  )
}
