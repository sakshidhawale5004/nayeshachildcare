# Nayesha clinic booking and content expansion

## Outcome
- Turn the current appointment request into a persistent booking flow with a dedicated confirmation page.
- Let parents retrieve their appointment using their phone number and booking reference, without creating an account.
- Replace the location everywhere with the confirmed Kharghar address and link it from the footer to directions.
- Expand all 10 pages with richer, page-specific information and a broader set of distinct pediatric images.

## Booking experience
- Add a clear appointment form for caregiver and child details, visit type, preferred date, and preferred time.
- Validate every field before submission and again on the server.
- Store the appointment in Lovable Cloud with a unique booking reference and a `pending confirmation` status.
- Prevent duplicate booking requests for the same date and time.
- After submission, open a dedicated confirmation page showing the reference, requested slot, status, and clinic address.
- Add a “Find my appointment” form using phone number plus booking reference, returning only the matching appointment.
- Keep phone numbers and child details out of public page data; all reads and writes pass through validated server actions.

## Clinic information
- Use the supplied address exactly:
  Office 14, 2nd Floor, Hiranandani Crystal Plaza, Plot no 18/27, Sector 07, Kharghar, Panvel, Maharashtra 410210.
- Link the address to Google Maps from the contact page and footer.
- Do not invent doctor names, phone, email, or official opening hours. Keep those entries clearly marked as awaiting clinic confirmation until the real details are supplied.

## Content and imagery
- Expand every existing page beyond its current three-section structure with page-specific educational, service, process, FAQ, or next-step sections.
- Generate a varied pediatric image set so each page has its own primary image and supporting images rather than recycling the same photos.
- Preserve full-subject framing and responsive image presentation so faces and children are not awkwardly cropped.
- Maintain the current premium red, blue, and navy Nayesha visual language, 3D feature, scrolling effects, and unique clipped buttons.

## Technical details
- Add an `appointments` table with explicit data permissions, row-level protection, field constraints, a unique booking reference, and slot uniqueness.
- Use server functions for appointment creation and private lookup; no sensitive appointment table access from the browser.
- Add a confirmation route and update site navigation/footer links where appropriate.
- Reuse the shared page system for expanded blocks while allowing each page its own copy and imagery.
- Verify build health, desktop/mobile layouts, form validation, successful booking, confirmation display, lookup, and duplicate-slot handling.
