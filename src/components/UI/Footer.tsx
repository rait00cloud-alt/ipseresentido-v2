import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FooterComponent = () => {
  const [currentPath, setCurrentPath] = useState("/");
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  return (
    <>
      <footer className="relative flex flex-col w-full justify-center items-center backdrop-blur-sm pt-1 gap-1 overflow-y-hidden">
        {/* Links + Socials */}
        <div className="flex flex-row w-full items-center justify-center px-8 py-2">
          {/* Left links */}
          <div className="flex flex-row gap-6 items-center justify-center text-center">
        
            <a
              href="/termos-e-privacidade"
              className="font-[BrandonBold] tracking-tight text-sm text-black underline underline-offset-2"
            >
              Termos e Privacidade
            </a>
          </div>
       


        </div>

        {/* Créditos */}
        <div className="flex flex-col gap-2 items-center justify-between w-full  px-8 py-4 sm:px-48 sm:py-8 sm:gap-8  border-t border-black/20">
        <div className="w-full bg-white rounded-xl drop-shadow-sm sm:p-8 px-2 py-8">
  <div className="max-w-6xl mx-auto px-6">
    
    {/* Container principal */}
    <div className="flex flex-col md:flex-row gap-10">

      {/* Card de informações */}
      <div className="flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-[#4a4a4a]">

          {/* Coluna esquerda — Contatos */}
          <div className="space-y-4 text-left">
            <div className="flex items-center gap-3 tracking-tight">
              <span className="text-2xl font-[BrandonBold] tracking-tight">
                Instituto de Psicologia Ser e Sentido
              </span>
            </div>

            <p className="text-sm font-[BrandonRegular]">(11) 99240-1530</p>

            <p className="text-sm font-[BrandonRegular]">
              contato@ipseresentido.com.br
            </p>

            <p className="text-sm font-[BrandonRegular] pt-2">
              www.ipseresentido.com.br
            </p>
          </div>

          {/* Coluna direita — Endereço */}
          <div className="flex flex-col gap-8">
          <div className="space-y-8 text-left">
            <div>
              <h4 className="font-[BrandonBold] mb-2 text-base">
                Unidade — Bragança Paulista
              </h4>

              <p className="text-sm font-[BrandonRegular]">
                Centro Empresarial Jaguari - Jd. do Lago - Av. Marcelo
                Stephanie nº 15 - Módulo 68 - Sala 1 - 1º andar. CEP
                12914-490
              </p>
            </div>
          </div>
           {/* Google Maps */}
      <div className="flex-1 w-full md:h-auto rounded-xl sm:aspect-video overflow-hidden">
        <iframe
          className="w-full sm:h-full h-[200px] border-0"
          loading="lazy"
          allowFullScreen
           src="https://www.google.com/maps/embed?pb=!4v1773494724288!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRDkxWnF3S2c.!2m2!1d-22.96961644080089!2d-46.53508149827748!3f99.80888425030565!4f1.1225062172494376!5f0.7820865974627469"
        ></iframe>
      </div>

       <p className="text-sm font-[BrandonRegular]">
             Horário de funcionamento das 7h às 21h de segunda a sexta com hora
marcada.
O local possui estacionamento pago e estacionamento na rua gratuito,
não tem cobertura
              </p>
      </div>
        </div>
      </div>

     

    </div>
  </div>
</div>
      <div className="flex flex-col gap-2 justify-center items-center">
        <img
            src="/logo/favicon-instituto.png"
            alt="IPSS"
            className="w-10 h-10"
          />
          <p className="font-[BrandonLight] text-xs tracking-tighter text-[#131819] ">
            Produced by Industrie Brasil
          </p>
          </div>
        </div>
      </footer>

      
    </>
  );
};

export default FooterComponent;
