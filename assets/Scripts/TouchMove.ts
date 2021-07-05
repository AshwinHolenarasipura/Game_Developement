
import { _decorator, Component, Node, Collider2D, Contact2DType, Animation, PhysicsSystem2D, IPhysics2DContact } from 'cc';
const { ccclass, property, } = _decorator;

@ccclass('TouchMove')
export class TouchMove extends Component {
    // [1]
    // dummy = '';

    @property
    hand: Node = new Node;

    onLoad() {
        let mouseDown = false;
        this.node.on(Node.EventType.MOUSE_DOWN, () => {
            mouseDown = true;
            this.hand.active = false;
            var anim = this.getComponent(Animation);
            anim?.stop();
        }, this.node);

        this.node.on(Node.EventType.MOUSE_MOVE, (event: { getDelta: () => any; }) => {
            if (!mouseDown) return;
            let delta = event.getDelta();
            this.node.setPosition(this.node.position.x + delta.x, this.node.position.y + delta.y);
        }, this.node);

        this.node.on(Node.EventType.MOUSE_UP, () => {
            mouseDown = false;
        }, this.node);
    }
    // update(deltaTime: number) {


    // }
}
