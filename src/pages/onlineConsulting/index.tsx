import { Container } from './style';
import { MdOutlineAssessment, MdOutlineContactSupport } from 'react-icons/md';
import { CgGym } from 'react-icons/cg';
import { VscFeedback } from 'react-icons/vsc';

export function OnlineConsulting() {
  return (
    <Container>
      <h1>Personal Trainer Online</h1>
      <h3>
        Você tem uma rotina agitada, cheia de compromissos e viagens, e está
        tendo dificuldades para manter sua rotina de treinos? A consultoria
        online Thgiago Batalha Personal Trainer pode ser a solução que você
        precisa!
      </h3>
      <h3>
        Com a consultoria online, você terá acesso a um treino personalizado que
        levará em conta suas restrições de horário e de local. Basta informar
        suas limitações na entrevista de treinamento e receberá um treino
        específico para realizar em casa, no hotel ou no parque, em qualquer dia
        ou horário.
      </h3>
      <h3>
        Além disso, a consultoria online de treino oferece flexibilidade para
        que você possa treinar de acordo com sua agenda, sem depender dos
        horários da academia ou de um personal trainer presencial. Tudo o que
        você precisa é de acesso à internet e a um dispositivo para acessar o
        conteúdo.
      </h3>
      <h3>
        Se você é alguém que viaja frequentemente, a consultoria online de
        treino pode ser uma ótima opção para manter a rotina de treinamento,
        mesmo fora de casa.
      </h3>
      <h3>
        Não perca mais tempo com desculpas e experimente já a consultoria online
        Thgiago Batalha Personal Trainer para alcançar seus objetivos de forma
        eficiente e segura, sem precisar se preocupar com horários e locais
        fixos de treinamento.
      </h3>
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
