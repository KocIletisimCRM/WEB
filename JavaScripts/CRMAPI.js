if (!window.CRMAPI) {
    baseURI = "http://localhost:50752/api/";

    window.CRMAPI = (function () {
        var callApiMethod = function (methodPath, sendmethod, senddata, onsuccess, onerror) {
            $.ajax({
                url: baseURI + methodPath,
                method: sendmethod,
                contentType: "application/json",
                data: JSON.stringify(senddata)
            })
                .fail(function () {
                    if (onerror) onerror();
                })
                .success(function (a, b, c) {
                    if (onsuccess) onsuccess(a, b, c);
                })
                .complete(function () {
                });
            var taskQueueApi = (function () {
                return {
                    rowsPerPage: 20,
                    setFilter: function(filter){
                    },
                    getPage: function (pageNo) {
                        callApiMethod()
                        }
                };
                
            })();
        }
        return {
            getTaskName: function ( onsuccess, onerror) {
                $.ajax({
                    url: baseURI + "/TaskQueueFilter/getTasks",
                    method: "POST",
                    contentType: "application/json",
                    data: JSON.stringify()
                })
                .fail(function (a, b, c) { if (onerror) onerror(a, b, c); })
                .success(function (a, b, c) {
                    if (onsuccess) onsuccess(a, b, c);
                })
                .complete(function () { })
            }
        };
        return {
            getTaskQueues: function (pageNo, rowsPerPage, filter,onsuccess, onerror) {
                $.ajax({
                    url: baseURI + "/Task/getTaskQueues",
                    method: "POST",
                    contentType: "application/json",
                    data: JSON.stringify({ pageNo: pageNo, rowsPerPage: rowsPerPage, filter: filter })
                })
                .fail(function (a, b, c) { if (onerror) onerror(a, b, c); })
                .success(function (a, b, c) {
                    if (onsuccess) onsuccess(a, b, c);
                })
                .complete(function () { })
            }
        };
       
    })();

   

}