import { createRootRoute, Outlet } from "@tanstack/react-router";
import { StarryBackground } from "../components/StarryBackground";

export const Route = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <StarryBackground />
    </>
  ),
});
