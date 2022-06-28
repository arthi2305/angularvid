var app = angular
    .module("Demo", ["ui.router"])
    .config(function ($urlMatcherFactoryProvider) {
        $urlMatcherFactoryProvider.caseInsensitive(true);
    })
