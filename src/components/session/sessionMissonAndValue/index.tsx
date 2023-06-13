import { MissionValueSession } from './style';

export function SessionMissonAndValue() {
  return (
    <section aria-label="Informações sobre a missão e valores">
      <MissionValueSession>
        <h2>Missão</h2>
        <p>
          Minha missão é fornecer aos meus alunos o que há de mais eficaz na
          área de preparação física, com o objetivo de oferecer uma experiência
          única a cada dia de treinamento e resultados sólidos e duradouros.
          Busco ir além dos simples ganhos estéticos e performance física,
          trabalhando para melhorar significativamente a qualidade de vida e a
          saúde física e mental de cada indivíduo que confia em meu trabalho.
        </p>
        <h2>Valores</h2>
        <ul>
          <li>Comprometimento</li>
          <li>Ética profissional</li>
          <li>Excelência</li>
          <li>Idoneidade</li>
          <li>Atenção ao aluno e seus objetivos</li>
        </ul>
      </MissionValueSession>
    </section>
  );
}
