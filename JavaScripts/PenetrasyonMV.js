﻿/// <reference path="~/JavaScripts/jquery-2.1.3.js" />
/// <reference path="~/JavaScripts/PenetrasyonApi.js" />
/// <reference path="~/JavaScripts/knockout-3.3.0.js" />

$(window).load(function () {

    var p = new penetrasyon();
    ko.applyBindings(p);
    p.getCustomer();
    p.getSite();
});


var penetrasyon = function () {
    var self = this;
    this.customerid = null;
    this.selectedSiteValue = ko.observable();
    this.selectedBlockValue = ko.observable();
    this.cList = ko.observableArray([]);
    this.sList = ko.observableArray([]);
    this.bList = ko.observableArray([]);
}

this.selectedSiteValue.subscribe(function (v) {
    Block.getBlock(self.selectedSiteValue, function (a, b, c) { self.bList(a); }, null);
});

penetrasyon.prototype.select = function (d, e) {
    $("#customer tr").removeClass("selected");
    $(e.currentTarget).addClass("selected");
    this.customerid = d.customerid;
}

penetrasyon.prototype.getCustomer = function (d, e){
    var self = this;
    if (e && (e.which == 1 || e.which == 13)) {
        Customer.getCustomer(function (a, b, c) { self.cList(a); }, null);
    }
};

penetrasyon.prototype.getSite = function (d, e) {
    var self = this;
    Site.getSite(function (a, b, c) { self.sList(a); }, null);
};







