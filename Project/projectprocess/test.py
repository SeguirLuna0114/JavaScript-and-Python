res = { 
     "kind": "youtube#videoListResponse",
     "etag": "\"UCBpFjp2h75_b92t44sqraUcyu0/sDAlsG9NGKfr6v5AlPZKSEZdtqA\"",
     "videos": [
{
       "id": "7lCDEYXw3mM",
       "kind": "youtube#video",
       "etag": "\"UCBpFjp2h75_b92t44sqraUcyu0/iYynQR8AtacsFUwWmrVaw4Smb_Q\"",
       "snippet": { 
        "publishedAt": "2012-06-20T22:45:24.000Z",
        "channelId": "UC_x5XG1OV2P6uZZ5FSM9Ttw",
        "title": "Google I/O 101: Q&A On Using Google APIs",
        "description": "Antonio Fuentes speaks to us and takes questions on working with Google APIs and OAuth 2.0.",
        "thumbnails": {
         "default": {
          "url": "https://i.ytimg.com/vi/7lCDEYXw3mM/default.jpg"
         },
         "medium": {
          "url": "https://i.ytimg.com/vi/7lCDEYXw3mM/mqdefault.jpg"
         },
         "high": {
          "url": "https://i.ytimg.com/vi/7lCDEYXw3mM/hqdefault.jpg"
         }
        },
        "categoryId": "28"
       },
       "contentDetails": {
        "duration": "PT15M51S",
        "aspectRatio": "RATIO_16_9"
       },
       "statistics": {
        "viewCount": "3057",
        "likeCount": "25",
        "dislikeCount": "0",
        "favoriteCount": "17",
        "commentCount": "12"
       },
       "status": {
        "uploadStatus": "STATUS_PROCESSED",
        "privacyStatus": "PRIVACY_PUBLIC"
       }
      }
     ]
}

# print(res["videos"][0]['snippet']['thumbnails']['default']['url'])