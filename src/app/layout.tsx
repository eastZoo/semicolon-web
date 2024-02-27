"use client";
import { RecoilRoot } from "recoil";
import StyledComponentsRegistry from "@/lib/styled-components.-registry";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import { GlobalStyle } from "@/styles/globals-style";
import Head from "./head";
import AuthGuard from "./authGuard";
import ErrorBoundary from "@/error/errorBoundary";
import { queryCacheOnError } from "@/error/errorState";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { usePathname } from "next/navigation";
import { DashboardTemplate } from "@/components/templates/DashboardTemplate";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = usePathname();

  /** 리액트 쿼리 전역 세팅 */
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,
        refetchOnMount: true,
        refetchOnWindowFocus: true,
        staleTime: 1000 * 1000,
      },
    },
    queryCache: new QueryCache({
      onError: (error, query) => queryCacheOnError(error, query),
    }),
  });

  return (
    <html lang="ko">
      <Head />
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <body>
            <ErrorBoundary>
              <QueryClientProvider client={queryClient}>
                <AuthGuard>
                  <StyledComponentsRegistry>
                    <>
                      <GlobalStyle />
                      {router?.includes("dashboard") ? (
                        //dashboard/* 로 시작하는 주소 일때
                        <DashboardTemplate>{children}</DashboardTemplate>
                      ) : (
                        <>{children}</>
                      )}
                    </>
                  </StyledComponentsRegistry>
                </AuthGuard>
              </QueryClientProvider>
            </ErrorBoundary>
            <ToastContainer />
          </body>
        </ThemeProvider>
      </RecoilRoot>
    </html>
  );
}
