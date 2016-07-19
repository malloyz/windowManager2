/**
 * Created by malloy on 2015/5/29.
 */

/**
 * 蒙版基类
 */
var Mask = cc.LayerColor.extend({
    _touchedCallBack: null,//触摸回调
    _bGrey: null,

    setGrey: function (bValue) {
        if (this._bGrey === bValue) {
            return;
        }
        this._bGrey = bValue;

        if (bValue) {
            this.setColor(cc.color(0, 0, 0));
            this.setOpacity(210);
        } else {
            this.setOpacity(0);
        }
    },

    /**
     * 触摸
     * @param touch
     * @param event
     * @returns {boolean}
     */
    _onTouchBegan: function (touch, event) {
        return true;
    },

    /**
     * 触摸
     * @param touch
     * @param event
     * @returns {boolean}
     */
    _onTouchEnded: function (touch, event) {
        this._touchedCallBack && this._touchedCallBack(touch, event);
    },

    /**
     * 设置触摸回调函数
     * @param fun
     */
    setTouchedCallBack: function (fun) {
        this._touchedCallBack = fun;
    },

    /**
     * 当显示时注册触摸事件
     */
    onShow: function () {
        var touchListener = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: this._onTouchBegan.bind(this),
            onTouchEnded: this._onTouchEnded.bind(this)
        });
        cc.eventManager.addListener(touchListener, this);
    },

    /**
     * 当隐藏时移除触摸事件
     */
    onHide: function () {
        cc.eventManager.removeListeners(this);
    },

    /**
     * 当销毁时移除触摸事件
     */
    onDestroy: function () {
        cc.eventManager.removeListeners(this);
    }
});
