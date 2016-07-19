/**
 * Created by malloy on 2015/5/29.
 */

/**
 * 窗口基类
 */
var WindowBase = cc.Node.extend({
    ctor: function () {
        this._super();
        this.setAnchorPoint(0.5, 0.5);
        this.setContentSize(cc.winSize);
        this.setCascadeColorEnabled(true);
        this.setCascadeOpacityEnabled(true);
        this.setPosition(cc.winSize.width / 2, cc.winSize.height / 2);
    },

    /**
     * 窗口显示时被调用，如果显示时没有使用 action，那么先调用 onShowNotify 后会马上调用 onShow
     */
    onShowNotify: function () {},

    /**
     * 窗口显示时被调用，如果显示时使用 action ，那么先调用 onShowNotify，action 回调时调用 onShow
     */
    onShow: function () {},

    /**
     * 窗口隐藏时被调用，如果隐藏时没有使用 action，那么先调用 onHideNotify 后会马上调用 onHide
     */
    onHideNotify: function () {},

    /**
     * 窗口隐藏时被调用，如果隐藏时使用 action ，那么先调用 onHideNotify，action 回调时调用 onHide
     */
    onHide: function () {},

    /**
     * 窗口消毁时被调用，如果移除时没有使用 action，那么先调用 onRemoveNotify 后会马上调用 onRemove
     */
    onDestroyNotify: function () {},

    /**
     * 窗口消毁时被调用，如果移除时使用 action ，那么先调用 onRemoveNotify，action 回调时调用 onRemove
     */
    onDestroy: function () {},

    /**
     * 新窗口在此窗口上显示时调用
     */
    onCover: function () {},

    /**
     * 窗口当前被遮盖，再被显示时调用
     */
    onResume: function () {}
});