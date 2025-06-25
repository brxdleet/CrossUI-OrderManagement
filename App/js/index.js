// The default code is a com class (inherited from xui.Com)
xui.Class('App', 'xui.Module',{
    // Ensure that all the value of "key/value pair" does not refer to external variables
    Instance:{ 
        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.APICaller")
                .setHost(host,"api_list")
                .setQueryURL("{xui.constant.request_url}")
                .setQueryArgs({
                    "key" : "orders",
                    "paras" : {
                        "action" : "list"
                    }
                })
                .setProxyType("auto")
            );
            
            append(
                xui.create("xui.APICaller")
                .setHost(host,"api_del")
                .setQueryURL("{xui.constant.request_url")
                .setQueryArgs({
                    "key" : "orders",
                    "paras" : {
                        "action" : "delete"
                    }
                })
                .setProxyType("auto")
            );
            
            append(
                xui.create("xui.UI.Block")
                .setHost(host,"ctl_block3")
                .setDock("top")
                .setHeight("7.466666666666667em")
                .setOverflow("hidden")
            );
            
            host.ctl_block3.append(
                xui.create("xui.UI.Div")
                .setHost(host,"ctl_pane13")
                .setLeft("-0.0761904761904762em")
                .setTop("0.6857142857142857em")
                .setWidth("89.75238095238095em")
                .setHeight("4.444444444444445em")
                .setRight("0.35555555555555557em")
                .setPanelBgClr("transparent")
            );
            
            host.ctl_pane13.append(
                xui.create("xui.UI.StatusButtons")
                .setHost(host,"ctl_statusbuttons1")
                .setItems([
                    {
                        "id" : "info",
                        "caption" : "Company Information",
                        "image" : "{/}img/app.png",
                        "imagePos" : "-112px 0 "
                    },
                    {
                        "id" : "shipping",
                        "caption" : "Shipping Methods",
                        "image" : "{/}img/app.png",
                        "imagePos" : "-64px 0 "
                    },
                    {
                        "id" : "payment",
                        "caption" : "Payment Methods",
                        "image" : "{/}img/app.png",
                        "imagePos" : "-80px 0 "
                    },
                    {
                        "id" : "employee",
                        "caption" : "Employees",
                        "image" : "{/}img/app.png",
                        "imagePos" : "-16px 0 "
                    },
                    {
                        "id" : "prd",
                        "caption" : "Products",
                        "image" : "{/}img/app.png",
                        "imagePos" : "-48px 0 "
                    },
                    {
                        "id" : "customer",
                        "caption" : "Customers",
                        "image" : "{/}img/app.png",
                        "imagePos" : "-32px 0 "
                    },
                    {
                        "id" : "new order",
                        "caption" : "New Order",
                        "image" : "{/}img/app.png"
                    }
                ])
                .setLeft("-20em")
                .setTop("3em")
                .setWidth("74.28571428571429em")
                .setHeight("2.4380952380952383em")
                .setPosition("static")
                .setSelMode("none")
                .setBorderType("none")
                .setItemMargin("2px 4px")
                .setItemWidth("13.333333333333334em")
                .setValue("")
                .setCustomStyle({
                    "ITEM" : {
                        "text-align" : "left"
                    }
                })
            );
            
            append(
                xui.create("xui.UI.Block")
                .setHost(host,"blkMain")
                .setDock("fill")
                .setBorderType("none")
            );
            
            host.blkMain.append(
                xui.create("xui.Module.PageGrid", "xui.Module")
                .setHost(host,"module_grideditor1")
                .setProperties({
                    "__inner_coms_prf__" : {
                        "grid" : {
                            "properties" : {
                                "header" : [
                                    {
                                        "id" : "OrderID",
                                        "caption" : "Order ID",
                                        "width" : "4.038095238095238em",
                                        "type" : "input"
                                    },
                                    {
                                        "id" : "CustomerID",
                                        "caption" : "CustomerID",
                                        "width" : "2.9714285714285715em",
                                        "hidden" : true,
                                        "type" : "input"
                                    },
                                    {
                                        "id" : "CompanyName",
                                        "caption" : "Company Name",
                                        "width" : "8em",
                                        "type" : "input"
                                    },
                                    {
                                        "id" : "EmployeeID",
                                        "caption" : "EmployeeID",
                                        "width" : "2.9714285714285715em",
                                        "hidden" : true,
                                        "type" : "input"
                                    },
                                    {
                                        "id" : "EmployeeName",
                                        "caption" : "Employee Name",
                                        "width" : "8em",
                                        "type" : "input"
                                    },
                                    {
                                        "id" : "OrderDate",
                                        "caption" : "Order Date",
                                        "width" : "8em",
                                        "type" : "date"
                                    },
                                    {
                                        "id" : "PurchaseOrderNumber",
                                        "caption" : "Purchase Order Number",
                                        "width" : "8em",
                                        "type" : "number"
                                    },
                                    {
                                        "id" : "ShipDate",
                                        "caption" : "Ship Date",
                                        "width" : "8em",
                                        "type" : "date"
                                    },
                                    {
                                        "id" : "ShippingMethodID",
                                        "caption" : "ShippingMethodID",
                                        "width" : "8em",
                                        "hidden" : true,
                                        "type" : "input"
                                    },
                                    {
                                        "id" : "ShippingMethod",
                                        "caption" : "Shipping Method",
                                        "width" : "8em",
                                        "type" : "input"
                                    },
                                    {
                                        "id" : "PaymentMethodID",
                                        "caption" : "PaymentMethodID",
                                        "width" : "8em",
                                        "hidden" : true,
                                        "type" : "input"
                                    },
                                    {
                                        "id" : "PaymentMethod",
                                        "caption" : "Payment Method",
                                        "width" : "8em",
                                        "type" : "input"
                                    },
                                    {
                                        "id" : "FreightCharge",
                                        "caption" : "Freight Charge",
                                        "width" : "8em",
                                        "type" : "currency"
                                    },
                                    {
                                        "id" : "Taxes",
                                        "caption" : "Taxes",
                                        "width" : "8em",
                                        "type" : "currency"
                                    },
                                    {
                                        "id" : "PaymentReceived",
                                        "caption" : "Payment Received",
                                        "width" : "8em",
                                        "type" : "checkbox"
                                    },
                                    {
                                        "id" : "Comment",
                                        "caption" : "Comment",
                                        "width" : "12.038095238095238em",
                                        "type" : "textarea"
                                    }
                                ],
                                "uidColumn" : "OrderID",
                                "freezedColumn" : 3,
                                "colHidable" : false
                            }
                        }
                    }
                })
                .setEvents({
                    "onListRecords" : [
                        {
                            "desc" : "set page",
                            "type" : "control",
                            "target" : "api_list",
                            "args" : [
                                "{page.api_list.setQueryArgs()}",
                                undefined,
                                undefined,
                                "{args[0]}",
                                "paras.page"
                            ],
                            "method" : "setQueryArgs",
                            "redirection" : "other:callback:call"
                        },
                        {
                            "desc" : "set size",
                            "type" : "control",
                            "target" : "api_list",
                            "args" : [
                                "{page.api_list.setQueryArgs()}",
                                undefined,
                                undefined,
                                "{args[1]}",
                                "paras.size"
                            ],
                            "method" : "setQueryArgs",
                            "redirection" : "other:callback:call"
                        },
                        {
                            "desc" : "call",
                            "type" : "control",
                            "target" : "api_list",
                            "args" : [ ],
                            "method" : "invoke",
                            "onOK" : 0,
                            "onKO" : 1
                        },
                        {
                            "desc" : "if ok, callback",
                            "type" : "other",
                            "target" : "callback",
                            "args" : [
                                "{args[2]()}",
                                undefined,
                                undefined,
                                "{temp.okData.data}"
                            ],
                            "method" : "call",
                            "conditions" : [
                                {
                                    "left" : "{temp.okData.data}",
                                    "symbol" : "non-empty",
                                    "right" : ""
                                }
                            ]
                        }
                    ],
                    "onOpenRecord" : [
                        {
                            "desc" : "set prop",
                            "type" : "page",
                            "target" : "App.order",
                            "args" : [
                                {
                                    "recordId" : "{args[0]}"
                                }
                            ],
                            "method" : "setProperties"
                        },
                        {
                            "desc" : "show",
                            "type" : "page",
                            "target" : "App.order",
                            "args" : [ ],
                            "method" : "show"
                        },
                        {
                            "desc" : "set hook",
                            "type" : "page",
                            "target" : "App.order",
                            "args" : [
                                "{page.setHooks()}",
                                undefined,
                                undefined,
                                "updateCallback",
                                "{args[2]}"
                            ],
                            "method" : "setHooks",
                            "redirection" : "page::"
                        }
                    ],
                    "onDeleteRecords" : [
                        {
                            "desc" : "set api",
                            "type" : "control",
                            "target" : "api_del",
                            "args" : [
                                "{page.api_del.setQueryArgs()}",
                                undefined,
                                undefined,
                                "{args[0]}",
                                "paras.ids"
                            ],
                            "method" : "setQueryArgs",
                            "redirection" : "other:callback:call"
                        },
                        {
                            "desc" : "call api",
                            "type" : "control",
                            "target" : "api_del",
                            "args" : [ ],
                            "method" : "invoke",
                            "onOK" : 0,
                            "onKO" : 1
                        },
                        {
                            "desc" : "callback",
                            "type" : "other",
                            "target" : "callback",
                            "args" : [
                                "{args[1]()}"
                            ],
                            "method" : "call",
                            "conditions" : [
                                {
                                    "left" : "{temp.okData.data}",
                                    "symbol" : "non-empty",
                                    "right" : ""
                                }
                            ]
                        }
                    ],
                    "onMessageServiceReceived" : [
                        {
                            "desc" : "set",
                            "type" : "module",
                            "target" : "module_grideditor1",
                            "args" : [
                                "{page.module_grideditor1.updateRow()}",
                                undefined,
                                undefined,
                                "{args[1]}",
                                "{args[2]}"
                            ],
                            "method" : "callFunction",
                            "conditions" : [
                                {
                                    "left" : "{args[0]}",
                                    "symbol" : "=",
                                    "right" : "set"
                                }
                            ],
                            "redirection" : "other:callback:call"
                        },
                        {
                            "desc" : "create",
                            "type" : "module",
                            "target" : "module_grideditor1",
                            "args" : [
                                "{page.module_grideditor1.addRow()}",
                                undefined,
                                undefined,
                                undefined,
                                "{args[2]}"
                            ],
                            "method" : "callFunction",
                            "conditions" : [
                                {
                                    "left" : "{args[0]}",
                                    "symbol" : "=",
                                    "right" : "create"
                                }
                            ],
                            "redirection" : "other:callback:call"
                        }
                    ],
                    "onCreateRecords" : [
                        {
                            "desc" : "set prop",
                            "type" : "page",
                            "target" : "App.order",
                            "args" : [
                                {
                                    "callback" : "{args[0]}"
                                }
                            ],
                            "method" : "setProperties"
                        },
                        {
                            "desc" : "crete order",
                            "type" : "page",
                            "target" : "App.order",
                            "args" : [ ],
                            "method" : "show"
                        },
                        {
                            "desc" : "set create hook",
                            "type" : "page",
                            "target" : "App.order",
                            "args" : [
                                "{page.setHooks()}",
                                undefined,
                                undefined,
                                "createCallback",
                                "{args[0]}"
                            ],
                            "method" : "setHooks",
                            "redirection" : "page::"
                        },
                        {
                            "desc" : "set udpate hook",
                            "type" : "page",
                            "target" : "App.order",
                            "args" : [
                                "{page.setHooks()}",
                                undefined,
                                undefined,
                                "updateCallback",
                                "{args[1]}"
                            ],
                            "method" : "setHooks",
                            "redirection" : "page::"
                        }
                    ]
                })
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },
        events:{
            "onMessage":[
                {
                    "desc":"set",
                    "type":"module",
                    "target":"module_grideditor1",
                    "args":[
                        "{page.module_grideditor1.updateRow()}",
                        undefined,
                        undefined,
                        "{args[2]}", 
                        "{args[3]}"
                    ],
                    "method":"callFunction",
                    "conditions":[
                        {
                            "left":"{args[1]}",
                            "symbol":"=",
                            "right":"set"
                        }
                    ],
                    "redirection":"other:callback:call"
                },
                {
                    "desc":"create",
                    "type":"module",
                    "target":"module_grideditor1",
                    "args":[
                        "{page.module_grideditor1.addRow()}",
                        undefined,
                        undefined,
                        undefined,
                        "{args[2]}"
                    ],
                    "method":"callFunction",
                    "conditions":[
                        {
                            "left":"{args[1]}",
                            "symbol":"=",
                            "right":"create"
                        }
                    ],
                    "redirection":"other:callback:call"
                } 
            ]
        }
    }
});