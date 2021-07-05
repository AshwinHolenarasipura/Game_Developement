
import { _decorator, Component, Node, Scheduler, Animation, BoxCollider2D } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('HandTut')
export class HandTut extends Component {
    @property
    hand: Node = new Node;

    start() {
        // this.tut();
    }

    // update (deltaTime: number) {
    //     // [4]
    // }

    tut() {
        this.scheduleOnce(() => {
            this.hand.active = true;
        }, 2);
    }

    play_anim() {
        this.scheduleOnce(() => {
            var anim = this.getComponent(Animation);
            anim?.play("Hand_anim");
        }, 2);

    }
}
