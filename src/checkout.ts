function syncBillingFieldsVisibility(): void {
  const checkbox = document.getElementById(
    "billing-same-as-delivery"
  ) as HTMLInputElement | null;
  const billingFields = document.getElementById("billing-fields");
  if (!checkbox || !billingFields) return;
  billingFields.hidden = checkbox.checked;
}

document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.getElementById(
    "billing-same-as-delivery"
  ) as HTMLInputElement | null;
  syncBillingFieldsVisibility();
  checkbox?.addEventListener("change", syncBillingFieldsVisibility);
});
