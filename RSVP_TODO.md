# RSVP Section — TODO Plan

## Task 1: Simplify meal options to meat, fish, and vegetarian

**File:** `src/components/rsvp/rsvpData.ts`

Replace the current four meat options (Rindfilet, Hähnchenbrust) with a single "Fleisch" entry, keeping fish and vegetarian. The result should be exactly three choices plus the placeholder:

```ts
export const mealOptions = [
  { value: "", label: "Bitte auswählen" },
  { value: "meat", label: "Fleisch" },
  { value: "fish", label: "Fisch" },
  { value: "vegetarian", label: "Vegetarisch" },
];
```

---

## Task 2: Persist the submitted state across page reloads

**File:** `src/components/rsvp/RSVP.astro` (the `<script>` block)

After a successful form submission, write a flag to `localStorage` (e.g. `localStorage.setItem("rsvp_sent", "true")`). On page load, check for that flag — if it is set, immediately hide the form and show the success message without waiting for a submission.

Key changes:
- Add an `initView()` function that runs on `DOMContentLoaded` (or at script start) to check `localStorage` and toggle visibility.
- Set the flag inside the `try` block after the `fetch` succeeds, before showing the success message.

---

## Task 3: Refactor RSVP into sub-components

**Goal:** Split the monolithic `RSVP.astro` into focused, reusable pieces following the same pattern used by other sections in this project.

Proposed file layout under `src/components/rsvp/`:

| File                | Responsibility                                                                                                                  |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `RSVP.astro`        | Section shell: `<section>`, heading, `HeartDivider`, renders `<RSVPForm>` and `<RSVPSuccess>`                                   |
| `RSVPForm.astro`    | The `<form>` element and all its fields; imports field sub-components                                                           |
| `RSVPSuccess.astro` | The success message card (SVG icon + text)                                                                                      |
| `RSVPField.astro`   | Generic labelled field wrapper (label + slot + error message) — reduces repetition across the text/email/number/textarea inputs |

The `<script>` logic (validation, fetch, localStorage) stays in `RSVPForm.astro`.
