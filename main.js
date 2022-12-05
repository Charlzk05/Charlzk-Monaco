var editor;

var value = ''
var language = "cpp"
var theme = "vs-dark"

require(["./vs/editor/editor.main"], () => {
    monaco.languages.registerCompletionItemProvider("python", {
        provideCompletionItems: function (model, position) {
            var word = model.getWordUntilPosition(position);
            var range = {
                startLineNumber: position.lineNumber,
                endLineNumber: position.lineNumber,
                startColumn: word.startColumn,
                endColumn: word.endColumn
            };
            return {
                suggestions: python(range)
            };
        }
    });

    monaco.languages.registerCompletionItemProvider("lua", {
        provideCompletionItems: function (model, position) {
            var word = model.getWordUntilPosition(position);
            var range = {
                startLineNumber: position.lineNumber,
                endLineNumber: position.lineNumber,
                startColumn: word.startColumn,
                endColumn: word.endColumn
            };
            return {
                suggestions: lua(range)
            };
        }
    });

    monaco.languages.registerCompletionItemProvider("csharp", {
        provideCompletionItems: function (model, position) {
            var word = model.getWordUntilPosition(position);
            var range = {
                startLineNumber: position.lineNumber,
                endLineNumber: position.lineNumber,
                startColumn: word.startColumn,
                endColumn: word.endColumn
            };
            return {
                suggestions: csharp(range)
            };
        }
    });

    monaco.languages.registerCompletionItemProvider("cpp", {
        provideCompletionItems: function (model, position) {
            var word = model.getWordUntilPosition(position);
            var range = {
                startLineNumber: position.lineNumber,
                endLineNumber: position.lineNumber,
                startColumn: word.startColumn,
                endColumn: word.endColumn
            };
            return {
                suggestions: cpp(range)
            };
        }
    });

    editor = monaco.editor.create(document.getElementById("container"), {
        value: value,
        language: language,
        theme: theme,
        automaticLayout: true
    });
});

function getValue() {
    return editor.getValue();
}

function setValue(content) {
    editor.setValue(content);
}