#/Users/Loomis/Desktop/DataProject2CNIT559
#local.csv
#Prices_taxes.csv
import pandas as pd 
import numpy as np 

local = pd.read_csv("/Users/Loomis/Desktop/DataProject2CNIT559/local.csv")

prices = pd.read_csv("/Users/Loomis/Desktop/DataProject2CNIT559/Prices_taxes.csv")

#filter data columns
prices = prices[['State', 'County', 'MILK_PRICE10', 'SODA_PRICE10', 'MILK_SODA_PRICE10']]
local = local[['State', 'County', 'VEG_FARMS07', 'FRESHVEG_FARMS07', 'BERRY_FARMS07', 'GHVEG_FARMS07']]


#normalize values for prices
#Along 0-1 scale
#formula (i - xmin) / (xmax - xmin)
prices['NormMilk'] = ((prices.MILK_PRICE10 - min(prices.MILK_PRICE10)) / (max(prices.MILK_PRICE10) - min(prices.MILK_PRICE10)))
prices['NormSoda'] = ((prices.SODA_PRICE10 - min(prices.SODA_PRICE10)) / (max(prices.SODA_PRICE10) - min(prices.SODA_PRICE10)))
prices['NormSodaMILK'] = ((prices.MILK_SODA_PRICE10 - min(prices.MILK_SODA_PRICE10)) / (max(prices.MILK_SODA_PRICE10) - min(prices.MILK_SODA_PRICE10)))
prices['AvgNormPrice'] = (prices.NormMilk + prices.NormSodaMILK + prices.NormSoda) / 3

#normalize values for local
local['NormVegFarm'] = ((local.VEG_FARMS07 - min(local.VEG_FARMS07)) / (max(local.VEG_FARMS07) - min(local.VEG_FARMS07)))
local['NormFreshVeg'] = ((local.FRESHVEG_FARMS07 - min(local.FRESHVEG_FARMS07)) / (max(local.FRESHVEG_FARMS07) - min(local.FRESHVEG_FARMS07)))
local['NormBerry'] = ((local.BERRY_FARMS07 - min(local.BERRY_FARMS07)) / (max(local.BERRY_FARMS07) - min(local.BERRY_FARMS07)))
local['NormGHVEG'] = ((local.GHVEG_FARMS07 - min(local.GHVEG_FARMS07)) / (max(local.GHVEG_FARMS07) - min(local.GHVEG_FARMS07)))
local['AvgNormLocal'] = (local.NormVegFarm + local.NormFreshVeg + local.NormBerry + local.NormGHVEG) / 4


#join values
final_values = pd.merge(prices, local, on=['State', 'County'], how='inner')

#print final_values
final_values.to_csv('normValue.csv', encoding='utf-8')
