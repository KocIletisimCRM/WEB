if (!window.PenetrasyonApi) {

  // baseURI = "http://localhost:50752/api"
    baseURI = "http://crmapitest.kociletisim.com.tr:8083/api"

   window.Customer = (function () {


       return {
           getCustomer: function (siteid, blockid, customername, closedtasks, onsuccess, onerror) {

               $.ajax({
                   url: baseURI + "/Penetrasyon/getCustomer",
                   method: "POST",
                   contentType: "application/json",
                   data: JSON.stringify({ siteid: siteid, blockid: blockid, name: customername, closedtasks: closedtasks })
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
   }
    )();
    window.Site = (function () {


        return {
            getSite: function (onsuccess, onerror) {

                $.ajax({
                    url: baseURI + "/Penetrasyon/getSite",
                    method: "GET",
                    contentType: "application/json",


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
    }

   )();
    window.Block = (function () {


        return {
            getBlock: function (siteid,onsuccess, onerror) {

                $.ajax({
                    url: baseURI + "/Penetrasyon/getBlock?siteid="+siteid,
                    method: "GET",
                    contentType: "application/json",


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
    }

  )();


}