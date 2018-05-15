# Join requests

## join_requests#index

> Example response:

```json
{
  "join_requests": [
  	{
  		"id": 299,
  		"name": "Josh",
  		"last_name": "Alperin",
  		"email": "josh.alp@me.com",
  		"phone": "1234567890",
  		"organization_name": null,
  		"with_professional": true,
  		"professional_title": "md",
  		"status": "Approved",
  		"created_at": "2017-12-06T22:28:55.739Z"
  	}
  ],
  "meta": {
    "total_entries": 1,
    "current_page": 1,
    "total_pages": 1
  }
}
```

List all join requests.
### HTTP request
`GET https://lighthouse.lgbt/api/v1/join_requests`

## join_requests#create

> Example response:

```json
{
  "resp": {
  	"status": "success",
  	"message": "Your request has been received successfully."
  }
}
```

Create a join request.
### HTTP request
`POST https://lighthouse.lgbt/api/v1/join_requests`

Parameter | Description
--------- | -----------
join_request.name* |
join_request.last_name* |
join_request.email* |
join_request.phone* |
join_request.lgbtq_experience |
join_request.with_professional | Create provider if `true`, org if `false`
join_request.organization_name | with_professional should be `false`
join_request.professional_title | with_professional should be `true`
join_request.additional_email | with_professional should be `true`
join_request.certifications[_n_].name | with_professional should be `true`
join_request.positions_held[_n_].name | with_professional should be `true`
join_request.degrees[_n_].name | with_professional should be `true`

## join_requests#show

> Example response:

```json
{
	"join_request": {
		"id": 299,
		"name": "Josh",
		"last_name": "Alperin",
		"email": "josh.alp@me.com",
		"phone": "1234567890",
		"lgbtq_experience": "md",
		"organization_name": null,
		"with_professional": true,
		"degrees": null,
		"certifications": [
			{
				"name": "md"
			}
		],
		"positions_held": [
			{
				"name": "md"
			}
		],
		"professional_title": "md",
		"status": "Approved",
		"info_message": null,
		"additional_email": "josh.alp@me.com"
	}
}
```

Retrieve a join request.
### HTTP request
`GET https://lighthouse.lgbt/api/v1/join_requests/:id`

## process_request

> Example response:

```json
{
	"resp": {
		"status": "success",
		"message": "Request processed successfully.",
		"join_request": {
			"name": "test",
			"last_name": "girl",
			"email": "sjkdfb@20mail.eu",
			"phone": "9172312937",
			"with_professional": true,
			"lgbtq_experience": "hi",
			"certifications": [
				{
					"name": ""
				}
			],
			"positions_held": [
				{
					"name": ""
				}
			],
			"professional_title": "tester",
			"additional_email": "askldjask@20mail.eu",
			"organization_name": "",
			"status_change_date": "2018-03-08T22:44:35.494Z",
			"status": "Approved",
			"id": 335,
			"degrees": [
				{
					"name": "dds"
				}
			],
			"created_at": "2018-03-08T22:44:11.767Z",
			"updated_at": "2018-03-08T22:44:35.494Z",
			"administrator_id": null,
			"info_message": null
		}
	}
}
```

Approve or deny a join request, create a user if necessary, and send an email to the applicant.
### HTTP request
`PUT https://lighthouse.lgbt/api/v1/process_request`

Parameter | Description
--------- | -----------
join_request_id |
status | Can be `Pending`, `Approved`, or `Rejected`

## validate_email_phone

> Example response:

```json
{
  "resp": {
  	"status": "success"
  }
}
```

Validate fields and check for existing join requests under the applicant.
### HTTP request
`GET https://lighthouse.lgbt/api/v1/validate_email_phone`

Parameter | Description
--------- | -----------
email |
additional_email |
phone |
