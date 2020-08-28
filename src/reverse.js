
const vscode = require('vscode');

module.exports = {
    reverse: function () {

        const editor = vscode.window.activeTextEditor;

        if (editor) {
            const document = editor.document;
            const selection = editor.selection;

            // Get the word within the selection
            const word = document.getText(selection);
            const reversed = word.split('').reverse().join('');
           
            editor.edit(editBuilder => {
                editBuilder.replace(selection, reversed);
            });
        }



    }
}


