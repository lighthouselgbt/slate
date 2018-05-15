# Reviews

## reviews#index

> Example response:

```json
{
	"reviews": [
		{
			"id": 14,
			"name": "Josh",
			"last_name": "A",
			"email": "joshalex1@icloud.com",
			"score": 5,
			"comment": "I had a great experience with Dr.Benet. I found him warm, caring, enthusiastic and very approachable. He guided me through some issues I was experiencing in my relationship  and understood the pressures of being gay in NYC. He was highly professional and very knowledgeable.",
			"status": "Approved",
			"appointment_date": "2017-11-06",
			"review_date": "2017-11-07",
			"info_message": null,
			"created_at": "2017-11-07T20:59:31.815Z",
			"hide_name": false,
			"request_by_professional": false,
			"professional": {
				"id": 110,
				"name": "Benet",
				"last_name": "Hennessey",
				"practice": "Citron Hennessey Private Therapy",
				"professional_title": "Partner",
				"gender": "Cis man",
				"sexual_orientation": "Gay",
				"url": "https://s3.amazonaws.com/lighthousedev.lgbt/app/images/profile/photos/114/head_1..JPG",
				"health_profession": {
					"id": 1,
					"name": "Psychotherapist",
					"created_at": "2017-10-25T04:02:10.790Z",
					"updated_at": "2017-10-25T04:02:10.790Z",
					"profession_type": "therapist",
					"tsv": "'psychotherapist':1B"
				},
				"degrees": [
					{
						"id": 14,
						"name": "LMHC",
						"created_at": "2017-10-25T04:02:11.356Z",
						"updated_at": "2017-10-25T04:02:11.356Z",
						"tsv": "'lmhc':1C"
					}
				]
			}
		}
  ]
}
```

List all reviews.
### HTTP request
`GET https://lighthouse.lgbt/api/v1/reviews`

Parameter | Description
--------- | -----------
page* | Page of results
per_page* | Results per page
order_row | Sorting field. Can be `professional_name`, or `created_at`. Defaults to patient last name
order | Sorting direction. Can be `asc` or `desc`. Defaults to ascending
q | Search by review, professional, and user fields with [ransack](https://github.com/activerecord-hackery/ransack)

## reviews#create

> Example response:

```json
{
  "resp": {
    "status": "success",
    "message": "Please check your email to complete your review"
  }
}
```

Create a review and sends an email request to the patient.
### HTTP request
`POST https://lighthouse.lgbt/api/v1/reviews`

Parameter | Description
--------- | -----------
review.name* | Patient first name
review.last_name* | Patient last name
review.email* | Patient email
review.appointment_date | Date of last appointment
review.professional_id* |
review.review_date* |
review.request_by_professional | Did a provider request the review? Boolean
review.hide_name | Would the patient like anonymity on the provider's profile? Boolean, defaults to false

## reviews#show

> Example response:

```json
{
	"review": {
		"id": 14,
		"name": "Josh",
		"last_name": "A",
		"email": "joshalex1@icloud.com",
		"score": 5,
		"comment": "I had a great experience with Dr.Benet. I found him warm, caring, enthusiastic and very approachable. He guided me through some issues I was experiencing in my relationship  and understood the pressures of being gay in NYC. He was highly professional and very knowledgeable.",
		"status": "Approved",
		"appointment_date": "2017-11-06",
		"review_date": "2017-11-07",
		"info_message": null,
		"created_at": "2017-11-07T20:59:31.815Z",
		"hide_name": false,
		"request_by_professional": false,
		"professional": {
			"id": 110,
			"name": "Benet",
			"last_name": "Hennessey",
			"practice": "Citron Hennessey Private Therapy",
			"professional_title": "Partner",
			"gender": "Cis man",
			"sexual_orientation": "Gay",
			"url": "https://s3.amazonaws.com/lighthousedev.lgbt/app/images/profile/photos/114/head_1..JPG",
			"health_profession": {
				"id": 1,
				"name": "Psychotherapist",
				"created_at": "2017-10-25T04:02:10.790Z",
				"updated_at": "2017-10-25T04:02:10.790Z",
				"profession_type": "therapist",
				"tsv": "'psychotherapist':1B"
			},
			"degrees": [
				{
					"id": 14,
					"name": "LMHC",
					"created_at": "2017-10-25T04:02:11.356Z",
					"updated_at": "2017-10-25T04:02:11.356Z",
					"tsv": "'lmhc':1C"
				}
			]
		}
	}
}
```

Retrieve a review.
### HTTP request
`GET https://lighthouse.lgbt/api/v1/reviews/:id`

## track

> Example response:

```json
{
	"review": {
		"id": 25,
		"name": "test",
		"last_name": "test",
		"email": "dotbran@gmail.com",
		"score": null,
		"comment": null,
		"status": "Waiting",
		"appointment_date": null,
		"review_date": null,
		"info_message": null,
		"created_at": "2018-03-09T18:40:42.782Z",
		"hide_name": false,
		"request_by_professional": false,
		"professional": {
			"id": 109,
			"name": "Risa",
			"last_name": "Ravitz",
			"practice": "Hudson Spine & Pain Medicine",
			"professional_title": "M.D.",
			"gender": "Cis woman",
			"sexual_orientation": null,
			"url": "https://s3.amazonaws.com/lighthousedev.lgbt/app/images/profile/photos/113/FullSizeRender.jpg.png",
			"health_profession": {
				"id": 29,
				"name": "Neurologist",
				"created_at": "2017-10-25T04:02:11.027Z",
				"updated_at": "2017-10-25T04:02:11.027Z",
				"profession_type": "doctor",
				"tsv": "'neurologist':1B"
			},
			"degrees": [
				{
					"id": 1,
					"name": "MD",
					"created_at": "2017-10-25T04:02:11.247Z",
					"updated_at": "2017-10-25T04:02:11.247Z",
					"tsv": "'md':1C"
				}
			]
		}
	}
}
```

Retrieve a review with a UUID.
### HTTP request
`GET https://lighthouse.lgbt/api/v1/track`

Parameter | Description
--------- | -----------
id* |
tracking* | uuid (included in url sent to patient)

## reviews#destroy
Delete a review.
### HTTP request
`DELETE https://lighthouse.lgbt/api/v1/reviews/:id`

## make_review

> Example response:

```json
{
	"resp": {
		"status": "success",
		"message": "Request processed successfully.",
		"review": {
			"status": "Pending",
			"score": 5,
			"comment": "wow",
			"hide_name": false,
			"review_date": "2018-03-09",
			"id": 25,
			"name": "test",
			"last_name": "test",
			"email": "dotbran@gmail.com",
			"professional_id": 109,
			"tracking": "dec05320-04cb-44ea-82cc-c309ba71a53c",
			"appointment_date": null,
			"info_message": null,
			"request_by_professional": false,
			"reminders_sent": 0,
			"created_at": "2018-03-09T18:40:42.782Z",
			"updated_at": "2018-03-09T18:43:19.743Z"
		}
	}
}
```

Add content to a review, if status is `Waiting`.
### HTTP request
`PUT https://lighthouse.lgbt/api/v1/make_review`

Parameter | Description
--------- | -----------
review_id* |
score* | Integer 1–5
comment* | Review body
hide_name* | Would the patient like anonymity on the provider's profile? Boolean

## process_review

> Example response:

```json
{
	"resp": {
		"status": "success",
		"message": "Request processed successfully.",
		"review": {
			"status": "Approved",
			"info_message": null,
			"id": 25,
			"name": "test",
			"last_name": "test",
			"email": "dotbran@gmail.com",
			"professional_id": 109,
			"tracking": "dec05320-04cb-44ea-82cc-c309ba71a53c",
			"score": 5,
			"comment": "wow",
			"appointment_date": null,
			"review_date": "2018-03-09",
			"request_by_professional": false,
			"hide_name": false,
			"reminders_sent": 0,
			"created_at": "2018-03-09T18:40:42.782Z",
			"updated_at": "2018-03-09T18:44:01.664Z"
		}
	}
}
```

Approve or deny a review, and send an email to the patient if approved.
### HTTP request
`PUT https://lighthouse.lgbt/api/v1/process_review`

Parameter | Description
--------- | -----------
review_id* |
status* | Can be `Waiting`, `Pending`, `Approved`, or `Rejected`
info_message* | Status message for rejection

## send_reminder

> Example respone:

```json
{
	"resp": {
		"status": "success",
		"message": "The reminder was sent"
	}
}
```

Send an email reminding a patient to complete their review of a provider, up to twice per review.
### HTTP request
`PUT https://lighthouse.lgbt/api/v1/send_reminder`

Parameter | Description
--------- | -----------
review.id* |
