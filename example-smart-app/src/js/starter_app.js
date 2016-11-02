!function(e){function t(){return{fname:{value:""},lname:{value:""},gender:{value:""},birthdate:{value:""},age:{value:""},height:{value:""},systolicbp:{value:""},diastolicbp:{value:""},ldl:{value:""},hdl:{value:""}}}function n(e,t){var n=[];return e.forEach(function(e){var a=e.component.find(function(e){return e.code.coding.find(function(e){return e.code==t})});a&&(e.valueQuantity=a.valueQuantity,n.push(e))}),"undefined"!=typeof n[0].valueQuantity.value&&"undefined"!=n[0].valueQuantity.unit?n[0].valueQuantity.value+" "+n[0].valueQuantity.unit:void 0}function a(e){return 1===new Date(e,1,29).getMonth()}function i(e){if("[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))return void 0;var t=new Date(e),n=new Date,i=n.getFullYear()-t.getFullYear();t.setFullYear(t.getFullYear()+i),t>n&&(i--,t.setFullYear(t.getFullYear()-1));var u=(n.getTime()-t.getTime())/864e5;return i+u/(a(n.getFullYear())?366:365)}e.extractData=function(){function e(){console.log("Loading error",arguments),u.reject()}function a(a){if(a.hasOwnProperty("patient")){var l=a.patient,o=l.read(),r=a.patient.api.fetchAll({type:"Observation",query:{code:{$or:["http://loinc.org|8302-2","http://loinc.org|8462-4","http://loinc.org|8480-6","http://loinc.org|2085-9","http://loinc.org|2089-1","http://loinc.org|55284-4"]}}});$.when(o,r).fail(e),$.when(o,r).done(function(e,l){var o=a.byCodes(l,"code"),r=e.gender,d=new Date(e.birthDate),f=d.getDate(),v=d.getMonth()+1,h=d.getFullYear(),y=v+"/"+f+"/"+h,c="",p="";"undefined"!=typeof e.name[0]&&(c=e.name[0].given.join(" "),p=e.name[0].family.join(" "));var g=o("8302-2"),m=n(o("55284-4"),"8480-6"),s=n(o("55284-4"),"8462-4"),Q=o("2085-9"),b=o("2089-1"),$=t();$.birthdate=y,$.gender=r,$.fname=c,$.lname=p,$.age=parseInt(i(d)),"undefined"!=typeof g[0]&&"undefined"!=typeof g[0].valueQuantity.value&&"undefined"!=typeof g[0].valueQuantity.unit&&($.height=g[0].valueQuantity.value+" "+g[0].valueQuantity.unit),"undefined"!=typeof m&&($.systolicbp=m),"undefined"!=typeof s&&($.diastolicbp=s),"undefined"!=typeof Q[0]&&"undefined"!=typeof Q[0].valueQuantity.value&&"undefined"!=typeof Q[0].valueQuantity.unit&&($.hdl=Q[0].valueQuantity.value+" "+Q[0].valueQuantity.unit),"undefined"!=typeof b[0]&&"undefined"!=typeof b[0].valueQuantity.value&&"undefined"!=typeof b[0].valueQuantity.unit&&($.ldl=b[0].valueQuantity.value+" "+b[0].valueQuantity.unit),u.resolve($)})}else e()}var u=$.Deferred();return FHIR.oauth2.ready(a,e),u.promise()},e.drawVisualization=function(e){$("#holder").show(),$("#loading").hide(),$("#fname").html(e.fname),$("#lname").html(e.lname),$("#gender").html(e.gender),$("#birthdate").html(e.birthdate),$("#age").html(e.age),$("#height").html(e.height),$("#systolicbp").html(e.systolicbp),$("#diastolicbp").html(e.diastolicbp),$("#ldl").html(e.ldl),$("#hdl").html(e.hdl)}}(window);