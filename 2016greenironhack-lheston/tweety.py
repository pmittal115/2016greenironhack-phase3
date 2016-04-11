import tweepy as tp
import sqlite3
import pandas as pd 
import numpy as np
import time as t
from geopy.geocoders import Nominatim
import string
from numpy import genfromtxt
from geopy.exc import GeocoderTimedOut
###radius use 15 miles
###use nohup in bash to continuously run

###geo stuff


##tquery
query = 'vegtables OR farmers market OR cheap food'
radius = 500
count = 200
DataSet = pd.DataFrame
loopCount = 0
apCount = 0
dn = []

##read in zipcode file
#zips = pd.read_csv("zips", delim_whitespace=True, header=None, names = ['a'])


#zips = genfromtxt("zips")
zips = genfromtxt("zips")

conn=sqlite3.connect('twit.db')
c = conn.cursor()


#40.665137,-84.919308


def location(zip):
    geolocator = Nominatim()
    t.sleep(5)
    location = do_geocode(zip)
    cordinates = ((location.latitude,location.longitude))
    cordinates = str(cordinates)
    cordinates = cordinates.replace("(","")
    cordinates = cordinates.replace(")","")
    cordinates = cordinates.replace(" ", "")
    return cordinates

def toDataFrame(tweets,zip):

    DataSet = pd.DataFrame()

    
    DataSet['tweetText'] = [tweet.text for tweet in tweets]
    DataSet['tweetID'] = [tweet.id for tweet in tweets]
    DataSet['tweetRetweetCt'] = [tweet.retweet_count for tweet in tweets]
    DataSet['tweetFavoriteCt'] = [tweet.favorite_count for tweet in tweets]
    DataSet['tweetSource'] = [tweet.source for tweet in tweets]
    DataSet['tweetCreated'] = [tweet.created_at for tweet in tweets]
    DataSet['userID'] = [tweet.user.id for tweet in tweets]
    DataSet['userScreen'] = [tweet.user.screen_name for tweet in tweets]
    DataSet['userName'] = [tweet.user.name for tweet in tweets]
    DataSet['userCreateDt'] = [tweet.user.created_at for tweet in tweets]
    DataSet['userDesc'] = [tweet.user.description for tweet in tweets]
    DataSet['userFollowerCt'] = [tweet.user.followers_count for tweet in tweets]
    DataSet['userFriendsCt'] = [tweet.user.friends_count for tweet in tweets]
    DataSet['userLocation'] = [tweet.user.location for tweet in tweets]
    DataSet['userTimezone'] = [tweet.user.time_zone for tweet in tweets]
    DataSet['zipcodeQuery'] = [zip for tweet in tweets]
    #DataSet['lat'] = [tweet.geo.lat for tweet in tweets]

    return DataSet

def curTweepy(inputCode, count, query):
    for items in tp.Cursor(api.search(geocode=inputCode, count=count, q=query)).items():
        return items


def do_geocode(address):
    geolocator = Nominatim()
    try:
        return geolocator.geocode(address, timeout=None)
    except GeocoderTimedOut:
        return do_geocode(address)

def lookUp(results,zip):
    for result in results:
        DataSet = toDataFrame(results,zip)
        return DataSet

auth = tp.OAuthHandler('7kXWkyNwmrDvwyy6THDxsRRS6','jUPVaJuNUyW2GKT3x1rwabwQJjpx2Tsr4NiiiDaUbSLTeZy8x8')
auth.set_access_token('79074669-tlMikTK1RzGQukzlFBbV0kcVXJdMbPmUk4gPCsqVk', 'bQ4xHOXEd1o9ScDmn029nqemS8ZJSZU3ToO1aVyka2tjR')

api = tp.API(auth)

for zip in zips:
#for row, zip in zips.iterrows():
    if (loopCount == 15):
        t.sleep(960)
        loopCount = 0
    loopCount = loopCount + 1
    cordinates = location(zip)
    inputCode = str(cordinates) + ',' + str(radius) + 'mi'
    #inputCode = '{0},{1}mi'.format(cordinates, radius)
    #inputCode = '41.1255471,-85.1949746,400mi'
    results = api.search(geocode=inputCode, count=100, q=query)
    #results = curTweepy(inputCode, count, query)
    #print('results retrieved')
    #print results
    DataSet = pd.DataFrame()
    DataSet = lookUp(results,zip)
    if DataSet is not None:
        DataSet.to_sql(con=conn, name='data', flavor='sqlite', if_exists='append')
    dn.append(DataSet)
    print loopCount


dn = pd.concat(dn, axis=1)
print dn
#dn.to_sql(con=conn, name='data', flavor='sqlite', if_exists='append')







