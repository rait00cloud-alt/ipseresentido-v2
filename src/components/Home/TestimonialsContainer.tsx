"use client";

export default function TestimonialsContainer() {
  return (
    <section className="w-full py-16 px-8 md:px-16 bg-[#faf8f5]">
      <div className="max-w-6xl mx-auto">
        
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-[BrandonBold] text-[#5e4e27] mb-4">
            Depoimentos
          </h2>
          <p className="text-lg text-[#6a5a4a] font-[BrandonRegular] max-w-2xl mx-auto">
            Estamos iniciando nossa jornada e gostaríamos muito de ouvir sua experiência. 
            Seu depoimento é importante para nós e pode ajudar outras pessoas.
          </p>
        </div>

        {/* Card de Call to Action */}
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            
            {/* Ícone */}
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-[#d7a21e]/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-[#d7a21e]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>

            <h3 className="text-2xl font-[BrandonBold] text-[#5e4e27]">
              Deixe seu Depoimento
            </h3>

            <p className="text-[#6a5a4a] font-[BrandonRegular] leading-relaxed">
              Sua opinião é fundamental para continuarmos oferecendo um atendimento de qualidade. 
              Compartilhe sua experiência conosco no Google e ajude outras pessoas a conhecerem nosso trabalho.
            </p>

            {/* Botão */}
            <a
              href="https://g.page/r/CdOx5PIPck08EAI/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#d7a21e] hover:bg-[#c89219] text-white rounded-full font-[BrandonBold] text-lg transition-colors shadow-md hover:shadow-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Avaliar no Google
            </a>

            <p className="text-sm text-[#6a5a4a] font-[BrandonLight]">
              Leva apenas alguns minutos e faz toda a diferença!
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
