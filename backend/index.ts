import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "./router";

export default {
  async fetch(request: Request): Promise<Response> {
    return fetchRequestHandler({
      endpoint: "/trpc",
      req: request,
      router: appRouter,
      createContext: () => ({}),
      responseMeta: () => {
        return {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
          },
        };
      },
    });
  },
};
