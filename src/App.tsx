import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CategoryPage from "./pages/CategoryPage";
import ServiceDetail from "./pages/ServiceDetail";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import PoojaPage from "./pages/PoojaPage";
import KalyanamPage from "./pages/KalyanamPage";
import AbhishekamPage from "./pages/AbhishekamPage";
import HomamPage from "./pages/HomamPage";
import VratamsPage from "./pages/VratamsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          <Route path="/service/:serviceId" element={<ServiceDetail />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/pooja" element={<PoojaPage />} />
          <Route path="/kalyanam" element={<KalyanamPage />} />
          <Route path="/abhishekam" element={<AbhishekamPage />} />
          <Route path="/homam" element={<HomamPage />} />
          <Route path="/vratams" element={<VratamsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
