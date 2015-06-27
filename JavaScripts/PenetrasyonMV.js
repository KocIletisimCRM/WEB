/// <reference path="~/JavaScripts/jquery-2.1.3.js" />
/// <reference path="~/JavaScripts/PenetrasyonApi.js" />
/// <reference path="~/JavaScripts/knockout-3.3.0.js" />

$(window).load(function () {

    p = new penetrasyon();
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
    this.cList.subscribe(function () {
        self.pageNo(1);
    });
    this.sList = ko.observableArray([]);
    this.bList = ko.observableArray([]);
    this.closedtasks = ko.observable();
    this.closedtasks.subscribe(function () {
        self.getCustomer();
    });
    this.selectedSiteValue.subscribe(function (v) {
        Block.getBlock(v, function (a, b, c) { self.bList(a); }, null);
        self.getCustomer();
    });
    this.selectedBlockValue.subscribe(function (v) {
        Customer.getCustomer(null, v, null, function (a, b, c) { self.cList(a); }, null);
    });
    this.pageNo = ko.observable(1);
    this.pageNo.subscribe(function () {
        self.datasource(self.cList().slice((self.pageNo() - 1) * self.rowsPerPage(), self.pageNo() * self.rowsPerPage() - 1));
    });
    this.pageNo.extend({ notify: 'always' });
    this.rowsPerPage = ko.observable(20);
    this.datasource = ko.observable([]);
}



penetrasyon.prototype.select = function (d, e) {
    $("#customer tr").removeClass("selected");
    $(e.currentTarget).addClass("selected");
    this.customerid = d.customerid;
};


penetrasyon.prototype.getCustomer = function (){
    var self = this;
    //if (e && (e.which == 1 || e.which == 13)) { }
    self.cList([]);
    Customer.getCustomer(self.selectedSiteValue(), self.selectedBlockValue(), null, self.closedtasks(),
        function (a, b, c) {
            self.cList(a);
        }, null);
};

penetrasyon.prototype.getSite = function (d, e) {
    var self = this;
    Site.getSite(function (a, b, c) { self.sList(a); }, null);
};







