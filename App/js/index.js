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
                xui.create("xui.UI.Block")
                .setHost(host,"ctl_block3")
                .setDock("top")
                .setWidth("85.33333333333333em")
                .setHeight("6.704761904761905em")
                .setOverflow("hidden")
            );
            
            host.ctl_block3.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button16")
                .setLeft("0.6857142857142857em")
                .setTop("1.4476190476190476em")
                .setWidth("13.561904761904762em")
                .setHeight("3.580952380952381em")
                .setCaption("Vehicle Tracker")
                .onClick([
                    {
                        "desc" : "Action 1",
                        "type" : "page",
                        "target" : "App.tracking",
                        "args" : [
                            "{page.xui_ui_panel10}"
                        ],
                        "method" : "show",
                        "event" : 1,
                        "timeout" : 0,
                        "resetid" : ""
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.Block")
                .setHost(host,"blkMain")
                .setDock("fill")
                .setVisibility("visible")
                .setBorderType("none")
            );
            
            host.blkMain.append(
                xui.create("xui.UI.Panel")
                .setHost(host,"xui_ui_panel10")
                .setDock("none")
                .setLeft("1.5238095238095237em")
                .setTop("0.9142857142857143em")
                .setWidth("94.55238095238096em")
                .setHeight("46.7047619047619em")
                .setVisibility("hidden")
                .setCaption("Vehicle Tracker")
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