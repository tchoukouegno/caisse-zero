import { Home } from "./pages/Home";
import React from "react";
import { AcessApplication } from "./pages/AcessApplication";
import { IdentificationCaisseZero } from "./pages/IdentificationCaisseZero";
import { CompteZero } from "./pages/CompteZero";
import { HandleUser } from "./pages/HandleUser";
import { MenuApplication } from "./pages/MenuApplication";
import { CompteZeroExistant } from "./pages/CompteZeroExistant";
import { DettesCreances } from "./pages/DettesCreances";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ControlsCard } from "./components/ControlsCards";
import { ContactCaisseZero } from "./components/ContactCaisseZero";
import { Commentaire } from "./components/Commentaires";
import { Inscription } from "./components/Inscription";
import { RembDettes } from "./pages/RembDettes";
import { OperationsDiverses } from "./pages/OperationsDiverses";
import { Achats } from "./pages/Achats";
import { Ventes } from "./pages/Ventes";
import { TransfertCpt } from "./pages/TransfertCpt";

export function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ContactCaisse" element={<ContactCaisseZero />} />
          <Route path="/commentaire" element={<Commentaire />} />
          <Route path="/Inscription" element={<Inscription />} />
          <Route path="/AcessApplication" element={<AcessApplication />} />
          <Route path="/MenuAplication" element={<MenuApplication />} />
          <Route path="/DettesCreances" element={<DettesCreances />} />
          <Route path="/REMBDETTES" element={<RembDettes />} />
          <Route path="/TRANSACTIONDIV" element={<OperationsDiverses />} />
          <Route path="/ACHATS" element={<Achats />} />
          <Route path="/VENTES" element={<Ventes />} />
          <Route path="/TRANSFERTCPT" element={<TransfertCpt />} />
          <Route
            path="/compteZeroNouveau"
            element={<IdentificationCaisseZero />}
          />
          <Route path="/handleuser" element={<HandleUser />} />
          <Route path="/handleuserr" element={<HandleUser />} />
          <Route path="/compteZero" element={<CompteZero />} />
          <Route path="/compteZeroExistant" element={<CompteZeroExistant />} />
          <Route path="/controls" element={<ControlsCard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
