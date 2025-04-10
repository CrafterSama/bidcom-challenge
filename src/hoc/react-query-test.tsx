import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

export function createTestQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false, // para evitar reintentos en tests
        cacheTime: 0, // no mantener cache entre pruebas
      },
    },
  });
}

export function renderWithQueryClient(children: ReactNode) {
  const queryClient = createTestQueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
