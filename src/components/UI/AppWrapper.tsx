

import HeaderComponent from '../UI/Header';
import FooterComponent from '../UI/Footer';
import FloatingWhatsApp from '../UI/FloatingWhatsApp';

export default function AppWrapper({ children }:any) {
  return (
    <>
    
      <HeaderComponent />
      <main className="pt-[72px]">{children}</main>
      <FooterComponent />
      <FloatingWhatsApp />
    </>
  );
}