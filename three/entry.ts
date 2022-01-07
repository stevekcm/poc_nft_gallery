/**
 * entry.ts
 *
 * This is the first file loaded. It sets up the Renderer,
 * Scene, Physics and Entities. It also starts the render loop and
 * handles window resizes.
 *
 */

import * as THREE from "three";
import Entity from "./entity";
import EntityManager from "./entityManager";
import Input from "./input";

class Gallery {
  lastFrameTime: any;
  assets: any;
  animFrameId: number;

  constructor() {
    this.lastFrameTime = null;
    this.assets = {};
    this.animFrameId = 0;
  }

  Init() {}

  SetupGraphics() {}

  SetupPhyscis() {}

  SetAnim(name: any, obj: any) {}

  PromiseProgress(proms: any, progress_cb: any) {}

  AddAsset(asset: any, loader: any, name: any) {}

  HideProgress() {}

  SetupStartButton() {}

  ShowMenu(visible = true) {}
}
