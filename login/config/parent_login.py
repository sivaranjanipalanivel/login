from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		{
			"label": _("Parent"),
			"items": [
			{
					"type": "doctype",
					"name": "Check In Check Out"
				},
            ]
		},
	]

