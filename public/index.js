import { makeGame } from './engine.js';
import { spawnPlayer, movePlayer, drawPlayer } from './player/index.js';
import { spawnObstacles, drawObstacles } from './obstacle/index.js';
import { spawnNpcs, moveNpcs, drawNpcs } from './npc/index.js';
import { spawnCamera, moveCamera } from './camera/index.js';
import { spawnBackground, moveBackground, drawBackground } from './background/index.js';

const spawners = [spawnBackground, spawnPlayer, spawnObstacles, spawnNpcs, spawnCamera];
const updaters = [moveNpcs, movePlayer, moveBackground, moveCamera];
const renderers = [drawBackground, drawObstacles, drawNpcs, drawPlayer];

const game = makeGame(spawners, updaters, renderers);

window.addEventListener('load', game.start);
window.addEventListener('unload', game.stop);
