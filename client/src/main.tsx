import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Root from "./root.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter([{ path: "/", element: <Root /> }]);
const queryClient = new QueryClient();

const rootElement = document.getElementById("root");
if (!rootElement) throw new ReferenceError("Root element not found");

createRoot(rootElement).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
