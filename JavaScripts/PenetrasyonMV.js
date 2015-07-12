/// <reference path="~/JavaScripts/jquery-2.1.3.js" />
/// <reference path="~/JavaScripts/PenetrasyonApi.js" />
/// <reference path="~/JavaScripts/knockout-3.3.0.js" />

$(window).load(function () {

    p = new penetrasyon();
    ko.applyBindings(p);
    p.getCustomer();
    p.getSite();
    p.CustomerStatus();
    p.getISSStatus();
    p.netStatus();
    p.getTvStatus();
    p.getTurkcellTvStatus();
    p.getGsmStatus();
});


var penetrasyon = function () {
    var self = this;
    this.customerid = ko.observable();
    this.customername = ko.observable();
    this.sitename = ko.observable();
    this.regionname = ko.observable();
    this.selectedSiteValue = ko.observable();
    this.selectedBlockValue = ko.observable();
    this.selectedCustomerStatusValue = ko.observable();
    this.selectedNetStatusValue = ko.observable();
    this.selectedTvStatusValue = ko.observable();
    this.selectedTurkcellTvStatusValue = ko.observable();
    this.selectedGsmStatusValue = ko.observable();
    this.cList = ko.observableArray([]);
    this.cList.subscribe(function () {
        self.pageNo(1);
    });
    this.sList = ko.observableArray([]);
    this.bList = ko.observableArray([]);
    this.regionList = ko.observableArray([]);
    this.closedtasks = ko.observable();
    this.customerCardList = ko.observableArray([]);
    this.statusList = ko.observableArray([]);
    this.ISSList = ko.observableArray([]);
    this.NetStatusList = ko.observableArray([]);
    this.tvStatusList = ko.observableArray([]);
    this.TurkcelTvStatusList = ko.observableArray([]);
    this.GsmStatusList = ko.observableArray([]);
    this.closedtasks.subscribe(function () {
        self.getCustomer();
    });
    this.selectedSiteValue.subscribe(function (v) {
        Block.getBlock(v, function (a, b, c) { self.bList(a); }, null);
        self.getCustomer();
    });
    this.selectedBlockValue.subscribe(function (v) {
        p.getCustomer(null, v, null, function (a, b, c) { self.cList(a); }, null);
    });
    this.pageNo = ko.observable(1);
    this.pageNo.subscribe(function () {
        if (self.pageNo() == 0) self.datasource([]);
        else self.datasource(self.cList().slice((self.pageNo() - 1) * self.rowsPerPage(), self.pageNo() * self.rowsPerPage() - 1));
    });
    this.pageNo.extend({ notify: 'always' });
    this.rowsPerPage = ko.observable(20);
    this.pageCount = ko.computed(function(){
        return (self.cList().length / self.rowsPerPage()) + 1;
    });
    this.datasource = ko.observable([]);
    this.selectedCustomer = ko.observable();
}


penetrasyon.prototype.select = function (d, e) {
    $("#customer tr").removeClass("selected");
    $(e.currentTarget).addClass("selected");
    this.customerid = d.customerid;
};
penetrasyon.prototype.findCustomer = function (d,e) {
    var self = this;
    if (e && (e.which == 1 || e.which == 13)) {
        Customer.getCustomer(null, null, self.customername(),self.regionname(), self.closedtasks(), function (a, b, c) { self.cList(a); }, null);
    }
    return true;
};
penetrasyon.prototype.findSite = function (d, e) {
    var self = this;
    if (e && (e.which == 1 || e.which == 13)) {
        Customer.getCustomer(self.sitename(), null, self.customername(),self.regionname(), self.closedtasks(), function (a, b, c) { self.cList(a); }, null);
    }
    return true;
};
penetrasyon.prototype.go = function () {
    var self = this;
    return {
        first: function () {
            self.pageNo(1);
        },
        previous: function () {
            self.pageNo(Math.max(self.pageNo() - 1, 1));
        },
        page: function (pageNo) {
            self.pageNo(Math.max(1, Math.min(pageNo, self.pageCount())));
        },
        next: function () {
            self.pageNo(Math.min(self.pageCount(), self.pageNo() + 1));
        },
        last: function () {
            self.pageNo(self.pageCount());
        }
    }
}
penetrasyon.prototype.getCustomer = function (){
    var self = this;
    //if (e && (e.which == 1 || e.which == 13)) { }
    self.pageNo(0);
    Customer.getCustomer(self.selectedSiteValue(), self.selectedBlockValue(),self.customername(),self.regionname(),self.closedtasks(),
        function (a, b, c) {
            self.cList(a);
        }, null);
};
penetrasyon.prototype.getSite = function () {
    var self = this;
    Site.getSite(function (a, b, c) { self.sList(a); }, null);
};
penetrasyon.prototype.getRegions = function (d,e) {
    var self = this;
    if (e && (e.which == 1 || e.which == 13)) {
        Customer.getCustomer(null, null, self.customername(), self.regionname(), self.closedtasks(), function (a, b, c) { self.cList(a); }, null);
    }
    return true;
};
penetrasyon.prototype.CustomerStatus = function () {
    var self = this;
    getCustomerStatus.getStatus(function (a, b, c) { self.statusList(a); }, null);
};
penetrasyon.prototype.getISSStatus = function () {
    var self = this;
    getISSstatus.getStatus(function (a, b, c) { self.ISSList(a); }, null);
};
penetrasyon.prototype.netStatus = function () {
    var self = this;
    getNetStatus.getStatus(function (a, b, c) { self.NetStatusList(a); }, null);
};
penetrasyon.prototype.getTvStatus = function () {
    var self = this;
    getTvStatus.getStatus(function (a, b, c) { self.tvStatusList(a); }, null);
};
penetrasyon.prototype.getTurkcellTvStatus = function () {
    var self = this;
    getTurkcellTvStatus.getStatus(function (a, b, c) { self.TurkcelTvStatusList(a); }, null);
};
penetrasyon.prototype.getGsmStatus = function () {
    var self = this;
    getGsmStatus.getStatus(function (a, b, c) { self.GsmStatusList(a); }, null);
};
penetrasyon.prototype.getCustomerCard = function (index) {
    var self = this;
    console.log(index);
    var obj = self.cList()[index];
    obj.closedKatZiyareti = false;
    self.selectedCustomer(obj);
    //getCustomerCard.CustomerCard(self.customerid(),function (a, b, c) {self.customerCardList(a) });
};
penetrasyon.prototype.saveCustomer = function (d,e) {
    var self = this;
    self.selectedCustomer().customer_status = { id: $("#customerstatus").val() };
    self.selectedCustomer().issStatus = { id: $("#issstatus").val() };
    self.selectedCustomer().netStatus = { id: $("#netstatus").val() };
    self.selectedCustomer().gsmKullanımıStatus = { id: $("#gsmstatus").val() };
    self.selectedCustomer().telStatus = { id: $("#telstatus").val() };
    self.selectedCustomer().TvKullanımıStatus = { id: $("#tvstatus").val() };
    saveCustomer.saveCt(function (a, b, c) { }, null);
    Customer.getCustomer(self.sitename(),self.selectedBlockValue(),self.customername(),self.regionname(),self.closedtasks(),function (a, b, c) { }, null)

};

penetrasyon.prototype.getPageNumbers = function () {
    var self = this;
    var pn = [];
    for (var i = 0; i < self.pageCount(); i++) {
        pn.push(i + 1);
    }
    return pn;
};






