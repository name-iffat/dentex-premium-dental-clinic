// Supply verified clinic contact details through Vite environment variables.
export const clinic = {
  phone: import.meta.env.VITE_CLINIC_PHONE || '',
  address: import.meta.env.VITE_CLINIC_ADDRESS || '',
  email: import.meta.env.VITE_CLINIC_EMAIL || '',
  whatsapp: (import.meta.env.VITE_WHATSAPP_NUMBER || '').replace(/\D/g, ''),
};
