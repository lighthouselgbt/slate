# Organizations

## organizations#index

> Example response:

```json
{
	"organizations": [
		{
			"id": 2,
			"owner_id": 405,
			"owner_name": "org orgerson",
			"owner_email": "urosdgr1.ybd@20mm.eu",
			"name": "borg org",
			"stripe_test_env": true,
			"stripe_card": "card_1BnI7DL0CoCX00NbIKFENdat",
			"stripe_customer": "cus_CBfSHz9Tp0u8Im",
			"stripe_subscription": "sub_CBfSBIXiINdg2E",
			"plan_id": 4,
			"plan_frequency": "monthly",
			"plan_slots": 50,
			"plan_slots_filled": 12,
			"plan_amount_per_slot": 4900,
			"plan_grace_period": 0
		}
	],
	"meta": {
		"total_entries": 1,
		"current_page": 1,
		"total_pages": 1
	}
}
```

List all organizations.
### HTTP request
`GET https://lighthouse.lgbt/api/v1/organizations`

Parameter | Description
--------- | -----------
page* | Page of results
per_page* | Results per page
order_row | Sorting field. Can be `name`, `plan_slots`, or `joined_at`. Defaults to name
order | Sorting direction. Can be `asc` or `desc`. Defaults to ascending
q | Search organizations across all fields

## organizations#show

> Example response:

```json
{
	"organization": {
		"id": 2,
		"owner_id": 405,
		"owner_name": "org orgerson",
		"owner_email": "urosdgr1.ybd@20mm.eu",
		"name": "borg org",
		"stripe_test_env": true,
		"stripe_card": "card_1BnI7DL0CoCX00NbIKFENdat",
		"stripe_customer": "cus_CBfSHz9Tp0u8Im",
		"stripe_subscription": "sub_CBfSBIXiINdg2E",
		"plan_id": 4,
		"plan_frequency": "monthly",
		"plan_slots": 50,
		"plan_slots_filled": 12,
		"plan_amount_per_slot": 4900,
		"plan_grace_period": 0
	}
}
```

Retrieve an organization.
### HTTP request
`GET https://lighthouse.lgbt/api/v1/organizations/:id`

## organizations#update

> Example response:

```json
{
	"resp": {
		"status": "success",
		"message": "Organization profile updated successfully."
	}
}
```

Update an organization.
### HTTP request
`PATCH https://lighthouse.lgbt/api/v1/organizations/:id`
`PUT https://lighthouse.lgbt/api/v1/organizations/:id`

Parameter | Description
--------- | -----------
name |
plan_slots | Number of providers allowed in organization
plan_amount_per_slot | Stripe subscription price per provider slot

## organizations#destroy
Delete an organization.
### HTTP request
`DELETE https://lighthouse.lgbt/api/v1/organizations/:id`

## get_min_organization

> Example response:

```json
{
	"organization": {
		"id": 2,
		"name": "borg org"
	}
}
```

Retrieve an organization's basic attributes.
### HTTP request
`GET https://lighthouse.lgbt/api/v1/get_min_organization/:id`

## show_mine

> Example response:

```json
{
	"organization": {
		"id": 2,
		"owner_id": 405,
		"owner_name": "org orgerson",
		"owner_email": "urosdgr1.ybd@20mm.eu",
		"name": "borg org",
		"stripe_test_env": true,
		"stripe_card": "card_1BnI7DL0CoCX00NbIKFENdat",
		"stripe_customer": "cus_CBfSHz9Tp0u8Im",
		"stripe_subscription": "sub_CBfSBIXiINdg2E",
		"plan_id": 4,
		"plan_frequency": "monthly",
		"plan_slots": 50,
		"plan_slots_filled": 12,
		"plan_amount_per_slot": 4900,
		"plan_grace_period": 0
	}
}
```

Retrieve the current user's organization.
### HTTP request
`GET https://lighthouse.lgbt/api/v1/organization`

## add_professional

> Example response:

```json
{
	"resp": {
		"status": "success",
		"message": "Professional added to organization."
	}
}
```

Create a user within the current user's organization and an associated provider and send an email invitation to the user.
### HTTP request
`POST https://lighthouse.lgbt/api/v1/organization/add`

Parameter | Description
--------- | -----------
professional.name* |
professional.last_name* |
professional.email* |
professional.phone* |
professional.additional_email |
professional.call_only | Defaults to `false`

## members

> Example response:

```json
{
	"professionals": [
		{
			"id": 396,
			"organization_id": 2,
			"name": "hfasdlgi",
			"last_name": "dsjagl",
			"professional_title": "im a computer",
			"created_at": "2018-01-23T03:10:54.033Z",
			"status": "Active",
			"publish_profile": true
		}
  ]
}
```

List the providers associated with users within an organization.
### HTTP request
`GET https://lighthouse.lgbt/api/v1/organizations/:id/members`

Parameter | Description
--------- | -----------
order_row | Sorting field. Can be `last_name`, `professional_title`, or `created_at`. Defaults to chaos
order | Sorting direction. Can be `asc` or `desc`. Defaults to ascending

## organizations#register_credit_card

> Example response:

```json
{
	"resp": {
		"status": "success",
		"message": "Credit card registered successfully."
	}
}
```

Create a Stripe card (and customer, if necessary) for an organization.
### HTTP request
`POST https://lighthouse.lgbt/api/v1/organizations/:id/register_credit_card`

Parameter | Description
--------- | -----------
organization.cc_token* | Stripe card token

## organizations#subscribe_to_plan

> Example response:

```json
{
	"resp": {
		"status": "success",
		"message": "Subscription success"
	}
}
```

Subscribe an organization to a Stripe plan.
### HTTP request
`POST https://lighthouse.lgbt/api/v1/organizations/:id/subscribe_to_plan`

Parameter | Description
--------- | -----------
plan_term | Can be `month` or `year`

## organizations#cancel_subscription

> Example response:

```json
{
	"resp": {
		"status": "success",
		"message": "Cancelled subscription."
	}
}
```

End an organization's Stripe subscription after the current billing period.
### HTTP request
`PUT https://lighthouse.lgbt/api/v1/organizations/:id/cancel_subscription`

## organizations#payment_history

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

Retrieve an organization's Stripe billing history.
### HTTP request
`GET https://lighthouse.lgbt/api/v1/organizations/:id/payment_history`

## organizations#get_account_information

> Example response:

```json
{
	"organization": {
		"id": 2,
    "owner_id": 405,
		"email": "urosdgr1.ybd@20mm.eu"
	}
}
```

Retrieve an organization owner's account information.
### HTTP request
`GET https://lighthouse.lgbt/api/v1/organizations/:id/get_account_information`

## organizations#get_payment_information

> Example response:

```json
{
	"organization": {
		"id": 2,
    "owner_id": 405,
		"email": "urosdgr1.ybd@20mm.eu",
    "stripe_customer": "cus_CBfSHz9Tp0u8Im",
    "stripe_subscription": "sub_CBfSBIXiINdg2E",
    "stripe_card": "card_1BnI7DL0CoCX00NbIKFENdat",
    "plan_id": 4,
    "plan_slots": 50,
    "plan_amount_per_slot": 4900,
    "plan_grace_period": 0,
    "plan_term": "month",
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

Retrieve an organization's payment information.
### HTTP request
`GET https://lighthouse.lgbt/api/v1/organizations/:id/get_payment_information`
