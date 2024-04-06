import { UserButton } from "@clerk/nextjs";
import Chat from './chat';
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-100 dark:bg-gray-800">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        
        <UserButton />
                {/* Chat Component Wrapper */}
                <div className="flex flex-col items-center justify-center w-full lg:w-2/3 xl:w-1/2 mt-12 mb-12">
          <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg dark:bg-gray-900">
            <h2 className="text-xl font-semibold text-center mb-4 dark:text-white">Chat with GPT-3.5</h2>
            <Chat />
          </div>
        </div>
        {/* End of Chat Component Wrapper */}
      </div>
    </main>
  );
}
