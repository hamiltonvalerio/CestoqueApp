cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open"
        ]
    },
    {
        "file": "plugins/cordova-plugin-inappbrowser/src/browser/InAppBrowserProxy.js",
        "id": "cordova-plugin-inappbrowser.InAppBrowserProxy",
        "pluginId": "cordova-plugin-inappbrowser",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "id": "cordova-plugin-statusbar.statusbar",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/cordova-plugin-statusbar/src/browser/StatusBarProxy.js",
        "id": "cordova-plugin-statusbar.StatusBarProxy",
        "pluginId": "cordova-plugin-statusbar",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/src/browser/DeviceProxy.js",
        "id": "cordova-plugin-device.DeviceProxy",
        "pluginId": "cordova-plugin-device",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/src/browser/SplashScreenProxy.js",
        "id": "cordova-plugin-splashscreen.SplashScreenProxy",
        "pluginId": "cordova-plugin-splashscreen",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-ionic-webview/src/www/util.js",
        "id": "cordova-plugin-ionic-webview.IonicWebView",
        "pluginId": "cordova-plugin-ionic-webview",
        "clobbers": [
            "Ionic.WebView"
        ]
    },
    {
        "file": "plugins/cordova-plugin-android-permissions/www/permissions-dummy.js",
        "id": "cordova-plugin-android-permissions.Permissions",
        "pluginId": "cordova-plugin-android-permissions",
        "clobbers": [
            "cordova.plugins.permissions"
        ]
    },
    {
        "file": "plugins/phonegap-plugin-barcodescanner/www/barcodescanner.js",
        "id": "phonegap-plugin-barcodescanner.BarcodeScanner",
        "pluginId": "phonegap-plugin-barcodescanner",
        "clobbers": [
            "cordova.plugins.barcodeScanner"
        ]
    },
    {
        "file": "plugins/phonegap-plugin-barcodescanner/src/browser/BarcodeScannerProxy.js",
        "id": "phonegap-plugin-barcodescanner.BarcodeScannerProxy",
        "pluginId": "phonegap-plugin-barcodescanner",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-printer/www/printer.js",
        "id": "cordova-plugin-printer.Printer",
        "pluginId": "cordova-plugin-printer",
        "clobbers": [
            "cordova.plugins.printer"
        ]
    },
    {
        "file": "plugins/cordova-plugin-printer/src/browser/PrinterProxy.js",
        "id": "cordova-plugin-printer.Printer.Proxy",
        "pluginId": "cordova-plugin-printer",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-inappbrowser": "5.0.0",
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-statusbar": "2.4.3",
    "cordova-plugin-device": "2.0.3",
    "cordova-plugin-splashscreen": "5.0.4",
    "cordova-plugin-ionic-webview": "4.2.1",
    "cordova-plugin-ionic-keyboard": "2.2.0",
    "cordova-plugin-android-permissions": "1.1.2",
    "phonegap-plugin-barcodescanner": "8.1.0",
    "cordova-plugin-printer": "0.8.0"
}
// BOTTOM OF METADATA
});