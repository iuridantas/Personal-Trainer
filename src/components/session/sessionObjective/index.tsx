import { Container, Column } from './style';

export function SessionObjective() {
  return (
    <Container aria-label="Seção de Objetivos de Treinamento Personalizado">
      <h1>
        Treinamento Personalizado: Alcançando seus Objetivos com Programas
        Específicos
      </h1>
      <Column>
        <div>
          <img
            src="/img/home6.jpg"
            alt="Foto sobre emagrecimento"
            aria-label="Foto sobre Emagrecimento"
          />
          <h2>Emagrecimento</h2>
        </div>
        <div>
          <img
            src="/img/home7.jpg"
            alt="Foto sobre Saúde e Qualidade"
            aria-label="Foto sobre Saúde e Qualidade de Vida"
          />
          <h2>Saúde e Qualidade de Vida</h2>
        </div>
        <div>
          <img
            src="/img/home8.jpg"
            alt="Foto sobre reabilitação de lesões"
            aria-label="Foto sobre Reabilitação de Lesões"
          />
          <h2>Reabilitação de Lesões</h2>
        </div>
      </Column>
      <Column>
        <div>
          <img
            src="/img/hom4.jpeg"
            alt="Foto sobre definição"
            aria-label="Foto sobre Definição"
          />
          <h2>Definição</h2>
        </div>
        <div>
          <img
            src="/img/home5.jpeg"
            alt="Foto sobre massa muscular"
            aria-label="Foto sobre Hipertrofia"
          />
          <h2>Hipertrofia</h2>
        </div>
        <div>
          <img
            src="/img/home9.jpg"
            alt="Foto sobre alto rendimento"
            aria-label="Foto sobre Alto Rendimento"
          />
          <h2>Alto Rendimento</h2>
        </div>
      </Column>
    </Container>
  );
}
