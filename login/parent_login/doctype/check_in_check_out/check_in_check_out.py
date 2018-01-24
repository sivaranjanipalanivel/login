# -*- coding: utf-8 -*-
# Copyright (c) 2018, valiantsystems and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class CheckInCheckOut(Document):
	pass

@frappe.whitelist()
def getcheckin(child):
	datas=frappe.db.sql("""SELECT header FROM `tabCheck In Check Out` WHERE child_id=%s limit 1""",(child))
	return datas