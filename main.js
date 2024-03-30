function lexer(input){
    const tokens = [];
    let cursor = 0;
    while (cursor < input.length){
        let char = input[cursor];
        if(/\s/.test(char)){
            cursor++;
            continue;
        }

        if (/[a-zA-Z]/.test(char)){
            let word = '';
            while(/[a-zA-Z0-9]/.test(char)){
                word += char;
                char = input[++cursor];
            }
            console.log("hi2: ", cursor);
            if (word === 'martians' || word === 'launch'){
                tokens.push({type:'keyword', value: word});
            }else{
                tokens.push({type: 'identifier', value: word})
            }

            continue;
        }
        if(/[0-9]/.test(char)){
            let num = '';
            while(/[0-9]/.test(char)){
                num +=char
                char = input[++cursor];
            }
            tokens.push({type: 'number', value: parseInt(num)});
            continue;
        }

        if(/[\+\-\*\/\=]/.test(char)){
            tokens.push({type: 'operator', value: char});
            cursor++;
            continue;
        }
        cursor++;
    }
   
    return tokens;

}

function compiler(input) {
    console.log("hey");
    const tokens = lexer(input);
    console.log(tokens);
}

const code = `
martians a= 10;
martians b= 1;
martians sum= a+b;
launch(sum)
`
compiler(code);

