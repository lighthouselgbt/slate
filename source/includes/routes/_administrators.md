# Administrators

## administrators#index
List all administrators.
### HTTP request
`GET https://lighthouse.lgbt/api/v1/administrators`

Parameter | Description
--------- | -----------
page* | Page of results
per_page* | Results per page
order_row | Sorting field. Can be `last_name`, `email`, or `created_at`. Defaults to last name
order | Sorting direction. Can be `asc` or `desc`. Defaults to ascending
q | Search administrators across their and their associated users' fields

## administrators#create
Create an administrator.
### HTTP request
`POST https://lighthouse.lgbt/api/v1/administrators`

Parameter | Description
--------- | -----------
administrator.super_administrator | Allow administrator to create admins and view analytics & inquiries
administrator.user_attributes.name* |
administrator.user_attributes.last_name* |
administrator.user_attributes.email* |
administrator.user_attributes.phone* |
administrator.user_attributes.password |

## administrators#show

> Example response:

```json
{
	"administrator": {
		"id": 11,
		"user_id": 363,
		"name": "Imogen",
		"last_name": "Olsen",
		"email": "im@imogen.fyi",
		"phone": "2063989614",
		"super_administrator": true,
		"created_at": "2017-11-22T17:10:51.374Z",
		"thumb_url": null
	}
}
```

Retrieve an administrator.
### HTTP request
`GET https://lighthouse.lgbt/api/v1/administrators/:id`

## administrators#update

> Example response:

```json
{
	"resp": {
		"status": "success",
		"message": "Administrator has been updated successfully."
	}
}
```

Update an administrator.
### HTTP request
`PATCH https://lighthouse.lgbt/api/v1/administrators/:id`
`PUT https://lighthouse.lgbt/api/v1/administrators/:id`

Parameter | Description
--------- | -----------
administrator.super_administrator | Allow administrator to create admins and view analytics & inquiries
administrator.user_attributes.name |
administrator.user_attributes.last_name |
administrator.user_attributes.email |
administrator.user_attributes.phone |
administrator.user_attributes.password |

## administrators#destroy

> Example response:

```json
{
	"resp": {
		"status": "success",
		"message": "Administrator data has been destroyed successfully."
	}
}
```

Delete an administrator.
### HTTP request
`DELETE https://lighthouse.lgbt/api/v1/administrators/:id`

## get_log_in_data_admin

> Example response:

```json
{
	"administrator": {
		"id": 11,
		"super_administrator": true
	}
}
```

Retrieve an administrator's superadmin status.
### HTTP request
`GET https://lighthouse.lgbt/api/v1/get_log_in_data_admin`
