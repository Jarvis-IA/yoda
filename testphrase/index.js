function testphrase(phrase) {
path = require('path');fs = require('fs')
list = []
listinconnue=""
//console.log("phrase à étudié : "+phrase)
//C:/Users/Administrateur/sarah/plugins/modules/mathildedico/memoire
 	  filesnom = fs.readFileSync(path.resolve('%CD%','./plugins/yoda/mathildedico/memoire/nom.json' ).replace('\\%CD%', ''),'utf-8') ;
	
	  filesadverbe = fs.readFileSync(path.resolve('%CD%','./plugins/yoda/mathildedico/memoire/adverbe.json').replace('\\%CD%', ''),'utf-8') 
        
      filesverbe = fs.readFileSync(path.resolve('%CD%','./plugins/yoda/mathildedico/memoire/verbe.json').replace('\\%CD%', ''),'utf-8')
	
	  filesadjectif = fs.readFileSync(path.resolve('%CD%', './plugins/yoda/mathildedico/memoire/adjectif.json').replace('\\%CD%', ''),'utf-8')
	
	  filespréposition = fs.readFileSync(path.resolve('%CD%','./plugins/yoda/mathildedico/memoire/préposition.json').replace('\\%CD%', ''),'utf-8')
   
	  filesarticle = fs.readFileSync(path.resolve('%CD%','./plugins/yoda/mathildedico/memoire/article.json').replace('\\%CD%', ''),'utf-8')  
    
      filespronom = fs.readFileSync(path.resolve('%CD%','./plugins/yoda/mathildedico/memoire/pronom.json' ).replace('\\%CD%', ''),'utf-8')

      filesinconnu = fs.readFileSync(path.resolve('%CD%','./plugins/yoda/mathildedico/memoire/inconnu.json' ).replace('\\%CD%', ''),'utf-8')

      filesconjonction = fs.readFileSync(path.resolve('%CD%','./plugins/yoda/mathildedico/memoire/conjonction.json' ).replace('\\%CD%', ''),'utf-8')

      		  jsonStrnom = JSON.parse(filesnom);
			  jsonStradverbe = JSON.parse(filesadverbe);
			  jsonStrverbe = JSON.parse(filesverbe);
			  jsonStradjectif = JSON.parse(filesadjectif);
			  jsonStrpréposition = JSON.parse(filespréposition);
			  jsonStrarticle = JSON.parse(filesarticle);
          	  jsonStrpronom = JSON.parse(filespronom);
          	  jsonStrinconnu = JSON.parse(filesinconnu);
          	  jsonStrconjonction= JSON.parse(filesconjonction)

	phrase=phrase.trim().split(" ");	console.log("phrase recu dans index/testphrase : "+phrase+" : ");	console.log(phrase.length)
	for(i=0;i<phrase.length;i++){//.search(new RegExp("\\b" + phrasetester[i] + "\\b","gi")) >-1)
						 // phrase1=phrase[i];  
					 phrase1=phrase[i].trim()
					//console.log('testttttttttt:+ '+phrase1)
						//  filesadjectif.search(new RegExp("\\b" + queryphraser1 + "\\b","gi")) >-1)
					
						if (filesnom.search(" "+phrase1+" ") >-1){list.push(phrase1);list.push(" nom ");phrase1="1"}
					    if (filesadverbe.search(" "+phrase1+" ")>-1){list.push(phrase1);list.push(" adverbe ");phrase1="1"}
						if (filesverbe.search(" "+phrase1+" ") >-1){list.push(phrase1);list.push(" verbe ");phrase1="1"}
						if (filesadjectif.search(" "+phrase1+" ") >-1){list.push(phrase1);list.push(" adjectif ");phrase1="1"}
						if (filespréposition.search(" "+phrase1+" ") >-1){list.push(phrase1);list.push(" préposition ");phrase1="1"}
						if (filesarticle.search(" "+phrase1+" ") >-1){list.push(phrase1);list.push(" article ");phrase1="1"}
						if (filespronom.search(" "+phrase1+" ") >-1){list.push(phrase1);list.push(" pronom ");phrase1="1"}
						if (filesconjonction.search(" "+phrase1+" ") >-1){list.push(phrase1);list.push(" conjonction ");phrase1="1"}
						//if (filesinconnu.search(new RegExp("\\b" + phrase1+ "\\b","gi" )) >-1){list.push(phrase1+" inconnu ");phrase1="1"}
//if(phrase1!=="1"){list.push(phrase1);list.push(" inconnuuuuu ")}
if(phrase1!=="1"){list.push(phrase1);list.push(" inconnuuuuu ");listinconnue=listinconnue+" "+phrase1}
							
						//	console.log("la liste"+list)
	}							
							
if(listinconnue!==""){
	console.log("on test ceci "+listinconnue)
	var dico=require(path.resolve('%CD%', './plugins/yoda/mathildedico').replace('\\%CD%', '')) ; dico(listinconnue)
}
// fs.writeFile(jsonstorage,JSON.stringify(jsoncontent,null,4)
//list = JSON.stringify(list);
//list=JSON.parse(list)
//objet.courses.push({item: query}); var new_jsonStr = JSON.stringify(objet);
//nom=nom.trim();//console.log("testttttttttttttttttt")
//	 ;//console.log("ob : "+objet1)
 // jsonStr1 = JSON.stringify(objet1);//console.log("js "+jsonStr1)
//	objet1.cyrano.push(nom);
 //data1 = JSON.stringify(objet1); //callback1 (data1);
//var data1111='{"cyrano1111":[]}';var objet1111 = JSON.parse(data1111)

//for (var xx=0;xx<list.length;xx++){
//objet1111.cyrano1111.push(list[xx])
//}
//var new_jsonStr = JSON.stringify(objet1111)
return list
//return new_jsonStr
}

module.exports = testphrase;