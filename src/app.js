
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var view = new cc.LayerColor(cc.color(111, 111, 111));
        this.addChild(view);

        var touchListener = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: this._onTouchBegan.bind(this),
            onTouchEnded: this._onTouchEnded.bind(this)
        });
        cc.eventManager.addListener(touchListener, this);
    },

    _onTouchBegan: function (touch, event) {
        return true;
    },

    _onTouchEnded: function (touch, event) {
        FirstWindow.Show();
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

