# Accessibility Requirements

## Standard

The website should follow WCAG 2.2 AA principles where applicable. Accessibility is part of the implementation foundation, not a final polish pass.

## Semantic Structure

- Use semantic landmarks: `header`, `nav`, `main`, `section`, `article`, and `footer`.
- Every page should have one clear `main` landmark.
- Use headings in logical order without skipping levels for visual styling.
- Use lists, buttons, links, forms, and articles for their intended meaning.
- Avoid non-semantic clickable containers when a native element can do the job.

## Keyboard Navigation

- All interactive elements must be reachable and usable with a keyboard.
- Navigation order should match the visual and reading order.
- Focus must never become trapped unless a modal or menu intentionally manages focus.
- Menus, dialogs, and future interactive widgets must define expected focus behavior before implementation.
- Hover-only interactions are not acceptable for essential content or actions.

## Focus States

- Every interactive element must have a visible focus state.
- Focus styles must be clearly visible against the surrounding background.
- Do not remove outlines unless an equally visible replacement is provided.

## Color and Contrast

- Text, controls, icons, and focus indicators must maintain sufficient contrast for WCAG 2.2 AA where applicable.
- Do not rely on color alone to communicate state, status, or meaning.
- Validate new color combinations before they are used in production UI.

## Buttons, Links, and Icons

- Use links for navigation and buttons for actions.
- Icon-only buttons must include an accessible label.
- Link text should describe the destination or purpose.
- Buttons should expose their state when expanded, selected, disabled, or loading.

## Media and Motion

- Images that communicate meaning need useful alternative text.
- Decorative images should be ignored by assistive technology.
- Motion must respect reduced-motion preferences.
- Animations should not be required to understand or operate the page.

## Implementation Acceptance Criteria

Every implementation story must include accessibility acceptance criteria:

- Semantic landmarks and heading structure are reviewed.
- Keyboard navigation works for all new interactive elements.
- Visible focus states are present.
- Color contrast is checked for new text, controls, and focus indicators.
- Icon-only controls have accessible labels.
- Reduced-motion behavior is considered when motion is introduced.
