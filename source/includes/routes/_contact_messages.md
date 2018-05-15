# Contact messages
<aside class="notice">
Contact messages have been replaced by **inquiries.**
</aside>

## contact_messages#index

> Example response:

```json
{
	"contact_messages": [
		{
			"id": 1044,
			"professional_id": 33,
			"name": "Bravo",
			"last_name": "-",
			"message": "Hi Jor-El, I'm a transgender masculine of center Latinx looking for a counselor who can see me past 6:30pm. Are you accepting new clients at this time for that time slot? I also have Blue Cross Blue Shield as my insurance. Please let me know if you need more information from me.",
			"subject": "Accepting new clients?",
			"professional_name": "Jor-El",
			"professional_last_name": "Caraballo",
			"phone": "3057337080",
			"email": "bravosophia1@gmail.com",
			"created_at": "2018-02-06T16:07:40.064Z"
		}
	],
	"meta": {
		"total_entries": 1,
		"current_page": 1,
		"total_pages": 1
	}
}
```

List all contact messages.
### HTTP request
`GET https://lighthouse.lgbt/api/v1/contact_messages`

Parameter | Description
--------- | -----------
page* | Page of results
per_page* | Results per page
order_row | Sorting field. Can be `professional_name` or `created_at`. Defaults to patient last name
order | Sorting direction. Can be `asc` or `desc`. Defaults to ascending
q | Search by inquiry and user with [ransack](https://github.com/activerecord-hackery/ransack)

## contact_messages#show

> Example response:

```json
{
	"contact_message": {
		"id": 1044,
		"professional_id": 33,
		"name": "Bravo",
		"last_name": "-",
		"message": "Hi Jor-El, I'm a transgender masculine of center Latinx looking for a counselor who can see me past 6:30pm. Are you accepting new clients at this time for that time slot? I also have Blue Cross Blue Shield as my insurance. Please let me know if you need more information from me.",
		"subject": "Accepting new clients?",
		"professional_name": "Jor-El",
		"professional_last_name": "Caraballo",
		"phone": "3057337080",
		"email": "bravosophia1@gmail.com",
		"created_at": "2018-02-06T16:07:40.064Z"
	},
	"meta": {
		"total_entries": 1,
		"current_page": 1,
		"total_pages": 1
	}
}
```

Retrieve a contact message.
### HTTP request
`GET https://lighthouse.lgbt/api/v1/contact_messages/:id`
