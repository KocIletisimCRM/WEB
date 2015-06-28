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

    window.getCustomerCard = (function () {


        return {
            CustomerCard: function (custid, onsuccess, onerror) {

                $.ajax({
                    url: baseURI + "/Penetrasyon/getCustomerCard",
                    method: "POST",
                    contentType: "application/json",
                    data: JSON.stringify({ custid:custid }),

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

    window.getCustomerStatus = (function () {


        return {
            getStatus: function ( onsuccess, onerror) {

                $.ajax({
                    url: baseURI + "/Penetrasyon/getCustomerStatus",
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
    window.getISSstatus = (function () {


        return {
            getStatus: function (onsuccess, onerror) {

                $.ajax({
                    url: baseURI + "/Penetrasyon/getIISstatus",
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
    window.getNetStatus = (function () {


        return {
            getStatus: function (onsuccess, onerror) {

                $.ajax({
                    url: baseURI + "/Penetrasyon/getNetStatus",
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
    window.getTvStatus = (function () {


        return {
            getStatus: function (onsuccess, onerror) {

                $.ajax({
                    url: baseURI + "/Penetrasyon/getTvStatus",
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
    window.getTurkcellTvStatus = (function () {


        return {
            getStatus: function (onsuccess, onerror) {

                $.ajax({
                    url: baseURI + "/Penetrasyon/getTurkcellTv",
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
    window.getGsmStatus = (function () {


        return {
            getStatus: function (onsuccess, onerror) {

                $.ajax({
                    url: baseURI + "/Penetrasyon/getGsmStatus",
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
    window.saveCustomer = (function () {


        return {
            saveCt: function (onsuccess, onerror) {

                $.ajax({
                    url: baseURI + "/Penetrasyon/saveCustomerCard",
                    method: "POST",
                    contentType: "application/json",
                    data: JSON.stringify(p.selectedCustomer())

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