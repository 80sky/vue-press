# 一维数组按个数进行拆分

``` bash

function formatArray(data,num){	
　　var result=[];
　　for(var i=0,len=data.length;i<len;i+=num){
　　　　result.push(data.slice(i,i+num));
　　}
　return result;
}

```



