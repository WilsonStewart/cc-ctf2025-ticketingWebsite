import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/superticket.png"
          alt="Superticket logo"
          width={700}
          height={0}
          priority
        />

        <form
          action="/api/login"
          method="POST"
          className="flex gap-4 items-center flex-col sm:flex-row"
        >
          <input
            id="username"
            name="username"
            type="text"
            placeholder="username"
            className="border-2 p-1 rounded-md"
          ></input>
          <input
            id="password"
            name="password"
            placeholder="password"
            type="password"
            className="border-2 p-1 rounded-md"
          ></input>
          <button
            type="submit"
            className="cursor-pointer border-2 p-1 pl-3 pr-3 rounded-md"
          >
            Login
          </button>
        </form>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <div id="flag_29271638-ef7f-4e5e-8189-701a59d1584c"></div>
      </footer>
    </div>
  );
}
