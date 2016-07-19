/**
 * Created by malloyzhu on 2016/7/19.
 */

var SecondWindow = WindowBase.extend({
    ctor: function () {
        this._super();

        var view = new cc.LayerColor(cc.color(111, 111, 255));
        this.addChild(view);

        var view = new ccui.Text();
        view.setTextColor(cc.color(0, 0, 0));
        view.setFontSize(50);
        view.setString("Second Window");
        view.setPosition(cc.winSize.width / 2, cc.winSize.height / 2 + 200);
        this.addChild(view);

        var view = new ccui.Button();
        view.setTitleText("show third window");
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
            ThirdWindow.Show();
        }
    },

    onShowNotify: function () {
        console.log("SecondWindow onShowNotify");
    },

    onShow: function () {
        console.log("SecondWindow onShow");
    },

    onHideNotify: function () {
        console.log("SecondWindow onHideNotify");
    },

    onHide: function () {
        console.log("SecondWindow onHide");
    },

    onDestroyNotify: function () {
        console.log("SecondWindow onDestroyNotify");
    },

    onDestroy: function () {
        console.log("SecondWindow onDestroy");
    },

    onCover: function () {
        console.log("SecondWindow onCover");
    },

    onResume: function () {
        console.log("SecondWindow onResume");
    }
});

SecondWindow.GetInstance = function () {
    if (null == SecondWindow._instance) {
        SecondWindow._instance = new SecondWindow();
    }
    return SecondWindow._instance;
};

SecondWindow.Show = function () {
    var instance = SecondWindow.GetInstance();
    WindowManager.GetInstance().showWindow(instance, null, true, 10, false, null, null);
};

SecondWindow.Hide = function () {
    WindowManager.GetInstance().hideWindow(SecondWindow._instance);
};

SecondWindow.Destroy = function () {
    WindowManager.GetInstance().destroyWindow(SecondWindow._instance);
    SecondWindow._instance = null;
};
