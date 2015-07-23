/// <reference path="~/JavaScripts/jquery-2.1.3.js" />
/// <reference path="~/JavaScripts/CRMAPI.js" />
/// <reference path="~/JavaScripts/knockout-3.3.0.js" />
//var rowCount = 25;
//$(window).load(function () {

//    $("#btn").click(function () {
//     CRMAPI.getTaskQueues(10, rowCount, {}, function (a, b, c) {taskqueueList(a);}, function () { });
//    }); 
    
//    $("#f1").change( function () {
//        CRMAPI.getTaskQueues(10, rowCount, { TaskIds: null, TaskName:$("#f1").val(), TaskTypeIds: null, TaskTypeName: null }, function (a, b, c) {
//            taskqueueList(a);
//        }, function () { });
//    });
//    $('#rowCount').on('change', function () {
//        rowCount = this.value;
//    });


//    taskqueueList = ko.observableArray([]);
//    taskNameFilter = ko.observable();

//    taskNameFilter.subscribe(function (oldValue) {
//        if (taskNameFilter.timeOutHandler) clearTimeout(taskNameFilter.timeOutHandler);
//        taskNameFilter.timeOutHandler = setTimeout(function () {
//            //ajax çağırılacak
//            alert("700ms Geçti");
//        }, 700);
//    });


//    getSite = function () {
//        var self = this;
//        CRMAPI.getTaskQueues(10, rowCount, {}, function (a, b, c) { taskqueueList(a); }, function () { });
//    };
//    ko.applyBindings(taskqueueList, $("#Task")[0]);
//})
$(window).load(function () {

    var tq = new taskqueue();
    tq.getTaskName();
    ko.applyBindings(tq)
});

var taskqueue = function () {
    var self = this;
    this.taskqueuelist = ko.observableArray([]);
    this.pageNo = ko.observable(1);
    this.tasklist = ko.observableArray([]);
    this.selectedtaskname = ko.observable();
    this.filter = { tableName: "taskqueue", keyField: "taskorderno", subTables: { "taskid": { tableName: "task", keyField: "taskid", fieldFilters: [{ fieldName: "taskname", op: 6, value: "satış" }] } } };

}
taskqueue.prototype.select = function (d, e) {
    $("#customer tr").removeClass("selected");
    $(e.currentTarget).addClass("selected");
   // this.customerid = d.customerid;
};


taskqueue.prototype.getTaskName = function () {
    var self = this;
    CRMAPI.getTaskName(function (a, b, c) {
        self.tasklist(a)
    }, function () { });
};