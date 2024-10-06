import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  generateCode: publicProcedure.mutation(() => {
    return "x";
  }),
});

export type AppRouter = typeof appRouter;
