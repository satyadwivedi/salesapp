sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, JSONModel) {
        "use strict";

        return Controller.extend("com.satya.salesapp.controller.salesView", {
            onInit: function () {
                var oFormData = {
                        "name" : "Satya", 
                        "street" : "404", 
                        "zip": "500074", 
                        "phone" : "3211234231",
                        "country" : "India"
                }
                
                const oModel = new JSONModel() // create object
                oModel.setData(oFormData) // set data into model
                this.getView().byId("SimpleFormDisplay354").setModel(oModel) // set model into view
                //this.getView().bindElement("data");

                this.byId("GroupA").setSelectedIndex(4)

            },

            onSubmit : function (oEvent) {
                //MessageToast.show('Hi button press')
               // let oForm = this.byId('SimpleFormDisplay354')
            //    let name = this.byId("idName").getValue();
            //    let street = this.byId("idStreet").getValue();
            //    let zip = this.byId("idZIP").getValue();
            //    let country = this.byId("idCountry").getValue();
            //    let mobile = this.byId("idPhone").getValue();
            //    console.log('input data=', name, street, zip, country, mobile )
            //    MessageToast.show(`name=${name}, street= ${street} `)

            let radio = this.byId("GroupA")

            let oModel = this.getView().getModel();


            MessageToast.show("This message should appear in the message toast", {
                duration: 5000,                  // default
                width: "100em",                   // default
                my: "center bottom",             // default
                at: "center bottom",             // default
                of: window,                      // default
                offset: "0 0",                   // default
                collision: "fit fit",            // default
                onClose: null,                   // default
                autoClose: true,                 // default
                animationTimingFunction: "ease", // default
                animationDuration: 1000,         // default
                closeOnBrowserNavigation: true   // default
            });
        },

        getProductList : function () {
                const aProducts =   [
                    {
                    "ProductID": 1,
                    "ProductName": "Chai",
                    "SupplierID": 1,
                    "CategoryID": 1,
                    "QuantityPerUnit": "10 boxes x 20 bags",
                    "UnitPrice": "18.0000",
                    "UnitsInStock": 39,
                    "UnitsOnOrder": 0,
                    "ReorderLevel": 10,
                    "Discontinued": false
                    },
                    {
                    "ProductID": 2,
                    "ProductName": "Chang",
                    "SupplierID": 1,
                    "CategoryID": 1,
                    "QuantityPerUnit": "24 - 12 oz bottles",
                    "UnitPrice": "19.0000",
                    "UnitsInStock": 17,
                    "UnitsOnOrder": 40,
                    "ReorderLevel": 25,
                    "Discontinued": false
                    },
                    {
                    "ProductID": 3,
                    "ProductName": "Aniseed Syrup",
                    "SupplierID": 1,
                    "CategoryID": 2,
                    "QuantityPerUnit": "12 - 550 ml bottles",
                    "UnitPrice": "10.0000",
                    "UnitsInStock": 13,
                    "UnitsOnOrder": 70,
                    "ReorderLevel": 25,
                    "Discontinued": false
                    },
                    {
                    "ProductID": 4,
                    "ProductName": "Chef Anton's Cajun Seasoning",
                    "SupplierID": 2,
                    "CategoryID": 2,
                    "QuantityPerUnit": "48 - 6 oz jars",
                    "UnitPrice": "22.0000",
                    "UnitsInStock": 53,
                    "UnitsOnOrder": 0,
                    "ReorderLevel": 0,
                    "Discontinued": false
                    },
                    {
                    "ProductID": 5,
                    "ProductName": "Chef Anton's Gumbo Mix",
                    "SupplierID": 2,
                    "CategoryID": 2,
                    "QuantityPerUnit": "36 boxes",
                    "UnitPrice": "21.3500",
                    "UnitsInStock": 0,
                    "UnitsOnOrder": 0,
                    "ReorderLevel": 0,
                    "Discontinued": true
                    },
                    {
                    "ProductID": 6,
                    "ProductName": "Grandma's Boysenberry Spread",
                    "SupplierID": 3,
                    "CategoryID": 2,
                    "QuantityPerUnit": "12 - 8 oz jars",
                    "UnitPrice": "25.0000",
                    "UnitsInStock": 120,
                    "UnitsOnOrder": 0,
                    "ReorderLevel": 25,
                    "Discontinued": false
                    },
                    {
                    "ProductID": 7,
                    "ProductName": "Uncle Bob's Organic Dried Pears",
                    "SupplierID": 3,
                    "CategoryID": 7,
                    "QuantityPerUnit": "12 - 1 lb pkgs.",
                    "UnitPrice": "30.0000",
                    "UnitsInStock": 15,
                    "UnitsOnOrder": 0,
                    "ReorderLevel": 10,
                    "Discontinued": false
                    },
                    {
                    "ProductID": 8,
                    "ProductName": "Northwoods Cranberry Sauce",
                    "SupplierID": 3,
                    "CategoryID": 2,
                    "QuantityPerUnit": "12 - 12 oz jars",
                    "UnitPrice": "40.0000",
                    "UnitsInStock": 6,
                    "UnitsOnOrder": 0,
                    "ReorderLevel": 0,
                    "Discontinued": false
                    },
                    {
                    "ProductID": 9,
                    "ProductName": "Mishi Kobe Niku",
                    "SupplierID": 4,
                    "CategoryID": 6,
                    "QuantityPerUnit": "18 - 500 g pkgs.",
                    "UnitPrice": "97.0000",
                    "UnitsInStock": 29,
                    "UnitsOnOrder": 0,
                    "ReorderLevel": 0,
                    "Discontinued": true
                    },
                    {
                    "ProductID": 10,
                    "ProductName": "Ikura",
                    "SupplierID": 4,
                    "CategoryID": 8,
                    "QuantityPerUnit": "12 - 200 ml jars",
                    "UnitPrice": "31.0000",
                    "UnitsInStock": 31,
                    "UnitsOnOrder": 0,
                    "ReorderLevel": 0,
                    "Discontinued": false
                    },
                    {
                    "ProductID": 11,
                    "ProductName": "Queso Cabrales",
                    "SupplierID": 5,
                    "CategoryID": 4,
                    "QuantityPerUnit": "1 kg pkg.",
                    "UnitPrice": "21.0000",
                    "UnitsInStock": 22,
                    "UnitsOnOrder": 30,
                    "ReorderLevel": 30,
                    "Discontinued": false
                    },
                    {
                    "ProductID": 12,
                    "ProductName": "Queso Manchego La Pastora",
                    "SupplierID": 5,
                    "CategoryID": 4,
                    "QuantityPerUnit": "10 - 500 g pkgs.",
                    "UnitPrice": "38.0000",
                    "UnitsInStock": 86,
                    "UnitsOnOrder": 0,
                    "ReorderLevel": 0,
                    "Discontinued": false
                    },
                    {
                    "ProductID": 13,
                    "ProductName": "Konbu",
                    "SupplierID": 6,
                    "CategoryID": 8,
                    "QuantityPerUnit": "2 kg box",
                    "UnitPrice": "6.0000",
                    "UnitsInStock": 24,
                    "UnitsOnOrder": 0,
                    "ReorderLevel": 5,
                    "Discontinued": false
                    },
                    {
                    "ProductID": 14,
                    "ProductName": "Tofu",
                    "SupplierID": 6,
                    "CategoryID": 7,
                    "QuantityPerUnit": "40 - 100 g pkgs.",
                    "UnitPrice": "23.2500",
                    "UnitsInStock": 35,
                    "UnitsOnOrder": 0,
                    "ReorderLevel": 0,
                    "Discontinued": false
                    },
                    {
                    "ProductID": 15,
                    "ProductName": "Genen Shouyu",
                    "SupplierID": 6,
                    "CategoryID": 2,
                    "QuantityPerUnit": "24 - 250 ml bottles",
                    "UnitPrice": "15.5000",
                    "UnitsInStock": 39,
                    "UnitsOnOrder": 0,
                    "ReorderLevel": 5,
                    "Discontinued": false
                    },
                    {
                    "ProductID": 16,
                    "ProductName": "Pavlova",
                    "SupplierID": 7,
                    "CategoryID": 3,
                    "QuantityPerUnit": "32 - 500 g boxes",
                    "UnitPrice": "17.4500",
                    "UnitsInStock": 29,
                    "UnitsOnOrder": 0,
                    "ReorderLevel": 10,
                    "Discontinued": false
                    },
                    {
                    "ProductID": 17,
                    "ProductName": "Alice Mutton",
                    "SupplierID": 7,
                    "CategoryID": 6,
                    "QuantityPerUnit": "20 - 1 kg tins",
                    "UnitPrice": "39.0000",
                    "UnitsInStock": 0,
                    "UnitsOnOrder": 0,
                    "ReorderLevel": 0,
                    "Discontinued": true
                    },
                    {
                    "ProductID": 18,
                    "ProductName": "Carnarvon Tigers",
                    "SupplierID": 7,
                    "CategoryID": 8,
                    "QuantityPerUnit": "16 kg pkg.",
                    "UnitPrice": "62.5000",
                    "UnitsInStock": 42,
                    "UnitsOnOrder": 0,
                    "ReorderLevel": 0,
                    "Discontinued": false
                    },
                    {
                    "ProductID": 19,
                    "ProductName": "Teatime Chocolate Biscuits",
                    "SupplierID": 8,
                    "CategoryID": 3,
                    "QuantityPerUnit": "10 boxes x 12 pieces",
                    "UnitPrice": "9.2000",
                    "UnitsInStock": 25,
                    "UnitsOnOrder": 0,
                    "ReorderLevel": 5,
                    "Discontinued": false
                    },
                    {
                    "ProductID": 20,
                    "ProductName": "Sir Rodney's Marmalade",
                    "SupplierID": 8,
                    "CategoryID": 3,
                    "QuantityPerUnit": "30 gift boxes",
                    "UnitPrice": "81.0000",
                    "UnitsInStock": 40,
                    "UnitsOnOrder": 0,
                    "ReorderLevel": 0,
                    "Discontinued": false
                    }  
            ]

                //Step 2 create JSON model of type sap.ui.mode.josn.JSONModel
                const oProductModel = new sap.ui.model.json.JSONModel();  
                //Step 3 set data inot model
                oProductModel.setData(aProducts)
                //Step 4, set model into view
                this.getView().setModel(oProductModel, "P")
        }

       
        

        });
    });
