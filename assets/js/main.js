/* ==========================================================================
   NEERFORT — Modular Client-Side Interactions
   Verified portfolio data from Md. Saiful Haque, MIEB & NeerFort source files
   ========================================================================== */

(() => {
  'use strict';

  // Decoupled Hero Slider Data (Laravel/JSON migration ready; 100% verified NeerFort assets)
  const HERO_SLIDES = [
    {
      kicker: 'AVIATION INFRASTRUCTURE • CAAB',
      location: 'Dhaka • Live International Airport Works',
      title: 'HSIA Expansion — Stormwater Drainage Package',
      description:
        'Reinforced stormwater culverts, balancing ponds, and treatment infrastructure phased around live flight schedules.'
    },
    {
      kicker: 'STRUCTURAL RETROFITTING • BUET SUPERVISED',
      location: 'Dhaka • Occupied Government HQ',
      title: 'BTCL Headquarters — Seismic & Structural Retrofit',
      description:
        'RCC column jacketing, beam strengthening, and NDT verification executed without disrupting active government operations.'
    },
    {
      kicker: 'LIVE-SITE SAFETY • ZERO-DISRUPTION PROTOCOL',
      location: 'Dhaka • Phased Structural Execution',
      title: 'BTCL HQ — Controlled Structural Preparation',
      description:
        'Evening and weekend structural cutting, chipping, and core verification delivered under strict PPE and safety isolation.'
    }
  ];

  const FLAGSHIP_PROJECTS = [
    {
      id: 'btcl-hq',
      title: 'BTCL Headquarters: Structural & Seismic Retrofitting',
      location: 'Dhaka',
      timeline: 'Jul 2025 – Present',
      category: 'retrofitting',
      categoryLabel: 'Retrofitting & Govt',
      disciplineOption: 'Structural Retrofitting & Strengthening',
      affiliation: 'BUET Supervised • Occupied Govt HQ',
      role: 'Project In-Charge (BUET Dept. of Civil Engineering Supervision)',
      metric: 'Active Govt HQ • Zero Disruption',
      summary:
        'Full-scope seismic and structural strengthening of an occupied government telecommunications headquarters under direct BUET supervision.',
      scope:
        'RCC column jacketing, beam strengthening, foundation reinforcement and rehabilitation strictly per BUET-approved designs, supported by non-destructive testing (NDT), concrete core testing, and daily/weekly progress reporting to BTCL and BUET.',
      challenge:
        'Executed noisy cutting, core drilling, and demolition during evenings and weekends in phased, safety-isolated zones so daily office operations continued safely. When core testing uncovered unexpected existing structural conditions, methods were revised on site with BUET consultants without losing schedule.',
      skills: ['Seismic Retrofitting', 'RCC Column Jacketing', 'NDT & Core Testing', 'BUET Coordination', 'Phased Safety Planning'],
      archiveNote: 'Contract value, retrofitted floor area, and final completion date available in official pre-qualification dossier upon request.',
      photos: [
        {
          src: 'assets/images/project-btcl-strengthening.jpg',
          caption: 'BTCL HQ — Structural wrapping & seismic strengthening execution'
        },
        {
          src: 'assets/images/project-btcl-prep.jpg',
          caption: 'BTCL HQ — Surface chipping & structural preparation under site PPE protocol'
        }
      ]
    },
    {
      id: 'hsia-stormwater',
      title: 'HSIA Expansion — Stormwater Treatment & Drainage Package',
      location: 'Dhaka',
      timeline: 'Sep 2021 – Jun 2022',
      category: 'infrastructure',
      categoryLabel: 'Infra & Geo',
      disciplineOption: 'Geotechnical & Ground Engineering',
      affiliation: 'Desh Contractors & Developers Ltd. • CAAB',
      role: 'Project Manager (Primary Contact with CAAB & Consultants)',
      metric: 'Live International Airport Works',
      summary:
        'Stormwater drainage networks, balancing/retention ponds, and water treatment/discharge infrastructure for the Hazrat Shahjalal International Airport expansion.',
      scope:
        'Overall planning, scheduling, resource allocation, and execution of heavy reinforced stormwater drainage networks, retention ponds, and discharge treatment systems aligned with environmental standards and aviation operational rules.',
      challenge:
        'Constructed inside a fully operational international airport by phasing works around flight schedules, aviation security protocols, and low-traffic / night-time windows with formal CAAB and consulting engineer sign-offs.',
      skills: ['Stormwater Infrastructure', 'Retention Ponds', 'CAAB Liaison', 'Night-Window Phasing', 'Environmental Compliance'],
      archiveNote: 'Package contract value and detailed drain/pond dimensions available in project archive upon request.',
      photos: [
        {
          src: 'assets/images/project-hsia-stormwater.jpg',
          caption: 'HSIA Expansion — Reinforced stormwater culvert installation & technical supervision'
        }
      ]
    },
    {
      id: 'beza-bridge-2',
      title: 'BEZA Bridge-2 Abutment Stabilization & Reconstruction',
      location: 'Mirsarai, Chattogram',
      timeline: 'Economic Zone Infrastructure',
      category: 'infrastructure',
      categoryLabel: 'Infra & Geo',
      disciplineOption: 'Geotechnical & Ground Engineering',
      affiliation: 'EIMS Ltd. • BEZA Client',
      role: 'Project Manager (Geotechnical & Substructure)',
      metric: 'Jet Grouting & Anchor Piling • On Budget',
      summary:
        'Sub-soil improvement via high-pressure jet grouting, deep anchor piling, and full bridge abutment wall reconstruction at Bangabandhu Economic Zone.',
      scope:
        'Ground improvement using high-pressure cement jet grouting columns, installation of deep anchor piles for foundation capacity, and full reinforced concrete reconstruction of the Bridge-2 abutment wall with end-to-end budget and programme control.',
      challenge:
        'Executed technically intensive ground stabilization and substructure reconstruction in coastal economic zone ground conditions, delivering the reconstructed abutment strictly within the allocated budget.',
      skills: ['Jet Grouting', 'Anchor Piling', 'Bridge Abutment Reconstruction', 'Cost & Budget Control'],
      archiveNote: 'Detailed contract value and duration record maintained in project archive (available on request).',
      photos: [
        {
          src: 'assets/images/project-beza-abutment.jpg',
          caption: 'BEZA Bridge-2, Mirsarai — Bridge abutment structure & substructure rehabilitation zone'
        },
        {
          src: 'assets/images/project-beza-jetgrout.jpg',
          caption: 'BEZA Bridge-2 — Ground improvement & piling rig mobilized on site'
        }
      ]
    },
    {
      id: 'mayors-residence',
      title: 'DNCC Mayor’s Residence (Islam Group) Retrofitting',
      location: 'Dhaka',
      timeline: 'BUET-Approved Structural Retrofit',
      category: 'retrofitting',
      categoryLabel: 'Retrofitting & Govt',
      disciplineOption: 'Structural Retrofitting & Strengthening',
      affiliation: 'EIMS Ltd. • BUET Structural Consultants',
      role: 'Project Manager',
      metric: '6-Storey BUET-Verified Retrofit',
      summary:
        'High-specification RCC structural strengthening and foundation retrofitting of a 6-storey executive residence executed strictly to BUET-approved drawings.',
      scope:
        'RCC column and structural member strengthening, foundation works, material/rebar quality verification, and direct coordination among contractors, suppliers, and BUET structural consultants.',
      challenge:
        'Maintained zero-deviation design conformance across sensitive structural column jacketing works (including RC4 column strengthening) under strict BUET consultant review.',
      skills: ['RCC Retrofitting', 'Foundation Works', 'BUET Design Conformance', 'Executive Client Management'],
      archiveNote: 'Contract value and schedule details maintained in confidential client archive.',
      photos: [
        {
          src: 'assets/images/project-mayors-residence-rc4.jpg',
          caption: 'Mayor’s Residence — Active RCC column jacketing (RC4) with site crew under PPE'
        }
      ]
    },
    {
      id: 'sikder-center',
      title: 'Sikder Center: 17-Storey Tower Foundation Strengthening',
      location: 'Banani 11, Dhaka',
      timeline: 'Completed in 6 Months',
      category: 'retrofitting',
      categoryLabel: 'Retrofitting & Govt',
      disciplineOption: 'Structural Retrofitting & Strengthening',
      affiliation: 'EIMS Ltd.',
      role: 'Project Manager',
      metric: '17 Storeys Strengthened in 6 Months',
      summary:
        'Foundation underpinning via anchor piling and RCC beam/column retrofitting for a 17-storey commercial-cum-residential tower in dense Banani.',
      scope:
        'Installation of deep anchor piles to increase existing foundation capacity alongside RCC beam and column strengthening across the tower frame, with full contractor, supplier, and consultant coordination.',
      challenge:
        'Operated piling and structural strengthening equipment within a congested urban footprint with severely restricted working space, completing the entire scope within a 6-month schedule.',
      skills: ['Anchor Piling', 'RCC Beam & Column Retrofit', 'Urban Site Logistics', 'Accelerated Schedule Control'],
      archiveNote: 'Site photography & contract documentation reserved for verified tender archive (media slot ready).',
      photos: []
    },
    {
      id: 'rapida-factory',
      title: 'Rapida Shoes & Bags Ltd. — Industrial Factory Complex',
      location: 'Gazipur',
      timeline: '2022 – 2025',
      category: 'industrial',
      categoryLabel: 'Industrial & EPZ',
      disciplineOption: 'Industrial & Turnkey Construction',
      affiliation: 'Fortis Group Ltd.',
      role: 'Manager – Engineering & Maintenance',
      metric: '164,000 + 26,000 Sq. Ft. Built Area',
      summary:
        'End-to-end delivery of a 164,000 sq. ft. footwear & bags manufacturing complex plus a 26,000 sq. ft. printing shade and utility buildings.',
      scope:
        'Earthwork, RCC structural framing, exterior building envelope, industrial finishing, MEP/utility integration, dedicated 26,000 sq. ft. printing shade, vendor/quotation evaluation, and contractor bill verification.',
      challenge:
        'Navigated raw-material price fluctuations during peak construction by leveraging vetted supplier relationships and strict daily site progress monitoring, delivering the full complex on schedule.',
      skills: ['Industrial Turnkey Construction', 'Supplier Management', 'CAPEX Cost Control', 'Schedule Delivery'],
      archiveNote: 'Site photography & detailed contract ledger available in Fortis-period portfolio archive (media slot ready).',
      photos: []
    },
    {
      id: 'epz-urm-retrofits',
      title: 'EPZ Factory Retrofits & Sinha Spinning Mill URM Program',
      location: 'Adamjee EPZ, DEPZ, CEPZ, Kanchpur & Manikganj',
      timeline: 'Multi-Site Industrial Program',
      category: 'industrial',
      categoryLabel: 'Industrial & EPZ',
      disciplineOption: 'Structural Retrofitting & Strengthening',
      affiliation: 'EIMS Ltd. • Export Industrial Zones',
      role: 'Project Manager',
      metric: '17 Garment Buildings (33 Stairs) + 6 EPZ Plants',
      summary:
        'Steel plate, micro-concrete, and un-reinforced masonry (URM) steel-mesh strengthening across major export garment, dyeing, and spinning factories.',
      scope:
        'Steel plate strengthening of columns/rafters at Kwun Tong Apparels (Adamjee EPZ) and South China Dyeing (DEPZ); steel-mesh & micro-concrete retrofits at YNA Youngone (5-storey, CEPZ), Kenpark (CEPZ), Beautiful Jackets (5-storey, Manikganj), and Fashion City (Adamjee EPZ); URM steel-mesh strengthening across 17 buildings (33 stairs) and a 3-storey generator building at Sinha Spinning Mill (Kanchpur).',
      challenge:
        'Delivered heavy civil and steel strengthening inside active export factories that could not halt production through phased work plans and regular safety toolbox talks. Where existing rebar differed from drawings, structural designers were consulted immediately to revise details safely.',
      skills: ['Steel Plate Retrofitting', 'URM Steel-Mesh Walls', 'Live-Factory Safety', 'Micro-Concrete'],
      archiveNote: 'Multi-site before/after photo documentation reserved for client archive (media slot ready).',
      photos: []
    },
    {
      id: 'abdul-monem-facade',
      title: 'Abdul Monem Business District — 16-Storey Commercial Facade',
      location: 'Dhaka',
      timeline: 'High-Rise Envelope Execution',
      category: 'commercial',
      categoryLabel: 'Commercial Facade',
      disciplineOption: 'Architectural Facade & Glazing',
      affiliation: 'Housing & Technology Ltd.',
      role: 'Senior Project Engineer (Drawings, Estimation & Supervision)',
      metric: '50,000 Sqm Glazing + 16,000 Sqm ACP',
      summary:
        'Large-scale architectural building envelope spanning 50,000 sqm stick-system curtain wall glazing, 16,000 sqm ACP cladding, and 1,000 sqm point-fixing glazing.',
      scope:
        'Supervision of shop drawings, material estimation, aluminium fabrication, stick-system curtain wall assembly, ACP cladding, and feature point-fixing glazing on a 16-storey corporate landmark.',
      challenge:
        'Enforced strict wind-load compliance, waterproofing sealant integrity, and alignment precision across 67,000 sqm of combined high-elevation commercial facade systems.',
      skills: ['Stick Curtain Wall', 'ACP Cladding', 'Point-Fixing Glazing', 'Estimation & Shop Drawings'],
      archiveNote: 'Facade shop drawing & archive photography slot ready for final client media upload.',
      photos: []
    }
  ];

  // DOM References
  const siteHeader = document.getElementById('site-header');
  const scrollProgressBar = document.getElementById('scroll-progress-bar');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const menuIconOpen = document.getElementById('menu-icon-open');
  const menuIconClose = document.getElementById('menu-icon-close');

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const projectsGrid = document.getElementById('projects-grid');
  const filterButtons = Array.from(document.querySelectorAll('.filter-btn'));

  const modal = document.getElementById('project-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const modalInquireBtn = document.getElementById('modal-inquire-btn');
  const modalCategory = document.getElementById('modal-category');
  const modalTitle = document.getElementById('modal-title');
  const modalMedia = document.getElementById('modal-media');
  const modalLocation = document.getElementById('modal-location');
  const modalRole = document.getElementById('modal-role');
  const modalMetric = document.getElementById('modal-metric');
  const modalScope = document.getElementById('modal-scope');
  const modalChallenge = document.getElementById('modal-challenge');
  const modalSkills = document.getElementById('modal-skills');
  const modalArchiveNote = document.getElementById('modal-archive-note');

  const form = document.getElementById('consultation-form');
  const formError = document.getElementById('form-error');
  const projectTypeSelect = document.getElementById('project-type');

  const toast = document.getElementById('toast-notification');
  const toastMessage = document.getElementById('toast-message');
  const toastActions = document.getElementById('toast-actions');
  const closeToastBtn = document.getElementById('close-toast-btn');

  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  let activeProject = null;
  let lastFocusedTrigger = null;
  let toastTimer = null;

  // Escape HTML safely for dynamic rendering
  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // Update category filter badge counts dynamically from dataset
  function syncFilterCounts() {
    const counts = {
      all: FLAGSHIP_PROJECTS.length,
      retrofitting: FLAGSHIP_PROJECTS.filter((p) => p.category === 'retrofitting').length,
      infrastructure: FLAGSHIP_PROJECTS.filter((p) => p.category === 'infrastructure').length,
      industrial: FLAGSHIP_PROJECTS.filter((p) => p.category === 'industrial').length,
      commercial: FLAGSHIP_PROJECTS.filter((p) => p.category === 'commercial').length
    };
    document.querySelectorAll('.filter-count').forEach((badge) => {
      const key = badge.getAttribute('data-count');
      if (key && key in counts) {
        badge.textContent = String(counts[key]);
      }
    });
  }

  // Render Project Cards
  function renderProjects(filter = 'all') {
    if (!projectsGrid) return;
    const list =
      filter === 'all'
        ? FLAGSHIP_PROJECTS
        : FLAGSHIP_PROJECTS.filter((project) => project.category === filter);

    projectsGrid.innerHTML = list
      .map((project, index) => {
        const hasPhotos = project.photos && project.photos.length > 0;
        const delayMs = Math.min((index % 3) * 75, 180);
        const mediaHtml = hasPhotos
          ? `
            <img
              src="${escapeHtml(project.photos[0].src)}"
              alt="${escapeHtml(project.photos[0].caption)}"
              loading="lazy"
            >
            <span class="media-badge">${escapeHtml(project.categoryLabel)}</span>
            <span class="media-photo-tag">${project.photos.length > 1 ? `${project.photos.length} Site Photos` : 'Verified Site Photo'}</span>
          `
          : `
            <div class="project-card__placeholder">
              <div class="placeholder-grid-mark">
                <span>${escapeHtml(project.categoryLabel)}</span>
                <span>ARCHIVE READY</span>
              </div>
              <div class="placeholder-center">
                <strong>${escapeHtml(project.metric)}</strong>
                <span>Verified engineering record &bull; Site photo slot ready</span>
              </div>
            </div>
          `;

        return `
          <article class="project-card" data-reveal data-reveal-delay="${delayMs}">
            <div class="project-card__media">${mediaHtml}</div>
            <div class="project-card__body">
              <div>
                <div class="project-card__meta">
                  <span>${escapeHtml(project.location)}</span>
                  <span>${escapeHtml(project.timeline)}</span>
                </div>
                <h3 class="project-card__title">${escapeHtml(project.title)}</h3>
                <div class="project-card__metric">
                  <span class="status-dot" aria-hidden="true"></span>
                  <span>${escapeHtml(project.metric)}</span>
                </div>
                <p class="project-card__summary">${escapeHtml(project.summary)}</p>
              </div>
              <div class="project-card__footer">
                <span class="project-card__org">${escapeHtml(project.affiliation)}</span>
                <button
                  type="button"
                  class="project-specs-btn"
                  data-project-id="${escapeHtml(project.id)}"
                  aria-haspopup="dialog"
                >
                  <span>Technical Specs</span>
                  <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                </button>
              </div>
            </div>
          </article>
        `;
      })
      .join('');

    observeRevealElements(projectsGrid.querySelectorAll('[data-reveal]'));
  }

  // Filter Tabs
  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const selected = btn.getAttribute('data-filter') || 'all';
      filterButtons.forEach((b) => {
        const isCurrent = b === btn;
        b.classList.toggle('is-active', isCurrent);
        b.setAttribute('aria-selected', String(isCurrent));
      });
      renderProjects(selected);
    });
  });

  // Event delegation for opening project modal
  if (projectsGrid) {
    projectsGrid.addEventListener('click', (event) => {
      const trigger = event.target.closest('[data-project-id]');
      if (!trigger) return;
      const projectId = trigger.getAttribute('data-project-id');
      if (projectId) {
        lastFocusedTrigger = trigger;
        openModal(projectId);
      }
    });
  }

  function openModal(projectId) {
    const project = FLAGSHIP_PROJECTS.find((p) => p.id === projectId);
    if (!project || !modal) return;
    activeProject = project;

    modalCategory.textContent = `${project.categoryLabel} • ${project.timeline}`;
    modalTitle.textContent = project.title;
    modalLocation.textContent = project.location;
    modalRole.textContent = project.role;
    modalMetric.textContent = project.metric;
    modalScope.textContent = project.scope;
    modalChallenge.textContent = project.challenge;
    modalArchiveNote.textContent = project.archiveNote;

    modalSkills.innerHTML = project.skills
      .map((skill) => `<span class="tag">${escapeHtml(skill)}</span>`)
      .join('');

    if (project.photos && project.photos.length > 0) {
      const galleryClass =
        project.photos.length > 1
          ? 'modal-media__gallery modal-media__gallery--two'
          : 'modal-media__gallery';
      modalMedia.innerHTML = `
        <div class="${galleryClass}">
          ${project.photos
            .map(
              (photo) => `
                <figure class="modal-photo">
                  <img src="${escapeHtml(photo.src)}" alt="${escapeHtml(photo.caption)}">
                  <figcaption>${escapeHtml(photo.caption)}</figcaption>
                </figure>
              `
            )
            .join('')}
        </div>
      `;
    } else {
      modalMedia.innerHTML = `
        <div class="modal-media-placeholder">
          <strong>Client Site Photography &amp; As-Built Visual Slot</strong>
          <p>Verified engineering scope recorded in portfolio. Project site photography ready for approved client media insertion.</p>
        </div>
      `;
    }

    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    closeModalBtn?.focus();
  }

  function closeModal() {
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    document.body.style.overflow = '';
    if (lastFocusedTrigger && typeof lastFocusedTrigger.focus === 'function') {
      lastFocusedTrigger.focus();
    }
  }

  closeModalBtn?.addEventListener('click', closeModal);

  modalInquireBtn?.addEventListener('click', () => {
    if (activeProject && projectTypeSelect) {
      projectTypeSelect.value = activeProject.disciplineOption;
    }
    closeModal();
  });

  modal?.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  // Mobile Drawer Controls (Smooth CSS transition + accessible focusability)
  const mobileDrawerLinks = mobileDrawer
    ? Array.from(mobileDrawer.querySelectorAll('a, button'))
    : [];

  function setDrawerOpen(open) {
    if (!mobileDrawer || !mobileMenuBtn) return;
    mobileDrawer.classList.toggle('is-open', open);
    mobileDrawer.setAttribute('aria-hidden', String(!open));
    mobileMenuBtn.setAttribute('aria-expanded', String(open));
    mobileMenuBtn.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    menuIconOpen?.classList.toggle('is-hidden', open);
    menuIconClose?.classList.toggle('is-hidden', !open);
    mobileDrawerLinks.forEach((el) => {
      el.setAttribute('tabindex', open ? '0' : '-1');
    });
  }

  mobileMenuBtn?.addEventListener('click', () => {
    const isCurrentlyOpen = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
    setDrawerOpen(!isCurrentlyOpen);
  });

  mobileDrawer?.addEventListener('click', (event) => {
    if (event.target.closest('.mobile-nav-link')) {
      setDrawerOpen(false);
    }
  });

  document.addEventListener('click', (event) => {
    if (
      mobileDrawer &&
      mobileDrawer.classList.contains('is-open') &&
      siteHeader &&
      !siteHeader.contains(event.target)
    ) {
      setDrawerOpen(false);
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024 && mobileDrawer && mobileDrawer.classList.contains('is-open')) {
      setDrawerOpen(false);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      if (modal && !modal.hidden) {
        closeModal();
      } else if (mobileDrawer && mobileDrawer.classList.contains('is-open')) {
        setDrawerOpen(false);
        mobileMenuBtn?.focus();
      }
    }
  });

  // Cinematic Hero Slider (Accessible, lightweight, reduced-motion aware)
  function initHeroSlider() {
    const slider = document.getElementById('hero-slider');
    if (!slider || HERO_SLIDES.length === 0) return;

    const stageSlides = Array.from(slider.querySelectorAll('[data-hero-slide]'));
    const bgSlides = Array.from(document.querySelectorAll('[data-hero-bg-slide]'));
    const dots = Array.from(slider.querySelectorAll('[data-hero-dot]'));
    const prevBtn = document.getElementById('hero-prev-btn');
    const nextBtn = document.getElementById('hero-next-btn');
    const pauseBtn = document.getElementById('hero-pause-btn');
    const iconPause = document.getElementById('hero-icon-pause');
    const iconPlay = document.getElementById('hero-icon-play');
    const kickerEl = document.getElementById('hero-slide-kicker');
    const counterEl = document.getElementById('hero-slide-counter');
    const locationEl = document.getElementById('hero-slide-location');
    const titleEl = document.getElementById('hero-slide-title');
    const descEl = document.getElementById('hero-slide-desc');

    const INTERVAL_MS = 6500;
    let currentIndex = 0;
    let userPaused = prefersReducedMotion.matches;
    let hoverOrFocusPaused = false;
    let timerId = null;

    function formatSlideCounter(index) {
      const current = String(index + 1).padStart(2, '0');
      const total = String(HERO_SLIDES.length).padStart(2, '0');
      return `${current} / ${total}`;
    }

    function syncPauseState() {
      const effectivelyPaused = userPaused || hoverOrFocusPaused || document.hidden;
      slider.classList.toggle('is-paused', effectivelyPaused);
      if (pauseBtn) {
        pauseBtn.setAttribute('aria-pressed', String(userPaused));
        pauseBtn.setAttribute(
          'aria-label',
          userPaused ? 'Resume slide autoplay' : 'Pause slide autoplay'
        );
      }
      iconPause?.classList.toggle('is-hidden', userPaused);
      iconPlay?.classList.toggle('is-hidden', !userPaused);
    }

    function stopAutoplay() {
      if (timerId !== null) {
        window.clearInterval(timerId);
        timerId = null;
      }
    }

    function startAutoplay() {
      stopAutoplay();
      if (userPaused || hoverOrFocusPaused || document.hidden || prefersReducedMotion.matches) {
        syncPauseState();
        return;
      }
      syncPauseState();
      timerId = window.setInterval(() => {
        goToSlide(currentIndex + 1);
      }, INTERVAL_MS);
    }

    function goToSlide(nextIndex) {
      const count = HERO_SLIDES.length;
      currentIndex = ((nextIndex % count) + count) % count;
      const slideData = HERO_SLIDES[currentIndex];

      stageSlides.forEach((el, idx) => {
        const active = idx === currentIndex;
        el.classList.toggle('is-active', active);
        el.setAttribute('aria-hidden', String(!active));
      });

      bgSlides.forEach((el, idx) => {
        el.classList.toggle('is-active', idx === currentIndex);
      });

      dots.forEach((dot, idx) => {
        const active = idx === currentIndex;
        dot.classList.remove('is-active');
        dot.setAttribute('aria-selected', String(active));
        if (active) {
          // Force reflow so the subtle progress bar restarts cleanly on slide change
          void dot.offsetWidth;
          dot.classList.add('is-active');
        }
      });

      if (kickerEl) kickerEl.textContent = slideData.kicker;
      if (counterEl) counterEl.textContent = formatSlideCounter(currentIndex);
      if (locationEl) locationEl.textContent = slideData.location;
      if (titleEl) titleEl.textContent = slideData.title;
      if (descEl) descEl.textContent = slideData.description;
    }

    prevBtn?.addEventListener('click', () => {
      goToSlide(currentIndex - 1);
      startAutoplay();
    });

    nextBtn?.addEventListener('click', () => {
      goToSlide(currentIndex + 1);
      startAutoplay();
    });

    dots.forEach((dot) => {
      dot.addEventListener('click', () => {
        const idx = Number(dot.getAttribute('data-hero-dot'));
        if (Number.isFinite(idx)) {
          goToSlide(idx);
          startAutoplay();
        }
      });
    });

    pauseBtn?.addEventListener('click', () => {
      userPaused = !userPaused;
      if (userPaused) {
        stopAutoplay();
        syncPauseState();
      } else {
        startAutoplay();
      }
    });

    slider.addEventListener('mouseenter', () => {
      hoverOrFocusPaused = true;
      stopAutoplay();
      syncPauseState();
    });

    slider.addEventListener('mouseleave', () => {
      hoverOrFocusPaused = false;
      startAutoplay();
    });

    slider.addEventListener('focusin', () => {
      hoverOrFocusPaused = true;
      stopAutoplay();
      syncPauseState();
    });

    slider.addEventListener('focusout', (event) => {
      if (!slider.contains(event.relatedTarget)) {
        hoverOrFocusPaused = false;
        startAutoplay();
      }
    });

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        stopAutoplay();
        syncPauseState();
      } else {
        startAutoplay();
      }
    });

    if (typeof prefersReducedMotion.addEventListener === 'function') {
      prefersReducedMotion.addEventListener('change', (event) => {
        if (event.matches) {
          userPaused = true;
          stopAutoplay();
          syncPauseState();
        }
      });
    }

    goToSlide(0);
    startAutoplay();
  }

  // Header scroll elevation, gold scroll-progress line & active nav highlight
  const navLinks = Array.from(document.querySelectorAll('.desktop-nav .nav-link'));
  const observedSections = navLinks
    .map((link) => {
      const id = link.getAttribute('href');
      return id ? document.querySelector(id) : null;
    })
    .filter(Boolean);

  let scrollTicking = false;

  function syncScrollUI() {
    scrollTicking = false;
    const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
    siteHeader?.classList.toggle('is-scrolled', scrollTop > 28);

    if (scrollProgressBar) {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(Math.max(scrollTop / docHeight, 0), 1) : 0;
      scrollProgressBar.style.transform = `scaleX(${progress.toFixed(4)})`;
    }
  }

  function requestScrollSync() {
    if (!scrollTicking) {
      scrollTicking = true;
      window.requestAnimationFrame(syncScrollUI);
    }
  }

  window.addEventListener('scroll', requestScrollSync, { passive: true });
  window.addEventListener('resize', requestScrollSync, { passive: true });
  syncScrollUI();

  if ('IntersectionObserver' in window && observedSections.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = `#${entry.target.id}`;
            navLinks.forEach((link) => {
              link.classList.toggle('is-active', link.getAttribute('href') === id);
            });
          }
        });
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: 0.01 }
    );
    observedSections.forEach((sec) => observer.observe(sec));
  }

  // Performant Scroll-Reveal & Verified Metric Counter Animation
  let revealObserver = null;

  function animateCounter(el) {
    const target = Number(el.getAttribute('data-counter-target'));
    const suffix = el.getAttribute('data-counter-suffix') || '';
    if (!Number.isFinite(target) || el.dataset.counterDone === 'true') return;
    el.dataset.counterDone = 'true';

    if (prefersReducedMotion.matches) {
      el.textContent = `${target.toLocaleString('en-US')}${suffix}`;
      return;
    }

    const duration = 900;
    const startTime = performance.now();

    function step(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);
      el.textContent = `${current.toLocaleString('en-US')}${suffix}`;
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        el.textContent = `${target.toLocaleString('en-US')}${suffix}`;
      }
    }

    window.requestAnimationFrame(step);
  }

  function initMotionObservers() {
    const revealTargets = document.querySelectorAll('[data-reveal]');
    if (prefersReducedMotion.matches || !('IntersectionObserver' in window)) {
      revealTargets.forEach((el) => el.classList.add('is-revealed'));
      return;
    }

    document.documentElement.classList.add('js-motion-ready');

    revealObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const delay = Number(el.getAttribute('data-reveal-delay')) || 0;

          const revealNow = () => {
            el.classList.add('is-revealed');
            const counterEl = el.querySelector('[data-counter-target]');
            if (counterEl) {
              animateCounter(counterEl);
            }
          };

          if (delay > 0) {
            window.setTimeout(revealNow, delay);
          } else {
            revealNow();
          }

          obs.unobserve(el);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );

    observeRevealElements(revealTargets);
  }

  function observeRevealElements(elements) {
    if (!elements || elements.length === 0) return;
    if (!revealObserver || prefersReducedMotion.matches) {
      elements.forEach((el) => el.classList.add('is-revealed'));
      return;
    }
    elements.forEach((el) => {
      if (!el.classList.contains('is-revealed')) {
        revealObserver.observe(el);
      }
    });
  }

  // Toast Notification Helpers
  function showToast(message, mailtoHref = '') {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = message;
    if (toastActions) {
      toastActions.innerHTML = mailtoHref
        ? `<a href="${escapeHtml(mailtoHref)}">Open pre-filled email to neerfort@gmail.com &rarr;</a>`
        : '';
    }
    toast.hidden = false;
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(hideToast, 9000);
  }

  function hideToast() {
    if (!toast) return;
    toast.hidden = true;
  }

  closeToastBtn?.addEventListener('click', hideToast);

  // Consultation Form Validation & Mailto Dispatch Preparation
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form) return;

    const name = form.elements.namedItem('name')?.value.trim() || '';
    const organization = form.elements.namedItem('organization')?.value.trim() || '';
    const contact = form.elements.namedItem('contact')?.value.trim() || '';
    const location = form.elements.namedItem('location')?.value.trim() || '';
    const projectType = form.elements.namedItem('projectType')?.value || '';
    const message = form.elements.namedItem('message')?.value.trim() || '';

    if (!name || !organization || !contact || !location || !message) {
      if (formError) {
        formError.textContent = 'Please complete all required fields (*) before submitting your technical inquiry.';
        formError.hidden = false;
      }
      return;
    }

    if (formError) {
      formError.hidden = true;
      formError.textContent = '';
    }

    const subject = encodeURIComponent(`NeerFort Inquiry: ${projectType} — ${organization}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Organization: ${organization}`,
        `Contact: ${contact}`,
        `Project Location: ${location}`,
        `Discipline: ${projectType}`,
        '',
        'Project Brief:',
        message
      ].join('\n')
    );
    const mailtoHref = `mailto:neerfort@gmail.com?cc=engr.mdsaifulhaque@gmail.com&subject=${subject}&body=${body}`;

    showToast(
      `Thank you, ${name} (${organization}). Your brief for ${projectType} (${location}) is ready to dispatch to NeerFort.`,
      mailtoHref
    );
    form.reset();
  });

  // Initial Render & Motion Setup
  initHeroSlider();
  initMotionObservers();
  syncFilterCounts();
  renderProjects('all');
})();
