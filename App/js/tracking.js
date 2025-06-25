xui.Class('App.products', 'xui.Module',{
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
                    "key" : "products",
                    "paras" : {
                        "action" : "list"
                    }
                })
                .setProxyType("auto")
            );
            
            append(
                xui.create("xui.APICaller")
                .setHost(host,"api_del")
                .setQueryURL("{xui.constant.request_url}")
                .setQueryArgs({
                    "key" : "products",
                    "paras" : {
                        "action" : "delete"
                    }
                })
                .setProxyType("auto")
            );
            
            append(
                xui.create("xui.UI.Dialog")
                .setHost(host,"mainDlg")
                .setLeft("4.166666666666667em")
                .setTop("1.6666666666666667em")
                .setWidth("77.79047619047618em")
                .setHeight("46.095238095238095em")
                .setResizer(false)
                .setCaption("Products")
                .setImage("{/}img/app.png")
                .setImagePos("-48px 0")
                .setMinBtn(false)
                .setMaxBtn(false)
                .setModal(true)
                .setOverflow("hidden")
            );
            
            host.mainDlg.append(
                xui.create("xui.UI.Button")
                .setHost(host,"ctl_sbutton14")
                .setLeft("68.57142857142857em")
                .setTop("40.38095238095238em")
                .setWidth("7.5em")
                .setCaption("Close")
                .onClick([
                    {
                        "desc" : "destroy",
                        "type" : "page",
                        "target" : "App.products",
                        "args" : [ ],
                        "method" : "destroy",
                        "event" : 1
                    }
                ])
            );
            
            host.mainDlg.append(
                xui.create("xui.UI.Block")
                .setHost(host,"mainPane")
                .setLeft("0.5333333333333333em")
                .setTop("0.6095238095238096em")
                .setWidth("74.74285714285715em")
                .setHeight("39.161904761904765em")
                .setBorderType("inset")
            );
            
            host.mainPane.append(
                xui.create("xui.UI.Element")
                .setHost(host,"xui_ui_element3")
                .setLeft("0.1523809523809524em")
                .setTop("0.0761904761904762em")
                .setWidth("73.52380952380952em")
                .setHeight("38.32380952380952em")
                .setHtml("<div><div>&lt;!DOCTYPE html&gt;</div><div>&lt;html lang=\"en\"&gt;</div><div>&lt;head&gt;</div><div>&nbsp; &lt;meta charset=\"UTF-8\"&gt;</div><div>&nbsp; &lt;title&gt;Iframe Example&lt;/title&gt;</div><div>&lt;/head&gt;</div><div>&lt;body&gt;</div><div><br></div><div>&nbsp; &lt;iframe&nbsp;</div><div>&nbsp; &nbsp; src=\"https://example.com\"&nbsp;</div><div>&nbsp; &nbsp; style=\"border:1px solid #ccc;\"&gt;</div><div>&nbsp; &lt;/iframe&gt;</div><div><br></div><div>&lt;/body&gt;</div><div>&lt;/html&gt;</div><div><br></div></div>")
            );
            
            append(
                xui.create("xui.MessageService")
                .setHost(host,"xui_msgsvr")
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
                },
                {
                    "desc":"selection - check",
                    "type":"other",
                    "target":"msg",
                    "args":[ ],
                    "method":"free",
                    "conditions":[
                        {
                            "left":"{args[1]}",
                            "symbol":"!=",
                            "right":"needSelector"
                        }
                    ],
                    "return":false
                },
                {
                    "desc":"grid",
                    "type":"module",
                    "target":"module_grideditor1",
                    "args":[
                        "{page.module_grideditor1.setMode()}",
                        undefined,
                        undefined,
                        "selection"
                    ],
                    "method":"callFunction",
                    "redirection":"other:callback:call"
                },
                {
                    "desc":"dialog",
                    "type":"control",
                    "target":"mainDlg",
                    "args":[
                        {
                            "modal":false
                        },
                        { }
                    ],
                    "method":"setProperties"
                },
                {
                    "desc":"set prop",
                    "type":"page",
                    "target":"App.products",
                    "args":[
                        {
                            "popfromkey":"{args[2]}",
                            "popfromvalue":"{args[3]}"
                        }
                    ],
                    "method":"setProperties"
                }
            ]
        }
    }
});