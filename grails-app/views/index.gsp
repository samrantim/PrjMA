<html>
<head>
    <meta name="layout" content="main"/>
    <r:require modules="jquery-ui, blueprint"/>

    <r:script> $(function () {
        $('#fm').dialog({
                    autoOpen:false,
                    height:350,
                    width:520,
                    modal:true,
                    resizable:false,
                    closeOnEscape:false
                    //,dialogClass: "noclose"
                }
        );
    });

    </r:script>
</head>

<body>

<div id="fm" title="Samran Dialog Title">Hello World</div>
<input type="button" value="Click Me!" onclick="$('#fm').dialog('open');
return true;"/>
</body>
</html>