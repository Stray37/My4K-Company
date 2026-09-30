import './style.css';

const services = [
  { icon: '✦', name: 'Limpieza profunda', detail: 'Cocina, baños y zonas de alto uso', price: 'Desde €10' },
  { icon: '⌂', name: 'Limpieza residencial', detail: 'El cuidado semanal de tu hogar', price: 'Desde €10' },
  { icon: '▦', name: 'Limpieza comercial', detail: 'Limpieza diaria de oficinas para rendir', price: 'Desde €10' },
];

const serviceDetails = [
  { icon: '◌', name: 'Limpieza regular', detail: 'Mantén tu hogar limpio y cuidado de forma constante.' },
  { icon: '✦', name: 'Limpieza profunda', detail: 'Una limpieza completa para renovar cada espacio.' },
  { icon: '⌂', name: 'Limpieza Airbnb', detail: 'Deja cada alojamiento impecable entre huéspedes.' },
  { icon: '•', name: 'Limpieza puntual', detail: 'Una solución rápida para las zonas que más lo necesitan.' },
  { icon: '→', name: 'Limpieza de mudanza (entrada)', detail: 'Prepara tu nuevo hogar para empezar con todo listo.' },
  { icon: '←', name: 'Limpieza de mudanza (salida)', detail: 'Entrega tu vivienda limpia y preparada para la siguiente etapa.' },
];

const dates = [
  { day: '24', weekday: 'Mié', month: 'SEP', slots: ['9:00 AM', '2:00 PM'] },
  { day: '25', weekday: 'Jue', month: 'SEP', slots: ['10:30 AM', '4:00 PM'] },
  { day: '26', weekday: 'Vie', month: 'SEP', slots: ['9:00 AM', '11:30 AM', '3:00 PM'] },
  { day: '29', weekday: 'Lun', month: 'SEP', slots: ['8:30 AM', '1:00 PM'] },
  { day: '30', weekday: 'Mar', month: 'SEP', slots: ['10:00 AM', '2:30 PM'] },
  { day: '01', weekday: 'Mié', month: 'OCT', slots: ['9:00 AM', '12:30 PM'] },
  { day: '02', weekday: 'Jue', month: 'OCT', slots: ['11:00 AM', '3:30 PM'] },
];

let selectedDate = dates[0];
let selectedTime = dates[0].slots[0];
let activeServiceName = '';
let servicesCarouselTimer;
let carWashCarouselTimer;

const app = document.querySelector('#app');

function render() {
  app.innerHTML = `
    <header class="topbar">
      <a class="brand" href="#inicio" aria-label="My4K inicio">
        <span class="brand-mark">M<span>Y</span><span>4</span>K</span>
      </a>
      <nav class="nav-links" aria-label="Navegación principal">
      </nav>
      <button class="menu-toggle" id="menu-toggle" type="button" aria-label="Abrir menú" aria-expanded="false" aria-controls="topbar-menu"><span class="menu-icon" aria-hidden="true"><i></i><i></i><i></i></span></button>
      <div class="topbar-menu" id="topbar-menu" aria-hidden="true">
        <a href="#inicio">Casa</a>
        <a href="#faqs">FAQs</a>
        <a href="#contacto">Contáctanos</a>
      </div>
    </header>

    <main>
      <section class="hero" id="presentacion">
        <div class="hero-copy reveal">
          <p class="eyebrow"><span class="eyebrow-line"></span> Limpieza con profesionalidad</p>
          <h1><em>Tu espacio,<br />en su mejor versión.</em></h1>
          <p class="hero-text">Nosotros nos ocupamos de lo que ensucia tu día. Tú disfruta de un hogar que se sienta ligero, cuidado y completamente agradable.</p>
          <div class="hero-actions">
            <a class="button button-accent" href="#disponibilidad">Agenda para limpieza <span>↗</span></a>
            <a class="text-link" href="#servicios"> Servicios <span>↓</span></a>
          </div>
          <div class="trust-row"><strong>4.9</strong><span class="stars">★★★★★</span><span>+10 hogares felices</span></div>
        </div>
        <div class="hero-visual reveal delay-one">
          <div class="image-frame">
            <div class="sun-shape"></div>
            <div class="plant plant-one"></div><div class="plant plant-two"></div>
            <div class="counter"><span>01</span><span>Espacios que<br /><b>respiran.</b></span></div>
          </div>
          <div class="floating-note"><span class="check">✓</span><span><b>Tu tranquilidad</b><small>incluida siempre</small></span></div>
        </div>
      </section>

      <section class="statement" id="inicio">
        <h2><em>¿Busca un servicio<br />de limpieza confiable?</em></h2>
        <p class="statement-copy">Nuestro servicio profesional de limpieza y asistencia doméstica deja su hogar impecable y renovado. Reserve ahora y disfrute de un espacio limpio, cómodo y libre de estrés, adaptado a tus necesidades.</p>
        <a class="button button-accent statement-action" href="#disponibilidad">Reserva aquí <span>↗</span></a>
      </section>
        
      <div class="services-showcase">
      <section class="services-section" id="servicios">
        <button class="services-feature" id="open-services" type="button">
          <span class="services-feature-image" aria-hidden="true"><span class="services-slide-track"><span class="services-slide services-slide-window"></span><span class="services-slide services-slide-bathroom"></span><span class="services-slide services-slide-kitchen"></span></span></span>
          <span class="services-feature-content"><span class="services-title-row"><strong>Nuestros servicios</strong><span class="services-enter-symbol" aria-hidden="true">↗</span></span><span class="services-feature-hint">Haz clic para ver y seleccionar nuestros servicios</span></span>
          <span class="services-dots" aria-hidden="true"><span class="services-dot active"></span><span class="services-dot"></span><span class="services-dot"></span></span>
        </button>
      </section>

      </div>

      <section class="booking-section" id="disponibilidad">
        <div class="booking-intro"><p class="eyebrow eyebrow-light">Agenda en minutos</p><h2><em>Un espacio limpio<br />empieza aquí.</em></h2><p>Selecciona el día y horario que mejor se acomode a tu semana. Confirmaremos tu visita por WhatsApp.</p><div class="booking-steps"><span class="active">01 <p>Elige fecha</p></span><span>02 <p>Cuéntanos de ti</p></span><span>03 <p>Listo</p></span></div></div>
        <div class="calendar-card">
          <div class="calendar-top"><div><p class="eyebrow">Disponibilidad</p><h3>Próximas fechas</h3></div><span class="calendar-icon">▦</span></div>
          <div class="date-picker">${dates.map(date => `<button class="date-option ${date === selectedDate ? 'selected' : ''}" data-day="${date.day}"><small>${date.weekday}</small><strong>${date.day}</strong><small>${date.month}</small></button>`).join('')}</div>
          <div class="time-heading"><span>Horarios disponibles</span><span class="selected-label">${selectedDate.weekday}, ${selectedDate.day} ${selectedDate.month}</span></div>
          <div class="time-grid">${selectedDate.slots.map(time => `<button class="time-option ${time === selectedTime ? 'selected' : ''}" data-time="${time}">${time}</button>`).join('')}</div>
          <button class="button button-accent full-width" id="continue-booking">Continuar con esta fecha <span>→</span></button>
        </div>
      </section>
    </main>

    <footer><div class="footer-brand"><span class="brand-mark">M<span>Y</span><span>4</span>K</span><p>Espacios que respiran<br />Vidas que fluyen.</p></div><div><small>CONTACTO</small><p>my4klimpieza@gmail.com<br />+34 (666) 797-953</p></div><div><small>SÍGUENOS</small><p>@my4klimpieza</p></div><p class="copyright">© 2026 My4KFamily</p></footer>
    <div class="modal-backdrop" id="services-modal" aria-hidden="true"><div class="services-modal"><button class="modal-close" id="close-services" aria-label="Cerrar">×</button><div class="service-modal-grid">${serviceDetails.map(service => `<button class="service-modal-card service-modal-card-preview ${service.name === 'Limpieza regular' ? 'service-modal-card-regular' : service.name === 'Limpieza profunda' ? 'service-modal-card-deep' : service.name === 'Limpieza Airbnb' ? 'service-modal-card-airbnb' : ''}" type="button" data-service="${service.name}"><strong>${service.name}</strong><span class="service-arrow">↗</span></button>`).join('')}</div></div></div>
    <div class="service-preview-backdrop" id="service-preview-modal" aria-hidden="true"><div class="service-preview"><button class="modal-close" id="close-service-preview" aria-label="Cerrar">×</button><h2 id="service-preview-title"></h2><p id="service-preview-detail"></p><button class="button button-dark full-width" id="select-preview-service" type="button">Seleccionar servicio <span>↗</span></button></div></div>
    <div class="modal-backdrop" id="booking-modal" aria-hidden="true"><div class="modal"><button class="modal-close" id="close-modal" aria-label="Cerrar">×</button><span class="modal-check">✓</span><p class="eyebrow">Casi listo</p><h2>Reserva tu visita</h2><p class="modal-summary">${selectedDate.weekday}, ${selectedDate.day} de ${selectedDate.month} · ${selectedTime}</p><form id="booking-form"><label>Tu nombre<input required name="name" placeholder="¿Cómo te llamamos?" /></label><label>WhatsApp<input required name="phone" placeholder="+1 (555) 000-0000" /></label><label>Tipo de servicio<select name="service">${serviceDetails.map(service => `<option>${service.name}</option>`).join('')}</select></label><button class="button button-dark full-width" type="submit">Solicitar mi cita <span>↗</span></button></form></div></div>
  `;
  bindEvents();
}

function bindEvents() {
  const menuToggle = document.querySelector('#menu-toggle');
  const topbarMenu = document.querySelector('#topbar-menu');
  menuToggle.addEventListener('click', () => {
    const isOpen = topbarMenu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    topbarMenu.setAttribute('aria-hidden', String(!isOpen));
  });
  topbarMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    topbarMenu.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    topbarMenu.setAttribute('aria-hidden', 'true');
  }));
  document.addEventListener('click', event => {
    if (!event.target.closest('.topbar')) {
      topbarMenu.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      topbarMenu.setAttribute('aria-hidden', 'true');
    }
  });
  clearInterval(servicesCarouselTimer);
  const servicesTrack = document.querySelector('.services-slide-track');
  let servicesSlideIndex = 0;
  servicesCarouselTimer = setInterval(() => {
    servicesSlideIndex = (servicesSlideIndex + 1) % 3;
    servicesTrack.style.transform = `translateX(-${servicesSlideIndex * 33.3333}%)`;
    document.querySelectorAll('.services-dot').forEach((dot, index) => dot.classList.toggle('active', index === servicesSlideIndex));
  }, 5000);
  const servicesModal = document.querySelector('#services-modal');
  const servicePreview = document.querySelector('#service-preview-modal');
  const previewTitle = document.querySelector('#service-preview-title');
  const previewDetail = document.querySelector('#service-preview-detail');
  document.querySelector('#open-services').addEventListener('click', () => { servicesModal.classList.add('open'); servicesModal.setAttribute('aria-hidden', 'false'); });
  document.querySelector('#close-services').addEventListener('click', () => closeOverlay(servicesModal));
  servicesModal.addEventListener('click', event => { if (event.target === servicesModal) closeOverlay(servicesModal); });
  document.querySelectorAll('.service-modal-card').forEach(card => card.addEventListener('click', () => {
    activeServiceName = card.dataset.service;
    previewTitle.textContent = activeServiceName;
    previewDetail.textContent = activeServiceName === 'Limpieza regular' ? 'Mantenga su hogar limpio de forma constante con nuestros servicios de limpieza regular. Realizamos una limpieza exhaustiva de zonas comunes, dormitorios, baños y cocinas, siguiendo un horario que se adapte a sus necesidades.' : activeServiceName === 'Limpieza profunda' ? 'Nuestro servicio de limpieza profunda elimina la suciedad y la grasa acumulada en cada rincón de su hogar. Desde limpiar los rodapiés hasta limpiar los ventiladores del techo, no dejamos ningún detalle al azar, garantizando un ambiente impecable.' : activeServiceName === 'Limpieza puntual' ? 'Nuestro servicio de limpieza puntual es ideal para eventos especiales, limpieza tras una fiesta o cuando necesite tener la casa impecable con poca antelación. Ofrecemos una limpieza de alta calidad adaptada a sus necesidades específicas.' : activeServiceName === 'Limpieza Airbnb' ? 'Logré que su propiedad de alquiler cause siempre una excelente impresión con nuestro servicio profesional de limpieza para Airbnb; cuidamos cada detalle: desde ropa de cama limpia y baños impecables hasta superficies libres de polvo.' : activeServiceName === 'Limpieza de mudanza (entrada)' ? 'Asegúrese que su nuevo hogar esté impecable desde el primer día con nuestros servicios de limpieza de mudanzas, limpiamos todas las estancias, centrándonos en desinfectar superficies, fregar suelos y eliminar cualquier resto dejado por los ocupantes anteriores.' : activeServiceName === 'Limpieza de mudanza (salida)' ? 'Nuestro servicio de limpieza de mudanza facilita la transición y deja su antigua vivienda en perfecto estado. Nos aseguramos de que cada centímetro de la casa quede impecable y listo para los siguientes habitantes.' : (serviceDetails.find(service => service.name === activeServiceName)?.detail || '');
    servicePreview.classList.add('open');
    servicePreview.setAttribute('aria-hidden', 'false');
  }));
  document.querySelector('#close-service-preview').addEventListener('click', () => closeOverlay(servicePreview));
  servicePreview.addEventListener('click', event => { if (event.target === servicePreview) closeOverlay(servicePreview); });
  document.querySelector('#select-preview-service').addEventListener('click', () => {
    const serviceSelect = document.querySelector('select[name="service"]');
    const matchingOption = [...serviceSelect.options].find(option => option.value === activeServiceName);
    if (matchingOption) serviceSelect.value = matchingOption.value;
    closeOverlay(servicePreview);
    closeOverlay(servicesModal);
    document.querySelector('#disponibilidad').scrollIntoView({ behavior: 'smooth' });
  });
  document.querySelectorAll('.date-option').forEach(button => button.addEventListener('click', () => {
    selectedDate = dates.find(date => date.day === button.dataset.day);
    selectedTime = selectedDate.slots[0];
    render();
  }));
  document.querySelectorAll('.time-option').forEach(button => button.addEventListener('click', () => {
    selectedTime = button.dataset.time;
    render();
  }));
  const modal = document.querySelector('#booking-modal');
  document.querySelector('#continue-booking').addEventListener('click', () => { modal.classList.add('open'); modal.setAttribute('aria-hidden', 'false'); });
  document.querySelector('#close-modal').addEventListener('click', closeModal);
  modal.addEventListener('click', event => { if (event.target === modal) closeModal(); });
  document.querySelector('#booking-form').addEventListener('submit', event => { event.preventDefault(); document.querySelector('.modal').innerHTML = `<button class="modal-close" id="close-modal" aria-label="Cerrar">×</button><span class="modal-check">✓</span><p class="eyebrow">Solicitud enviada</p><h2>¡Nos vemos pronto!</h2><p class="modal-summary">Recibimos tu solicitud para el ${selectedDate.day} de ${selectedDate.month} a las ${selectedTime}. Te escribiremos por WhatsApp para confirmar.</p><button class="button button-dark full-width" id="done-button">Perfecto <span>✓</span></button>`; document.querySelector('#done-button').addEventListener('click', closeModal); });
}

function closeModal() { const modal = document.querySelector('#booking-modal'); modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); }
function closeOverlay(overlay) { overlay.classList.remove('open'); overlay.setAttribute('aria-hidden', 'true'); }

render();
