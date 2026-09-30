(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function v(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(s){if(s.ep)return;s.ep=!0;const i=v(s);fetch(s.href,i)}})();const h=[{icon:"◌",name:"Limpieza regular",detail:"Mantén tu hogar limpio y cuidado de forma constante."},{icon:"✦",name:"Limpieza profunda",detail:"Una limpieza completa para renovar cada espacio."},{icon:"⌂",name:"Limpieza Airbnb",detail:"Deja cada alojamiento impecable entre huéspedes."},{icon:"•",name:"Limpieza puntual",detail:"Una solución rápida para las zonas que más lo necesitan."},{icon:"→",name:"Limpieza de mudanza (entrada)",detail:"Prepara tu nuevo hogar para empezar con todo listo."},{icon:"←",name:"Limpieza de mudanza (salida)",detail:"Entrega tu vivienda limpia y preparada para la siguiente etapa."}],m=[{day:"24",weekday:"Mié",month:"SEP",slots:["9:00 AM","2:00 PM"]},{day:"25",weekday:"Jue",month:"SEP",slots:["10:30 AM","4:00 PM"]},{day:"26",weekday:"Vie",month:"SEP",slots:["9:00 AM","11:30 AM","3:00 PM"]},{day:"29",weekday:"Lun",month:"SEP",slots:["8:30 AM","1:00 PM"]},{day:"30",weekday:"Mar",month:"SEP",slots:["10:00 AM","2:30 PM"]},{day:"01",weekday:"Mié",month:"OCT",slots:["9:00 AM","12:30 PM"]},{day:"02",weekday:"Jue",month:"OCT",slots:["11:00 AM","3:30 PM"]}];let t=m[0],p=m[0].slots[0],o="",y;const k=document.querySelector("#app");function f(){k.innerHTML=`
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
          <div class="date-picker">${m.map(e=>`<button class="date-option ${e===t?"selected":""}" data-day="${e.day}"><small>${e.weekday}</small><strong>${e.day}</strong><small>${e.month}</small></button>`).join("")}</div>
          <div class="time-heading"><span>Horarios disponibles</span><span class="selected-label">${t.weekday}, ${t.day} ${t.month}</span></div>
          <div class="time-grid">${t.slots.map(e=>`<button class="time-option ${e===p?"selected":""}" data-time="${e}">${e}</button>`).join("")}</div>
          <button class="button button-accent full-width" id="continue-booking">Continuar con esta fecha <span>→</span></button>
        </div>
      </section>
    </main>

    <footer><div class="footer-brand"><span class="brand-mark">M<span>Y</span><span>4</span>K</span><p>Espacios que respiran<br />Vidas que fluyen.</p></div><div><small>CONTACTO</small><p>my4klimpieza@gmail.com<br />+34 (666) 797-953</p></div><div><small>SÍGUENOS</small><p>@my4klimpieza</p></div><p class="copyright">© 2026 My4KFamily</p></footer>
    <div class="modal-backdrop" id="services-modal" aria-hidden="true"><div class="services-modal"><button class="modal-close" id="close-services" aria-label="Cerrar">×</button><div class="service-modal-grid">${h.map(e=>`<button class="service-modal-card service-modal-card-preview ${e.name==="Limpieza regular"?"service-modal-card-regular":e.name==="Limpieza profunda"?"service-modal-card-deep":e.name==="Limpieza Airbnb"?"service-modal-card-airbnb":""}" type="button" data-service="${e.name}"><strong>${e.name}</strong><span class="service-arrow">↗</span></button>`).join("")}</div></div></div>
    <div class="service-preview-backdrop" id="service-preview-modal" aria-hidden="true"><div class="service-preview"><button class="modal-close" id="close-service-preview" aria-label="Cerrar">×</button><h2 id="service-preview-title"></h2><p id="service-preview-detail"></p><button class="button button-dark full-width" id="select-preview-service" type="button">Seleccionar servicio <span>↗</span></button></div></div>
    <div class="modal-backdrop" id="booking-modal" aria-hidden="true"><div class="modal"><button class="modal-close" id="close-modal" aria-label="Cerrar">×</button><span class="modal-check">✓</span><p class="eyebrow">Casi listo</p><h2>Reserva tu visita</h2><p class="modal-summary">${t.weekday}, ${t.day} de ${t.month} · ${p}</p><form id="booking-form"><label>Tu nombre<input required name="name" placeholder="¿Cómo te llamamos?" /></label><label>WhatsApp<input required name="phone" placeholder="+1 (555) 000-0000" /></label><label>Tipo de servicio<select name="service">${h.map(e=>`<option>${e.name}</option>`).join("")}</select></label><button class="button button-dark full-width" type="submit">Solicitar mi cita <span>↗</span></button></form></div></div>
  `,q()}function q(){const e=document.querySelector("#menu-toggle"),n=document.querySelector("#topbar-menu");e.addEventListener("click",()=>{const a=n.classList.toggle("open");e.setAttribute("aria-expanded",String(a)),n.setAttribute("aria-hidden",String(!a))}),n.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{n.classList.remove("open"),e.setAttribute("aria-expanded","false"),n.setAttribute("aria-hidden","true")})),document.addEventListener("click",a=>{a.target.closest(".topbar")||(n.classList.remove("open"),e.setAttribute("aria-expanded","false"),n.setAttribute("aria-hidden","true"))}),clearInterval(y);const v=document.querySelector(".services-slide-track");let c=0;y=setInterval(()=>{c=(c+1)%3,v.style.transform=`translateX(-${c*33.3333}%)`,document.querySelectorAll(".services-dot").forEach((a,r)=>a.classList.toggle("active",r===c))},5e3);const s=document.querySelector("#services-modal"),i=document.querySelector("#service-preview-modal"),d=document.querySelector("#service-preview-title"),g=document.querySelector("#service-preview-detail");document.querySelector("#open-services").addEventListener("click",()=>{s.classList.add("open"),s.setAttribute("aria-hidden","false")}),document.querySelector("#close-services").addEventListener("click",()=>l(s)),s.addEventListener("click",a=>{a.target===s&&l(s)}),document.querySelectorAll(".service-modal-card").forEach(a=>a.addEventListener("click",()=>{o=a.dataset.service,d.textContent=o,g.textContent=o==="Limpieza regular"?"Mantenga su hogar limpio de forma constante con nuestros servicios de limpieza regular. Realizamos una limpieza exhaustiva de zonas comunes, dormitorios, baños y cocinas, siguiendo un horario que se adapte a sus necesidades.":o==="Limpieza profunda"?"Nuestro servicio de limpieza profunda elimina la suciedad y la grasa acumulada en cada rincón de su hogar. Desde limpiar los rodapiés hasta limpiar los ventiladores del techo, no dejamos ningún detalle al azar, garantizando un ambiente impecable.":o==="Limpieza puntual"?"Nuestro servicio de limpieza puntual es ideal para eventos especiales, limpieza tras una fiesta o cuando necesite tener la casa impecable con poca antelación. Ofrecemos una limpieza de alta calidad adaptada a sus necesidades específicas.":o==="Limpieza Airbnb"?"Logré que su propiedad de alquiler cause siempre una excelente impresión con nuestro servicio profesional de limpieza para Airbnb; cuidamos cada detalle: desde ropa de cama limpia y baños impecables hasta superficies libres de polvo.":o==="Limpieza de mudanza (entrada)"?"Asegúrese que su nuevo hogar esté impecable desde el primer día con nuestros servicios de limpieza de mudanzas, limpiamos todas las estancias, centrándonos en desinfectar superficies, fregar suelos y eliminar cualquier resto dejado por los ocupantes anteriores.":o==="Limpieza de mudanza (salida)"?"Nuestro servicio de limpieza de mudanza facilita la transición y deja su antigua vivienda en perfecto estado. Nos aseguramos de que cada centímetro de la casa quede impecable y listo para los siguientes habitantes.":h.find(r=>r.name===o)?.detail||"",i.classList.add("open"),i.setAttribute("aria-hidden","false")})),document.querySelector("#close-service-preview").addEventListener("click",()=>l(i)),i.addEventListener("click",a=>{a.target===i&&l(i)}),document.querySelector("#select-preview-service").addEventListener("click",()=>{const a=document.querySelector('select[name="service"]'),r=[...a.options].find(L=>L.value===o);r&&(a.value=r.value),l(i),l(s),document.querySelector("#disponibilidad").scrollIntoView({behavior:"smooth"})}),document.querySelectorAll(".date-option").forEach(a=>a.addEventListener("click",()=>{t=m.find(r=>r.day===a.dataset.day),p=t.slots[0],f()})),document.querySelectorAll(".time-option").forEach(a=>a.addEventListener("click",()=>{p=a.dataset.time,f()}));const u=document.querySelector("#booking-modal");document.querySelector("#continue-booking").addEventListener("click",()=>{u.classList.add("open"),u.setAttribute("aria-hidden","false")}),document.querySelector("#close-modal").addEventListener("click",b),u.addEventListener("click",a=>{a.target===u&&b()}),document.querySelector("#booking-form").addEventListener("submit",a=>{a.preventDefault(),document.querySelector(".modal").innerHTML=`<button class="modal-close" id="close-modal" aria-label="Cerrar">×</button><span class="modal-check">✓</span><p class="eyebrow">Solicitud enviada</p><h2>¡Nos vemos pronto!</h2><p class="modal-summary">Recibimos tu solicitud para el ${t.day} de ${t.month} a las ${p}. Te escribiremos por WhatsApp para confirmar.</p><button class="button button-dark full-width" id="done-button">Perfecto <span>✓</span></button>`,document.querySelector("#done-button").addEventListener("click",b)})}function b(){const e=document.querySelector("#booking-modal");e.classList.remove("open"),e.setAttribute("aria-hidden","true")}function l(e){e.classList.remove("open"),e.setAttribute("aria-hidden","true")}f();
