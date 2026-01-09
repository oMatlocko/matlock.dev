import Prism from 'prismjs';

Prism.languages.gazprea = {
    comment: {
        pattern: /\/\/.*|\/\*[\s\S]*?\*\//,
        greedy: true
    },
    string: {
        pattern:/"(?:\\.|[^"\\])*"/,
        greedy: true
    },
    keyword: /\b(break|call|continue|else|if|in|loop|return|while|const|var|as|by|returns)\b/,
    function: /\b(function|procedure|typedef)\b/,
    type: /\b(boolean|character|integer|real|string|tuple)\b/,
    boolean: /\b(true|false)\b/,
    operator: /\b(and|not|or|xor)\b|[+\-*/=<>!]+/,
    builtin: /\b(columns|format|length|reverse|rows|stream_state)\b/,
    constant: /\b(std_input|std_output)\b/,
    other: /\b(as|by|returns)\b/,
    escapechars: /\\[nrt"\\]/,
    number: /\b\d+(?:\.\d+(?:[eE][+-]?\d+)?)?\b/,
    char: /'(?:\\.|[^'\\])'/,
    punctuation: /[.,;:(){}[\]]/
};
