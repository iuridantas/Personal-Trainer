import { CurriculumSection } from './style';

export function SessionCurriculum() {
  return (
    <section aria-label="Seção de Currículo">
      <CurriculumSection>
        <h2>Formação Acadêmica</h2>
        <p>Graduado em Educação Física pela Universidade Tiradentes (UNIT)</p>
        <h2>Cursos e Extensões</h2>
        <ul>
          <li>Preparação física para atletas</li>
          <li>
            Musculação para grupos especiais (grávidas, idosos, entre outros)
          </li>
          <li>Musculação e nutrição esportiva</li>
          <li>Biossegurança em academias - Prevenção de doenças contagiosas</li>
        </ul>
      </CurriculumSection>
    </section>
  );
}
