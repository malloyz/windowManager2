/**
 * Created by malloyzhu on 2016/7/19.
 */

var FirstWindow = WindowBase.extend({
    ctor: function () {
        this._super();

        var view = new cc.LayerColor(cc.color(111, 255, 111));
        this.addChild(view);

        var view = new ccui.Text();
        view.setTextColor(cc.color(0, 0, 0));
        view.setFontSize(50);
        view.setString("First Window");
        view.setPosition(cc.winSize.width / 2, cc.winSize.height / 2 + 200);
        this.addChild(view);

        var view = new ccui.Button();
        view.setTitleText("show second window");
        view.setTitleColor(cc.color(0, 0, 0));
        view.setTitleFontSize(50);
        view.setTouchEnabled(true);
        view.setPressedActionEnabled(true);
        view.addTouchEventListener(this._onButtonTouched, this);
        view.setPosition(cc.winSize.width / 2, cc.winSize.height / 2);
        this.addChild(view);
    },

    _onButtonTouched: function (sender, type) {
        if (ccui.Widget.TOUCH_ENDED == type) {
            SecondWindow.Show();
        }
    },

    onShowNotify: function () {
        console.log("FirstWindow onShowNotify");
    },

    onShow: function () {
        console.log("FirstWindow onShow");
    },

    onHideNotify: function () {
        console.log("FirstWindow onHideNotify");
    },

    onHide: function () {
        console.log("FirstWindow onHide");
    },

    onDestroyNotify: function () {
        console.log("FirstWindow onDestroyNotify");
    },

    onDestroy: function () {
        console.log("FirstWindow onDestroy");
    },

    onCover: function () {
        console.log("FirstWindow onCover");
    },

    onResume: function () {
        console.log("FirstWindow onResume");
    }
});

FirstWindow.GetInstance = function () {
    if (null == FirstWindow._instance) {
        FirstWindow._instance = new FirstWindow();
    }
    return FirstWindow._instance;
};

FirstWindow.Show = function () {
    var instance = FirstWindow.GetInstance();
    var action = WindowAction.getSlideDownwardAction(instance);
    WindowManager.GetInstance().showWindow(instance, action, false, 10, false, null, null);
};

FirstWindow.Hide = function () {
    WindowManager.GetInstance().hideWindow(FirstWindow._instance);
};

FirstWindow.Destroy = function () {
    WindowManager.GetInstance().destroyWindow(FirstWindow._instance);
    FirstWindow._instance = null;
};
