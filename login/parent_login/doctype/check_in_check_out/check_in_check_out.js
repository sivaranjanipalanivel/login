// Copyright (c) 2018, valiantsystems and contributors
// For license information, please see license.txt

frappe.ui.form.on('Check In Check Out', {
	onload: function(frm) {
	frm.set_value("user", frappe.session.user);
    frm.set_value("header", "Check In");
	
	},
	after_save: function(frm) {
		 frm.set_df_property("child_id", "read_only", frm.doc.__islocal ? 0 : 1);
		frappe.set_route("List", "Check In Check Out");		
			},
});

frappe.ui.form.on("Check In Check Out", "child_id", function(frm, cdt, cdn) {
	 frappe.call({
                method: "login.parent_login.doctype.check_in_check_out.check_in_check_out.getcheckin",
                args: {
                   child: frm.doc.child_id,
                   },
                callback: function (r) 
                  {
      if(r.message.length > 0){
  if(r.message[0] == "Check In"){
      frm.set_value("header", "Check Out");
              } 
              else{
       frm.set_value("header", "Check In");
              } 
          }
          // else{
          // 	frm.set_value("header", "Check In");
          // }
                 }
          })
});

frappe.ui.form.on("Check In Check Out", "validate", function(frm) {
        if (frm.doc.child_id.length != 7 ) {
             frappe.msgprint(__("Child is incorrect!"));
          validated = false;
        }
     });
