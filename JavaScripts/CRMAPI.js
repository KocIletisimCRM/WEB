if (!window.CRMAPI) {
    window.CRMAPI = (function () {
        baseURI = "http://localhost:50752/api";
        return {
            getTaskQueues: function (pageNo, rowsPerPage, filter, onsuccess, onerror) {

                $.ajax({
                    url: baseURI + "/Task/getTasks",
                    method: "POST",
                    contentType: "application/json",
                    data: JSON.stringify({ pageNo: pageNo, rowsPerPage: rowsPerPage, filter: filter })

                })
                .fail(function () {
                    if (onerror) onerror();
                })
                .success(function (a, b, c) {
                    if (onsuccess) onsuccess(a, b, c);
                })
                .complete(function () {
                })
            }
        };


       

    })();

    //window.CRMAPI=(function(){
    //    baseURI="http://localhost:50752/api";
    //    return{
    //        findCustomer:function(cname, onsuccess, onerror) {

    //            $.ajax({
    //                url: baseURI + "/Nakil/findCustomer?cname="+cname,
    //                method: "GET",
    //                contentType: "application/json",
                    
                    
    //            })
    //                .fail(function () {
    //                    if (onerror) onerror();
    //                })
    //                .success(function (a, b, c) {
    //                    if (onsuccess) onsuccess(a, b, c);
    //                })
    //                .complete(function () {
    //                })
            
    //        }
    //    };

    //})();
}