# Crawling OLX Kecamatans Data 

## Why ? 

We need to get the Data for kecamatans for Chatting Function. Serve it as json. 

## How

We can try to get the API for kecamatans in olx by using the inspect method in the browser, in this case we will use Chromium Browser. 

## Steps 

Here we will inspect the OLX Kecamatans Data. We need to open the OLX webpage https://www.olx.co.id/

After we type the inspect we can try to scrap the API and then we can get the API value for that  


### How to try to get the endpoint

![click_button](/home/gricowijaya/Documents/Cakeplabs/Task/20_taskTwentyCrawlingOLXKecamatansData/gotonetworkinspect.png) 

The above endpoint is acquired by using the inspect mode with the `network` section just like the images below   


![network_inspect](/home/gricowijaya/Documents/Cakeplabs/Task/20_taskTwentyCrawlingOLXKecamatansData/gotonetworkinspect.png) 

After that we can try to search the possible api endpoint 

![api_path](/home/gricowijaya/Documents/Cakeplabs/Task/20_taskTwentyCrawlingOLXKecamatansData/api_path.png) 

Then we can get the value from the api path using the inspect_kecamatans

![inspect_kecamatans](/home/gricowijaya/Documents/Cakeplabs/Task/20_taskTwentyCrawlingOLXKecamatansData/inspect_kecamatans.png) 

After trying to scrap the data we can try to perform a request in POSTMAN just for testing 

possible endpoint for testing :

1. https://www.olx.co.id/api/locations/autocomplete?input=Cimahi%20Utara&limit=5                                                                                         
2. https://www.olx.co.id/api/locations/5001315/path                                                                                                                      
3. https://www.olx.co.id/api/bxp/searches                                                                                                                                
4. https://www.olx.co.id/api/bxp/bundles?locationId=5001315&locationLatitude=-6.8633153&locationLongitude=107.5564326&platform=web-desktop&sessionId=1817ec9f184xc7670e1
5. https://www.olx.co.id/api/locations/4000225/path
6. https://www.olx.co.id/api/locations/popular?limit=5&type=NEIGHBOURHOOD&parent=4000225

After we try to perform request so we can test the API path by just guessing the structure, if the id in the front is using the `1` prefix that means it's a country, Hence the id with `5` prefix is for the neighbourhood. we can try to change the neighbourhood id with the id of 5000001.

https://www.olx.co.id/api/locations/5000001/path

We will get the responds such as the JSON snippets below.

```JSON
{
    "data": [
        {
            "id": 5000001,
            "name": "Abiansemal",
            "type": "NEIGHBOURHOOD",
            "longitude": 115.2244853,
            "latitude": -8.5584335,
            "parentId": 4000217,
            "addressComponents": [
                {
                    "id": 1000001,
                    "type": "COUNTRY",
                    "name": "Indonesia",
                    "latitude": -6.21462,
                    "longitude": 106.84513,
                    "order": 100
                },
                {
                    "id": 2000002,
                    "type": "STATE",
                    "name": "Bali",
                    "latitude": -6.21462,
                    "longitude": 106.84513,
                    "order": 200
                },
                {
                    "id": 4000217,
                    "type": "CITY",
                    "name": "Kab. Badung",
                    "latitude": -8.61561,
                    "longitude": 115.12964,
                    "order": 300
                },
                {
                    "id": 5000001,
                    "type": "NEIGHBOURHOOD",
                    "name": "Abiansemal",
                    "latitude": -8.5584335,
                    "longitude": 115.2244853,
                    "order": 400
                }
            ]
        },
        {
            "id": 4000217,
            "name": "Kab. Badung",
            "type": "CITY",
            "longitude": 115.12964,
            "latitude": -8.61561,
            "parentId": 2000002,
            "addressComponents": [
                {
                    "id": 1000001,
                    "type": "COUNTRY",
                    "name": "Indonesia",
                    "latitude": -6.21462,
                    "longitude": 106.84513,
                    "order": 100
                },
                {
                    "id": 2000002,
                    "type": "STATE",
                    "name": "Bali",
                    "latitude": -6.21462,
                    "longitude": 106.84513,
                    "order": 200
                },
                {
                    "id": 4000217,
                    "type": "CITY",
                    "name": "Kab. Badung",
                    "latitude": -8.61561,
                    "longitude": 115.12964,
                    "order": 300
                }
            ]
        },
        {
            "id": 2000002,
            "name": "Bali",
            "type": "STATE",
            "longitude": 106.84513,
            "latitude": -6.21462,
            "parentId": 1000001,
            "addressComponents": [
                {
                    "id": 1000001,
                    "type": "COUNTRY",
                    "name": "Indonesia",
                    "latitude": -6.21462,
                    "longitude": 106.84513,
                    "order": 100
                },
                {
                    "id": 2000002,
                    "type": "STATE",
                    "name": "Bali",
                    "latitude": -6.21462,
                    "longitude": 106.84513,
                    "order": 200
                }
            ]
        },
        {
            "id": 1000001,
            "name": "Indonesia",
            "type": "COUNTRY",
            "longitude": 106.84513,
            "latitude": -6.21462,
            "addressComponents": [
                {
                    "id": 1000001,
                    "type": "COUNTRY",
                    "name": "Indonesia",
                    "latitude": -6.21462,
                    "longitude": 106.84513,
                    "order": 100
                }
            ]
        }
    ],
    "metadata": {},
    "empty": false
}
```

As we can see the above type there's `addressComponents` parameter in the NEIGHBOURHOOD type of locations.   
