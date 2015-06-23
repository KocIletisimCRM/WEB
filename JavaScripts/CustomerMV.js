/// <reference path="~/JavaScripts/jquery-2.1.3.js" />
/// <reference path="~/JavaScripts/CustomerTransferApi.js" />
/// <reference path="~/JavaScripts/knockout-3.3.0.js" />

$(window).load(function () {

    var ct = new customerTransfer();
    ko.applyBindings(ct);
    ct.getCustomer();
    ct.getSite();
});


var customerTransfer = function () {
    var self = this;
    this.selectedSiteValue = ko.observable();
    this.selectedBlockValue = ko.observable();
    this.selectedFlatValue = ko.observable();
    this.flat = ko.observable();
    this.customerid = null;
    this.control = ko.observable();
    self.cname = ko.observable();
    this.resultmessage = ko.observable();
    this.resultmessage.subscribe(function () {
        setTimeout(function () { self.resultmessage(null); }, 1000);
    });
    this.cList = ko.observableArray([]);
    this.sList = ko.observableArray([]);
    this.bList = ko.observableArray([]);
    this.flatList = ko.observableArray([]);
    this.selectedSiteValue.subscribe(function (v) {

        customerblock.findBlock(v, function (a, b, c) { self.bList(a); }, null);
    });
    this.selectedBlockValue.subscribe(function (v) {
        findFlat.findflat(v, function (a, b, c) { self.flatList(a); }, null);
    });
}

customerTransfer.prototype.select = function (d, e) {
    $("#customer tr").removeClass("selected");
    $(e.currentTarget).addClass("selected");
    this.customerid = d.customerid;
}

customerTransfer.prototype.getCustomer = function (d, e) {
    var self = this;
    if (e && (e.which == 1 || e.which == 13)) {
        CustomerTransferApi.findCustomer(self.cname(), function (a, b, c) { self.cList(a); }, null);
    }
    return true;
};

customerTransfer.prototype.getSite = function () {
    var self = this;
    customersite.findSite(function (a, b, c) { self.sList(a); }, null);
};

customerTransfer.prototype.toJSON = function () {

    var self = this;
    var obj = {
        customerid: self.customerid,
        blockid: self.selectedBlockValue(),
        flat: self.selectedFlatValue(),
    };
    if (obj.customerid == null || obj.blockid == null || obj.flat == null) {
        alert("Eksik veya yanlış bilgi girdiniz.");
        return null;
    }
    else {
        saveTransfer.savetransfer(obj.customerid, obj.blockid, obj.flat, function (a, b, c) { self.sList(a); }, null);
        console.log(obj);
        return obj;
    }

};

customerTransfer.prototype.pasiveCustomer = function () {
    var self = this;
    if (self.customerid == null) {
        alert("Eksik veya yanlış bilgi girdiniz.Müşteriyi Seçiniz");
        return null;
    }
    pasiveCustomer.pasiveCustomer(self.customerid, function (a, b, c) {
        self.resultmessage(a);
        self.cList([]);
    }, null);

};






