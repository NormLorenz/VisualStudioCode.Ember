/// <reference path="../../typings/ember/ember.d.ts"/>
app = Ember.Application.create({
    LOG_TRANSITIONS: true
});

app.IndexController = Ember.ArrayController.extend({
    renderedOn: function () {
        return new Date();
    }.property(),

    actions: {
        clickMe: function () {
            alert("I have been clicked");
        }
    }
});

Ember.Handlebars.registerBoundHelper("fromDate", function (theDate) {
    var today = moment();
    var target = moment(theDate);
    return target.from(today);
});

Ember.Handlebars.registerBoundHelper("longYear", function (theDate) {
    return moment(theDate).format('YYYY');
});

app.IndexRoute = Ember.Route.extend({
    model: function () {
        return ['red', 'yellow', 'blue'];
    }
});

app.Router.map(function () {
    this.route("index", { path: "/" });
    this.route("table");
    this.route("component");
});
