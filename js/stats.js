var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "26325",
        "ok": "26241",
        "ko": "84"
    },
    "minResponseTime": {
        "total": "48",
        "ok": "48",
        "ko": "15040"
    },
    "maxResponseTime": {
        "total": "25710",
        "ok": "25710",
        "ko": "15157"
    },
    "meanResponseTime": {
        "total": "1930",
        "ok": "1888",
        "ko": "15062"
    },
    "standardDeviation": {
        "total": "2715",
        "ok": "2616",
        "ko": "22"
    },
    "percentiles1": {
        "total": "110",
        "ok": "108",
        "ko": "15055"
    },
    "percentiles2": {
        "total": "3928",
        "ok": "3894",
        "ko": "15065"
    },
    "percentiles3": {
        "total": "7307",
        "ok": "7279",
        "ko": "15112"
    },
    "percentiles4": {
        "total": "12494",
        "ok": "12279",
        "ko": "15147"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 14858,
    "percentage": 56
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 616,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 10767,
    "percentage": 41
},
    "group4": {
    "name": "failed",
    "count": 84,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "53.289",
        "ok": "53.119",
        "ko": "0.17"
    }
},
contents: {
"req_load-high-1-1b25f": {
        type: "REQUEST",
        name: "load_high_1",
path: "load_high_1",
pathFormatted: "req_load-high-1-1b25f",
stats: {
    "name": "load_high_1",
    "numberOfRequests": {
        "total": "26325",
        "ok": "26241",
        "ko": "84"
    },
    "minResponseTime": {
        "total": "48",
        "ok": "48",
        "ko": "15040"
    },
    "maxResponseTime": {
        "total": "25710",
        "ok": "25710",
        "ko": "15157"
    },
    "meanResponseTime": {
        "total": "1930",
        "ok": "1888",
        "ko": "15062"
    },
    "standardDeviation": {
        "total": "2715",
        "ok": "2616",
        "ko": "22"
    },
    "percentiles1": {
        "total": "110",
        "ok": "108",
        "ko": "15055"
    },
    "percentiles2": {
        "total": "3928",
        "ok": "3894",
        "ko": "15065"
    },
    "percentiles3": {
        "total": "7307",
        "ok": "7279",
        "ko": "15112"
    },
    "percentiles4": {
        "total": "12492",
        "ok": "12279",
        "ko": "15147"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 14858,
    "percentage": 56
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 616,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 10767,
    "percentage": 41
},
    "group4": {
    "name": "failed",
    "count": 84,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "53.289",
        "ok": "53.119",
        "ko": "0.17"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
