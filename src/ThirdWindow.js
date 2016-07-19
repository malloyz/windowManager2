/**
 * Created by malloyzhu on 2016/7/19.
 */

var ThirdWindow = WindowBase.extend({
    ctor: function () {
        this._super();

        var view = new cc.LayerColor(cc.color(255, 111, 111));
        this.addChild(view);

        var view = new ccui.Text();
        view.setTextColor(cc.color(0, 0, 0));
        view.setFontSize(50);
        view.setString("Third Window");
        view.setPosition(cc.winSize.width / 2, cc.winSize.height / 2 + 200);
        this.addChild(view);

        var view = new ccui.Button();
        view.setTitleText("hide third window");
        view.setTitleColor(cc.color(0, 0, 0));
        view.setTitleFontSize(50);
        view.setPressedActionEnabled(true);
        view.setTouchEnabled(true);
        view.addTouchEventListener(this._onButtonTouched, this);
        view.setPosition(cc.winSize.width / 2, cc.winSize.height / 2);
        this.addChild(view);
    },

    _onButtonTouched: function (sender, type) {
        if (ccui.Widget.TOUCH_ENDED == type) {
            ThirdWindow.Hide();
        }
    },

    onShowNotify: function () {
        console.log("ThirdWindow onShowNotify");
    },

    onShow: function () {
        console.log("ThirdWindow onShow");
    },

    onHideNotify: function () {
        console.log("ThirdWindow onHideNotify");
    },

    onHide: function () {
        this.setPosition(cc.winSize.width / 2, cc.winSize.height / 2);
        console.log("ThirdWindow onHide");
    },

    onDestroyNotify: function () {
        console.log("ThirdWindow onDestroyNotify");
    },

    onDestroy: function () {
        console.log("ThirdWindow onDestroy");
    },

    onCover: function () {
        console.log("ThirdWindow onCover");
    },

    onResume: function () {
        console.log("ThirdWindow onResume");
    }
});

ThirdWindow.GetInstance = function () {
    if (null == ThirdWindow._instance) {
        ThirdWindow._instance = new ThirdWindow();
    }
    return ThirdWindow._instance;
};

ThirdWindow.Show = function () {
    var instance = ThirdWindow.GetInstance();
    var action = WindowAction.getScaleEaseElasticOutAction(instance);
    WindowManager.GetInstance().showWindow(instance, action, false, 10, false, null, null);
};

ThirdWindow.Hide = function () {
    var action = WindowAction.getUpGlideAction(ThirdWindow._instance);
    WindowManager.GetInstance().hideWindow(ThirdWindow._instance, action);
};

ThirdWindow.Destroy = function () {
    var action = WindowAction.getUpGlideAction(ThirdWindow._instance);
    WindowManager.GetInstance().destroyWindow(ThirdWindow._instance, action);
    ThirdWindow._instance = null;
};
