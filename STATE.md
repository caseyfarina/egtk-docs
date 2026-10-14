---
project: egtk-docs
category: docs
status: active
updated: 2026-10-13
---

## Now

Caught up with the toolkit as of 2026-10-13. The catalog lists all 75 student-facing
components, and there are dedicated 2D (`2d.html`) and input (`input.html`) pages.

**The catalog lives in `components.js` only.** `index.html` and `intro.html` both render from
it, and every "N components" figure is counted from it at page load (`.egtk-count`). Edit
components there, never in a page — two hand-kept copies is what let the count and the list
drift before.

The site is hand-authored — there is no pipeline from code to these pages, so nothing
updates itself.

## How the 2026-10-13 audit was done (repeat it after toolkit changes)

1. Every `Component.Member` pair on every page checked against that class's public methods
   and UnityEvents in `gameToolKit/Assets/eventGameToolKit/Runtime`.
2. Every camelCase field/event name checked against serialized fields in the code.
3. Catalog checked to equal the set of `MonoBehaviour` classes minus internal helpers
   (`DialogueUIController`, `ProjectileVelocity`).
4. Behavioural claims read against the code, not the old docs. That found real errors the
   name checks could not: `InputKeyCountdown` counts presses (not a hold),
   `PhysicsPlatformAnimator` moves by transform (not Rigidbody), `FullHeal()` does revive,
   and `InputTriggerZone`'s events are `On Trigger Enter Event` / `On Trigger Exit Event`
   (pages said `On Enter`, `onEnter`, `On Trigger Enter`).

## Next

- Pages still without a deep dive, reachable only through the catalog: decals,
  stop motion, spawning, puzzles beyond the example, physics bumpers/force zones (3D).
- `ActionTeleportToTransform` in 2D is marked ⚠️ untested on `2d.html`; update once tried.

## Blocked

- none

## Known issues

- none. (The stale in-package copy `Documentation/egtk-intro.html` was deleted 2026-10-13;
  the site is the only copy of these pages.)
