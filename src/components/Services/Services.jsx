import { h } from 'preact';
import './Services.css';

const servicesData = [
  {
    id: 1,
    title: 'Desarrollo de Software a medida',
    description: 'Desarrollo de software a medida para soluciones de software especificas para su negocio.',
    icon: (
    <svg width="800px" height="800px" version="1.1" viewBox="144 144 512 512" xmlns="http://www.w3.org/2000/svg">
      <path transform="matrix(5.0381 0 0 5.0381 148.09 148.09)" d="m90.5 82.5c0 4.4179-3.5821 8-8 8h-65c-4.4179 0-8-3.5821-8-8v-65c0-4.4179 3.5821-8 8-8h65c4.4179 0 8 3.5821 8 8zm0 0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
      <path transform="matrix(5.0381 0 0 5.0381 148.09 148.09)" d="m11 25.5h79" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
      <path transform="matrix(5.0381 0 0 5.0381 148.09 148.09)" d="m19 17.5h12" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
      <path d="m468.95 236.26c0 6.7773-5.4922 12.273-12.273 12.273-6.7773 0-12.273-5.4961-12.273-12.273 0-6.7812 5.4961-12.273 12.273-12.273 6.7812 0 12.273 5.4922 12.273 12.273"/>
      <path d="m519.33 236.26c0 6.7773-5.4961 12.273-12.273 12.273s-12.273-5.4961-12.273-12.273c0-6.7812 5.4961-12.273 12.273-12.273s12.273 5.4922 12.273 12.273"/>
      <path d="m569.71 236.26c0 6.7773-5.4922 12.273-12.273 12.273-6.7773 0-12.27-5.4961-12.27-12.273 0-6.7812 5.4922-12.273 12.27-12.273 6.7812 0 12.273 5.4922 12.273 12.273"/>
      <path transform="matrix(5.0381 0 0 5.0381 148.09 148.09)" d="m36.596 64.483-9.6243-9.6236 9.6243-9.6243" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
      <path transform="matrix(5.0381 0 0 5.0381 148.09 148.09)" d="m63.404 64.483 9.6243-9.6236-9.6243-9.6243" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
      <path transform="matrix(5.0381 0 0 5.0381 148.09 148.09)" d="m52.606 45.322-6.7021 19.075" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/>
      </svg>)

  },
  {
    id: 2,
    title: 'Desarrollo de electronica a medida',
    description: 'Desarrollo de dispositivos y sistemas electrónicos adaptados a tu negocio.',
    icon: (
      <svg width="800px" height="800px" version="1.1" viewBox="144 144 512 512" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path fill="currentColor" stroke="currentColor" d="m576.33 261.45c0-20.656-17.129-37.785-37.785-37.785h-25.191v-50.379h-25.191v50.383h-25.191l0.003906-50.383h-25.191v50.383h-25.191v-50.383h-25.191v50.383h-25.191v-50.383h-25.191v50.383h-25.191l0.003906-50.383h-25.191v50.383h-25.191c-20.656 0-37.785 17.129-37.785 37.785v25.191l-50.379-0.003906v25.191h50.383v25.191h-50.383v25.191h50.383v25.191l-50.383-0.003906v25.191h50.383v25.191h-50.383v25.191h50.383v25.191l-50.383-0.003907v25.191h50.383v25.191c0 20.656 17.129 37.785 37.785 37.785h25.191v50.383h25.191l-0.003907-50.383h25.191v50.383h25.191l-0.003906-50.383h25.191v50.383h25.191v-50.383h25.191v50.383h25.191v-50.383h25.191v50.383h25.191l-0.003906-50.383h25.191c20.656 0 37.785-17.129 37.785-37.785v-25.191h50.383v-25.191h-50.383v-25.191h50.383v-25.191l-50.383 0.003906v-25.191h50.383v-25.191h-50.383v-25.191h50.383v-25.191l-50.383 0.003907v-25.191h50.383v-25.191h-50.383zm-25.191 25.191v251.91c0 7.0547-5.543 12.594-12.594 12.594h-277.11c-7.0547 0-12.594-5.543-12.594-12.594v-277.11c0-7.0547 5.543-12.594 12.594-12.594h277.11c7.0547 0 12.594 5.543 12.594 12.594z"/>
          <path fill="currentColor" stroke="currentColor" d="m311.83 500.76c0 6.9531-5.6406 12.594-12.594 12.594-6.957 0-12.598-5.6406-12.598-12.594 0-6.957 5.6406-12.598 12.598-12.598 6.9531 0 12.594 5.6406 12.594 12.598"/>
        </g>
      </svg>
    )
  },
  {
    id: 3,
    title: 'Realidad aumentada',
    description: 'Desarrollo de realidad aumentada, integrando objetos 3D e interacciones en tiempo real sobre el mundo real.',
    icon: (
    <svg width="800px" height="800px" version="1.1" viewBox="144 144 512 512" xmlns="http://www.w3.org/2000/svg">
    <g>
      <path fill="currentColor" stroke="currentColor" d="m510.21 171.71h-220.42c-21.727 0-39.359 17.633-39.359 39.359v377.86c0 21.727 17.633 39.359 39.359 39.359h220.42c21.727 0 39.359-17.633 39.359-39.359v-377.86c0-21.727-17.633-39.359-39.359-39.359zm-62.977 15.742v7.8711c0 4.3281-3.543 7.8711-7.8711 7.8711h-78.719c-4.3281 0-7.8711-3.543-7.8711-7.8711v-7.8711h94.465zm-157.44 0h47.23v7.8711c0 12.988 10.629 23.617 23.617 23.617h78.719c12.988 0 23.617-10.629 23.617-23.617v-7.8711h47.23c12.988 0 23.617 10.629 23.617 23.617l0.003907 338.5h-267.65v-338.5c0-12.988 10.629-23.617 23.617-23.617zm244.03 401.47c0 12.988-10.629 23.617-23.617 23.617h-220.41c-12.988 0-23.617-10.629-23.617-23.617v-23.617l267.65 0.003906v23.617z"/>
      <path fill="currentColor" stroke="currentColor" d="m333.09 350.17v68.172c0 2.832 1.4961 5.4336 3.9375 6.8477l59.039 34.086c1.1797 0.70703 2.5977 1.0234 3.9375 1.0234s2.7539-0.31641 3.9375-1.0234l59.039-34.086c2.4414-1.418 3.9375-4.0156 3.9375-6.8477v-68.172c0-2.832-1.4961-5.4336-3.9375-6.8477l-59.039-34.086c-2.4414-1.418-5.4336-1.418-7.8711 0l-59.039 34.086c-2.4414 1.418-3.9375 4.0156-3.9375 6.8477zm15.742 13.617 43.297 25.031v49.988l-43.297-25.031zm59.039 75.02v-49.988l43.297-25.031v49.988zm-7.8711-113.59 43.297 25.031-43.297 25.031-43.297-25.031z"/>
      <path fill="currentColor" stroke="currentColor" d="m447.23 289.79h39.359v39.359c0 4.3281 3.543 7.8711 7.8711 7.8711 4.3281 0 7.8711-3.543 7.8711-7.8711v-47.23c0-4.3281-3.543-7.8711-7.8711-7.8711h-47.23c-4.3281 0-7.8711 3.543-7.8711 7.8711s3.543 7.8711 7.8711 7.8711z"/>
      <path fill="currentColor" stroke="currentColor" d="m305.54 337.02c4.3281 0 7.8711-3.543 7.8711-7.8711v-39.359h39.359c4.3281 0 7.8711-3.543 7.8711-7.8711s-3.543-7.8711-7.8711-7.8711h-47.23c-4.3281 0-7.8711 3.543-7.8711 7.8711v47.23c0 4.3281 3.543 7.8711 7.8711 7.8711z"/>
      <path fill="currentColor" stroke="currentColor" d="m305.54 494.46h47.23c4.3281 0 7.8711-3.543 7.8711-7.8711s-3.543-7.8711-7.8711-7.8711h-39.359v-39.359c0-4.3281-3.543-7.8711-7.8711-7.8711s-7.8711 3.543-7.8711 7.8711v47.23c0 4.3281 3.543 7.8711 7.8711 7.8711z"/>
      <path fill="currentColor" stroke="currentColor" d="m494.46 431.49c-4.3281 0-7.8711 3.543-7.8711 7.8711v39.359h-39.359c-4.3281 0-7.8711 3.543-7.8711 7.8711s3.543 7.8711 7.8711 7.8711h47.23c4.3281 0 7.8711-3.543 7.8711-7.8711v-47.23c0-4.3281-3.543-7.8711-7.8711-7.8711z"/>
    </g>
    </svg>
    )
  }
];

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="ServicesContainer">
        <h2 className="section-title">NUESTROS SERVICIOS</h2>
        <div className="services-grid">
          {servicesData.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-text">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;