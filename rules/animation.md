# Animation Component Rule

When the user asks to add animation, use the existing common animation components instead of creating a new animation pattern.

- For copy, body text, headings, descriptions, and sentence-like content, use `components/common/FadeUp.tsx`.
- For buttons, tags, badges, chips, labels, and small emphasis UI elements, use `components/common/BounceIn.tsx`.
- Keep animation usage scoped to the element being animated and preserve the existing component structure.
- Do not create duplicate fade-up or bounce-in animation variants unless the requested behavior cannot be handled by the common components.
