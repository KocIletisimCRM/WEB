if (!window.CustomerTransferApi) {

    //baseURI = "http://localhost:50752/api"
    baseURI = "http://crmapitest.kociletisim.com.tr:8083/api"
    window.CustomerTransferApi = (function () {

        return {
            findCustomer: function (cname, onsuccess, onerror) {

                $.ajax({
                    url: baseURI + "/Nakil/findCustomer?cname=" + cname,
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

    window.customersite = (function () {


        return {
            findSite: function (onsuccess, onerror) {

                $.ajax({
                    url: baseURI + "/Nakil/findSite",
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

    window.customerblock = (function () {


        return {
            findBlock: function (siteid, onsuccess, onerror) {
                $.ajax({
                    url: baseURI + "/Nakil/findBlock?siteid=" + siteid,
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

    window.findFlat = (function () {

        return {
            findflat: function (blockid, onsuccess, onerror) {

                $.ajax({
                    url: baseURI + "/Nakil/findFlat?blockid=" + blockid,
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


    })();


    window.saveTransfer = (function () {
        return {
            savetransfer: function (customerid, blockid, flat, onsuccess, onerror) {
                $.ajax({
                    url: baseURI + "/Nakil/saveTransfer",
                    method: "POST",
                    contentType: "application/json",
                    data: JSON.stringify({ customerid: customerid, blockid: blockid, flat: flat })


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

    window.pasiveCustomer = (function () {

        return {
            pasiveCustomer: function (custid, onsuccess, onerror) {
                $.ajax({
                    url: baseURI + "/Nakil/pasiveCustomer?custid=" + custid,
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
    })();

}