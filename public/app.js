/**
 * PETRA STREAM – Corporate B2B Interactive Scripts
 * Handles Theme Switching, FAQ Accordion, RFQ Modal, Mobile Menu, and Active Nav
 */

document.addEventListener("DOMContentLoaded", () => {
  // Lock to primary brand theme (Theme 1: Navy #142B46 / Cream #F5F0E6 / Orange #E98235)
  document.documentElement.setAttribute("data-theme", "theme-1");
  document.body.setAttribute("data-theme", "theme-1");

  initHeroVideos();
  initProductsScroller();
  initFAQAccordion();
  initModals();
  initSmoothScroll();
  initScrollSpy();
});

/* ==========================================================================
   2. FUNCTIONAL FAQ ACCORDION (SMOOTH EXPANSION, ORANGE TOGGLE)
   ========================================================================== */
function initFAQAccordion() {
  const faqItems = document.querySelectorAll(".faq-item-box");

  faqItems.forEach((item) => {
    const btn = item.querySelector(".faq-question-btn");
    const pane = item.querySelector(".faq-answer-pane");

    if (btn && pane) {
      btn.addEventListener("click", () => {
        const isOpen = item.classList.contains("open");

        // Optional: close other open items for clean accordion behavior
        faqItems.forEach((other) => {
          if (other !== item) {
            other.classList.remove("open");
            const otherBtn = other.querySelector(".faq-question-btn");
            const otherPane = other.querySelector(".faq-answer-pane");
            if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
            if (otherPane) otherPane.style.display = "none";
          }
        });

        // Toggle current item
        if (isOpen) {
          item.classList.remove("open");
          btn.setAttribute("aria-expanded", "false");
          pane.style.display = "none";
        } else {
          item.classList.add("open");
          btn.setAttribute("aria-expanded", "true");
          pane.style.display = "block";
        }
      });
    }
  });
}

/* ==========================================================================
   3. MODALS (RFQ CONSULTATION & MOBILE MENU DRAWER)
   ========================================================================== */
function initModals() {
  const rfqDialog = document.getElementById("rfq-modal-dialog");
  const openButtons = document.querySelectorAll('[data-open-modal="rfq"]');
  const closeButtons = document.querySelectorAll('[data-close-modal="rfq"]');
  const hamburger = document.querySelector(".mobile-hamburger");
  const mobilePanel = document.getElementById("mobile-nav-panel");
  const mobileClose = document.getElementById("mobile-nav-close-btn");
  const mobileAnchors = document.querySelectorAll(".mobile-drawer-anchor");

  // Open RFQ Modal
  openButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (rfqDialog) {
        rfqDialog.classList.add("active");
        document.body.style.overflow = "hidden";
      }
    });
  });

  // Close RFQ Modal
  closeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (rfqDialog) rfqDialog.classList.remove("active");
      document.body.style.overflow = "";
    });
  });

  if (rfqDialog) {
    rfqDialog.addEventListener("click", (e) => {
      if (e.target === rfqDialog) {
        rfqDialog.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  }

  // Keyboard accessibility
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (rfqDialog && rfqDialog.classList.contains("active")) {
        rfqDialog.classList.remove("active");
        document.body.style.overflow = "";
      }
      if (mobilePanel && mobilePanel.style.display === "block") {
        mobilePanel.style.opacity = "0";
        setTimeout(() => (mobilePanel.style.display = "none"), 200);
        document.body.style.overflow = "";
      }
    }
  });

  // Mobile Drawer Open / Close Helper Functions
  function closeMobileMenu() {
    if (mobilePanel) {
      mobilePanel.style.opacity = "0";
      setTimeout(() => {
        mobilePanel.style.display = "none";
      }, 200);
      document.body.style.overflow = "";
    }
  }

  function openMobileMenu() {
    if (mobilePanel) {
      mobilePanel.style.display = "block";
      setTimeout(() => {
        mobilePanel.style.opacity = "1";
      }, 10);
      document.body.style.overflow = "hidden";
    }
  }

  if (hamburger) {
    hamburger.addEventListener("click", openMobileMenu);
  }

  if (mobileClose) {
    mobileClose.addEventListener("click", closeMobileMenu);
  }

  if (mobilePanel) {
    mobilePanel.addEventListener("click", (e) => {
      if (e.target === mobilePanel) {
        closeMobileMenu();
      }
    });
  }

  mobileAnchors.forEach((a) => {
    a.addEventListener("click", closeMobileMenu);
  });

  // RFQ Form Submission Simulation
  const rfqForm = document.getElementById("rfq-modal-form");
  if (rfqForm) {
    rfqForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const submitBtn = rfqForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.innerHTML = "Submitting Consultation RFQ...";

      setTimeout(() => {
        rfqForm.innerHTML = `
          <div style="text-align: center; padding: 3rem 1.5rem;">
            <div style="width: 60px; height: 60px; background-color: var(--orange-glow); color: var(--orange); border-radius: 2px; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem auto;">
              <svg width="32" height="32" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h3 style="font-size: 1.65rem; color: var(--navy); margin-bottom: 0.75rem; font-weight: 800;">Consultation Enquiry Received</h3>
            <p style="color: var(--slate-muted); font-size: 1.1rem; max-width: 500px; margin: 0 auto 2.25rem auto; line-height: 1.7;">
              Thank you for contacting Petra Stream. Our engineering management team will review your specifications and contact you directly.
            </p>
            <button class="btn-navy-outline" data-close-modal="rfq" style="margin: 0 auto;">Close Window</button>
          </div>
        `;
        const newClose = rfqForm.querySelector('[data-close-modal="rfq"]');
        if (newClose) {
          newClose.addEventListener("click", () => {
            if (rfqDialog) rfqDialog.classList.remove("active");
            document.body.style.overflow = "";
          });
        }
      }, 850);
    });
  }
}

/* ==========================================================================
   4. IN-PAGE SMOOTH SCROLLING
   ========================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 94;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}

/* ==========================================================================
   5. ACTIVE NAVIGATION SCROLL SPY
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(
    ".corporate-nav .nav-link-item, .bold-nav-list .nav-link-item",
  );

  window.addEventListener("scroll", () => {
    let current = "";
    const scrollPosition = window.pageYOffset + 140;

    sections.forEach((sec) => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        current = sec.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      const href = link.getAttribute("href");
      if (href === `#${current}` || (current === "hero" && href === "#hero")) {
        link.classList.add("active");
      }
    });
  });
}

/* ==========================================================================
   6. HERO SECTION BACKGROUND VIDEO CYCLING
   Cycles between the two 4K videos seamlessly with crossfade
   ========================================================================== */
function initHeroVideos() {
  const v1 = document.getElementById("hero-video-1");
  const v2 = document.getElementById("hero-video-2");
  if (!v1 || !v2) return;

  // Prevent multiple initializations
  if (v1.dataset.cycleInitialized === "true") return;
  v1.dataset.cycleInitialized = "true";

  let activeVideo = v1;
  let nextVideo = v2;
  let isTransitioning = false;

  v1.muted = true;
  v2.muted = true;

  function safePlay(v) {
    if (!v) return;
    v.muted = true;
    const p = v.play();
    if (p !== undefined) {
      p.catch(() => {});
    }
  }

  function transitionToNext() {
    if (isTransitioning) return;
    isTransitioning = true;

    nextVideo.currentTime = 0;
    nextVideo.muted = true;
    const playPromise = nextVideo.play();

    const performSwitch = () => {
      nextVideo.classList.add("is-active");
      activeVideo.classList.remove("is-active");

      setTimeout(() => {
        activeVideo.pause();
        activeVideo.currentTime = 0;
        const temp = activeVideo;
        activeVideo = nextVideo;
        nextVideo = temp;
        isTransitioning = false;
      }, 1200);
    };

    if (playPromise !== undefined) {
      playPromise.then(performSwitch).catch(() => {
        isTransitioning = false;
        safePlay(activeVideo);
      });
    } else {
      performSwitch();
    }
  }

  function checkVideoProgress(e) {
    const vid = e.target;
    if (
      vid === activeVideo &&
      vid.duration &&
      vid.duration - vid.currentTime <= 1.2
    ) {
      transitionToNext();
    }
  }

  v1.addEventListener("timeupdate", checkVideoProgress);
  v2.addEventListener("timeupdate", checkVideoProgress);
  v1.addEventListener("ended", transitionToNext);
  v2.addEventListener("ended", transitionToNext);

  document.addEventListener("visibilitychange", () => {
    if (!document.hidden && activeVideo) {
      safePlay(activeVideo);
    }
  });

  if (
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    v1.pause();
    v2.pause();
    return;
  }

  safePlay(activeVideo);
}

/* ==========================================================================
   7. HOMEPAGE PRODUCTS TWO-ROW HORIZONTAL SCROLLER
   Handles flanking left/right buttons, wheel, drag, and button states
   ========================================================================== */
function initProductsScroller() {
  const rows = document.querySelectorAll(".products-track-row");
  if (!rows.length) return;

  rows.forEach((row) => {
    const track = row.querySelector(".products-scroll-track");
    const btnPrev = row.querySelector(".products-btn-prev");
    const btnNext = row.querySelector(".products-btn-next");

    if (!track || !btnPrev || !btnNext) return;
    if (track.dataset.scrollerInitialized === "true") return;
    track.dataset.scrollerInitialized = "true";

    function getCardStep() {
      const card = track.querySelector(".product-row-card");
      return card ? card.offsetWidth + 24 : 340;
    }

    function updateButtonStates() {
      const isStart = track.scrollLeft <= 10;
      const isEnd =
        track.scrollLeft + track.clientWidth >= track.scrollWidth - 15;

      btnPrev.disabled = isStart;
      btnPrev.classList.toggle("is-disabled", isStart);

      btnNext.disabled = isEnd;
      btnNext.classList.toggle("is-disabled", isEnd);
    }

    btnNext.addEventListener("click", () => {
      const step = getCardStep();
      track.scrollBy({ left: step, behavior: "smooth" });
      setTimeout(updateButtonStates, 320);
    });

    btnPrev.addEventListener("click", () => {
      const step = getCardStep();
      track.scrollBy({ left: -step, behavior: "smooth" });
      setTimeout(updateButtonStates, 320);
    });

    track.addEventListener("scroll", updateButtonStates, { passive: true });

    // Enable smooth mouse drag-to-scroll on desktop
    let isDown = false;
    let startX;
    let scrollLeft;
    let moved = false;

    track.addEventListener("mousedown", (e) => {
      isDown = true;
      moved = false;
      track.classList.add("is-dragging");
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
    });

    track.addEventListener("mouseleave", () => {
      isDown = false;
      track.classList.remove("is-dragging");
    });

    track.addEventListener("mouseup", () => {
      isDown = false;
      track.classList.remove("is-dragging");
    });

    track.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      const walk = (x - startX) * 1.35;
      if (Math.abs(walk) > 4) moved = true;
      track.scrollLeft = scrollLeft - walk;
    });

    // Prevent accidental link clicks when dragging
    track.addEventListener(
      "click",
      (e) => {
        if (moved) {
          e.preventDefault();
          e.stopPropagation();
        }
      },
      true,
    );

    updateButtonStates();
  });
}
