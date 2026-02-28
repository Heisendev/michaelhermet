When building complex UI in React, native HTML is not always enough. Modals, comboboxes, tabs, and dynamic components often require **ARIA (Accessible Rich Internet Applications)** to expose correct semantics to assistive technologies.

This guide covers **practical ARIA patterns in React**, grounded in the WAI-ARIA specification from the World Wide Web Consortium (W3C) and aligned with WCAG 2.x.

> Rule #1: If native HTML can do it, use native HTML. ARIA is a supplement, not a replacement.

---

## 1. `aria-expanded` — Disclosure & Toggle Buttons

Used when a button toggles visibility of content (dropdowns, accordions).

### Pattern

```jsx
function AccordionItem({ id, title, children }) {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <button
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        onClick={() => setOpen(!open)}
      >
        {title}
      </button>

      <div id={`${id}-panel`} hidden={!open}>
        {children}
      </div>
    </div>
  );
}
```

### Key Points

- `aria-expanded` reflects state.
- `aria-controls` references the controlled region.
- Prefer `<button>` over clickable `<div>`.

## 2. `aria-hidden` — Controlling Screen Reader Visibility

Used to hide decorative or redundant content from assistive technologies.

### Decorative Icon Example

```html
<span aria-hidden="true">🔍</span>
```

### Important Warning

Never use `aria-hidden="true"` on:

- Focusable elements
- Interactive controls
- Content that conveys meaning

It removes the element from the accessibility tree entirely.

## 3. `aria-describedby` — Supplemental Descriptions

Used to associate inputs with help text or error messages.

```jsx
function TextField({ id, label, error, hint }) {
  const describedBy = [hint && `${id}-hint`, error && `${id}-error`]
    .filter(Boolean)
    .join(" ");

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        aria-describedby={describedBy || undefined}
        aria-invalid={!!error}
      />

      {hint && <p id={`${id}-hint`}>{hint}</p>}
      {error && <p id={`${id}-error`}>{error}</p>}
    </div>
  );
}
```

This allows screen readers to read:

- Label
- Hint
- Error

In a structured order.

## 4. `role="dialog"` — Accessible Modals

Modals must:

- Trap focus
- Have a label
- Prevent background interaction

### Minimal Pattern

```jsx
function Modal({ open, onClose, title, children }) {
  const dialogRef = React.useRef(null);

  React.useEffect(() => {
    if (open) {
      dialogRef.current?.focus();
    }
  }, [open]);

  if (!open) return null;

  return (
    <div role="presentation" className="backdrop">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
        tabIndex={-1}
        ref={dialogRef}
      >
        <h2 id="dialog-title">{title}</h2>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
```

### Critical Requirements

- Move focus into the dialog on open.
- Restore focus on close.
- Trap focus inside the modal.

If this sounds complex, it is. Use well-tested libraries when possible.

## 5. `role="tablist"` — Tabs Pattern

Tabs require coordinated ARIA roles and keyboard behavior.

### Structure

```jsx
function Tabs({ tabs }) {
  const [active, setActive] = React.useState(0);

  return (
    <div>
      <div role="tablist">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={active === index}
            aria-controls={`panel-${tab.id}`}
            id={`tab-${tab.id}`}
            onClick={() => setActive(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {tabs.map((tab, index) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`panel-${tab.id}`}
          aria-labelledby={`tab-${tab.id}`}
          hidden={active !== index}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}
```

### Must Also Support

- Arrow key navigation
- Proper focus movement
- Roving `tabIndex`

Tabs are not just visual components — they are interaction systems.

## 6. `aria-live` — Announcing Dynamic Changes

Used when content updates without a page reload (e.g., async form validation).

```jsx
function LiveMessage({ message }) {
  return <div aria-live="polite">{message}</div>;
}
```

Options:

- `polite` → waits until user is idle
- `assertive` → interrupts immediately (use sparingly)

Do not overuse live regions — excessive announcements degrade usability.

## 7. `role="combobox"` — Custom Select Components

Custom selects are one of the most mis-implemented components.

Minimal pattern requires:

- `role="combobox"`
- `aria-expanded`
- `aria-controls`
- `aria-activedescendant`

Example (simplified):

```jsx
<input
  role="combobox"
  aria-expanded={open}
  aria-controls="listbox"
  aria-activedescendant={activeId}
/>
<ul role="listbox" id="listbox">
  {options.map((option) => (
    <li
      key={option.id}
      role="option"
      id={option.id}
      aria-selected={option.id === activeId}
    >
      {option.label}
    </li>
  ))}
</ul>
```

Unless you fully implement keyboard interaction per WAI-ARIA Authoring Practices, prefer native `<select>`.

## 8. Avoid These ARIA Anti-Patterns

### ❌ Adding ARIA to Native Elements Incorrectly

```html
<button role="button">
```

Redundant and unnecessary.

### ❌ Using `role="presentation"` Incorrectly

Removes semantics — often breaks tables and lists.

### ❌ Replacing Buttons with Divs

```jsx
<div onClick={handleClick}>
```

Breaks:

- Keyboard interaction
- Focus behavior
- Accessibility tree semantics

Use `<button>`.

## 9. State Synchronization: ARIA Must Reflect Reality

ARIA attributes must always reflect actual component state.

Bad:

```jsx
aria-expanded="true"
```

When the dropdown is visually closed.

In React, always bind ARIA to state:

```jsx
aria-expanded={isOpen}
```

ARIA is not decorative metadata — it defines accessibility semantics.

## Final Principles

- Native HTML first.
- ARIA reflects state — never hardcode it.
- Every interactive pattern requires keyboard support.
- Test with a screen reader.
- If unsure, consult [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/).

Accessible React components are not about adding attributes — they are about implementing complete interaction models.
