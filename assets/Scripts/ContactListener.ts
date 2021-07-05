
import { _decorator, Component, Node, Collider2D, Contact2DType, PhysicsSystem2D, IPhysics2DContact } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ContactListener')
export class ContactListener extends Component {

    @property
    self: Node = new Node;
    @property
    story: Node = new Node;

    onLoad() {

    }

    start() {
        let collider = this.getComponent(Collider2D);

        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
        if (PhysicsSystem2D.instance) {
            PhysicsSystem2D.instance.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
    }
    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        console.log('onBeginContact 1');
        if (otherCollider.tag == selfCollider.tag) {
            console.log('onBeginContact 2');
            this.story.active = true;
            this.self.active = false;
        }
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}

