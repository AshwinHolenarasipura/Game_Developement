
import { _decorator, Component, Node, Animation } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('play_anim')
export class play_anim extends Component {

    // onLoad() {

    // }

    // start() {

    // }

    play() {
        var anim = this.getComponent(Animation);
        anim?.play("Dialog_anim_pop_down");
    }

    pop_up() {
        var anim = this.getComponent(Animation);
        anim?.play("Card_Holder_anim");
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}
