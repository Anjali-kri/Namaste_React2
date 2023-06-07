import React from "react";
import ReactDOM  from "react-dom/client";

/** 
 * Header
 * -logo
 * -nav items
 * Body
 * -search
 * -restaurrantContainer
 *  - RestaurantCrds
 *    -img
 *    - name of res, star rating, couisines, delevery time stc
 * Footer
 * -CopyRight
 * - Links
 * -Address
 * -Contact
*/

const Header = () => {
    return (
        <div className="Header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li> 
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const RestaurantCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId, name, cuisines, totalRatingsString, costForTwo, deleveryTime} = resData?. data;
    return (
        <div className="RestaurantCard">
            <img className="res-logo"
                alt="res-logo"
                src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(" , ")}</h4>
            <h4>{totalRatingsString}</h4>
            <h4>{costForTwo / 100}</h4>
            <h4>{deleveryTime}</h4>


            <h4>38m</h4>
        </div>
    )
}


const resList = [
    {   
    "type": "restaurant",
    "data": {
        "type": "F",
        "id": "483009",
        "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
        "uuid": "2a38d424-6a83-4b84-92a0-c0f2ed0f5efc",
        "city": "79",
        "area": "Khajpura",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "ajfqjytbxd6dajl7vxzl",
        "cuisines": [
        "Desserts",
        "Ice Cream",
        "Ice Cream Cakes"
        ],
        "tags": [
        
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 26,
        "minDeliveryTime": 26,
        "maxDeliveryTime": 26,
        "slaString": "26 MINS",
        "lastMileTravel": 7.699999809265137,
        "slugs": {
        "restaurant": "kwality-wall’s-frozen-dessert-&-ice-cream-shop-khajpura-khajpura",
        "city": "patna"
        },
        "cityState": "79",
        "address": "SALTWATER: A/16, ASHOKPURI COLONY, KHAJPURA, PATNA, KARANPURA, PATNA SADAR , PATNA, BIHAR- 800014 (HUL- I280206P574)",
        "locality": "Ashokpuri Colony",
        "parentId": 582,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
        
        ],
        "ribbon": [
        {
            "type": "PROMOTED"
        }
        ],
        "chain": [
        
        ],
        "feeDetails": {
        "fees": [
            {
            "name": "time",
            "fee": 0,
            "message": ""
            },
            {
            "name": "distance",
            "fee": 4400,
            "message": ""
            },
            {
            "name": "special",
            "fee": 0,
            "message": ""
            }
        ],
        "totalFees": 4400,
        "message": "",
        "title": "Delivery Charge",
        "amount": "4400",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=7043566~p=1~eid=00000188-96f2-34a1-0704-4b9300e00132",
        "badges": {
        "imageBased": [
            
        ],
        "textBased": [
            
        ],
        "textExtendedBadges": [
            
        ]
        },
        "lastMileTravelString": "7.6 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "483009",
        "deliveryTime": 26,
        "minDeliveryTime": 26,
        "maxDeliveryTime": 26,
        "lastMileTravel": 7.699999809265137,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.6",
        "totalRatings": 1000,
        "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
        "type": "F",
        "id": "242395",
        "name": "Ram Babu Restaurant",
        "uuid": "d681e274-d851-4cd9-ba53-8cfe1810572d",
        "city": "79",
        "area": "Kankarbagh",
        "totalRatingsString": "5000+ ratings",
        "cloudinaryImageId": "mq1vlwbzjanzdeukja3d",
        "cuisines": [
        "Chinese",
        "North Indian",
        "Biryani"
        ],
        "tags": [
        
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 25,
        "minDeliveryTime": 25,
        "maxDeliveryTime": 25,
        "slaString": "25 MINS",
        "lastMileTravel": 0.6000000238418579,
        "slugs": {
        "restaurant": "ram-babu-restaurant-kankarbagh-kankarbagh",
        "city": "patna"
        },
        "cityState": "79",
        "address": "Chandmadi road,Kankarbagh,patna - 800020",
        "locality": "Chandmadi road",
        "parentId": 166239,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
        
        ],
        "chain": [
        
        ],
        "feeDetails": {
        "fees": [
            {
            "name": "time",
            "fee": 0,
            "message": ""
            },
            {
            "name": "distance",
            "fee": 2100,
            "message": ""
            },
            {
            "name": "special",
            "fee": 0,
            "message": ""
            }
        ],
        "totalFees": 2100,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2100",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [
            
        ],
        "textBased": [
            
        ],
        "textExtendedBadges": [
            
        ]
        },
        "lastMileTravelString": "0.6 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
        },
        "sla": {
        "restaurantId": "242395",
        "deliveryTime": 25,
        "minDeliveryTime": 25,
        "maxDeliveryTime": 25,
        "lastMileTravel": 0.6000000238418579,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.5",
        "totalRatings": 5000,
        "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
        "type": "F",
        "id": "88781",
        "name": "Sujata Family Restaurant",
        "uuid": "3ac5f62e-fca8-4c33-8fdc-4603804bb14a",
        "city": "79",
        "area": "Fraser Road",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "np13tsnfrxylkrk1ykm5",
        "cuisines": [
        "Mughlai",
        "Chinese",
        "North Indian"
        ],
        "tags": [
        
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 24,
        "minDeliveryTime": 24,
        "maxDeliveryTime": 24,
        "slaString": "24 MINS",
        "lastMileTravel": 2.700000047683716,
        "slugs": {
        "restaurant": "sujata-family-restaurant-fraser-road-fraser-road",
        "city": "patna"
        },
        "cityState": "79",
        "address": "Hotel Mayur, Fraser Road Area, Patna",
        "locality": "",
        "parentId": 196672,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
        
        ],
        "chain": [
        
        ],
        "feeDetails": {
        "fees": [
            {
            "name": "time",
            "fee": 0,
            "message": ""
            },
            {
            "name": "distance",
            "fee": 2100,
            "message": ""
            },
            {
            "name": "special",
            "fee": 0,
            "message": ""
            }
        ],
        "totalFees": 2100,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2100",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [
            
        ],
        "textBased": [
            
        ],
        "textExtendedBadges": [
            
        ]
        },
        "lastMileTravelString": "2.7 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
        },
        "sla": {
        "restaurantId": "88781",
        "deliveryTime": 24,
        "minDeliveryTime": 24,
        "maxDeliveryTime": 24,
        "lastMileTravel": 2.700000047683716,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.5",
        "totalRatings": 10000,
        "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
        "type": "F",
        "id": "499634",
        "name": "Thali Express",
        "uuid": "e3bc2fb4-f52d-4f2e-94f3-b10709684234",
        "city": "79",
        "area": "Kidwaipuri",
        "totalRatingsString": "Too Few Ratings",
        "cloudinaryImageId": "zhso1ytgkbbz5eec3jf0",
        "cuisines": [
        "Thalis",
        "Biryani",
        "Chinese"
        ],
        "tags": [
        
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 35,
        "minDeliveryTime": 35,
        "maxDeliveryTime": 35,
        "slaString": "35 MINS",
        "lastMileTravel": 4.199999809265137,
        "slugs": {
        "restaurant": "thali-express-srikrishnapuri-srikrishnapuri-2",
        "city": "patna"
        },
        "cityState": "79",
        "address": "Parus Lok Commercial Complex, Boring Road Crossing, Patna",
        "locality": "Commercial Complex",
        "parentId": 10007,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
        
        ],
        "ribbon": [
        {
            "type": "PROMOTED"
        }
        ],
        "chain": [
        
        ],
        "feeDetails": {
        "fees": [
            {
            "name": "time",
            "fee": 0,
            "message": ""
            },
            {
            "name": "distance",
            "fee": 2600,
            "message": ""
            },
            {
            "name": "special",
            "fee": 0,
            "message": ""
            }
        ],
        "totalFees": 2600,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2600",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=7033221~p=4~eid=00000188-96f2-34a1-0704-4b9400e0042c",
        "badges": {
        "imageBased": [
            
        ],
        "textBased": [
            
        ],
        "textExtendedBadges": [
            
        ]
        },
        "lastMileTravelString": "4.1 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80",
        "discountTag": "",
        "headerTypeV2": 0
        },
        "sla": {
        "restaurantId": "499634",
        "deliveryTime": 35,
        "minDeliveryTime": 35,
        "maxDeliveryTime": 35,
        "lastMileTravel": 4.199999809265137,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "--",
        "totalRatings": 0,
        "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
        "type": "F",
        "id": "591085",
        "name": " 0612 Road Chef ( Kankarbagh)",
        "uuid": "60f81790-ef98-41f5-b195-1a0c9fca266f",
        "city": "79",
        "area": "Kankarbagh",
        "totalRatingsString": "5000+ ratings",
        "cloudinaryImageId": "qo1ypqreeaulytd7cmgr",
        "cuisines": [
        "Indian",
        "Tandoor",
        "Chinese",
        "Biryani"
        ],
        "tags": [
        
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 22,
        "minDeliveryTime": 22,
        "maxDeliveryTime": 22,
        "slaString": "22 MINS",
        "lastMileTravel": 1.2999999523162842,
        "slugs": {
        "restaurant": "0612-road-chef-online-kankarbagh-kankarbagh",
        "city": "patna"
        },
        "cityState": "79",
        "address": "SANJAY NAGAR ROAD NO.10 NEAR BY PASS ROAD KANKARBAGH",
        "locality": "Sanjay Nagar Road",
        "parentId": 353495,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
        
        ],
        "chain": [
        
        ],
        "feeDetails": {
        "fees": [
            {
            "name": "time",
            "fee": 0,
            "message": ""
            },
            {
            "name": "distance",
            "fee": 2100,
            "message": ""
            },
            {
            "name": "special",
            "fee": 0,
            "message": ""
            }
        ],
        "totalFees": 2100,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2100",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [
            
        ],
        "textBased": [
            
        ],
        "textExtendedBadges": [
            
        ]
        },
        "lastMileTravelString": "1.2 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
        },
        "sla": {
        "restaurantId": "591085",
        "deliveryTime": 22,
        "minDeliveryTime": 22,
        "maxDeliveryTime": 22,
        "lastMileTravel": 1.2999999523162842,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.1",
        "totalRatings": 5000,
        "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
        "type": "F",
        "id": "150950",
        "name": "New Pal Hotel",
        "uuid": "9256b101-1f58-44bf-b153-73968a8292a5",
        "city": "79",
        "area": "Fraser Road",
        "totalRatingsString": "5000+ ratings",
        "cloudinaryImageId": "cadd4qgaodthe0ulvbgv",
        "cuisines": [
        "Indian",
        "Chinese",
        "Tandoor"
        ],
        "tags": [
        
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 25,
        "minDeliveryTime": 25,
        "maxDeliveryTime": 25,
        "slaString": "25 MINS",
        "lastMileTravel": 2.9000000953674316,
        "slugs": {
        "restaurant": "new-pal-hotel-station-road-fraser-road",
        "city": "patna"
        },
        "cityState": "79",
        "address": "Near Hotel City Center, opposite Laxmi Hotel, Station Road , Patna",
        "locality": "Station Road",
        "parentId": 147430,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
        
        ],
        "chain": [
        
        ],
        "feeDetails": {
        "fees": [
            {
            "name": "time",
            "fee": 0,
            "message": ""
            },
            {
            "name": "distance",
            "fee": 2100,
            "message": ""
            },
            {
            "name": "special",
            "fee": 0,
            "message": ""
            }
        ],
        "totalFees": 2100,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2100",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [
            
        ],
        "textBased": [
            
        ],
        "textExtendedBadges": [
            
        ]
        },
        "lastMileTravelString": "2.9 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
        },
        "sla": {
        "restaurantId": "150950",
        "deliveryTime": 25,
        "minDeliveryTime": 25,
        "maxDeliveryTime": 25,
        "lastMileTravel": 2.9000000953674316,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.2",
        "totalRatings": 5000,
        "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
        "type": "F",
        "id": "363373",
        "name": "THE CHEF",
        "uuid": "826186ac-9e85-4d1d-a207-c155c5a7f545",
        "city": "79",
        "area": "Kankarbagh",
        "totalRatingsString": "20+ ratings",
        "cloudinaryImageId": "uedkumdrzciutpadlkoe",
        "cuisines": [
        "North Indian"
        ],
        "tags": [
        
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 33,
        "minDeliveryTime": 33,
        "maxDeliveryTime": 33,
        "slaString": "33 MINS",
        "lastMileTravel": 1.7000000476837158,
        "slugs": {
        "restaurant": "the-chef-kankarbagh-kankarbagh",
        "city": "patna"
        },
        "cityState": "79",
        "address": "ROAD NO.-14, ASHOK NAGAR NEAR BANK OF BARODA, KANKARBAGH,  Patna, Bihar800020",
        "locality": "Lohia Nagar",
        "parentId": 2585,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
        
        ],
        "ribbon": [
        {
            "type": "PROMOTED"
        }
        ],
        "chain": [
        
        ],
        "feeDetails": {
        "fees": [
            {
            "name": "time",
            "fee": 0,
            "message": ""
            },
            {
            "name": "distance",
            "fee": 2100,
            "message": ""
            },
            {
            "name": "special",
            "fee": 0,
            "message": ""
            }
        ],
        "totalFees": 2100,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2100",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=7032911~p=7~eid=00000188-96f2-34a1-0704-4b9500e0074d",
        "badges": {
        "imageBased": [
            
        ],
        "textBased": [
            
        ],
        "textExtendedBadges": [
            
        ]
        },
        "lastMileTravelString": "1.7 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80",
        "discountTag": "",
        "headerTypeV2": 0
        },
        "sla": {
        "restaurantId": "363373",
        "deliveryTime": 33,
        "minDeliveryTime": 33,
        "maxDeliveryTime": 33,
        "lastMileTravel": 1.7000000476837158,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "2.2",
        "totalRatings": 20,
        "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
        "type": "F",
        "id": "98977",
        "name": "Food Hut",
        "uuid": "d3263e32-6088-4695-8d5e-b9e9feddc908",
        "city": "79",
        "area": "Kankarbagh",
        "totalRatingsString": "5000+ ratings",
        "cloudinaryImageId": "k55fh0ddyfph39nhpflp",
        "cuisines": [
        "Indian",
        "Chinese"
        ],
        "tags": [
        
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "slaString": "23 MINS",
        "lastMileTravel": 2.200000047683716,
        "slugs": {
        "restaurant": "food-hut-kankarbagh-kankarbagh",
        "city": "patna"
        },
        "cityState": "79",
        "address": "Kankarbagh Main Road, Kankarbagh, Patna",
        "locality": "Kankarbagh Main Road",
        "parentId": 81434,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
        
        ],
        "chain": [
        
        ],
        "feeDetails": {
        "fees": [
            {
            "name": "time",
            "fee": 0,
            "message": ""
            },
            {
            "name": "distance",
            "fee": 2100,
            "message": ""
            },
            {
            "name": "special",
            "fee": 0,
            "message": ""
            }
        ],
        "totalFees": 2100,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2100",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [
            
        ],
        "textBased": [
            
        ],
        "textExtendedBadges": [
            
        ]
        },
        "lastMileTravelString": "2.2 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
        },
        "sla": {
        "restaurantId": "98977",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "lastMileTravel": 2.200000047683716,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.6",
        "totalRatings": 5000,
        "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
        "type": "F",
        "id": "200489",
        "name": "Puja Hotel",
        "uuid": "5ac7f172-6021-4e14-8cef-15331c241ada",
        "city": "79",
        "area": "Kankarbagh",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "xegptgj8oshl3fy1m6ku",
        "cuisines": [
        "Chinese",
        "Indian"
        ],
        "tags": [
        
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 19,
        "minDeliveryTime": 19,
        "maxDeliveryTime": 19,
        "slaString": "19 MINS",
        "lastMileTravel": 1,
        "slugs": {
        "restaurant": "puja-hotel-kankarbagh-kankarbagh",
        "city": "patna"
        },
        "cityState": "79",
        "address": "Bank of India ATM, Station Rd, Karbigahiya, Khasmahal, Karbigahiya, Patna, Bihar, India",
        "locality": "Karbigahiya Road",
        "parentId": 161734,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
        
        ],
        "chain": [
        
        ],
        "feeDetails": {
        "fees": [
            {
            "name": "time",
            "fee": 0,
            "message": ""
            },
            {
            "name": "distance",
            "fee": 2100,
            "message": ""
            },
            {
            "name": "special",
            "fee": 0,
            "message": ""
            }
        ],
        "totalFees": 2100,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2100",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [
            
        ],
        "textBased": [
            
        ],
        "textExtendedBadges": [
            
        ]
        },
        "lastMileTravelString": "1 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50",
        "discountTag": "",
        "headerTypeV2": 0
        },
        "sla": {
        "restaurantId": "200489",
        "deliveryTime": 19,
        "minDeliveryTime": 19,
        "maxDeliveryTime": 19,
        "lastMileTravel": 1,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.5",
        "totalRatings": 100,
        "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
        "type": "F",
        "id": "688887",
        "name": "OYK YUMMS!",
        "uuid": "43a5d1a7-4221-4bd3-abf8-7b4ac96ba47b",
        "city": "79",
        "area": "Srikrishnapuri",
        "totalRatingsString": "50+ ratings",
        "cloudinaryImageId": "7d06c2081fdc2bd0101ce2619c499040",
        "cuisines": [
        "Chinese",
        "North Indian"
        ],
        "tags": [
        
        ],
        "costForTwo": 15000,
        "costForTwoString": "₹150 FOR TWO",
        "deliveryTime": 31,
        "minDeliveryTime": 31,
        "maxDeliveryTime": 31,
        "slaString": "31 MINS",
        "lastMileTravel": 5,
        "slugs": {
        "restaurant": "oyk-yumms-srikrishnapuri-srikrishnapuri",
        "city": "patna"
        },
        "cityState": "79",
        "address": "J495+R#W, Shivpuri, Rajbansi Nagar, Patna, Bihar 800013, India",
        "locality": "Shivpuri",
        "parentId": 397659,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
        
        ],
        "ribbon": [
        {
            "type": "PROMOTED"
        }
        ],
        "chain": [
        
        ],
        "feeDetails": {
        "fees": [
            {
            "name": "distance",
            "fee": 3100,
            "message": ""
            },
            {
            "name": "time",
            "fee": 0,
            "message": ""
            },
            {
            "name": "special",
            "fee": 0,
            "message": ""
            }
        ],
        "totalFees": 3100,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3100",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=7034709~p=10~eid=00000188-96f2-34a1-0704-4b9600e00a6d",
        "badges": {
        "imageBased": [
            
        ],
        "textBased": [
            
        ],
        "textExtendedBadges": [
            
        ]
        },
        "lastMileTravelString": "5 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50",
        "discountTag": "",
        "headerTypeV2": 0
        },
        "sla": {
        "restaurantId": "688887",
        "deliveryTime": 31,
        "minDeliveryTime": 31,
        "maxDeliveryTime": 31,
        "lastMileTravel": 5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "3.5",
        "totalRatings": 50,
        "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
        "type": "F",
        "id": "350701",
        "name": "Desi Tadka Family Resturant",
        "uuid": "eabb4da9-1f73-47bd-bbfe-96941bd4e578",
        "city": "79",
        "area": "Golambar",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "zcyjwznquzdovqypenhz",
        "cuisines": [
        "Biryani",
        "Indian",
        "Chinese"
        ],
        "tags": [
        
        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 27,
        "minDeliveryTime": 27,
        "maxDeliveryTime": 27,
        "slaString": "27 MINS",
        "lastMileTravel": 2.700000047683716,
        "slugs": {
        "restaurant": "desi-tadka-family-restaurant-fraser-road-fraser-road",
        "city": "patna"
        },
        "cityState": "79",
        "address": "Near Komal kunal hotel, jamal Road, Patna, Bihar",
        "locality": "Budh Vihar",
        "parentId": 71268,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
        
        ],
        "chain": [
        
        ],
        "feeDetails": {
        "fees": [
            {
            "name": "distance",
            "fee": 2100,
            "message": ""
            },
            {
            "name": "time",
            "fee": 0,
            "message": ""
            },
            {
            "name": "special",
            "fee": 0,
            "message": ""
            }
        ],
        "totalFees": 2100,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2100",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [
            
        ],
        "textBased": [
            
        ],
        "textExtendedBadges": [
            
        ]
        },
        "lastMileTravelString": "2.7 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50",
        "discountTag": "",
        "headerTypeV2": 0
        },
        "sla": {
        "restaurantId": "350701",
        "deliveryTime": 27,
        "minDeliveryTime": 27,
        "maxDeliveryTime": 27,
        "lastMileTravel": 2.700000047683716,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.8",
        "totalRatings": 1000,
        "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
        "type": "F",
        "id": "378987",
        "name": "Kakkoo's Kitchen",
        "uuid": "d4a870cd-0063-4cd4-99c6-8fb7667c29b4",
        "city": "79",
        "area": "Kankarbagh",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "pyy1xl1bv76dgqttd6xn",
        "cuisines": [
        "Indian",
        "Biryani"
        ],
        "tags": [
        
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 21,
        "minDeliveryTime": 21,
        "maxDeliveryTime": 21,
        "slaString": "21 MINS",
        "lastMileTravel": 1.600000023841858,
        "slugs": {
        "restaurant": "kakkoo's-kitchen-kankarbagh-kankarbagh",
        "city": "patna"
        },
        "cityState": "79",
        "address": "B/41, People's Cooperative Colony, People Cooperative Colony, Kankarbagh, Patna, Bihar 800020, India",
        "locality": "People's Cooperative Colony",
        "parentId": 113817,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
        
        ],
        "chain": [
        
        ],
        "feeDetails": {
        "fees": [
            {
            "name": "time",
            "fee": 0,
            "message": ""
            },
            {
            "name": "distance",
            "fee": 2100,
            "message": ""
            },
            {
            "name": "special",
            "fee": 0,
            "message": ""
            }
        ],
        "totalFees": 2100,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2100",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [
            
        ],
        "textBased": [
            
        ],
        "textExtendedBadges": [
            
        ]
        },
        "lastMileTravelString": "1.6 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50",
        "discountTag": "",
        "headerTypeV2": 0
        },
        "sla": {
        "restaurantId": "378987",
        "deliveryTime": 21,
        "minDeliveryTime": 21,
        "maxDeliveryTime": 21,
        "lastMileTravel": 1.600000023841858,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.6",
        "totalRatings": 100,
        "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
        "type": "F",
        "id": "284359",
        "name": "Lazeez Biryani",
        "uuid": "5449b722-3574-4c00-a3d0-e5c198db5372",
        "city": "79",
        "area": "Kankarbagh",
        "totalRatingsString": "500+ ratings",
        "cloudinaryImageId": "yqritzxwcq5uiq1sh9ol",
        "cuisines": [
        "Biryani",
        "Chinese",
        "Indian"
        ],
        "tags": [
        
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "slaString": "23 MINS",
        "lastMileTravel": 1.7000000476837158,
        "slugs": {
        "restaurant": "lazeez-biryani-kankarbagh-kankarbagh",
        "city": "patna"
        },
        "cityState": "79",
        "address": "PURVI ASHOK NAGAR  ROAD  NO  14  P O  LOHIYA  NAGAR,  P S  KANKARBAGH  PATNA  SADAR  PATNA  BIHAR  800020",
        "locality": "Purvi Ashok Nagar Road",
        "parentId": 18798,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
        
        ],
        "ribbon": [
        {
            "type": "PROMOTED"
        }
        ],
        "chain": [
        
        ],
        "feeDetails": {
        "fees": [
            {
            "name": "time",
            "fee": 0,
            "message": ""
            },
            {
            "name": "distance",
            "fee": 2100,
            "message": ""
            },
            {
            "name": "special",
            "fee": 0,
            "message": ""
            }
        ],
        "totalFees": 2100,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2100",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=7032910~p=13~eid=00000188-96f2-34a1-0704-4b9700e00d1b",
        "badges": {
        "imageBased": [
            
        ],
        "textBased": [
            
        ],
        "textExtendedBadges": [
            
        ]
        },
        "lastMileTravelString": "1.7 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80",
        "discountTag": "",
        "headerTypeV2": 0
        },
        "sla": {
        "restaurantId": "284359",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "lastMileTravel": 1.7000000476837158,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "2.9",
        "totalRatings": 500,
        "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
        "type": "F",
        "id": "238672",
        "name": "Rajdhani Hotel",
        "uuid": "a5e6707f-1964-47db-8d30-9f43cf19bba3",
        "city": "79",
        "area": "Fraser Road",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "drgphrpjbnqcwjsxaiod",
        "cuisines": [
        "Chinese",
        "Indian",
        "Tandoor"
        ],
        "tags": [
        
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 21,
        "minDeliveryTime": 21,
        "maxDeliveryTime": 21,
        "slaString": "21 MINS",
        "lastMileTravel": 2.9000000953674316,
        "slugs": {
        "restaurant": "rajdhani-hotel-fraser-road-fraser-road",
        "city": "patna"
        },
        "cityState": "79",
        "address": "Station Road, Patna Junction, Patna - 800001",
        "locality": "Station Road",
        "parentId": 165478,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
        
        ],
        "chain": [
        
        ],
        "feeDetails": {
        "fees": [
            {
            "name": "distance",
            "fee": 2100,
            "message": ""
            },
            {
            "name": "time",
            "fee": 0,
            "message": ""
            },
            {
            "name": "special",
            "fee": 0,
            "message": ""
            }
        ],
        "totalFees": 2100,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2100",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [
            
        ],
        "textBased": [
            
        ],
        "textExtendedBadges": [
            
        ]
        },
        "lastMileTravelString": "2.9 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80",
        "discountTag": "",
        "headerTypeV2": 0
        },
        "sla": {
        "restaurantId": "238672",
        "deliveryTime": 21,
        "minDeliveryTime": 21,
        "maxDeliveryTime": 21,
        "lastMileTravel": 2.9000000953674316,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.4",
        "totalRatings": 1000,
        "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
        "type": "F",
        "id": "81235",
        "name": "KFC",
        "uuid": "e43fd06b-00f2-47c9-a5ca-98233f16c8f1",
        "city": "79",
        "area": "Kankarbagh",
        "totalRatingsString": "5000+ ratings",
        "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
        "cuisines": [
        "Burgers",
        "Biryani",
        "American",
        "Snacks",
        "Fast Food"
        ],
        "tags": [
        
        ],
        "costForTwo": 45000,
        "costForTwoString": "₹450 FOR TWO",
        "deliveryTime": 28,
        "minDeliveryTime": 28,
        "maxDeliveryTime": 28,
        "slaString": "28 MINS",
        "lastMileTravel": 2.200000047683716,
        "slugs": {
        "restaurant": "kfc-chinnilal-mega-mart-test-patna",
        "city": "patna"
        },
        "cityState": "79",
        "address": "KFC Restautant,No-367,Ground Floor, Radhey Shree Patna,  Kankarbagh Main Road,Patna,Bihar-800020",
        "locality": "Bankman Colony",
        "parentId": 547,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
        
        ],
        "chain": [
        
        ],
        "feeDetails": {
        "fees": [
            {
            "name": "distance",
            "fee": 2100,
            "message": ""
            },
            {
            "name": "time",
            "fee": 0,
            "message": ""
            },
            {
            "name": "special",
            "fee": 0,
            "message": ""
            }
        ],
        "totalFees": 2100,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2100",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [
            
        ],
        "textBased": [
            
        ],
        "textExtendedBadges": [
            
        ]
        },
        "lastMileTravelString": "2.2 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50",
        "discountTag": "",
        "headerTypeV2": 0
        },
        "sla": {
        "restaurantId": "81235",
        "deliveryTime": 28,
        "minDeliveryTime": 28,
        "maxDeliveryTime": 28,
        "lastMileTravel": 2.200000047683716,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.9",
        "totalRatings": 5000,
        "new": false
    },
    "subtype": "basic"
    }
]

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="restaurrant-container">
                {
                    resList.map((restaurant) => (<RestaurantCard key={restaurant.data.id} resData={restaurant}/>))
                }
            </div>
        </div>
    )
}


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
