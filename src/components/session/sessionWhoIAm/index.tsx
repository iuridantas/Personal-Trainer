import { WhoIAmSession } from './style';

export function SessionWhoIAm() {
  return (
    <section aria-label="Informações sobre Thiago Batalha, personal trainer">
      <WhoIAmSession>
        <img
          src="/img/foto.png"
          alt="Foto do Personal Thiago Batalha"
          aria-label="Foto do Personal Thiago Batalha"
        />
        <div>
          <h1>
            Thiago Batalha
            <span>Cref: 003605-G/SE</span>
          </h1>
          <p>
            Com a minha vasta experiência de mais de 10 anos em treinamento
            esportivo personalizado, já tive a oportunidade de ajudar inúmeros
            alunos a alcançarem resultados significativos em relação aos seus
            objetivos.
          </p>
          <p>
            O meu método de trabalho é pautado na excelência do serviço
            prestado, através de um planejamento minucioso que considera as
            limitações e necessidades de cada aluno, sempre com base em
            princípios éticos e profissionais. Além disso, tenho um
            comprometimento absoluto em ajudar meus alunos a atingirem seus
            objetivos.
          </p>
        </div>
      </WhoIAmSession>
    </section>
  );
}
