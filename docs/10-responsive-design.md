# Responsive Design Rules

## Principle

Design and implement mobile-first. The smallest useful viewport should work before tablet and desktop enhancements are added.

## Breakpoints

Use these breakpoints as planning targets, aligned with practical device classes rather than fixed designs:

- Mobile: default styles, from 320px upward.
- Tablet: 768px and wider.
- Desktop: 1024px and wider.
- Wide desktop: 1280px and wider when extra space improves scanning.

Breakpoints are not required on every component. Add them only when layout, density, or interaction behavior needs to change.

## Layout Behavior

- Mobile layouts should use a single-column reading flow by default.
- Tablet layouts may introduce two-column sections when content remains readable.
- Desktop layouts may increase density, width, and side-by-side comparison, but should not hide essential content.
- Wide desktop layouts should constrain text line length and avoid stretched content.
- Touch targets should remain comfortable on small screens.

## Content and Typography

- Content must not require horizontal scrolling.
- Text should wrap naturally without clipping or overlapping.
- Keep headings and labels sized for their container, especially inside navigation, buttons, cards, and compact panels.
- Do not rely on hover interactions for core content.

## Images and Media

- Use responsive image sizing and explicit dimensions or aspect ratios where possible.
- Prevent layout shift from late-loading media.
- Avoid large assets when smaller responsive alternatives can carry the same meaning.

## Responsive Acceptance Criteria

Every implementation story must include responsive acceptance criteria:

- The feature works at mobile, tablet, desktop, and wide desktop widths.
- Layout starts from mobile-first styles and only adds larger-screen adjustments where needed.
- No horizontal overflow appears at common narrow widths.
- Text, controls, and media do not overlap or clip.
- Touch and pointer interactions are both considered where relevant.
