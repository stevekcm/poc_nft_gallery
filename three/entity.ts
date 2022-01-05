import { Vector3, Quaternion } from "three";

export default class Entity {
  name: string;
  components: any;
  position: Vector3;
  rotation: Quaternion;
  parent: any;
  eventHandlers: any;

  constructor() {
    this.name = "";
    this.components = {};
    this.position = new Vector3();
    this.rotation = new Quaternion();
    this.parent = null;
    this.eventHandlers = {};
  }

  AddComponent(component: any) {
    component.SetParent(this);
    this.components[component.name] = component;
  }

  SetParent(parent: any) {
    this.parent = parent;
  }

  SetName(name: string) {
    this.name = name;
  }

  get Name() {
    return this.name;
  }

  GetComponent(name: string) {
    return this.components[name];
  }

  SetPosition(position: any) {
    this.position.copy(position);
  }

  get Position() {
    return this.position;
  }

  SetRotation(rotation: Quaternion) {
    this.rotation.copy(rotation);
  }

  get Rotation() {
    return this.rotation;
  }

  FindEntity(name: string) {
    return this.parent.Get(name);
  }

  RegisterEventHandler(handler: any, topic: any) {
    if (!this.eventHandlers.hasOwnProperty(topic)) {
      this.eventHandlers[topic] = [];
    }

    this.eventHandlers[topic].push(handler);
  }

  Broadcast(msg: any) {
    if (!this.eventHandlers.hasOwnProperty(msg.topic)) {
      return;
    }

    for (const handler of this.eventHandlers[msg.topic]) {
      handler(msg);
    }
  }

  PhysicsUpdate(world: any, timeStep: any) {
    for (let k in this.components) {
      this.components[k].PhysicsUpdate(world, timeStep);
    }
  }

  Update(timeElapsed: any) {
    for (let k in this.components) {
      this.components[k].Update(timeElapsed);
    }
  }
}
