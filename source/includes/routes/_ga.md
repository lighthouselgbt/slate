# Google Analytics

## site_visits

> Example response:

```json
{
	"rows": [
		[
			"20180309",
			"108",
			"100",
			"75",
			"8646.0",
			"80.05555555555556"
		]
	],
	"total_results": 1,
	"total_all_results": {
		"ga:sessions": "108",
		"ga:users": "100",
		"ga:newUsers": "75",
		"ga:sessionDuration": "8646.0",
		"ga:avgSessionDuration": "80.05555555555556"
	}
}
```

### HTTP request
`GET https://lighthouse.lgbt/api/v1/site_visits`

Parameter | Description
--------- | -----------
start_date | Defaults to today
end_date | Defaults to today
page* | Page of results
per_page* | Results per page

## page_visits

> Example response:

```json
{
	"rows": [
		[
			"/",
			"Find LGBTQ Doctors and Therapists | Lighthouse LGBT",
			"154"
		]
	],
	"total_results": 1,
	"total_all_results": {
		"ga:pageviews": "154"
	}
}
```

### HTTP request
`GET https://lighthouse.lgbt/api/v1/page_visits`

Parameter | Description
--------- | -----------
user_path | Relative URL. Defaults to `/`
start_date | Defaults to today
end_date | Defaults to today
page* | Page of results
per_page* | Results per page

## button_clicks

> Example response:

```json
{
	"rows": [
		[
			"profile/149-Robert-Remien",
			"Phone-clicked",
			"Phone-clicked 149-Robert-Remien 2125800633 2018-03-09",
			"1",
			"0",
			"0.0"
		]
	],
	"total_results": 1,
	"total_all_results": {
		"ga:totalEvents": "1",
		"ga:eventValue": "0",
		"ga:avgEventValue": "0.0"
	}
}
```

### HTTP request
`GET https://lighthouse.lgbt/api/v1/button_clicks`

Parameter | Description
--------- | -----------
button | GA event category. Button events are `Contact-button`, `Specialties-button`, Specialties-button
profile | GA event action. Profiles are formatted as `profile/id-name-lastname`
start_date | Defaults to today
end_date | Defaults to today
page* | Page of results
per_page* | Results per page

## search_criteria

> Example response:

```json
{
	"rows": [
		[
			"SearchKey",
			"dentist",
			"15",
			"5.0"
		]
	],
	"total_results": 1,
	"total_all_results": {
		"ga:searchResultViews": "15",
		"ga:avgSearchResultViews": "5.0"
	}
}
```

Internal search metrics
### HTTP request
`GET https://lighthouse.lgbt/api/v1/search_criteria`

Parameter | Description
--------- | -----------
category | Can be `SearchKey` or `Zipcode`
start_date | Defaults to today
end_date | Defaults to today
page* | Page of results
per_page* | Results per page

## time_spent_on_page

> Example response:

```json
{
	"rows": [
		[
			"/",
			"2105.0",
			"18.963963963963963"
		]
	],
	"total_results": 1,
	"total_all_results": {
		"ga:timeOnPage": "2105.0",
		"ga:avgTimeOnPage": "18.963963963963963"
	}
}
```

### HTTP request
`GET https://lighthouse.lgbt/api/v1/time_spent_on_page`

Parameter | Description
--------- | -----------
user_path | Relative URL. Defaults to `/`
start_date | Defaults to today
end_date | Defaults to today
page* | Page of results
per_page* | Results per page

## direct_vs_referral_visits

> Example response:

```json
{
	"rows": [
		[
			"(direct)",
			"(none)",
			"(direct) / (none)",
			"0"
		]
	],
	"total_results": 15,
	"total_all_results": {
		"ga:organicSearches": "0"
	}
}
```

### HTTP request
`GET https://lighthouse.lgbt/api/v1/direct_vs_referral_visits`

Parameter | Description
--------- | -----------
start_date | Defaults to today
end_date | Defaults to today
page* | Page of results
per_page* | Results per page

## number_of_new_sessions

> Example response:

```json
{
	"rows": [
		[
			"20180309",
			"68.80733944954129"
		]
	],
	"total_results": 1,
	"total_all_results": {
		"ga:percentNewSessions": "68.80733944954129"
	}
}
```

### HTTP request
`GET https://lighthouse.lgbt/api/v1/number_of_new_sessions`

Parameter | Description
--------- | -----------
start_date | Defaults to today
end_date | Defaults to today
page* | Page of results
per_page* | Results per page

## bounce_rate

> Example response:

```json
{
	"rows": [
		[
			"20180309",
			"24",
			"22.018348623853214"
		]
	],
	"total_results": 1,
	"total_all_results": {
		"ga:bounces": "24",
		"ga:bounceRate": "22.018348623853214"
	}
}
```

### HTTP request
`GET https://lighthouse.lgbt/api/v1/bounce_rate`

Parameter | Description
--------- | -----------
start_date | Defaults to today
end_date | Defaults to today
page* | Page of results
per_page* | Results per page
