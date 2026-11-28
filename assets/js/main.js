/* ==========================================================================
   NEERFORT — Modular Client-Side Interactions
   Centralized static data (Laravel + MySQL migration ready)
   100% verified portfolio & location records from Md. Saiful Haque, MIEB
   ========================================================================== */

(() => {
  'use strict';

  // 1. Cinematic Hero Slides Data (Illustrative engineering discipline visuals)
  const HERO_SLIDES = [
    {
      kicker: 'Industrial & Turnkey Construction',
      title: 'Modern Industrial & Turnkey Engineering'
    },
    {
      kicker: 'Structural & Seismic Strengthening',
      title: 'Structural Engineering & Seismic Retrofitting'
    },
    {
      kicker: 'Civil Infrastructure & Building Envelopes',
      title: 'Commercial Infrastructure & Architectural Facades'
    }
  ];

  // 2. Verified Bangladesh Project Locations Data
  const PROJECT_LOCATIONS = {
    dhaka: {
      name: 'Dhaka Metropolitan',
      sector: 'Corporate HQ • Govt, Aviation & High-Rise',
      projects:
        'BTCL Headquarters seismic retrofitting, HSIA Expansion stormwater package, DNCC Mayor’s Residence retrofit, Sikder Center (17-storey Banani), Abdul Monem Business District facade, multi-storey residential apartments, and NeerFort Corporate Office (Elephant Road).'
    },
    gazipur: {
      name: 'Gazipur Industrial Belt',
      sector: 'Turnkey Industrial & Commercial Fit-Outs',
      projects:
        'Rapida Shoes & Bags Ltd. 164,000 sq. ft. manufacturing complex plus 26,000 sq. ft. printing shade and utility buildings, alongside Arabi Fashion display room interiors.'
    },
    chattogram: {
      name: 'Mirsarai (BEZA) & Chattogram (CEPZ)',
      sector: 'Geotechnical Stabilization & Export Facilities',
      projects:
        'BEZA Bridge-2 abutment reconstruction with high-pressure jet grouting and deep anchor piling at Mirsarai; structural retrofits for YNA Youngone (5-storey) and Kenpark inside CEPZ.'
    },
    narayanganj: {
      name: 'Adamjee EPZ, Kanchpur & Shanarpar',
      sector: 'EPZ Industrial Retrofitting & Ground Engineering',
      projects:
        'Sinha Spinning Mill URM steel-mesh program across 17 garment buildings (33 stairs) and 3-storey generator building; steel plate and micro-concrete retrofits at Kwun Tong Apparels & Fashion City (Adamjee EPZ); jet grouting at Shanarpar.'
    },
    savar: {
      name: 'Savar (DEPZ)',
      sector: 'Export Manufacturing Strengthening',
      projects:
        'Steel plate strengthening of structural columns and rafters at South China Dyeing inside Dhaka Export Processing Zone (DEPZ) under live-factory safety controls.'
    },
    manikganj: {
      name: 'Manikganj',
      sector: 'Multi-Storey Factory Retrofit',
      projects:
        'Steel-mesh and micro-concrete structural strengthening across the 5-storey Beautiful Jackets industrial facility without halting export production.'
    },
    bandarban: {
      name: 'Bandarban (Chandra-Pahar)',
      sector: 'Certified Geotechnical & Seismic Investigation',
      projects:
        'Chandra-Pahar seismic down-hole geotechnical testing and sub-soil investigation supporting hillside and challenging terrain engineering.'
    }
  };

  // 3. Verified Flagship Projects Dataset (Tier 1 Spotlight, Tier 2 Verified Site Photos, Tier 3 Technical Dossiers)
  const FLAGSHIP_PROJECTS = [
    {
      id: 'btcl-hq',
      tier: 'spotlight',
      title: 'BTCL Headquarters: Structural & Seismic Retrofitting',
      location: 'Dhaka',
      timeline: 'Jul 2025 – Present',
      category: 'retrofitting',
      categoryLabel: 'Retrofitting & Govt',
      disciplineOption: 'Structural Retrofitting',
      affiliation: 'BUET Supervised • Occupied Govt HQ',
      role: 'Project In-Charge (BUET Dept. of Civil Engineering Supervision)',
      metric: 'Active Govt HQ • Zero Disruption',
      keyFigures: ['Occupied Govt HQ', 'BUET Supervised', 'Off-Hour Phasing'],
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
          webp: 'assets/images/project-btcl-strengthening.webp',
          caption: 'BTCL HQ — Completed structural FRP wrapping & seismic strengthening grid',
          width: 396,
          height: 297
        },
        {
          src: 'assets/images/project-btcl-prep.jpg',
          webp: 'assets/images/project-btcl-prep.webp',
          caption: 'BTCL HQ — Surface chipping & structural preparation under PPE protocol',
          width: 408,
          height: 306
        },
        {
          src: 'assets/images/project-btcl-crew-wrap.jpg',
          webp: 'assets/images/project-btcl-crew-wrap.webp',
          caption: 'BTCL HQ — Site crew applying horizontal & vertical strengthening strips',
          width: 219,
          height: 292
        },
        {
          src: 'assets/images/project-btcl-review.jpg',
          webp: 'assets/images/project-btcl-review.webp',
          caption: 'BTCL HQ — On-site technical drawing verification against strengthened structure',
          width: 225,
          height: 300
        }
      ]
    },
    {
      id: 'hsia-stormwater',
      tier: 'verified',
      title: 'HSIA Expansion — Stormwater Treatment & Drainage Package',
      location: 'Dhaka',
      timeline: 'Sep 2021 – Jun 2022',
      category: 'infrastructure',
      categoryLabel: 'Infra & Geo',
      disciplineOption: 'Civil Infrastructure',
      affiliation: 'Desh Contractors & Developers Ltd. • CAAB',
      role: 'Project Manager (Primary Contact with CAAB & Consultants)',
      metric: 'Live International Airport Works',
      keyFigures: ['Active International Airport', 'CAAB Coordinated', 'Night-Window Execution'],
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
          webp: 'assets/images/project-hsia-stormwater.webp',
          caption: 'HSIA Expansion — Reinforced stormwater culvert installation & technical supervision',
          width: 479,
          height: 359
        },
        {
          src: 'assets/images/project-hsia-formwork.jpg',
          webp: 'assets/images/project-hsia-formwork.webp',
          caption: 'HSIA Expansion — Concrete pouring into reinforced stormwater drainage formwork',
          width: 214,
          height: 380
        },
        {
          src: 'assets/images/project-hsia-channel.jpg',
          webp: 'assets/images/project-hsia-channel.webp',
          caption: 'HSIA Expansion — Excavated drainage channel base preparation under site PPE rules',
          width: 214,
          height: 380
        }
      ]
    },
    {
      id: 'beza-bridge-2',
      tier: 'verified',
      title: 'BEZA Bridge-2 Abutment Stabilization & Reconstruction',
      location: 'Mirsarai, Chattogram',
      timeline: 'Economic Zone Infrastructure',
      category: 'infrastructure',
      categoryLabel: 'Infra & Geo',
      disciplineOption: 'Geotechnical Engineering',
      affiliation: 'EIMS Ltd. • BEZA Client',
      role: 'Project Manager (Geotechnical & Substructure)',
      metric: 'Jet Grouting & Anchor Piling • On Budget',
      keyFigures: ['BEZA Economic Zone', 'Jet Grouting + Anchor Piles', 'Delivered On Budget'],
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
          src: 'assets/images/project-beza-rehab.jpg',
          webp: 'assets/images/project-beza-rehab.webp',
          caption: 'BEZA Bridge-2, Mirsarai — Bridge abutment wall rehabilitation works on site',
          width: 226,
          height: 169
        },
        {
          src: 'assets/images/project-beza-jetgrout.jpg',
          webp: 'assets/images/project-beza-jetgrout.webp',
          caption: 'BEZA Bridge-2 — Ground improvement & piling rig mobilized on site',
          width: 226,
          height: 169
        },
        {
          src: 'assets/images/project-beza-abutment.jpg',
          webp: 'assets/images/project-beza-abutment.webp',
          caption: 'BEZA Bridge-2, Mirsarai — Bridge abutment structure & substructure piers over channel',
          width: 226,
          height: 301
        }
      ]
    },
    {
      id: 'mayors-residence',
      tier: 'verified',
      title: 'DNCC Mayor’s Residence (Islam Group) Retrofitting',
      location: 'Dhaka',
      timeline: 'BUET-Approved Structural Retrofit',
      category: 'retrofitting',
      categoryLabel: 'Retrofitting & Govt',
      disciplineOption: 'Structural Retrofitting',
      affiliation: 'EIMS Ltd. • BUET Structural Consultants',
      role: 'Project Manager',
      metric: '6-Storey BUET-Verified Retrofit',
      keyFigures: ['6-Storey Executive Residence', 'BUET-Approved Design', 'Zero Deviation'],
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
          webp: 'assets/images/project-mayors-residence-rc4.webp',
          caption: 'Mayor’s Residence — Active RCC column jacketing (RC4) with site crew under PPE',
          width: 230,
          height: 306
        },
        {
          src: 'assets/images/project-mayors-residence-rb4.jpg',
          webp: 'assets/images/project-mayors-residence-rb4.webp',
          caption: 'Mayor’s Residence — Structural beam/column reinforcement cage & jacketing formwork (RB4)',
          width: 218,
          height: 290
        }
      ]
    },
    {
      id: 'sikder-center',
      tier: 'dossier',
      title: 'Sikder Center: 17-Storey Tower Foundation Strengthening',
      location: 'Banani 11, Dhaka',
      timeline: 'Completed in 6 Months',
      category: 'retrofitting',
      categoryLabel: 'Retrofitting & Govt',
      disciplineOption: 'Structural Retrofitting',
      affiliation: 'EIMS Ltd.',
      role: 'Project Manager',
      metric: '17 Storeys Strengthened in 6 Months',
      keyFigures: ['17 Storeys', 'Completed in 6 Months', 'Urban Anchor Piling'],
      summary:
        'Foundation underpinning via anchor piling and RCC beam/column retrofitting for a 17-storey commercial-cum-residential tower in dense Banani.',
      scope:
        'Installation of deep anchor piles to increase existing foundation capacity alongside RCC beam and column strengthening across the tower frame, with full contractor, supplier, and consultant coordination.',
      challenge:
        'Operated piling and structural strengthening equipment within a congested urban footprint with severely restricted working space, completing the entire scope within a 6-month schedule.',
      skills: ['Anchor Piling', 'RCC Beam & Column Retrofit', 'Urban Site Logistics', 'Accelerated Schedule Control'],
      archiveNote: 'Site photography & contract documentation reserved for verified tender archive.',
      photos: [],
      conceptVisual: {
        src: 'assets/images/concept-sikder-tower.jpg',
        webp640: 'assets/images/concept-sikder-tower-640.webp',
        webp1200: 'assets/images/concept-sikder-tower-1200.webp',
        alt: 'Illustrative architectural concept of a multi-storey reinforced-concrete urban commercial tower representing high-rise foundation and structural retrofitting',
        caption: 'Architectural concept visual illustrating the engineering category — does not depict the actual completed site.',
        width: 1200,
        height: 675
      }
    },
    {
      id: 'rapida-factory',
      tier: 'dossier',
      title: 'Rapida Shoes & Bags Ltd. — Industrial Factory Complex',
      location: 'Gazipur',
      timeline: '2022 – 2025',
      category: 'industrial',
      categoryLabel: 'Industrial & EPZ',
      disciplineOption: 'Industrial Construction',
      affiliation: 'Fortis Group Ltd.',
      role: 'Manager – Engineering & Maintenance',
      metric: '164,000 + 26,000 Sq. Ft. Built Area',
      keyFigures: ['164,000 Sq. Ft. Factory', '26,000 Sq. Ft. Shade', 'On-Schedule Delivery'],
      summary:
        'End-to-end delivery of a 164,000 sq. ft. footwear & bags manufacturing complex plus a 26,000 sq. ft. printing shade and utility buildings.',
      scope:
        'Earthwork, RCC structural framing, exterior building envelope, industrial finishing, MEP/utility integration, dedicated 26,000 sq. ft. printing shade, vendor/quotation evaluation, and contractor bill verification.',
      challenge:
        'Navigated raw-material price fluctuations during peak construction by leveraging vetted supplier relationships and strict daily site progress monitoring, delivering the full complex on schedule.',
      skills: ['Industrial Turnkey Construction', 'Supplier Management', 'CAPEX Cost Control', 'Schedule Delivery'],
      archiveNote: 'Site photography & detailed contract ledger available in Fortis-period portfolio archive.',
      photos: [],
      conceptVisual: {
        src: 'assets/images/concept-rapida-factory.jpg',
        webp640: 'assets/images/concept-rapida-factory-640.webp',
        webp1200: 'assets/images/concept-rapida-factory-1200.webp',
        alt: 'Illustrative architectural concept of a large modern multi-bay industrial manufacturing factory complex and utility annex',
        caption: 'Architectural concept visual illustrating the engineering category — does not depict the actual completed site.',
        width: 1200,
        height: 675
      }
    },
    {
      id: 'epz-urm-retrofits',
      tier: 'dossier',
      title: 'EPZ Factory Retrofits & Sinha Spinning Mill URM Program',
      location: 'Adamjee EPZ, DEPZ, CEPZ, Kanchpur & Manikganj',
      timeline: 'Multi-Site Industrial Program',
      category: 'industrial',
      categoryLabel: 'Industrial & EPZ',
      disciplineOption: 'Structural Retrofitting',
      affiliation: 'EIMS Ltd. • Export Industrial Zones',
      role: 'Project Manager',
      metric: '17 Garment Buildings (33 Stairs) + 6 EPZ Plants',
      keyFigures: ['17 Buildings / 33 Stairs', '6 Active EPZ Plants', 'Steel Plate & URM Mesh'],
      summary:
        'Steel plate, micro-concrete, and un-reinforced masonry (URM) steel-mesh strengthening across major export garment, dyeing, and spinning factories.',
      scope:
        'Steel plate strengthening of columns/rafters at Kwun Tong Apparels (Adamjee EPZ) and South China Dyeing (DEPZ); steel-mesh & micro-concrete retrofits at YNA Youngone (5-storey, CEPZ), Kenpark (CEPZ), Beautiful Jackets (5-storey, Manikganj), and Fashion City (Adamjee EPZ); URM steel-mesh strengthening across 17 buildings (33 stairs) and a 3-storey generator building at Sinha Spinning Mill (Kanchpur).',
      challenge:
        'Delivered heavy civil and steel strengthening inside active export factories that could not halt production through phased work plans and regular safety toolbox talks. Where existing rebar differed from drawings, structural designers were consulted immediately to revise details safely.',
      skills: ['Steel Plate Retrofitting', 'URM Steel-Mesh Walls', 'Live-Factory Safety', 'Micro-Concrete'],
      archiveNote: 'Multi-site technical documentation reserved for verified client archive.',
      photos: [],
      conceptVisual: {
        src: 'assets/images/concept-epz-retrofit.jpg',
        webp640: 'assets/images/concept-epz-retrofit-640.webp',
        webp1200: 'assets/images/concept-epz-retrofit-1200.webp',
        alt: 'Illustrative structural engineering concept showing steel H-columns, bolted gusset rafter reinforcement, and reinforced industrial bays',
        caption: 'Architectural concept visual illustrating the engineering category — does not depict the actual completed site.',
        width: 1200,
        height: 675
      }
    },
    {
      id: 'abdul-monem-facade',
      tier: 'dossier',
      title: 'Abdul Monem Business District — 16-Storey Commercial Facade',
      location: 'Dhaka',
      timeline: 'High-Rise Envelope Execution',
      category: 'commercial',
      categoryLabel: 'Commercial Facade',
      disciplineOption: 'Architectural Facades',
      affiliation: 'Housing & Technology Ltd.',
      role: 'Senior Project Engineer (Drawings, Estimation & Supervision)',
      metric: '50,000 Sqm Glazing + 16,000 Sqm ACP',
      keyFigures: ['50,000 Sqm Glazing', '16,000 Sqm ACP', '1,000 Sqm Point-Fixing'],
      summary:
        'Large-scale architectural building envelope spanning 50,000 sqm stick-system curtain wall glazing, 16,000 sqm ACP cladding, and 1,000 sqm point-fixing glazing.',
      scope:
        'Supervision of shop drawings, material estimation, aluminium fabrication, stick-system curtain wall assembly, ACP cladding, and feature point-fixing glazing on a 16-storey corporate landmark.',
      challenge:
        'Enforced strict wind-load compliance, waterproofing sealant integrity, and alignment precision across 67,000 sqm of combined high-elevation commercial facade systems.',
      skills: ['Stick Curtain Wall', 'ACP Cladding', 'Point-Fixing Glazing', 'Estimation & Shop Drawings'],
      archiveNote: 'Facade shop drawing & archive records available upon formal pre-qualification request.',
      photos: [],
      conceptVisual: {
        src: 'assets/images/concept-abdul-monem-facade.jpg',
        webp640: 'assets/images/concept-abdul-monem-facade-640.webp',
        webp1200: 'assets/images/concept-abdul-monem-facade-1200.webp',
        alt: 'Illustrative architectural concept of a modern corporate commercial tower featuring glass curtain wall glazing, ACP cladding, and point-fixing atrium glass',
        caption: 'Architectural concept visual illustrating the engineering category — does not depict the actual completed site.',
        width: 1200,
        height: 675
      }
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
  const modalOverview = document.getElementById('modal-overview');
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

  const whatsappWidget = document.getElementById('whatsapp-widget');
  const whatsappLauncher = document.getElementById('whatsapp-launcher');
  const whatsappChatDialog = document.getElementById('whatsapp-chat-dialog');
  const whatsappChatClose = document.getElementById('whatsapp-chat-close');
  const whatsappChatForm = document.getElementById('whatsapp-chat-form');
  const whatsappChatInput = document.getElementById('whatsapp-chat-input');
  const whatsappChatError = document.getElementById('whatsapp-chat-error');

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

  // Render Selected Engineering Project Portfolio (Phase 7.3C Tiered Architecture)
  const PROJECT_INDEX_MAP = new Map(
    FLAGSHIP_PROJECTS.map((project, idx) => [project.id, String(idx + 1).padStart(2, '0')])
  );

  function renderProjectMedia(project, variant = 'standard') {
    const hasPhotos = Array.isArray(project.photos) && project.photos.length > 0;
    const useDiptych =
      hasPhotos &&
      project.photos.length >= 2 &&
      (variant === 'spotlight' ||
        project.id === 'beza-bridge-2' ||
        project.id === 'mayors-residence');

    if (useDiptych) {
      const pair = project.photos.slice(0, 2);
      const photoTagLabel =
        project.photos.length > 1
          ? `Verified Site Photos (${project.photos.length})`
          : 'Verified Site Photo';

      return `
        <div class="project-card__diptych">
          ${pair
            .map(
              (photo) => `
                <div class="project-card__diptych-cell">
                  <picture>
                    ${photo.webp ? `<source srcset="${escapeHtml(photo.webp)}" type="image/webp">` : ''}
                    <img
                      src="${escapeHtml(photo.src)}"
                      alt="${escapeHtml(photo.caption)}"
                      ${photo.width ? `width="${photo.width}"` : ''}
                      ${photo.height ? `height="${photo.height}"` : ''}
                      loading="lazy"
                      decoding="async"
                    >
                  </picture>
                </div>
              `
            )
            .join('')}
        </div>
        <span class="media-badge">${escapeHtml(project.categoryLabel)}</span>
        <span class="media-photo-tag media-photo-tag--verified">${photoTagLabel}</span>
      `;
    }

    if (hasPhotos) {
      const leadPhoto = project.photos[0];
      const photoTagLabel =
        project.photos.length > 1
          ? `Verified Site Photos (${project.photos.length})`
          : 'Verified Site Photo';

      return `
        <picture>
          ${leadPhoto.webp ? `<source srcset="${escapeHtml(leadPhoto.webp)}" type="image/webp">` : ''}
          <img
            src="${escapeHtml(leadPhoto.src)}"
            alt="${escapeHtml(leadPhoto.caption)}"
            ${leadPhoto.width ? `width="${leadPhoto.width}"` : ''}
            ${leadPhoto.height ? `height="${leadPhoto.height}"` : ''}
            class="project-card__img"
            loading="lazy"
            decoding="async"
          >
        </picture>
        <span class="media-badge">${escapeHtml(project.categoryLabel)}</span>
        <span class="media-photo-tag media-photo-tag--verified">${photoTagLabel}</span>
      `;
    }

    if (project.conceptVisual) {
      const cv = project.conceptVisual;
      const webpSrcset = [
        cv.webp640 ? `${escapeHtml(cv.webp640)} 640w` : '',
        cv.webp1200 ? `${escapeHtml(cv.webp1200)} 1200w` : ''
      ]
        .filter(Boolean)
        .join(', ');

      return `
        <picture>
          ${
            webpSrcset
              ? `<source srcset="${webpSrcset}" sizes="(max-width: 767px) 100vw, 50vw" type="image/webp">`
              : ''
          }
          <img
            src="${escapeHtml(cv.src)}"
            alt="${escapeHtml(cv.alt)}"
            width="${cv.width || 1200}"
            height="${cv.height || 675}"
            class="project-card__img"
            loading="lazy"
            decoding="async"
          >
        </picture>
        <span class="media-badge">${escapeHtml(project.categoryLabel)}</span>
        <span class="media-photo-tag media-photo-tag--illustrative">Illustrative Project Visual</span>
      `;
    }

    return `
      <div class="project-card__placeholder">
        <div class="placeholder-grid-mark">
          <span>${escapeHtml(project.categoryLabel)}</span>
          <span>VERIFIED RECORD</span>
        </div>
        <div class="placeholder-center">
          <span class="placeholder-center__role">${escapeHtml(project.role)}</span>
          <strong>${escapeHtml(project.metric)}</strong>
          <span>Technical dossier &amp; scope verified &bull; Client archive record</span>
        </div>
      </div>
    `;
  }

  function renderSpotlightCard(project) {
    const caseNumber = PROJECT_INDEX_MAP.get(project.id) || '01';
    const figuresHtml = (project.keyFigures || [])
      .map((item) => `<span class="project-spotlight__figure">${escapeHtml(item)}</span>`)
      .join('');
    const previewSkills = (project.skills || [])
      .slice(0, 4)
      .map((skill) => `<span class="project-card__tag">${escapeHtml(skill)}</span>`)
      .join('');

    return `
      <article class="project-card project-spotlight" data-reveal>
        <div class="project-card__media project-spotlight__media">
          ${renderProjectMedia(project, 'spotlight')}
        </div>
        <div class="project-spotlight__body">
          <div class="project-card__top">
            <div class="project-card__meta">
              <span class="project-card__index">${caseNumber}</span>
              <span class="project-spotlight__kicker">Flagship Spotlight</span>
              <span class="project-card__loc">${escapeHtml(project.location)}</span>
              <span class="project-card__time">${escapeHtml(project.timeline)}</span>
            </div>
            <h3 class="project-spotlight__title">${escapeHtml(project.title)}</h3>
            <div class="project-card__metric">
              <span class="status-dot" aria-hidden="true"></span>
              <span>${escapeHtml(project.metric)}</span>
            </div>
            <p class="project-card__summary">${escapeHtml(project.summary)}</p>
            ${figuresHtml ? `<div class="project-spotlight__figures" aria-label="Key project highlights">${figuresHtml}</div>` : ''}
            <div class="project-card__tags" aria-label="Key technical methods">${previewSkills}</div>
          </div>
          <div class="project-card__footer">
            <span class="project-card__org">${escapeHtml(project.affiliation)}</span>
            <button
              type="button"
              class="project-specs-btn project-specs-btn--spotlight"
              data-project-id="${escapeHtml(project.id)}"
              aria-haspopup="dialog"
            >
              <span>Inspect Case Sheet</span>
              <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </button>
          </div>
        </div>
      </article>
    `;
  }

  function renderProjectCard(project, index, extraClass = '') {
    const caseNumber = PROJECT_INDEX_MAP.get(project.id) || String(index + 1).padStart(2, '0');
    const delayMs = Math.min((index % 3) * 60, 120);
    const hasPhotos = Array.isArray(project.photos) && project.photos.length > 0;
    const previewSkills = (project.skills || [])
      .slice(0, 3)
      .map((skill) => `<span class="project-card__tag">${escapeHtml(skill)}</span>`)
      .join('');

    const cardClasses = [
      'project-card',
      hasPhotos ? 'project-card--verified' : 'project-card--dossier',
      extraClass
    ]
      .filter(Boolean)
      .join(' ');

    return `
      <article class="${cardClasses}" data-reveal data-reveal-delay="${delayMs}">
        <div class="project-card__media">${renderProjectMedia(project, hasPhotos ? 'verified' : 'dossier')}</div>
        <div class="project-card__body">
          <div class="project-card__top">
            <div class="project-card__meta">
              <span class="project-card__index">${caseNumber}</span>
              <span class="project-card__loc">${escapeHtml(project.location)}</span>
              <span class="project-card__time">${escapeHtml(project.timeline)}</span>
            </div>
            <h3 class="project-card__title">${escapeHtml(project.title)}</h3>
            <div class="project-card__metric">
              <span class="status-dot" aria-hidden="true"></span>
              <span>${escapeHtml(project.metric)}</span>
            </div>
            <p class="project-card__summary">${escapeHtml(project.summary)}</p>
            <div class="project-card__tags" aria-label="Key technical methods">${previewSkills}</div>
          </div>
          <div class="project-card__footer">
            <span class="project-card__org">${escapeHtml(project.affiliation)}</span>
            <button
              type="button"
              class="project-specs-btn"
              data-project-id="${escapeHtml(project.id)}"
              aria-haspopup="dialog"
            >
              <span>Inspect Case Sheet</span>
              <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </button>
          </div>
        </div>
      </article>
    `;
  }

  function renderProjects(filter = 'all') {
    if (!projectsGrid) return;

    if (filter === 'all') {
      const spotlight = FLAGSHIP_PROJECTS.find((p) => p.tier === 'spotlight') || FLAGSHIP_PROJECTS[0];
      const verified = FLAGSHIP_PROJECTS.filter((p) => p.tier === 'verified');
      const dossiers = FLAGSHIP_PROJECTS.filter((p) => p.tier === 'dossier');

      projectsGrid.innerHTML = `
        <div class="projects-tiers">
          <div class="projects-tier projects-tier--spotlight">
            <div class="projects-tier__head">
              <span class="projects-tier__eyebrow">Tier 01 &bull; Flagship Engineering Spotlight</span>
              <span class="projects-tier__note">BUET Supervision &bull; 4 Verified Site Photos</span>
            </div>
            ${spotlight ? renderSpotlightCard(spotlight) : ''}
          </div>

          <div class="projects-tier projects-tier--verified">
            <div class="projects-tier__head">
              <span class="projects-tier__eyebrow">Tier 02 &bull; Verified Site-Photo Projects</span>
              <span class="projects-tier__note">Authentic Field Execution Documentation</span>
            </div>
            <div class="projects-grid projects-grid--verified">
              ${verified.map((project, idx) => renderProjectCard(project, idx)).join('')}
            </div>
          </div>

          <div class="projects-tier projects-tier--dossiers">
            <div class="projects-tier__head">
              <span class="projects-tier__eyebrow">Tier 03 &bull; Technical Project Dossiers</span>
              <span class="projects-tier__note">Verified Scope &bull; Illustrative Category Visuals</span>
            </div>
            <div class="projects-grid projects-grid--dossiers">
              ${dossiers.map((project, idx) => renderProjectCard(project, idx)).join('')}
            </div>
          </div>
        </div>
      `;
    } else {
      const list = FLAGSHIP_PROJECTS.filter((project) => project.category === filter);
      if (list.length === 1) {
        projectsGrid.innerHTML = `
          <div class="projects-grid projects-grid--filtered projects-grid--single">
            ${renderProjectCard(list[0], 0, 'project-card--wide')}
          </div>
        `;
      } else {
        const countClass = list.length === 3 ? 'projects-grid--count-3' : 'projects-grid--count-2';
        projectsGrid.innerHTML = `
          <div class="projects-grid projects-grid--filtered ${countClass}">
            ${list.map((project, idx) => renderProjectCard(project, idx)).join('')}
          </div>
        `;
      }
    }

    observeRevealElements(projectsGrid.querySelectorAll('[data-reveal]'));
  }

  // Filter Tabs (Click + Accessible Keyboard Arrow Navigation)
  function activateFilterTab(btn) {
    const selected = btn.getAttribute('data-filter') || 'all';
    filterButtons.forEach((b) => {
      const isCurrent = b === btn;
      b.classList.toggle('is-active', isCurrent);
      b.setAttribute('aria-selected', String(isCurrent));
    });
    renderProjects(selected);
  }

  filterButtons.forEach((btn, idx) => {
    btn.addEventListener('click', () => activateFilterTab(btn));
    btn.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault();
        const dir = event.key === 'ArrowRight' ? 1 : -1;
        const nextIdx = (idx + dir + filterButtons.length) % filterButtons.length;
        const nextBtn = filterButtons[nextIdx];
        nextBtn?.focus();
        if (nextBtn) activateFilterTab(nextBtn);
      }
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

  function renderModalPhotoStage(project, photoIndex) {
    const photo = project.photos[photoIndex] || project.photos[0];
    if (!photo) return;
    const frameEl = modalMedia?.querySelector('.modal-gallery__frame');
    const captionEl = modalMedia?.querySelector('.modal-gallery__caption');
    const counterEl = modalMedia?.querySelector('.modal-gallery__counter');

    if (frameEl) {
      frameEl.innerHTML = `
        <picture>
          ${photo.webp ? `<source srcset="${escapeHtml(photo.webp)}" type="image/webp">` : ''}
          <img
            src="${escapeHtml(photo.src)}"
            alt="${escapeHtml(photo.caption)}"
            ${photo.width ? `width="${photo.width}"` : ''}
            ${photo.height ? `height="${photo.height}"` : ''}
            decoding="async"
          >
        </picture>
      `;
    }
    if (captionEl) captionEl.textContent = photo.caption;
    if (counterEl) counterEl.textContent = `${photoIndex + 1} / ${project.photos.length}`;

    modalMedia?.querySelectorAll('.modal-gallery__thumb').forEach((btn, idx) => {
      const isCurrent = idx === photoIndex;
      btn.classList.toggle('is-active', isCurrent);
      btn.setAttribute('aria-pressed', String(isCurrent));
    });
  }

  modalMedia?.addEventListener('click', (event) => {
    const thumbBtn = event.target.closest('.modal-gallery__thumb[data-photo-index]');
    if (!thumbBtn || !activeProject || !activeProject.photos?.length) return;
    const idx = Number(thumbBtn.getAttribute('data-photo-index'));
    if (Number.isInteger(idx) && idx >= 0 && idx < activeProject.photos.length) {
      renderModalPhotoStage(activeProject, idx);
    }
  });

  function openModal(projectId) {
    const project = FLAGSHIP_PROJECTS.find((p) => p.id === projectId);
    if (!project || !modal) return;
    if (whatsappChatDialog && !whatsappChatDialog.hidden) {
      closeWhatsappChat({ restoreFocus: false });
    }
    activeProject = project;

    modalCategory.textContent = `${project.categoryLabel} • ${project.timeline}`;
    modalTitle.textContent = project.title;
    modalLocation.textContent = project.location;
    modalRole.textContent = project.role;
    modalMetric.textContent = project.metric;
    if (modalOverview) modalOverview.textContent = project.summary;
    modalScope.textContent = project.scope;
    modalChallenge.textContent = project.challenge;
    modalArchiveNote.textContent = project.archiveNote;

    modalSkills.innerHTML = project.skills
      .map((skill) => `<span class="tag">${escapeHtml(skill)}</span>`)
      .join('');

    if (project.photos && project.photos.length > 0) {
      const firstPhoto = project.photos[0];
      const thumbsHtml =
        project.photos.length > 1
          ? `
            <div class="modal-gallery__thumbs" role="group" aria-label="Select verified site photograph">
              ${project.photos
                .map(
                  (photo, idx) => `
                    <button
                      type="button"
                      class="modal-gallery__thumb${idx === 0 ? ' is-active' : ''}"
                      data-photo-index="${idx}"
                      aria-pressed="${idx === 0 ? 'true' : 'false'}"
                      aria-label="View photo ${idx + 1} of ${project.photos.length}: ${escapeHtml(photo.caption)}"
                    >
                      <picture>
                        ${photo.webp ? `<source srcset="${escapeHtml(photo.webp)}" type="image/webp">` : ''}
                        <img
                          src="${escapeHtml(photo.src)}"
                          alt=""
                          ${photo.width ? `width="${photo.width}"` : ''}
                          ${photo.height ? `height="${photo.height}"` : ''}
                          loading="lazy"
                          decoding="async"
                        >
                      </picture>
                    </button>
                  `
                )
                .join('')}
            </div>
          `
          : '';

      modalMedia.innerHTML = `
        <div class="modal-gallery">
          <div class="modal-gallery__stage">
            <div class="modal-gallery__topbar">
              <span class="modal-gallery__badge">Verified Site Photo</span>
              <span class="modal-gallery__counter">1 / ${project.photos.length}</span>
            </div>
            <div class="modal-gallery__frame">
              <picture>
                ${firstPhoto.webp ? `<source srcset="${escapeHtml(firstPhoto.webp)}" type="image/webp">` : ''}
                <img
                  src="${escapeHtml(firstPhoto.src)}"
                  alt="${escapeHtml(firstPhoto.caption)}"
                  ${firstPhoto.width ? `width="${firstPhoto.width}"` : ''}
                  ${firstPhoto.height ? `height="${firstPhoto.height}"` : ''}
                  decoding="async"
                >
              </picture>
            </div>
            <p class="modal-gallery__caption">${escapeHtml(firstPhoto.caption)}</p>
          </div>
          ${thumbsHtml}
        </div>
      `;
    } else if (project.conceptVisual) {
      const cv = project.conceptVisual;
      const webpSrcset = [
        cv.webp640 ? `${escapeHtml(cv.webp640)} 640w` : '',
        cv.webp1200 ? `${escapeHtml(cv.webp1200)} 1200w` : ''
      ]
        .filter(Boolean)
        .join(', ');

      modalMedia.innerHTML = `
        <div class="modal-concept">
          <div class="modal-concept__frame">
            <picture>
              ${
                webpSrcset
                  ? `<source srcset="${webpSrcset}" sizes="(max-width: 767px) 92vw, 680px" type="image/webp">`
                  : ''
              }
              <img
                src="${escapeHtml(cv.src)}"
                alt="${escapeHtml(cv.alt)}"
                width="${cv.width || 1200}"
                height="${cv.height || 675}"
                decoding="async"
              >
            </picture>
            <span class="media-photo-tag media-photo-tag--illustrative">Illustrative Project Visual</span>
          </div>
          <p class="modal-concept-disclosure">
            <svg class="icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><circle cx="12" cy="12" r="10" stroke-width="2"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 16v-4m0-4h.01"/></svg>
            <span>${escapeHtml(cv.caption)}</span>
          </p>
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

  function getHeaderScrollOffset() {
    const scrollPadding = Number.parseFloat(
      window.getComputedStyle(document.documentElement).scrollPaddingTop
    );
    if (Number.isFinite(scrollPadding) && scrollPadding > 0) {
      return scrollPadding;
    }
    const headerHeight = siteHeader ? siteHeader.getBoundingClientRect().height : 64;
    return headerHeight + 16;
  }

  function setDrawerOpen(open, { restoreFocus = false } = {}) {
    if (!mobileDrawer || !mobileMenuBtn) return;
    if (open && whatsappChatDialog && !whatsappChatDialog.hidden) {
      closeWhatsappChat({ restoreFocus: false });
    }
    if (!open && mobileDrawer.contains(document.activeElement)) {
      if (restoreFocus) {
        mobileMenuBtn.focus();
      } else if (typeof document.activeElement.blur === 'function') {
        document.activeElement.blur();
      }
    }
    mobileDrawer.classList.toggle('is-open', open);
    siteHeader?.classList.toggle('is-menu-open', open);
    mobileDrawer.setAttribute('aria-hidden', String(!open));
    mobileMenuBtn.setAttribute('aria-expanded', String(open));
    mobileMenuBtn.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    menuIconOpen?.classList.toggle('is-hidden', open);
    menuIconClose?.classList.toggle('is-hidden', !open);
    mobileDrawerLinks.forEach((el) => {
      el.setAttribute('tabindex', open ? '0' : '-1');
    });
    if (!open && restoreFocus) {
      mobileMenuBtn.focus();
    }
  }

  mobileMenuBtn?.addEventListener('click', () => {
    const isCurrentlyOpen = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
    setDrawerOpen(!isCurrentlyOpen);
  });

  mobileDrawer?.addEventListener('click', (event) => {
    const navLink = event.target.closest('.mobile-nav-link');
    if (!navLink) return;

    const href = navLink.getAttribute('href') || '';
    if (href.startsWith('#') && href.length > 1) {
      const target = document.querySelector(href);
      if (target) {
        event.preventDefault();
        setDrawerOpen(false);

        window.requestAnimationFrame(() => {
          const offset = getHeaderScrollOffset();
          const targetTop = Math.max(
            0,
            Math.round(target.getBoundingClientRect().top + window.scrollY - offset)
          );
          window.scrollTo({
            top: targetTop,
            behavior: prefersReducedMotion.matches ? 'auto' : 'smooth'
          });
          if (window.location.hash !== href && typeof window.history.pushState === 'function') {
            window.history.pushState(null, '', href);
          }
        });
        return;
      }
    }

    setDrawerOpen(false);
  });

  // In-Page Floating WhatsApp Chat Popup Controller (Phase 7.3C Interaction Upgrade)
  function clearWhatsappError() {
    if (whatsappChatInput) {
      whatsappChatInput.removeAttribute('aria-invalid');
    }
    if (whatsappChatError) {
      whatsappChatError.textContent = '';
      whatsappChatError.hidden = true;
    }
  }

  function openWhatsappChat() {
    if (!whatsappChatDialog || !whatsappLauncher) return;
    if (mobileDrawer && mobileDrawer.classList.contains('is-open')) {
      setDrawerOpen(false);
    }
    clearWhatsappError();
    whatsappChatDialog.hidden = false;
    whatsappLauncher.setAttribute('aria-expanded', 'true');
    whatsappLauncher.setAttribute('aria-label', 'Close NeerFort WhatsApp chat window');
    window.requestAnimationFrame(() => {
      whatsappChatInput?.focus({ preventScroll: true });
    });
  }

  function closeWhatsappChat({ restoreFocus = false } = {}) {
    if (!whatsappChatDialog || whatsappChatDialog.hidden) return;
    whatsappChatDialog.hidden = true;
    clearWhatsappError();
    if (whatsappLauncher) {
      whatsappLauncher.setAttribute('aria-expanded', 'false');
      whatsappLauncher.setAttribute('aria-label', 'Open NeerFort WhatsApp chat window');
      if (restoreFocus && typeof whatsappLauncher.focus === 'function') {
        whatsappLauncher.focus({ preventScroll: true });
      }
    }
  }

  whatsappLauncher?.addEventListener('click', () => {
    if (!whatsappChatDialog) return;
    if (whatsappChatDialog.hidden) {
      openWhatsappChat();
    } else {
      closeWhatsappChat({ restoreFocus: true });
    }
  });

  whatsappChatClose?.addEventListener('click', () => {
    closeWhatsappChat({ restoreFocus: true });
  });

  whatsappChatInput?.addEventListener('input', () => {
    if (whatsappChatInput.getAttribute('aria-invalid') === 'true' && whatsappChatInput.value.trim()) {
      clearWhatsappError();
    }
  });

  whatsappChatInput?.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      if (whatsappChatForm && typeof whatsappChatForm.requestSubmit === 'function') {
        whatsappChatForm.requestSubmit();
      } else if (whatsappChatForm) {
        whatsappChatForm.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
      }
    }
  });

  whatsappChatForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!whatsappChatInput) return;
    const messageText = whatsappChatInput.value.trim();

    if (!messageText) {
      whatsappChatInput.setAttribute('aria-invalid', 'true');
      if (whatsappChatError) {
        whatsappChatError.textContent = 'Please enter a message before opening WhatsApp.';
        whatsappChatError.hidden = false;
      }
      whatsappChatInput.focus({ preventScroll: true });
      return;
    }

    clearWhatsappError();
    const whatsappUrl = `https://wa.me/${COMPANY_WHATSAPP_DIGITS}?text=${encodeURIComponent(messageText)}`;
    const newTab = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    if (newTab) {
      try {
        newTab.opener = null;
      } catch {
        // Ignore cross-origin opener assignment restrictions
      }
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

    if (
      whatsappChatDialog &&
      !whatsappChatDialog.hidden &&
      whatsappWidget &&
      !whatsappWidget.contains(event.target)
    ) {
      closeWhatsappChat({ restoreFocus: false });
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
      } else if (whatsappChatDialog && !whatsappChatDialog.hidden) {
        event.preventDefault();
        closeWhatsappChat({ restoreFocus: true });
      } else if (mobileDrawer && mobileDrawer.classList.contains('is-open')) {
        setDrawerOpen(false, { restoreFocus: true });
      }
      return;
    }

    if (event.key === 'Tab' && modal && !modal.hidden) {
      const focusables = Array.from(
        modal.querySelectorAll(
          'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => el.offsetParent !== null);

      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && (document.activeElement === first || !modal.contains(document.activeElement))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (document.activeElement === last || !modal.contains(document.activeElement))) {
        event.preventDefault();
        first.focus();
      }
      return;
    }

    if (event.key === 'Tab' && whatsappChatDialog && !whatsappChatDialog.hidden) {
      const focusables = Array.from(
        whatsappChatDialog.querySelectorAll(
          'button:not([disabled]), textarea:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => el.offsetParent !== null);

      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && (document.activeElement === first || !whatsappChatDialog.contains(document.activeElement))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (document.activeElement === last || !whatsappChatDialog.contains(document.activeElement))) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  // Full-Bleed Cinematic Hero Slider (Accessible, keyboard & reduced-motion aware)
  function initHeroSlider() {
    const heroSection = document.getElementById('top');
    const rail = document.getElementById('hero-slider-rail');
    if (!heroSection || !rail || HERO_SLIDES.length === 0) return;

    const slides = Array.from(heroSection.querySelectorAll('[data-hero-slide]'));
    const dots = Array.from(rail.querySelectorAll('[data-hero-dot]'));
    const prevBtn = document.getElementById('hero-prev-btn');
    const nextBtn = document.getElementById('hero-next-btn');
    const pauseBtn = document.getElementById('hero-pause-btn');
    const iconPause = document.getElementById('hero-icon-pause');
    const iconPlay = document.getElementById('hero-icon-play');
    const counterEl = document.getElementById('hero-slide-counter');
    const kickerEl = document.getElementById('hero-slide-kicker');
    const titleEl = document.getElementById('hero-slide-title');

    const INTERVAL_MS = 6500;
    const PREWARM_LEAD_MS = 1500;
    let currentIndex = 0;
    let userPaused = prefersReducedMotion.matches;
    let focusPaused = false;
    let timerId = null;
    let prewarmTimerId = null;

    function ensureSlideLoaded(index) {
      const count = slides.length;
      if (count === 0) return;
      const safeIndex = ((index % count) + count) % count;
      const img = slides[safeIndex]?.querySelector('img[data-src]');
      if (!img) return;
      if (img.dataset.sizes) {
        img.sizes = img.dataset.sizes;
        img.removeAttribute('data-sizes');
      }
      if (img.dataset.srcset) {
        img.srcset = img.dataset.srcset;
        img.removeAttribute('data-srcset');
      }
      if (img.dataset.src) {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
      }
    }

    function formatSlideCounter(index) {
      return `${String(index + 1).padStart(2, '0')} / ${String(HERO_SLIDES.length).padStart(2, '0')}`;
    }

    function syncPauseState() {
      const effectivelyPaused = userPaused || focusPaused || document.hidden;
      heroSection.classList.toggle('is-paused', effectivelyPaused);
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
      if (prewarmTimerId !== null) {
        window.clearTimeout(prewarmTimerId);
        prewarmTimerId = null;
      }
    }

    function scheduleNextSlidePrewarm() {
      if (prewarmTimerId !== null) {
        window.clearTimeout(prewarmTimerId);
        prewarmTimerId = null;
      }
      if (userPaused || focusPaused || document.hidden || prefersReducedMotion.matches) {
        return;
      }
      prewarmTimerId = window.setTimeout(() => {
        ensureSlideLoaded(currentIndex + 1);
      }, Math.max(0, INTERVAL_MS - PREWARM_LEAD_MS));
    }

    function startAutoplay() {
      stopAutoplay();
      if (userPaused || focusPaused || document.hidden || prefersReducedMotion.matches) {
        syncPauseState();
        return;
      }
      syncPauseState();
      scheduleNextSlidePrewarm();
      timerId = window.setInterval(() => {
        goToSlide(currentIndex + 1);
        scheduleNextSlidePrewarm();
      }, INTERVAL_MS);
    }

    function goToSlide(nextIndex) {
      const count = HERO_SLIDES.length;
      currentIndex = ((nextIndex % count) + count) % count;
      const slideData = HERO_SLIDES[currentIndex];

      ensureSlideLoaded(currentIndex);

      slides.forEach((el, idx) => {
        el.classList.toggle('is-active', idx === currentIndex);
      });

      dots.forEach((dot, idx) => {
        const active = idx === currentIndex;
        dot.classList.remove('is-active');
        dot.setAttribute('aria-selected', String(active));
        if (active) {
          void dot.offsetWidth;
          dot.classList.add('is-active');
        }
      });

      if (counterEl) counterEl.textContent = formatSlideCounter(currentIndex);
      if (kickerEl) kickerEl.textContent = slideData.kicker;
      if (titleEl) titleEl.textContent = slideData.title;
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

    rail.addEventListener('focusin', () => {
      focusPaused = true;
      stopAutoplay();
      syncPauseState();
    });

    rail.addEventListener('focusout', (event) => {
      if (!rail.contains(event.relatedTarget)) {
        focusPaused = false;
        startAutoplay();
      }
    });

    rail.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        goToSlide(currentIndex - 1);
        startAutoplay();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        goToSlide(currentIndex + 1);
        startAutoplay();
      } else if (event.key === 'Home') {
        event.preventDefault();
        goToSlide(0);
        startAutoplay();
      } else if (event.key === 'End') {
        event.preventDefault();
        goToSlide(HERO_SLIDES.length - 1);
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

  // Interactive Bangladesh Verified Project Locations Map
  function initLocationsMap() {
    const pins = Array.from(document.querySelectorAll('[data-location-pin]'));
    const buttons = Array.from(document.querySelectorAll('[data-location-btn]'));
    const sectorEl = document.getElementById('loc-sector');
    const nameEl = document.getElementById('loc-name');
    const projectsEl = document.getElementById('loc-projects');

    if (pins.length === 0 && buttons.length === 0) return;

    function selectLocation(key) {
      const info = PROJECT_LOCATIONS[key];
      if (!info) return;

      pins.forEach((pin) => {
        pin.classList.toggle('is-active', pin.getAttribute('data-location-pin') === key);
      });
      buttons.forEach((btn) => {
        const active = btn.getAttribute('data-location-btn') === key;
        btn.classList.toggle('is-active', active);
        btn.setAttribute('aria-selected', String(active));
      });

      if (sectorEl) sectorEl.textContent = info.sector;
      if (nameEl) nameEl.textContent = info.name;
      if (projectsEl) projectsEl.textContent = info.projects;
    }

    pins.forEach((pin) => {
      const key = pin.getAttribute('data-location-pin');
      pin.addEventListener('click', () => selectLocation(key));
      pin.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          selectLocation(key);
        }
      });
    });

    buttons.forEach((btn, idx) => {
      const key = btn.getAttribute('data-location-btn');
      btn.addEventListener('click', () => selectLocation(key));
      btn.addEventListener('keydown', (event) => {
        if (
          event.key === 'ArrowRight' ||
          event.key === 'ArrowDown' ||
          event.key === 'ArrowLeft' ||
          event.key === 'ArrowUp'
        ) {
          event.preventDefault();
          const dir = event.key === 'ArrowRight' || event.key === 'ArrowDown' ? 1 : -1;
          const nextIdx = (idx + dir + buttons.length) % buttons.length;
          const nextBtn = buttons[nextIdx];
          if (nextBtn) {
            nextBtn.focus();
            selectLocation(nextBtn.getAttribute('data-location-btn'));
          }
        }
      });
    });
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

  // Performant Scroll-Reveal Observer (Verified Metrics Render Static Without Excessive Number-Counting Spin)
  let revealObserver = null;

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

  // Simplified 4-Field Consultation Form Validation & Persistent Inquiry Ready Panel
  const inquiryReadyPanel = document.getElementById('inquiry-ready-panel');
  const inquiryPreviewText = document.getElementById('inquiry-preview-text');
  const inquiryStaleBadge = document.getElementById('inquiry-stale-badge');
  const dispatchEmailBtn = document.getElementById('dispatch-email-btn');
  const dispatchWhatsappBtn = document.getElementById('dispatch-whatsapp-btn');
  const copyBriefBtn = document.getElementById('copy-brief-btn');
  const copyBriefLabel = document.getElementById('copy-brief-label');
  const editInquiryBtn = document.getElementById('edit-inquiry-btn');
  const clearInquiryBtn = document.getElementById('clear-inquiry-btn');

  const COMPANY_EMAIL = 'neerfort@gmail.com';
  const COMPANY_WHATSAPP_DIGITS = '8801552353827';

  let lastPreparedBrief = '';
  let copyFeedbackTimer = null;

  function isValidBangladeshPhone(rawValue) {
    const cleaned = rawValue.replace(/[\s\-().]/g, '');
    return /^(?:(?:\+?880|00880)1[3-9]\d{8}|01[3-9]\d{8})$/.test(cleaned);
  }

  function formatNormalizedPhone(rawValue) {
    const cleaned = rawValue.replace(/[\s\-().]/g, '');
    if (/^01[3-9]\d{8}$/.test(cleaned)) {
      return `+88${cleaned}`;
    }
    if (/^8801[3-9]\d{8}$/.test(cleaned)) {
      return `+${cleaned}`;
    }
    if (/^008801[3-9]\d{8}$/.test(cleaned)) {
      return `+${cleaned.slice(2)}`;
    }
    return cleaned.startsWith('+') ? cleaned : rawValue.trim();
  }

  function setFieldValidation(inputEl, errorMessage) {
    if (!inputEl) return;
    const errorId = inputEl.getAttribute('aria-describedby');
    const errorEl = errorId ? document.getElementById(errorId) : null;
    if (errorMessage) {
      inputEl.setAttribute('aria-invalid', 'true');
      if (errorEl) {
        errorEl.textContent = errorMessage;
        errorEl.hidden = false;
      }
    } else {
      inputEl.removeAttribute('aria-invalid');
      if (errorEl) {
        errorEl.textContent = '';
        errorEl.hidden = true;
      }
    }
  }

  function validateInquiryField(inputEl) {
    if (!inputEl) return '';
    const value = inputEl.value.trim();
    switch (inputEl.name) {
      case 'name':
        if (!value) return 'Please enter your full name.';
        if (value.length < 2) return 'Please enter at least 2 characters for your name.';
        return '';
      case 'phone':
        if (!value) return 'Please enter your mobile number.';
        if (!isValidBangladeshPhone(value)) {
          return 'Enter a valid Bangladesh mobile number (e.g., 015XXXXXXXX or +880 15XXXXXXXX).';
        }
        return '';
      case 'projectType':
        if (!value) return 'Please select a project type.';
        return '';
      case 'message':
        if (!value) return 'Please enter your project details.';
        return '';
      default:
        return '';
    }
  }

  function buildFormattedBrief(data) {
    const lines = [
      'NEERFORT — ENGINEERING CONSULTATION INQUIRY',
      '-------------------------------------------',
      `Full Name: ${data.name}`,
      `Mobile Number: ${formatNormalizedPhone(data.phone)}`,
      `Project Type: ${data.projectType}`,
      '',
      'Project Details:',
      data.message
    ];
    return lines.join('\n');
  }

  if (form) {
    const validatedFieldNames = ['name', 'phone', 'projectType', 'message'];

    validatedFieldNames.forEach((fieldName) => {
      const inputEl = form.elements.namedItem(fieldName);
      if (!inputEl) return;
      const eventName = inputEl.tagName === 'SELECT' ? 'change' : 'input';
      inputEl.addEventListener(eventName, () => {
        if (inputEl.getAttribute('aria-invalid') === 'true') {
          const msg = validateInquiryField(inputEl);
          setFieldValidation(inputEl, msg);
        }
        if (inquiryReadyPanel && !inquiryReadyPanel.hidden && inquiryStaleBadge) {
          inquiryStaleBadge.hidden = false;
        }
      });
    });

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      let firstInvalid = null;
      let errorCount = 0;

      validatedFieldNames.forEach((fieldName) => {
        const inputEl = form.elements.namedItem(fieldName);
        if (!inputEl) return;
        const msg = validateInquiryField(inputEl);
        setFieldValidation(inputEl, msg);
        if (msg) {
          errorCount += 1;
          if (!firstInvalid) firstInvalid = inputEl;
        }
      });

      if (errorCount > 0) {
        if (formError) {
          formError.textContent =
            errorCount === 1
              ? 'Please correct the highlighted field before preparing your inquiry brief.'
              : `Please review and correct the ${errorCount} highlighted fields before preparing your inquiry brief.`;
          formError.hidden = false;
        }
        firstInvalid?.focus();
        return;
      }

      if (formError) {
        formError.hidden = true;
        formError.textContent = '';
      }

      const data = {
        name: form.elements.namedItem('name')?.value.trim() || '',
        phone: form.elements.namedItem('phone')?.value.trim() || '',
        projectType: form.elements.namedItem('projectType')?.value || '',
        message: form.elements.namedItem('message')?.value.trim() || ''
      };

      const formattedBrief = buildFormattedBrief(data);
      lastPreparedBrief = formattedBrief;

      const subjectText = `NeerFort Inquiry: ${data.projectType} — ${data.name}`;
      const mailtoHref = `mailto:${COMPANY_EMAIL}?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(formattedBrief)}`;
      const whatsappHref = `https://wa.me/${COMPANY_WHATSAPP_DIGITS}?text=${encodeURIComponent(formattedBrief)}`;

      if (inquiryPreviewText) {
        inquiryPreviewText.textContent = formattedBrief;
      }
      if (dispatchEmailBtn) {
        dispatchEmailBtn.setAttribute('href', mailtoHref);
      }
      if (dispatchWhatsappBtn) {
        dispatchWhatsappBtn.setAttribute('href', whatsappHref);
      }
      if (inquiryStaleBadge) {
        inquiryStaleBadge.hidden = true;
      }
      if (inquiryReadyPanel) {
        inquiryReadyPanel.hidden = false;
        inquiryReadyPanel.scrollIntoView({
          behavior: prefersReducedMotion.matches ? 'auto' : 'smooth',
          block: 'nearest'
        });
      }

      showToast(
        'Your inquiry brief is formatted locally below. Complete sending via Email, WhatsApp, or Copy.',
        mailtoHref
      );
    });
  }

  async function copyFormattedBrief() {
    if (!lastPreparedBrief) return;
    let copied = false;

    if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
      try {
        await navigator.clipboard.writeText(lastPreparedBrief);
        copied = true;
      } catch {
        copied = false;
      }
    }

    if (!copied) {
      const tempArea = document.createElement('textarea');
      tempArea.value = lastPreparedBrief;
      tempArea.setAttribute('readonly', '');
      tempArea.style.position = 'fixed';
      tempArea.style.opacity = '0';
      document.body.appendChild(tempArea);
      tempArea.select();
      try {
        copied = document.execCommand('copy');
      } catch {
        copied = false;
      }
      document.body.removeChild(tempArea);
    }

    if (copied) {
      if (copyBriefLabel) copyBriefLabel.textContent = 'Copied to Clipboard';
      window.clearTimeout(copyFeedbackTimer);
      copyFeedbackTimer = window.setTimeout(() => {
        if (copyBriefLabel) copyBriefLabel.textContent = 'Copy Formatted Brief';
      }, 3000);
      showToast('Formatted project brief copied to clipboard. You can paste it into any email or message.');
    } else {
      showToast('Automatic copy was blocked by the browser. Please select and copy the brief text directly.');
    }
  }

  copyBriefBtn?.addEventListener('click', copyFormattedBrief);

  editInquiryBtn?.addEventListener('click', () => {
    const nameInput = document.getElementById('client-name');
    nameInput?.focus();
    nameInput?.scrollIntoView({
      behavior: prefersReducedMotion.matches ? 'auto' : 'smooth',
      block: 'center'
    });
  });

  clearInquiryBtn?.addEventListener('click', () => {
    if (!form) return;
    form.reset();
    lastPreparedBrief = '';
    form.querySelectorAll('[aria-invalid]').forEach((el) => setFieldValidation(el, ''));
    if (formError) {
      formError.hidden = true;
      formError.textContent = '';
    }
    if (inquiryReadyPanel) {
      inquiryReadyPanel.hidden = true;
    }
    if (inquiryStaleBadge) {
      inquiryStaleBadge.hidden = true;
    }
    document.getElementById('client-name')?.focus();
  });

  // Industry Exposure & Organization Logo Marquee Controller (Phase 7.3B)
  function initExposureMarquee() {
    const marquee = document.getElementById('exposure-marquee');
    const pauseBtn = document.getElementById('exposure-pause-btn');
    const iconPause = document.getElementById('exposure-icon-pause');
    const iconPlay = document.getElementById('exposure-icon-play');
    const pauseLabel = document.getElementById('exposure-pause-label');
    if (!marquee || !pauseBtn) return;

    let userPaused = prefersReducedMotion.matches;

    function syncMarqueeState() {
      marquee.classList.toggle('is-paused', userPaused);
      pauseBtn.setAttribute('aria-pressed', String(userPaused));
      pauseBtn.setAttribute(
        'aria-label',
        userPaused ? 'Resume organization logo slider' : 'Pause organization logo slider'
      );
      iconPause?.classList.toggle('is-hidden', userPaused);
      iconPlay?.classList.toggle('is-hidden', !userPaused);
      if (pauseLabel) {
        pauseLabel.textContent = userPaused ? 'Resume Slider' : 'Pause Slider';
      }
    }

    pauseBtn.addEventListener('click', () => {
      userPaused = !userPaused;
      syncMarqueeState();
    });

    if (typeof prefersReducedMotion.addEventListener === 'function') {
      prefersReducedMotion.addEventListener('change', (event) => {
        if (event.matches) {
          userPaused = true;
          syncMarqueeState();
        }
      });
    }

    // Eagerly hydrate horizontally clipped marquee logos once user nears the section
    // (keeps initial above-the-fold payload lean while preventing late pop-in during marquee motion)
    const hydrateMarqueeLogos = () => {
      marquee.querySelectorAll('img[loading="lazy"]').forEach((img) => {
        img.loading = 'eager';
      });
    };

    if ('IntersectionObserver' in window) {
      const marqueeObs = new IntersectionObserver(
        (entries, obs) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            hydrateMarqueeLogos();
            obs.disconnect();
          }
        },
        { rootMargin: '400px 0px' }
      );
      marqueeObs.observe(marquee);
    } else {
      hydrateMarqueeLogos();
    }

    syncMarqueeState();
  }

  // Initial Render & Interactive Module Bootstrap
  initHeroSlider();
  initExposureMarquee();
  initLocationsMap();
  initMotionObservers();
  syncFilterCounts();
  renderProjects('all');
})();
