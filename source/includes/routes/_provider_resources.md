# Provider resources

## get_selectable_degree_list

> Example response:

```json
{
	"degrees": [
		{
			"id": 26,
			"name": "ANP"
		}
  ]
}
```

List degrees.
### HTTP request
`GET https://lighthouse.lgbt/api/v1/get_selectable_degree_list`

Parameter | Description
--------- | -----------
q | Search with [ransack](https://github.com/activerecord-hackery/ransack)

## get_selectable_health_profession_list

> Example response:

```json
{
	"health_professions": [
		{
			"id": 8,
			"name": "Acupuncturist",
			"profession_type": "professional"
		}
  ]
}
```

List health professions.
### HTTP request
`GET https://lighthouse.lgbt/api/v1/get_selectable_health_profession_list`

Parameter | Description
--------- | -----------
q | Search with [ransack](https://github.com/activerecord-hackery/ransack)

## get_selectable_service_list

> Example response:

```json
{
	"services": [
		{
			"id": 1,
			"name": "Couples / Family Therapy",
			"type_service_name": "Mental Health"
		}
  ]
}
```

List services.
### HTTP request
`GET https://lighthouse.lgbt/api/v1/get_selectable_service_list`

Parameter | Description
--------- | -----------
q | Search with [ransack](https://github.com/activerecord-hackery/ransack)

## get_selectable_specialty_list

> Example response:

```json
{
	"specialties": [
		{
			"id": 1,
			"name": "Aromantic",
			"type_specialty_name": "Sexual Orientation"
		}
  ]
}
```

List specialties.
### HTTP request
`GET https://lighthouse.lgbt/api/v1/get_selectable_specialty_list`

Parameter | Description
--------- | -----------
q | Search with [ransack](https://github.com/activerecord-hackery/ransack)

## get_selectable_insurance_list

> Example response:

```json
{
	"insurances": [
		{
			"id": 9,
			"name": "1199",
			"display": true
		}
  ]
}
```

List insurances.
### HTTP request
`GET https://lighthouse.lgbt/api/v1/get_selectable_insurance_list`

Parameter | Description
--------- | -----------
q | Search with [ransack](https://github.com/activerecord-hackery/ransack)

## get_selectable_language_list

> Example response:

```json
{
	"languages": [
		{
			"id": 1,
			"name": "English"
		}
  ]
}
```

List languages.
### HTTP request
`GET https://lighthouse.lgbt/api/v1/get_selectable_language_list`

Parameter | Description
--------- | -----------
q | Search with [ransack](https://github.com/activerecord-hackery/ransack)
