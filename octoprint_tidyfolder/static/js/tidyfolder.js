/*
 * View model for TidyFolder
 *
 * Author: Eben Olson
 * License: MIT
 */
$(function() {
    function TidyfolderViewModel(parameters) {
        var self = this;

        // assign the injected parameters, e.g.:
        // self.loginStateViewModel = parameters[0];
        // self.settingsViewModel = parameters[1];

        // TODO: Implement your plugin's view model here.
    }

    // view model class, parameters for constructor, container to bind to
    OCTOPRINT_VIEWMODELS.push([
        TidyfolderViewModel,

        // e.g. loginStateViewModel, settingsViewModel, ...
        [ /* "loginStateViewModel", "settingsViewModel" */ ],

        // e.g. #settings_plugin_tidyfolder, #tab_plugin_tidyfolder, ...
        [ /* ... */ ]
    ]);
});
