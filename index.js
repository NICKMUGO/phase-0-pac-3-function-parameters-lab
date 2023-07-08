function introduction(name){
    return(`Hi, my name is ${name}.`);
}
console.log(introduction("Aki"))
function introductionWithLanguage(name, _langauage){
    return(`Hi, my name is ${name} and I am learning to program in ${_langauage}.`);
}
console.log(introductionWithLanguage("Aki","Ember.js"))
function introductionWithLanguageOptional(name, _langauage="JavaScript"){
    return(`Hi, my name is ${name} and I am learning to program in ${_langauage}.`);
}
console.log(introductionWithLanguage("Aki"))