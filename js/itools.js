/**
 * Created by hxsd on 2016/9/7.
 */
var $={
    ajax:function(method,url,success,error){
        var xhr=this.createRequest();
        xhr.open(method,url,true);
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4){
                if(success){
                    success(JSON.parse(xhr.responseText));
                };
            }else{
                if(error){
                    error(xhr.status);
                };
            };
        };

    },
    ajax2:function(opations){
        var xhr=this.createRequest();
        xhr.open(opations.method,opations.url,true);
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4){
                if(xhr.status==200){
                    if(opations.success){
                        opations.success(JSON.parse(xhr.responseText));
                    };
                }
                else if(opations.error){
                    opations.error(xhr.status);
                };

            };
        };
        xhr.send(null);
    },
    Getjson:function(url,success,error){
        var xhr=this.createRequest();
        xhr.open("GET",url,true);
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4){
                if(success){
                    success(JSON.parse(xhr.responseText));
                };
            }else{
                if(error){
                    error(xhr.status);
                };
            };
        };
        //xhr.setRequestHeader("apikey","25d8e3b7823b38a7882d787ffd2ef9c1");
        xhr.send(null);
    },
    createRequest:function(){
        var xhr;
        try{
            xhr=new XMLHttpRequest();
        }catch(e){
            try{
                xhr=new ActiveXObject("Msxml2.XMLHTTP");
            }catch(e){
                xhr=new ActiveXObject("Microsoft.XMLHTTP");
            }
        }
        return xhr;
    }
}




