import { FunctionOnlineSession } from './style';
import { MdOutlineAssessment, MdOutlineContactSupport } from 'react-icons/md';
import { CgGym } from 'react-icons/cg';
import { VscFeedback } from 'react-icons/vsc';

export function SessionFunctionOnline() {
  return (
    <section aria-label="Funcionalidades do programa de personal trainer online">
      <FunctionOnlineSession>
        <h2>
          Entendendo o funcionamento do programa de personal trainer online
        </h2>
        <h3>
          <MdOutlineAssessment
            className="assessment"
            alt="Ícone representando a avaliação física"
            aria-label="Ícone representando a avaliação física"
          />
          <span />
          Avaliação física
        </h3>
        <p>
          Para iniciar o programa de treinamento, realizaremos uma entrevista
          inicial para entendermos seus objetivos, histórico de saúde, lesões,
          condicionamento físico atual, preferências de treinamento e local onde
          serão realizados os exercícios. Essas informações serão fundamentais
          para personalizarmos seu plano de treino de forma eficiente e segura.
        </p>
        <h3>
          <MdOutlineAssessment
            className="assessment"
            alt="Ícone representando a prescrição de treino"
            aria-label="Ícone representando a prescrição de treino"
          />
          <span />
          Prescrição de treino
        </h3>
        <p>
          Com base nas informações coletadas na entrevista, desenvolverei uma
          periodização personalizada e exclusiva para você, com um plano de
          treinamento detalhado e eficaz para atingir seus objetivos de maneira
          eficiente e segura. Através desse programa individualizado, você terá
          melhores resultados em menos tempo.
        </p>
        <h3>
          <CgGym
            className="gym"
            alt="Ícone representando o treinamento"
            aria-label="Ícone representando o treinamento"
          />
          <span />
          Treinamento
        </h3>
        <p>
          Você terá acesso aos exercícios pelo seu celular e poderá realizar as
          sessões nos horários mais convenientes para você, tendo total
          flexibilidade para executar seu treino com comodidade e praticidade.
        </p>
        <h3>
          <MdOutlineContactSupport
            className="Support and questions"
            alt="Suporte e dúvidas"
            aria-label="Ícone do Suporte e dúvidas"
          />
          <span />
          Suporte e dúvidas
        </h3>
        <p>
          Estou disponível no WhatsApp durante o horário comercial para
          esclarecer suas dúvidas e auxiliá-lo(a) no que for necessário. Conte
          comigo para ajudá-lo(a) a atingir seus objetivos.
        </p>
        <h3>
          <VscFeedback
            className="Feedback"
            alt="Feedback"
            aria-label="Ícone do Feedback"
          />
          <span />
          Feedback e reavaliação
        </h3>
        <p>
          Após completar o treino, solicito que você compartilhe suas impressões
          comigo. Gostaria de saber como você percebeu sua evolução e quais
          foram suas impressões em relação a todas as etapas do treinamento.
          Essas informações serão utilizadas para prescrever um novo treino
          personalizado, visando sempre o seu melhor desempenho.
        </p>
      </FunctionOnlineSession>
    </section>
  );
}
