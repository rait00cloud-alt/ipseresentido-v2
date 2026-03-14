"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type BioPart = { text: string; bold?: boolean };

const team = [
  {
    id: 1,
    cardBg: "#ffffff",
    name: "Giovani Augusto dos Santos",
    role: "CRP 06/160127",
    bio: "Psicólogo com ampla experiência na prática clínica, atuando há anos no acompanhamento de adolescentes e adultos. Além da formação em Psicologia, possui trajetória acadêmica na área da Filosofia, com mestrado em Filosofia Moderna e Contemporânea. Também atua como professor universitário e supervisor clínico, mantendo constante diálogo entre prática, teoria e formação profissional.",
    image: "/psicologos/giovani-santos.jpeg",
    email: "contato@ipsersentido.com.br",
    whatsapp: "5511992401530"
  },
  {
    id: 2,
    cardBg: "#f5f5f5",
    name: "Monica Moreno",
    role: "CRP 06/206718",
    bio: [
      { text: "Meu trabalho é lhe oferecer um espaço seguro, ético e acolhedor, para " },
      { text: "expressar suas angústias, inseguranças, receios, medos e outras dificuldades", bold: true },
      { text: ", com " },
      { text: "respeito à você e a sua história", bold: true },
      { text: ", livre julgamentos e moralidades. Trabalho com " },
      { text: "adultos", bold: true },
      { text: ", guiando a psicoterapia como um " },
      { text: "processo de construção conjunta", bold: true },
      { text: " e compreendendo cada história de forma singular e integrada. Além disso, também exerço meu trabalho com " },
      { text: "crianças e jovens", bold: true },
      { text: ", em conjunto ao acompanhamento com seus familiares, e se necessário, em seu ambiente escolar, uma " },
      { text: "tríade essencial", bold: true },
      { text: " no desenvolvimento. Também ampliei meu acompanhamento para a " },
      { text: "orientação parental", bold: true },
      { text: ", onde ofereço apoio nesse papel desafiador, que é o de ser responsável por outra vida, " },
      { text: "favorecendo uma vivência", bold: true },
      { text: " mais consciente da " },
      { text: "parentalidade", bold: true },
      { text: ". Possuo experiência em psicoterapia clínica, atendimento ambulatorial e coordenação no contexto da saúde mental. Ao longo da minha trajetória, desenvolvi um olhar atento às diferentes dimensões da vida, minha atuação é marcada pela escuta atenta, pelo respeito à singularidade de cada paciente e sua realidade e pelo compromisso com a atualização constante na área da Psicologia. Cada processo é singular e meu objetivo não é oferecer respostas, mas favorecer reflexões para que você as encontre em seu caminho." },
    ] as BioPart[],
    image: "/psicologos/monica-moreno.jpg",
    email: "contato@ipsersentido.com.br",
    whatsapp: "5511992401530"
  },
  {
    id: 3,
    cardBg: "#ffffff",
    name: "Thayla M.",
    role: "CRP 06/197097",
    bio: "Sou formada em Psicologia, Mestre em Avaliação Psicológica com ênfase em Saúde Mental. Especialista em Avaliação Psicológica, Psicanálise e Saúde Mental e Psicopatologia. Dedico boa parte do meu tempo aos estudos, buscando constantemente aprimorar meus conhecimentos da prática clínica psicanalítica. Atualmente, atuo na área clínica com atendimentos a crianças, adultos e casais, além de avaliações.",
    image: "/psicologos/thayla-m.jpg",
    email: "contato@ipsersentido.com.br",
    whatsapp: "5511992401530"
  }
];

function MemberSection({ member, index }: { member: typeof team[number]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const renderBio = (bio: string | BioPart[]) =>
    Array.isArray(bio)
      ? bio.map((part, i) =>
          part.bold
            ? <strong key={i} className="font-[BrandonMedium]">{part.text}</strong>
            : <span key={i}>{part.text}</span>
        )
      : bio;

  return (
    <section
      className="w-full py-16 px-6 md:px-8"
      style={{ backgroundColor: member.cardBg }}
    >
      <div className=" mx-auto flex flex-col md:flex-row gap-10 items-start">

        {/* FOTO */}
        <div className="w-full sm:w-96 shrink-0">
          <img
            src={member.image}
            alt={member.name}
            className="w-full object-cover aspect-[3/4]"
          />
        </div>

        {/* CONTEÚDO */}
        <div className="flex flex-col gap-6 flex-1">

          {/* NOME + CRP */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-1 border-b border-[#d7a21e]/30 pb-4 w-full"
          >
            <h2 className="text-sm sm:text-md font-[BrandonBold] text-[#5e4e27] uppercase tracking-tight">
              {member.name}
            </h2>
            <p className="text-xs tracking-tight font-[BrandonBold] text-[#d7a21e] uppercase tracking-widest">
              {member.role}
            </p>
          </motion.div>

          {/* SOBRE MIM */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col gap-3"
          >
            <h3 className="text-lg tracking-tight font-[BrandonBold] text-[#5e4e27] uppercase">
              Sobre mim
            </h3>
            <p className="tracking-tight text-sm md:text-sm text-[#5e4e27] leading-relaxed font-[BrandonRegular]">
              {renderBio(member.bio)}
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default function TeamSection() {
  return (
    <div className="flex flex-col">
      {team.map((member, index) => (
        <MemberSection key={member.id} member={member} index={index} />
      ))}
      <hr className="border-t border-[#d7a21e]/30" />
      <div className="w-full py-4 px-6 md:px-16 bg-white flex justify-center">
        <a
          href="https://wa.me/5511992401530"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 border border-[#5e4e27] text-[#5e4e27] font-[BrandonBold] text-xs uppercase tracking-widest hover:bg-[#5e4e27] hover:text-white transition-colors"
        >
          Entre em contato
        </a>
      </div>
    </div>
  );
}
