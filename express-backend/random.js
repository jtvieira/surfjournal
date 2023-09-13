
/**
 * Returns location manager object
 * @returns {object} value give LocationManager object
 */

ApplicationManager.prototype.getLocationManager = function() {
    return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule({
        
        "moduleName" : "LocationManager",
        "appName"    : "CommonsMA"
        
    }).businessController;
}






