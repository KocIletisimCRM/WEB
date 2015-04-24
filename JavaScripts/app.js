/// <reference path="~/JavaScripts/jquery-2.1.3.js" />
/// <reference path="~/JavaScripts/CRMAPI.js" />
/// <reference path="~/JavaScripts/knockout-3.3.0.js" />
var rowCount = 25;
$(window).load(function () {
    $("#btn").click(function () {
        CRMAPI.getTaskQueues(10, rowCount, {}, function (a, b, c) {
            taskqueueList(a);
        }, function () { });
    });
    $("#f1").change( function () {
        CRMAPI.getTaskQueues(10, rowCount, { TaskIds: null, TaskName:$("#f1").val(), TaskTypeIds: null, TaskTypeName: null }, function (a, b, c) {
            taskqueueList(a);
        }, function () { });
    });
    $('#rowCount').on('change', function () {
        rowCount = this.value;
    });
    taskqueueList = ko.observableArray([]);
    taskNameFilter = ko.observable();
    taskNameFilter.subscribe(function (oldValue) {
        if (taskNameFilter.timeOutHandler) clearTimeout(taskNameFilter.timeOutHandler);
        taskNameFilter.timeOutHandler = setTimeout(function () {
            //ajax çağırılacak
            alert("700ms Geçti");
        }, 700);
    });
    ko.applyBindings(taskqueueList, $("#Task")[0]);
})
