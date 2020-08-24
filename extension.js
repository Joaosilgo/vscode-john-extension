// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');




// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "john-extension" is now active! 🔥');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	
	let disposable = vscode.commands.registerCommand('john-extension.helloWorld', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from john-extension! 🔥');
		console.log('Hello World from john-extension! 🔥');
		//var vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
		//vscode.window.showQuickPick(vegetables);
		vscode.window.showWarningMessage('WARNING');
        vscode.window.showErrorMessage('ERROR');
        vscode.scm.createSourceControl( 'git', 'Git');
		
   

    });
    context.subscriptions.push(disposable);


     let show = vscode.commands.registerCommand('john-extension.show', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage(' john-extension.show! 🚀');
		console.log('Show! 🚀');
		var vegetables = ['Party', 'Hardcore', 'Ludacris', 'Peace'];
		vscode.window.showQuickPick(vegetables).then(
            function(value) {
                
            console.log(value); // Success!
            vscode.window.showInformationMessage('It`s '+ value + ' Time ⚡' );
          }, function(value) {
            console.log(value + 'Value 😭'); // Error!
          });;
		
		
   

	});

    context.subscriptions.push(show);


	let coffee = vscode.commands.registerCommand('john-extension.coffee', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage(' john-extension.coffee! ☕');
		console.log('coffee!☕');
		
		const panel = vscode.window.createWebviewPanel(
			'coffee',
			'Coffee Time ☕',
			vscode.ViewColumn.One,
			{}
		  );
	
		  // And set its HTML content
		  panel.webview.html = getWebviewContent();
		
		
   

	});


	
	function getWebviewContent() {
		return `<!DOCTYPE html>
	  <html lang="en">
	  <head>
		  <meta charset="UTF-8">
		  <meta name="viewport" content="width=device-width, initial-scale=1.0">
		  <title> Coffee Time ☕ </title>
	  </head>
	  <body>
	  <style>
	  .center {
		display: block;
		margin-left: auto;
		margin-right: auto;
		width: 50%;
	  }
	  body {
		text-align: center;
	  }
	
	  </style>
	  <h1>It´s Coffee Time</h1>
		  <img src="https://i.imgur.com/SshpXa4.gif" class="center"  />
	  </body>
	  </html>`;
	  }


 
	  context.subscriptions.push(coffee);




    
   

}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
