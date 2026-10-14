// The one component catalog for the whole site.
//
// index.html and intro.html both render from this list, and every "N components" figure is
// counted from it at load time. Edit components here, never in a page: the site used to keep
// two hand-maintained copies, and they drifted (one still listed a deleted component, both
// claimed a count that had been wrong twice).
//
// Every student-facing script in gameToolKit/Assets/eventGameToolKit/Runtime belongs here.
// Internal helpers (GameData, EGTKPhysics, EGTKInput, StopMotionJob, DialogueUIController and
// the two interfaces) do not.

const EGTK_CATALOG = [
  {
    name: 'Input', color: '#4F8EF7', tint: 'rgba(79,142,247,.04)',
    rows: [
      ['InputKeyPress',           'Fires when its bound key or button is pressed',                 'Key pressed → call any function'],
      ['InputOnStart',            'Fires when the scene starts',                                   'Auto-run something on scene load'],
      ['InputTriggerZone',        'Fires when a tagged object enters or exits a collider (3D or 2D)', 'Player walks into area → call a function'],
      ['InputCheckpointZone',     'A trigger zone that also saves a spawn point',                  'Checkpoints and respawn points'],
      ['InputInteractionZone',    'Shows a prompt sprite; fires when the player presses Interact', 'Player presses E or Triangle → call any function'],
      ['InputMouseInteraction',   'Fires when the mouse clicks or hovers over this object',        'Clickable objects and sprites with a free cursor'],
      ['InputFPMouseInteraction', 'Same but raycasts from screen center',                          'Clickable objects in a first-person game'],
      ['InputClickDrag',          'Makes this object draggable',                                   'Drag-and-drop puzzles and sliders'],
      ['InputClickRotate',        'Makes this object rotatable by dragging',                       'Dials, wheels, rotating puzzles'],
      ['InputActionEvent',        'Fires from an action in an Input Actions asset',                'One action shared across many objects'],
      ['InputKeyCountdown',       'Counts key presses down to zero, then fires',                   'Press-it-five-times doors, mashing to break free'],
      ['InputCollisionEnter',     'Fires on a physics collision with a tagged object, with impact strength', 'Bullet hits, impact sounds, breakables'],
      ['InputQuitGame',           'Quits the game on Escape, or when QuitGame() is wired to an event', 'Exit buttons and quit menus'],
    ],
  },
  {
    name: 'Actions', color: '#9B72F7', tint: 'rgba(155,114,247,.04)',
    rows: [
      ['ActionPlaySound',                  'Plays a sound with randomized volume and pitch',               'Any sound effect'],
      ['ActionDisplayText',                'Shows text on screen with optional typewriter effect',         'Subtitles, hints, UI messages'],
      ['ActionDisplayImage',               'Shows an image with fade or scale animation',                  'Pop-up icons and overlays'],
      ['ActionDialogueSequence',           'Multi-line dialogue with portraits and choices',               'NPC conversations and cutscenes'],
      ['ActionSpawnObject',                'Instantiates a prefab at a spawn point',                       'Spawn enemies and pickups'],
      ['ActionAutoSpawner',                'Continuously spawns prefabs on a timer',                       'Enemy waves and ambient spawning'],
      ['ActionSpawnProjectile',            'Spawns a projectile with direction and force (3D or 2D)',      'Shooting and throwing'],
      ['ActionDestroyObject',              'Destroys this object or a list of targets, with an optional delay', 'Removing collectibles, enemy death cleanup'],
      ['ActionToggle',                     'Flips a list of objects on/off; AllOn() and AllOff() force a state', 'Show/hide groups, toggling hazards and panels'],
      ['ActionRestartScene',               'Reloads the current scene',                                    'Restart button and game over'],
      ['ActionRespawnPlayer',              'Moves the player to the last checkpoint (3D or 2D)',           'Death and respawn'],
      ['ActionTeleportToTransform',        'Teleports any object to a target',                             'Portals and warps'],
      ['ActionEventSequencer',             'Fires events in sequence with delays',                         'Cutscene chains'],
      ['ActionRandomEvent',                'Picks one event from a weighted list',                         'Random loot and varied responses'],
      ['ActionShuffleEvent',               'Cycles events in random order, each once',                     'Shuffle playlists and non-repeating dialogue'],
      ['ActionTriggerAnimatorParameter',   'Sets an Animator parameter',                                   'Trigger animations'],
      ['ActionPlayCharacterEmoteAnimation','Plays a named animation trigger',                              'Character reactions and emotes'],
      ['ActionAnimateTransform',           'Moves, rotates, or scales using animation curves',             'Custom tweened animations'],
      ['ActionRandomMotion',               'Continuously applies randomized movement',                     'Floating objects and idle wobble'],
      ['ActionEmissionAnimation',          'Animates a material\'s glow (emission) along a curve',         'Pulsing pickups, charging effects, alerts'],
      ['ActionPlatformAnimator',           'Moves a platform between waypoints',                           'Doors, elevators, and moving platforms'],
      ['ActionDecalSequence',              'Frame-by-frame material animation on a URP decal',             'Animated decals'],
      ['ActionDecalSequenceLibrary',       'Switches between multiple named decal sequences',              'Characters with multiple animation states'],
      ['ActionBlinkDecal',                 'Automatically blinks a character eye decal',                   'Any character that needs blinking'],
      ['ActionBlinkDecalOptimized',        'Blinks by swapping textures on one material instead of whole materials', 'Many blinking characters at once'],
    ],
  },
  {
    name: 'Game Managers', color: '#34D399', tint: 'rgba(52,211,153,.04)',
    rows: [
      ['GameHealthManager',     'Tracks health with damage, healing, and death event',        'Player or enemy health'],
      ['GameCollectionManager', 'Tracks a numeric value with threshold events',               'Score, coins, collectibles'],
      ['GameInventoryManager',  'Tracks multiple item slots with counts',                     'Keys, ammo, resources'],
      ['GameTimerManager',      'Counts up or down, fires events at thresholds',              'Level timer, countdown clock'],
      ['GameCheckpointManager', 'Stores last checkpoint for respawning',                      'Respawn system'],
      ['GameStateManager',      'Handles pause and victory screens',                          'Pause menu, win condition'],
      ['GameAudioManager',      'Controls background music and ambient audio',                'Music system, crossfades'],
      ['GameCameraManager',     'Switches between Cinemachine cameras by name',               'Multiple angles, cutscenes'],
      ['GameUIManager',         'Connects managers to HUD UI elements',                       'HUD wiring'],
      ['GameStoreManager',      'A shop with purchasable items, paid for from a GameCollectionManager', 'Upgrade shops and item vendors'],
      ['GameSceneManager',      'Loads scenes additively with spawn point coordination',      'Multi-level games and hub worlds'],
      ['SpawnPoint',            'Marks where the player appears when a scene loads',          'Level entrances, multiple doors into one scene'],
      ['GameFlagManager',       'Named true/false flags that survive scene loads',            'Remembering opened doors and collected pickups'],
      ['GameFlagListener',      'Reacts to a flag: already set on load, or set during play',  'Keeping a door open after you come back'],
    ],
  },
  {
    name: 'Character Controllers', color: '#EF4444', tint: 'rgba(239,68,68,.04)',
    rows: [
      ['CharacterControllerFP',      'First-person controller with mouse look, jump, sprint', 'First-person games'],
      ['CharacterControllerCC',      'Third-person controller with rotation and jump',        'Third-person and top-down games'],
      ['CharacterController2D',      'Sprite controller: Platformer or Top-Down',             '2D games'],
      ['CharacterPushRigidBody',     'Lets a CharacterControllerCC player push Rigidbodies',  'Pushable crates and barrels'],
      ['PhysicsBallPlayerController','Physics-based ball controller',                         'Rolling ball games'],
      ['PhysicsCharacterController', 'Rigidbody-based character controller',                  'Physics-heavy platformers'],
      ['EnemyControllerCC',          'AI enemy that chases the player using NavMesh',         'Basic enemy AI'],
      ['PhysicsEnemyController',     'Rigidbody-based enemy that chases',                     'Physics-based enemy AI'],
    ],
  },
  {
    name: 'Physics', color: '#FB923C', tint: 'rgba(251,146,60,.04)',
    rows: [
      ['PhysicsBumper',           'Bounces Rigidbodies that hit it; set Bumper Tag to limit which', 'Pinball bumpers, bounce pads'],
      ['PhysicsBumper2D',         'The same for sprites with a Rigidbody 2D',                  '2D bumpers and bounce pads'],
      ['PhysicsForceZone',        'Applies forces to Rigidbodies inside a trigger',            'Wind zones, jump pads, explosion areas'],
      ['PhysicsForceZone2D',      'The same for sprites with a Rigidbody 2D',                  '2D wind, updrafts, conveyor belts'],
      ['PhysicsPlatformAnimator', 'Moves a platform between waypoints, carrying riders',          'Moving platforms the player can stand on'],
      ['PhysicsPlatformStick',    'Keeps player attached to a moving platform',                'Required companion to PhysicsPlatformAnimator'],
      ['PhysicsPlatformStick2D',  'Lets a CharacterController2D ride a moving platform',       'Put it on the 2D character, not the platform'],
    ],
  },
  {
    name: 'Puzzles', color: '#F472B6', tint: 'rgba(244,114,182,.04)',
    rows: [
      ['PuzzleSwitch',          'A switch with 2–5 states that changes when activated',        'Any interactive switch, lever, or dial'],
      ['PuzzleSwitchChecker',   'Fires when every assigned switch is in its required state',   'Combination puzzles'],
      ['PuzzleSequenceChecker', 'Fires when switches are activated in the correct order',      'Sequence puzzles'],
    ],
  },
  {
    name: 'Stop Motion Look', color: '#2DD4BF', tint: 'rgba(45,212,191,.04)',
    rows: [
      ['StopMotionPostProcess',  'Steps one character\'s animation at a low framerate; everything else stays smooth', 'One stop-motion character in a normal game'],
      ['applicationFPSLimiting', 'Locks the whole game to a low framerate',                     'Whole-scene stop-motion style'],
    ],
  },
  {
    name: 'UI & Utilities', color: '#94A3C8', tint: 'rgba(148,163,200,.04)',
    rows: [
      ['FadeInFromBlackOnRestart', 'Fades the screen in from black every time the scene loads', 'Scene transitions and respawn fade-in'],
      ['ObjectAttractor',          'Pulls this Rigidbody toward a target, with optional distance falloff (3D or 2D)', 'Magnets, gravity wells, homing'],
      ['lockMouseCursorToDisplay', 'Confines the cursor to the game window; Escape toggles it', 'First-person and windowed games'],
    ],
  },
];

const EGTK_COMPONENT_COUNT = EGTK_CATALOG.reduce((n, cat) => n + cat.rows.length, 0);

// Any element with class "egtk-count" shows the live total.
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.egtk-count').forEach(el => { el.textContent = EGTK_COMPONENT_COUNT; });
});
