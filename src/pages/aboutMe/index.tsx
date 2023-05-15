import { Container, Section1, Section2, Section3 } from './style';

export function AboutMe() {
  return (
    <Container>
      <Section1>
        <img src="/img/foto.png" alt="Foto do Personal" />
        <h1>
          Thiago Batalha
          <span>Cref: 000000-G/SE</span>
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
        </h1>
      </Section1>
      <Section2>
        <h2>
          Formação Acadêmica
          <p>Graduado em Educação física pela Universidade Tiradentes (UNIT)</p>
          <p>Pós-Graduado em</p>
        </h2>
        <h2>
          Cursos e Extensões
          <p>Curso em ...</p>
        </h2>
      </Section2>
      <Section3>
        <h2>
          Missão
          <p>
            Minha missão é fornecer aos meus alunos o que há de mais eficaz na
            área de preparação física, com o objetivo de oferecer uma
            experiência única a cada dia de treinamento e resultados sólidos e
            duradouros. Busco ir além dos simples ganhos estéticos e performance
            física, trabalhando para melhorar significativamente a qualidade de
            vida e a saúde física e mental de cada indivíduo que confia em meu
            trabalho.
          </p>
        </h2>
        <h2>
          Valores
          <p>• Comprometimento</p>
          <p>• Ética profissional</p>
          <p>• Excelência</p>
          <p>• Idoneidade</p>
          <p>• Atenção ao aluno e seus objetivos</p>
        </h2>
      </Section3>
    </Container>
  );
}
