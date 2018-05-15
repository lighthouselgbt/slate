# Users

## show

> Example response:

```json
{
	"user": {
		"id": 363,
		"name": "Imogen",
		"last_name": "Olsen",
		"email": "im@imogen.fyi",
		"phone": "2063989614"
	}
}
```

Retrieve a user.
### HTTP request
`GET https://lighthouse.lgbt/api/v1/users/:id`

## update
Update a user.
### HTTP request
`PUT https://lighthouse.lgbt/api/v1/users/:id`

Parameter | Description
--------- | -----------
user.name |
user.last_name |
user.email |
user.phone |
user.password |

## upload_profile_photo

> Example response:

```json
{
	"resp": {
		"status": "success",
		"message": "Profile photo updated successfully.",
		"avatar": {
			"url": "https://s3.amazonaws.com/lighthousedev.lgbt/app/images/profile/photos/363/Screen_Shot_2018-02-09_at_9.38.42_AM.png",
			"thumb": {
				"url": "https://s3.amazonaws.com/lighthousedev.lgbt/app/images/profile/photos/363/thumb_Screen_Shot_2018-02-09_at_9.38.42_AM.png"
			},
			"small_thumb": {
				"url": "https://s3.amazonaws.com/lighthousedev.lgbt/app/images/profile/photos/363/small_thumb_Screen_Shot_2018-02-09_at_9.38.42_AM.png"
			}
		}
	}
}
```

Update a user's profile photo.
### HTTP request
`PUT https://lighthouse.lgbt/api/v1/upload_profile_photo`

Parameter | Description
--------- | -----------
file* | Image URL

## send_information_to_reset_password

> Example response:

```json
{
	"resp": {
		"status": "success",
		"message": "Password reset instructions sent"
	}
}
```

Send an email to a user with instructions to reset their password.
### HTTP request
`POST https://lighthouse.lgbt/api/v1/send_information_to_reset_password`

Parameter | Description
--------- | -----------
email* | User's email address

## change_password

> Example response:

```json
{
	"resp": {
		"status": "success",
		"message": "password changed successfully"
	}
}
```

Update a user's password (one-time use, intended for signup)
### HTTP request
`POST https://lighthouse.lgbt/api/v1/change_password`

Parameter | Description
--------- | -----------
email* | User's email address
new_password* |
password_confirmation* | Must match `new_password`
