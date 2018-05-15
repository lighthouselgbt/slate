# Providers (professionals)

## professionals#index

> Example response:

```json
{
	"professionals": [
		{
			"id": 213,
			"organization_id": null,
			"name": "Jessica",
			"last_name": "Allen",
			"professional_title": "Cognitive Behavioral Therapist",
			"created_at": "2017-06-23T13:15:03.283Z",
			"status": "Active",
			"publish_profile": true
		}
  ],
	"meta": {
		"total_entries": 1,
		"current_page": 1,
		"total_pages": 1
	}
}
```

List all providers.
### HTTP request
`GET https://lighthouse.lgbt/api/v1/professionals`

Parameter | Description
--------- | -----------
page* | Page of results
per_page* | Results per page
order_row | Sorting field. Can be `last_name`, `professional_title`, or `created_at`. Defaults to last name
order | Sorting direction. Can be `asc` or `desc`. Defaults to ascending
q | Search by provider, user, health profession, service, and specialty with [ransack](https://github.com/activerecord-hackery/ransack)

## professionals#show

> Example response:

```json
{
	"professional": {
		"id": 213,
		"name": "Jessica",
		"last_name": "Allen",
		"email": "snauv@icloud.com",
		"call_only": true,
		"organization": null,
		"address": "125 E 23rd Street",
		"practice": "Collaborative CBT",
		"approach": "The mission at Collaborative CBT is to empower you to make changes in your life now to lead to lasting change ahead. You and your therapist will work as a team to set goals, solve problems, learn skills, and develop more adaptive ways of handling difficult situations.\n\nIt is important to provide you an evidence-based treatment approach to therapy so we know that we are helping you in the best way we can. We want to make sure that our work leads to changes so we use an approach called CBT that studies have found to be most effective. Cognitive Behavioral Therapy (CBT) addresses your unwanted thinking and behavior patterns head on. Learn more at our website: www.collaborativecbt.com",
		"certifications": [
			{
				"name": "Diplomate, Academy of Cognitive Therapy"
			},
			{
				"name": "Certified Therapist, Trial-Based Cognitive Therapy (TBCT)"
			}
		],
		"positions_held": [
			{
				"name": "Director"
			}
		],
		"city": "New York",
		"lgbtq_experience": "I started my work in the LGBTQ community at GMHC, providing counseling services to those who are HIV positive. I then worked at the Hetrick Martin Institute, an after school program for LGBTQ youth. I provided counseling, helped youth find housing and ran support groups for youth.\n\nI now own a group practice called Collaborative CBT. The practice specializes in cognitive behavioral therapy and the practice is LGBTQ and kink friendly. I believe strongly in the importance of a safe space and work closely with other providers who are part of the community. We approach therapy with an open mind and use curiosity to lead our work.",
		"price": "$$",
		"gender": "Cis woman",
		"distance": 2398.82,
		"sexual_orientation": "Queer",
		"telemedicine": true,
		"professional_title": "Cognitive Behavioral Therapist",
		"state": "NY",
		"zipcode": "10010",
		"website": null,
		"thumb_url": "https://s3.amazonaws.com/lighthousedev.lgbt/app/images/profile/photos/218/thumb_RCANTU_JessicaAllen_022417_011.jpg.png",
		"url": "https://s3.amazonaws.com/lighthousedev.lgbt/app/images/profile/photos/218/RCANTU_JessicaAllen_022417_011.jpg.png",
		"phone": "6466502026",
		"show_phone": true,
		"user_id": 218,
		"accept_terms": true,
		"publish_profile": true,
		"onboard_step": 10,
		"lacking_data": false,
		"status": "Active",
		"additional_email": "test@lighthouse.lgbt",
		"longitude": -73.9850807,
		"latitude": 40.7399188,
		"score": null,
		"health_profession_id": 1,
		"reviews": [],
		"stripe_card": "card_1BEjDBL0CoCX00NbmYt8JKyw",
		"stripe_customer": "cus_Bbx7RGZ13pn0Sd",
		"stripe_subscription": null,
		"plan_id": null,
		"health_profession": {
			"id": 1,
			"name": "Psychotherapist",
			"profession_type": "therapist"
		},
		"specialties": [
			{
				"id": 35,
				"name": "Attention / Concentration",
				"type_specialty_name": "Issue"
			}
		],
		"insurances": [
			{
				"id": 1,
				"name": "Out of Network Reimbursement",
				"display": true
			}
		],
		"services": [
			{
				"id": 1,
				"name": "Couples / Family Therapy",
				"type_service_name": "Mental Health"
			}
		],
		"languages": [
			{
				"id": 1,
				"name": "English"
			}
		],
		"degrees": [
			{
				"id": 12,
				"name": "LCSW"
			}
		],
		"addresses": [
			{
				"id": 220,
				"address": "125 E 23rd Street",
				"city": "New York",
				"state": "NY",
				"zipcode": "10010",
				"phone": "6466502026",
				"is_main": true,
				"latitude": 40.7399188,
				"longitude": -73.9850807,
				"distance": null
			}
		]
	},
	"meta": {
		"request_longitude": -122.20822115102864,
		"request_latitude": 47.30569896937125
	}
}
```

Retrieve a provider.
### HTTP request
`GET https://lighthouse.lgbt/api/v1/professionals/:id`

Parameter | Description
--------- | -----------
latitude |
longitude |

## professionals#destroy

> Example response:

```json
{
	"resp": {
		"status": "success",
		"message": "Professional deleted successfully."
	}
}
```

Delete a provider.
### HTTP request
`DELETE https://lighthouse.lgbt/api/v1/professionals/:id`

## list_professionals

> Example response:

```json
{
	"professionals": [
		{
			"id": 109,
			"name": "Risa",
			"last_name": "Ravitz",
			"url": "https://s3.amazonaws.com/lighthousedev.lgbt/app/images/profile/photos/113/FullSizeRender.jpg.png",
			"address": "281 Broadway",
			"city": "New York",
			"state": "NY",
			"zipcode": "10007",
			"longitude": -74.006366,
			"latitude": 40.7145348,
			"distance": 0.12,
			"score": null,
			"featured_comment": null,
			"health_profession": {
				"id": 29,
				"name": "Neurologist",
				"profession_type": "doctor"
			},
			"addresses": [
				{
					"id": 207,
					"address": "281 Broadway",
					"city": "New York",
					"state": "NY",
					"zipcode": "10007",
					"phone": "6465967386",
					"is_main": true,
					"latitude": 40.7145348,
					"longitude": -74.006366,
					"distance": null
				}
			],
			"degrees": [
				{
					"id": 1,
					"name": "MD"
				}
			]
		}
	],
	"meta": {
		"total_entries": 1,
		"current_page": 1,
		"total_pages": 1,
		"request_latitude": 40.712775,
		"request_longitude": -74.005973,
		"default_data": null,
		"default_data_zipcode": null
	}
}
```

Search providers.
### HTTP request
`GET https://lighthouse.lgbt/api/v1/list_professionals`

Parameter | Description
--------- | -----------
q.freetext_matches_any | Text search
q.gender_eq_any |
q.sexual_orientation_eq_any |
service_ids[] |
specialty_ids[] |
insurance_ids[] |
language_ids[] |
zipcode | User's location
latitude | User's location[lat]. Overrides zipcode
longitude | User's location[lat]. Overrides zipcode
page* | Page of results
per_page* | Results per page

## list_professionals_map

> Example response:

```json
{
	"professionals": [
		{
			"id": 315,
			"name": "Pia C.",
			"last_name": "Johnson",
			"url": "https://s3.amazonaws.com/lighthousedev.lgbt/app/images/profile/photos/323/DSCF4589.jpg1507482987979.png",
			"addresses": [
				{
					"id": 325,
					"address": "144 East 44th st",
					"city": "new york",
					"state": "ny",
					"zipcode": "10017",
					"phone": "9145102597",
					"is_main": true,
					"latitude": 40.7522507,
					"longitude": -73.9745201,
					"distance": null
				}
			],
			"degrees": [
				{
					"id": 13,
					"name": "LMSW"
				}
			],
			"health_profession": {
				"id": 1,
				"name": "Psychotherapist",
				"profession_type": "therapist"
			}
		}
  ],
	"meta": {
		"total_entries": 1,
		"request_latitude": -74.005973,
		"request_longitude": 40.712775,
		"default_data": false,
		"default_data_zipcode": false,
		"zipcode_latitude": 40.712775,
		"zipcode_longitude": -74.005973
	}
}
```

Search providers with additional location info.
### HTTP request
`GET https://lighthouse.lgbt/api/v1/list_professionals_map`

Parameter | Description
--------- | -----------
q.freetext_matches_any | Text search
q.gender_eq_any |
q.sexual_orientation_eq_any |
service_ids[] |
specialty_ids[] |
insurance_ids[] |
language_ids[] |
zipcode | User's location
latitude | User's location[lat]. Overrides zipcode
longitude | User's location[long]. Overrides zipcode

<aside class="notice">
`TODO` merge into **list_professionals**
</aside>

## update_contact_information

> Example reponse:

```json
{
	"resp": {
		"status": "success",
		"message": "Contact information updated successfully."
	}
}
```

Update a provider and its associated Stripe customer.
### HTTP request
`PUT https://lighthouse.lgbt/api/v1/update_contact_information/:id`

## update_profile_settings

> Example reponse:

```json
{
	"resp": {
		"status": "success",
		"pro_status": "Active",
		"pro_addresses": [
			{
				"id": 220,
				"professional_id": 213,
				"address": "125 E 23rd Street",
				"city": "New York",
				"state": "NY",
				"zipcode": "10010",
				"latitude": 40.7399188,
				"longitude": -73.9850807,
				"phone": "6466502026",
				"is_main": true,
				"created_at": "2017-06-23T13:31:02.297Z",
				"updated_at": "2017-06-23T13:31:02.297Z"
			}
		],
		"pro_health_profession": {
			"id": 1,
			"name": "Psychotherapist",
			"created_at": "2017-10-25T04:02:10.790Z",
			"updated_at": "2017-10-25T04:02:10.790Z",
			"profession_type": "therapist",
			"tsv": "'psychotherapist':1B"
		},
		"pro_degrees": [
			{
				"id": 12,
				"name": "LCSW",
				"created_at": "2017-10-25T04:02:11.341Z",
				"updated_at": "2017-10-25T04:02:11.341Z",
				"tsv": "'lcsw':1C"
			}
		],
		"message": "Profile settings updated successfully."
	}
}
```

Update a provider.
### HTTP request
`PUT https://lighthouse.lgbt/api/v1/update_profile_settings/:id`
<aside class="notice">
`TODO` merge into **update_contact_information**
</aside>

## professionals#register_credit_card

> Example response:

```json
{
	"resp": {
		"status": "success",
		"message": "Credit card registered successfully."
	}
}
```

Create a Stripe card (and customer, if necessary) for a provider.
### HTTP request
`POST https://lighthouse.lgbt/api/v1/register_credit_card/:id`

Parameter | Description
--------- | -----------
professional.cc_token* | Stripe card token

## professionals#subscribe_to_plan

> Example response:

```json
{
	"resp": {
		"status": "success",
		"message": "Subscription success"
	}
}
```

Subscribe a provider to a Stripe plan.
### HTTP request
`POST https://lighthouse.lgbt/api/v1/subscribe_to_plan/:id`

Parameter | Description
--------- | -----------
plan_id* | Can be `monthly-plan-live` or `annual-plan-live`
coupon_id | Formatted `LHC-[term]-[amount]OFF`. Term can be `1M`, `3M`, `6M`, or `1Y`. Amount can be `5`, `10`, `20`, `30`, or `49`

## add_coupon_to_plan

> Example response:

```json
{
	"resp": {
		"status": "success",
		"message": "Coupon successfully added"
	}
}
```

Add a coupon to a provider's Stripe subscription.
### HTTP request
`POST https://lighthouse.lgbt/api/v1/add_coupon_to_plan/:id`

Parameter | Description
--------- | -----------
coupon_id* | Formatted `LHC-[term]-[amount]OFF`. Term can be `1M`, `3M`, `6M`, or `1Y`. Amount can be `5`, `10`, `20`, `30`, or `49`

## professionals#cancel_subscription

> Example response:

```json
{
	"resp": {
		"status": "success",
		"message": "Cancelled subscription."
	}
}
```

End a provider's Stripe subscription after the current billing period.
### HTTP request
`PUT https://lighthouse.lgbt/api/v1/cancel_subscription/:id`

## professionals#payment_history

> Example response:

```json
{
  "object": "list",
  "url": "/v1/charges",
  "has_more": false,
  "data": [
    {
      "id": "ch_1C3WGWL0CoCX00NbmJRTyPEr",
      "object": "charge",
      "amount": 3300,
      "amount_refunded": 0,
      "application": null,
      "application_fee": null,
      "balance_transaction": "txn_1C39myL0CoCX00NbLzDv06Q0",
      "captured": true,
      "created": 1520544428,
      "currency": "usd",
      "customer": "cus_BVbfHLegIbOeWV",
      "description": null,
      "destination": null,
      "dispute": null,
      "failure_code": null,
      "failure_message": null,
      "fraud_details": {
      },
      "invoice": "in_1C3VKKL0CoCX00NboVUZXXgq",
      "livemode": false,
      "metadata": {
      },
      "on_behalf_of": null,
      "order": null,
      "outcome": {
        "network_status": "approved_by_network",
        "reason": null,
        "risk_level": "normal",
        "seller_message": "Payment complete.",
        "type": "authorized"
      },
      "paid": true,
      "receipt_email": null,
      "receipt_number": null,
      "refunded": false,
      "refunds": {
        "object": "list",
        "data": [

        ],
        "has_more": false,
        "total_count": 0,
        "url": "/v1/charges/ch_1C3WGWL0CoCX00NbmJRTyPEr/refunds"
      },
      "review": null,
      "shipping": null,
      "source": {
        "id": "card_1B8aS2L0CoCX00Nb91wVT9ze",
        "object": "card",
        "address_city": "New York",
        "address_country": "United States",
        "address_line1": "590 5th Ave",
        "address_line1_check": "pass",
        "address_line2": "",
        "address_state": "New York",
        "address_zip": "10001",
        "address_zip_check": "pass",
        "brand": "Visa",
        "country": "US",
        "customer": "cus_BVbfHLegIbOeWV",
        "cvc_check": null,
        "dynamic_last4": null,
        "exp_month": 10,
        "exp_year": 2019,
        "fingerprint": "pYZXaXA7zNOGIZ1i",
        "funding": "credit",
        "last4": "4242",
        "metadata": {
        },
        "name": "Bill Reynolds",
        "tokenization_method": null
      },
      "source_transfer": null,
      "statement_descriptor": "Professional Daily",
      "status": "succeeded",
      "transfer_group": null
    }
  ]
}
```

Retrieve a provider's Stripe billing history.
### HTTP request
`GET https://lighthouse.lgbt/api/v1/payment_history/:id`

## verify_coupon

> Example response:

```json
{
	"resp": {
		"status": "success",
		"message": "Coupon verified",
    "coupon": {
      "id": "LHC-1Y-49OFF",
      "percent_off": null,
      "amount_off": 4900,
      "valid": true,
      "duration": "once",
      "duration_in_months": 12
    }
	}
}
```

Validate a Stripe coupon.
### HTTP request
`GET https://lighthouse.lgbt/api/v1/verify_coupon`

Parameter | Description
--------- | -----------
coupon_id* | Formatted `LHC-[term]-[amount]OFF`. Should be valid if term is `1M`, `3M`, `6M`, or `1Y`, and amount is `5`, `10`, `20`, `30`, or `49`

## professionals#get_account_information

> Example response:

```json
{
	"professional": {
		"id": 213,
    "user_id": 218,
		"email": "snauv@icloud.com",
    "status": "Active",
    "additional_email": "test@lighthouse.lgbt",
    "call_only": false
	}
}
```

Retrieve a provider's account information.
### HTTP request
`GET https://lighthouse.lgbt/api/v1/get_account_information`

Parameter | Description
--------- | -----------
id* |

## get_payment_information

> Example response:

```json
{
	"professional": {
		"id": 213,
    "user_id": 218,
		"email": "snauv@icloud.com",
    "status": "Active",
    "stripe_customer": "cus_CBfSHz9Tp0u8Im",
    "stripe_subscription": "sub_CBfSBIXiINdg2E",
    "stripe_card": "card_1BnI7DL0CoCX00NbIKFENdat",
    "plan_id": 1,
    "last4": "4242",
    "name": "Bill Reynolds",
    "exp_month": 10,
    "exp_year": 2019,
    "brand": "Visa",
    "address_line1": "590 5th Ave",
    "address_line2": "",
    "address_line_state": "New York",
    "address_line_zip": "10001",
    "address_line_city": "New York",
    "address_line_country": "US",
    "subscription": {
      "id": "sub_CBugvHal7a4yfh",
      "object": "subscription",
      "application_fee_percent": null,
      "billing": "charge_automatically",
      "billing_cycle_anchor": 1516733446,
      "cancel_at_period_end": false,
      "canceled_at": null,
      "created": 1516733446,
      "current_period_end": 1521831046,
      "current_period_start": 1519411846,
      "customer": "cus_CBugl6JHEJGpPf",
      "days_until_due": null,
      "discount": null,
      "ended_at": null,
      "items": {
        "object": "list",
        "data": [
          {
            "id": "si_CBugRhRZzozmYg",
            "object": "subscription_item",
            "created": 1516733446,
            "metadata": {
            },
            "plan": {
              "id": "test-monthly-plan",
              "object": "plan",
              "amount": 4900,
              "created": 1507302078,
              "currency": "usd",
              "interval": "month",
              "interval_count": 1,
              "livemode": false,
              "metadata": {
              },
              "nickname": null,
              "product": "prod_BX1Mf7sb1MaPd3",
              "trial_period_days": null,
              "statement_descriptor": "Monthly Plan",
              "name": "Professional Monthly"
            },
            "quantity": 1,
            "subscription": "sub_CBugvHal7a4yfh"
          }
        ],
        "has_more": false,
        "total_count": 1,
        "url": "/v1/subscription_items?subscription=sub_CBugvHal7a4yfh"
      },
      "livemode": false,
      "metadata": {
      },
      "plan": {
        "id": "test-monthly-plan",
        "object": "plan",
        "amount": 4900,
        "created": 1507302078,
        "currency": "usd",
        "interval": "month",
        "interval_count": 1,
        "livemode": false,
        "metadata": {
        },
        "nickname": null,
        "product": "prod_BX1Mf7sb1MaPd3",
        "trial_period_days": null,
        "statement_descriptor": "Monthly Plan",
        "name": "Professional Monthly"
      },
      "quantity": 1,
      "start": 1516733446,
      "status": "active",
      "tax_percent": null,
      "trial_end": null,
      "trial_start": null
    }
	}
}
```

Retrieve a provider's payment information.
### HTTP request
`GET https://lighthouse.lgbt/api/v1/get_payment_information`

Parameter | Description
--------- | -----------
id* |

## activate_deactivate_professional

> Example response:

```json
{
	"resp": {
		"status": "success",
		"message": "Professional Activated successfully."
	}
}
```

Set a provider's status and cancel their Stripe subscription. after the current billing period if status is `Inactive`
### HTTP request
`PUT https://lighthouse.lgbt/api/v1/activate_deactivate_professional`
<aside class="notice">
`TODO` replace with **cancel_subscription** and **publish_unpublish_professional**
</aside>

Parameter | Description
--------- | -----------
id* |
status* | Can be `Active` or `Inactive`

## publish_unpublish_professional

> Example response:

```json
{
	"resp": {
		"status": "success",
		"message": "Profile Published Successfully."
	}
}
```

Add/remove a provider's to/from public view.
### HTTP request
`PUT https://lighthouse.lgbt/api/v1/publish_unpublish_professional`

Parameter | Description
--------- | -----------
id* |
publish_profile* | Boolean

## get_min_professional

> Example response:

```json
{
	"professional": {
		"id": 213,
		"name": "Jessica",
    "last_name": "Allen",
    "status": "Active",
    "publish_profile": true
	}
}
```

Retrieve a provider's basic attributes.
### HTTP request
`GET https://lighthouse.lgbt/api/v1/get_min_professional`

Parameter | Description
--------- | -----------
id* |

## list_non_provider_autocomplete_suggestions

> Example response:

```json
[{
	"name": "Psychotherapist"
}]
```

Search health professions, services, and specialties by name.
### HTTP request
`GET https://lighthouse.lgbt/api/v1/get_non_provider_autocomplete_suggestion_list`

## list_provider_autocomplete_suggestions

> Example response:

```json
{
	"professionals": [
		{
			"id": 74,
			"first_name": "Jesse",
			"last_name": "Kahn",
			"name": "Jesse Kahn",
			"city": "New York",
			"state": "NY",
			"avatar": "https://s3.amazonaws.com/lighthousedev.lgbt/app/images/profile/photos/78/small_thumb_JESSE_MAINEDIT04_copy_1_.jpg",
			"degrees": [
				{
					"id": 12,
					"name": "LCSW",
					"created_at": "2017-10-25T04:02:11.341Z",
					"updated_at": "2017-10-25T04:02:11.341Z",
					"tsv": "'lcsw':1C"
				}
			],
			"health_profession": {
				"id": 1,
				"name": "Psychotherapist",
				"profession_type": "therapist"
			}
		}
	]
}
```

Search providers by name.
### HTTP request
`GET https://lighthouse.lgbt/api/v1/get_provider_autocomplete_suggestion_list`

Parameter | Description
--------- | -----------
full_name* |

## get_lacking_data

> Example response:

```json
{
	"lacking_data": false
}
```

Check if a provider is missing any information required for publishing
### HTTP request
`GET https://lighthouse.lgbt/api/v1/get_lacking_data`
<aside class="warning">
This endpoint is prone to inaccuracy, as `lacking_data` is currently determined on the front end. `TODO` fix that
</aside>

Parameter | Description
--------- | -----------
id*|

## get_log_in_data

> Example response:

```json
{
  "professional": {
    "id": 213,
  	"health_profession_id": 29
  }
}
```

Retrieve a provider's health profession ID.
### HTTP request
`GET https://lighthouse.lgbt/api/v1/get_log_in_data`
<aside class="notice">
I don't know either
</aside>

Parameter | Description
--------- | -----------
id* |
