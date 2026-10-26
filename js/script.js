(() => {
  "use strict";

  const packageIds = {
    "Ultimate Gamer Pass": "gamer-pass",
    "VIP Gaming Experience": "vip",
    "Esports Training Package": "esports",
    "Birthday Party Package": "birthday",
    "Virtual Reality Experience": "vr",
    "Racing Simulator Challenge": "racing",
    "Escape Room Challenge": "escape-room"
  };

  const packageImages = {
    "gamer-pass": "assets/gamerpass.jpg",
    vip: "assets/pc-gaming.jpg",
    esports: "assets/esports-training.jpg",
    birthday: "assets/birthday-party.jpg",
    vr: "assets/vr-experience.jpg",
    racing: "assets/console-gaming.jpg",
    "escape-room": "assets/escape-room.jpg"
  };

  const money = (value) => new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
    maximumFractionDigits: 0
  }).format(value);

  function setupPackageFilters() {
    const buttons = [...document.querySelectorAll("[data-filter]")];
    const cards = [...document.querySelectorAll("#packages [data-type]")];
    if (!buttons.length || !cards.length) return;

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.dataset.filter;
        buttons.forEach((item) => {
          const selected = item === button;
          item.classList.toggle("active", selected);
          item.setAttribute("aria-pressed", String(selected));
        });
        cards.forEach((card) => {
          card.hidden = filter !== "all" && card.dataset.type !== filter;
        });
      });
    });
  }

  function setupBookingForm() {
    const form = document.getElementById("booking-form");
    if (!form) return;

    const packages = [...form.querySelectorAll('input[name="package"]')];
    const date = document.getElementById("booking-date");
    const time = document.getElementById("booking-time");
    const quantity = document.getElementById("booking-quantity");
    const quantityOutput = document.getElementById("quantity-output");
    const summary = {
      name: document.getElementById("summary-name"),
      details: document.getElementById("summary-details"),
      subtotal: document.getElementById("summary-subtotal"),
      discountLabel: document.getElementById("summary-discount-label"),
      discount: document.getElementById("summary-discount"),
      total: document.getElementById("summary-total"),
      image: document.getElementById("summary-image")
    };

    const now = new Date();
    date.min = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
      .toISOString()
      .slice(0, 10);
    date.value = date.min;

    const query = new URLSearchParams(window.location.search);
    const requestedId = query.get("package");
    const requestedName = Object.keys(packageIds).find((name) => packageIds[name] === requestedId);
    const selectedPackage = packages.find((item) =>
      item.value === requestedId || item.dataset.name === requestedName
    );
    if (selectedPackage) selectedPackage.checked = true;
    else if (packages[0]) packages[0].checked = true;

    function selectedOption() {
      return packages.find((item) => item.checked);
    }

    function updateSummary() {
      const selected = selectedOption();
      if (!selected) return;
      const count = Number(quantity.value);
      const subtotal = Number(selected.dataset.price) * count;
      const rate = count >= 4 ? 0.15 : count === 3 ? 0.1 : count === 2 ? 0.05 : 0;
      const savings = Math.round(subtotal * rate);
      const dateText = date.value
        ? new Intl.DateTimeFormat("en-ZA", { dateStyle: "medium" })
          .format(new Date(`${date.value}T12:00:00`))
        : "Choose a date";

      summary.name.textContent = selected.dataset.name;
      summary.details.textContent = `${dateText} · ${time.value} · ${count} ${count === 1 ? "booking" : "bookings"}`;
      summary.subtotal.textContent = money(subtotal);
      summary.discountLabel.textContent = `Multi-booking discount (${Math.round(rate * 100)}%)`;
      summary.discount.textContent = `−${money(savings)}`;
      summary.total.textContent = money(subtotal - savings);
      summary.image.src = packageImages[selected.value];
      summary.image.alt = "";
    }

    packages.forEach((item) => item.addEventListener("change", updateSummary));
    date.addEventListener("change", updateSummary);
    time.addEventListener("change", updateSummary);

    form.querySelectorAll("[data-quantity]").forEach((button) => {
      button.addEventListener("click", () => {
        const next = Math.max(1, Math.min(20, Number(quantity.value) + Number(button.dataset.quantity)));
        quantity.value = String(next);
        if (quantityOutput) quantityOutput.textContent = String(next);
        updateSummary();
      });
    });
    quantity.addEventListener("change", () => {
      quantity.value = String(Math.max(1, Math.min(20, Math.round(Number(quantity.value) || 1))));
      if (quantityOutput) quantityOutput.textContent = quantity.value;
      updateSummary();
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;

      const selected = selectedOption();
      if (!selected) {
        throw new Error("Select a package before submitting the booking request.");
      }
      const count = Number(quantity.value);
      const subtotal = Number(selected.dataset.price) * count;
      const rate = count >= 4 ? 0.15 : count === 3 ? 0.1 : count === 2 ? 0.05 : 0;
      const savings = Math.round(subtotal * rate);
      const customerName = form.elements.name.value.trim();
      const customerEmail = form.elements.email.value.trim();
      const phone = form.elements.phone.value.trim() || "Not provided";
      const specialRequests = form.elements.requests.value.trim() || "None";
      const message = [
        "New booking request for Next Level Gaming & Esports Arena",
        "",
        `Name: ${customerName}`,
        `Email: ${customerEmail}`,
        `Phone: ${phone}`,
        `Offering: ${selected.dataset.name}`,
        `Date: ${date.value}`,
        `Start time: ${time.value}`,
        `Number of bookings: ${count}`,
        `Subtotal: ${money(subtotal)}`,
        `Discount: ${Math.round(rate * 100)}% (${money(savings)})`,
        `Estimated total: ${money(subtotal - savings)}`,
        `Special requests: ${specialRequests}`,
        "",
        "Please confirm availability and the booking."
      ].join("\n");
      const subject = `Booking request: ${selected.dataset.name}`;
      window.location.href = `mailto:info@nextlevelgaming.co.za?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    });

    updateSummary();
  }

  function setupMobileNavigation() {
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".site-nav");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("is-open", !expanded);
    });
  }

  setupMobileNavigation();
  setupPackageFilters();
  setupBookingForm();
})();
