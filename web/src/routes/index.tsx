import { useMutation } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { trpc } from "../trpc";

export const Route = createFileRoute("/")({
  component: () => {
    const { isPending, mutateAsync } = useMutation({
      mutationFn: () => trpc.generateCode.mutate(),
    });

    return (
      <div className="flex items-center flex-col justify-center h-screen">
        <header className="text-center max-w-96 text-balance">
          <h1 className="text-4xl font-semibold flex items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="fill-current text-inherit size-[1em]"
            >
              <path d="M11 8H13V14H11V8M12 20C8.13 20 5 16.87 5 13S8.13 6 12 6C15.19 6 17.88 8.14 18.72 11.05C19 11 19.24 11 19.5 11C19.94 11 20.38 11.05 20.8 11.13C20.5 9.74 19.89 8.46 19.03 7.39L20.45 5.97C20 5.46 19.55 5 19.04 4.56L17.62 6C16.07 4.74 14.12 4 12 4C7.03 4 3 8.03 3 13S7.03 22 12 22C12.87 22 13.7 21.87 14.5 21.65C14.05 21.11 13.7 20.5 13.45 19.85C13 19.95 12.5 20 12 20M15 1H9V3H15V1M19 13.5V12L16.75 14.25L19 16.5V15C20.38 15 21.5 16.12 21.5 17.5C21.5 17.9 21.41 18.28 21.24 18.62L22.33 19.71C22.75 19.08 23 18.32 23 17.5C23 15.29 21.21 13.5 19 13.5M19 20C17.62 20 16.5 18.88 16.5 17.5C16.5 17.1 16.59 16.72 16.76 16.38L15.67 15.29C15.25 15.92 15 16.68 15 17.5C15 19.71 16.79 21.5 19 21.5V23L21.25 20.75L19 18.5V20Z" />
            </svg>
            SyncTS
          </h1>
          <p className="text-lg text-gray-300 mt-2">
            Sync video timestamps across devices for platforms like YouTube.{" "}
          </p>
        </header>
        <div className="rounded-lg bg-gray-700 max-w-2xl mt-8 flex w-full divide-x-2 divide-gray-600">
          <div className="w-1/2 text-center p-5">
            <h2 className="uppercase font-semibold text-sm text-gray-300 pb-3">
              Enter your code
            </h2>
            <div className="flex gap-2 items-center">
              <input
                type="text"
                className="bg-gray-800 text-white h-10 px-3 rounded-lg w-full"
                placeholder="Code"
              />
              <button className="bg-blue-600 text-white px-4 h-10 rounded-lg ">
                Enter
              </button>
            </div>
          </div>
          <div className="w-1/2 text-center p-5">
            <h2 className="uppercase font-semibold text-sm text-gray-300 pb-3">
              Generate a new code
            </h2>
            <div className="">
              <button
                className="bg-blue-600 text-white px-4 h-10 w-full rounded-lg disabled:opacity-50 disabled:pointer-events-none"
                disabled={isPending}
                onClick={() => mutateAsync()}
              >
                Generate
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  },
});
