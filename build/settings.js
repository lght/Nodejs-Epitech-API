// Generated by CoffeeScript 1.12.0
(function() {
  var EpitechAPISettings;

  EpitechAPISettings = (function() {
    function EpitechAPISettings() {}

    EpitechAPISettings.prototype.url_signIn = function() {
      return "https://intra.epitech.eu/?format=json";
    };

    EpitechAPISettings.prototype.url_module = function(year, codemodule, codeinstance) {
      return "https://intra.epitech.eu/module/" + year + "/" + codemodule + "/" + codeinstance + "/?format=json";
    };

    EpitechAPISettings.prototype.url_activityMeetingSlots = function(year, codemodule, codeinstance, codeacti) {
      return "https://intra.epitech.eu/module/" + year + "/" + codemodule + "/" + codeinstance + "/" + codeacti + "/rdv/?format=json";
    };

    EpitechAPISettings.prototype.url_event = function(year, module, city, acti, ev) {
      return "https://intra.epitech.eu/module/" + year + "/" + module + "/" + city + "/acti-" + acti + "/event-" + ev + "?format=json";
    };

    EpitechAPISettings.prototype.url_eventRegistered = function(year, module, city, acti, ev) {
      return "https://intra.epitech.eu/module/" + year + "/" + module + "/" + city + "/acti-" + acti + "/event-" + ev + "/registered?format=json";
    };

    EpitechAPISettings.prototype.url_dayActivities = function(year, month, day) {
      return "https://intra.epitech.eu/planning/load?start=" + year + "-" + month + "-" + day + "&end=" + year + "-" + month + "-" + day + "&format=json";
    };

    EpitechAPISettings.prototype.url_eventChangeStatus = function(year, module, city, acti, ev, email, status) {
      return "https://intra.epitech.eu/module/" + year + "/" + module + "/" + city + "/acti-" + acti + "/event-" + ev + "/updateregistered?format=json";
    };

    return EpitechAPISettings;

  })();

  exports.EpitechAPISettings = EpitechAPISettings;

}).call(this);