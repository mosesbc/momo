$( "#go" ).click(function() {
    var word = $('#word').val().replace(/\s+/g,'-').toLowerCase();
    var suffix = $('#suffix').val();
    var out1 = setNumbers(word);
    var out2 = alterCaps(out1);
    var output = out2 + getASCII(suffix);
    $('#output').val(output);
    
});

function getASCII(domain){
    let altered = domain.slice();
    let code = '';
    for (var i = 0; i < altered.length; i++) {
        if(i==0){
            code = code + "-"
        }
        code = code + altered.charCodeAt(i)
    }
    return code
}
function alterCaps(word){
    let isCaps = true;
    let altered = word.slice();
    for (var i = 0; i < word.length; i++) {
        var x=altered.charAt(i)
        if((/[a-zA-Z]/).test(x)){
            if(isCaps){
                altered = setCharAt(altered,i,x.toUpperCase())
                isCaps = false;
            } else {
                altered = setCharAt(altered,i,x.toLowerCase(x))
                isCaps = true;
            }
        }
    }
    return altered;
    
}
function setNumbers(word){
    let numbered = word.slice();
    for (var i = 0; i < word.length; i++) {
        if (word.charAt(i) === 'L' || word.charAt(i) === 'l'){
            numbered = setCharAt(numbered,i,'1')
        } else if (word.charAt(i) === 'Z' || word.charAt(i) === 'z'){
            numbered = setCharAt(numbered,i,'2')
        } else if (word.charAt(i) === 'E' || word.charAt(i) === 'e'){
            numbered = setCharAt(numbered,i,'3')
        } else if (word.charAt(i) === 'A' || word.charAt(i) === 'a'){
            numbered = setCharAt(numbered,i,'4')
        } else if (word.charAt(i) === 'S' || word.charAt(i) === 's'){
            numbered = setCharAt(numbered,i,'5')
        } else if (word.charAt(i) === 'G' || word.charAt(i) === 'g'){
            numbered = setCharAt(numbered,i,'6')
        } else if(word.charAt(i) === 'I' || word.charAt(i) === 'i'){
            numbered = setCharAt(numbered,i,'!')
        } else if(word.charAt(i) === 'T' || word.charAt(i) === 't'){
            numbered = setCharAt(numbered,i,'+')
        }
    }
    return numbered;
}

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}