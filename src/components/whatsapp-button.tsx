export default function WhatsappButton() {
  return (
    <div className="relative">
      <a
        target="_blank"
        href="https://wa.me/5514996767312"
        className="z-20 text-white flex flex-col shrink-0 grow-0 justify-around
                    fixed bottom-0 right-5 rounded-lg
                    mr-1 mb-5 lg:mr-5 lg:mb-5 xl:mr-10 xl:mb-10"
      >
        <div className="p-3 rounded-full border-4 border-white bg-lime-500 hover:scale-105">
          <svg
            className="w-5 h-5 lg:w-8 lg:h-8 xl:w-10 xl:h-10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
            <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
          </svg>
        </div>
      </a>
    </div>
  );
}
