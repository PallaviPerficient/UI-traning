
// const indexedDB = 
//     window.indexedDB || 
//     window.webkitIndexedDB || 
//     window.mozIndexedDB || 
//     window.OIndexedDB || 
//     window.msIndexedDB,
    
//     if (!indexedDB) {
//         console.log("IndexedDB could not be found in this browser.");
//       }
      
//         // IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.OIDBTransaction || window.msIDBTransaction,
// const request = indexedDB.open("CarsDatabase", 1);
//  //open a cardatabase make a request to open a carsdatabase  try to open a carsdatabase if find then open or create  a car database
//  //second value version of database

// request.onerror=function(event){
//     console.log("An error occured with IndexedDB");
//     console.log(event); //log the error
// }
// //checking a error by using onerror method

// request.onupgradeneeded= function(){
//     const db=request.result; //result request store in DB
//     const store=db.createObjectStore("cars", {keyPath:"id"});
//     store.createIndex("cars_colour",["colour"],{unique:false});
//     store.createIndex("colour_and_make",["colour","make"],{  ///Compound Index is a combination of more than one key to make a key
//         unique:false,
//     });
// };

// request.onsuccess= function (){
//     const db=request.result;
//     const transaction = db.transaction("cars","readwrite")//bunch of DB operation 
//     const store=transaction.objectStore("cars");
//     const colourIndex=store.index("cars_color");
//     const makeModelIndex = store.index("colour_and_make");

//     store.put({id:1,colour:"Red",make:"Toyota"});
//     store.put({id:2,colour:"Blue",make:"car1"});
//     store.put({id:3,colour:"Green",make:"car2"});
//     store.put({id:4,colour:"yellow",make:"car3"});

//     const idQuery =store.get(4);
//     const colourQuery =colourIndex.getAll(["Red"]);
//     const colourMakeQuery =makeModelIndex.get(["Blue","Honda"]);


//     idQuery.onsuccess=function(){
//         console.log('idQuery',idQuery.result);
//     };

//     colourQuery.onsuccess=function(){
//         console.log('colourQuery', colourQuery.result)
//     };

//     colourMakeQuery.onsuccess=function(){
//         console.log('colourMakeQuery',colourMakeQuery.result);
//     };

//     transaction.oncomplete=function(){
//         db.close();
//     };
// };


// (function () {
//     // IndexedDB
//     var indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.OIndexedDB || window.msIndexedDB,
//         IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.OIDBTransaction || window.msIDBTransaction,
//         dbVersion = 1.0;

//     // Create/open database
//     var request = indexedDB.open("elephantFiles", dbVersion),
//         db,
//         createObjectStore = function (dataBase) {
//             // Create an objectStore
//             console.log("Creating objectStore")
//             dataBase.createObjectStore("elephants");
//         },

//         getImageFile = function () {
//             // Create XHR
//             var xhr = new XMLHttpRequest(),
//                 blob;

//             xhr.open("GET", "elephant.png", true);
//             // Set the responseType to blob
//             xhr.responseType = "blob";

//             xhr.addEventListener("load", function () {
//                 if (xhr.status === 200) {
//                     console.log("Image retrieved");
                    
//                     // Blob as response
//                     blob = xhr.response;
//                     console.log("Blob:" + blob);

//                     // Put the received blob into IndexedDB
//                     putElephantInDb(blob);
//                 }
//             }, false);
//             // Send XHR
//             xhr.send();
//         },

//         putElephantInDb = function (blob) {
//             console.log("Putting elephants in IndexedDB");

//             // Open a transaction to the database
//             var transaction = db.transaction(["elephants"], IDBTransaction.READ_WRITE);

//             // Put the blob into the dabase
//             var put = transaction.objectStore("elephants").put(blob, "image");

//             // Retrieve the file that was just stored
//             transaction.objectStore("elephants").get("image").onsuccess = function (event) {
//                 var imgFile = event.target.result;
//                 console.log("Got elephant!" + imgFile);

//                 // Get window.URL object
//                 var URL = window.URL || window.webkitURL;

//                 // Create and revoke ObjectURL
//                 var imgURL = URL.createObjectURL(imgFile);

//                 // Set img src to ObjectURL
//                 var imgElephant = document.getElementById("elephant");
//                 imgElephant.setAttribute("src", imgURL);

//                 // Revoking ObjectURL
//                 URL.revokeObjectURL(imgURL);
//             };
//         };

//     request.onerror = function (event) {
//         console.log("Error creating/accessing IndexedDB database");
//     };

//     request.onsuccess = function (event) {
//         console.log("Success creating/accessing IndexedDB database");
//         db = request.result;

//         db.onerror = function (event) {
//             console.log("Error creating/accessing IndexedDB database");
//         };
        
//         // Interim solution for Google Chrome to create an objectStore. Will be deprecated
//         if (db.setVersion) {
//             if (db.version != dbVersion) {
//                 var setVersion = db.setVersion(dbVersion);
//                 setVersion.onsuccess = function () {
//                     createObjectStore(db);
//                     getImageFile();
//                 };
//             }
//             else {
//                 getImageFile();
//             }
//         }
//         else {
//             getImageFile();
//         }
//     }
    
//     // For future use. Currently only in latest Firefox versions
//     request.onupgradeneeded = function (event) {
//         createObjectStore(event.target.result);
//     };
// })();


// const indexedDB =
//   window.indexedDB ||
//   window.mozIndexedDB ||
//   window.webkitIndexedDB ||
//   window.msIndexedDB ||
//   window.shimIndexedDB;

// if (!indexedDB) {
//   console.log("IndexedDB could not be found in this browser.");
// }

// const request = indexedDB.open("CarsDatabase", 1);

// request.onerror = function (event) {
//     console.error("An error occurred with IndexedDB");
//     console.error(event);
//   };


//   request.onupgradeneeded = function () {

//     const db = request.result;

//     const store = db.createObjectStore("cars", { keyPath: "id" });

//     store.createIndex("cars_colour", ["colour"], { unique: false });
  

//     store.createIndex("colour_and_make", ["colour", "make"], {
//       unique: false,
//     }); 
//   };


//   request.onsuccess = function () {
//     console.log("Database opened successfully");
  
//     const db = request.result;
  
   
//     const transaction = db.transaction("cars", "readwrite");
  

//     const store = transaction.objectStore("cars");
//     const colourIndex = store.index("cars_colour");
//     const makeModelIndex = store.index("colour_and_make");
  
 
//     store.put({ id: 1, colour: "Red", make: "Toyota" });
//     store.put({ id: 2, colour: "Red", make: "Kia" });
//     store.put({ id: 3, colour: "Blue", make: "Honda" });
//     store.put({ id: 4, colour: "Silver", make: "Subaru" });
  
 
//     const idQuery = store.get(4);
//     const colourQuery = colourIndex.getAll(["Red"]);
//     const colourMakeQuery = makeModelIndex.get(["Blue", "Honda"]);
  
  
//     idQuery.onsuccess = function () {
//       console.log('idQuery', idQuery.result);
//     };
//     colourQuery.onsuccess = function () {
//       console.log('colourQuery', colourQuery.result);
//     };
//     colourMakeQuery.onsuccess = function () {
//       console.log('colourMakeQuery', colourMakeQuery.result);
//     };
  

//     transaction.oncomplete = function () {
//       db.close();
//     };
//   };


(function () {
  // IndexedDB
  var indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.OIndexedDB || window.msIndexedDB,
      IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.OIDBTransaction || window.msIDBTransaction,
      dbVersion = 1.0;

  // Create/open database
  var request = indexedDB.open("elephantFiles", dbVersion),
      db,
      createObjectStore = function (dataBase) {
          // Create an objectStore
          console.log("Creating objectStore")
          dataBase.createObjectStore("elephants");
      },

      getImageFile = function () {
          // Create XHR
          var xhr = new XMLHttpRequest(),
              blob;

          xhr.open("GET", "ss.png", true);
          // Set the responseType to blob
          xhr.responseType = "blob";

          xhr.addEventListener("load", function () {
              if (xhr.status === 200) {
                  console.log("Image retrieved");
                  
                  // Blob as response
                  blob = xhr.response;
                  console.log("Blob:" + blob);

                  // Put the received blob into IndexedDB
                  putElephantInDb(blob);
              }
          }, false);
          // Send XHR
          xhr.send();
      },

      putElephantInDb = function (blob) {
          console.log("Putting elephants in IndexedDB");

          // Open a transaction to the database
          var transaction = db.transaction(["elephants"], IDBTransaction.READ_WRITE);

          // Put the blob into the dabase
          var put = transaction.objectStore("elephants").put(blob, "image");

          // Retrieve the file that was just stored
          transaction.objectStore("elephants").get("image").onsuccess = function (event) {
              

              // Get window.URL object
              var URL = window.URL || window.webkitURL;

              // Create and revoke ObjectURL
              var imgURL = URL.createObjectURL(imgFile);

            

              // Revoking ObjectURL
              URL.revokeObjectURL(imgURL);
          };
      };

  request.onerror = function (event) {
      console.log("Error creating/accessing IndexedDB database");
  };

  request.onsuccess = function (event) {
      console.log("Success creating/accessing IndexedDB database");
      db = request.result;

      db.onerror = function (event) {
          console.log("Error creating/accessing IndexedDB database");
      };
      
      // Interim solution for Google Chrome to create an objectStore. Will be deprecated
      if (db.setVersion) {
          if (db.version != dbVersion) {
              var setVersion = db.setVersion(dbVersion);
              setVersion.onsuccess = function () {
                  createObjectStore(db);
                  getImageFile();
              };
          }
          else {
              getImageFile();
          }
      }
      else {
          getImageFile();
      }
  }
  
  // For future use. Currently only in latest Firefox versions
  request.onupgradeneeded = function (event) {
      createObjectStore(event.target.result);
  };
})();

