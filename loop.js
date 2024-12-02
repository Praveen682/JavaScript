let name = "praveen";
for(i=0;i<name.length;i++){
    if(name.charAt(i) === 'r'){
        continue;
    }
    console.log(name.charAt(i));
}
