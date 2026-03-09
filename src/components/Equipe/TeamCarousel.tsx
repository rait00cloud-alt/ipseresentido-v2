"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const team = [
  {
    id: 1,
    name: "Giovani Augusto dos Santos",
    role: "CRP 06/160127",
    bio: "Psicólogo com ampla experiência na prática clínica, atuando há anos no acompanhamento de adolescentes e adultos. Além da formação em Psicologia, possui trajetória acadêmica na área da Filosofia, com mestrado em Filosofia Moderna e Contemporânea. Também atua como professor universitário e supervisor clínico, mantendo constante diálogo entre prática, teoria e formação profissional.",
    image: "/psicologos/giovani-santos.jpeg",
    email: "contato@ipsersentido.com.br",
    whatsapp: "5511992401530"
  },
  {
    id: 2,
    name: "Monica Moreno",
    role: "CRP 06/206718",
    bio: "Meu trabalho é lhe oferecer um espaço seguro, ético e acolhedor, para expressar suas angústias, inseguranças, receios, medos e outras dificuldades, com respeito à você e a sua história, livre julgamentos e moralidades. Trabalho com adultos, guiando a psicoterapia como um processo de construção conjunta e compreendendo cada história de forma singular e integrada. Além disso, também exerço meu trabalho com crianças e jovens, em conjunto ao acompanhamento com seus familiares, e se necessário, em seu ambiente escolar, uma tríade essencial no desenvolvimento. Também ampliei meu acompanhamento para a orientação parental, onde ofereço apoio nesse papel desafiador, que é o de ser responsável por outra vida, favorecendo uma vivência mais consciente da parentalidade.",
    image: "/psicologos/monica-moreno.jpg",
    email: "contato@ipsersentido.com.br",
    whatsapp: "5511992401530"
  },
  {
    id: 3,
    name: "Thayla M.",
    role: "CRP 06/197097",
    bio: "Sou formada em Psicologia, Mestre em Avaliação Psicológica com ênfase em Saúde Mental. Especialista em Avaliação Psicológica, Psicanálise e Saúde Mental e Psicopatologia. Dedico boa parte do meu tempo aos estudos, buscando constantemente aprimorar meus conhecimentos da prática clínica psicanalítica. Atualmente, atuo na área clínica com atendimentos a crianças, adultos e casais, além de avaliações.",
    image: "/psicologos/thayla-m.jpg",
    email: "contato@ipsersentido.com.br",
    whatsapp: "5511992401530"
  }
];

export default function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 200 : -200,
      opacity: 0
    })
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = team.length - 1;
      if (next >= team.length) next = 0;
      return next;
    });
  };

  const currentMember = team[currentIndex];

  return (
    <>
    <div className="relative w-full h-full overflow-hidden flex items-start justify-center">

      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            
            x: { type: "spring", stiffness: 260, damping: 28 },
            opacity: { duration: 0.2 }
          }}
          className="w-full py-24  max-w-4xl flex flex-col items-center justify-start  px-6 md:px-16 gap-6"
        >
          {/* FOTO */}
          <div className="w-full max-w-xs aspect-[3/4] rounded-xl overflow-hidden shadow-2xl">
            <img
              src={currentMember.image}
              alt={currentMember.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-white rounded-xl p-8 flex flex-col gap-4 shadow-lg">

            {/* NOME */}
            <h2 className="text-3xl md:text-5xl font-[BrandonBold] text-[#5e4e27] text-center">
              {currentMember.name}
            </h2>

            {/* CRP */}
            <p className="text-lg md:text-xl font-[BrandonMedium] text-[#d7a21e] text-center">
              {currentMember.role}
            </p>

            {/* BIO */}
            <div className="max-w-3xl text-center text-sm md:text-base text-[#5e4e27] leading-relaxed font-[BrandonRegular] px-4">
              <p>{currentMember.bio}</p>
            </div>

            <div className="flex justify-end items-end">
              <img 
                src="/logo/favicon.png" 
                alt="Instituto de Psicologia Ser e Sentido"
                className="w-12 h-12 md:w-16 md:h-16 opacity-80"
              />
          </div>

          </div>

          {/* BOTÕES */}
          <div className="flex gap-4 pt-2">
            <a
              href={`mailto:${currentMember.email}`}
              className="flex items-center gap-2 px-6 py-3 bg-[#d7a21e] hover:bg-[#c89219] text-white rounded-full transition-colors font-[BrandonMedium]"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              E-mail
            </a>

            <a
              href={`https://wa.me/${currentMember.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-[#d7a21e] hover:bg-[#c89219] text-white rounded-full transition-colors font-[BrandonMedium]"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </motion.div>
      </AnimatePresence>

      

      {/* INDICADORES */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {team.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`h-3 rounded-full transition-all ${
              index === currentIndex
                ? "bg-[#d7a21e] w-8"
                : "bg-[#d7a21e]/30 w-3"
            }`}
          />
        ))}
      </div>

      
    </div>
    
    <div className="absolute top-1/2 -translate-y-1/2 w-full">

      <div className="flex flex-row justify-between w-full">
      {/* BOTÃO ESQUERDA */}
      <button
        onClick={() => paginate(-1)}
        className=" p-4 z-10"
      >
        <svg className="w-6 h-6 text-[#5e4e27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
        </svg>
      </button>

      {/* BOTÃO DIREITA */}
      <button
        onClick={() => paginate(1)}
        className="p-4 z-10"
      >
        <svg className="w-6 h-6 text-[#5e4e27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
        </svg>
      </button>
      </div>

      </div></>
  );
}