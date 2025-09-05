document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("client-form");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const status = document.getElementById("form-status");
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("https://your-endpoint.com/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        status.textContent = "✅ Thank you! We’ll get back to you soon.";
        form.reset();
      } else {
        status.textContent = "❌ Submission failed. Try again later.";
      }
    } catch {
      status.textContent = "❌ Network error.";
    }
  });
});
