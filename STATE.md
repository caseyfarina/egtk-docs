---
project: egtk-docs
category: docs
status: active
updated: 2026-09-11
---

## Now

**The site is significantly behind the toolkit.** It documents 58 components; the package
now has 75. Nothing on the site mentions 2D support or the Input System migration, and
every new component's `[HelpURL]` points at the index because no page covers it yet.

The site is hand-authored — there is no pipeline from code to these pages, so nothing
updates itself.

## Next

1. **Correct the catalog in `intro.html`.** 18 components are missing and one,
   `PhysicsBumperTag`, no longer exists (merged into `PhysicsBumper` as a tag filter):

   `ActionBlinkDecalOptimized`, `ActionDestroyObject`, `ActionEmissionAnimation`,
   `ActionToggle`, `CharacterController2D`, `CharacterPushRigidBody`, `GameFlagListener`,
   `GameFlagManager`, `GameStoreManager`, `InputQuitGame`, `PhysicsBumper2D`,
   `PhysicsForceZone2D`, `PhysicsPlatformStick2D`, `SpawnPoint`, `StopMotionPostProcess`,
   `applicationFPSLimiting`, `lockMouseCursorToDisplay`, `ObjectAttractor`

2. **Fix the count in `index.html`** — it claims "all 65 components". Derive it rather than
   guessing; the number has been wrong twice.

3. **Add a 2D page.** Which components work with `Collider2D`, `CharacterController2D`
   setup, and the Ground Layer trap that silently stops jumping.

4. **Add an input page.** Keys are now bound through an Input Action in the Inspector, not
   picked from a dropdown. Existing projects must set their keys again.

5. **Point `[HelpURL]` at the new pages** once they exist, in the toolkit repo.

`gameToolKit/Assets/eventGameToolKit/Documentation/ComponentQuickReference.md` is current
and is the best source for steps 3 and 4.

## Blocked

- none

## Known issues

- `gameToolKit/Assets/eventGameToolKit/Documentation/egtk-intro.html` is a **stale copy** of
  this site's intro page that ships inside the package, and it still lists components
  deleted long ago. Either delete it or regenerate it; maintaining two copies is what let
  it drift.
