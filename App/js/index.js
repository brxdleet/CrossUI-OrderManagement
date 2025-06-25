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
                .setWidth("85.33333333333333em")
                .setHeight("6.704761904761905em")
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