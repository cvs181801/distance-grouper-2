const express = require('express')
//const axios = require('axios')
//const { DateTime } = require("luxon")
const app = express()
const path = require('path')
const port = 8000;

app.use('/', express.static(path.join(__dirname, "client", "build")));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

// let port = process.env.PORT;
// if (port == null || port == "") {
//   port = 8000;
// }
app.listen(port);


const envoiArray = [
    {
      "Address": "990 renaissance dr, Oshawa, ON, L1J 8B2",
      "Latitude": 43.856631,
      "Longitude": -78.864163
    },
    {
      "Address": "1481 Ritson Rd S, Oshawa, ON, L1J 3M3",
      "Latitude": 43.8611538,
      "Longitude": -78.8366938
    },
    {
      "Address": "440 Dean Avenue, Oshawa, ON, L1H3E2",
      "Latitude": 43.8886798,
      "Longitude": -78.841671
    },
    {
      "Address": "373 Highland Avenue, Oshawa, ON, L1H 6B2",
      "Latitude": 43.8921413,
      "Longitude": -78.8402833
    },
    {
      "Address": "311 Poplar Street, Oshawa, ON, L1H 6P6",
      "Latitude": 43.895383,
      "Longitude": -78.833887
    },
    {
      "Address": "325 OSHAWA BLVD S, OSHAWA, ON, L1H 5R9, Canada",
      "Latitude": 43.8918304,
      "Longitude": -78.8476205
    },
    {
      "Address": "300 Courcellette Avenue, Oshawa, ON, L1H 2E5",
      "Latitude": 43.8941503,
      "Longitude": -78.8498558
    },
    {
      "Address": "250 athol st east, oshawa, ON, L1H 1K3",
      "Latitude": 43.8988427,
      "Longitude": -78.8541416
    },
    {
      "Address": "150 Centre Street South, Oshawa, ON, L1H 4A4",
      "Latitude": 43.8930736,
      "Longitude": -78.8641154
    },
    {
      "Address": "P.O. BOX 54005, OSHAWA, ON, L1H1Y1, Canada",
      "Latitude": 43.8916387,
      "Longitude": -78.8638313
    },
    {
      "Address": "P.O. BOX 54005, OSHAWA, ON, L1H1Y1, Canada",
      "Latitude": 43.8916387,
      "Longitude": -78.8638313
    },
    {
      "Address": "285 Burk, Oshawa, ON, L1J 4C5",
      "Latitude": 43.8881502,
      "Longitude": -78.8680308
    },
    {
      "Address": "141 Tresane Street, Oshawa, ON, L1J 1T7",
      "Latitude": 43.8839195,
      "Longitude": -78.8631015
    },
    {
      "Address": "208 Cromwell Avenue, Oshawa, ON, L1J 4T8",
      "Latitude": 43.8892874,
      "Longitude": -78.8734539
    },
    {
      "Address": "438 King St. W., Oshawa, ON, L1J 2K9",
      "Latitude": 43.8944109,
      "Longitude": -78.8804152
    },
    {
      "Address": " 110 Park Rd N, Oshawa, ON, L1J 4L3",
      "Latitude": 43.8981689,
      "Longitude": -78.8755108
    },
    {
      "Address": "693 Carnegie Avenue, Oshawa, ON, L1G 4R5",
      "Latitude": 43.9156051,
      "Longitude": -78.8720015
    },
    {
      "Address": "64 Arlington Ave., Oshawa, ON, L1G 2N4",
      "Latitude": 43.9120109,
      "Longitude": -78.87261
    },
    {
      "Address": "386 Division Street, Oshawa, ON, L1G 5M9",
      "Latitude": 43.9090885,
      "Longitude": -78.8619958
    },
    {
      "Address": "97 Adelaide Ave E, Oshawa, ON, L1G 1Z2",
      "Latitude": 43.9048089,
      "Longitude": -78.8628045
    },
    {
      "Address": "274 William Street East, Oshawa, ON, L1G 1K8",
      "Latitude": 43.902615,
      "Longitude": -78.8546907
    },
    {
      "Address": "71 Lasalle Ave, Oshawa, ON, L1H 5Y3",
      "Latitude": 43.8996326,
      "Longitude": -78.846028
    },
    {
      "Address": "443 Colborne St  E, Oshawa, ON, L1G 7H4",
      "Latitude": 43.904513,
      "Longitude": -78.8490796
    },
    {
      "Address": "374 Surrey Drive, Oshawa, ON, L1G 6H1",
      "Latitude": 43.9114255,
      "Longitude": -78.8467247
    },
    {
      "Address": "370 Blackthorn Street, Oshawa, ON, L1K 1K9",
      "Latitude": 43.9149798,
      "Longitude": -78.8348579
    },
    {
      "Address": "1278 Kilmaurs Avenue, Oshawa, ON, L1K 2A4",
      "Latitude": 43.9176421,
      "Longitude": -78.8213414
    },
    {
      "Address": "1351 Baynes Ave, Oshawa, ON, L1K 0C7",
      "Latitude": 43.9297853,
      "Longitude": -78.8264739
    },
    {
      "Address": "1069 Loganberry Street, Oshawa, ON, L1K 2W3",
      "Latitude": 43.9331354,
      "Longitude": -78.8320016
    },
    {
      "Address": "1153 Forest Hill Court, Oshawa, ON, L1K 2K9",
      "Latitude": 43.9364335,
      "Longitude": -78.8404984
    },
    {
      "Address": "1039 Coldstream Drive, Oshawa, ON, L1K 0J6",
      "Latitude": 43.9440238,
      "Longitude": -78.854139
    },
    {
      "Address": "938 Taggart Crescent, Oshawa, ON, L1K 0E5",
      "Latitude": 43.9367365,
      "Longitude": -78.850129
    },
    {
      "Address": "902 Beaconhill Crt, Oshawa, ON, L1K 1Y4",
      "Latitude": 43.9267798,
      "Longitude": -78.8541678
    },
    {
      "Address": "1055 Central Park Blvd N , Oshawa, ON, L1G 7M4",
      "Latitude": 43.9282424,
      "Longitude": -78.8617207
    },
    {
      "Address": "222 Nonquon Rd , Oshawa, ON, L1G 3S6",
      "Latitude": 43.9344549,
      "Longitude": -78.8703325
    },
    {
      "Address": "270 cedar valley blvd, Oshawa, ON, L1G 3W3",
      "Latitude": 43.932819,
      "Longitude": -78.8898557
    },
    {
      "Address": "221 Ormond Drive, Oshawa, ON, L1G 6T7",
      "Latitude": 43.9366949,
      "Longitude": -78.8705039
    },
    {
      "Address": "1087 Ormond Drive,, Oshawa, ON, L1K 0E8",
      "Latitude": 43.9490853,
      "Longitude": -78.8744437
    },
    {
      "Address": "398 Elmwood Court, Oshawa, ON, L1G 7X8",
      "Latitude": 43.949683,
      "Longitude": -78.8801278
    },
    {
      "Address": "366 Raike Drive, Oshawa, ON, L1L 0B1",
      "Latitude": 43.9547355,
      "Longitude": -78.8847266
    },
    {
      "Address": "190 Samac Court, Oshawa, ON, L1G 7V9",
      "Latitude": 43.9458515,
      "Longitude": -78.8904084
    },
    {
      "Address": "2387 Kentucky Derby Way, Oshawa, ON, L1L0H3",
      "Latitude": 43.9561553,
      "Longitude": -78.9066883
    },
    {
      "Address": "95 Nearco Gate, Oshawa, ON, L1L 0J2",
      "Latitude": 43.9598566,
      "Longitude": -78.8984949
    },
    {
      "Address": "2529 Bridle Road South, Oshawa, ON, L1L 0J1",
      "Latitude": 43.9637561,
      "Longitude": -78.8922079
    },
    {
      "Address": "18b Howden Road West, Oshawa, ON, L1H 0M1",
      "Latitude": 43.9998844,
      "Longitude": -78.9199952
    },
    {
      "Address": "345 Dufferin Street, Toronto, ON, M6K 3G1",
      "Latitude": 43.641067,
      "Longitude": -79.4277078
    },
    {
      "Address": "105 West Lodge Ave, Toronto, ON, M6K2T8",
      "Latitude": 43.6454448,
      "Longitude": -79.4366491
    },
    {
      "Address": "241 Lansdowne Avenue, Toronto, ON, M6K 2W2",
      "Latitude": 43.648753,
      "Longitude": -79.4390549
    },
    {
      "Address": "3 Geoffrey Street, Toronto, ON, M6R 1P2",
      "Latitude": 43.6488858,
      "Longitude": -79.4450152
    },
    {
      "Address": "202 GRENADIER RD., TORONTO, ON, M6R1R7, Canada",
      "Latitude": 43.6478593,
      "Longitude": -79.4566546
    },
    {
      "Address": "33-470 RONCESVALLES AVENUE, TORONTO, ON, M6R 2N5, Canada",
      "Latitude": 43.6398713,
      "Longitude": -79.4465321
    },
    {
      "Address": "2269 LAKE SHORE BLVD. W, ETOBICOKE, ON, M8V 3X6, Canada",
      "Latitude": 43.6196334,
      "Longitude": -79.4842971
    },
    {
      "Address": "164 Berry Road , Etobicoke, ON, M8Y 1W5",
      "Latitude": 43.6369989,
      "Longitude": -79.4910873
    },
    {
      "Address": "34 Moynes Avenue, Toronto, ON, M8Y 3B8",
      "Latitude": 43.628965,
      "Longitude": -79.4996733
    },
    {
      "Address": "23 Uno Drive, Etobicoke, ON, M8Z 3N7",
      "Latitude": 43.6274581,
      "Longitude": -79.5046374
    },
    {
      "Address": "41 Castlebar Rd, Etobicoke, ON, M8Z 2J7",
      "Latitude": 43.6313954,
      "Longitude": -79.510304
    },
    {
      "Address": "59 Athol Avenue, Etobicoke, ON, M8Z 2A7",
      "Latitude": 43.6276838,
      "Longitude": -79.51149
    },
    {
      "Address": "119 York View Drive, Etobicoke, ON, M8Z 2G5",
      "Latitude": 43.6288007,
      "Longitude": -79.5145428
    },
    {
      "Address": "983 Islington Ave, Toronto, ON, M8Z 4P9",
      "Latitude": 43.6291768,
      "Longitude": -79.5168048
    },
    {
      "Address": "1185 The Queensway, Toronto, ON, M8Z 0C6",
      "Latitude": 43.62187,
      "Longitude": -79.5215387
    },
    {
      "Address": "100 Simpson Ave., Etobicoke, ON, M8Z 1E3",
      "Latitude": 43.6175395,
      "Longitude": -79.5041102
    },
    {
      "Address": "82 Sixth Street, Toronto, ON, M8V 3A3",
      "Latitude": 43.5990486,
      "Longitude": -79.503627
    },
    {
      "Address": "135 Eighth Street, Toronto, ON, M8V 3C8",
      "Latitude": 43.6012759,
      "Longitude": -79.5065758
    },
    {
      "Address": "20 Garnett Janes Road, Toronto, ON, M8V 3Z1",
      "Latitude": 43.6016111,
      "Longitude": -79.5092479
    },
    {
      "Address": "50 Carnation Avenue, Toronto, ON, M8V0B8",
      "Latitude": 43.6008958,
      "Longitude": -79.5259266
    },
    {
      "Address": "10 Edilou Drive, Toronto, ON, M8W 4B2",
      "Latitude": 43.6057002,
      "Longitude": -79.5318672
    },
    {
      "Address": "236 Alderbrae Avenue, Toronto, ON, M8W 4K7",
      "Latitude": 43.6080233,
      "Longitude": -79.5433304
    },
    {
      "Address": "25 Alcan Avenue, Toronto, ON, M8W 1V2",
      "Latitude": 43.5941546,
      "Longitude": -79.5439012
    },
    {
      "Address": "9 Dover Drive, Toronto, ON, M8W 1V7",
      "Latitude": 43.595485,
      "Longitude": -79.5435207
    },
    {
      "Address": "44 Forty First Street, Toronto, ON, M8W 3N6",
      "Latitude": 43.5885153,
      "Longitude": -79.5423541
    },
    {
      "Address": "1040 Shaw Drive, Mississauga, ON, L5G 3Z4",
      "Latitude": 43.5648332,
      "Longitude": -79.5735794
    },
    {
      "Address": "2338 Chilsworthy Ave  , Mississauga, ON, L5B 2R1",
      "Latitude": 43.5622208,
      "Longitude": -79.6229046
    },
    {
      "Address": "25 Paisley Blvd West, Mississauga, ON, L5B1E3",
      "Latitude": 43.5756723,
      "Longitude": -79.6109488
    },
    {
      "Address": "3121 Kirwin Ave, Mississauga, ON, L5A 3K9",
      "Latitude": 43.5859044,
      "Longitude": -79.6157364
    },
    {
      "Address": "135 Hillcrest Ave, Mississauga, ON, L5B 4B1",
      "Latitude": 43.5808682,
      "Longitude": -79.6255149
    },
    {
      "Address": "155 Hillcrest Avenue, Mississauga, ON, L5B 3Z2",
      "Latitude": 43.5800932,
      "Longitude": -79.6251639
    },
    {
      "Address": "3939 Duke Of York Boulevard, Mississauga, ON, L5B 4N2",
      "Latitude": 43.5881772,
      "Longitude": -79.6407532
    },
    {
      "Address": "333 Meadows Blvd, Mississauga, ON, L4Z1G9",
      "Latitude": 43.604006,
      "Longitude": -79.6284868
    },
    {
      "Address": "429 Ginger Downs, Mississauga, ON, L5A 3A8",
      "Latitude": 43.5915582,
      "Longitude": -79.6086013
    },
    {
      "Address": "1169 Arena Road, Mississauga, ON, L4Y 4K7",
      "Latitude": 43.6066055,
      "Longitude": -79.5900987
    },
    {
      "Address": "3150 Golden Orchard Drive, Mississauga, ON, L4Y 3T7",
      "Latitude": 43.6118714,
      "Longitude": -79.5885824
    },
    {
      "Address": "3331 Dixie Road, Mississauga, ON, L4Y 2A7",
      "Latitude": 43.6159459,
      "Longitude": -79.5927598
    },
    {
      "Address": "1333 BLOOR ST. E., MISSISSAUGA, ON, L4Y 3T6, Canada",
      "Latitude": 43.6161292,
      "Longitude": -79.5966278
    },
    {
      "Address": "1333 BLOOR ST. E., MISSISSAUGA, ON, L4Y 3T6, Canada",
      "Latitude": 43.6161292,
      "Longitude": -79.5966278
    },
    {
      "Address": "1571 Williamsport Drive, Mississauga, ON, L4X 1T7",
      "Latitude": 43.6213745,
      "Longitude": -79.5917096
    },
    {
      "Address": "37 SHAVER AVENUE SOUTH, ETOBICOKE, ON, M9B 3T2, Canada",
      "Latitude": 43.636331,
      "Longitude": -79.5464919
    },
    {
      "Address": "37 SHAVER AVENUE SOUTH, ETOBICOKE, ON, M9B 3T2, Canada",
      "Latitude": 43.636331,
      "Longitude": -79.5464919
    },
    {
      "Address": "39 Loney Ave, Toronto, ON, M3L 1G2",
      "Latitude": 43.7222351,
      "Longitude": -79.5170684
    },
    {
      "Address": "23 Langside Ave, North  York, ON, M9N 3E2",
      "Latitude": 43.7090297,
      "Longitude": -79.517244
    },
    {
      "Address": "34 Holley Avenue, Toronto, ON, M9N 2C5",
      "Latitude": 43.7060621,
      "Longitude": -79.5296759
    },
    {
      "Address": "2067 Islington Ave, Etobicoke, ON, M9P 2R8",
      "Latitude": 43.7019216,
      "Longitude": -79.5478901
    },
    {
      "Address": "70 Sabrina Drive, Toronto, ON, M9R 2J9",
      "Latitude": 43.6934403,
      "Longitude": -79.5609147
    },
    {
      "Address": "52 Ashmount Crescent, Etobicoke, ON, M9R 1E1",
      "Latitude": 43.6860177,
      "Longitude": -79.5481165
    },
    {
      "Address": "250 Wincott Dr, Weston, ON, M9R 2R5",
      "Latitude": 43.67961,
      "Longitude": -79.5466108
    },
    {
      "Address": "4 Kingsborough Crescent, Toronto, ON, M9R 2T9",
      "Latitude": 43.6808042,
      "Longitude": -79.5506631
    },
    {
      "Address": " 63 Widdicombe Hill Blvd, Toronto, ON, M9R 4B2",
      "Latitude": 43.6776023,
      "Longitude": -79.5547122
    },
    {
      "Address": "10 Willowridge Road, Etobicoke, ON, M9R3Y8",
      "Latitude": 43.6750848,
      "Longitude": -79.5684655
    },
    {
      "Address": "94 Willowridge Rd, Etobicoke, ON, M9R 3Z4",
      "Latitude": 43.6787977,
      "Longitude": -79.5739745
    },
    {
      "Address": "4601 Tribal Court, Mississauga, ON, L4Z 2R1",
      "Latitude": 43.6125741,
      "Longitude": -79.6415042
    },
    {
      "Address": "420 Mill Road, Toronto, ON, M9C 1Z1",
      "Latitude": 43.644653,
      "Longitude": -79.5887657
    },
    {
      "Address": "551 THE WEST MALL, TORONTO, ON, M9C 1G7, Canada",
      "Latitude": 43.6526695,
      "Longitude": -79.5692748
    },
    {
      "Address": "551 THE WEST MALL, TORONTO, ON, M9C 1G7, Canada",
      "Latitude": 43.6526695,
      "Longitude": -79.5692748
    },
    {
      "Address": "530 The West Mall, Etobicoke, ON M9C 1G3, Canada",
      "Latitude": 43.6504109,
      "Longitude": -79.5694414
    },
    {
      "Address": "25 Eva Road, Toronto, ON, M9C 4W3",
      "Latitude": 43.639099,
      "Longitude": -79.563461
    },
    {
      "Address": "30 Fieldway Rd, Etobicoke, ON, M8Z 0E3",
      "Latitude": 43.6421679,
      "Longitude": -79.5283339
    },
    {
      "Address": "48 GREEN LANES, ETOBICOKE, ON, M8Z 4V7",
      "Latitude": 43.6417176,
      "Longitude": -79.5248348
    },
    {
      "Address": "35 Eagle Road, Toronto, ON, M8Z 4H6",
      "Latitude": 43.6433605,
      "Longitude": -79.518957
    },
    {
      "Address": "45 Gardenvale Rd., Toronto, ON, M8Z 4C2",
      "Latitude": 43.6437534,
      "Longitude": -79.5179907
    },
    {
      "Address": "59 Cliveden Ave, Etobicoke, ON, M8Z 3M9",
      "Latitude": 43.6448383,
      "Longitude": -79.5112704
    },
    {
      "Address": "1135 Royal York Road, Toronto, ON, M9A 0C3",
      "Latitude": 43.660052,
      "Longitude": -79.5162182
    },
    {
      "Address": " 165 La Rose Avenue, Toronto, ON, M9P 3S9",
      "Latitude": 43.6842539,
      "Longitude": -79.52509
    },
    {
      "Address": "75 Emmett Avenue, Toronto, ON, M6M 5A7",
      "Latitude": 43.6872013,
      "Longitude": -79.504757
    },
    {
      "Address": " 333 Sidney Belsey Cres, Toronto, ON, M6M0A2",
      "Latitude": 43.6915418,
      "Longitude": -79.5090082
    },
    {
      "Address": "18 Millennium Drive, Toronto, ON, M6M 5K7",
      "Latitude": 43.6945502,
      "Longitude": -79.4987018
    },
    {
      "Address": "18 Millennium Drive, Toronto, ON, M6M 5K7",
      "Latitude": 43.6945502,
      "Longitude": -79.4987018
    },
    {
      "Address": "15 Martha Eaton Way, Toronto, ON, M6M5B5",
      "Latitude": 43.6966037,
      "Longitude": -79.4884482
    },
    {
      "Address": " 594 Trethewey Drive, Toronto, ON, M6M4C2",
      "Latitude": 43.6971343,
      "Longitude": -79.4927758
    },
    {
      "Address": "63 Sorlyn Avenue, Toronto, ON, M6L 1H7",
      "Latitude": 43.7072423,
      "Longitude": -79.4935227
    },
    {
      "Address": "  2110 Keele St, Toronto, ON, M6M3Z2",
      "Latitude": 43.6999572,
      "Longitude": -79.4766724
    },
    {
      "Address": "2480 Eglinton Ave W, Toronto, ON, M6M 5G9",
      "Latitude": 43.6916463,
      "Longitude": -79.469409
    },
    {
      "Address": "37 Greendale Avenue, Toronto, ON, M6N 4P4",
      "Latitude": 43.6811802,
      "Longitude": -79.4894154
    },
    {
      "Address": "47 Chryessa Ave, Toronto, ON, M6N 4T4",
      "Latitude": 43.6796928,
      "Longitude": -79.4945271
    },
    {
      "Address": "101 Foxwell St, Toronto, ON, M6N1Y9",
      "Latitude": 43.6697793,
      "Longitude": -79.4992363
    },
    {
      "Address": "58 Westholme Ave, Toronto, ON, M6P 3B8",
      "Latitude": 43.6616976,
      "Longitude": -79.4796055
    },
    {
      "Address": "77 Quebec Ave, Toronto, ON, M6P 2T4",
      "Latitude": 43.6553529,
      "Longitude": -79.4672683
    },
    {
      "Address": "156 Greenlaw Avenue, Toronto, ON, M6H 3V5",
      "Latitude": 43.6762095,
      "Longitude": -79.4481455
    },
    {
      "Address": "245 Robina Avenue, Toronto, ON, M6C 3Y9",
      "Latitude": 43.688307,
      "Longitude": -79.4378371
    },
    {
      "Address": "100 Western Battery Road, Toronto, ON, M6K 3S2",
      "Latitude": 43.6395258,
      "Longitude": -79.4158554
    },
    {
      "Address": "801 King St W, Toronto, ON, M5V 3C9",
      "Latitude": 43.6427913,
      "Longitude": -79.4071946
    },
    {
      "Address": "724 Richmond Street West, Toronto, ON, M6J 1C5",
      "Latitude": 43.6457104,
      "Longitude": -79.4080649
    },
    {
      "Address": "575 Adelaide Street West, Toronto, ON, M6J 3R8",
      "Latitude": 43.6445137,
      "Longitude": -79.4036427
    },
    {
      "Address": "170 Fort York Boulevard, Toronto, ON, M5V 0E6",
      "Latitude": 43.6393466,
      "Longitude": -79.3997415
    },
    {
      "Address": "126 Simcoe Street , Toronto, ON, M5H4E2",
      "Latitude": 43.6489727,
      "Longitude": -79.3872946
    },
    {
      "Address": "180 University Avenue, Toronto, ON, M5H 0A2",
      "Latitude": 43.648953,
      "Longitude": -79.3857683
    },
    {
      "Address": "30 Grand Trunk Crescent, Toronto, ON, M5J3A4",
      "Latitude": 43.6422784,
      "Longitude": -79.3827611
    },
    {
      "Address": " 88 Harbour Street, Toronto, ON, M5J0C3",
      "Latitude": 43.6419035,
      "Longitude": -79.379113
    },
    {
      "Address": "176 The Esplanade, Toronto, ON, M5A 4H2",
      "Latitude": 43.6491595,
      "Longitude": -79.3676098
    },
    {
      "Address": "39 SHERBOURNE STREET, TORONTO, ON, M5A 0L8, Canada",
      "Latitude": 43.6510891,
      "Longitude": -79.3679085
    },
    {
      "Address": "39 SHERBOURNE STREET, TORONTO, ON, M5A 0L8, Canada",
      "Latitude": 43.6510891,
      "Longitude": -79.3679085
    },
    {
      "Address": "230 King St East, Toronto, ON, M5A 1K5",
      "Latitude": 43.6514726,
      "Longitude": -79.3681702
    },
    {
      "Address": "89 Queen Street East, Toronto, ON, M5C 1S1",
      "Latitude": 43.6532063,
      "Longitude": -79.3751217
    },
    {
      "Address": "210 Victoria St, Toronto, ON, M5B 2R3",
      "Latitude": 43.6546239,
      "Longitude": -79.3790756
    },
    {
      "Address": "500-100 UNIVERSITY AVE, TORONTO, ON, M5J 1V6, Canada",
      "Latitude": 43.6554432,
      "Longitude": -79.3891573
    },
    {
      "Address": "89 Mc Gill St , Toronto, ON, M5B 0B1",
      "Latitude": 43.6606054,
      "Longitude": -79.3786354
    },
    {
      "Address": "42 Charles Street East, Toronto, ON, M4Y 1T1",
      "Latitude": 43.6693008,
      "Longitude": -79.3841708
    },
    {
      "Address": "550 ONTARIO ST., APT. 215, TORONTO, ON, M4X 1X3, Canada",
      "Latitude": 43.6664205,
      "Longitude": -79.3722552
    },
    {
      "Address": "21 CAMBRIDGE AVE., TORONTO, ON, M4K  2L2, Canada",
      "Latitude": 43.6765295,
      "Longitude": -79.359998
    },
    {
      "Address": "1010 BROADVIEW AVENUE, EAST YORK, ON, M4K 2R8, Canada",
      "Latitude": 43.6832884,
      "Longitude": -79.3575966
    },
    {
      "Address": "1010 BROADVIEW AVENUE, EAST YORK, ON, M4K 2R8, Canada",
      "Latitude": 43.6832884,
      "Longitude": -79.3575966
    },
    {
      "Address": "636 Danforth Avenue, Toronto, ON, M4K1R3",
      "Latitude": 43.6791247,
      "Longitude": -79.3455431
    },
    {
      "Address": "19 DAWSON AVE, TORONTO, ON, M4J1E4, Canada",
      "Latitude": 43.6763421,
      "Longitude": -79.3362231
    },
    {
      "Address": "19 DAWSON AVE, TORONTO, ON, M4J1E4, Canada",
      "Latitude": 43.6763421,
      "Longitude": -79.3362231
    },
    {
      "Address": "72 Condor Avenue, Toronto, ON, M4J 3M9",
      "Latitude": 43.6761984,
      "Longitude": -79.3356711
    },
    {
      "Address": "258 Bain Avenue, Toronto, ON, M4K 1G3",
      "Latitude": 43.6728371,
      "Longitude": -79.343586
    },
    {
      "Address": "201 CARLAW AVENUE, TORONTO, ON, M4M 2S3, Canada",
      "Latitude": 43.6624902,
      "Longitude": -79.3401308
    },
    {
      "Address": "60 Curzon St, Toronto, ON, M4M 3B4",
      "Latitude": 43.6650128,
      "Longitude": -79.3325276
    },
    {
      "Address": "20 Minto Street, Toronto, ON, M4L 1B6",
      "Latitude": 43.6637647,
      "Longitude": -79.3243798
    },
    {
      "Address": "66 Walpole Avenue, Toronto, ON, M4L 3W5",
      "Latitude": 43.6753307,
      "Longitude": -79.3280006
    },
    {
      "Address": "83 Woodington Avenue, Toronto, ON, M4C 3J7",
      "Latitude": 43.6868071,
      "Longitude": -79.3218356
    },
    {
      "Address": "268 Queensdale Avenue, Toronto, ON, M4C 2B4",
      "Latitude": 43.68962,
      "Longitude": -79.3191591
    },
    {
      "Address": "263 DEWHURST BLVD N, TORONTO, ON, M4J 3K9, Canada",
      "Latitude": 43.6880711,
      "Longitude": -79.3422171
    },
    {
      "Address": "356 O'connor Drive, Toronto, ON, M4J2V5",
      "Latitude": 43.6957029,
      "Longitude": -79.3401088
    },
    {
      "Address": "11 Thorncliffe Park Dr, Toronto, ON, M4H 1P3",
      "Latitude": 43.7039781,
      "Longitude": -79.3491519
    },
    {
      "Address": "4 Grandstand Place, Toronto, ON, M4H 1E3",
      "Latitude": 43.7040176,
      "Longitude": -79.3456316
    },
    {
      "Address": "60 Pavane Linkway, Toronto, ON, M3C 1A1",
      "Latitude": 43.7112781,
      "Longitude": -79.3228344
    },
    {
      "Address": "701 Don Mills Road, Toronto, ON, M3C 1R7",
      "Latitude": 43.7083335,
      "Longitude": -79.332856
    },
    {
      "Address": "7 Saint Dennis Drive, Toronto, ON, M3C 1E4",
      "Latitude": 43.7160174,
      "Longitude": -79.3362141
    },
    {
      "Address": "4478 Chesswood Drive, North York, ON, Canada",
      "Latitude": 43.7634634,
      "Longitude": -79.4768609
    },
    {
      "Address": "2001 Bonnymede Dr., Mississauga, ON, L5J4H8",
      "Latitude": 43.5089078,
      "Longitude": -79.6257734
    },
    {
      "Address": "2395 Bromsgrove Rd , Mississauga, ON, L5J 1L6",
      "Latitude": 43.5072026,
      "Longitude": -79.6447719
    },
    {
      "Address": "2942 Windjammer Rd, Mississauga, ON, L5L 1S7",
      "Latitude": 43.5284737,
      "Longitude": -79.6843167
    },
    {
      "Address": "604 Colonial Dr, Mississauga, ON, L5L 5R9",
      "Latitude": 43.5255224,
      "Longitude": -79.7037042
    },
    {
      "Address": "1436 FERNCREST ROAD, OAKVILLE, ON, L6H7W2, Canada",
      "Latitude": 43.5040914,
      "Longitude": -79.7001163
    },
    {
      "Address": "1239 Grace Dr, Oakville, ON, L6H 6W6",
      "Latitude": 43.4930838,
      "Longitude": -79.6960025
    },
    {
      "Address": "257 Roxton Road, Oakville, ON, L6H 7K3",
      "Latitude": 43.479263,
      "Longitude": -79.7130321
    },
    {
      "Address": "2160 Trafalgar Road, Oakville, ON, L6H 0N3",
      "Latitude": 43.4784791,
      "Longitude": -79.7074624
    },
    {
      "Address": "216 Nottingham Dr, Oakville, ON, L6H 4H6",
      "Latitude": 43.4708078,
      "Longitude": -79.70311
    },
    {
      "Address": "488 Parklane Rd, Oakville, ON, L6H 4J8",
      "Latitude": 43.4725726,
      "Longitude": -79.7024526
    },
    {
      "Address": "1240 Marlborough Court, Oakville, ON, L6H 3K7",
      "Latitude": 43.4665345,
      "Longitude": -79.6927431
    },
    {
      "Address": "1260 Pallatine Drive, Oakville, ON, L6H 1Z2",
      "Latitude": 43.4616728,
      "Longitude": -79.7000572
    },
    {
      "Address": "177 McCraney St W, Oakville, ON, L6H 1H8",
      "Latitude": 43.4575588,
      "Longitude": -79.7109996
    },
    {
      "Address": "1509 Elm Rd, Oakville, ON, L6H 1W3",
      "Latitude": 43.4640944,
      "Longitude": -79.7116132
    },
    {
      "Address": "2020 Elm Rd., Oakville, ON, L6H 3K8",
      "Latitude": 43.4648486,
      "Longitude": -79.7145934
    },
    {
      "Address": "71 Morrison Creek Crescent, Oakville, ON, L6H 4C5",
      "Latitude": 43.4717977,
      "Longitude": -79.716469
    },
    {
      "Address": "20 Chester Street, Oakville, ON, L6H 6G8",
      "Latitude": 43.4716856,
      "Longitude": -79.7222362
    },
    {
      "Address": "2508 Post Rd, Oakville, ON, L6H0K1",
      "Latitude": 43.4797644,
      "Longitude": -79.7280217
    },
    {
      "Address": "152 Hopewell Road, Oakville, ON, L6H 5Z1",
      "Latitude": 43.4708663,
      "Longitude": -79.7280035
    },
    {
      "Address": "296 Jemima Dr, Oakville, ON, L6M 0V6",
      "Latitude": 43.4736558,
      "Longitude": -79.7389916
    },
    {
      "Address": "3129 Neyagawa Blvd, OAKVILLE, ON, L6M 0P4",
      "Latitude": 43.4679349,
      "Longitude": -79.7490146
    },
    {
      "Address": "2408 Valley Forest Way, Oakville, ON, L6H 6W9",
      "Latitude": 43.4605034,
      "Longitude": -79.7439526
    },
    {
      "Address": "2234 Mcdowell Ave, Oakville, ON, L6H 4K6",
      "Latitude": 43.4649154,
      "Longitude": -79.7272585
    },
    {
      "Address": "2127 Sprucedale Drive, Oakville, ON, L6H 5W3",
      "Latitude": 43.4629237,
      "Longitude": -79.7223285
    },
    {
      "Address": "2081 Oak Bliss Crescent, Oakville, ON, L6M 3K3",
      "Latitude": 43.4513776,
      "Longitude": -79.7328236
    },
    {
      "Address": "2240 Overfield rd, Oakville, ON, L6M 3S8",
      "Latitude": 43.449647,
      "Longitude": -79.7421125
    },
    {
      "Address": "2441 Falkland Crescent, Oakville, ON, L6M 4Y3",
      "Latitude": 43.4545408,
      "Longitude": -79.7496919
    },
    {
      "Address": "2463 Highmount Cres., Oakville, ON, L6M 4Z1",
      "Latitude": 43.4445705,
      "Longitude": -79.7601618
    },
    {
      "Address": "2435 Castlebrook Road, Oakville, ON, L6M 4Z2",
      "Latitude": 43.4431875,
      "Longitude": -79.7592857
    },
    {
      "Address": "2149 Alderbrook Drive, Oakville, ON, L6M 4Z3",
      "Latitude": 43.4414064,
      "Longitude": -79.758541
    },
    {
      "Address": "2224 Whitecliffe Way, Oakville, ON, L6M 4W2",
      "Latitude": 43.4361538,
      "Longitude": -79.7573144
    },
    {
      "Address": "2343 Lionstone drive, Oakville, ON, L6M 4T5",
      "Latitude": 43.4301219,
      "Longitude": -79.7561317
    },
    {
      "Address": "2355 COPPERWOOD DRIVE, OAKVILLE, ON, L6M 4T4, Canada",
      "Latitude": 43.4294646,
      "Longitude": -79.7558688
    },
    {
      "Address": "1489 Heritage Way, Oakville, ON, L6M 4M6",
      "Latitude": 43.4295407,
      "Longitude": -79.7456801
    },
    {
      "Address": "1290 Heritage Way, Oakville, ON, L6M 4M4",
      "Latitude": 43.4267346,
      "Longitude": -79.7394617
    },
    {
      "Address": "1322 Cobbler Lane, Oakville, ON, L6M 2X4",
      "Latitude": 43.4289607,
      "Longitude": -79.7428573
    },
    {
      "Address": "1654 Heritage Way, Oakville, ON, L6M 2Z9",
      "Latitude": 43.4325781,
      "Longitude": -79.7412362
    },
    {
      "Address": "1358 Greenridge Circle, Oakville, ON, L6M 2K1",
      "Latitude": 43.4311972,
      "Longitude": -79.7336452
    },
    {
      "Address": "314 1470 BISHOPS GATE, OAKVILLE, ON, L6M 4N2, Canada",
      "Latitude": 43.439724,
      "Longitude": -79.7374426
    },
    {
      "Address": "314 1470 BISHOPS GATE, OAKVILLE, ON, L6M 4N2, Canada",
      "Latitude": 43.439724,
      "Longitude": -79.7374426
    },
    {
      "Address": "314 1470 BISHOPS GATE, OAKVILLE, ON, L6M 4N2, Canada",
      "Latitude": 43.439724,
      "Longitude": -79.7374426
    },
    {
      "Address": "1375 Kingsgrove Pl, Oakville, ON, L6M 3V9",
      "Latitude": 43.4439408,
      "Longitude": -79.7416305
    },
    {
      "Address": "1110 MaidStoneCres, Oakville, ON, L6M 1C3",
      "Latitude": 43.4458945,
      "Longitude": -79.7093966
    },
    {
      "Address": "396 Maidstone Crescent, Oakville, ON, L6M 1A1",
      "Latitude": 43.4454875,
      "Longitude": -79.7085013
    },
    {
      "Address": "4478 Chesswood Drive, North York, ON, Canada",
      "Latitude": 43.7634634,
      "Longitude": -79.4768609
    },
    {
      "Address": "3151 BRIDLETOWNE CIRCLE, SCARBOROUGH, ON, M1W2T1, Canada",
      "Latitude": 43.7976705,
      "Longitude": -79.3198853
    },
    {
      "Address": "10 Stonehill Crt, Scarborough, ON, M1W 2X8",
      "Latitude": 43.7949299,
      "Longitude": -79.3139429
    },
    {
      "Address": "2821 Birchmount Rd, Scarborough, ON, M1W2C8",
      "Latitude": 43.7981978,
      "Longitude": -79.3050945
    },
    {
      "Address": "270 Timberbank Boulevard, Toronto, ON, M1W 2M1",
      "Latitude": 43.7971569,
      "Longitude": -79.3060156
    },
    {
      "Address": "255 Glendower Circuit, Toronto, ON, M1T2Z7",
      "Latitude": 43.7975882,
      "Longitude": -79.3045844
    },
    {
      "Address": "2550 Birchmount Road, Scarborough, ON, M1T2M5",
      "Latitude": 43.7887044,
      "Longitude": -79.3022497
    },
    {
      "Address": "82 Reidmount Ave., Scarborough, ON, M1S 1B7",
      "Latitude": 43.7889965,
      "Longitude": -79.2882283
    },
    {
      "Address": "275 VILLAGE GREEN SQUARE, SCARBOROUGH, ON, M1S 0L8",
      "Latitude": 43.779333,
      "Longitude": -79.2831293
    },
    {
      "Address": "4091 Sheppard ave east , Toronto, ON, M1S 3H2",
      "Latitude": 43.7836438,
      "Longitude": -79.2844451
    },
    {
      "Address": "33 Fulham Street, Scarborough, ON, M1S 2A3",
      "Latitude": 43.7861284,
      "Longitude": -79.2687009
    },
    {
      "Address": "70 crockamhill drive, scarborough, ON, M1S 3H1",
      "Latitude": 43.7986652,
      "Longitude": -79.2823667
    },
    {
      "Address": "1580 Sandhurst Circle, Scarborough Toronto, ON, M1V 2L3",
      "Latitude": 43.8079372,
      "Longitude": -79.2711408
    },
    {
      "Address": "1580 Sandhurst Circle, , Scarborough, Toronto, ON, M1V 2L3",
      "Latitude": 43.8079372,
      "Longitude": -79.2711408
    },
    {
      "Address": "54 SHOOTFIELD CRES, SCARBOROUGH, ON, M1S 4E2",
      "Latitude": 43.8041604,
      "Longitude": -79.2589242
    },
    {
      "Address": "4695 Sheppard Avenue East, Toronto, ON, M1S 4R3",
      "Latitude": 43.7897324,
      "Longitude": -79.2566118
    },
    {
      "Address": "15 Lenthall Avenue, Toronto, ON, M1B 2C7",
      "Latitude": 43.7975458,
      "Longitude": -79.2385829
    },
    {
      "Address": "50 Empringham Dr , Scarbough, ON, M1B 3Z4",
      "Latitude": 43.8121643,
      "Longitude": -79.211179
    },
    {
      "Address": "182 90 Wingarden Court, Scarborough, ON, M1B2K3",
      "Latitude": 43.8106717,
      "Longitude": -79.2269206
    },
    {
      "Address": "29 Grackle Trail, Scarborough, ON, M1X 2A4",
      "Latitude": 43.8289448,
      "Longitude": -79.231462
    },
    {
      "Address": "35 SNOWY OWL WAY, TORONTO ON M1X 0B4",
      "Latitude": 43.8323054,
      "Longitude": -79.2333615
    },
    {
      "Address": "145 Dynamic Drive, Scarborough, ON, M1V 5L8",
      "Latitude": 43.828024,
      "Longitude": -79.2517225
    },
    {
      "Address": "19 Lahore Crescent, Markham, ON, L3S 0A5",
      "Latitude": 43.8466916,
      "Longitude": -79.2498064
    },
    {
      "Address": "7340 Markham Road, Markham, ON, L3S 0B1",
      "Latitude": 43.8459478,
      "Longitude": -79.2538368
    },
    {
      "Address": "46 Norn Crescent, Markham, ON, L3S 2A7",
      "Latitude": 43.8327701,
      "Longitude": -79.2716085
    },
    {
      "Address": "109 Goodwood Drive, Markham, ON, L3S 2K9",
      "Latitude": 43.838329,
      "Longitude": -79.274812
    },
    {
      "Address": "1 Baylawn Dr, Markham, ON, L3S 2T6",
      "Latitude": 43.8435543,
      "Longitude": -79.2736515
    },
    {
      "Address": "9 Alderbury Dr, Markham, ON, L3S2R5",
      "Latitude": 43.8432465,
      "Longitude": -79.2730617
    },
    {
      "Address": "9 Alderbury Dr, Markham, ON, L3S2R5",
      "Latitude": 43.8432465,
      "Longitude": -79.2730617
    },
    {
      "Address": "65 Main Street, Unionville, ON, L3R 2E6",
      "Latitude": 43.8593418,
      "Longitude": -79.3088682
    },
    {
      "Address": "34 Lincoln Green Drive, Markham, ON, L3P 1R5",
      "Latitude": 43.8727066,
      "Longitude": -79.2758939
    },
    {
      "Address": "38 Hemlock Drive, Markham, ON, L3P 4M6",
      "Latitude": 43.881473,
      "Longitude": -79.2706396
    },
    {
      "Address": "81 Mansfield Lane, Markham, ON, L3P7S7",
      "Latitude": 43.876015,
      "Longitude": -79.2886062
    },
    {
      "Address": "49 KENTLEY ST, MARKHAM, ON, L6C3G2, Canada",
      "Latitude": 43.8909904,
      "Longitude": -79.2929034
    },
    {
      "Address": "59 James  Parrot Ave, MARKHAM, ON, L6E 0E4",
      "Latitude": 43.8905159,
      "Longitude": -79.2852983
    },
    {
      "Address": "99 Hammersly Blvd, Markham, ON, L6E 0L1",
      "Latitude": 43.8994516,
      "Longitude": -79.2688545
    },
    {
      "Address": "9506 Markham Road, Markham, ON, L6E 0N7",
      "Latitude": 43.8972366,
      "Longitude": -79.2663508
    },
    {
      "Address": "36 Cathmar Drive, Markham, ON, L6E 2H2",
      "Latitude": 43.9030124,
      "Longitude": -79.2614284
    },
    {
      "Address": "103 Miramar Drive, Markham, ON, L6E 1Z9",
      "Latitude": 43.8982058,
      "Longitude": -79.2587561
    },
    {
      "Address": "166 Swan Park Road, Markham, ON, L6E 1S4",
      "Latitude": 43.9014924,
      "Longitude": -79.2538148
    },
    {
      "Address": "98 Lawrence Pilkington Avenue, Markham, ON, L6B 0Z2",
      "Latitude": 43.8937904,
      "Longitude": -79.2255334
    },
    {
      "Address": "61 Spring Meadow Avenue, Markham, ON, L6B 1B6",
      "Latitude": 43.8882593,
      "Longitude": -79.2332275
    },
    {
      "Address": "96 SQUIRE BAKERS LANE, MARKHAM, ON, L3P 3H2, Canada",
      "Latitude": 43.8696609,
      "Longitude": -79.2456656
    },
    {
      "Address": "69 Turnhouse Crescent, Markham, ON, L6B 0S6",
      "Latitude": 43.8663,
      "Longitude": -79.2139518
    },
    {
      "Address": "9017 Leslie Street, Richmond Hill, ON, L4B 4R8",
      "Latitude": 43.8476722,
      "Longitude": -79.3802567
    },
    {
      "Address": "46 Red Oak Drive, Richmond Hill, ON, L4B 1W1",
      "Latitude": 43.8484758,
      "Longitude": -79.3938454
    },
    {
      "Address": "72 castleridge drive, Richmond hill, ON, L4B 1R2",
      "Latitude": 43.8436535,
      "Longitude": -79.4030178
    },
    {
      "Address": "1 Grasslands Ave, Richmond Hill, ON, L4B 4L3",
      "Latitude": 43.8440323,
      "Longitude": -79.4201234
    },
    {
      "Address": "65 Nahanni Drive, Richmond Hill, ON, L4B 4L4",
      "Latitude": 43.8446027,
      "Longitude": -79.4202993
    },
    {
      "Address": "210 Bantry, Richmond Hill, ON, L4B 4T6",
      "Latitude": 43.8460291,
      "Longitude": -79.4225246
    },
    {
      "Address": "9199 Yonge Street, Richmond Hill, ON, L4C 1H7",
      "Latitude": 43.8518082,
      "Longitude": -79.4310734
    },
    {
      "Address": "9201 Yonge Street, Richmond Hill   Ontario, ON, L4C1H9",
      "Latitude": 43.8520163,
      "Longitude": -79.4320823
    },
    {
      "Address": "93 Weldrick Rd W, Richmond Hill, ON, L4C 3T9",
      "Latitude": 43.8583327,
      "Longitude": -79.4424131
    },
    {
      "Address": "1 FERNWOOD CRT, RICHMOND HILL, ON, L4B 3C2, Canada",
      "Latitude": 43.8721596,
      "Longitude": -79.4130497
    },
    {
      "Address": "115 Strathearn Ave, Richmond Hill, ON, L4B 2L2",
      "Latitude": 43.8657362,
      "Longitude": -79.4080792
    },
    {
      "Address": "53 Wingate Cres., Richmond Hill, ON, L4B 3J3",
      "Latitude": 43.8694553,
      "Longitude": -79.3978284
    },
    {
      "Address": "47 Lytton Blvd., Richmond Hill, ON, L4B 3H3",
      "Latitude": 43.866585,
      "Longitude": -79.3949887
    },
    {
      "Address": "17 Cortleigh Court, Richmond hill, ON, L4B 3G9",
      "Latitude": 43.8637913,
      "Longitude": -79.3974545
    },
    {
      "Address": "15 Henricks Crescent, Richmond Hill, ON, L4B 3W4",
      "Latitude": 43.8722717,
      "Longitude": -79.3941999
    },
    {
      "Address": "3231 Major Mackenzie Drive East, Markham, ON, L6C1J8",
      "Latitude": 43.8871797,
      "Longitude": -79.3594679
    },
    {
      "Address": "712 The Bridle Walk, Markham, ON, L6C 2N4",
      "Latitude": 43.898721,
      "Longitude": -79.3095188
    },
    {
      "Address": "71 Gemini Crescent, Richmond Hill, ON, L4S 2K8",
      "Latitude": 43.8824196,
      "Longitude": -79.3924187
    },
    {
      "Address": "89 Hartney Dr, Richmond Hill, ON, L4S 0K5",
      "Latitude": 43.9053516,
      "Longitude": -79.400081
    },
    {
      "Address": "11 Cedarhurst DR, Richmond Hill, ON, L4S 1B7",
      "Latitude": 43.8995953,
      "Longitude": -79.4270155
    },
    {
      "Address": "9 Point Pelee Lane, Richmond Hill, ON, L4S 0G4",
      "Latitude": 43.8917136,
      "Longitude": -79.4174601
    },
    {
      "Address": "48 Futura Ave., Richmond Hill, ON, L4S 1S8",
      "Latitude": 43.8844165,
      "Longitude": -79.408251
    },
    {
      "Address": "41 Farmstead Rd, RICHMOND HILL, ON, L4S 1W3",
      "Latitude": 43.8802638,
      "Longitude": -79.413176
    },
    {
      "Address": "123 Newkirk Road, Richmond Hill, ON, L4C 3G5",
      "Latitude": 43.8825281,
      "Longitude": -79.4269604
    },
    {
      "Address": "85 Centre Street East, Richmond Hill, ON, L4C 1A3",
      "Latitude": 43.8769306,
      "Longitude": -79.4344123
    },
    {
      "Address": "1 Centre Street West, Richmond Hill, ON, L4C 3P3",
      "Latitude": 43.8760405,
      "Longitude": -79.4385521
    },
    {
      "Address": "138 Wright Street, Richmond Hill, ON, L4C 4A5",
      "Latitude": 43.8764306,
      "Longitude": -79.4454175
    },
    {
      "Address": "26 Kittredge Court, Richmond Hill, ON, L4C 7X3",
      "Latitude": 43.8755768,
      "Longitude": -79.4596169
    },
    {
      "Address": "68 Willett Crescent, Richmond Hill, ON, L4C 7V9",
      "Latitude": 43.8771301,
      "Longitude": -79.458627
    },
    {
      "Address": "30 Marinucci Court, Richmond Hill, ON, L4C 0M3",
      "Latitude": 43.8850551,
      "Longitude": -79.4612819
    },
    {
      "Address": "28 Waterhouse Way, RichmondHill, ON, L4C 9H7",
      "Latitude": 43.888558,
      "Longitude": -79.4602146
    },
    {
      "Address": "35 Shallot Court, Richmond Hill, ON, L4S 0C1",
      "Latitude": 43.9019945,
      "Longitude": -79.465049
    },
    {
      "Address": "21 Marengo drive, Richmond hill, ON, L4E 0G2",
      "Latitude": 43.9127812,
      "Longitude": -79.4664114
    },
    {
      "Address": "35 Ravine Edge Drive, Richmond Hill, ON, L4E 4J2",
      "Latitude": 43.9138644,
      "Longitude": -79.4429579
    },
    {
      "Address": "150 Shirrick Drive, Richmond Hill, ON, L4E 0B8",
      "Latitude": 43.9252413,
      "Longitude": -79.4508967
    },
    {
      "Address": "129 Silver Maple road, Richmond Hill, ON, L4E 0C8",
      "Latitude": 43.9275466,
      "Longitude": -79.4570502
    },
    {
      "Address": "9 Bayswater Avenue, Richmond Hill, ON, L4E 2L4",
      "Latitude": 43.9519289,
      "Longitude": -79.4501323
    },
    {
      "Address": "15 Lorridge St, Richmond Hill, ON, L4E 3W4",
      "Latitude": 43.9535877,
      "Longitude": -79.4465451
    },
    {
      "Address": "10 Lorwood Court, Richmond Hill, ON, L4E 3W3",
      "Latitude": 43.9440298,
      "Longitude": -79.4701907
    },
    {
      "Address": "85 Vitlor Drive, Richmond Hill, ON, L4E 0G3",
      "Latitude": 43.9441653,
      "Longitude": -79.4742345
    },
    {
      "Address": "82 Sunridge St, Richmond Hill, ON, L4E 3Z3",
      "Latitude": 43.9539407,
      "Longitude": -79.4829396
    },
    {
      "Address": "57 Cozens Dr, Richmond Hill, ON, L4E 4W6",
      "Latitude": 43.9346735,
      "Longitude": -79.4742336
    },
    {
      "Address": "43 Matterhorn Road, Maple, ON, L6A 2V5",
      "Latitude": 43.8915254,
      "Longitude": -79.5047843
    },
    {
      "Address": "6 Glamorgan Avenue, Toronto, ON, M1P 2M7",
      "Latitude": 43.769406,
      "Longitude": -79.2847974
    },
    {
      "Address": "1373 Warden Ave, Toronto, ON, M1R 2S1",
      "Latitude": 43.7568957,
      "Longitude": -79.2991437
    },
    {
      "Address": "3 Electro Road, Toronto, ON, M1R 2A6",
      "Latitude": 43.7417859,
      "Longitude": -79.297236
    },
    {
      "Address": "61 Inniswood Drive, Toronto, ON, M1R 1E8",
      "Latitude": 43.7383157,
      "Longitude": -79.3051606
    },
    {
      "Address": "1000 O'connor Drive, Toronto, ON, M4B 2T3",
      "Latitude": 43.7092732,
      "Longitude": -79.3103992
    },
    {
      "Address": "903 COXWELL AVE, TORONTO, ON, M4C3G1, Canada",
      "Latitude": 43.6940627,
      "Longitude": -79.3277384
    },
    {
      "Address": "903 COXWELL AVE, TORONTO, ON, M4C3G1, Canada",
      "Latitude": 43.6940627,
      "Longitude": -79.3277384
    },
    {
      "Address": "338 Cedarvale Avenue, Toronto, ON, M4C 4K6",
      "Latitude": 43.6933846,
      "Longitude": -79.3142793
    },
    {
      "Address": "89 Oak Park Ave, Toronto, ON, M4C 4M5",
      "Latitude": 43.6902499,
      "Longitude": -79.3085503
    },
    {
      "Address": "601 Kingston Road, Toronto, ON, M4E 3Y2",
      "Latitude": 43.6786209,
      "Longitude": -79.2987178
    },
    {
      "Address": "6 Park Vista, Toronto, ON, M4B 1A2",
      "Latitude": 43.6982406,
      "Longitude": -79.2984467
    },
    {
      "Address": "410 Dawes Rd, Toronto, ON, M4B 2E4",
      "Latitude": 43.7007802,
      "Longitude": -79.2972029
    },
    {
      "Address": "409 Dawes Road, Toronto, ON, M4B 2E7",
      "Latitude": 43.7027188,
      "Longitude": -79.2967237
    },
    {
      "Address": "409 Dawes Road, Toronto, ON, M4B 2E7",
      "Latitude": 43.7027188,
      "Longitude": -79.2967237
    },
    {
      "Address": " 45 Strangford Lane, Toronto, ON, M1L 0E5",
      "Latitude": 43.7099556,
      "Longitude": -79.2941878
    },
    {
      "Address": "30 Teesdale Place, Toronto, ON, M1L 1L2",
      "Latitude": 43.6970122,
      "Longitude": -79.2877916
    },
    {
      "Address": "3520 Danforth Avenue, Scarborough, ON, M1L1E5",
      "Latitude": 43.6946819,
      "Longitude": -79.2734144
    },
    {
      "Address": "19 Belanger Crescent, Toronto, ON, M1L 0G1",
      "Latitude": 43.7022067,
      "Longitude": -79.2739575
    },
    {
      "Address": "60 Fairfax Crescent, Toronto, ON, M1L 0E1",
      "Latitude": 43.7165275,
      "Longitude": -79.2844518
    },
    {
      "Address": "95 Anaconda Avenue, Toronto, ON, M1L 4M4",
      "Latitude": 43.7179069,
      "Longitude": -79.2740354
    },
    {
      "Address": "569 Birchmount Road, Scarborough, ON, M1K 1P8",
      "Latitude": 43.713106,
      "Longitude": -79.2703495
    },
    {
      "Address": "83 Silvio Avenue, Toronto, ON, M1K 1V5",
      "Latitude": 43.713622,
      "Longitude": -79.2682834
    },
    {
      "Address": "151 Haslam Street, Scarborough, ON, M1N3N9",
      "Latitude": 43.7085632,
      "Longitude": -79.2594583
    },
    {
      "Address": "40 Linden Ave., Toronto, ON, M1K3H5",
      "Latitude": 43.7201958,
      "Longitude": -79.2571624
    },
    {
      "Address": "3750 St Clair Ave E, Toronto, ON, M1M 1T9",
      "Latitude": 43.7212059,
      "Longitude": -79.2422515
    },
    {
      "Address": "3 Greystone Walk Dr, Scarborough, ON, M1K 5J4",
      "Latitude": 43.7243627,
      "Longitude": -79.2516663
    },
    {
      "Address": "31 Wolfe Avenue, Toronto, ON, M1K 3M2",
      "Latitude": 43.7273209,
      "Longitude": -79.2534624
    },
    {
      "Address": "740 Midland Avenue, Toronto, ON, M1K 4E1",
      "Latitude": 43.7292459,
      "Longitude": -79.256788
    },
    {
      "Address": "815 Midland Avenue, Toronto, ON, M1K 4E8",
      "Latitude": 43.7342138,
      "Longitude": -79.2576689
    },
    {
      "Address": "31 Gilder Drive, Toronto, ON, M1K 4P8",
      "Latitude": 43.7361041,
      "Longitude": -79.256246
    },
    {
      "Address": "24 Guildcrest Drive, Toronto, ON, M1E 1E4",
      "Latitude": 43.7455303,
      "Longitude": -79.206689
    },
    {
      "Address": "52 Earswick Drive, Scarborough, ON, M1E 1C6",
      "Latitude": 43.7462478,
      "Longitude": -79.1997485
    },
    {
      "Address": "26 Livingston Road, Scarborough, ON, M1E 4S4",
      "Latitude": 43.7404423,
      "Longitude": -79.1995352
    },
    {
      "Address": "3420 Eglinton Avenue East, Toronto, ON, M1J 2H9",
      "Latitude": 43.7454751,
      "Longitude": -79.2122464
    },
    {
      "Address": "17 435 Markham Rd, Scarborough, ON, M1J 3C8",
      "Latitude": 43.7521721,
      "Longitude": -79.2222822
    },
    {
      "Address": "525 Markham Road, Toronto, ON, M1H 3h7",
      "Latitude": 43.7567486,
      "Longitude": -79.2238354
    },
    {
      "Address": "7 Janray Drive, Toronto, ON, M1G 1X9",
      "Latitude": 43.7622329,
      "Longitude": -79.2210374
    },
    {
      "Address": "112 Greenbrae Circuit, Toronto, ON, M1H 1R3",
      "Latitude": 43.7608575,
      "Longitude": -79.2283517
    },
    {
      "Address": "2951 Lawrence Avenue East, Scarborough, ON, M1P 2V6",
      "Latitude": 43.7544713,
      "Longitude": -79.2506848
    },
    {
      "Address": "1375 Midland Ave , Scarborough, ON, M1P 3B7",
      "Latitude": 43.749884,
      "Longitude": -79.2637471
    },
    {
      "Address": "1 Portsdown Road, Toronto, ON, M1P 1T5",
      "Latitude": 43.7510288,
      "Longitude": -79.2811205
    },
    {
      "Address": "29 BEACON RD. BSMT, SCARBOROUGH, ON, M1P 1G6, Canada",
      "Latitude": 43.7504574,
      "Longitude": -79.2844671
    },
    {
      "Address": "39 Belvidere Avenue, Hamilton, ON, L9A 3B6",
      "Latitude": 43.2442865,
      "Longitude": -79.8686431
    },
    {
      "Address": "86 Knyvet Ave, Hamilton, ON, L9A 3J5",
      "Latitude": 43.2426067,
      "Longitude": -79.8686868
    },
    {
      "Address": "2 Welbourn  Dr, Hamilton, ON, L9A 3N2",
      "Latitude": 43.2353762,
      "Longitude": -79.8732502
    },
    {
      "Address": "329 East 19th Street, HAMILTON, ON, L9A 4S9",
      "Latitude": 43.2321547,
      "Longitude": -79.8593236
    },
    {
      "Address": "571 Upper Wentworth St, HAMILTON, ON, L9A 4V1",
      "Latitude": 43.2339841,
      "Longitude": -79.8571796
    },
    {
      "Address": "620 Concession Street, Hamilton, ON, L8V 1B6",
      "Latitude": 43.2399679,
      "Longitude": -79.8489748
    },
    {
      "Address": "86 East 27th St., Hamilton, ON, L8V 3G1",
      "Latitude": 43.2371928,
      "Longitude": -79.8478589
    },
    {
      "Address": "194 East 27th, Hamilton, ON, L8V 3G4",
      "Latitude": 43.2343306,
      "Longitude": -79.8489092
    },
    {
      "Address": "950 Fennell Ave E, Hamilton, ON, L8V 1X2",
      "Latitude": 43.2278532,
      "Longitude": -79.8398721
    },
    {
      "Address": "760 Seventh Avenue, Hamilton, ON, L8T 1V7",
      "Latitude": 43.2252508,
      "Longitude": -79.8352548
    },
    {
      "Address": "1119 Fennell Ave, Hamilton, ON, L8T 1S2",
      "Latitude": 43.2260651,
      "Longitude": -79.8278359
    },
    {
      "Address": "20 Albion Falls Blvd, Hamilton, ON, L8W 1R5",
      "Latitude": 43.2036332,
      "Longitude": -79.8227145
    },
    {
      "Address": "15 Derby Street, Hamilton, ON, L8W 3T3",
      "Latitude": 43.1916134,
      "Longitude": -79.8507777
    },
    {
      "Address": " 515 Queen Victoria Dr, Hamilton, ON, L8W1M9",
      "Latitude": 43.2022835,
      "Longitude": -79.8481824
    },
    {
      "Address": "30 Eleanor Avenue, Hamilton, ON, L8W 1C8",
      "Latitude": 43.2019481,
      "Longitude": -79.857464
    },
    {
      "Address": "55 Rawlings Ave, Hamilton, ON, L8W 2P3",
      "Latitude": 43.2101773,
      "Longitude": -79.8588423
    },
    {
      "Address": "660 Acadia dr, Hamilton, ON, L8W 3V1",
      "Latitude": 43.2007143,
      "Longitude": -79.8698681
    },
    {
      "Address": "51 Bonaparte Way, Hamilton, ON, L9B 2E1",
      "Latitude": 43.2046493,
      "Longitude": -79.8776772
    },
    {
      "Address": "134 Sirente Dr, Hamilton, ON, L9A 5H1",
      "Latitude": 43.2132777,
      "Longitude": -79.8713556
    },
    {
      "Address": "147 Greeningdon Drive, Hamilton, ON, L9A 4W6",
      "Latitude": 43.2199378,
      "Longitude": -79.88098
    },
    {
      "Address": "47 Ronaldshay Ave, Hamilton, ON, L9A 3B2",
      "Latitude": 43.2255082,
      "Longitude": -79.8779669
    },
    {
      "Address": "27 Coralridge Court, Hamilton, ON, L9C 3T4",
      "Latitude": 43.2230224,
      "Longitude": -79.890822
    },
    {
      "Address": "345 Limeridge Rd West, Hamilton, ON, L9C 7C9",
      "Latitude": 43.2247415,
      "Longitude": -79.9000829
    },
    {
      "Address": "25 Britten Close, Hamilton, ON, L9C4J8",
      "Latitude": 43.2242836,
      "Longitude": -79.9018905
    },
    {
      "Address": "25 Britten Close, Hamilton, ON, L9C4J8",
      "Latitude": 43.2242836,
      "Longitude": -79.9018905
    },
    {
      "Address": "48 Caroga Court , Hamilton, ON, L9C 7M2",
      "Latitude": 43.2252569,
      "Longitude": -79.9082513
    },
    {
      "Address": "24 Sunshine Court, Hamilton, ON, L9C 2L5",
      "Latitude": 43.2300001,
      "Longitude": -79.9011003
    },
    {
      "Address": "640 Mohawk Rd W 21, Hamilton, ON, L9C 1X6",
      "Latitude": 43.2333825,
      "Longitude": -79.9086265
    },
    {
      "Address": "190 Chedmac Drive, Hamilton, ON, L9C 7S6",
      "Latitude": 43.2409565,
      "Longitude": -79.9216532
    },
    {
      "Address": "304 guildwood drive, Hamilton, ON, L9C 6W8",
      "Latitude": 43.2258058,
      "Longitude": -79.9263753
    },
    {
      "Address": "99 Firenze St., Hamilton, ON, L9C 6T2",
      "Latitude": 43.2249265,
      "Longitude": -79.924058
    },
    {
      "Address": "82 Firenze Street, Hamilton, ON, L9C 6V7",
      "Latitude": 43.2254454,
      "Longitude": -79.9235771
    },
    {
      "Address": "31 Novoco Dr, HAMILTON, ON, L9C 7E6",
      "Latitude": 43.2212431,
      "Longitude": -79.9186143
    },
    {
      "Address": "680 Stone Church Rd W , Hamilton, ON, L9B2M6",
      "Latitude": 43.2187643,
      "Longitude": -79.918791
    },
    {
      "Address": "701 Stone Church Road West, Hamilton, ON, L9B 2N8",
      "Latitude": 43.2191714,
      "Longitude": -79.9212035
    },
    {
      "Address": "119 Graywood Road, Hamilton, ON, L9C 6K3",
      "Latitude": 43.2160293,
      "Longitude": -79.903112
    },
    {
      "Address": "25 Santa Barbara Lane, Hamilton, ON, L9B 0J3",
      "Latitude": 43.207321,
      "Longitude": -79.8948057
    },
    {
      "Address": "2 Bishop Ryan Way, Hamilton, ON, L9B 2L8",
      "Latitude": 43.2052515,
      "Longitude": -79.9069641
    },
    {
      "Address": "24 Marilyn Court, Hamilton, ON, L9B 2T5",
      "Latitude": 43.2012905,
      "Longitude": -79.8847419
    },
    {
      "Address": "71 Seneca Avenue, Hamilton, ON, L9B 1L8",
      "Latitude": 43.1984003,
      "Longitude": -79.8897463
    },
    {
      "Address": "287 mothers street, Hamilton, ON, L9B 0E2",
      "Latitude": 43.1868085,
      "Longitude": -79.8840019
    },
    {
      "Address": "287 mothers street, Hamilton, ON, L9B 0E2",
      "Latitude": 43.1868085,
      "Longitude": -79.8840019
    },
    {
      "Address": "287 mothers street, Hamilton, ON, L9B 0E2",
      "Latitude": 43.1868085,
      "Longitude": -79.8840019
    },
    {
      "Address": "4490 Walkers Line, Burlington, ON, L7M 0Y4",
      "Latitude": 43.418251,
      "Longitude": -79.8589438
    },
    {
      "Address": "2151 Belgrave Court, Burlington, ON, L7P 3R5",
      "Latitude": 43.353629,
      "Longitude": -79.8434278
    },
    {
      "Address": "2134 Sunnydale Drive, Burlington, ON, L7P 1E7",
      "Latitude": 43.3477334,
      "Longitude": -79.8215119
    },
    {
      "Address": "1250 HERTEL CRES., BURLINGTON, ON, L7P 2S5, Canada",
      "Latitude": 43.3485853,
      "Longitude": -79.8211554
    },
    {
      "Address": "2385 Woodward Ave, BURLINGTON, ON, L7T 0A7",
      "Latitude": 43.3407445,
      "Longitude": -79.7937225
    },
    {
      "Address": "774 Drury Lane, Burlington, ON, L7R2Y2",
      "Latitude": 43.3409092,
      "Longitude": -79.8016812
    },
    {
      "Address": "911 Nora Drive, Burlington, ON, L7T 3E6",
      "Latitude": 43.3164151,
      "Longitude": -79.8340293
    },
    {
      "Address": "932 Birchwood Avenue, Burlington, ON, L7T 2H7",
      "Latitude": 43.3068996,
      "Longitude": -79.8479465
    },
    {
      "Address": "275 Plains Rd West, Burlington, ON, L7T 1G1",
      "Latitude": 43.3001392,
      "Longitude": -79.8622114
    },
    {
      "Address": "511 Genista Drive, Burlington, ON, L7T 4L6",
      "Latitude": 43.3001454,
      "Longitude": -79.8727556
    },
    {
      "Address": "65 Jones St., Hamilton, ON, L8R1X9",
      "Latitude": 43.2677366,
      "Longitude": -79.8882304
    },
    {
      "Address": "82 Melbourne St., Hamilton, ON, L8P 2A6",
      "Latitude": 43.2561631,
      "Longitude": -79.8890546
    },
    {
      "Address": "454 Dundurn Street South, Hamilton, ON, L8P 4L9",
      "Latitude": 43.2490452,
      "Longitude": -79.8939275
    },
    {
      "Address": "450 Dundurn St S, HAMILTON, ON, L8P 4L9",
      "Latitude": 43.249187,
      "Longitude": -79.89384
    },
    {
      "Address": "176 Homewood Ave, Hamilton, ON, L8P 2M5",
      "Latitude": 43.2515733,
      "Longitude": -79.8903846
    },
    {
      "Address": "23 Homewood Ave, Hamilton, ON, L8P 2M1",
      "Latitude": 43.2497277,
      "Longitude": -79.884118
    },
    {
      "Address": "20 Mapleside Ave, Hamilton, ON, L8P 3Y5",
      "Latitude": 43.2482448,
      "Longitude": -79.8853543
    },
    {
      "Address": "33 Spruceside Ave, Hamilton, ON, L8P 3Y2",
      "Latitude": 43.2470859,
      "Longitude": -79.8845232
    },
    {
      "Address": "167 Robinson Street, Hamilton, ON, L8P 1Z6",
      "Latitude": 43.2524535,
      "Longitude": -79.8796278
    },
    {
      "Address": "24 Bold Street, Hamilton, ON, L8P 1T2",
      "Latitude": 43.2530558,
      "Longitude": -79.8717493
    },
    {
      "Address": "2-183 Bold Street, Hamilton, ON, L8P 1V4",
      "Latitude": 43.2527791,
      "Longitude": -79.8710708
    },
    {
      "Address": "146 Walnut St S, Hamilton, ON, L8N 2L7",
      "Latitude": 43.2503656,
      "Longitude": -79.8654929
    },
    {
      "Address": "127 east avenue south, Hamilton, ON, L8N 2T6",
      "Latitude": 43.249013,
      "Longitude": -79.8568598
    },
    {
      "Address": "165 Burris St, Hamilton, ON, L8M 2J7",
      "Latitude": 43.2462319,
      "Longitude": -79.8465376
    },
    {
      "Address": "222 gage Ave S, Hamilton, ON, L8M 3M4",
      "Latitude": 43.2413933,
      "Longitude": -79.8318628
    },
    {
      "Address": "188 Balsam Ave S, Hamilton, ON, L8M 3B8",
      "Latitude": 43.2432112,
      "Longitude": -79.8331539
    },
    {
      "Address": "17 Cedar Avenue, Hamilton, ON, L8M 3A6",
      "Latitude": 43.243581,
      "Longitude": -79.8334646
    },
    {
      "Address": "95 Balsam Ave S, Hamilton, ON, L8M 3B2",
      "Latitude": 43.2460278,
      "Longitude": -79.8311843
    },
    {
      "Address": "104 Dunsmure Rd, Hamilton, ON, L8M 1S4",
      "Latitude": 43.248672,
      "Longitude": -79.8367169
    },
    {
      "Address": "48 Nightingale Street, Hamilton, ON, L8L 1R8",
      "Latitude": 43.2535341,
      "Longitude": -79.8491461
    },
    {
      "Address": "157 Strachan St East, Hamilton, ON, L8L 3M7",
      "Latitude": 43.2655866,
      "Longitude": -79.8579234
    },
    {
      "Address": "42 Guise Street, Hamilton, ON, L8L 4L9",
      "Latitude": 43.274104,
      "Longitude": -79.8597223
    },
    {
      "Address": "175 RAY ST N, HAMILTON, ON, L8R 2Y3",
      "Latitude": 43.265592,
      "Longitude": -79.878658
    },
    {
      "Address": "68 Locke Street North, Hamilton, ON, L8R 3A5",
      "Latitude": 43.2630921,
      "Longitude": -79.8823206
    },
    {
      "Address": "6 Morden Street, Hamilton, ON, L8R 1P4",
      "Latitude": 43.2613986,
      "Longitude": -79.8817346
    },
    {
      "Address": "234 Market Street, HAMILTON, ON, L8R 1P2",
      "Latitude": 43.2607966,
      "Longitude": -79.8797382
    },
    {
      "Address": "1001 Main Street West, Hamilton, ON, L8S 1A9",
      "Latitude": 43.257515,
      "Longitude": -79.9056704
    },
    {
      "Address": "60 Elizabeth Court, Hamilton, ON, L8S 2P6",
      "Latitude": 43.2530591,
      "Longitude": -79.9370429
    },
    {
      "Address": "1856 Main St W, Hamilton, ON, L8S1H9",
      "Latitude": 43.2520893,
      "Longitude": -79.9409375
    },
    {
      "Address": "4478 Chesswood Drive, North York, ON, Canada",
      "Latitude": 43.7634634,
      "Longitude": -79.4768609
    },
    {
      "Address": "605 Finch Avenue West, Toronto, ON, M2R 1P1",
      "Latitude": 43.7710056,
      "Longitude": -79.4524232
    },
    {
      "Address": "4 Goldfinch Court, Toronto, ON, M2R 2C3",
      "Latitude": 43.7701341,
      "Longitude": -79.4495122
    },
    {
      "Address": "4 Mascot Place, Toronto, ON, M2R 1J6",
      "Latitude": 43.7702585,
      "Longitude": -79.4434046
    },
    {
      "Address": "461 HOUNSLOW AVENUE, NORTH YORK, ON, M2R 1H9, Canada",
      "Latitude": 43.7703034,
      "Longitude": -79.4372259
    },
    {
      "Address": "2 Ancona Street, Toronto, ON, M2R 2H1",
      "Latitude": 43.775393,
      "Longitude": -79.4391783
    },
    {
      "Address": "2 Ancona St, North York, ON, M2R2H1",
      "Latitude": 43.775393,
      "Longitude": -79.4391783
    },
    {
      "Address": "23 Lorraine Drive, Toronto, ON, M2N 6Z6",
      "Latitude": 43.7780172,
      "Longitude": -79.4166278
    },
    {
      "Address": "5900 Yonge Street, North York, ON, M2M3T8",
      "Latitude": 43.7862852,
      "Longitude": -79.4177492
    },
    {
      "Address": "10 Cushendale Drive, Toronto, ON, M2M 2A5",
      "Latitude": 43.7845503,
      "Longitude": -79.4131321
    },
    {
      "Address": "5940 YONGE ST, NORTH YORK, ON, M2M4M6, Canada",
      "Latitude": 43.787401,
      "Longitude": -79.4181228
    },
    {
      "Address": "5940 YONGE ST, NORTH YORK, ON, M2M4M6, Canada",
      "Latitude": 43.787401,
      "Longitude": -79.4181228
    },
    {
      "Address": "135 ANTIBES DRIVE, NORTH YORK, ON, M2R 2Z1, Canada",
      "Latitude": 43.7802481,
      "Longitude": -79.4461791
    },
    {
      "Address": "133 Torresdale Ave , Toronto, ON, M2R 3T2",
      "Latitude": 43.7786124,
      "Longitude": -79.4519202
    },
    {
      "Address": "300 Antibes Drive, Toronto, ON, M2R 3N8",
      "Latitude": 43.7812869,
      "Longitude": -79.4501275
    },
    {
      "Address": "1875 Steeles Avenue West, Toronto, ON, M3H 5T7",
      "Latitude": 43.7869724,
      "Longitude": -79.467532
    },
    {
      "Address": "81 Townsgate Dr, Thornhill West, ON, L4J8E6",
      "Latitude": 43.7942232,
      "Longitude": -79.4421274
    },
    {
      "Address": "10 Tangreen Ct, Toronto, ON, M2M 4B9",
      "Latitude": 43.7958866,
      "Longitude": -79.4270483
    },
    {
      "Address": "145 Bradbeer Crescent, Thornhill, ON, L4J 5M9",
      "Latitude": 43.8010817,
      "Longitude": -79.4306315
    },
    {
      "Address": "5 Theodore Place, Thornhill, ON, L4J 8E2",
      "Latitude": 43.8019554,
      "Longitude": -79.4352476
    },
    {
      "Address": "106 Green Bush Cres., Thornhill, ON, L4J 5M2",
      "Latitude": 43.8029139,
      "Longitude": -79.4300912
    },
    {
      "Address": "141 Green Bush Cres, Thornhill, ON, L4J 5L7",
      "Latitude": 43.8030179,
      "Longitude": -79.4286735
    },
    {
      "Address": "7300 Yonge Street, Thornhill, ON, L4J 7Y5",
      "Latitude": 43.8061713,
      "Longitude": -79.4231792
    },
    {
      "Address": "7398 Yonge St. , Thornhill, ON, L4J8J2",
      "Latitude": 43.8091608,
      "Longitude": -79.423531
    },
    {
      "Address": "190 Dudley Ave, Thornhill, ON, L3T2E9",
      "Latitude": 43.8110664,
      "Longitude": -79.4213766
    },
    {
      "Address": "83 New Havens Way, Markham, ON, L3T 5G1",
      "Latitude": 43.8101128,
      "Longitude": -79.4060365
    },
    {
      "Address": "163 Henderson Ave, Thornhill, ON, L3T 2L6",
      "Latitude": 43.8118223,
      "Longitude": -79.4102738
    },
    {
      "Address": "117 Woodward Ave, Markham, ON, L3T 1G1",
      "Latitude": 43.8021022,
      "Longitude": -79.4099068
    },
    {
      "Address": "2 Debell Lane, Toronto, ON, M2M3Z4",
      "Latitude": 43.8006187,
      "Longitude": -79.3973688
    },
    {
      "Address": "2 Debell Lane, Toronto, ON, M2M 3Z4",
      "Latitude": 43.8006187,
      "Longitude": -79.3973688
    },
    {
      "Address": "22 Ballyconnor Court, Toronto, ON, M2M 4C6",
      "Latitude": 43.7994696,
      "Longitude": -79.3864295
    },
    {
      "Address": "45 Tollerton Avenue, North York, ON, M2K 2H4",
      "Latitude": 43.7895021,
      "Longitude": -79.388374
    },
    {
      "Address": "6 Beethoven Court SIDE DOOR, North York, ON, M2H 1W2",
      "Latitude": 43.7937678,
      "Longitude": -79.3668394
    },
    {
      "Address": "8 Summerside Crescent, Toronto, ON, M2H 1X1",
      "Latitude": 43.7961998,
      "Longitude": -79.3681372
    },
    {
      "Address": "41 Aberfeldy Crescent, Thornhill, ON, L3T 4C1",
      "Latitude": 43.809889,
      "Longitude": -79.3686864
    },
    {
      "Address": "15 Windsor Court Road, Thornhill, ON, L3T 4Y4",
      "Latitude": 43.8154569,
      "Longitude": -79.3592269
    },
    {
      "Address": "75 Chumleigh crescent, Thornhill, ON, L3T 4G7",
      "Latitude": 43.8181563,
      "Longitude": -79.3622858
    },
    {
      "Address": "233 Hollyberry Trail, Toronto, ON, M2H 2P3",
      "Latitude": 43.8120955,
      "Longitude": -79.3528261
    },
    {
      "Address": "15 Pebble Byway , North York, ON, M2H3J5",
      "Latitude": 43.8024837,
      "Longitude": -79.3537001
    },
    {
      "Address": "199 McNicoll Ave, Toronto, ON, M2H 2C2",
      "Latitude": 43.7995065,
      "Longitude": -79.3549214
    },
    {
      "Address": "71 Godstone Road, North York, ON, M2J 3C8",
      "Latitude": 43.7832392,
      "Longitude": -79.3489979
    },
    {
      "Address": "23 Baroness Cres, Toronto, ON, M2J 3K4",
      "Latitude": 43.7911759,
      "Longitude": -79.3437614
    },
    {
      "Address": "85 Edmonton Rd, North York, ON, Canada",
      "Latitude": 43.7857388,
      "Longitude": -79.3394047
    },
    {
      "Address": "3050 Pharmacy Avenue, Toronto, ON, M1W 2N7",
      "Latitude": 43.7956074,
      "Longitude": -79.3274119
    },
    {
      "Address": "4478 Chesswood Drive, North York, ON, Canada",
      "Latitude": 43.7634634,
      "Longitude": -79.4768609
    },
    {
      "Address": "50 Kingsbridge Garden Circle, Mississauga, ON, L5R 1Y2",
      "Latitude": 43.602299,
      "Longitude": -79.6498735
    },
    {
      "Address": "4308 TRAIL BLAZER WAY, MISSISSAUGA, ON, L5R0A9, Canada",
      "Latitude": 43.5933537,
      "Longitude": -79.6604354
    },
    {
      "Address": "4580 Inverness Boulevard, Mississauga, ON, L5M 3K9",
      "Latitude": 43.5726705,
      "Longitude": -79.6878112
    },
    {
      "Address": "2760 Cathian Court, Mississauga, ON, L5L 2C7",
      "Latitude": 43.5419391,
      "Longitude": -79.6946293
    },
    {
      "Address": "4217 GAYLING GARDENS, MISSISSAUGA, ON, L5L1Z8, Canada",
      "Latitude": 43.5418786,
      "Longitude": -79.7048195
    },
    {
      "Address": "5872 Rainberry Drive Mississauga, Mississauga, ON, L5M 6S4",
      "Latitude": 43.5607678,
      "Longitude": -79.7462817
    },
    {
      "Address": "3235 EQUESTRIAN CRESCENT, MISSISSAUGA, ON, L5M6S8, Canada",
      "Latitude": 43.563077,
      "Longitude": -79.7489058
    },
    {
      "Address": "3235 EQUESTRIAN CRESCENT, MISSISSAUGA, ON, L5M6S8, Canada",
      "Latitude": 43.563077,
      "Longitude": -79.7489058
    },
    {
      "Address": "3982 Parkgate Drive, Mississauga, ON, L5N 7B7",
      "Latitude": 43.5565322,
      "Longitude": -79.7616073
    },
    {
      "Address": "6681 Lisgar Drive, Mississauga, ON, L5N6S8",
      "Latitude": 43.5702618,
      "Longitude": -79.7770249
    },
    {
      "Address": "2929 Quetta Mews, Mississauga, ON, L5N 1Z6",
      "Latitude": 43.590673,
      "Longitude": -79.7730394
    },
    {
      "Address": "2929 Aquitaine Avenue, Mississauga, ON, L5N 2C7",
      "Latitude": 43.5837179,
      "Longitude": -79.7628877
    },
    {
      "Address": "3180 Sundown Circle, Mississauga, ON, L5N 4R8",
      "Latitude": 43.5746577,
      "Longitude": -79.7627128
    },
    {
      "Address": "6367 Edenwood Drive, Mississauga, ON, L5N3E8",
      "Latitude": 43.572618,
      "Longitude": -79.7526848
    },
    {
      "Address": "5497 Shorecrest Crescent, Mississauga, ON, L5M 4Y6",
      "Latitude": 43.5835198,
      "Longitude": -79.7058276
    },
    {
      "Address": "1400 Bristol Road West, Mississauga, ON, L5V 2A4",
      "Latitude": 43.5882984,
      "Longitude": -79.6947198
    },
    {
      "Address": "1480 Britannia Road West, Mississauga, ON, L5V 2K4",
      "Latitude": 43.5984264,
      "Longitude": -79.7103711
    },
    {
      "Address": "1325 Killaby Drive, Mississauga, ON, L5V 2C3",
      "Latitude": 43.6015629,
      "Longitude": -79.710325
    },
    {
      "Address": "1001 WINDBROOK  GROVE, MISSISSAUGA, ON, L5V2N7, Canada",
      "Latitude": 43.6054858,
      "Longitude": -79.6991763
    },
    {
      "Address": "1001 WINDBROOK  GROVE, MISSISSAUGA, ON, L5V2N7, Canada",
      "Latitude": 43.6054858,
      "Longitude": -79.6991763
    },
    {
      "Address": "6889 Early Settler Row, Mississauga, ON, L5W 1C6",
      "Latitude": 43.624016,
      "Longitude": -79.725922
    },
    {
      "Address": "38 Songsparrow Drive, Brampton, ON, L6Y 3Z7",
      "Latitude": 43.6509752,
      "Longitude": -79.7279596
    },
    {
      "Address": "54 Malta Ave., Brampton, ON, L6Y 4W6",
      "Latitude": 43.6574934,
      "Longitude": -79.7286337
    },
    {
      "Address": "40 County Court Boulevard, Brampton, ON, L6W3X5",
      "Latitude": 43.6648418,
      "Longitude": -79.7236231
    },
    {
      "Address": "440 Mc Murchy Ave South , Brampton, ON, L6Y2N5",
      "Latitude": 43.6643171,
      "Longitude": -79.7417843
    },
    {
      "Address": "144 Mc Murchy Ave S, Brampton, ON, L6Y 1Y9",
      "Latitude": 43.672921,
      "Longitude": -79.754034
    },
    {
      "Address": "26 Fair Oaks Place, Brampton, ON, L6Y 4X1",
      "Latitude": 43.6759021,
      "Longitude": -79.76163
    },
    {
      "Address": "33 Kimbark Drive, Brampton, ON, L6X2A3",
      "Latitude": 43.6740521,
      "Longitude": -79.7777257
    },
    {
      "Address": "23 Burt Drive, Brampton, ON, L6X 3H9",
      "Latitude": 43.6718202,
      "Longitude": -79.7844481
    },
    {
      "Address": "80 Borrelli Drive, Brampton, ON, L6Y 5X1",
      "Latitude": 43.6594775,
      "Longitude": -79.7799043
    },
    {
      "Address": "20 Nostalgia Court, Brampton, ON, L6X 5C6",
      "Latitude": 43.690327,
      "Longitude": -79.803236
    },
    {
      "Address": "Po Box 99900 Ja 648 739 Rpo Chinguacousy, Brampton, ON, L6Y5X8",
      "Latitude": 43.6968413,
      "Longitude": -79.8226563
    }
   ]