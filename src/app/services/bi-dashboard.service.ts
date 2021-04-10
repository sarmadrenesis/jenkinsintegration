import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class BiDashboardService {

  dailyUnit: any[] =[
  {
    "date": new Date(2020, 8, 1),
    "denizen": 39150,
    "dockers": 13050,
    "levis": 34800
  }, {
    "date": new Date(2020, 8, 2),
    "denizen": 40200,
    "dockers": 14100,
    "levis": 35000
  }, {
    "date": new Date(2020, 8, 3),
    "denizen": 38700,
    "dockers": 13300,
    "levis": 32000
  }, {
    "date": new Date(2020, 8, 4),
    "denizen": 37300,
    "dockers": 15000,
    "levis": 33790
  }, {
    "date": new Date(2020, 8, 5),
    "denizen": 41100,
    "dockers": 12900,
    "levis": 34600
  }, {
    "date": new Date(2020, 8, 6),
    "denizen": 39000,
    "dockers": 13600,
    "levis": 32900
  }, {
    "date": new Date(2020, 8, 7),
    "denizen": 38600,
    "dockers": 14200,
    "levis": 34730
  },{
    "date": new Date(2020, 8, 8),
    "denizen": 40600,
    "dockers": 15300,
    "levis": 34000
  }, {
    "date": new Date(2020, 8, 9),
    "denizen": 41100,
    "dockers": 14800,
    "levis": 31800
  }, {
    "date": new Date(2020, 8, 10),
    "denizen": 42000,
    "dockers": 15800,
    "levis": 34350
  }, {
    "date": new Date(2020, 8, 11),
    "denizen": 38900,
    "dockers": 14600,
    "levis": 35100
  }, {
    "date": new Date(2020, 8, 12),
    "denizen": 39100,
    "dockers": 12100,
    "levis": 33300
  }, {
    "date": new Date(2020, 8, 13),
    "denizen": 40700,
    "dockers": 13800,
    "levis": 34380
  }, {
    "date": new Date(2020, 8, 14),
    "denizen": 40300,
    "dockers": 13350,
    "levis": 32900
  },{
    "date": new Date(2020, 8, 15),
    "denizen": 41500,
    "dockers": 14300,
    "levis": 33800
  }];
  dailyRev: any[] =[
  {
    "date": new Date(2020, 8, 1),
    "denizen": 4350,
    "dockers": 502,
    "levis": 1392
  }, {
    "date": new Date(2020, 8, 2),
    "denizen": 4467 ,
    "dockers": 542,
    "levis": 1400
  }, {
    "date": new Date(2020, 8, 3),
    "denizen": 4300    ,
    "dockers": 512,
    "levis": 1280
  }, {
    "date": new Date(2020, 8, 4),
    "denizen": 4144    ,
    "dockers": 577,
    "levis": 1352
  }, {
    "date": new Date(2020, 8, 5),
    "denizen": 4567    ,
    "dockers": 496,
    "levis": 1384
  }, {
    "date": new Date(2020, 8, 6),
    "denizen": 4333    ,
    "dockers": 523,
    "levis": 1316
  }, {
    "date": new Date(2020, 8, 7),
    "denizen": 4289    ,
    "dockers": 546,
    "levis": 1389
  },{
    "date": new Date(2020, 8, 8),
    "denizen": 4511    ,
    "dockers": 588,
    "levis": 1360
  }, {
    "date": new Date(2020, 8, 9),
    "denizen": 4567,
    "dockers": 569    ,
    "levis": 1272
  }, {
    "date": new Date(2020, 8, 10),
    "denizen": 4667,
    "dockers": 608,
    "levis": 1374
  }, {
    "date": new Date(2020, 8, 11),
    "denizen": 4322,
    "dockers": 562,
    "levis": 1404
  }, {
    "date": new Date(2020, 8, 12),
    "denizen": 4344,
    "dockers": 465,
    "levis": 1332
  }, {
    "date": new Date(2020, 8, 13),
    "denizen": 4522,
    "dockers": 531,
    "levis": 1375
  },{
    "date": new Date(2020, 8, 14),
    "denizen": 4478,
    "dockers": 513,
    "levis": 1316
  },{
    "date": new Date(2020, 8, 15),
    "denizen": 4611,
    "dockers": 550,
    "levis": 1352
  }];
  multiLineDailyRevByProduct: any[] =[
    {
      "graphDate": new Date(2020, 8, 1),
      "menBottom": 52200,
      "menTop": 26100,
      "womenBottom": 4350,
      "womenTop": 870,
      "accessaries": 3480
    },
    {
      "graphDate": new Date(2020, 8, 2),
      "menBottom": 53580,
      "menTop": 26790,
      "womenBottom": 4465,
      "womenTop": 893,
      "accessaries": 3572
    },
    {
      "graphDate": new Date(2020, 8, 3),
      "menBottom": 50400,
      "menTop": 25200,
      "womenBottom": 4200,
      "womenTop": 840,
      "accessaries": 3360
    },
    {
      "graphDate": new Date(2020, 8, 4),
      "menBottom": 51654,
      "menTop": 25827,
      "womenBottom": 4305,
      "womenTop": 861,
      "accessaries": 3444
    },
    {
      "graphDate": new Date(2020, 8, 5),
      "menBottom": 53160,
      "menTop": 26580,
      "womenBottom": 4430,
      "womenTop": 886,
      "accessaries": 3544
    },
    {
      "graphDate": new Date(2020, 8, 6),
      "menBottom": 51300,
      "menTop": 25650,
      "womenBottom": 4275,
      "womenTop": 855,
      "accessaries": 3420
    },
    {
      "graphDate": new Date(2020, 8, 7),
      "menBottom": 52518,
      "menTop": 26259,
      "womenBottom": 4377,
      "womenTop": 875,
      "accessaries": 3501
    },
    {
      "graphDate": new Date(2020, 8, 8),
      "menBottom": 53940,
      "menTop": 26970,
      "womenBottom": 4495,
      "womenTop": 899,
      "accessaries": 3596
    },
    {
      "graphDate": new Date(2020, 8, 9),
      "menBottom": 52620,
      "menTop": 26310,
      "womenBottom": 4385,
      "womenTop": 877,
      "accessaries": 3508
    },
    {
      "graphDate": new Date(2020, 8, 10),
      "menBottom": 55290,
      "menTop": 27645,
      "womenBottom": 4608,
      "womenTop": 922,
      "accessaries": 3686
    },
    {
      "graphDate": new Date(2020, 8, 11),
      "menBottom": 53160,
      "menTop": 26580,
      "womenBottom": 4430,
      "womenTop": 886,
      "accessaries": 3544
    },
    {
      "graphDate": new Date(2020, 8, 12),
      "menBottom": 50700,
      "menTop": 25350,
      "womenBottom": 4225,
      "womenTop": 845,
      "accessaries": 3380
    },
    {
      "graphDate": new Date(2020, 8, 13),
      "menBottom": 53328,
      "menTop": 26664,
      "womenBottom": 4444,
      "womenTop": 889,
      "accessaries": 3555
    },
    {
      "graphDate": new Date(2020, 8, 14),
      "menBottom": 51930,
      "menTop": 25965,
      "womenBottom": 4328,
      "womenTop": 866,
      "accessaries": 3462
    },
    {
      "graphDate": new Date(2020, 8, 15),
      "menBottom": 53760,
      "menTop": 26880,
      "womenBottom": 4480,
      "womenTop": 896,
      "accessaries": 3584
    }
  ]
  multiLineDailyUnitByProduct: any[] =[
    {
      "graphDate": new Date(2020, 8, 1),
      "menBottom": 3746,
      "menTop": 1873,
      "womenBottom": 312,
      "womenTop": 62,
      "accessaries": 250
    },
    {
      "graphDate": new Date(2020, 8, 2),
      "menBottom": 3845,
      "menTop": 1923,
      "womenBottom": 320,
      "womenTop": 64,
      "accessaries": 256
    },
    {
      "graphDate": new Date(2020, 8, 3),
      "menBottom": 3655,
      "menTop": 1827,
      "womenBottom": 305,
      "womenTop": 61,
      "accessaries": 244
    },
    {
      "graphDate": new Date(2020, 8, 4),
      "menBottom": 3644,
      "menTop": 1822,
      "womenBottom": 304,
      "womenTop": 61,
      "accessaries": 243
    },
    {
      "graphDate": new Date(2020, 8, 5),
      "menBottom": 3868,
      "menTop": 1934,
      "womenBottom": 322,
      "womenTop": 64,
      "accessaries": 258
    },
    {
      "graphDate": new Date(2020, 8, 6),
      "menBottom": 3703,
      "menTop": 1852,
      "womenBottom": 309,
      "womenTop": 62,
      "accessaries": 247
    },
    {
      "graphDate": new Date(2020, 8, 7),
      "menBottom": 3735,
      "menTop": 1867,
      "womenBottom": 311,
      "womenTop": 62,
      "accessaries": 249
    },
    {
      "graphDate": new Date(2020, 8, 8),
      "menBottom": 3876,
      "menTop": 1938,
      "womenBottom": 323,
      "womenTop": 65,
      "accessaries": 258
    },
    {
      "graphDate": new Date(2020, 8, 9),
      "menBottom": 3845,
      "menTop": 1922,
      "womenBottom": 320,
      "womenTop": 64,
      "accessaries": 256
    },
    {
      "graphDate": new Date(2020, 8, 10),
      "menBottom": 3989,
      "menTop": 1995,
      "womenBottom": 332,
      "womenTop": 66,
      "accessaries": 266
    },
    {
      "graphDate": new Date(2020, 8, 11),
      "menBottom": 3773,
      "menTop": 1886,
      "womenBottom": 314,
      "womenTop": 63,
      "accessaries": 252
    },
    {
      "graphDate": new Date(2020, 8, 12),
      "menBottom": 3685,
      "menTop": 1843,
      "womenBottom": 307,
      "womenTop": 61,
      "accessaries": 246
    },
    {
      "graphDate": new Date(2020, 8, 13),
      "menBottom": 3857,
      "menTop": 1928,
      "womenBottom": 321,
      "womenTop": 64,
      "accessaries": 257
    },
    {
      "graphDate": new Date(2020, 8, 14),
      "menBottom": 3784,
      "menTop": 1892,
      "womenBottom": 315,
      "womenTop": 63,
      "accessaries": 252
    },
    {
      "graphDate": new Date(2020, 8, 15),
      "menBottom": 3908,
      "menTop": 1954,
      "womenBottom": 326,
      "womenTop": 65,
      "accessaries": 261
    }
  ]
  constructor() { }
}
