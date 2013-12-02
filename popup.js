// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Global variable containing the query we'd like to pass to Flickr. In this
 * case, kittens!
 *
 */
var passwordField = null;
var keyField = null;

function myFunction()
{
	var toEncrypt = passwordField.value;
	var key = keyField.value;
	var encrypted = {};

//	var var1 = '{"cols": [{"i" ....... 66}]}';
//	var result = JSON.parse(var1);
//	console.dir(result);

	console.log("Text to encrypt: " + toEncrypt);
	encrypted = sjcl.encrypt(key, toEncrypt);
//	console.log("Encrypted text: " + encrypted);
	var result = JSON.parse(encrypted);
	console.log(result.ct);
	var decrypted = sjcl.decrypt(key, encrypted);
	console.log("Decrypted text: " + decrypted);
}

document.addEventListener('DOMContentLoaded', function () {

	passwordField = document.getElementById("password");
	keyField = document.getElementById("key");

	document.getElementById("button").onclick = function()
	{
		myFunction();
	}

	passwordField.onkeypress = function(e)
	{
		if(e.keyCode == 13)
		{
			if(keyField.value !== '' && passwordField.value !== '')
			{
				myFunction();		
			}
		}
	}

	keyField.onkeypress = function(e)
	{
		if(e.keyCode == 13)
		{
			if(keyField.value !== '' && passwordField.value !== '')
			{
				myFunction();
			}
		}
	}
});
