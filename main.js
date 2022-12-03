var editor;

var value = ''
var language = "lua"
var theme = "vs-dark"

require(["./vs/editor/editor.main"], () => {
    monaco.languages.registerCompletionItemProvider(language, {
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