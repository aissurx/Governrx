"use server"

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const inquiry = formData.get("inquiry") as string

  // Send email using mailto link approach - opens user's email client
  // For production, you would integrate with an email service like SendGrid, Resend, etc.
  const mailtoLink = `mailto:Compliance@governrx.com?subject=New Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nInquiry:\n${inquiry}`,
  )}`

  return { success: true, mailtoLink }
}
