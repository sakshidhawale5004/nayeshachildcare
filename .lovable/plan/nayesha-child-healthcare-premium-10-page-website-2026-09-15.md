# Nayesha Child Healthcare — Premium 10-Page Website

## Goal
Build a polished pediatric healthcare website that uses the supplied Nayesha Healthcare logo, corrects the hero composition shown in the screenshot, and feels premium, trustworthy, warm, and modern across desktop and mobile.

## Pages
1. **Home** — image-led introduction, key services, trust indicators, child-care journey, parent story, and appointment invitation.
2. **About** — philosophy, clinical standards, child-friendly care model, values, and facility imagery.
3. **Specialties** — detailed pediatric services with age groups, common concerns, and care pathways.
4. **Doctors** — doctor profiles, expertise, languages, and consultation focus.
5. **Vaccination** — age-based immunization guidance, visit preparation, safety information, and FAQ.
6. **Growth & Development** — milestones, nutrition, sleep, behavioral health, and developmental support.
7. **Diagnostics** — available assessments, what to expect, preparation steps, and family-centered testing.
8. **Parent Resources** — practical health guides, warning signs, seasonal advice, and downloadable-style resources.
9. **Patient Stories** — richer family stories, outcomes, care experience, and trust highlights.
10. **Contact & Appointments** — appointment form, contact details, clinic hours, location panel, and emergency guidance.

## Visual Direction
- Use the logo’s red and blue as disciplined accent colors over clean white and pale blue surfaces, with deep navy typography.
- Use a bold modern sans-serif paired with a refined editorial serif for select emotional headlines.
- Use large, high-quality pediatric photography with `object-contain` or composition-safe framing so faces and subjects are never cropped.
- Keep 3D elements in dedicated negative space: glossy pediatric-care shapes and soft medical symbols that move subtly with scroll and pointer input without obscuring people or copy.
- Build distinctive angled/corner-cut buttons inspired by the logo mark, with clear focus, hover, and pressed states.
- Use layered section transitions, measured parallax, sticky storytelling moments, and reduced-motion fallbacks.

## Build Approach
- Create a shared header, mobile menu, footer, page masthead, image treatments, service cards, story sections, appointment form, and reusable calls to action.
- Add a lightweight React Three Fiber scene on the home page, loaded client-side, with premium materials, lighting, shadows, and safe positioning.
- Generate a cohesive set of original healthcare photographs for the home page and supporting pages rather than reusing one hero image everywhere.
- Preserve the uploaded logo through the project asset system and derive the site favicon from its mark; remove the default Lovable favicon.
- Give every page unique search/social metadata and keep the content clinically responsible by avoiding unsupported medical claims.

## Verification
- Check all ten pages and navigation links on desktop and mobile.
- Confirm the hero image remains fully visible, the 3D scene never overlaps key content, forms and menus work, and motion respects reduced-motion settings.
- Verify the live preview for build errors, console errors, missing assets, layout overflow, and blank WebGL rendering.
