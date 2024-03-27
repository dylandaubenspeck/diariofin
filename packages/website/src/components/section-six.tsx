"use client";

import { AdaptiveImage } from "@/components/adaptive-image";
import { motion } from "framer-motion";
import aiLight from "public/ai-light.png";
import ai from "public/ai.png";
import { useState } from "react";

export function SectionSix() {
  const [isActive, setActive] = useState(false);

  return (
    <section
      className="border border-border rounded-2xl container bg-white dark:bg-[#121212] p-8 md:p-10 mb-12"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <div className="flex flex-col md:flex-row md:space-x-12">
        <motion.div
          animate={isActive ? { y: -5, x: -5 } : { y: 0, x: 0 }}
          initial={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <AdaptiveImage
            darkSrc={ai}
            lightSrc={aiLight}
            height={405}
            width={793}
            className="-mb-[1px] object-contain"
            alt="AI"
            quality={100}
          />
        </motion.div>
        <div className="mt-6 md:max-w-[40%] md:ml-8">
          <span className="text-primary border border-primary rounded-full self-start font-semibold px-3 text-xs py-1.5 mb-4">
            Em breve
          </span>

          <h3 className="font-medium text-xl md:text-2xl mt-4 mb-4">
            Seu CFO Virtual
          </h3>

          <p className="text-[#878787]">
            Com a IA da Fluxozen, você pode perguntar qualquer coisa e obter
            insights sobre o seu situação financeira. Entenda suas principais
            despesas e receitas fontes. Informe-se sobre transações sem recibos
            ou explore padrões de receita como taxa de consumo ou MRR.
            Aprendendo com seu financeiro os dados ajudam você a economizar
            dinheiro ou aumentar os ganhos no longo prazo.
          </p>

          <div className="mt-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={139}
              height={19}
              fill="none"
            >
              <path
                fill="currentColor"
                d="M93.464 9.513c0-2.932 1.884-4.98 4.497-4.98s4.497 2.048 4.497 4.98c0 2.933-1.884 4.98-4.497 4.98s-4.497-2.047-4.497-4.98Zm7.267 0c0-2.097-1.144-3.46-2.77-3.46-1.626 0-2.77 1.357-2.77 3.46 0 2.103 1.144 3.46 2.77 3.46 1.626 0 2.77-1.357 2.77-3.46Zm6.571 4.98c-.914 0-1.587-.365-2.029-.887v3.163h-1.615V7.28h1.615v.752c.442-.527 1.115-.886 2.029-.886 1.98 0 3.107 1.67 3.107 3.672 0 2.002-1.133 3.673-3.107 3.673Zm-2.074-3.875v.415c0 1.306.751 2.046 1.749 2.046 1.172 0 1.806-.914 1.806-2.26 0-1.345-.634-2.26-1.806-2.26-.998 0-1.749.73-1.749 2.059Zm9.549 3.874c-2.019 0-3.432-1.491-3.432-3.673 0-2.18 1.402-3.672 3.364-3.672 1.963 0 3.135 1.547 3.135 3.487v.539h-4.951c.123 1.21.846 1.951 1.884 1.951.796 0 1.424-.404 1.643-1.133l1.384.527c-.499 1.24-1.614 1.98-3.027 1.98v-.006Zm-.079-5.988c-.835 0-1.48.499-1.721 1.452h3.241c-.012-.78-.499-1.452-1.52-1.452Zm4.362 5.842V7.281h1.615v.752a2.495 2.495 0 0 1 1.952-.886c1.48 0 2.366 1.02 2.366 2.546v4.653h-1.615v-4.182c0-.875-.348-1.509-1.239-1.509-.729 0-1.469.538-1.469 1.548v4.143h-1.615.005Zm10.665-9.66h1.952l3.661 9.66H133.6l-.836-2.209h-4.171l-.819 2.21h-1.71l3.661-9.662Zm.942 1.911-1.508 4.037h3.039l-1.536-4.037h.005Zm7.441-1.912v9.661h-1.721v-9.66h1.721ZM89.516 8.23a4.54 4.54 0 0 0 .207-1.88 4.433 4.433 0 0 0-.588-1.794 4.539 4.539 0 0 0-2.08-1.878 4.492 4.492 0 0 0-2.787-.292A4.472 4.472 0 0 0 80.892.883a4.527 4.527 0 0 0-4.317 3.13 4.471 4.471 0 0 0-1.727.762 4.46 4.46 0 0 0-1.262 1.407 4.506 4.506 0 0 0-.583 2.742c.1.954.499 1.85 1.144 2.563a4.542 4.542 0 0 0-.208 1.878 4.52 4.52 0 0 0 .589 1.794 4.539 4.539 0 0 0 2.08 1.879c.875.392 1.85.493 2.787.291a4.472 4.472 0 0 0 3.376 1.503c.958 0 1.895-.297 2.668-.863a4.536 4.536 0 0 0 1.649-2.271 4.471 4.471 0 0 0 1.727-.763 4.528 4.528 0 0 0 1.262-1.407c.482-.83.684-1.789.583-2.742a4.492 4.492 0 0 0-1.144-2.557Zm-6.706 9.425c-.892 0-1.587-.275-2.187-.78.028-.017.073-.039.106-.061l3.572-2.064a.556.556 0 0 0 .213-.213c.05-.09.079-.19.079-.292V9.21l1.508.875s.017.011.023.017c0 .005.005.017.01.022v4.172c0 1.89-1.575 3.364-3.324 3.364v-.005Zm-7.261-3.084a3.328 3.328 0 0 1-.399-2.254c.028.017.073.044.107.061l3.572 2.064c.09.05.19.078.291.078.101 0 .202-.028.292-.078l4.362-2.518v1.772c0 .006-.011.017-.017.023l-3.61 2.085a3.379 3.379 0 0 1-2.552.337 3.355 3.355 0 0 1-2.04-1.565l-.007-.005Zm-.943-7.8a3.346 3.346 0 0 1 1.75-1.474v4.25c0 .1.028.202.078.291.05.09.124.163.213.213l4.363 2.518-1.508.875s-.017.005-.023.01h-.028l-3.61-2.085a3.366 3.366 0 0 1-1.565-2.04 3.378 3.378 0 0 1 .33-2.552V6.77Zm12.41 2.888L82.652 7.14l1.508-.869s.017-.005.022-.011h.029l3.61 2.086a3.367 3.367 0 0 1 1.671 3.196 3.353 3.353 0 0 1-.678 1.75c-.387.51-.908.897-1.508 1.115v-4.25c0-.101-.028-.202-.079-.292a.556.556 0 0 0-.213-.213v.006Zm1.502-2.265s-.073-.045-.107-.062L84.84 5.269a.582.582 0 0 0-.583 0l-4.363 2.517V6.014c0-.005.011-.017.017-.022l3.61-2.086a3.35 3.35 0 0 1 3.6.151 3.384 3.384 0 0 1 1.391 3.331l.006.006Zm-9.448 3.112-1.508-.875s-.017-.011-.023-.017a.042.042 0 0 0-.011-.022V5.42c0-.64.185-1.262.527-1.806.342-.538.83-.97 1.413-1.239a3.407 3.407 0 0 1 1.856-.291 3.367 3.367 0 0 1 1.721.751c-.028.017-.073.04-.106.062L79.367 4.96a.556.556 0 0 0-.213.213.598.598 0 0 0-.079.292V10.5l-.005.006Zm.818-1.767 1.94-1.121 1.94 1.121v2.243l-1.94 1.122-1.94-1.122V8.74ZM2.605 10.607v3.74H.884V4.684h3.863c2.153 0 3.499 1.01 3.499 2.961 0 1.951-1.346 2.96-3.499 2.96H2.605Zm0-1.48h2.047c1.239 0 1.895-.539 1.895-1.481 0-.942-.662-1.48-1.895-1.48H2.605v2.96Zm12.667 1.693c0 2.192-1.413 3.672-3.404 3.672-1.99 0-3.403-1.48-3.403-3.672 0-2.193 1.413-3.673 3.403-3.673s3.404 1.48 3.404 3.673Zm-5.181 0c0 1.44.684 2.315 1.777 2.315 1.094 0 1.778-.874 1.778-2.315 0-1.441-.684-2.316-1.778-2.316-1.093 0-1.777.875-1.777 2.316Zm9.605-3.538h1.334l1.267 4.681 1.25-4.681h1.604l-2.125 7.065h-1.401l-1.29-4.632-1.29 4.632h-1.402l-2.125-7.065h1.654l1.279 4.681 1.25-4.681h-.005Zm9.111 7.21c-2.018 0-3.431-1.491-3.431-3.672 0-2.182 1.402-3.673 3.364-3.673 1.963 0 3.135 1.548 3.135 3.488v.538h-4.952c.124 1.211.847 1.951 1.884 1.951.797 0 1.425-.404 1.643-1.133l1.385.528c-.499 1.239-1.615 1.979-3.028 1.979v-.006Zm-.078-5.988c-.836 0-1.48.499-1.721 1.452h3.24c-.01-.78-.499-1.452-1.52-1.452Zm8.304-1.24V8.88a3.965 3.965 0 0 0-.594-.04c-1.02 0-1.806.662-1.806 1.789v3.712h-1.615V7.276h1.615v1.048c.309-.661 1.037-1.087 1.94-1.087.19 0 .337.01.46.028Zm3.695 7.228c-2.018 0-3.431-1.491-3.431-3.672 0-2.182 1.401-3.673 3.364-3.673 1.962 0 3.134 1.548 3.134 3.488v.538h-4.95c.123 1.211.846 1.951 1.883 1.951.796 0 1.424-.404 1.643-1.133l1.385.528c-.499 1.239-1.615 1.979-3.028 1.979v-.006Zm-.078-5.988c-.836 0-1.48.499-1.722 1.452h3.241c-.011-.78-.499-1.452-1.52-1.452Zm6.958 5.988c-1.98 0-3.106-1.67-3.106-3.672 0-2.002 1.132-3.673 3.106-3.673.914 0 1.587.364 2.03.886V4.68h1.615v9.66h-1.615v-.74c-.443.528-1.116.887-2.03.887v.005Zm2.075-3.874c0-1.335-.752-2.058-1.75-2.058-1.172 0-1.805.914-1.805 2.26 0 1.345.633 2.26 1.805 2.26.998 0 1.75-.74 1.75-2.047v-.415Zm9.75 3.874c-.913 0-1.586-.364-2.03-.886v.74H55.79v-9.66h1.615v3.352c.443-.527 1.116-.885 2.03-.885 1.979 0 3.106 1.67 3.106 3.672 0 2.002-1.133 3.673-3.106 3.673v-.006Zm-2.074-3.874v.415c0 1.306.751 2.046 1.75 2.046 1.171 0 1.805-.914 1.805-2.26 0-1.345-.634-2.26-1.806-2.26-.998.001-1.75.73-1.75 2.059Zm9.297 4.385c-.404 1.076-1.02 1.816-2.49 1.816-.336 0-.432-.01-.662-.039v-1.357c.213.028.337.04.539.04.538 0 .796-.146 1.02-.713l.27-.661-2.569-6.807h1.694l1.738 4.95 1.693-4.95h1.671l-2.904 7.726v-.005Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
