directives.directive("tbWelcomeMessage", function() {
    return {
        restrict: "E",
        template: "<div>How are you?</div>"
    }
});

directives.directive("tbAttributeDirective", function() {
    return {
        restrict: "A",
        template: "<div>I am an attribute directive?</div>"
    }
});

directives.directive("bothAttAndElement", function() {
    return {
        restrict: "AE",
        template: "<div>Both Attribute and Element</div>"
    }
});

directives.directive("test", function() {
    return {
        restrict: "E",
        template: "<div>TEST DIRECTIVE</div>"
    }
});