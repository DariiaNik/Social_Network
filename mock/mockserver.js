//
// let mockserver = require('mockserver-node');
// let mockServerClient = require('mockserver-client').mockServerClient;
//
// mockserver.start_mockserver({
//     serverPort: 1080,
//     verbose: false,
//     trace: false
// }).then(function (){
//     console.log("Mock response")
//     mockServerClient("localhost", 1080).mockAnyResponse({
//         "httpRequest": {
//             "path": "/profile",
//             "method": "PUT",
//             "body": {}
//         },
//         "httpResponse": {
//             "body": {
//                 resultCode: 0,
//                 messages: [],
//                 data: {}
//             }
//         }
//     }).then(
//         function () {
//             console.log("expectation created");
//         },
//         function (error) {
//             console.log(error);
//         }
//     );
// });




