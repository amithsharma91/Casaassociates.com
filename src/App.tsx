import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import { AppRoutes } from "./router";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import WhatsAppFloat from "./components/feature/WhatsAppFloat";
import ExitIntentPopup from "./components/feature/ExitIntentPopup";
import ScrollToTop from "./components/feature/ScrollToTop";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter basename={__BASE_PATH__}>
        <ScrollToTop />
        <Suspense
          fallback={
            <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-950">
              <div className="flex flex-col items-center gap-5">
                <div className="relative w-12 h-12">
                  <div className="absolute inset-0 rounded-full border-2 border-neutral-800"></div>
                  <div className="absolute inset-0 rounded-full border-2 border-t-white border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
                </div>
                <p className="text-white/40 text-xs tracking-[0.2em] uppercase font-medium">
                  Loading
                </p>
              </div>
            </div>
          }
        >
          <AppRoutes />
        </Suspense>
        <WhatsAppFloat />
        <ExitIntentPopup />
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;