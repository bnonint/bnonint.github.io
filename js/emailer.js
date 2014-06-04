/* global $,document,console,Parse */
$(document).ready(function() {
	
	var parseAPPID = "FpWkB0EA12iHbfMRr6Nsg6u6UP4hG1VriO5ZPbI5";
	var parseJSID = "DInTDT03h8QcTmH7YJI9NwNccyJhZVfSo5kcTtVQ";
	
	Parse.initialize(parseAPPID, parseJSID);
	var CommentObject = Parse.Object.extend("CommentObject");
	
	$("#contact-form").on("submit", function(e) {
		e.preventDefault();

		console.log("Handling the submit");
		//add error handling here
		
		//gather the form data
		var data = {};
		data.name = $("#fnamecon").val() + ' ' + $("#lnamecon").val();
		data.company = $("#companycon").val();
		data.comments = $("#commentcon").val();
		data.address = $("#addresscon").val();
		data.phone = $("#phonecon").val();
		data.qty = $("#qtycon").val();
		data.email = $("#emailcon").val();

		var comment = new CommentObject();
		comment.save(data, {
			success:function() {
				console.log("Success");
				//Alerts are lame - but quick and easy
				alert("Thanks for filling the form!");
			},
			error:function(e) {
				console.dir(e);
			}
		});
		
	});
	
});