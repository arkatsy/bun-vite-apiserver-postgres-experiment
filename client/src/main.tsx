import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Root from "./root.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./components/theme-provider.tsx";
import "@fontsource-variable/nunito";

const router = createBrowserRouter([{ path: "/", element: <Root /> }]);
const queryClient = new QueryClient();

const rootElement = document.getElementById("root");
if (!rootElement) throw new ReferenceError("Root element not found");

createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>
);
