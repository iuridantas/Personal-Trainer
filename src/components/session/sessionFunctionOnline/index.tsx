import { Container } from './style';
import { MdOutlineAssessment, MdOutlineContactSupport } from 'react-icons/md';
import { CgGym } from 'react-icons/cg';
import { VscFeedback } from 'react-icons/vsc';

export function SessionFunctionOnline() {
  return (
    <Container>
      <h2>Entendendo o funcionamento do programa de personal trainer online</h2>
      <h2>
        <MdOutlineAssessment
          className="assessment"
          alt="Ícone da Avaliação física"
        />
        <span />
        Avaliação física
      </h2>
      <h3>
        Para iniciar o programa de treinamento, realizaremos uma entrevista
        inicial para entendermos seus objetivos, histórico de saúde, lesões,
        condicionamento físico atual, preferências de treinamento e local onde
        serão realizados os exercícios. Essas informações serão fundamentais
        para personalizarmos seu plano de treino de forma eficiente e segura.
      </h3>
      <h2>
        <MdOutlineAssessment
          className="assessment"
          alt="Ícone da Avaliação física"
        />
        <span />
        Prescrição de treino
      </h2>
      <h3>
        Com base nas informações coletadas na entrevista, desenvolverei uma
        periodização personalizada e exclusiva para você, com um plano de
        treinamento detalhado e eficaz para atingir seus objetivos de maneira
        eficiente e segura. Através desse programa individualizado, você terá
        melhores resultados em menos tempo.
      </h3>
      <h2>
        <CgGym className="gym" alt="Ícone do Treinamento" />
        <span />
        Treinamento
      </h2>
      <h3>
        Você terá acesso aos exercícios pelo seu celular e poderá realizar as
        sessões nos horários mais convenientes para você, tendo total
        flexibilidade para executar seu treino com comodidade e praticidade.
      </h3>
      <h2>
        <MdOutlineContactSupport
          className="Support and questions"
          alt="Suporte e dúvidas"
        />
        <span />
        Suporte e dúvidas
      </h2>
      <h3>
        Estou disponível no WhatsApp durante o horário comercial para esclarecer
        suas dúvidas e auxiliá-lo(a) no que for necessário. Conte comigo para
        ajudá-lo(a) a atingir seus objetivos.
      </h3>
      <h2>
        <VscFeedback className="Feedback" alt="Feedback" />
        <span />
        Feedback e reavaliação
      </h2>
      <h3>
        Após completar o treino, solicito que você compartilhe suas impressões
        comigo. Gostaria de saber como você percebeu sua evolução e quais foram
        suas impressões em relação a todas as etapas do treinamento. Essas
        informações serão utilizadas para prescrever um novo treino
        personalizado, visando sempre o seu melhor desempenho.
      </h3>
    </Container>
  );
}