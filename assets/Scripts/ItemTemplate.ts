
import { _decorator, Component, Node, Sprite, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ItemTemplate')
export class ItemTemplate extends Component {
    @property
    public id = 0;
    @property(Sprite)
    public icon: Sprite | null = null;
    @property(Label)
    public itemName: Label | null = null;
    @property(Label)
    public itemPrice: Label | null = null;

    start() {
        // [3]
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}