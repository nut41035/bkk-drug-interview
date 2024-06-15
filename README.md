# How to start application

Replace `<GOOGLE_MAPS_API_KEY>` and `<USERNAME-PASSWORD>` from email in 
1. backend/.env
2. frontend/.env.development

makesure your docker deamon is running


run
>docker-compose up --build

go to 
>http://localhost:3000/

# Project Description
This is a Full-stack web application designed for **mobile** use.

The application calculate the shortest path for a user to acquire a requested set of products while traveling between various locations

|              | Stack                         | Image      |
| :----------: | :---------------------------: | :--------: |
|Front end     | ReactJS                       |<img height="50" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png">|
|Backend       | NestJS                        |<img height="50" src="https://github.com/marwin1991/profile-technology-icons/assets/136815194/519bfaf3-c242-431e-a269-876979f05574">|
|Database      | MongoDB                       |<img height="50" src="https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png">|
|Deployment    | Docker & <br/> Docker Compose |<img height="50" src="https://user-images.githubusercontent.com/25181517/117207330-263ba280-adf4-11eb-9b97-0ac5b40bc3be.png">|

# Shortest path calculation
Implemented a pathfinding algorithm using a **priority queue** to find the shortest path based on distance, while also managing a list of products that need to be fulfilled at various stores.

**priority queue**  is initialized using a custom comparator function. 

This function ensures that objects are dequeued based on their **distance in ascending order**.

Algorithm:

1. Query distance from current location to all store (concurrently) and put each in queue
2. Take the first element in the queue (always the shortest accumulated distance)
3. Check if this already fulfill the order
   1. if yes -> return path
   2. if no -> continue to next step
4. Calculate all stores that is not already in the path
   1. fills as many products as possible
   2. add distance to accumulated distance
   3. append store description to the path
5. Back to step 2

# Distance seeding
If we always fire API to google for distances between 2 locations for every store location every time user query

There will be WAY TOO MANY api call to google which will cost a lot of money

So, instead, we only do it one time at seeding before starting the projct.

List of all distance could be calculated via BE API
>POST http://localhost:4000/google-map/seed

With JSON body
```jsonc
{
    "locations": [
         //...list of all location obj...
    ]
}
```
location obj example
```jsonc
{
  //...whatever properties...
  "site_id": "1",
  "location": {
    "type": "Point",
    "coordinates": [
      100.594908, //longtitude
      13.714791   //latitude
    ]
  }
  //...whatever properties...
}
```
Then save it to distances collection. The data look like this
```jsonc
[
    {
        "key": "1-10", // key format with {from.site_id}-{to.site_id}
        "distance": 12646 // distances in meters
    },
    {
        "key": "1-10",
        "distance": 12646
    },
    //...th rest of distances obj...
]
```
