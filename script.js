(() => {
  'use strict';
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const state = {
    pumpOn: false,
    alertsReviewed: false,
    refreshCount: 0,
    moisture: [72, 24, 65, 38],
    zones: [
      { name: 'North field', crop: 'Ragi', zone: 'Zone 01' },
      { name: 'Orchard', crop: 'Coconut', zone: 'Zone 02' },
      { name: 'Vegetables', crop: 'Tomato', zone: 'Zone 03' },
      { name: 'East plot', crop: 'Mixed crops', zone: 'Zone 04' }
    ]
  };

  let toastTimer;
  function notify(message) {
    const box = $('#toast');
    $('#toastMessage').textContent = message;
    box.classList.add('show');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => box.classList.remove('show'), 3800);
  }

  // Mobile navigation.
  const toggle = $('#menuToggle');
  const mobileNav = $('#mobileNav');
  function closeMenu() {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
    mobileNav.classList.remove('open');
    document.body.classList.remove('menu-open');
  }
  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    mobileNav.classList.toggle('open', isOpen);
    document.body.classList.toggle('menu-open', isOpen);
  });
  $$('#mobileNav a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
      const dialog = $('#zoneDialog');
      if (dialog.open) dialog.close();
    }
  });

  // Reading progress bar.
  const progress = $('#progressBar');
  let scrollPending = false;
  window.addEventListener('scroll', () => {
    if (scrollPending) return;
    scrollPending = true;
    window.requestAnimationFrame(() => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = (maxScroll > 0 ? Math.min(100, window.scrollY / maxScroll * 100) : 0) + '%';
      scrollPending = false;
    });
  }, { passive: true });

  // Gentle section reveal animations with a reduced-motion fallback.
  const revealItems = $$('.reveal');
  if ('IntersectionObserver' in window && !reducedMotion) {
    const observer = new IntersectionObserver((entries, instance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          instance.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
    revealItems.forEach((item) => observer.observe(item));
  } else revealItems.forEach((item) => item.classList.add('visible'));

  const average = (values) => Math.round(values.reduce((sum, value) => sum + value, 0) / values.length);
  function renderZones() {
    $$('.zone-row').forEach((row, index) => {
      const value = state.moisture[index];
      $('.zone-value b', row).textContent = value + '%';
      $('.zone-value small', row).textContent = value < 30 ? 'Needs water' : value < 50 ? 'Monitor' : 'Healthy';
      row.classList.toggle('needs-water', value < 30);
      $('.zone-meter i', row).style.width = value + '%';
    });
    const mean = average(state.moisture);
    $('#averageMoisture').textContent = String(mean);
    $('#heroMoisture').textContent = String(mean);
    $('#averageMeter').style.width = mean + '%';
  }

  function renderPump() {
    const switchEl = $('#pumpSwitch');
    switchEl.setAttribute('aria-checked', String(state.pumpOn));
    $('#pumpStatus').textContent = state.pumpOn ? 'ON' : 'OFF';
    $('#pumpStatus').parentElement.classList.toggle('on', state.pumpOn);
    $('#pumpNote').textContent = state.pumpOn ? 'Simulation is running' : 'Manual demo control';
    $('#switchLabel').textContent = state.pumpOn ? 'Tap to stop demo' : 'Tap to start demo';
    $('#flowValue').textContent = state.pumpOn ? '12.4' : '0.0';
    $('#flowNote').textContent = state.pumpOn ? 'Simulated flow detected' : 'Pump simulated off';
  }
  $('#pumpSwitch').addEventListener('click', () => {
    state.pumpOn = !state.pumpOn;
    renderPump();
    notify(state.pumpOn
      ? 'Demo pump ON — simulation only. No physical hardware was activated.'
      : 'Demo pump OFF — simulation only.');
  });

  // Bounded sample-data changes; these are never hardware sensor readings.
  $('#refreshDemo').addEventListener('click', () => {
    state.refreshCount += 1;
    const shifts = [2, -1, 3, -2];
    state.moisture = state.moisture.map((value, index) => {
      const next = value + shifts[(index + state.refreshCount) % shifts.length] * (state.refreshCount % 2 ? 1 : -1);
      return Math.max(15, Math.min(85, next));
    });
    renderZones();
    notify('Illustrative dashboard readings refreshed. Not live sensor data.');
  });

  const dialog = $('#zoneDialog');
  function showZones() {
    const target = $('#dialogZones');
    target.replaceChildren();
    state.zones.forEach((zone, index) => {
      const value = state.moisture[index];
      const row = document.createElement('div');
      row.className = 'dialog-zone' + (value < 30 ? ' warning' : '');
      const name = document.createElement('strong');
      name.textContent = zone.name;
      const status = document.createElement('span');
      status.textContent = value + '% · ' + (value < 30 ? 'Needs water' : value < 50 ? 'Monitor' : 'Healthy');
      const crop = document.createElement('small');
      crop.textContent = zone.crop + ' · ' + zone.zone;
      const meter = document.createElement('div');
      meter.className = 'dialog-meter';
      const bar = document.createElement('i');
      bar.style.width = value + '%';
      meter.append(bar);
      row.append(name, status, crop, meter);
      target.append(row);
    });
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else notify('Zone details are available in the dashboard list above.');
  }
  $$('[data-open-zones]').forEach((button) => button.addEventListener('click', showZones));
  $('#closeDialog').addEventListener('click', () => dialog.close());
  $('#dialogDone').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });

  // Sidebar buttons navigate to the appropriate dashboard section.
  $$('.side-link').forEach((button) => button.addEventListener('click', () => {
    $$('.side-link').forEach((item) => item.classList.toggle('active', item === button));
    const view = button.dataset.view;
    const titles = { overview: 'Overview', zones: 'Farm zones', schedule: 'Schedule', alerts: 'Alerts' };
    $('#viewTitle').textContent = titles[view] || 'Overview';
    if (view === 'zones') showZones();
    if (view === 'schedule') {
      $('.tasks-panel').scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'center' });
      notify('Schedule selected. Check off a demo task in the panel.');
    }
    if (view === 'alerts') {
      $('.alerts-panel').scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'center' });
      notify(state.alertsReviewed ? 'Demo alerts have been reviewed.' : 'Two illustrative farm messages are shown below.');
    }
    if (view === 'overview') {
      $('.dash-header').scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'nearest' });
    }
  }));

  // Task checkbox progress and a local-only example reminder.
  function updateTasks() {
    const tasks = $$('.task-check');
    const done = tasks.filter((task) => task.checked).length;
    $('#taskCount').textContent = done + ' of ' + tasks.length + ' complete';
    $('#taskBar').style.width = (tasks.length ? done / tasks.length * 100 : 0) + '%';
  }
  $$('.task-check').forEach((task) => task.addEventListener('change', updateTasks));
  $('#addTask').addEventListener('click', () => {
    const label = document.createElement('label');
    label.className = 'task-row';
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.className = 'task-check';
    const tick = document.createElement('i');
    const info = document.createElement('span');
    const title = document.createElement('b');
    title.textContent = 'Review farm notes';
    const detail = document.createElement('small');
    detail.textContent = 'Added as a local demo reminder';
    info.append(title, detail);
    const time = document.createElement('time');
    time.textContent = 'NEW';
    label.append(input, tick, info, time);
    $('.tasks-panel').insertBefore(label, $('#addTask'));
    input.addEventListener('change', updateTasks);
    updateTasks();
    notify('Demo reminder added. It will not be saved after you reload the page.');
  });

  $('#clearAlerts').addEventListener('click', () => {
    state.alertsReviewed = true;
    $('#alertNumber').textContent = '0';
    $('#clearAlerts').textContent = 'Demo alerts reviewed ✓';
    $('#clearAlerts').style.color = '#859283';
    $('.alert-number').style.background = '#edf4e7';
    $('.alert-number').style.color = '#71934f';
    notify('Demo alerts marked as reviewed on this page.');
  });
  $('#toastClose').addEventListener('click', () => $('#toast').classList.remove('show'));
  $('#year').textContent = String(new Date().getFullYear());
  renderZones();
  renderPump();
  updateTasks();
})();