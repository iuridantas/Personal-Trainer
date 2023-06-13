import { Title, TrainingSession } from './style';

export function SessionTraining() {
  return (
    <section aria-label="Informações sobre o treinamento personalizado oferecido por Thiago Batalha">
      <Title>
        <h1>Serviços de treinamento personalizado - Conheça nossas opções</h1>
      </Title>
      <TrainingSession>
        <img
          src="/img/foto.png"
          alt="Foto do Personal Thiago Batalha"
          aria-label="Foto do Personal Thiago Batalha"
        />
        <div>
          <p>
            Meu objetivo é ajudá-lo a alcançar seus objetivos, seja para ganhar
            massa muscular, melhorar o desempenho esportivo, emagrecer, perder
            peso, melhorar o condicionamento físico, reabilitar-se, melhorar a
            qualidade de vida ou a saúde em geral. Para isso, utilizo diversas
            metodologias e modalidades de treinamento, personalizando seu
            programa de exercícios com base em seus objetivos e estado atual de
            saúde e condicionamento físico.
          </p>
          <p>
            Cada etapa do treinamento é adaptada para atender às suas
            necessidades individuais, maximizando os resultados e minimizando o
            risco de lesões. Isso garante que você treine na medida certa, nem
            mais, nem menos, obtendo os melhores resultados em menos tempo.
          </p>
          <p>
            Durante as sessões de treinamento, não apenas explico como fazer
            cada exercício, mas também as razões pelas quais eles devem ser
            realizados, para que você saiba exatamente o que está fazendo e por
            que é importante para seus objetivos específicos. Com meu
            acompanhamento, você poderá atingir seus objetivos de forma segura,
            eficiente e sustentável.
          </p>
        </div>
      </TrainingSession>
    </section>
  );
}
