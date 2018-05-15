# Inquiries

## inquiries#index

> Example response:

```json
{
	"inquiries": [
		{
			"id": 29,
			"professional": {
				"id": 391,
				"name": "onboard",
				"last_name": "tester",
				"full_name": "onboard tester",
				"status": "Active",
				"publish_profile": true
			},
			"professional_email_masked": "onboard-tester-x8t929@relay-test.lighthouse.lgbt",
			"patient": {
				"first_name": "kjfdhns",
				"last_name": "alsjfh",
				"full_name": "kjfdhns alsjfh",
				"pronouns": "she",
				"email": "dotbran@gmail.com",
				"email_masked": "kjfdhns-alsjfh-x8t929@relay-test.lighthouse.lgbt",
				"phone": 9087654323,
				"voicemail": true
			},
			"initial_message": "hi friend",
			"messages_count": 4,
			"created_at": "2018-02-13T19:07:06.967Z"
		}
	],
	"meta": {
		"total_entries": 1,
		"current_page": 1,
		"total_pages": 1
	}
}
```

List all inquiries.
### HTTP request
`GET https://lighthouse.lgbt/api/v1/inquiries`

Parameter | Description
--------- | -----------
page* | Page of results
per_page* | Results per page
order_row | Sorting field. Can be `professional_name` or `created_at`. Defaults to patient last name
order | Sorting direction. Can be `asc` or `desc`. Defaults to ascending
q | Search by inquiry and user with [ransack](https://github.com/activerecord-hackery/ransack)

## inquiries#create

> Example response:

```json
{
  "resp": {
    "status": "success",
    "message": "Your message has been sent successfully. Thank you for sending."
  }
}
```

Create an inquiry and start an email thread.
### HTTP request
`POST https://lighthouse.lgbt/api/v1/inquiries`

Parameter | Description
--------- | -----------
inquiry.professional_id* |
inquiry.patient_first_name* |
inquiry.patient_last_name* |
inquiry.patient_pronouns |
inquiry.patient_email* |
inquiry.patient_phone |
inquiry.patient_voicemail | Can the patient receive voicemail? Boolean, defaults to `false`
initial_message* | First message, from patient to provider

## inquiries#show

> Example response:

```json
{
  "inquiry": {
    "id": 29,
    "professional": {
      "id": 391,
      "name": "onboard",
      "last_name": "tester",
      "full_name": "onboard tester",
      "status": "Active",
      "publish_profile": true
    },
    "professional_email_masked": "onboard-tester-x8t929@relay-test.lighthouse.lgbt",
    "patient": {
      "first_name": "kjfdhns",
      "last_name": "alsjfh",
      "full_name": "kjfdhns alsjfh",
      "pronouns": "she",
      "email": "dotbran@gmail.com",
      "email_masked": "kjfdhns-alsjfh-x8t929@relay-test.lighthouse.lgbt",
      "phone": 9087654323,
      "voicemail": true
    },
    "initial_message": "hi friend",
    "messages_count": 4,
    "created_at": "2018-02-13T19:07:06.967Z"
  }
}
```

Retrieve an inquiry.
### HTTP request
`GET https://lighthouse.lgbt/api/v1/inquiries/:id`
