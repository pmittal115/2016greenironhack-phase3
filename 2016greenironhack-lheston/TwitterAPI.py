##twitter api code
from TwitterAPI import TwitterAPI as tw
import json
import sys
import pandas as pd
import numpy as np

##variables
tweetCount = 0

api = tw('7kXWkyNwmrDvwyy6THDxsRRS6', 'jUPVaJuNUyW2GKT3x1rwabwQJjpx2Tsr4NiiiDaUbSLTeZy8x8', '79074669-tlMikTK1RzGQukzlFBbV0kcVXJdMbPmUk4gPCsqVk', 'bQ4xHOXEd1o9ScDmn029nqemS8ZJSZU3ToO1aVyka2tjR')

###r = api.request('statuses/filter', {'locations':'-91.94,35.14,-80.8,42.21', 'lang':'eng', 'q':['fresh','vegtables','farmers','market']})
###r = api.request('statuses/filter', {'locations':'-91.94,35.14,-80.8,42.21', 'q':['fresh']})
r = api.request('statuses/filter', {'geocode':'40.665137,-84.919308,1mi', 'q':['fresh']})
for item in r:
        #print item
        tweetCount+=1

        #convert to sring
        tweet = json.dumps(item)

        #parse
        tweet = json.loads(tweet)

        row = (
			tweet['id'], #tweetID
	        tweet['created_at'], #tweet time
	        tweet['user']['id_str'], #tweet_author_id
	        tweet['lang'], # tweet_language
	        tweet['geo'], #tweet geo
	        tweet['text'], #tweet text
	        tweet['coordinates'] #coordinates
        )
        	
        values = [(value.encode('utf8') if hasattr(value, 'encode') else value) for value in row]
        #values = pd.dataframe(values)
        print values