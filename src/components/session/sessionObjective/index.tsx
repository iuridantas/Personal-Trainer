import { ObjectiveSession, Column } from './style';

export function SessionObjective() {
  return (
    <section aria-label="Seção de Objetivos de Treinamento Personalizado">
      <ObjectiveSession>
        <h2>
          Treinamento Personalizado: Alcançando seus Objetivos com Programas
          Específicos
        </h2>
        <Column>
          <div>
            <img
              src="/img/home6.jpg"
              alt="Foto sobre emagrecimento"
              aria-label="Foto sobre Emagrecimento"
            />
            <p>Emagrecimento</p>
          </div>
          <div>
            <img
              src="/img/home7.jpg"
              alt="Foto sobre Saúde e Qualidade"
              aria-label="Foto sobre Saúde e Qualidade de Vida"
            />
            <p>Saúde e Qualidade de Vida</p>
          </div>
          <div>
            <img
              src="/img/home8.jpg"
              alt="Foto sobre reabilitação de lesões"
              aria-label="Foto sobre Reabilitação de Lesões"
            />
            <p>Reabilitação de Lesões</p>
          </div>
        </Column>
        <Column>
          <div>
            <img
              src="/img/hom4.jpeg"
              alt="Foto sobre definição"
              aria-label="Foto sobre Definição"
            />
            <p>Definição</p>
          </div>
          <div>
            <img
              src="/img/home5.jpeg"
              alt="Foto sobre massa muscular"
              aria-label="Foto sobre Hipertrofia"
            />
            <p>Hipertrofia</p>
          </div>
          <div>
            <img
              src="/img/home9.jpg"
              alt="Foto sobre alto rendimento"
              aria-label="Foto sobre Alto Rendimento"
            />
            <p>Alto Rendimento</p>
          </div>
        </Column>
      </ObjectiveSession>
    </section>
  );
}
